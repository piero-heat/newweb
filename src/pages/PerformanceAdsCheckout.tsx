import { motion } from "motion/react";
import {
  ShieldCheck,
  Zap,
  Lock,
  Sparkles,
  Target,
  TrendingUp,
  BarChart3,
  Workflow,
  Phone,
  Settings,
  Users,
  Filter,
  Calendar,
  Video,
  Database,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatsSection from "@/components/StatsSection";

/* ────────────────────────────────────────────────────────────── */
/* HEAT ADS · PERFORMANCE — landing de suscripción dedicada.      */
/* Modelo de pricing: fee fijo + 10% sobre inversión Meta.        */
/* ────────────────────────────────────────────────────────────── */

const PLAN = {
  badge: "GESTIÓN COMPLETA",
  name: "HEAT ADS · PERFORMANCE",
  tagline:
    "Gestionamos toda la estructura de tus campañas Meta. Estrategia, creativos, optimización y reportería incluidos.",
  price: 449,
  billing: "USD/mes",
  commissionNote: "+ 10% sobre tu inversión publicitaria mensual en Meta",
};

type Feature = { icon: LucideIcon; label: string };

const FEATURES: Feature[] = [
  { icon: Filter, label: "Pixel de Meta + CAPI configurados" },
  { icon: Target, label: "Estrategia por vertical y objetivo" },
  { icon: Video, label: "Creatividades guionizadas para tu audiencia" },
  { icon: Users, label: "Public Audiences + Custom Audiences" },
  { icon: TrendingUp, label: "Optimización diaria del ROAS" },
  { icon: BarChart3, label: "Reportería mensual con CPL, CPA, ROAS" },
  { icon: Phone, label: "WhatsApp directo con tu account manager" },
  { icon: Settings, label: "A/B testing continuo de creatividades" },
  { icon: Database, label: "Integración con tu CRM HEAT IA" },
  { icon: Calendar, label: "Reuniones de revisión bimensuales" },
];

const GUARANTEES: Feature[] = [
  { icon: ShieldCheck, label: "Activación en 5 días hábiles" },
  { icon: Zap, label: "Sin contrato mínimo" },
  { icon: Lock, label: "Cancela cuando quieras" },
];

const TESTIMONIAL = {
  quote:
    "Pasamos de 10 a 35 mil seguidores en 90 días y la mesa se llena sola. El equipo HEAT entiende el rubro y mide cada peso invertido.",
  author: "Luca P.",
  business: "La Nostra Casa Trattoria · Santiago",
};

const FAQS = [
  {
    q: "¿Quién paga la inversión publicitaria a Meta?",
    a: "Tú directamente. Tu cuenta de Meta Ads, tu medio de pago, tu control total. Nuestro fee es solo por gestión, optimización y reportería. Nunca tocamos tu plata de campañas.",
  },
  {
    q: "¿Cómo se calcula exactamente el 10%?",
    a: "Sobre el total de tu inversión mensual en Meta. Ej: si gastas $3.000 USD en campañas, el fee es $449 fijo + $300 (10% de $3.000) = $749 USD ese mes. Si gastas $0, solo pagas el fee fijo. Nuestro incentivo está alineado: ganamos cuando vos creces.",
  },
  {
    q: "¿Cuándo veo los primeros resultados?",
    a: "La activación toma 5 días hábiles. Las primeras 2-3 semanas son fase de aprendizaje (Meta optimiza, nosotros testeamos creatividades). A partir del día 30 ya tenés data sólida para escalar.",
  },
  {
    q: "¿Necesito tener una cuenta Meta ADS o un Business Manager?",
    a: "Es ideal pero no obligatorio. Si no tenés, te ayudamos a crearlo durante los 5 días de activación, incluyendo verificación del dominio y configuración inicial de roles.",
  },
  {
    q: "¿Qué pasa si quiero pausar el servicio temporalmente?",
    a: "Sin problema. Pausás desde tu portal de clientes con 7 días de aviso. Mientras esté pausado no se factura el fee fijo. Las campañas en Meta se pausan también; tu data queda guardada para reactivar cuando quieras.",
  },
];

// Stripe Payment Link del servicio Performance ADS (cuenta HEAT live).
const STRIPE_PAYMENT_URL =
  "https://buy.stripe.com/cNidR9fY9cVW3rA4IW1kA0G";
// Altura del iframe — Stripe Checkout en mode horizontal pide ~880px.
const STRIPE_EMBED_HEIGHT = 880;

const HIGHLIGHT_GRADIENT =
  "linear-gradient(137deg, #6366f1 0%, #a855f7 50%, #fcd34d 100%)";
const PRICE_GRADIENT = "linear-gradient(to left, #6366f1, #a855f7, #fcd34d)";

function StripePaymentEmbed({ url, height }: { url: string; height: number }) {
  return (
    <div className="relative">
      <iframe
        src={url}
        title="HEAT ADS · Performance · Checkout"
        width="100%"
        height={height}
        style={{
          border: "none",
          display: "block",
          background: "#ffffff",
          minHeight: height,
        }}
        loading="lazy"
        allow="payment *; clipboard-write"
      />

      <p className="relative mt-4 text-[11px] text-gray-500 text-center">
        ¿No se carga el checkout?{" "}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:text-gray-900 underline underline-offset-2 transition-colors"
        >
          Abrir en pestaña nueva →
        </a>
      </p>
    </div>
  );
}

export default function PerformanceAdsCheckout() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      {/* ── Hero · dark void con halo HEAT ── */}
      <section className="relative bg-background px-6 md:px-12 pt-10 md:pt-14 pb-8 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(60% 80% at 25% 0%, rgba(168,85,247,0.22), transparent 60%), radial-gradient(60% 80% at 75% 0%, rgba(125,211,252,0.18), transparent 60%), radial-gradient(40% 60% at 50% 100%, rgba(252,211,77,0.10), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-[1180px] text-center">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm px-3 py-1 text-[11px] font-semibold tracking-[0.18em] mb-5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #7DD3FC 0%, #C084FC 50%, #F0ABFC 100%)",
              }}
            >
              GESTIÓN PROFESIONAL DE META ADS
            </span>
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-medium text-white tracking-tight leading-[1.05] mb-3"
            style={{
              fontSize: "clamp(30px, 4vw, 52px)",
              letterSpacing: "-0.025em",
            }}
          >
            Contratá HEAT ADS{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #7DD3FC, #A855F7, #FCD34D)",
              }}
            >
              Performance
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto"
          >
            Tu inversión, nuestra estrategia. Gestionamos campañas, creativos,
            audiencias y reportería para que cada peso en Meta te traiga
            ventas reales — no clicks vacíos.
          </motion.p>
        </div>
      </section>

      {/* ── Unified card: caluga blanca flotando sobre void dark con halo ── */}
      <section className="relative bg-background px-6 md:px-12 pt-8 md:pt-10 pb-20 md:pb-28 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-80"
          style={{
            background:
              "radial-gradient(50% 60% at 50% 35%, rgba(168,85,247,0.18), transparent 65%), radial-gradient(60% 40% at 50% 95%, rgba(99,102,241,0.12), transparent 70%)",
          }}
        />
        <motion.aside
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto max-w-[1080px] rounded-3xl overflow-hidden shadow-[0_40px_120px_-30px_rgba(168,85,247,0.45),0_0_0_1px_rgba(255,255,255,0.03)]"
          style={{
            border: "1.5px solid transparent",
            background: `linear-gradient(#FFFFFF, #FFFFFF) padding-box, ${HIGHLIGHT_GRADIENT} border-box`,
          }}
        >
          {/* HEADER STRIP: badge + nombre + precio + comisión info */}
          <div className="px-6 md:px-8 py-5 flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex items-center gap-3 flex-wrap">
              <span
                className="inline-flex items-center gap-1 rounded-full text-[10px] font-semibold tracking-[0.18em] px-2.5 py-1"
                style={{
                  background: HIGHLIGHT_GRADIENT,
                  color: "#0A0A0B",
                }}
              >
                💎 {PLAN.badge}
              </span>
              <h2 className="font-display text-xl md:text-2xl font-medium text-gray-900 tracking-tight">
                {PLAN.name}
              </h2>
            </div>

            <div className="flex items-baseline gap-1.5 md:ml-auto">
              <span className="text-gray-500 text-sm">$</span>
              <span
                className="font-display font-medium bg-clip-text text-transparent"
                style={{
                  fontSize: "clamp(28px, 3vw, 36px)",
                  lineHeight: 1,
                  letterSpacing: "-0.025em",
                  backgroundImage: PRICE_GRADIENT,
                }}
              >
                {PLAN.price}
              </span>
              <span className="text-gray-500 text-sm">{PLAN.billing}</span>
            </div>

            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200/60 px-2.5 py-1 text-[11px] text-emerald-700 font-medium tracking-wide">
              <Sparkles size={11} />
              Activación 5 días
            </span>
          </div>

          {/* PRICING EXPLAINER · explicación del modelo +10% */}
          <div className="border-t border-black/[0.06] bg-gradient-to-br from-indigo-50/50 to-amber-50/30 px-6 md:px-8 py-4">
            <div className="flex items-start gap-3">
              <Workflow
                size={16}
                className="text-indigo-600 mt-0.5 shrink-0"
                strokeWidth={2.2}
              />
              <div>
                <p className="text-[13px] text-gray-700 leading-relaxed">
                  <span className="font-semibold text-gray-900">
                    {PLAN.commissionNote}.
                  </span>{" "}
                  Tu inversión la pagas vos directo a Meta (tu cuenta, tu
                  control). Nuestro incentivo está alineado: ganamos cuando vos
                  crecés rentable.
                </p>
              </div>
            </div>
          </div>

          {/* IFRAME del checkout de Stripe (full-width dentro del card) */}
          <div className="border-t border-black/[0.06]">
            <StripePaymentEmbed
              url={STRIPE_PAYMENT_URL}
              height={STRIPE_EMBED_HEIGHT}
            />
          </div>

          {/* QUÉ ACTIVAMOS: chips de servicios incluidos */}
          <div className="border-t border-black/[0.06] px-6 md:px-8 py-5">
            <p className="text-[10px] font-semibold tracking-[0.22em] text-gray-500 uppercase mb-3">
              Qué activamos en tu cuenta
            </p>
            <div className="flex flex-wrap gap-2">
              {FEATURES.map((f) => (
                <span
                  key={f.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-black/[0.06] bg-gray-50 px-3 py-1.5 text-[12px] text-gray-700 hover:border-black/[0.12] hover:bg-white transition-colors"
                >
                  <f.icon
                    size={13}
                    className="text-emerald-600"
                    strokeWidth={2.2}
                  />
                  {f.label}
                </span>
              ))}
            </div>
          </div>

          {/* GARANTÍAS + TESTIMONIAL en strip inferior */}
          <div className="border-t border-black/[0.06] bg-gray-50 px-6 md:px-8 py-5 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] text-gray-600">
              {GUARANTEES.map((g) => (
                <span
                  key={g.label}
                  className="inline-flex items-center gap-1.5"
                >
                  <g.icon
                    size={13}
                    className="text-emerald-600"
                    strokeWidth={2.2}
                  />
                  {g.label}
                </span>
              ))}
            </div>
            <p className="md:ml-auto text-[11px] text-gray-500 italic md:text-right md:shrink-0">
              "{TESTIMONIAL.quote}"
              <br className="hidden md:block" />
              <span className="not-italic text-gray-700 font-medium">
                — {TESTIMONIAL.author}
              </span>{" "}
              <span className="not-italic">· {TESTIMONIAL.business}</span>
            </p>
          </div>
        </motion.aside>

        {/* Link back to marketing page */}
        <div className="relative mt-10 text-center">
          <a
            href="/perform-ads"
            className="inline-flex items-center gap-1.5 text-[12px] text-gray-500 hover:text-foreground transition-colors"
          >
            <ArrowRight size={12} className="rotate-180" />
            Ver más detalles del servicio en /perform-ads
          </a>
        </div>
      </section>

      {/* Stats / social proof */}
      <StatsSection />

      {/* FAQ · dark glass */}
      <section className="bg-background px-6 md:px-12 py-16 md:py-20 border-t border-white/[0.05]">
        <div className="mx-auto max-w-[820px]">
          <div className="text-center mb-10">
            <p className="text-xs font-medium tracking-[0.18em] text-white/50 mb-3">
              💬 PREGUNTAS FRECUENTES
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-white tracking-tight leading-tight">
              Lo que querés saber antes de contratar
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((item, i) => (
              <motion.details
                key={item.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.035] hover:shadow-[0_8px_24px_-12px_rgba(168,85,247,0.25)] transition-all duration-400 ease-out overflow-hidden"
              >
                <summary className="flex items-start justify-between gap-4 cursor-pointer list-none p-5">
                  <span className="text-foreground text-[15px] font-medium tracking-tight">
                    {item.q}
                  </span>
                  <span
                    aria-hidden
                    className="shrink-0 text-gray-500 transition-transform duration-400 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 -mt-1">
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </motion.details>
            ))}
          </div>

          <p className="mt-10 text-xs text-gray-500 text-center max-w-md mx-auto">
            ¿Otra duda? Escríbenos a{" "}
            <a
              href="mailto:hola@heatlatam.com"
              className="text-gray-300 hover:text-foreground underline underline-offset-2"
            >
              hola@heatlatam.com
            </a>{" "}
            o por WhatsApp a{" "}
            <a
              href="https://wa.me/56978919125"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-foreground underline underline-offset-2"
            >
              +56 9 7891 9125
            </a>
            .
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
