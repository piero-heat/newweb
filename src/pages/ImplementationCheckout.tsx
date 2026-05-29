import { motion } from "motion/react";
import { useParams } from "react-router-dom";
import {
  ShieldCheck,
  Zap,
  Lock,
  Sparkles,
  ArrowRight,
  Bot,
  MessageSquare,
  Workflow,
  Plug,
  BookOpen,
  Video,
  Calendar,
  Headphones,
  BarChart3,
  Brain,
  Flame,
  Rocket,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SiStripe } from "@icons-pack/react-simple-icons";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ────────────────────────────────────────────────────────────── */
/* HEAT IMPLEMENTACIÓN · Checkout landings — Ignite/Accelerate/   */
/* Transform. Stripe Payment Link → abre en pestaña nueva.        */
/* ────────────────────────────────────────────────────────────── */

type Feature = { icon: LucideIcon; label: string };

type ImplementationPlanConfig = {
  badge: string;
  icon: LucideIcon;
  name: string;
  tagline: string;
  price: number;
  billing: string;
  setupNote: string;
  features: Feature[];
  guarantees: Feature[];
  stripeUrl: string;
};

const SHARED_GUARANTEES: Feature[] = [
  { icon: ShieldCheck, label: "Pago único · Sin recurrentes" },
  { icon: Zap, label: "Nuestro equipo configura todo" },
  { icon: Lock, label: "Sin contratos ni permanencia" },
];

const PLANS: Record<string, ImplementationPlanConfig> = {
  ignite: {
    badge: "PRIMER PASO",
    icon: Flame,
    name: "HEAT · IGNITE",
    tagline:
      "Tu primer paso hacia la automatización inteligente. Activamos un agente IA conectado a un canal, listo para atender.",
    price: 500,
    billing: "USD pago único",
    setupNote:
      "Fee único de setup. Sin contratos, sin pagos recurrentes. Pagas una vez y tu agente queda andando.",
    features: [
      { icon: Bot, label: "1 agente de IA" },
      { icon: MessageSquare, label: "1 canal conectado" },
      { icon: Workflow, label: "Hasta 3 automatizaciones" },
      { icon: Plug, label: "1 integración" },
      { icon: BookOpen, label: "3 docs base de conocimiento" },
      { icon: Video, label: "2 sesiones de onboarding" },
      { icon: Calendar, label: "Entrega en 10 días" },
      { icon: Headphones, label: "30 días de soporte" },
    ],
    guarantees: SHARED_GUARANTEES,
    stripeUrl: "https://buy.stripe.com/dRmbJ18vHg888LU0sG1kA0O",
  },
  accelerate: {
    badge: "MÁS VENDIDO",
    icon: Zap,
    name: "HEAT · ACCELERATE",
    tagline:
      "Escala tu operación con múltiples agentes IA en distintos canales. Para negocios que ya saben qué quieren automatizar.",
    price: 1000,
    billing: "USD pago único",
    setupNote:
      "Fee único de setup. Sin contratos, sin pagos recurrentes. Configuramos tu stack completo de agentes en 21 días.",
    features: [
      { icon: Bot, label: "Hasta 3 agentes de IA" },
      { icon: MessageSquare, label: "WhatsApp, Instagram y Web" },
      { icon: Workflow, label: "Hasta 8 automatizaciones" },
      { icon: Plug, label: "Hasta 3 integraciones" },
      { icon: BookOpen, label: "10 docs base de conocimiento" },
      { icon: Video, label: "4 sesiones de onboarding + equipo" },
      { icon: Calendar, label: "Entrega en 21 días" },
      { icon: Headphones, label: "60 días de soporte" },
    ],
    guarantees: SHARED_GUARANTEES,
    stripeUrl: "https://buy.stripe.com/bJedR927j6xy4vEa3g1kA0P",
  },
  transform: {
    badge: "END-TO-END",
    icon: Rocket,
    name: "HEAT · TRANSFORM",
    tagline:
      "Automatización end-to-end con flujos complejos. Para empresas que quieren reescribir cómo operan con IA en cada touchpoint.",
    price: 1500,
    billing: "USD pago único",
    setupNote:
      "Fee único de setup. Sin contratos, sin pagos recurrentes. Setup completo de operación IA en 30 días con dashboard de atribución.",
    features: [
      { icon: Bot, label: "Hasta 6 agentes de IA" },
      { icon: MessageSquare, label: "Hasta 5 canales conectados" },
      { icon: Workflow, label: "Hasta 20 automatizaciones" },
      { icon: Plug, label: "Hasta 5 integraciones" },
      { icon: BookOpen, label: "25 docs base de conocimiento" },
      { icon: Video, label: "6 sesiones + full team" },
      { icon: Calendar, label: "Entrega en 30 días" },
      { icon: Headphones, label: "90 días de soporte" },
      { icon: BarChart3, label: "Dashboard + atribución multi-touch" },
      { icon: Brain, label: "Estrategia IA dedicada con experto HEAT" },
    ],
    guarantees: SHARED_GUARANTEES,
    stripeUrl: "https://buy.stripe.com/5kQbJ13bn6xy6DM6R41kA0Q",
  },
};

