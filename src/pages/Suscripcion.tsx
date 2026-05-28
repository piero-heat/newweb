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
/* PAGE                                                            */
/* ────────────────────────────────────────────────────────────── */

export default function Suscripcion() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      {/* ── Top strip / hero ── */}
      <section className="relative bg-[#0A0A0B] px-6 md:px-12 pt-8 md:pt-12 pb-6 overflow-hidden">
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
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold tracking-[0.18em] mb-5"
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

      {/* ── Two-column checkout layout ── */}
      <section className="bg-[#0A0A0B] px-6 md:px-12 pb-20 md:pb-24">
        <div className="mx-auto max-w-[1180px] grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-8 lg:gap-12 items-start">
          {/* ── LEFT · Plan summary ── */}
          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-6 rounded-3xl overflow-hidden"
            style={{
              border: "1.5px solid transparent",
              background: `linear-gradient(#0E0E14, #0E0E14) padding-box, ${HIGHLIGHT_GRADIENT} border-box`,
            }}
          >
            <div className="p-7 md:p-8">
              {/* Plan header */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className="inline-flex items-center gap-1 rounded-full text-[10px] font-semibold tracking-[0.18em] px-2.5 py-1"
                  style={{
                    background: HIGHLIGHT_GRADIENT,
                    color: "#0A0A0B",
                  }}
                >
                  ★ {PLAN.badge}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[10px] text-emerald-300 font-medium tracking-wide">
                  <Sparkles size={11} />
                  TRIAL {PLAN.trialDays} DÍAS
                </span>
              </div>

              <h2 className="font-display text-2xl md:text-3xl font-medium text-white tracking-tight mb-2">
                {PLAN.name}
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {PLAN.tagline}
              </p>

              {/* Price block */}
              <div
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 mb-6"
              >
                <p className="text-[10px] tracking-[0.22em] text-white/45 uppercase mb-2">
                  Después de tu trial · Plan mensual
                </p>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-gray-400 text-base">$</span>
                  <span
                    className="font-display font-medium bg-clip-text text-transparent"
                    style={{
                      fontSize: "clamp(48px, 5vw, 64px)",
                      lineHeight: 1,
                      letterSpacing: "-0.035em",
                      backgroundImage: PRICE_GRADIENT,
                    }}
                  >
                    {PLAN.price}
                  </span>
                  <span className="text-gray-400 text-sm">{PLAN.billing}</span>
                </div>
                <div className="mt-4 pt-4 border-t border-white/[0.06] flex items-center justify-between text-sm">
                  <span className="text-gray-400">Hoy pagas</span>
                  <span className="text-emerald-300 font-medium">
                    $0 USD
                  </span>
                </div>
                <p className="mt-2 text-[11px] text-gray-500 leading-relaxed">
                  Sin cargos durante los primeros {PLAN.trialDays} días. El día
                  15 se cobra el primer mes — cancela antes y no pagas nada.
                </p>
              </div>

              {/* Features */}
              <p className="text-[11px] font-semibold tracking-[0.18em] text-white/50 mb-3">
                LO QUE INCLUYE
              </p>
              <ul className="space-y-2.5 mb-6">
                {PLAN.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-[13.5px] text-gray-300 leading-relaxed"
                  >
                    <Check
                      size={15}
                      className="text-emerald-400/90 mt-0.5 shrink-0"
                      strokeWidth={2.4}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Guarantee row */}
              <div className="grid grid-cols-3 gap-2 pt-5 border-t border-white/[0.06]">
                {PLAN.guarantees.map((g) => (
                  <div
                    key={g.label}
                    className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-2 py-2.5 text-center"
                  >
                    <g.icon
                      size={14}
                      className="text-white/70 mx-auto mb-1"
                      strokeWidth={2}
                    />
                    <p className="text-[10px] text-gray-400 leading-tight">
                      {g.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="border-t border-white/[0.06] bg-white/[0.015] px-7 md:px-8 py-5">
              <p className="text-[13px] text-gray-300 leading-relaxed italic mb-3">
                "{TESTIMONIAL.quote}"
              </p>
              <p className="text-[11px] text-gray-500">
                <span className="text-foreground font-medium">
                  {TESTIMONIAL.author}
                </span>
                {" · "}
                {TESTIMONIAL.business}
              </p>
            </div>
          </motion.aside>

          {/* ── RIGHT · Form ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-7 md:p-9"
          >
            {/* Section 1 — Cuenta */}
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
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#0A0A0B] px-6 md:px-12 py-16 md:py-20 border-t border-white/[0.05]">
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
                className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.035] transition-all duration-400 ease-out overflow-hidden"
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
              className="text-gray-400 hover:text-foreground underline underline-offset-2"
            >
              hola@heatlatam.com
            </a>{" "}
            o por WhatsApp a{" "}
            <a
              href="https://wa.me/56978919125"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-foreground underline underline-offset-2"
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
