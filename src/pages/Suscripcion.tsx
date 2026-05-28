import { motion } from "motion/react";
import {
  Check,
  Lock,
  ShieldCheck,
  CreditCard,
  Zap,
  Mail,
  User,
  Phone,
  Building2,
  Sparkles,
  ArrowRight,
  Tag,
  Globe,
  MessageSquare,
  Mic,
  Smartphone,
  Users,
  BarChart3,
  GraduationCap,
} from "lucide-react";
import {
  SiVisa,
  SiMastercard,
  SiAmericanexpress,
  SiStripe,
} from "@icons-pack/react-simple-icons";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ────────────────────────────────────────────────────────────── */
/* Plan data — easy to extend for /suscripcion/[plan] in the      */
/* future. By default this page sells PRO with trial 14d.         */
/* ────────────────────────────────────────────────────────────── */

const PLAN = {
  badge: "MÁS POPULAR",
  name: "HEAT IA · PRO",
  tagline:
    "Automatiza ventas y atención en todos tus canales con agentes de IA + CRM unificado.",
  price: 349,
  billing: "USD/mes",
  trialDays: 14,
  features: [
    "Mensajería IA en WhatsApp, Instagram, Facebook, TikTok y Google",
    "Call Center con IA · llamadas entrantes y salientes",
    "Clonación de voz para que tu agente atienda al teléfono",
    "CRM unificado + app móvil (iOS + Android + Mac)",
    "10 usuarios incluidos · contactos ilimitados",
    "3 embudos configurados + landing pages incluidas",
    "Asesorías ilimitadas por videollamada",
    "Academia HEAT online · Comunidad VIP de empresarios",
    "Reportería Meta ADS + Google ADS integrada",
  ],
  guarantees: [
    { icon: ShieldCheck, label: "14 días de prueba" },
    { icon: Zap, label: "Activación en 24h" },
    { icon: Lock, label: "Cancela cuando quieras" },
  ],
};

// Versión compacta: 6 chips visuales para mostrar capacidades sin saturar
const COMPACT_FEATURES = [
  { icon: MessageSquare, label: "WhatsApp · IG · FB · TikTok · Google" },
  { icon: Phone, label: "Call Center con IA" },
  { icon: Mic, label: "Voz clonada del agente" },
  { icon: Smartphone, label: "CRM + app móvil" },
  { icon: Users, label: "10 usuarios · contactos ∞" },
  { icon: BarChart3, label: "Reportería Meta + Google ADS" },
  { icon: GraduationCap, label: "Academia + Comunidad VIP" },
];

const TESTIMONIAL = {
  quote:
    "HEAT IA nos cambió la operación. Antes perdíamos pacientes por no contestar a tiempo. Ahora el agente agenda 24/7 y mi equipo se enfoca en la atención presencial.",
  author: "Dra. Carolina M.",
  business: "Clínica GoSmile · Santiago",
};

const FAQS = [
  {
    q: "¿Cómo funciona el trial de 14 días?",
    a: "Te activamos la plataforma completa el mismo día y tenés 14 días para probarla a fondo con tu negocio real. Si en ese período cancelas, no te cobramos un peso. Después del día 15 se carga el primer mes a la tarjeta registrada.",
  },
  {
    q: "¿Puedo cambiar de plan después?",
    a: "Sí. Subes o bajas de plan cuando quieras desde tu portal de clientes. Si subes, la diferencia se prorratea. Si bajas, aplica al siguiente ciclo.",
  },
  {
    q: "¿Qué pasa si cancelo en medio del mes?",
    a: "Te queda activa la cuenta hasta el final del ciclo facturado. No hay penalizaciones ni meses mínimos de compromiso.",
  },
  {
    q: "¿Mis datos y conversaciones están seguros?",
    a: "Cifrado en tránsito y reposo. Backups diarios. Cumplimos Ley 19.628 de Chile + principios GDPR. Tu data es tuya: si te vas, te la exportamos.",
  },
];

/* ────────────────────────────────────────────────────────────── */
/* Field wrapper — visual only, hooks up to real backend later    */
/* ────────────────────────────────────────────────────────────── */