const FAQS = [
  {
    q: "¿Cuál es la diferencia entre el setup y la suscripción mensual de HEAT IA?",
    a: "El setup es el pago único de implementación: configuramos tu agente, conectamos canales, entrenamos la base de conocimiento, integramos con tu stack. La suscripción mensual de HEAT IA (Standard/Pro/Advance) es para operar la plataforma todos los meses después del setup. Necesitas ambos para tener tu operación corriendo.",
  },
  {
    q: "¿Y si quiero ampliar después? ¿Tengo que pagar otro setup?",
    a: "No siempre. Cambios menores (agregar 1-2 integraciones, ampliar la KB) los incluimos en mantenimiento. Si quieres saltar de plan (ej: Ignite → Accelerate), pagas la diferencia + un fee chico de migración, no el plan completo de nuevo.",
  },
  {
    q: "¿Cómo funciona el cronograma de implementación?",
    a: "Día 1: pagas el setup → activamos el equipo. Días 2-5: briefing intensivo donde mapeamos tu negocio, recopilamos info y armamos la base de conocimiento. Días 6-X (según plan): construimos agentes, integraciones, automatizaciones. Últimos 2 días: tus sesiones de onboarding + handoff. Después arranca el período de soporte.",
  },
  {
    q: "¿Las sesiones de onboarding son contigo o con mi equipo?",
    a: "Con quien tú decidas. Lo recomendado es que el primero seas tú o el operador principal, y los siguientes con el equipo que va a usar la plataforma día a día. Las sesiones son por videollamada, quedan grabadas y se suben a tu Academia HEAT para que cualquier persona nueva del equipo pueda verlas después.",
  },
  {
    q: "¿Qué pasa cuando se termina el período de soporte?",
    a: "Tu sistema sigue funcionando normal. El soporte cubre dudas técnicas, ajustes finos y resolución de problemas. Cuando se acaba, puedes contratar un retainer mensual de mantenimiento o resolver desde la Academia HEAT y la comunidad de operadores.",
  },
];

const HIGHLIGHT_GRADIENT =
  "linear-gradient(137deg, #6366f1 0%, #a855f7 50%, #fcd34d 100%)";
const PRICE_GRADIENT = "linear-gradient(to left, #6366f1, #a855f7, #fcd34d)";
const VIBES_GRADIENT =
  "linear-gradient(137deg, #FF3D77 0%, #A855F7 50%, #7DD3FC 100%)";

