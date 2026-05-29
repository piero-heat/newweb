import { motion } from "motion/react";
import { useParams } from "react-router-dom";
import {
  ShieldCheck,
  Zap,
  Lock,
  Sparkles,
  ArrowRight,
  Code2,
  Palette,
  Globe,
  Smartphone,
  Workflow,
  BarChart3,
  Layout,
  MessageSquare,
  Server,
  Layers,
  CheckCircle2,
  Wrench,
  Pencil,
  Calendar,
  ExternalLink,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SiStripe } from "@icons-pack/react-simple-icons";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlanSwitcher, { type PlanOption } from "@/components/PlanSwitcher";
import BackToHomeLink from "@/components/BackToHomeLink";

// Opciones para el switcher de planes (Starter / Pro · no incluye Custom
// porque ese se cotiza con calendario, no tiene checkout directo).
const SWITCHER_OPTIONS: PlanOption[] = [
  { slug: "starter", label: "STARTER", price: "$499" },
  { slug: "pro", label: "PRO", price: "$990" },
];

/* ────────────────────────────────────────────────────────────── */
/* HEAT WEB · Checkout landings — Starter / Pro                   */
/* Stripe Payment Link → abre en pestaña nueva (Stripe no permite */
/* embedding iframe de buy.stripe.com).                           */
/* ────────────────────────────────────────────────────────────── */

type Feature = { icon: LucideIcon; label: string };

type WebPlanConfig = {
  badge: string;
  name: string;
  tagline: string;
  price: number;
  billing: string;
  activationNote: string;
  features: Feature[];
  guarantees: Feature[];
  stripeUrl: string;
};

const SHARED_GUARANTEES: Feature[] = [
  { icon: ShieldCheck, label: "Entrega en 72h hábiles" },
  { icon: Zap, label: "Pago 50/50 (inicial + entrega)" },
  { icon: Lock, label: "Hasta 3 cambios en pre-entrega" },
];

const PLANS: Record<string, WebPlanConfig> = {
  starter: {
    badge: "LANDING PREMIUM",
    name: "HEAT WEB · STARTER",
    tagline:
      "Landing de 1 página para validar tu negocio. Diseño 100% custom, sin plantillas. Entregada en 72h hábiles.",
    price: 499,
    billing: "USD pago único",
    activationNote: "50% inicial activa el slot · 50% contra entrega final",
    features: [
      { icon: Layout, label: "Landing de 1 página con hasta 5 secciones" },
      { icon: Layers, label: "Menú de navegación por anclas (#nosotros, #servicios, #contacto)" },
      { icon: Palette, label: "Diseño 100% custom (no plantilla)" },
      { icon: Sparkles, label: "Animaciones suaves al scroll" },
      { icon: Smartphone, label: "Mobile-first responsive" },
      { icon: MessageSquare, label: "Formulario de contacto conectado a CRM" },
      { icon: Globe, label: "SEO base + favicon + meta tags" },
      { icon: Server, label: "Hosting gratis por 1 año (dominio aparte)" },
    ],
    guarantees: SHARED_GUARANTEES,
    stripeUrl: "https://buy.stripe.com/28EaEX27jaNO6DM8Zc1kA0M",
  },
  pro: {
    badge: "MÁS POPULAR",
    name: "HEAT WEB · PRO",
    tagline:
      "Sitio web completo con hasta 5 subpáginas reales. Como esta que estás navegando. Entregado en 72h hábiles.",
    price: 990,
    billing: "USD pago único",
    activationNote: "50% inicial activa el slot · 50% contra entrega final",
    features: [
      { icon: Layout, label: "Hasta 5 subpáginas reales (Home, Nosotros, Servicios, etc.)" },
      { icon: Layers, label: "Menú con rutas reales (no anclas)" },
      { icon: Palette, label: "Diseño 100% custom (no plantilla)" },
      { icon: Sparkles, label: "Bloques interactivos (hover, parallax, scroll triggers)" },
      { icon: Workflow, label: "Integraciones (WhatsApp, Calendly, Stripe, CRM HEAT)" },
      { icon: Code2, label: "Optimización Lighthouse 90+" },
      { icon: BarChart3, label: "Analytics + Pixel de Meta listos" },
      { icon: Smartphone, label: "Mobile-first responsive" },
      { icon: Globe, label: "SEO base + favicon + meta tags" },
      { icon: Server, label: "Hosting gratis por 1 año (dominio aparte)" },
    ],
    guarantees: SHARED_GUARANTEES,
    stripeUrl: "https://buy.stripe.com/bJedR913f09a8LUfnA1kA0N",
  },
};

