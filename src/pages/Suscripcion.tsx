import { motion } from "motion/react";
import { useParams } from "react-router-dom";
import {
  Check,
  Lock,
  ShieldCheck,
  CreditCard,
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
  Contact,
  Workflow,
  LayoutTemplate,
  Brain,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  SiVisa,
  SiMastercard,
  SiAmericanexpress,
  SiStripe,
} from "@icons-pack/react-simple-icons";
import Navbar from "@/components/Navbar";
import PlanSwitcher, { type PlanOption } from "@/components/PlanSwitcher";
import BackToHomeLink from "@/components/BackToHomeLink";
import CheckoutEventTracker from "@/components/CheckoutEventTracker";

const SWITCHER_OPTIONS: PlanOption[] = [
  { slug: "standard", label: "STANDARD", price: "$299" },
  { slug: "pro", label: "PRO", price: "$349" },
  { slug: "advance", label: "ADVANCE", price: "$649" },
];
import Footer from "@/components/Footer";
import StatsSection from "@/components/StatsSection";

/* ────────────────────────────────────────────────────────────── */
/* PLANS — un solo mapa para Standard, Pro y Advance.             */
/* La URL /suscripcion/:plan selecciona cuál se renderiza.        */
/* Default = PRO si el slug es desconocido o ausente.             */
/* ────────────────────────────────────────────────────────────── */

type PlanFeature = { icon: LucideIcon; label: string };

type PlanConfig = {
  badge: string;
  name: string;
  tagline: string;
  price: number;
  billing: string;
  trialDays: number;
  features: PlanFeature[];
  guarantees: PlanFeature[];
  embedUrl: string;
  embedHeight: number;
};

const SHARED_GUARANTEES: PlanFeature[] = [
  { icon: ShieldCheck, label: "14 días de prueba" },
  { icon: Lock, label: "Cancela cuando quieras" },
];

const PLANS: Record<string, PlanConfig> = {
  standard: {
    badge: "EMPIEZA",
    name: "HEAT IA · STANDARD",
    tagline:
      "Automatiza la atención en Instagram y Facebook con IA.",
    price: 299,
    billing: "USD/mes",
    trialDays: 14,
    features: [
      { icon: MessageSquare, label: "Instagram + Facebook" },
      { icon: Smartphone, label: "CRM + App móvil con IA" },
      { icon: Users, label: "3 usuarios" },
      { icon: Contact, label: "10.000 contactos" },
      { icon: Workflow, label: "1 embudo configurado" },
      { icon: LayoutTemplate, label: "Landing pages incluidas" },
      { icon: BarChart3, label: "Reportes Meta + Google ADS" },
      { icon: Brain, label: "ASK IA · IA interna para consultas" },
    ],
    guarantees: SHARED_GUARANTEES,
    embedUrl: "https://go.heatlatam.com/payment-link/6a18ef40c3ea3a19f0bd9100",
    embedHeight: 950,
  },
  pro: {
    badge: "MÁS VENDIDO",
    name: "HEAT IA · PRO",
    tagline:
      "Automatiza Instagram, Facebook y WhatsApp con IA.",
    price: 349,
    billing: "USD/mes",
    trialDays: 14,
    features: [
      { icon: MessageSquare, label: "WhatsApp + Instagram + Facebook" },
      { icon: Smartphone, label: "CRM + App móvil con IA" },
      { icon: Users, label: "10 usuarios" },
      { icon: Contact, label: "100.000 contactos" },
      { icon: Workflow, label: "3 embudos configurados" },
      { icon: LayoutTemplate, label: "Landing pages incluidas" },
      { icon: BarChart3, label: "Reportes Meta + Google ADS" },
      { icon: Brain, label: "ASK IA · IA interna para consultas" },
    ],
    guarantees: SHARED_GUARANTEES,
    embedUrl: "https://go.heatlatam.com/payment-link/6a189550f4e3f699673a6371",
    embedHeight: 950,
  },
  advance: {
    badge: "TODO INCLUIDO",
    name: "HEAT IA · ADVANCE",
    tagline:
      "Automatización completa con IA. Usuarios y contactos ilimitados.",
    price: 649,
    billing: "USD/mes",
    trialDays: 14,
    features: [
      { icon: MessageSquare, label: "WhatsApp + Instagram + Facebook" },
      { icon: Smartphone, label: "CRM + App móvil con IA" },
      { icon: Users, label: "Usuarios ilimitados" },
      { icon: Contact, label: "Contactos ilimitados" },
      { icon: Workflow, label: "5 embudos configurados" },
      { icon: LayoutTemplate, label: "Landing pages incluidas" },
      { icon: BarChart3, label: "Reportes Meta + Google ADS" },
      { icon: Brain, label: "ASK IA · IA interna para consultas" },
      { icon: Mic, label: "Voice AI · llamadas + Token LLM" },
    ],
    guarantees: SHARED_GUARANTEES,
    embedUrl: "https://go.heatlatam.com/payment-link/6a18ef61f4e3f699673a647c",
    embedHeight: 950,
  },
};

