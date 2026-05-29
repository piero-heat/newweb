import { Flame, Zap, Rocket } from "lucide-react";
import PricingCard, { type PricingCardProps } from "./PricingCard";

const PACKAGES: PricingCardProps[] = [
  {
    icon: Flame,
    name: "HEAT · IGNITE",
    tagline: "Primer paso hacia la automatización inteligente.",
    price: "500",
    billing: "pago único",
    features: [
      "1 agente de IA",
      "1 canal conectado",
      "Hasta 3 automatizaciones",
      "1 integración",
      "3 docs base de conocimiento",
      "2 sesiones de onboarding",
      "Entrega en 10 días",
      "30 días de soporte",
    ],
    href: "/contratar/implementacion/ignite",
    delay: 0.05,
  },
  {
    icon: Zap,
    name: "HEAT · ACCELERATE",
    tagline: "Escala tu operación con múltiples agentes IA.",
    price: "1.000",
    billing: "pago único",
    features: [
      "Hasta 3 agentes de IA",
      "WhatsApp, Instagram y Web",
      "Hasta 8 automatizaciones",
      "Hasta 3 integraciones",
      "10 docs base de conocimiento",
      "4 sesiones + equipo",
      "Entrega en 21 días",
      "60 días de soporte",
    ],
    highlighted: true,
    href: "/contratar/implementacion/accelerate",
    delay: 0.15,
  },
  {
    icon: Rocket,
    name: "HEAT · TRANSFORM",
    tagline: "Automatización end-to-end con flujos complejos.",
    price: "1.500",
    billing: "pago único",
    features: [
      "Hasta 6 agentes de IA",
      "Hasta 5 canales conectados",
      "Hasta 20 automatizaciones",
      "Hasta 5 integraciones",
      "25 docs base de conocimiento",
      "6 sesiones + full team",
      "Entrega en 30 días",
      "90 días de soporte",
      "Dashboard + atribución",
    ],
    href: "/contratar/implementacion/transform",
    delay: 0.25,
  },
];

export default function ImplementationSection() {
  return (
    <section className="bg-[#0A0A0B] flex flex-col items-center px-6 md:px-12 py-20 md:py-24">
      <div className="w-full max-w-[1080px] mb-12 text-center">
        <p className="text-xs font-medium tracking-[0.18em] text-white/50 mb-4">
          🛠️ PAQUETES DE IMPLEMENTACIÓN
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight mb-4 leading-tight">
          Elige tu implementación
        </h2>
        <p className="text-gray-400 text-base md:text-lg leading-7 max-w-xl mx-auto">
          Fee único de setup. Sin contratos ni pagos recurrentes. Nuestro equipo
          se encarga de configurar todo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1080px]">
        {PACKAGES.map((pkg) => (
          <PricingCard key={pkg.name} {...pkg} />
        ))}
      </div>
    </section>
  );
}