const FAQS = [
  {
    q: "¿Por qué 72 horas hábiles y no semanas o meses?",
    a: "Porque tenemos un sistema de componentes propios y un proceso de briefing apretado. No reinventamos la rueda en cada proyecto: adaptamos un sistema robusto a tu marca. La calidad es la misma que estás viendo en esta página.",
  },
  {
    q: "¿Cómo funciona el pago 50/50?",
    a: "Al confirmar pagas el 50% inicial — esto activa tu slot en producción. Cuando recibes la pre-entrega en 72h y damos las 3 rondas de cambios incluidas, pagas el 50% final contra el deploy en tu dominio.",
  },
  {
    q: "¿Qué necesito tener listo para empezar?",
    a: "Logo (idealmente en vector), textos finales por sección, fotos/imágenes si tienes, y una idea clara de a quién va dirigida la página. Si no tienes textos, los redactamos contigo en el briefing.",
  },
  {
    q: "¿Y si quiero más cambios después de entregada?",
    a: "Cada plan incluye hasta 3 rondas de cambios sobre el contenido (textos, colores, imágenes). Cambios estructurales (agregar secciones, rehacer layouts) se cotizan aparte. Después de la entrega, puedes contratar un retainer mensual de mantenimiento.",
  },
  {
    q: "¿Quién es dueño del código?",
    a: "Tú. Te entregamos el repositorio completo, sin candados ni dependencias raras. Si mañana quieres llevarlo a otro equipo, puedes hacerlo. No vendemos software cerrado.",
  },
  {
    q: "¿El hosting es para siempre?",
    a: "Es gratis el primer año (Netlify Pro, infraestructura premium). Después puedes seguir con nosotros o moverte a Vercel, AWS, donde quieras. El dominio lo compras tú aparte (te ayudamos a configurarlo).",
  },
];

const HIGHLIGHT_GRADIENT =
  "linear-gradient(137deg, #6366f1 0%, #a855f7 50%, #fcd34d 100%)";
const PRICE_GRADIENT = "linear-gradient(to left, #6366f1, #a855f7, #fcd34d)";
const VIBES_GRADIENT =
  "linear-gradient(137deg, #FF3D77 0%, #A855F7 50%, #7DD3FC 100%)";

/* PORTFOLIO — placeholders. Vamos a actualizar con clientes reales */
type PortfolioItem = {
  title: string;
  industry: string;
  url?: string;
  description: string;
  gradient: string;
};

const PORTFOLIO: PortfolioItem[] = [
  {
    title: "Proyecto 1",
    industry: "Próximamente",
    description:
      "Pídenos referencias y te mostramos páginas reales de clientes en producción.",
    gradient: "linear-gradient(137deg, #FF3D77, #FFB1CE, #FF9D3C)",
  },
  {
    title: "Proyecto 2",
    industry: "Próximamente",
    description:
      "Landing con cotizador interno + integración Stripe + dashboard de admin.",
    gradient: "linear-gradient(137deg, #6366f1, #a855f7, #fcd34d)",
  },
  {
    title: "Proyecto 3",
    industry: "Próximamente",
    description:
      "Plataforma SaaS con portal de clientes + flujo de onboarding.",
    gradient: "linear-gradient(137deg, #06B6D4, #7DD3FC, #A855F7)",
  },
  {
    title: "Proyecto 4",
    industry: "Próximamente",
    description:
      "E-commerce custom con catálogo dinámico, carrito y pasarela.",
    gradient: "linear-gradient(137deg, #10B981, #34D399, #FCD34D)",
  },
  {
    title: "Proyecto 5",
    industry: "Próximamente",
    description: "Multi-landing por servicio con A/B testing de hooks.",
    gradient: "linear-gradient(137deg, #F472B6, #FB7185, #FCD34D)",
  },
  {
    title: "Proyecto 6",
    industry: "Próximamente",
    description:
      "Sitio corporativo con CMS propio para gestión de contenido.",
    gradient: "linear-gradient(137deg, #818CF8, #C084FC, #F472B6)",
  },
];

