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
  ArrowDown,
  Check,
  X,
  Globe,
  Smartphone,
  Store,
  Mail,
  MessageSquare,
  Activity,
  Shield,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SiStripe } from "@icons-pack/react-simple-icons";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ────────────────────────────────────────────────────────────── */
/* HEAT ADS · PERFORMANCE — landing de suscripción dedicada.      */
/* Modelo de pricing: fee fijo + 10% sobre inversión Meta.        */
/* ────────────────────────────────────────────────────────────── */

const PLAN = {
  badge: "GESTIÓN COMPLETA",
  name: "HEAT ADS · PERFORMANCE",
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

const NOT_INCLUDED = [
  "Community management",
  "Posteo orgánico",
  "Calendario editorial",
  "Reels orgánicos",
  "Diseño de feed",
];

const PROJECTIONS = [
  ["$1.000", "$449", "$100", "$549"],
  ["$3.000", "$449", "$300", "$749"],
  ["$5.000", "$449", "$500", "$949"],
  ["$10.000", "$449", "$1.000", "$1.449"],
  ["$25.000", "$449", "$2.500", "$2.949"],
];

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
// Stripe NO permite embedding en iframe → abrimos en pestaña nueva.
const STRIPE_PAYMENT_URL =
  "https://buy.stripe.com/cNidR9fY9cVW3rA4IW1kA0G";

const HIGHLIGHT_GRADIENT =
  "linear-gradient(137deg, #6366f1 0%, #a855f7 50%, #fcd34d 100%)";
const PRICE_GRADIENT = "linear-gradient(to left, #6366f1, #a855f7, #fcd34d)";
const VIBES_GRADIENT =
  "linear-gradient(137deg, #FF3D77 0%, #A855F7 50%, #7DD3FC 100%)";

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

      {/* ── Unified card: caluga blanca con CTA centrado (en vez de iframe) ── */}
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

          {/* CTA AREA — botón gigante con onda (Stripe no permite iframe) */}
          <div className="border-t border-black/[0.06] px-6 md:px-12 py-10 md:py-12 flex flex-col items-center text-center">
            <p className="text-[10px] font-semibold tracking-[0.22em] text-gray-500 uppercase mb-3">
              Checkout seguro
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-medium text-gray-900 tracking-tight mb-3">
              Activar Performance ADS
            </h3>
            <p className="text-gray-600 text-sm md:text-base max-w-md mb-8 leading-relaxed">
              Te redirigimos al checkout protegido de Stripe. Al confirmar,
              activamos tu cuenta en 5 días hábiles y comenzamos a estructurar
              las campañas.
            </p>

            {/* Botón gigante con glow y onda HEAT */}
            <div className="relative">
              <motion.div
                aria-hidden
                animate={{
                  opacity: [0.4, 0.75, 0.4],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute -inset-10 blur-3xl rounded-full"
                style={{ background: VIBES_GRADIENT, opacity: 0.4 }}
              />

              <a
                href={STRIPE_PAYMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center rounded-full overflow-hidden transition-transform duration-500 ease-out hover:scale-[1.03]"
                style={{
                  padding: "2px",
                  background: VIBES_GRADIENT,
                  boxShadow:
                    "0 18px 60px -12px rgba(168, 85, 247, 0.55), 0 6px 24px -6px rgba(255, 61, 119, 0.35)",
                }}
              >
                <span className="relative inline-flex items-center justify-center gap-2.5 rounded-full bg-[#0A0A0B] text-white font-medium px-8 md:px-10 py-4 md:py-5 text-[15px] md:text-base transition-colors duration-500 ease-out group-hover:bg-[#13131A]">
                  <span
                    aria-hidden
                    className="absolute inset-0 rounded-full overflow-hidden"
                  >
                    <span
                      className="absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 transition-transform duration-1000 ease-out group-hover:translate-x-[450%]"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent)",
                      }}
                    />
                  </span>
                  Contratar Performance ADS · $449/mes
                  <ArrowRight size={18} />
                </span>
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-7 flex items-center gap-4 text-gray-400">
              <SiStripe size={32} color="#635BFF" />
              <div className="h-5 w-px bg-gray-200" />
              <div className="flex items-center gap-1.5 text-[11px] text-gray-500">
                <Lock size={11} className="text-emerald-600" />
                Pago encriptado · PCI DSS Nivel 1
              </div>
            </div>
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
      </section>

      {/* ── Precios transparentes · pricing block reutilizado de PerformAds ── */}
      <section className="bg-[#0A0A0B] px-6 md:px-12 py-20 md:py-24 border-t border-white/[0.05]">
        <div className="mx-auto max-w-[1080px]">
          <div className="text-center mb-12">
            <p className="text-xs font-medium tracking-[0.18em] text-white/50 mb-4">
              💰 FEE FIJO + COMISIÓN ALINEADA
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight mb-4 leading-tight">
              Precios transparentes. Sin sorpresas.
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-7 max-w-2xl mx-auto">
              Fee fijo bajo de entrada + 10% sobre el total de la inversión
              publicitaria mensual. Nuestro incentivo está alineado: ganamos
              cuando crece tu inversión rentable.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative rounded-3xl overflow-hidden"
            style={{
              border: "1.5px solid transparent",
              background: `linear-gradient(#0E0E10, #0E0E10) padding-box, ${HIGHLIGHT_GRADIENT} border-box`,
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 p-8 md:p-10">
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-white/60 mb-4">
                  FEE FIJO MENSUAL
                </p>
                <div className="flex items-baseline gap-2">
                  <span
                    className="font-display font-medium bg-clip-text text-transparent"
                    style={{
                      fontSize: "clamp(56px, 6vw, 88px)",
                      lineHeight: 1,
                      letterSpacing: "-0.04em",
                      backgroundImage: PRICE_GRADIENT,
                    }}
                  >
                    $449
                  </span>
                  <span className="text-gray-400 text-sm">USD / mes</span>
                </div>
                <p className="mt-4 text-gray-300 text-sm leading-relaxed">
                  +{" "}
                  <span className="text-foreground font-medium">10%</span>{" "}
                  sobre el{" "}
                  <span className="text-foreground font-medium">
                    total de la inversión
                  </span>{" "}
                  publicitaria mensual en Meta.
                </p>
                <ul className="mt-5 space-y-2 text-sm text-gray-400">
                  <li>✓ Fee bajo de entrada</li>
                  <li>✓ Inversión Meta la pagas tú directamente</li>
                  <li>✓ Comisión proporcional a tu inversión</li>
                  <li>✓ Incentivos alineados con tu crecimiento</li>
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-white/60 mb-4">
                  PROYECCIÓN · CÓMO ESCALA EL TOTAL
                </p>
                <div className="overflow-x-auto rounded-2xl border border-white/5">
                  <table className="w-full text-sm min-w-[480px]">
                    <thead>
                      <tr className="bg-white/[0.03] text-xs text-gray-400 tracking-wider">
                        <th className="text-left px-4 py-3 font-medium">
                          Inversión
                        </th>
                        <th className="text-left px-4 py-3 font-medium">Fee</th>
                        <th className="text-left px-4 py-3 font-medium">
                          +10% Inversión
                        </th>
                        <th className="text-left px-4 py-3 font-medium">
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {PROJECTIONS.map((row) => (
                        <tr
                          key={row[0]}
                          className="border-t border-white/5 text-gray-300"
                        >
                          <td className="px-4 py-3">{row[0]} USD</td>
                          <td className="px-4 py-3 text-gray-400">{row[1]}</td>
                          <td className="px-4 py-3 text-gray-400">{row[2]}</td>
                          <td className="px-4 py-3 font-medium text-foreground">
                            {row[3]} USD
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 text-xs text-gray-500 leading-relaxed">
                  Inversión publicitaria la pagas tú directo a Meta. Nuestro
                  fee es solo por gestión, optimización y reportería.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Lo que NO hacemos */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 rounded-2xl border border-white/5 bg-white/[0.01] p-6 md:p-8"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
              <p className="text-xs font-semibold tracking-[0.18em] text-white/50 shrink-0">
                LO QUE NO HACEMOS
              </p>
              <ul className="flex flex-wrap gap-2">
                {NOT_INCLUDED.map((item) => (
                  <li
                    key={item}
                    className="group inline-flex items-center gap-2 rounded-full border border-transparent bg-transparent px-3 py-1.5 text-sm text-gray-400 hover:border-rose-500/25 hover:bg-rose-500/[0.06] hover:text-rose-100 transition-all duration-300 cursor-default"
                  >
                    <X
                      size={14}
                      strokeWidth={2.5}
                      className="text-gray-600 transition-colors duration-300 group-hover:text-rose-400"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-4 text-xs text-gray-500 leading-relaxed">
              Performance ADS y manejo orgánico son disciplinas distintas que
              requieren equipos distintos. Especializarnos solo en Meta ADS hace
              que entreguemos más ROI por cada dólar invertido.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CAPI · Infografía de cómo funciona ── */}
      <section className="bg-[#0A0A0B] px-6 md:px-12 py-20 md:py-24 border-t border-white/[0.05]">
        <div className="mx-auto max-w-[1080px]">
          <div className="text-center mb-12">
            <p className="text-xs font-medium tracking-[0.18em] text-white/50 mb-4">
              📡 API DE CONVERSIONES · TECH FOUNDATION
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight mb-4 leading-tight">
              Cómo funciona la API de Conversiones
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-7 max-w-2xl mx-auto">
              CAPI crea una conexión directa más confiable entre los datos de
              marketing de tu servidor, web, app o CRM, y los sistemas de
              optimización de anuncios de Meta. Más fiable que el píxel solo.
            </p>
          </div>

          {/* Infographic — 3 column flow desktop / vertical stack mobile */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-5 md:gap-4 items-stretch mb-10">
            {/* LEFT — Origins */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-6"
            >
              <p className="text-[10px] font-semibold tracking-[0.22em] text-white/40 mb-5">
                01 · TUS ORÍGENES DE DATOS
              </p>
              <ul className="space-y-3">
                {[
                  { icon: Globe, label: "Sitio web · eventos del Pixel" },
                  { icon: Smartphone, label: "App móvil" },
                  { icon: Database, label: "CRM · conversiones offline" },
                  { icon: Store, label: "Tienda física · POS" },
                  { icon: Mail, label: "Correo electrónico" },
                  { icon: MessageSquare, label: "Chats con el negocio" },
                  { icon: Phone, label: "Teléfono · llamadas" },
                ].map((s) => (
                  <li
                    key={s.label}
                    className="flex items-center gap-3 text-[13px] text-gray-300"
                  >
                    <s.icon
                      size={14}
                      className="text-white/55 shrink-0"
                      strokeWidth={2}
                    />
                    {s.label}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CENTER — CAPI hub */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex items-center justify-center md:flex-col gap-3 py-2 md:py-6"
            >
              <ArrowRight
                size={22}
                className="md:hidden text-white/35"
                strokeWidth={1.6}
              />
              <ArrowDown
                size={22}
                className="hidden md:block text-white/35"
                strokeWidth={1.6}
              />

              <div
                className="relative rounded-2xl px-6 py-5 text-center min-w-[140px] shadow-[0_24px_60px_-16px_rgba(168,85,247,0.5)]"
                style={{
                  border: "1.5px solid transparent",
                  background:
                    "linear-gradient(#0E0E14, #0E0E14) padding-box, linear-gradient(137deg, #6366f1, #a855f7, #FF3D77) border-box",
                }}
              >
                <Workflow
                  size={26}
                  className="text-purple-300 mx-auto mb-1.5"
                  strokeWidth={1.8}
                />
                <p className="text-foreground font-semibold text-sm tracking-tight">
                  CAPI
                </p>
                <p className="text-[10px] text-gray-400 mt-0.5">Hub único</p>
              </div>

              <ArrowRight
                size={22}
                className="md:hidden text-white/35"
                strokeWidth={1.6}
              />
              <ArrowDown
                size={22}
                className="hidden md:block text-white/35"
                strokeWidth={1.6}
              />
            </motion.div>

            {/* RIGHT — Meta output */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-6"
            >
              <p className="text-[10px] font-semibold tracking-[0.22em] text-white/40 mb-5">
                02 · META OPTIMIZA TUS CAMPAÑAS
              </p>
              <ul className="space-y-3">
                {[
                  "Segmentación más precisa por audiencia real",
                  "Reducción del costo por resultado (CPA)",
                  "Atribución correcta del cierre",
                  "Personalización del mensaje",
                  "Medición fiable del ROAS",
                ].map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2.5 text-[13px] text-gray-300 leading-snug"
                  >
                    <Check
                      size={14}
                      className="text-emerald-400 mt-0.5 shrink-0"
                      strokeWidth={2.4}
                    />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* 3 key concepts row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: Activity,
                title: "Una sola API, múltiples orígenes",
                desc: "CAPI agrupa todos los eventos en un único pipeline. Sin mantener integraciones separadas por canal.",
              },
              {
                icon: Shield,
                title: "Calidad de coincidencias",
                desc: "Mientras más eventos envíes con parámetros del cliente (email, teléfono, IP — hasheados), más conversiones atribuidas correctamente.",
              },
              {
                icon: Sparkles,
                title: "No siempre requiere desarrollador",
                desc: "Shopify, WooCommerce, GTM y otros conectan CAPI sin código. El resto lo configuramos nosotros en setup.",
              },
            ].map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 hover:border-white/15 hover:bg-white/[0.04] transition-all duration-400"
              >
                <c.icon
                  size={18}
                  className="text-white/70 mb-3"
                  strokeWidth={2}
                />
                <p className="text-foreground text-sm font-medium mb-1.5 tracking-tight">
                  {c.title}
                </p>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {c.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