function Field({
  icon: Icon,
  label,
  type = "text",
  placeholder,
  optional,
  rightSlot,
}: {
  icon: typeof Mail;
  label: string;
  type?: string;
  placeholder?: string;
  optional?: boolean;
  rightSlot?: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="flex items-center justify-between text-[11px] font-medium tracking-wide text-white/55 mb-1.5">
        <span className="inline-flex items-center gap-1.5">
          <Icon size={12} className="text-white/45" />
          {label}
        </span>
        {optional && <span className="text-white/30">opcional</span>}
        {rightSlot}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-sm text-foreground placeholder:text-white/30 focus:border-white/30 focus:bg-white/[0.05] focus:outline-none transition-all"
      />
    </label>
  );
}

const HIGHLIGHT_GRADIENT =
  "linear-gradient(137deg, #6366f1 0%, #a855f7 50%, #fcd34d 100%)";
const PRICE_GRADIENT = "linear-gradient(to left, #6366f1, #a855f7, #fcd34d)";

/* ────────────────────────────────────────────────────────────── */
/* GHL FORM EMBED — Configurar aquí                                */
/* ────────────────────────────────────────────────────────────── */
/*                                                                  */
/* Para conectar el form REAL de GHL:                              */
/*  1. Anda a GHL Dashboard → Sites → Funnels o Forms              */
/*  2. Abre el form de Order/Checkout que tiene el Stripe + auto   */
/*     subaccount provisioning                                      */
/*  3. Click en "Share" o "Embed Code"                             */
/*  4. Copia el URL del iframe (algo así):                         */
/*     https://link.heatlatam.com/widget/form/XXXXXXXX             */
/*     o el src del <iframe src="...">                             */
/*  5. Pégala abajo en GHL_EMBED_URL                               */
/*  6. Ajusta el alto si es necesario                              */
/*                                                                  */
/* Si GHL_EMBED_URL queda vacío → la página muestra el mockup     */
/* visual (los 3 pasos numerados) como demo.                       */
/* Si GHL_EMBED_URL está set → se renderiza el iframe real con    */
/* styling HEAT 3.0 alrededor.                                     */
/* ────────────────────────────────────────────────────────────── */

// Stripe Payment Link servida por GHL — auto-provisioning intacto.
const GHL_EMBED_URL =
  "https://go.heatlatam.com/payment-link/6a189550f4e3f699673a6371";
// Ancho ≥1000px → GHL sirve layout horizontal (producto izq / form der).
// Por debajo colapsa a vertical (mobile) y necesita ~1320px de alto.
// 720px = altura ajustada al form real → reCAPTCHA queda dentro del bloque,
// no flotando en dead-white. Sin scroll interno.
const GHL_EMBED_HEIGHT = 720;

function GHLFormEmbed({ url, height }: { url: string; height: number }) {
  return (
    <div className="relative">
      {/* Iframe puro sobre bg-white: 0 sombra, 0 ring, 0 rounded → 0 borde visible */}
      <iframe
        src={url}
        title="HEAT IA · Suscripción"
        width="100%"
        height={height}
        style={{
          border: "none",
          display: "block",
          background: "#ffffff",
        }}
        loading="lazy"
        allow="payment *; clipboard-write"
      />

      {/* Fallback — algunos navegadores bloquean iframes con pagos */}
      <p className="relative mt-4 text-[11px] text-gray-500 text-center">
        ¿No se carga el formulario?{" "}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:text-gray-900 underline underline-offset-2 transition-colors"
        >
          Abrir checkout en pestaña nueva →
        </a>
      </p>
    </div>
  );
}

