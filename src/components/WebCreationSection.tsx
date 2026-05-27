import { Sparkles, Zap, Layers, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import PricingCard, { type PricingCardProps } from "./PricingCard";

const PLANS: PricingCardProps[] = [
  {
    icon: Sparkles,
    name: "HEAT WEB · STARTER",
    tagline:
      "La landing para validar tu negocio o producto. Diseño premium en pocos días.",
    price: "990",
    billing: "pago único",
    features: [
      "Hasta 3 secciones",
      "Diseño custom premium (no plantilla)",
      "Animaciones suaves al hacer scroll",
      "100% responsive (mobile-first)",
      "Formulario de contacto con CRM",
      "SEO base + favicon + meta tags",
      "Hosting + dominio asistido",
      "1 ronda de revisiones",
      "Entrega en 7-10 días",
    ],
    ctaLabel: "Comenzar ahora →",
    delay: 0.05,
  },
  {
    icon: Zap,
    name: "HEAT WEB · PRO",
    tagline:
      "Web completa para empresa establecida. Como esta que estás viendo.",
    price: "1.250",
    billing: "pago único",
    features: [
      "Hasta 5 secciones",
      "Todo lo del plan Starter",
      "Bloques interactivos (clic, hover, parallax)",
      "Integraciones con tu stack (WhatsApp, Calendly, Stripe)",
      "Optimización de performance (Lighthouse 90+)",
      "Analytics + Pixel de Meta listos",
      "2 rondas de revisiones",
      "Entrega en 10-14 días",
    ],
    highlighted: true,
    highlightLabel: "MÁS POPULAR",
    ctaLabel: "Comenzar ahora →",
    delay: 0.15,
  },
  {
    icon: Layers,
    name: "HEAT WEB · CUSTOM",
    tagline:
      "Plataforma a medida con portal interno. Web + cotizador propio.",
    price: "1.990",
    billing: "pago único",
    features: [
      "Secciones ilimitadas",
      "Todo lo del plan Pro",
      "Portal interno de cotizaciones (estilo cotizador.heatchile.com)",
      "Backend con base de datos + login",
      "Generación automática de propuestas en PDF",
      "Webhooks + integración con CRM/ERP",
      "3 rondas de revisiones",
      "Soporte post-entrega 30 días",
      "Entrega en 14-21 días",
    ],
    ctaLabel: "Comenzar ahora →",
    delay: 0.25,
  },
];

export default function WebCreationSection() {
  return (
    <section className="bg-[#0A0A0B] flex flex-col items-center px-6 md:px-12 py-20 md:py-24">
      <div className="w-full max-w-[1080px] mb-12 text-center">
        <p className="text-xs font-medium tracking-[0.18em] text-white/50 mb-4">
          🌐 CREACIÓN WEB · LANDING PAGES
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight mb-4 leading-tight">
          ¿Quieres una página como{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(to left, #6366f1, #a855f7, #fcd34d)",
            }}
          >
            esta
          </span>
          ?
        </h2>
        <p className="text-gray-400 text-base md:text-lg leading-7 max-w-2xl mx-auto">
          La misma calidad de diseño, animaciones y conversión que estás viendo
          ahora — para tu negocio. Sin plantillas, sin compromisos. Pago único.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="mb-10 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        <p className="text-xs text-gray-300">
          <span className="font-semibold text-foreground">
            Esta página que estás navegando
          </span>{" "}
          fue construida por HEAT. Tu próxima, también.
        </p>
      </motion.div>

      <div className="grid w-full max-w-[1080px] grid-cols-1 md:grid-cols-3 gap-6">
        {PLANS.map((plan) => (
          <PricingCard key={plan.name} {...plan} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10 flex flex-col items-center gap-3"
      >
        <a
          href="/desarrollo-web"
          className="group relative inline-flex items-center justify-center gap-2 rounded-full liquid-glass text-foreground text-sm font-medium px-6 py-3 overflow-hidden transition-all duration-500 ease-out hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.35)]"
        >
          <span
            aria-hidden
            className="absolute inset-0 rounded-full bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"
          />
          <span className="relative z-10 transition-colors duration-500 ease-out group-hover:text-background inline-flex items-center gap-2">
            Ver más sobre Desarrollo Web
            <ArrowRight size={14} />
          </span>
        </a>
        <p className="text-xs text-gray-500 text-center max-w-2xl">
          Entrega en 72h hábiles · 50% inicial + 50% entrega · Portafolio de
          páginas reales
        </p>
      </motion.div>
    </section>
  );
}
