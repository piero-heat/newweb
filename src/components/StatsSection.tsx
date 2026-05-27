import { motion } from "motion/react";

const STATS = [
  {
    value: "+50%",
    label: "Aumento en ventas",
    description:
      "Leads atendidos al instante, calificados por IA y llevados al cierre junto a tu equipo.",
  },
  {
    value: "-85%",
    label: "Menos curiosos",
    description:
      "La IA filtra y descarta quienes no tienen intención real de compra antes de llegar a tu equipo.",
  },
  {
    value: "24/7",
    label: "Atención sin parar",
    description:
      "Tu agente IA atiende fuera de horario para que tu equipo despierte con leads listos para cerrar.",
  },
  {
    value: "3",
    label: "Planes a tu medida",
    description:
      "Standard, Pro y Advance. Elige el que mejor se adapte a tu negocio y escala cuando lo necesites.",
  },
  {
    value: "5",
    label: "Días de implementación",
    description:
      "Tu sistema de IA listo y funcionando en 5 días hábiles. Nuestro equipo se encarga de toda la configuración.",
  },
  {
    value: "100%",
    label: "Garantía de satisfacción",
    description:
      "Si no estás satisfecho en los primeros 30 días, te devolvemos tu inversión completa. Sin letra chica.",
  },
] as const;

const NUMBER_GRADIENT = "linear-gradient(to left, #6366f1, #a855f7, #fcd34d)";

function StatTile({
  stat,
  index,
}: {
  stat: (typeof STATS)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.08,
      }}
      className="group relative rounded-3xl border border-white/5 bg-white/[0.02] p-8 md:p-10 transition-all duration-500 ease-out hover:border-white/15 hover:bg-white/[0.04] hover:-translate-y-1 hover:shadow-[0_16px_50px_-12px_rgba(168,85,247,0.25)]"
    >
      <div
        className="font-display font-medium bg-clip-text text-transparent inline-block"
        style={{
          fontSize: "clamp(56px, 7vw, 96px)",
          lineHeight: 1,
          letterSpacing: "-0.04em",
          backgroundImage: NUMBER_GRADIENT,
        }}
      >
        {stat.value}
      </div>
      <h3 className="mt-6 text-foreground font-medium text-xl tracking-tight">
        {stat.label}
      </h3>
      <p className="mt-2 text-gray-400 text-sm leading-relaxed">
        {stat.description}
      </p>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section className="min-h-screen bg-[#0A0A0B] flex flex-col items-center justify-center p-6 md:p-12">
      <div className="w-full max-w-[1024px] mb-16 text-center">
        <p className="text-xs font-medium tracking-[0.18em] text-white/50 mb-4">
          ⚡ RESULTADOS REALES
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight mb-4 leading-tight">
          Los números hablan solos
        </h2>
        <p className="text-gray-400 text-base md:text-lg leading-7 max-w-xl mx-auto">
          Impacto medible desde el primer mes. Sin promesas vacías.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 w-full max-w-[1024px]">
        {STATS.map((stat, i) => (
          <StatTile key={stat.label} stat={stat} index={i} />
        ))}
      </div>
    </section>
  );
}
