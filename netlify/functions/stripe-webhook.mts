import type { Context } from "@netlify/functions";

/* ─────────────────────────────────────────────────────────────── */
/* Stripe Webhook → Meta CAPI Purchase                              */
/*                                                                  */
/* Stripe envía un POST a este endpoint cada vez que se completa    */
/* un checkout. Extraemos email/nombre/total/moneda del Session y   */
/* lo forwardeamos a Meta como evento "Purchase" server-side.       */
/*                                                                  */
/* Env vars en Netlify:                                             */
/*   STRIPE_WEBHOOK_SECRET = whsec_... (de Stripe Dashboard)         */
/*   META_PIXEL_ID         = 893679896695698                         */
/*   META_ACCESS_TOKEN     = (token CAPI)                            */
/*   META_TEST_EVENT_CODE  = (opcional, para Probar eventos)         */
/*                                                                  */
/* Configurar el webhook en Stripe:                                 */
/*   URL: https://heatlatam.com/.netlify/functions/stripe-webhook    */
/*   Event: checkout.session.completed                              */
/* ─────────────────────────────────────────────────────────────── */

const GRAPH_VERSION = "v18.0";

async function sha256(value: string): Promise<string> {
  const enc = new TextEncoder();
  const digest = await crypto.subtle.digest("SHA-256", enc.encode(value));
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

const normalize = (s: string) => s.trim().toLowerCase();
const cleanPhone = (s: string) => s.replace(/\D/g, "");

/* ── Verificación de firma Stripe (sin librería) ────────────── */
/* Stripe firma con HMAC-SHA256 el cuerpo + timestamp.            */
/* Header: stripe-signature: t=...,v1=...                          */
async function verifyStripeSignature(
  rawBody: string,
  signatureHeader: string,
  secret: string
): Promise<boolean> {
  const parts = signatureHeader.split(",").reduce<Record<string, string>>(
    (acc, kv) => {
      const [k, v] = kv.split("=");
      if (k && v) acc[k] = v;
      return acc;
    },
    {}
  );
  const timestamp = parts["t"];
  const v1 = parts["v1"];
  if (!timestamp || !v1) return false;

  const signedPayload = `${timestamp}.${rawBody}`;
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(signedPayload)
  );
  const expected = Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  // Constant-time comparison
  if (expected.length !== v1.length) return false;
  let mismatch = 0;
  for (let i = 0; i < expected.length; i++) {
    mismatch |= expected.charCodeAt(i) ^ v1.charCodeAt(i);
  }
  return mismatch === 0;
}

export default async function handler(req: Request, _ctx: Context) {
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const WEBHOOK_SECRET = Netlify.env.get("STRIPE_WEBHOOK_SECRET");
  const PIXEL_ID = Netlify.env.get("META_PIXEL_ID");
  const ACCESS_TOKEN = Netlify.env.get("META_ACCESS_TOKEN");
  const TEST_CODE = Netlify.env.get("META_TEST_EVENT_CODE");

  if (!WEBHOOK_SECRET || !PIXEL_ID || !ACCESS_TOKEN) {
    console.error("[stripe-webhook] env vars faltantes");
    return new Response("server misconfigured", { status: 500 });
  }

  // Stripe necesita el raw body para validar la firma
  const rawBody = await req.text();
  const sigHeader = req.headers.get("stripe-signature");
  if (!sigHeader) {
    return new Response("missing stripe-signature", { status: 400 });
  }

  const valid = await verifyStripeSignature(
    rawBody,
    sigHeader,
    WEBHOOK_SECRET
  );
  if (!valid) {
    console.warn("[stripe-webhook] firma inválida");
    return new Response("invalid signature", { status: 400 });
  }

  let event: any;
  try {
    event = JSON.parse(rawBody);
  } catch {
    return new Response("invalid JSON", { status: 400 });
  }

  // Solo nos interesan los checkouts completados
  if (event.type !== "checkout.session.completed") {
    return new Response(JSON.stringify({ ok: true, ignored: event.type }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  const session = event.data?.object ?? {};
  const customerEmail: string | undefined =
    session.customer_details?.email ?? session.customer_email;
  const customerName: string | undefined = session.customer_details?.name;
  const customerPhone: string | undefined = session.customer_details?.phone;
  const country: string | undefined =
    session.customer_details?.address?.country;
  const city: string | undefined = session.customer_details?.address?.city;
  const amountTotal: number = (session.amount_total ?? 0) / 100; // Stripe envía en centavos
  const currency: string = (session.currency ?? "usd").toUpperCase();
  const stripeSessionId: string = session.id;

  // ── Construir user_data hasheado ─────────────────────────────
  const ud: Record<string, string> = {};
  if (customerEmail) ud.em = await sha256(normalize(customerEmail));
  if (customerPhone) ud.ph = await sha256(cleanPhone(customerPhone));
  if (customerName) {
    const parts = customerName.trim().split(/\s+/);
    if (parts[0]) ud.fn = await sha256(normalize(parts[0]));
    if (parts.length > 1)
      ud.ln = await sha256(normalize(parts.slice(1).join(" ")));
  }
  if (city) ud.ct = await sha256(normalize(city));
  if (country) ud.country = await sha256(normalize(country));
  ud.external_id = await sha256(stripeSessionId);

  // ── Construir Purchase event ─────────────────────────────────
  const metaEvent = {
    event_name: "Purchase",
    event_time: Math.floor((event.created ?? Date.now() / 1000) as number),
    // eventID estable: si el browser usa el mismo eventID (sucess_url query
    // param), Meta deduplica. Por ahora usamos el session ID como eventID
    // — si quieres deduplicar perfecto, pasa eventID en metadata desde el
    // browser y léelo aquí en session.metadata.event_id.
    event_id:
      session.metadata?.fb_event_id ?? `stripe-${stripeSessionId}`,
    event_source_url: session.success_url ?? "https://heatlatam.com",
    action_source: "website",
    user_data: ud,
    custom_data: {
      currency,
      value: amountTotal,
      content_ids: [session.metadata?.plan_slug ?? "unknown"],
      content_type: "product",
      content_name: session.metadata?.plan_name ?? "HEAT Checkout",
      content_category: session.metadata?.plan_category ?? "subscription",
      num_items: 1,
    },
  };

  const payload: Record<string, unknown> = { data: [metaEvent] };
  if (TEST_CODE) payload.test_event_code = TEST_CODE;

  const url = `https://graph.facebook.com/${GRAPH_VERSION}/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const metaResponse = await res.json();
    if (!res.ok) {
      console.error("[stripe-webhook] meta error", metaResponse);
      // Devolver 200 igual para que Stripe no reintente — el problema es de Meta
      return new Response(
        JSON.stringify({ ok: false, meta: metaResponse }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }
    return new Response(
      JSON.stringify({ ok: true, sent: "Purchase", meta: metaResponse }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (e) {
    console.error("[stripe-webhook] fetch error", e);
    return new Response(JSON.stringify({ ok: false, error: String(e) }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export const config = {
  path: "/.netlify/functions/stripe-webhook",
};
