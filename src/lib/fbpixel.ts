/* ─────────────────────────────────────────────────────────────── */
/* Meta Pixel — wrapper TypeScript                                 */
/* Pixel ID: 893679896695698 (HEAT IA · Conversions API + Pixel)   */
/*                                                                  */
/* El pixel base + el primer PageView se inicializan en index.html.*/
/* Este módulo expone helpers para disparar eventos desde React.   */
/* ─────────────────────────────────────────────────────────────── */

export const FB_PIXEL_ID = "893679896695698";

/** Eventos estándar Meta. Si necesitas uno custom, usa fbqTrackCustom. */
export type FbStandardEvent =
  | "PageView"
  | "ViewContent"
  | "Lead"
  | "Contact"
  | "Schedule"
  | "CompleteRegistration"
  | "InitiateCheckout"
  | "AddPaymentInfo"
  | "Purchase"
  | "Subscribe"
  | "StartTrial"
  | "Search"
  | "AddToCart";

type FbqArgs = Record<string, unknown>;
type FbqOptions = { eventID?: string };

type FbqFn = {
  (cmd: "init", pixelId: string, params?: FbqArgs): void;
  (
    cmd: "track" | "trackCustom",
    eventName: string,
    params?: FbqArgs,
    options?: FbqOptions
  ): void;
  (cmd: "consent", action: "grant" | "revoke"): void;
  callMethod?: (...args: unknown[]) => void;
  queue?: unknown[];
  loaded?: boolean;
  version?: string;
  push?: unknown;
};

declare global {
  interface Window {
    fbq?: FbqFn;
    _fbq?: unknown;
  }
}

/**
 * Dispara un evento estándar Meta.
 *
 * @example fbqTrack("Schedule");
 * @example fbqTrack("InitiateCheckout", { value: 299, currency: "USD" });
 */
export function fbqTrack(
  event: FbStandardEvent,
  params?: FbqArgs,
  options?: FbqOptions
): void {
  if (typeof window === "undefined" || !window.fbq) return;
  try {
    window.fbq("track", event, params, options);
  } catch (e) {
    if (import.meta.env.DEV) console.warn("[fbq] track error", e);
  }
}

/**
 * Dispara un evento custom Meta (no estándar).
 *
 * @example fbqTrackCustom("AgendarDemoClick", { source: "hero" });
 */
export function fbqTrackCustom(
  name: string,
  params?: FbqArgs,
  options?: FbqOptions
): void {
  if (typeof window === "undefined" || !window.fbq) return;
  try {
    window.fbq("trackCustom", name, params, options);
  } catch (e) {
    if (import.meta.env.DEV) console.warn("[fbq] trackCustom error", e);
  }
}

/**
 * Genera un eventID único — para deduplicar eventos browser-side (pixel)
 * con server-side (Conversions API). Lo necesitarás cuando integremos
 * CAPI vía Netlify Function en la Fase 3.
 */
export function newFbEventId(): string {
  const rnd = Math.random().toString(36).slice(2, 10);
  return `${Date.now()}-${rnd}`;
}

/* ────────────────────────────────────────────────────────────── */
/* FASE 2 · Advanced Matching                                      */
/* Meta puede matchear mejor un usuario con sus datos hasheados.   */
/* Llama setAdvancedMatching({email, phone, ...}) cuando los       */
/* tengas (form, Stripe redirect, GHL postMessage, etc).           */
/* ────────────────────────────────────────────────────────────── */

export type AdvancedMatchingData = {
  email?: string;
  phone?: string; // formato e164 sin "+", ej. "56978919125"
  firstName?: string;
  lastName?: string;
  city?: string;
  country?: string; // ISO 3166-1 alpha-2, ej. "cl"
  externalId?: string; // tu ID interno del cliente
};

/** Normaliza un string para hashing (lower + trim) */
function normalize(value: string): string {
  return value.trim().toLowerCase();
}

/** Hashea un string a SHA-256 hex usando Web Crypto API */
async function sha256(value: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(value);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

/** Limpia un número de teléfono → solo dígitos */
function cleanPhone(phone: string): string {
  return phone.replace(/\D/g, "");
}

/**
 * Configura Advanced Matching en el pixel. Hashea los datos antes de
 * enviarlos a Meta — los datos en claro NUNCA salen del navegador.
 *
 * @example
 *   await setAdvancedMatching({
 *     email: "piero@heat.cl",
 *     phone: "+56 9 7891 9125",
 *     firstName: "Piero",
 *     country: "cl",
 *   });
 */
export async function setAdvancedMatching(
  userData: AdvancedMatchingData
): Promise<void> {
  if (typeof window === "undefined" || !window.fbq) return;
  try {
    const am: Record<string, string> = {};
    if (userData.email) am.em = await sha256(normalize(userData.email));
    if (userData.phone) am.ph = await sha256(cleanPhone(userData.phone));
    if (userData.firstName)
      am.fn = await sha256(normalize(userData.firstName));
    if (userData.lastName)
      am.ln = await sha256(normalize(userData.lastName));
    if (userData.city) am.ct = await sha256(normalize(userData.city));
    if (userData.country)
      am.country = await sha256(normalize(userData.country));
    if (userData.externalId)
      am.external_id = await sha256(normalize(userData.externalId));

    // Re-init con AM hashed. Meta lo persiste para los siguientes events.
    window.fbq("init", FB_PIXEL_ID, am);
  } catch (e) {
    if (import.meta.env.DEV)
      console.warn("[fbq] setAdvancedMatching error", e);
  }
}

/* ────────────────────────────────────────────────────────────── */
/* FASE 3 · Server-side mirror (Conversions API via Netlify Fn)   */
/* fbqDualTrack envía el evento al pixel browser-side Y a la       */
/* función /api/meta-capi server-side con el mismo eventID. Meta   */
/* deduplica automáticamente. Sube el score de matching            */
/* significativamente porque bypassa bloqueadores y iOS ITP.       */
/* ────────────────────────────────────────────────────────────── */

const CAPI_ENDPOINT = "/.netlify/functions/meta-capi";

export async function fbqDualTrack(
  event: FbStandardEvent,
  params?: FbqArgs,
  userData?: AdvancedMatchingData
): Promise<void> {
  const eventId = newFbEventId();

  // 1) Browser pixel — incluye eventID para que CAPI pueda deduplicar
  fbqTrack(event, params, { eventID: eventId });

  // 2) Server-side mirror (CAPI). No bloquea si falla.
  try {
    await fetch(CAPI_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        eventName: event,
        eventId,
        eventSourceUrl:
          typeof window !== "undefined" ? window.location.href : "",
        customData: params ?? {},
        userData: userData ?? {},
      }),
      keepalive: true, // permite que el request sobreviva un page unload
    });
  } catch (e) {
    if (import.meta.env.DEV) console.warn("[capi] dual track error", e);
  }
}
