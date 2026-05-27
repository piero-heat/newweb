import { Flame, Zap, Rocket } from "lucide-react";
import PricingCard, { type PricingCardProps } from "./PricingCard";

const PLANS: PricingCardProps[] = [
  {
    icon: Flame,
    name: "HEAT IA · STANDARD",
    tagline: "Automatiza la atención en Instagram y Facebook con IA.",
    price: "299",
    billing: "/mes",
    features: [
      "Instagram + Facebook",
      "CRM + App móvil con IA",
      "3 usuarios",
      "10.000 contactos",
      "1 embudo configurado",
      "Landing pages incluidas",
      "Reportes Meta & Google Ads",
      "ASK IA · IA interna para consultas",
    ],
    delay: 0.05,
  },
  {
    icon: Zap,
    name: "HEAT IA · PRO",
    tagline: "Automatiza Instagram, Facebook y WhatsApp con IA.",
    price: "349",
    billing: "/mes",
    features: [
      "WhatsApp + Instagram + Facebook",
      "CRM + App móvil con IA",
      "10 usuarios",
      "100.000 contactos",
      "3 embudos configurados",
      "Landing pages incluidas",
      "Reportes Meta & Google Ads",
      "ASK IA · IA interna para consultas",
    ],
    highlighted: true,
    delay: 0.15,
  },
  {
    icon: Rocket,
    name: "HEAT IA · ADVANCE",
    tagline: "Automatización completa con IA. Usuarios y contactos ilimitados.",
    price: "649",
    billing: "/mes",
    features: [
      "WhatsApp + Instagram + Facebook",
      "CRM + App móvil con IA",
      "Usuarios ilimitados",
      "Contactos ilimitados",
      "5 embudos configurados",
      "Landing pages incluidas",
      "Reportes Meta & Google Ads",
      "ASK IA · IA interna para consultas",
      "Voice AI · llamadas + Token LLM",
    ],
    delay: 0.25,
  },
];

export default function PricingSection() {
  return (
    <section className="min-h-screen bg-[#0A0A0B] flex flex-col items-center justify-center p-6 md:p-12">
      <div className="w-full max-w-[1080px] mb-16 text-center">
        <p className="text-xs font-medium tracking-[0.18em] text-white/50 mb-4">
          🔥 PLANES HEAT IA
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight mb-4 leading-tight">
          Elige el plan que necesitas
        </h2>
        <p className="text-gray-400 text-base md:text-lg leading-7 max-w-xl mx-auto">
          Tres planes diseñados para cada etapa de tu negocio. Sin contratos,
          cancela cuando quieras.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1080px]">
        {PLANS.map((plan) => (
          <PricingCard key={plan.name} {...plan} />
        ))}
      </div>

      <p className="mt-10 text-gray-500 text-xs text-center max-w-2xl">
        Todos los planes incluyen 1 empresa y 1 número de WhatsApp. Costo de IA
        por uso: $0,04 por mensaje (Tokens ChatGPT). Puedes cancelar cuando
        desees, sin contratos de permanencia.
      </p>
    </section>
  );
}
