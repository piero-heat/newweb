import { Zap, Filter, Users } from "lucide-react";
import FeatureCard from "./FeatureCard";

const CARDS = [
  {
    title: "Respuesta 24/7",
    description:
      "Tu agente HEAT contesta en segundos, 365 días al año. El lead que espera más de 5 minutos se va a la competencia.",
    icon: Zap,
    gradient:
      "linear-gradient(137deg, #FF3D77 0%, #FFB1CE 45%, #FF9D3C 100%)",
    delay: 0.1,
  },
  {
    title: "Filtra curiosos",
    description:
      "La IA precalifica y descarta el 85% de curiosos. Tu equipo solo atiende a quienes están listos para comprar.",
    icon: Filter,
    gradient:
      "linear-gradient(137deg, #FFFFFF 0%, #7DD3FC 45%, #06B6D4 100%)",
    delay: 0.2,
  },
  {
    title: "IA + tu equipo",
    description:
      "La IA gestiona el volumen y los filtros. Tu equipo cierra ventas y construye relaciones. El combo perfecto.",
    icon: Users,
    gradient:
      "linear-gradient(137deg, #4361EE 0%, #E0AEFF 45%, #F72585 100%)",
    delay: 0.3,
  },
] as const;

export default function FeaturesSection() {
  return (
    <section className="min-h-screen bg-[#0A0A0B] flex flex-col items-center justify-center p-6 md:p-12 font-sans">
      <div className="w-full max-w-[936px] mb-16 text-center">
        <p className="text-xs font-medium tracking-[0.18em] text-white/50 mb-4">
          💡 POR QUÉ HEAT IA
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight mb-4 leading-tight">
          Tu equipo + superpoderes IA
        </h2>
        <p className="text-gray-400 text-base md:text-lg leading-7 max-w-xl mx-auto">
          Mientras tu competencia pierde leads a las 2 AM, tu agente HEAT los
          está atendiendo y preparándolos para que tu equipo los cierre al día
          siguiente.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-3 lg:gap-3 w-full max-w-[936px]">
        {CARDS.map((card) => (
          <FeatureCard
            key={card.title}
            title={card.title}
            description={card.description}
            icon={card.icon}
            gradient={card.gradient}
            delay={card.delay}
          />
        ))}
      </div>
    </section>
  );
}
