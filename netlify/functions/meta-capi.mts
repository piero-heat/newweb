import type { Context } from "@netlify/functions";

/* ─────────────────────────────────────────────────────────────── */
/* Meta Conversions API · server-side                              */
/*                                                                  */
/* Endpoint genérico al que el browser hace POST con eventos        */
/* deduplicable con el pixel browser. Acepta:                       */
/*                                                                  */
/*   { eventName, eventId, eventSourceUrl, customData, userData }   */
/*                                                                  */
/* Hashea el userData server-side (no confiamos en el browser),     */
/* enriquece con IP + UA + fbc + fbp, y postea al Graph API.        */
/*                                                                  */
/* Env vars requeridos en Netlify:                                  */
/*   META_PIXEL_ID         = 893679896695698                         */
/*   META_ACCESS_TOKEN     = (token CAPI generado en Events Manager)*/
/*   META_TEST_EVENT_CODE  = (opcional, para Probar eventos)         */
/* ─────────────────────────────────────────────────────────────── */

const GRAPH_VERSION = "v18.0";

type CapiUserData = {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  city?: string;
  country?: string;
  externalId?: string;
};

type CapiPayload = {
  eventName: string;
  eventId?: string;
  eventSourceUrl?: string;
  customData?: Record<string, unknown>;
  userData?: CapiUserData;
};

/** Hash SHA-256 hex con Web Crypto (Deno-compatible runtime). */
async function sha256(value: string): Promise<string> {
  const encoder = new TextEncoder();
  const digest = await crypto.subtle.digest(
    "SHA-256",
    encoder.encode(value)
  );
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function normalize(value: string) {
  return value.trim().toLowerCase();
}

function cleanPhone(phone: string) {
  return phone.replace(/\D/g, "");
}

/** Parsea cookies Meta (_fbc, _fbp) del header Cookie */
function parseFbCookies(cookieHeader: string | null) {
  if (!cookieHeader) return { fbc: undefined, fbp: undefined };
  const map: Record<string, string> = {};
  for (const part of cookieHeader.split(";")) {
    const [k, v] = part.trim().split("=");
    if (k && v) map[k] = decodeURIComponent(v);
  }
  return { fbc: map["_fbc"], fbp: map["_fbp"] };
}

export default async function handler(req: Request, _ctx: Context) {
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const PIXEL_ID = Netlify.env.get("META_PIXEL_ID");
  const ACCESS_TOKEN = Netlify.env.get("META_ACCESS_TOKEN");
  const TEST_CODE = Netlify.env.get("META_TEST_EVENT_CODE");

  if (!PIXEL_ID || !ACCESS_TOKEN) {
    return new Response(
      JSON.stringify({
        ok: false,
        error: "META_PIXEL_ID o META_ACCESS_TOKEN no configurados",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  let body: CapiPayload;
  try {
    body = (await req.json()) as CapiPayload;
  } catch {
    return new Response(JSON.stringify({ ok: false, error: "invalid JSON" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (!body.eventName) {
    return new Response(
      JSON.stringify({ ok: false, error: "eventName requerido" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  // ── Construir user_data hasheado ─────────────────────────────
  const ud: Record<string, string | string[]> = {};
  if (body.userData?.email)
    ud.em = await sha256(normalize(body.userData.email));
  if (body.userData?.phone)
    ud.ph = await sha256(cleanPhone(body.userData.phone));
  if (body.userData?.firstName)
    ud.fn = await sha256(normalize(body.userData.firstName));
  if (body.userData?.lastName)
    ud.ln = await sha256(normalize(body.userData.lastName));
  if (body.userData?.city)
    ud.ct = await sha256(normalize(body.userData.city));
  if (body.userData?.country)
    ud.country = await sha256(normalize(body.userData.country));
  if (body.userData?.externalId)
    ud.external_id = await sha256(normalize(body.userData.externalId));

  // IP + User Agent → mejoran match quality fuertemente
  const xff = req.headers.get("x-forwarded-for");
  const clientIp = xff?.split(",")[0]?.trim();
  if (clientIp) ud.client_ip_address = clientIp;
  const ua = req.headers.get("user-agent");
  if (ua) ud.client_user_agent = ua;

  // Cookies de Meta (_fbc click ID, _fbp browser ID)
  const { fbc, fbp } = parseFbCookies(req.headers.get("cookie"));
  if (fbc) ud.fbc = fbc;
  if (fbp) ud.fbp = fbp;

  // ── Construir evento ──────────────────────────────────────────
  const event = {
    event_name: body.eventName,
    event_time: Math.floor(Date.now() / 1000),
    event_id: body.eventId,
    event_source_url: body.eventSourceUrl,
    action_source: "website",
    user_data: ud,
    custom_data: body.customData ?? {},
  };

  const payload: Record<string, unknown> = {
    data: [event],
  };
  if (TEST_CODE) payload.test_event_code = TEST_CODE;

  // ── POST a Graph API ──────────────────────────────────────────
  const url = `https://graph.facebook.com/${GRAPH_VERSION}/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (!res.ok) {
      console.error("[meta-capi] Graph API error", data);
      return new Response(JSON.stringify({ ok: false, meta: data }), {
        status: 502,
        headers: { "Content-Type": "application/json" },
      });
    }
    return new Response(JSON.stringify({ ok: true, meta: data }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("[meta-capi] fetch error", e);
    return new Response(
      JSON.stringify({ ok: false, error: String(e) }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

export const config = {
  path: "/.netlify/functions/meta-capi",
};
