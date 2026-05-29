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