function Inclusion({
  icon: Icon,
  title,
  desc,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
}) {
  return (
    <li className="flex items-start gap-3">
      <Icon
        size={16}
        className="text-white/65 mt-1 shrink-0"
        strokeWidth={2}
      />
      <div>
        <p className="text-foreground text-sm font-medium tracking-tight mb-1">
          {title}
        </p>
        <p className="text-gray-400 text-[13px] leading-relaxed">{desc}</p>
      </div>
    </li>
  );
}

export default function WebPlanCheckout() {
  // Lee el slug de la URL (/contratar/web-:slug) y busca el plan.
  // Fallback a "pro" si el slug es inválido o ausente.
  const { slug } = useParams<{ slug?: string }>();
  const plan = PLANS[slug ?? "pro"] ?? PLANS.pro;

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
              ENTREGA EN 72 HORAS HÁBILES
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
              {plan.name.replace("HEAT WEB · ", "")}
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

          <PlanSwitcher
            options={SWITCHER_OPTIONS}
            currentSlug={slug ?? "pro"}
            basePath="/contratar/web"
          />
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
                ⚡ {plan.badge}
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
              Entrega 72h hábiles
            </span>
          </div>

          {/* PAYMENT MODEL EXPLAINER · 50/50 */}
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
                    {plan.activationNote}.
                  </span>{" "}
                  Pagas el 50% ahora y activas tu slot en producción. Cuando
                  recibes la pre-entrega y damos las 3 rondas de cambios, pagas
                  el 50% restante contra el deploy en tu dominio.
                </p>
              </div>
            </div>
          </div>

          {/* CTA AREA — botón gigante con onda HEAT */}
          <div className="border-t border-black/[0.06] px-6 md:px-12 py-10 md:py-12 flex flex-col items-center text-center">
            <p className="text-[10px] font-semibold tracking-[0.22em] text-gray-500 uppercase mb-3">
              Checkout seguro
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-medium text-gray-900 tracking-tight mb-3">
              Comprar mi WEB
            </h3>
            <p className="text-gray-600 text-sm md:text-base max-w-md mb-8 leading-relaxed">
              Te redirigimos al checkout de Stripe. Al confirmar el 50% inicial,
              activamos tu cuenta y arranca el cronómetro de las 72 horas
              hábiles para la pre-entrega.
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
                  Pagar 50% inicial · ${plan.price / 2} USD
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
              Qué incluye tu plan
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

        <BackToHomeLink />
      </section>

      {/* ── Qué incluye / Qué se cotiza aparte ── */}
      <section className="bg-[#0A0A0B] px-6 md:px-12 py-20 md:py-24 border-t border-white/[0.05]">
        <div className="mx-auto max-w-[1080px]">
          <div className="text-center mb-12">
            <p className="text-xs font-medium tracking-[0.18em] text-white/50 mb-4">
              📋 ALCANCE · QUÉ ENTRA EN EL PRECIO
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight mb-4 leading-tight">
              Sin letra chica
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-7 max-w-2xl mx-auto">
              Te dejamos claro qué está incluido en el precio del plan y qué
              se cotiza aparte, para que decidas con toda la información sobre
              la mesa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* INCLUIDO */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-emerald-400/15 bg-emerald-500/[0.03] p-7 hover:border-emerald-400/30 hover:bg-emerald-500/[0.05] transition-all duration-400"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center">
                  <CheckCircle2
                    size={18}
                    className="text-emerald-300"
                    strokeWidth={2.2}
                  />
                </div>
                <p className="text-[10px] font-semibold tracking-[0.22em] text-emerald-300/90">
                  INCLUIDO EN EL PRECIO
                </p>
              </div>

              <ul className="space-y-4">
                <Inclusion
                  icon={Server}
                  title="Hosting gratis 1 año"
                  desc="Te lo dejamos andando en nuestra infraestructura el primer año sin costo. El dominio lo compras tú aparte (te ayudamos a configurarlo). Después del primer año puedes seguir con nuestro hosting o moverte donde quieras — todo es portable."
                />
                <Inclusion
                  icon={Pencil}
                  title="Modificaciones de contenido"
                  desc="Cambios de textos, títulos, copies, imágenes, links, colores específicos y ajustes menores sobre la estructura que entregamos. Esto está incluido siempre."
                />
                <Inclusion
                  icon={Sparkles}
                  title="Hasta 3 rondas en pre-entrega"
                  desc="Antes del deploy final tienes tres rondas de ajustes para dejarlo a tu pinta — sobre la estructura ya entregada."
                />
              </ul>
            </motion.div>

            {/* COTIZADO APARTE */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="rounded-3xl border border-amber-400/15 bg-amber-500/[0.025] p-7 hover:border-amber-400/30 hover:bg-amber-500/[0.04] transition-all duration-400"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center">
                  <Wrench
                    size={18}
                    className="text-amber-300"
                    strokeWidth={2.2}
                  />
                </div>
                <p className="text-[10px] font-semibold tracking-[0.22em] text-amber-300/90">
                  SE COTIZA APARTE
                </p>
              </div>

              <ul className="space-y-4">
                <Inclusion
                  icon={Layers}
                  title="Cambios estructurales"
                  desc="Modificar la arquitectura del sitio: agregar/quitar secciones nuevas, cambiar el flujo general, rehacer layouts completos. Requiere replantear el diseño y se cotiza aparte."
                />
                <Inclusion
                  icon={Code2}
                  title="Funcionalidades nuevas"
                  desc="Sumar features que no estaban en el plan original: backend custom, login de usuarios, integraciones específicas, módulos a medida fuera de lo que tu plan incluye."
                />
                <Inclusion
                  icon={Calendar}
                  title="Soporte mensual post-entrega"
                  desc="Si quieres mantenimiento continuo después de la entrega, podemos armar un retainer mensual a medida."
                />
              </ul>

              <p className="mt-5 pt-5 border-t border-amber-400/10 text-[11px] text-gray-500 leading-relaxed">
                💡 ¿No estás seguro si tu cambio es de contenido o estructural?
                Lo conversamos sin compromiso y te decimos.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Portfolio preview ── */}
      <section className="bg-[#0A0A0B] px-6 md:px-12 py-20 md:py-24 border-t border-white/[0.05]">
        <div className="mx-auto max-w-[1180px]">
          <div className="text-center mb-12">
            <p className="text-xs font-medium tracking-[0.18em] text-white/50 mb-4">
              👁️ PORTAFOLIO · PÁGINAS REALES
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight mb-4 leading-tight">
              Algunas páginas que hicimos
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-7 max-w-2xl mx-auto">
              Cada una con diseño y desarrollo 100% custom. Aquí algunos
              ejemplos en producción. Pídenos más durante la reunión.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PORTFOLIO.map((p, i) => (
              <motion.a
                key={p.title}
                href={p.url ?? "#"}
                target={p.url ? "_blank" : undefined}
                rel={p.url ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden hover:border-white/15 hover:bg-white/[0.04] hover:-translate-y-0.5 transition-all duration-500 ease-out"
              >
                <div
                  className="aspect-[16/10] w-full"
                  style={{ background: p.gradient }}
                >
                  <div className="w-full h-full bg-[#0A0A0B]/55 group-hover:bg-[#0A0A0B]/40 transition-colors duration-400 flex items-center justify-center">
                    <span className="font-display text-white/85 text-xl tracking-tight">
                      {p.title}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-[10px] font-semibold tracking-[0.18em] text-white/40 mb-2">
                    {p.industry}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {p.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs text-gray-500 group-hover:text-foreground transition-colors">
                    Ver caso
                    <ExternalLink size={11} />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>

          <p className="mt-8 text-xs text-gray-500 text-center max-w-xl mx-auto">
            Los proyectos con datos reales se compartirán durante la reunión de
            descubrimiento para respetar la confidencialidad de cada cliente.
          </p>
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