const FAQS = [
  {
    q: "¿Cómo funciona el trial de 14 días?",
    a: "Te activamos la plataforma completa el mismo día y tienes 14 días para probarla a fondo con tu negocio real. Si en ese período cancelas, no te cobramos un peso. Después del día 15 se carga el primer mes a la tarjeta registrada.",
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
/*  5. Pégala abajo en plan.embedUrl                               */
/*  6. Ajusta el alto si es necesario                              */
/*                                                                  */
/* Si plan.embedUrl queda vacío → la página muestra el mockup     */
/* visual (los 3 pasos numerados) como demo.                       */
/* Si plan.embedUrl está set → se renderiza el iframe real con    */
/* styling HEAT 3.0 alrededor.                                     */
/* ────────────────────────────────────────────────────────────── */

// Las URLs de Stripe Payment Link viven dentro de cada plan en PLANS.
// Cada iframe a ≥1000px de ancho → GHL sirve layout horizontal (producto
// izq / form der). 720px de alto = sin scroll interno + reCAPTCHA dentro.

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
          plan.embedUrl
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
  // Leer el slug del plan desde la URL → /suscripcion/:plan
  // Default = "pro" si el slug es desconocido o ausente (ej. ruta legacy
  // /heat-ia-pro-14dias).
  const { plan: planSlug } = useParams<{ plan?: string }>();
  const plan = PLANS[planSlug ?? "pro"] ?? PLANS.pro;
  const resolvedSlug = planSlug ?? "pro";

  return (
    <div className="bg-background min-h-screen">
      <CheckoutEventTracker
        contentCategory="suscripcion"
        contentName={plan.name}
        value={plan.price}
        currency="USD"
        contentIds={[`suscripcion-${resolvedSlug}`]}
      />
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

          <PlanSwitcher
            options={SWITCHER_OPTIONS}
            currentSlug={planSlug ?? "pro"}
            basePath="/suscripcion"
          />
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
                ★ {plan.badge}
              </span>
              <h2 className="font-display text-xl md:text-2xl font-medium text-gray-900 tracking-tight">
                {plan.name}
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
                {plan.price}
              </span>
              <span className="text-gray-500 text-sm">{plan.billing}</span>
            </div>

            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200/60 px-2.5 py-1 text-[11px] text-emerald-700 font-medium tracking-wide">
              <Sparkles size={11} />
              {plan.trialDays} días gratis
            </span>
          </div>

          {/* ── IFRAME del checkout (full-width dentro del card) ── */}
          <div className="border-t border-black/[0.06]">
            {plan.embedUrl ? (
              <GHLFormEmbed
                url={plan.embedUrl}
                height={plan.embedHeight}
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
              {plan.features.map((f) => (
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
          <div className="border-t border-black/[0.06] bg-gray-50 px-6 md:px-8 py-5 flex items-center justify-center">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12px] text-gray-600">
              {plan.guarantees.map((g) => (
                <span
                  key={g.label}
                  className="inline-flex items-center gap-1.5"
                >
                  <g.icon size={13} className="text-emerald-600" strokeWidth={2.2} />
                  {g.label}
                </span>
              ))}
            </div>
          </div>
        </motion.aside>

        <BackToHomeLink />
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
