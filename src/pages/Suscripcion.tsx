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
import StatsSection from "@/components/StatsSection";

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

      {/* ── Top strip / hero · dark void con halo HEAT ── */}
      <section className="relative bg-background px-6 md:px-12 pt-10 md:pt-14 pb-8 overflow-hidden">
        {/* Atmósfera: 2 halos radiales en cyan/purple/yellow + grain sutil */}
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
              ACTIVÁ TU PRUEBA DE 14 DÍAS · SIN TARJETA HOY
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
            className="text-gray-400 text-sm md:text-base max-w-xl mx-auto"
          >
            Plataforma completa de Agentes IA + CRM. Activación inmediata, sin
            instalación. Tu primer mes solo se cobra el día 15.
          </motion.p>
        </div>
      </section>

      {/* ── Unified card: caluga blanca flotando sobre void dark con halo ── */}
      <section className="relative bg-background px-6 md:px-12 pt-8 md:pt-10 pb-20 md:pb-28 overflow-hidden">
        {/* Spotlight detrás del card: halo púrpura concentrado */}
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
          {/* ── HEADER STRIP: badge + nombre + precio + trial (en línea) ── */}
          <div className="px-6 md:px-8 py-5 flex flex-col md:flex-row md:items-center gap-4">
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

          {/* ── IFRAME del checkout (full-width dentro del card) ── */}
          <div className="border-t border-black/[0.06]">
            {GHL_EMBED_URL ? (
              <GHLFormEmbed
                url={GHL_EMBED_URL}
                height={GHL_EMBED_HEIGHT}
              />
            ) : (
              <div className="p-7 md:p-8 text-gray-500 text-sm">
                <GHLPlaceholder />
              </div>
            )}
          </div>

          {/* ── QUÉ ACTIVAS HOY: chips de capacidades ── */}
          <div className="border-t border-black/[0.06] px-6 md:px-8 py-5">
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

          {/* ── GARANTÍAS + TESTIMONIAL en strip inferior ── */}
          <div className="border-t border-black/[0.06] bg-gray-50 px-6 md:px-8 py-5 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
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
        </motion.aside>
      </section>

      {/* ── Stats / social proof ── */}
      <StatsSection />

      {/* ── FAQ · dark glass ── */}
      <section className="bg-background px-6 md:px-12 py-16 md:py-20 border-t border-white/[0.05]">
        <div className="mx-auto max-w-[820px]">
          <div className="text-center mb-10">
            <p className="text-xs font-medium tracking-[0.18em] text-white/50 mb-3">
              💬 PREGUNTAS FRECUENTES
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-white tracking-tight leading-tight">
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
