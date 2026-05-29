import { useState } from "react";
import { Sparkles, Zap, Layers, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import PricingCard, { type PricingCardProps } from "./PricingCard";
import CalendarModal from "@/components/CalendarModal";

const PLANS: PricingCardProps[] = [
  {
    icon: Sparkles,
    name: "HEAT WEB · STARTER",
    tagline:
      "Landing de 1 página para validar tu negocio. Menú con anclas, sin subpáginas.",
    price: "499",
    billing: "pago único",
    features: [
      "Landing de 1 página con hasta 5 secciones",
      "Menú de navegación por anclas (#nosotros, #servicios, #contacto)",
      "Diseño 100% custom (no plantilla)",
      "Animaciones suaves al scroll",
      "Mobile-first responsive",
      "Formulario de contacto conectado a CRM",
      "SEO base + favicon + meta tags",
      "Hosting gratis por 1 año (tú compras el dominio aparte)",
      "Modificaciones de contenido incluidas",
      "Hasta 3 cambios en pre-entrega",
      "Entrega: 72h hábiles post-confirmación",
    ],
    href: "/contratar/web/starter",
    ctaLabel: "Comprar plan",
    delay: 0.05,
  },
  {
    icon: Zap,
    name: "HEAT WEB · PRO",
    tagline:
      "Sitio web completo con hasta 5 subpáginas. Como esta que estás viendo.",
    price: "990",
    billing: "pago único",
    features: [
      "Hasta 5 subpáginas reales (Home, Nosotros, Servicios, etc.)",
      "Menú con rutas reales (no anclas)",
      "Todo lo del plan Starter",
      "Bloques interactivos (hover, parallax, scroll triggers)",
      "Integraciones (WhatsApp, Calendly, Stripe, CRM HEAT)",
      "Optimización Lighthouse 90+",
      "Analytics + Pixel de Meta listos",
      "Hosting gratis por 1 año (tú compras el dominio aparte)",
      "Modificaciones de contenido incluidas",
      "Hasta 3 cambios en pre-entrega",
      "Entrega: 72h hábiles post-confirmación",
    ],
    highlighted: true,
    highlightLabel: "MÁS POPULAR",
    href: "/contratar/web/pro",
    ctaLabel: "Comprar plan",
    delay: 0.15,
  },
  {
    icon: Layers,
    name: "HEAT WEB · CUSTOM",
    tagline:
      "Plataforma a medida con páginas ilimitadas + portal interno propio.",
    price: "A medida",
    currency: "",
    billing: "cotización personalizada",
    features: [
      "Páginas ilimitadas",
      "Todo lo del plan Pro",
      "Portal interno (estilo cotizador.heatchile.com)",
      "Backend + base de datos + login de usuarios",
      "Generación automática de PDF (cotizaciones, propuestas)",
      "Webhooks + integración con CRM/ERP",
      "Hosting gratis por 1 año (tú compras el dominio aparte)",
      "Modificaciones de contenido incluidas",
      "Hasta 3 cambios en pre-entrega",
      "Soporte post-entrega 30 días",
      "Entrega: 5-10 días hábiles según alcance",
    ],
    ctaLabel: "Agendar reunión",
    delay: 0.25,
  },
];

export default function WebCreationSection() {
  // Calendar popup state — disparado desde el card CUSTOM (cotización).
  const [calOpen, setCalOpen] = useState(false);

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
        {PLANS.map((plan) => {
          // El plan CUSTOM (sin precio numérico) dispara el popup del calendario
          const isCustomQuote = plan.name === "HEAT WEB · CUSTOM";
          return (
            <PricingCard
              key={plan.name}
              {...plan}
              onCtaClick={isCustomQuote ? () => setCalOpen(true) : undefined}
            />
          );
        })}
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

      {/* Calendar popup — disparado por el card CUSTOM (cotización) */}
      <CalendarModal open={calOpen} onClose={() => setCalOpen(false)} />
    </section>
  );
}