export default function ImplementationCheckout() {
  // Lee el slug del plan desde la URL → /contratar/implementacion/:slug
  // Default a "accelerate" (el más vendido) si el slug no existe.
  const { slug } = useParams<{ slug?: string }>();
  const plan = PLANS[slug ?? "accelerate"] ?? PLANS.accelerate;
  const PlanIcon = plan.icon;

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
              SETUP DE IMPLEMENTACIÓN · PAGO ÚNICO
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
            Activa tu{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #7DD3FC, #A855F7, #FCD34D)",
              }}
            >
              {plan.name.replace("HEAT · ", "")}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto"
          >
            {plan.tagline}
          </motion.p>
        </div>
      </section>

      {/* ── Unified card: caluga blanca con CTA centrado ── */}
      <section className="relative bg-background px-6 md:px-12 pt-8 md:pt-10 pb-16 md:pb-20 overflow-hidden">
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
          {/* HEADER STRIP: badge + nombre + precio */}
          <div className="px-6 md:px-8 py-5 flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex items-center gap-3 flex-wrap">
              <span
                className="inline-flex items-center gap-1 rounded-full text-[10px] font-semibold tracking-[0.18em] px-2.5 py-1"
                style={{
                  background: HIGHLIGHT_GRADIENT,
                  color: "#0A0A0B",
                }}
              >
                <PlanIcon size={11} strokeWidth={2.4} />
                {plan.badge}
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
                {plan.price.toLocaleString("es-CL")}
              </span>
              <span className="text-gray-500 text-sm">{plan.billing}</span>
            </div>

            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200/60 px-2.5 py-1 text-[11px] text-emerald-700 font-medium tracking-wide">
              <Sparkles size={11} />
              Pago único
            </span>
          </div>

          {/* SETUP EXPLAINER · sin recurrentes */}
          <div className="border-t border-black/[0.06] bg-gradient-to-br from-indigo-50/50 to-amber-50/30 px-6 md:px-8 py-4">
            <div className="flex items-start gap-3">
              <Workflow
                size={16}
                className="text-indigo-600 mt-0.5 shrink-0"
                strokeWidth={2.2}
              />
              <p className="text-[13px] text-gray-700 leading-relaxed">
                <span className="font-semibold text-gray-900">
                  {plan.setupNote}
                </span>
              </p>
            </div>
          </div>

          {/* CTA AREA — botón gigante con onda HEAT */}
          <div className="border-t border-black/[0.06] px-6 md:px-12 py-10 md:py-12 flex flex-col items-center text-center">
            <p className="text-[10px] font-semibold tracking-[0.22em] text-gray-500 uppercase mb-3">
              Checkout seguro
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-medium text-gray-900 tracking-tight mb-3">
              Activar mi implementación
            </h3>
            <p className="text-gray-600 text-sm md:text-base max-w-md mb-8 leading-relaxed">
              Te redirigimos al checkout de Stripe. Al confirmar el pago,
              activamos tu equipo de implementación y comenzamos el setup
              en los próximos días hábiles.
            </p>

            {/* Botón gigante con glow + onda HEAT */}
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
                href={plan.stripeUrl}
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
                  Pagar setup · ${plan.price.toLocaleString("es-CL")} USD
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

          {/* QUÉ INCLUYE: chips */}
          <div className="border-t border-black/[0.06] px-6 md:px-8 py-5">
            <p className="text-[10px] font-semibold tracking-[0.22em] text-gray-500 uppercase mb-3">
              Qué activamos en tu cuenta
            </p>
            <div className="flex flex-wrap gap-2">
              {plan.features.map((f) => (
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

          {/* GARANTÍAS strip */}
          <div className="border-t border-black/[0.06] bg-gray-50 px-6 md:px-8 py-5">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] text-gray-600">
              {plan.guarantees.map((g) => (
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
          </div>
        </motion.aside>
      </section>

      {/* ── PLACEHOLDER: aquí van los bloques de detalle específicos por plan
            que Piero va a mandar. Pueden ser:
            - Etapas del proceso de implementación
            - Outcome esperado del plan
            - Comparación de qué problema resuelve
            - Imágenes / screenshots del setup
            Cuando lleguen, agregamos una nueva <section> aquí, una distinta
            por slug (ignite / accelerate / transform).
            ── */}

      {/* FAQ · dark glass */}
      <section className="bg-background px-6 md:px-12 py-16 md:py-20 border-t border-white/[0.05]">
        <div className="mx-auto max-w-[820px]">
          <div className="text-center mb-10">
            <p className="text-xs font-medium tracking-[0.18em] text-white/50 mb-3">
              💬 PREGUNTAS FRECUENTES
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-white tracking-tight leading-tight">
              Lo que quieres saber antes de pagar
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
