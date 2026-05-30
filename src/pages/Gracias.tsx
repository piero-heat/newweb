import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "motion/react";
import {
  Check,
  Play,
  CalendarDays,
  AlertCircle,
  MessageCircle,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import logo from "@/assets/logo.png";
import { fireConfetti } from "@/lib/confetti";
import { fbqTrack } from "@/lib/fbpixel";

/* ────────────────────────────────────────────────────────────── */
/* Gracias — Thank You page post-compra.                          */
/* Una sola página dinámica: lee ?plan= y personaliza el mensaje. */
/* Confeti al cargar + video onboarding + calendario GHL.         */
/*                                                                  */
/* URLs ejemplo:                                                    */
/*   /gracias?plan=pro       → "Bienvenido a HEAT IA Pro"          */
/*   /gracias?plan=web-pro   → "Bienvenido a HEAT Web Pro"         */
/*   /gracias                → "Bienvenido a HEAT" (fallback)      */
/* ────────────────────────────────────────────────────────────── */

const HEAT_GRADIENT =
  "linear-gradient(90deg, #7DD3FC 0%, #A855F7 50%, #FCD34D 100%)";

// Mapa de slugs → nombre legible del plan. Default si no matchea.
const PLAN_LABELS: Record<string, string> = {
  standard: "HEAT IA Standard",
  pro: "HEAT IA Pro",
  advance: "HEAT IA Advance",
  "web-starter": "HEAT Web Starter",
  "web-pro": "HEAT Web Pro",
  ads: "HEAT Performance ADS",
  "performance-ads": "HEAT Performance ADS",
  ignite: "HEAT Ignite",
  accelerate: "HEAT Accelerate",
  transform: "HEAT Transform",
  "video-3": "Pack 3 Videos ADS",
  "video-5": "Pack 5 Videos ADS",
  "video-10": "Pack 10 Videos ADS",
};

// ⚙ VIDEO de onboarding — MP4 self-hosted en GHL filesafe CDN.
// null → muestra placeholder.
const ONBOARDING_VIDEO_URL: string | null =
  "https://assets.cdn.filesafe.space/srjD6kS5EFIUXLtgl6hd/media/69a0fda6c4df6514c251f0ba.mp4";

// Calendario de onboarding GHL (Reunión Onboarding HEAT)
const ONBOARDING_CALENDAR_URL =
  "https://go.heatlatam.com/widget/booking/Huxl2sb42iZcJL4s6NrY";

export default function Gracias() {
  const [params] = useSearchParams();
  const planSlug = params.get("plan") ?? "";
  const planLabel = PLAN_LABELS[planSlug] ?? "HEAT";

  // Confeti al cargar 🎉
  useEffect(() => {
    const t = setTimeout(() => fireConfetti({ bursts: 4 }), 350);
    return () => clearTimeout(t);
  }, []);

  // Meta Pixel: Purchase browser-side. El webhook de Stripe ya dispara
  // Purchase server-side — pero como aquí no tenemos el session_id para
  // deduplicar perfecto, disparamos un "PurchasePageView" custom (no
  // estándar) para no duplicar el conteo de Purchase. El Purchase real
  // (con monto + dedup) lo maneja el webhook.
  useEffect(() => {
    fbqTrack("Lead", {
      content_name: `Thank You · ${planLabel}`,
      content_category: "post-purchase",
    });
  }, [planLabel]);

  // Cargar el form_embed.js de GHL para auto-resize del iframe del calendario
  useEffect(() => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src*="form_embed.js"]'
    );
    if (existing) return;
    const script = document.createElement("script");
    script.src = "https://go.heatlatam.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="bg-background min-h-screen">
      {/* ── Header strip · logo + línea/nodo verde (estética funnel) ── */}
      <header className="relative">
        <div className="flex justify-center py-7">
          <img src={logo} alt="HEAT" className="h-8 w-auto" />
        </div>
        <div className="relative h-px w-full bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent">
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.6)]">
            <Check size={13} className="text-white" strokeWidth={3} />
          </span>
        </div>
      </header>

      {/* ── Hero · Pago exitoso ── */}
      <section className="relative px-6 md:px-12 pt-16 md:pt-20 pb-12 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(60% 70% at 50% 0%, rgba(52,211,153,0.16), transparent 60%), radial-gradient(50% 60% at 50% 0%, rgba(168,85,247,0.12), transparent 65%)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mx-auto max-w-[760px] rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm px-6 md:px-12 py-10 md:py-12 text-center"
          style={{
            boxShadow: "0 30px 80px -30px rgba(52,211,153,0.25)",
          }}
        >
          {/* Check circle animado */}
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 14 }}
            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full"
            style={{
              background:
                "radial-gradient(circle at 30% 25%, #6EE7B7 0%, #34D399 45%, #059669 100%)",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.5), 0 0 0 1px rgba(52,211,153,0.5), 0 0 26px rgba(52,211,153,0.5)",
            }}
          >
            <Check size={30} className="text-white" strokeWidth={3} />
          </motion.div>

          <h1
            className="font-display font-medium text-foreground tracking-tight leading-[1.1] mb-3"
            style={{ fontSize: "clamp(32px, 4.4vw, 48px)", letterSpacing: "-0.025em" }}
          >
            Pago exitoso{" "}
            <span className="inline-block" role="img" aria-label="cotillón">
              🎉
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-4">
            Felicitaciones, bienvenido a{" "}
            <span
              className="font-semibold bg-clip-text text-transparent"
              style={{ backgroundImage: HEAT_GRADIENT }}
            >
              {planLabel}
            </span>
          </p>

          <p className="text-gray-400 text-[15px] leading-7 max-w-xl mx-auto">
            Tu acceso fue creado correctamente. Estás a un paso de activar tu
            agente de IA y empezar a automatizar conversaciones, calificar
            clientes y agendar citas 24/7.
          </p>
        </motion.div>
      </section>

      {/* ── Video onboarding ── */}
      <section className="relative px-6 md:px-12 py-12 md:py-16 bg-background">
        <div className="mx-auto max-w-[860px] text-center">
          <h2 className="font-display text-foreground tracking-tight text-2xl md:text-3xl mb-2">
            Mira este video antes de tu onboarding
          </h2>
          <p className="text-gray-400 text-[15px] leading-7 mb-8 max-w-xl mx-auto">
            Te explica cómo funciona HEAT IA y qué esperar en tu primera
            reunión.
          </p>

          <div
            className="relative w-full rounded-2xl overflow-hidden"
            style={{
              background:
                "radial-gradient(circle at top left, rgba(249,115,22,0.18), transparent 55%), radial-gradient(circle at bottom right, rgba(37,99,235,0.18), transparent 55%), #020617",
              padding: 4,
              boxShadow:
                "0 0 0 1px rgba(255,255,255,0.08), 0 30px 80px -24px rgba(0,0,0,0.7), 0 0 0 6px rgba(168,85,247,0.10)",
            }}
          >
            {ONBOARDING_VIDEO_URL ? (
              <video
                controls
                playsInline
                preload="metadata"
                className="w-full h-auto block rounded-[14px]"
              >
                <source src={ONBOARDING_VIDEO_URL} type="video/mp4" />
                Tu navegador no soporta video HTML5.
              </video>
            ) : (
              <div className="relative aspect-video flex flex-col items-center justify-center text-center px-6 rounded-[14px] bg-gradient-to-br from-purple-500/15 via-black to-black">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full text-white mb-3"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 25%, #d8b4fe 0%, #a855f7 45%, #7c3aed 100%)",
                    boxShadow:
                      "inset 0 1px 0 rgba(255,255,255,0.45), 0 0 22px rgba(168,85,247,0.55)",
                  }}
                >
                  <Play size={26} className="ml-1 fill-white" />
                </div>
                <p className="text-sm text-white/60 max-w-[240px] leading-relaxed">
                  Video de onboarding · próximamente
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Calendario de onboarding ── */}
      <section className="relative px-6 md:px-12 py-12 md:py-16 bg-background border-t border-white/[0.04]">
        {/* max-w 1140px → GHL sirve el layout HORIZONTAL del calendario
            (info izq + fechas/horas der) en vez del vertical apilado */}
        <div className="mx-auto max-w-[1140px]">
          <div className="text-center mb-8">
            <p
              className="text-[11px] font-semibold tracking-[0.22em] mb-3 bg-clip-text text-transparent inline-flex items-center gap-1.5"
              style={{ backgroundImage: HEAT_GRADIENT }}
            >
              <CalendarDays size={12} className="text-purple-300" />
              PASO FINAL
            </p>
            <h2 className="font-display text-foreground tracking-tight text-2xl md:text-3xl mb-3">
              Agenda tu primera reunión de onboarding
            </h2>
            <p className="text-gray-400 text-[15px] leading-7 max-w-2xl mx-auto">
              En esta reunión configuramos tu cuenta, conectamos tus redes
              sociales y dejamos tu agente funcionando correctamente.
              <span className="block mt-1 text-gray-500 text-sm">
                Duración: 1 hora · Formato: Online
              </span>
            </p>
          </div>

          {/* Aviso importante */}
          <div className="mb-7 flex items-start gap-3 rounded-2xl border border-amber-500/25 bg-amber-500/[0.06] px-4 py-3.5 max-w-2xl mx-auto">
            <AlertCircle
              size={18}
              className="shrink-0 mt-0.5 text-amber-400"
            />
            <p className="text-[13px] leading-6 text-amber-200/90">
              <strong className="text-amber-300">IMPORTANTE:</strong> agenda tu
              onboarding ahora. Las cuentas sin onboarding no se configuran
              automáticamente.
            </p>
          </div>

          {/* GHL calendar embed · contenedor blanco para que el widget (light)
              se vea limpio sin "doble caluga" sobre el dark theme */}
          <div className="rounded-2xl overflow-hidden bg-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
            <iframe
              src={ONBOARDING_CALENDAR_URL}
              title="Agenda tu onboarding HEAT"
              scrolling="no"
              id="Huxl2sb42iZcJL4s6NrY_gracias"
              className="w-full border-0"
              style={{ width: "100%", minHeight: 640, border: "none" }}
            />
          </div>
        </div>
      </section>

      {/* ── Cierre ── */}
      <section className="relative px-6 md:px-12 py-14 md:py-20 bg-background border-t border-white/[0.04] overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(50% 70% at 50% 50%, rgba(168,85,247,0.14), transparent 65%)",
          }}
        />
        <div className="relative mx-auto max-w-[640px] text-center">
          <Sparkles
            size={26}
            className="mx-auto mb-4 text-amber-300/80"
            strokeWidth={1.5}
          />
          <p className="text-foreground text-base md:text-lg leading-7 mb-2">
            Nuestro equipo está listo para ayudarte a automatizar tu negocio y
            aumentar tus ventas.
          </p>
          <p className="text-gray-400 text-sm mb-1">Nos vemos en tu onboarding.</p>
          <p className="text-foreground font-semibold mb-8">— Equipo HEAT IA</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://wa.me/56978919125?text=Hola%20HEAT%2C%20acabo%20de%20contratar%20y%20tengo%20una%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full liquid-glass text-foreground text-sm font-medium px-5 py-2.5 transition-all duration-300 ease-out hover:shadow-[0_10px_30px_-10px_rgba(37,211,102,0.4)]"
            >
              <MessageCircle size={15} />
              Soporte por WhatsApp
            </a>
            <a
              href="https://app.heatlatam.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm text-gray-400 hover:text-foreground transition-colors px-3 py-2.5"
            >
              Ir al Portal Clientes
              <ArrowUpRight
                size={14}
                className="opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
