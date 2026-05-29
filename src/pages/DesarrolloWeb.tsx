import { motion } from "motion/react";
import {
  Sparkles,
  Zap,
  Layers,
  CreditCard,
  Palette,
  Code2,
  Rocket,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Calendar,
  ShoppingCart,
  Server,
  Wrench,
  Pencil,
  XCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ────────────────────────────────────────────────────────────── */
/* DATA                                                            */
/* ────────────────────────────────────────────────────────────── */

const HERO_STATS = [
  { value: "72h", label: "Entrega hábil post-confirmación" },
  { value: "50/50", label: "Inicial + entrega" },
  { value: "+40", label: "Páginas producidas" },
  { value: "0", label: "Plantillas. Todo custom." },
];

type Plan = {
  icon: typeof Sparkles;
  name: string;
  tagline: string;
  price: string;
  features: string[];
  highlighted?: boolean;
  highlightLabel?: string;
};

const PLANS: Plan[] = [
  {
    icon: Sparkles,
    name: "STARTER",
    tagline:
      "Landing de 1 página para validar tu negocio. Menú con anclas, sin subpáginas.",
    price: "990",
    features: [
      "Landing de 1 página con hasta 5 secciones",
      "Menú de navegación por anclas (#nosotros, #servicios, #contacto)",
      "Diseño 100% custom (no plantilla)",
      "Animaciones suaves al scroll",
      "Mobile-first responsive",
      "Formulario de contacto conectado a CRM",
      "SEO base + favicon + meta tags",
      "Hosting + dominio gratis por 1 año",
      "Modificaciones de contenido incluidas",
      "Hasta 3 cambios en pre-entrega",
      "Entrega: 72h hábiles post-confirmación",
    ],
  },
  {
    icon: Zap,
    name: "PRO",
    tagline:
      "Sitio web completo con hasta 5 subpáginas. Como la que estás viendo.",
    price: "1.250",
    highlighted: true,
    highlightLabel: "MÁS POPULAR",
    features: [
      "Hasta 5 subpáginas reales (Home, Nosotros, Servicios, etc.)",
      "Menú con rutas reales (no anclas)",
      "Todo lo del plan Starter",
      "Bloques interactivos (hover, parallax, scroll triggers)",
      "Integraciones (WhatsApp, Calendly, Stripe, CRM HEAT)",
      "Optimización Lighthouse 90+",
      "Analytics + Pixel de Meta listos",
      "Hosting + dominio gratis por 1 año",
      "Modificaciones de contenido incluidas",
      "Hasta 3 cambios en pre-entrega",
      "Entrega: 72h hábiles post-confirmación",
    ],
  },
  {
    icon: Layers,
    name: "CUSTOM",
    tagline:
      "Plataforma a medida con páginas ilimitadas + portal interno propio.",
    price: "1.990",
    features: [
      "Páginas ilimitadas",
      "Todo lo del plan Pro",
      "Portal interno (estilo cotizador.heatchile.com)",
      "Backend + base de datos + login de usuarios",
      "Generación automática de PDF (cotizaciones, propuestas)",
      "Webhooks + integración con CRM/ERP",
      "Hosting + dominio gratis por 1 año",
      "Modificaciones de contenido incluidas",
      "Hasta 3 cambios en pre-entrega",
      "Soporte post-entrega 30 días",
      "Entrega: 5-10 días hábiles según alcance",
    ],
  },
];

const PROCESS = [
  {
    icon: CreditCard,
    title: "01 · Pago inicial 50%",
    desc: "Confirmas el plan y pagas el 50% por adelantado. Esto activa el equipo y aseguramos slot en producción.",
  },
  {
    icon: Palette,
    title: "02 · Onboarding · Formulario interactivo",
    desc: "Te abrimos un dashboard de onboarding interactivo donde cargas todos los datos de tu página: marca, logos, textos, copies, imágenes, servicios, contactos, links. Cuando le das enviar, lo recibimos y arranca el cronómetro de las 72h.",
  },
  {
    icon: Code2,
    title: "03 · Desarrollo · 72 horas hábiles",
    desc: "Apenas recibimos tu formulario de onboarding, producimos la web completa en 72 horas hábiles. Sin alargues, sin reuniones intermedias innecesarias.",
  },
  {
    icon: Sparkles,
    title: "04 · Pre-entrega · hasta 3 cambios",
    desc: "Te mostramos la web lista en un link privado. Tienes hasta 3 rondas de cambios sobre la estructura entregada — textos, colores, imágenes, copies. Cambios estructurales se cotizan aparte.",
  },
  {
    icon: Rocket,
    title: "05 · Entrega final + 50% restante",
    desc: "Deploy en tu dominio + repositorio entregado. Pagas el 50% final y queda andando. Hosting incluido por 1 año.",
  },
];

/* PORTFOLIO — placeholders. User will send real client URLs to swap in. */
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
    description:
      "Multi-landing por servicio con A/B testing de hooks.",
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

const FAQ = [
  {
    q: "¿Por qué tan rápido (72h)? ¿No baja la calidad?",
    a: "Trabajamos con componentes propios de HEAT y un proceso de briefing apretado. No reinventamos la rueda en cada proyecto — adaptamos un sistema robusto a tu marca. La calidad es la misma que ves en esta página.",
  },
  {
    q: "¿Qué necesito tener listo para empezar?",
    a: "Logo (idealmente en vector), textos finales por sección, fotos/imágenes si tienes, y una idea clara de a quién va dirigida la página. Si no tienes textos, los redactamos contigo en el briefing.",
  },
  {
    q: "¿Y si quiero más cambios después de entregada?",
    a: "Cada plan incluye sus rondas de revisión. Cambios fuera de scope se cotizan aparte (típicamente $50-150 USD según alcance). Después de los 30 días de soporte, puedes contratar un retainer mensual.",
  },
  {
    q: "¿Quién es dueño del código?",
    a: "Tú. Te entregamos el repositorio completo, sin candados ni dependencias raras. Si mañana quieres llevarlo a otro equipo, puedes hacerlo. No vendemos software cerrado.",
  },
  {
    q: "¿Por qué 50% al inicio y 50% al final?",
    a: "El 50% inicial cubre el setup, briefing, propuesta visual y reserva el slot. El 50% final se libera contra entrega de la página deployada en tu dominio. Justo para ambos lados.",
  },
];

const HIGHLIGHT_GRADIENT =
  "linear-gradient(137deg, #6366f1 0%, #a855f7 50%, #fcd34d 100%)";
const PRICE_GRADIENT =
  "linear-gradient(to left, #6366f1, #a855f7, #fcd34d)";

/* ────────────────────────────────────────────────────────────── */
/* PAGE                                                            */
/* ────────────────────────────────────────────────────────────── */

export default function DesarrolloWeb() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative bg-[#0A0A0B] px-6 md:px-12 pt-12 md:pt-16 pb-20 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(circle at 25% 30%, rgba(99,102,241,0.18), transparent 50%), radial-gradient(circle at 80% 70%, rgba(168,85,247,0.14), transparent 55%)",
          }}
        />
        <div className="relative mx-auto max-w-[1080px] text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-white/70 mb-6"
          >
            🌐 DESARROLLO WEB · 72H HÁBILES
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-medium text-white tracking-tight leading-[1.02] mb-5"
            style={{
              fontSize: "clamp(38px, 5.2vw, 68px)",
              letterSpacing: "-0.035em",
            }}
          >
            Tu próximo desarrollo web,
            <br />
            entregado en{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #7DD3FC, #A855F7, #FCD34D)",
              }}
            >
              72 horas hábiles.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-base md:text-lg leading-7 max-w-2xl mx-auto mb-8"
          >
            La misma calidad de diseño y conversión que estás viendo en este
            sitio. Diseño 100% custom (sin plantillas), animaciones suaves,
            mobile-first. Hosting + dominio gratis por 1 año incluidos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="#planes-web"
              className="group relative inline-flex items-center justify-center gap-2 rounded-full liquid-glass text-foreground text-sm font-medium px-6 py-3 overflow-hidden transition-all duration-500 ease-out hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.35)]"
            >
              <span
                aria-hidden
                className="absolute inset-0 rounded-full bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"
              />
              <span className="relative z-10 transition-colors duration-500 ease-out group-hover:text-background inline-flex items-center gap-2">
                Ver planes
                <ArrowRight size={14} />
              </span>
            </a>
            <a
              href="/#demo"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 hover:border-white/30 text-foreground/80 hover:text-foreground text-sm font-medium px-5 py-3 transition-all duration-300"
            >
              <Calendar size={14} />
              Agendar reunión
            </a>
          </motion.div>

          {/* Hosting promo ribbon — visible right under CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 mx-auto inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-2 rounded-2xl px-5 py-3 text-xs md:text-sm"
            style={{
              border: "1.5px solid transparent",
              background:
                "linear-gradient(#0E0E14, #0E0E14) padding-box, linear-gradient(137deg, #FCD34D, #A855F7, #6366F1) border-box",
            }}
          >
            <span className="inline-flex items-center gap-1.5 text-foreground">
              🎁
              <span className="font-medium">
                Hosting + dominio gratis 1 año
              </span>
            </span>
            <span className="hidden md:inline text-white/20">·</span>
            <span className="inline-flex items-center gap-1.5 text-foreground">
              ✏️
              <span className="font-medium">
                Modificaciones de contenido incluidas
              </span>
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="bg-[#0A0A0B] px-6 md:px-12 py-10 border-y border-white/[0.05]">
        <div className="mx-auto max-w-[1080px] grid grid-cols-2 md:grid-cols-4 gap-6">
          {HERO_STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="text-center"
            >
              <div
                className="font-display font-medium bg-clip-text text-transparent"
                style={{
                  fontSize: "clamp(34px, 3.6vw, 52px)",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                  backgroundImage:
                    "linear-gradient(to right, #7DD3FC, #A855F7)",
                }}
              >
                {s.value}
              </div>
              <p className="text-gray-400 text-xs md:text-sm mt-2 tracking-wide leading-snug">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Process ── */}
      <section className="bg-[#0A0A0B] px-6 md:px-12 py-20 md:py-24">
        <div className="mx-auto max-w-[1080px]">
          <div className="text-center mb-12">
            <p className="text-xs font-medium tracking-[0.18em] text-white/50 mb-4">
              ⚡ CÓMO TRABAJAMOS
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight mb-4 leading-tight">
              5 pasos. 72 horas hábiles.
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-7 max-w-2xl mx-auto">
              Sin reuniones eternas. Pagas, briefeamos, producimos, entregamos.
              Y queda andando en tu dominio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PROCESS.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group rounded-3xl border border-white/[0.06] bg-white/[0.02] p-7 hover:border-white/15 hover:bg-white/[0.04] hover:-translate-y-1 transition-all duration-500 ease-out hover:shadow-[0_16px_50px_-12px_rgba(99,102,241,0.22)]"
              >
                <div className="liquid-glass w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-500 ease-out group-hover:scale-110">
                  <step.icon
                    size={20}
                    strokeWidth={2.2}
                    className="text-white/90"
                  />
                </div>
                <h3 className="text-foreground font-medium text-lg tracking-tight mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
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
                  title="Hosting + dominio gratis 1 año"
                  desc="Te lo dejamos andando en nuestra infraestructura. Después del primer año, puedes seguir con nosotros o moverte donde quieras (todo es portable)."
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
                  desc="Después de los 30 días incluidos (plan Custom) o si quieres mantenimiento continuo, podemos armar un retainer mensual."
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

      {/* ── Plans ── */}
      <section
        id="planes-web"
        className="bg-[#0A0A0B] px-6 md:px-12 py-20 md:py-24 border-t border-white/[0.05] scroll-mt-8"
      >
        <div className="mx-auto max-w-[1180px]">
          <div className="text-center mb-12">
            <p className="text-xs font-medium tracking-[0.18em] text-white/50 mb-4">
              💎 PLANES · PAGO ÚNICO 50/50
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight mb-4 leading-tight">
              Elige tu plan
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-7 max-w-2xl mx-auto">
              Todos los planes son pago único en USD. 50% al confirmar (activa
              el slot) + 50% contra entrega final en tu dominio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PLANS.map((plan, i) => (
              <PlanCard key={plan.name} plan={plan} index={i} />
            ))}
          </div>

          <p className="mt-10 text-xs text-gray-500 text-center max-w-2xl mx-auto">
            Todos los planes incluyen briefing inicial, propuesta visual antes
            de producir, repositorio entregado y deploy listo. Hosting +
            dominio gratis durante el primer año.
          </p>
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

      {/* ── FAQ ── */}
      <section className="bg-[#0A0A0B] px-6 md:px-12 py-20 md:py-24 border-t border-white/[0.05]">
        <div className="mx-auto max-w-[820px]">
          <div className="text-center mb-12">
            <p className="text-xs font-medium tracking-[0.18em] text-white/50 mb-4">
              💬 PREGUNTAS FRECUENTES
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight mb-4 leading-tight">
              Lo que todos preguntan
            </h2>
          </div>

          <div className="space-y-3">
            {FAQ.map((item, i) => (
              <motion.details
                key={item.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.035] transition-all duration-400 ease-out overflow-hidden"
              >
                <summary className="flex items-start justify-between gap-4 cursor-pointer list-none p-5">
                  <span className="text-foreground text-base font-medium tracking-tight">
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
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative bg-[#0A0A0B] px-6 md:px-12 py-20 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(168,85,247,0.18), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-[860px] text-center">
          <Rocket
            size={32}
            className="mx-auto mb-5 text-white/70"
            strokeWidth={1.6}
          />
          <h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight mb-4 leading-tight">
            ¿Tienes dudas? Hablemos.
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-7 max-w-xl mx-auto mb-7">
            Agenda una reunión de 20 minutos. Revisamos lo que necesitas,
            confirmamos plan y arrancamos. Sin compromiso.
          </p>
          <a
            href="/#demo"
            className="group relative inline-flex items-center justify-center rounded-full liquid-glass text-foreground text-sm font-medium px-6 py-3 overflow-hidden transition-all duration-500 ease-out hover:shadow-[0_10px_40px_-10px_rgba(168,85,247,0.4)]"
          >
            <span
              aria-hidden
              className="absolute inset-0 rounded-full bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"
            />
            <span className="relative z-10 transition-colors duration-500 ease-out group-hover:text-background inline-flex items-center gap-2">
              <Calendar size={14} />
              Agendar reunión
            </span>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ────────────────────────────────────────────────────────────── */
/* PLAN CARD                                                       */
/* ────────────────────────────────────────────────────────────── */

function Inclusion({
  icon: Icon,
  title,
  desc,
}: {
  icon: typeof Sparkles;
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

function PlanCard({ plan, index }: { plan: Plan; index: number }) {
  const Icon = plan.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`relative rounded-3xl p-7 flex flex-col h-full transition-all duration-500 ease-out hover:-translate-y-1 ${
        plan.highlighted
          ? "shadow-[0_24px_60px_-16px_rgba(168,85,247,0.35)]"
          : "hover:shadow-[0_16px_50px_-12px_rgba(99,102,241,0.18)]"
      }`}
      style={
        plan.highlighted
          ? {
              border: "1.5px solid transparent",
              background: `linear-gradient(#0E0E10, #0E0E10) padding-box, ${HIGHLIGHT_GRADIENT} border-box`,
            }
          : {
              border: "1px solid rgba(255,255,255,0.06)",
              background: "rgba(255,255,255,0.02)",
            }
      }
    >
      {plan.highlighted && plan.highlightLabel && (
        <span
          className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-[10px] font-semibold tracking-[0.18em] text-white"
          style={{ background: HIGHLIGHT_GRADIENT }}
        >
          {plan.highlightLabel}
        </span>
      )}

      <div className="flex items-start justify-between mb-5">
        <div className="liquid-glass w-11 h-11 rounded-xl flex items-center justify-center">
          <Icon size={18} strokeWidth={2.2} className="text-white/90" />
        </div>
      </div>

      <p className="text-[11px] font-semibold tracking-[0.18em] text-white/55 mb-2">
        HEAT WEB · {plan.name}
      </p>
      <p className="text-gray-400 text-sm leading-relaxed mb-5 min-h-[44px]">
        {plan.tagline}
      </p>

      <div className="flex items-baseline gap-1 mb-1">
        <span className="text-gray-400 text-sm">$</span>
        <span
          className="font-display font-medium bg-clip-text text-transparent"
          style={{
            fontSize: "clamp(40px, 4vw, 56px)",
            lineHeight: 1,
            letterSpacing: "-0.035em",
            backgroundImage: PRICE_GRADIENT,
          }}
        >
          {plan.price}
        </span>
        <span className="text-gray-400 text-sm">USD</span>
      </div>
      <p className="text-gray-500 text-xs mb-6">
        Pago único · 50% inicial + 50% entrega
      </p>

      <ul className="flex-1 space-y-2.5 mb-6">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm">
            <CheckCircle2
              size={15}
              className="text-emerald-400/90 mt-0.5 shrink-0"
              strokeWidth={2.2}
            />
            <span className="text-gray-300 leading-relaxed">{f}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-2 mt-auto pt-2">
        <a
          href="/#demo"
          className={`group inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium px-5 py-2.5 transition-all duration-400 ease-out ${
            plan.highlighted
              ? "bg-foreground text-background hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.4)]"
              : "border border-white/15 text-foreground hover:border-white/35 hover:bg-white/[0.04]"
          }`}
        >
          <ShoppingCart size={14} />
          Comprar plan
        </a>
        <a
          href="/#demo"
          className="group inline-flex items-center justify-center gap-2 text-xs text-gray-400 hover:text-foreground transition-colors py-1"
        >
          <Calendar size={12} />
          ¿Tienes dudas? Agenda reunión
        </a>
      </div>
    </motion.div>
  );
}