function GHLPlaceholder() {
  return (
    <div
      className="relative rounded-2xl p-8 text-center"
      style={{
        border: "1.5px dashed rgba(91,169,255,0.3)",
        background:
          "radial-gradient(120% 120% at 50% 0%, rgba(99,102,241,.10), transparent 60%), rgba(11,15,28,0.6)",
      }}
    >
      <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
        <Sparkles size={20} className="text-white/60" />
      </div>
      <p className="text-foreground text-sm font-medium mb-2">
        Esperando embed de GHL
      </p>
      <p className="text-gray-400 text-[12.5px] leading-relaxed max-w-md mx-auto">
        Pega la URL del widget de checkout de GHL en{" "}
        <code className="text-cyan-300 bg-white/[0.04] rounded px-1.5 py-0.5 text-[11px]">
          GHL_EMBED_URL
        </code>{" "}
        dentro de{" "}
        <code className="text-cyan-300 bg-white/[0.04] rounded px-1.5 py-0.5 text-[11px]">
          src/pages/Suscripcion.tsx
        </code>{" "}
        y redespliega.
      </p>
      <p className="text-gray-500 text-[11px] leading-relaxed mt-4">
        GHL Dashboard → Sites → Funnels/Forms → el form que tiene Stripe →
        Embed Code
      </p>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────── */
/* PAGE                                                            */
/* ────────────────────────────────────────────────────────────── */

export default function Suscripcion() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      {/* ── Top strip / hero ── */}
      <section className="relative bg-[#F8FAFC] px-6 md:px-12 pt-8 md:pt-12 pb-6 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(circle at 30% 0%, rgba(168,85,247,0.18), transparent 55%), radial-gradient(circle at 70% 0%, rgba(99,102,241,0.16), transparent 55%)",
          }}
        />
        <div className="relative mx-auto max-w-[1180px] text-center">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-3 py-1 text-[11px] font-semibold tracking-[0.18em] mb-5 shadow-[0_4px_12px_-2px_rgba(99,102,241,0.12)]"
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
              ACTIVÁ TU PRUEBA DE 14 DÍAS · SIN TARJETA HOY
            </span>
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-medium text-gray-900 tracking-tight leading-[1.05] mb-3"
            style={{
              fontSize: "clamp(30px, 4vw, 52px)",
              letterSpacing: "-0.025em",
            }}
          >
            Empieza con HEAT IA{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #7DD3FC, #A855F7, #FCD34D)",
              }}
            >
              PRO
            </span>{" "}
            en 2 minutos.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 text-sm md:text-base max-w-xl mx-auto"
          >
            Plataforma completa de Agentes IA + CRM. Activación inmediata, sin
            instalación. Tu primer mes solo se cobra el día 15.
          </motion.p>
        </div>
      </section>

      {/* ── Stacked checkout: ACCIÓN PRIMERO (iframe), después reassurance ── */}
      {/* Section bg = blanco (mismo que iframe) → sin "doble caluga" por contraste */}
      <section className="bg-white px-6 md:px-12 pt-10 md:pt-12 pb-20 md:pb-24">
        <div className="mx-auto max-w-[1080px] flex flex-col gap-6 md:gap-8">
          {/* ── BOTTOM · GHL iframe (la acción de pagar, después del resumen) ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={
              GHL_EMBED_URL
                ? "w-full order-2"
                : "rounded-3xl border border-white/[0.08] bg-white/[0.02] p-7 md:p-9 order-2"
            }
          >
            {GHL_EMBED_URL ? (
              <GHLFormEmbed
                url={GHL_EMBED_URL}
                height={GHL_EMBED_HEIGHT}
              />
            ) : (
              <>
                {/* Heads-up de que estamos en modo demo */}
                <div className="mb-6 rounded-xl border border-yellow-300/15 bg-yellow-300/[0.03] px-4 py-3">
                  <p className="text-[12px] text-yellow-200/90 leading-relaxed">
                    <span className="font-semibold">Modo demo:</span> esto es
                    una maqueta visual. Cuando peguemos la URL del widget de
                    GHL, este bloque se reemplaza por el form real con Stripe
                    + auto-provisioning de subaccount.
                  </p>
                </div>

                {/* Placeholder explicando dónde va el embed */}
                <div className="mb-7">
                  <GHLPlaceholder />
                </div>

                {/* Section 1 — Cuenta (mockup) */}
            <div className="mb-7">
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-semibold text-background"
                  style={{ background: HIGHLIGHT_GRADIENT }}
                >
                  1
                </span>
                <h3 className="text-foreground text-base font-medium tracking-tight">
                  Crea tu cuenta
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field
                  icon={User}
                  label="Nombre completo"
                  placeholder="Piero Setti"
                />
                <Field
                  icon={Mail}
                  label="Email"
                  type="email"
                  placeholder="tu@email.com"
                />
                <Field
                  icon={Building2}
                  label="Empresa o negocio"
                  placeholder="HEAT IA"
                />
                <Field
                  icon={Phone}
                  label="WhatsApp"
                  placeholder="+56 9 XXXX XXXX"
                />
              </div>
            </div>

            {/* Section 2 — Pago */}
            <div className="mb-7">
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-semibold text-background"
                  style={{ background: HIGHLIGHT_GRADIENT }}
                >
                  2
                </span>
                <h3 className="text-foreground text-base font-medium tracking-tight">
                  Datos de pago
                </h3>
                <span className="text-[10px] text-gray-500 ml-auto">
                  ⚡ Hoy no se cobra
                </span>
              </div>

              {/* Stripe placeholder card */}
              <div
                className="rounded-2xl p-5 mb-3"
                style={{
                  border: "1.5px solid transparent",
                  background:
                    "radial-gradient(120% 120% at 50% 0%, rgba(99,102,241,.14), transparent 60%), #0B0F1C padding-box, linear-gradient(135deg, rgba(91,169,255,0.25), rgba(168,85,247,0.18)) border-box",
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <p className="text-[11px] font-semibold tracking-[0.16em] text-white/60">
                    PROCESADO POR
                  </p>
                  <SiStripe size={28} color="#635BFF" />
                </div>

                {/* Fake card UI — Stripe Elements goes here */}
                <div className="space-y-3">
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5 flex items-center gap-3">
                    <CreditCard size={14} className="text-white/50" />
                    <span className="text-white/30 text-sm">
                      1234 1234 1234 1234
                    </span>
                    <div className="ml-auto flex items-center gap-2">
                      <SiVisa size={20} color="#1A1F71" className="opacity-80" />
                      <SiMastercard
                        size={20}
                        color="#EB001B"
                        className="opacity-80"
                      />
                      <SiAmericanexpress
                        size={20}
                        color="#016FD0"
                        className="opacity-80"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5">
                      <span className="text-white/30 text-sm">MM / YY</span>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5">
                      <span className="text-white/30 text-sm">CVC</span>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-[10.5px] text-gray-500 leading-relaxed flex items-start gap-1.5">
                  <Lock size={11} className="mt-0.5 shrink-0 text-emerald-400/80" />
                  Pago seguro y encriptado vía Stripe. PCI DSS Nivel 1. HEAT IA
                  nunca guarda los datos de tu tarjeta.
                </p>
              </div>

              {/* Optional: discount code */}
              <details className="group">
                <summary className="cursor-pointer list-none flex items-center gap-1.5 text-[12px] text-gray-400 hover:text-foreground transition-colors">
                  <Tag size={12} />
                  <span>¿Tienes código de descuento?</span>
                  <span className="ml-auto text-gray-500 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="mt-3">
                  <Field
                    icon={Tag}
                    label="Código"
                    placeholder="HEAT-LATAM"
                    optional
                  />
                </div>
              </details>
            </div>

            {/* Section 3 — CTA */}
            <div>
              <button
                type="button"
                className="group relative w-full inline-flex items-center justify-center gap-2 rounded-full text-background text-sm font-semibold px-6 py-3.5 overflow-hidden transition-all duration-500 ease-out hover:shadow-[0_18px_60px_-12px_rgba(168,85,247,0.6)]"
                style={{
                  background: HIGHLIGHT_GRADIENT,
                }}
              >
                <span className="relative z-10 inline-flex items-center gap-2">
                  Activar mi prueba de {PLAN.trialDays} días
                  <ArrowRight size={15} />
                </span>
              </button>

              <p className="mt-4 text-[11px] text-gray-500 leading-relaxed text-center">
                Al continuar aceptas nuestros{" "}
                <a
                  href="/terminos"
                  className="text-gray-400 hover:text-foreground underline underline-offset-2"
                >
                  Términos y Condiciones
                </a>{" "}
                y la{" "}
                <a
                  href="/privacidad"
                  className="text-gray-400 hover:text-foreground underline underline-offset-2"
                >
                  Política de Privacidad
                </a>
                . El cargo del primer mes se realiza el día 15 si no cancelas
                antes.
              </p>

              {/* Trust signals row */}
              <div className="mt-6 pt-5 border-t border-white/[0.06] grid grid-cols-3 gap-2 text-center">
                <div className="text-gray-500">
                  <Lock size={14} className="mx-auto mb-1 text-emerald-400/80" />
                  <p className="text-[10px] tracking-wide">
                    Pago encriptado
                  </p>
                </div>
                <div className="text-gray-500">
                  <ShieldCheck
                    size={14}
                    className="mx-auto mb-1 text-emerald-400/80"
                  />
                  <p className="text-[10px] tracking-wide">
                    Garantía total
                  </p>
                </div>
                <div className="text-gray-500">
                  <Globe size={14} className="mx-auto mb-1 text-emerald-400/80" />
                  <p className="text-[10px] tracking-wide">
                    Soporte en español
                  </p>
                </div>
              </div>
            </div>
              </>
            )}
          </motion.div>

          {/* ── TOP · Plan compacto (oferta primero, después el pago) ── */}
          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl overflow-hidden shadow-[0_18px_48px_-20px_rgba(168,85,247,0.16)] order-1"
            style={{
              border: "1.5px solid transparent",
              background: `linear-gradient(#FFFFFF, #FFFFFF) padding-box, ${HIGHLIGHT_GRADIENT} border-box`,
            }}
          >
            <div className="p-6 md:p-7">
              {/* TOP ROW: badge + nombre + precio + trial (todo en una sola línea) */}
              <div className="flex flex-col md:flex-row md:items-center gap-4 pb-5 border-b border-black/[0.06]">
                <div className="flex items-center gap-3">
                  <span
                    className="inline-flex items-center gap-1 rounded-full text-[10px] font-semibold tracking-[0.18em] px-2.5 py-1"
                    style={{
                      background: HIGHLIGHT_GRADIENT,
                      color: "#0A0A0B",
                    }}
                  >
                    ★ {PLAN.badge}
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
                  {PLAN.trialDays} días gratis
                </span>
              </div>

              {/* MIDDLE: chips de capacidades — visual, sin texto largo */}
              <div className="pt-5">
                <p className="text-[10px] font-semibold tracking-[0.22em] text-gray-500 uppercase mb-3">
                  Qué activas hoy
                </p>
                <div className="flex flex-wrap gap-2">
                  {COMPACT_FEATURES.map((f) => (
                    <span
                      key={f.label}
                      className="inline-flex items-center gap-1.5 rounded-full border border-black/[0.06] bg-gray-50 px-3 py-1.5 text-[12px] text-gray-700 hover:border-black/[0.12] hover:bg-white transition-colors"
                    >
                      <f.icon size={13} className="text-emerald-600" strokeWidth={2.2} />
                      {f.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* BOTTOM: garantías inline + testimonial mini en una sola fila */}
              <div className="mt-5 pt-5 border-t border-black/[0.06] flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] text-gray-600">
                  {PLAN.guarantees.map((g) => (
                    <span
                      key={g.label}
                      className="inline-flex items-center gap-1.5"
                    >
                      <g.icon size={13} className="text-emerald-600" strokeWidth={2.2} />
                      {g.label}
                    </span>
                  ))}
                </div>
                <p className="md:ml-auto text-[11px] text-gray-500 italic md:text-right md:shrink-0">
                  "Antes perdíamos pacientes por no contestar. Ahora el agente
                  agenda 24/7."
                  <br className="hidden md:block" />
                  <span className="not-italic text-gray-700 font-medium">
                    — {TESTIMONIAL.author}
                  </span>{" "}
                  <span className="not-italic">· {TESTIMONIAL.business}</span>
                </p>
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#F8FAFC] px-6 md:px-12 py-16 md:py-20 border-t border-black/[0.05]">
        <div className="mx-auto max-w-[820px]">
          <div className="text-center mb-10">
            <p className="text-xs font-medium tracking-[0.18em] text-gray-500 mb-3">
              💬 PREGUNTAS FRECUENTES
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-gray-900 tracking-tight leading-tight">
              Lo que todos preguntan antes de suscribirse
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
                className="group rounded-2xl border border-black/[0.06] bg-white hover:border-black/[0.12] hover:shadow-[0_8px_24px_-12px_rgba(99,102,241,0.18)] transition-all duration-400 ease-out overflow-hidden"
              >
                <summary className="flex items-start justify-between gap-4 cursor-pointer list-none p-5">
                  <span className="text-gray-900 text-[15px] font-medium tracking-tight">
                    {item.q}
                  </span>
                  <span
                    aria-hidden
                    className="shrink-0 text-gray-400 transition-transform duration-400 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 -mt-1">
                  <p className="text-gray-600 text-sm leading-relaxed">
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
              className="text-gray-700 hover:text-gray-900 underline underline-offset-2"
            >
              hola@heatlatam.com
            </a>{" "}
            o por WhatsApp a{" "}
            <a
              href="https://wa.me/56978919125"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 underline underline-offset-2"
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
