import { useEffect } from "react";
import { fbqTrack } from "@/lib/fbpixel";

/* ────────────────────────────────────────────────────────────── */
/* CheckoutEventTracker — dispara InitiateCheckout en Meta Pixel  */
/* cuando el usuario aterriza en una página de checkout.         */
/*                                                                */
/* Uso: <CheckoutEventTracker contentCategory="suscripcion"      */
/*        contentName="HEAT IA Pro" value={299} currency="USD" /> */
/* ────────────────────────────────────────────────────────────── */

type CheckoutEventTrackerProps = {
  /** Categoría del producto: "suscripcion" | "web" | "implementacion" | "performance-ads" */
  contentCategory: string;
  /** Nombre legible del plan/producto */
  contentName: string;
  /** Precio numérico (sin formato). Opcional. */
  value?: number;
  /** Moneda ISO 4217 (USD, CLP, etc.). Default: USD */
  currency?: string;
  /** Identificador del SKU/plan (slug). Opcional. */
  contentIds?: string[];
};

export default function CheckoutEventTracker({
  contentCategory,
  contentName,
  value,
  currency = "USD",
  contentIds,
}: CheckoutEventTrackerProps) {
  useEffect(() => {
    fbqTrack("InitiateCheckout", {
      content_category: contentCategory,
      content_name: contentName,
      content_type: "product",
      content_ids: contentIds,
      value,
      currency,
      num_items: 1,
    });
    // Solo al montar — cada vez que cambia de plan, React remonta o
    // el padre tiene que rerenderizar. Para evitar múltiples disparos,
    // sin deps.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contentCategory, contentName, value, currency]);

  return null;
}
