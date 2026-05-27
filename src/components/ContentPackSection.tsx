import { Video, Film, Clapperboard } from "lucide-react";
import { motion } from "motion/react";
import PricingCard, { type PricingCardProps } from "./PricingCard";

const PACKS: PricingCardProps[] = [
  {
    icon: Video,
    name: "3 VIDEOS",
    tagline: "≈ $197 USD por video. Para arrancar tu primera campaña.",
    price: "590",
    billing: "pago único",
    features: [
      "Guion estratégico",
      "Grabación profesional",
      "Edición optimizada para Meta Ads",
      "Entrega lista para subir",
    ],
    ctaLabel: "Pedir pack →",
    delay: 0.05,
  },
  {
    icon: Film,
    name: "5 VIDEOS",
    tagline: "≈ $170 USD por video. Renovar creativos cada mes.",
    price: "850",
    billing: "pago único",
    features: [
      "Guion estratégico",
      "Grabación profesional",
      "Edición optimizada para Meta Ads",
      "Entrega lista para subir",
    ],
    highlighted: true,
    highlightLabel: "MEJOR VALOR",
    ctaLabel: "Pedir pack →",
    delay: 0.15,
  },
  {
    icon: Clapperboard,
    name: "10 VIDEOS",
    tagline: "≈ $150 USD por video. Pipeline creativo trimestral.",
    price: "1.500",
    billing: "pago único",
    features: [
      "Guion estratégico",
      "Grabación profesional",
      "Edición optimizada para Meta Ads",
      "Entrega lista para subir",
    ],
    ctaLabel: "Pedir pack →",
    delay: 0.25,
  },
];

export default function ContentPackSection() {
  return (
    <section id="videos-ads" className="bg-[#0A0A0B] flex flex-col items-center px-6 md:px-12 py-20 md:py-24 scroll-mt-8">
      <div className="w-full max-w-[1080px] mb-12 text-center">
        <p className="text-xs font-medium tracking-[0.18em] text-white/50 mb-4">
          📦 PACKS DE VIDEO · CREATIVIDAD PARA META ADS
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight mb-4 leading-tight">
          Packs de videos para Meta Ads
        </h2>
        <p className="text-gray-400 text-base md:text-lg leading-7 max-w-2xl mx-auto">
          Producción en paquetes para activar y renovar tus campañas. Hook
          fuerte en los primeros 3 segundos, foco en producto, CTA claro. Guion
          + grabación + edición incluidos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1080px]">
        {PACKS.map((pack) => (
          <PricingCard key={pack.name} {...pack} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-10 w-full max-w-[1080px] rounded-2xl border border-yellow-300/15 bg-yellow-300/[0.03] p-6"
      >
        <p className="text-sm text-yellow-200/90 leading-relaxed">
          <span className="font-semibold">⚠️ Importante:</span> estos videos son
          exclusivamente para usar como creatividad publicitaria en Meta Ads
          pagados. No son contenido para subir orgánicamente al feed. Están
          guionizados para captar atención en feed pagado con hooks, no para
          construir presencia de marca.
        </p>
      </motion.div>
    </section>
  );
}
