import { motion } from "motion/react";
import { ClipboardList, Target, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const STEPS: {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  duration: string;
}[] = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Registro",
    description:
      "Eliges tu plan, completas el formulario y agendas tu videollamada de bienvenida.",
    duration: "2 minutos",
  },
  {
    number: "02",
    icon: Target,
    title: "Implementación",
    description:
      "Configuramos tu agente IA, embudos e integraciones. Incluye migración de tu plataforma anterior si la tienes.",
    duration: "5 días hábiles",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Todo listo",
    description:
      "Tu sistema activo trabajando junto a tu equipo 24/7. Acceso a academia online, comunidad VIP y soporte.",
    duration: "Resultados desde el día 1",
  },
];

const ACCENT_GRADIENT =
  "linear-gradient(to left, #6366f1, #a855f7, #fcd34d)";

export default function ProcessSection() {
  return (
    <section className="min-h-screen bg-[#0A0A0B] flex flex-col items-center justify-center p-6 md:p-12">
      <div className="w-full max-w-[1080px] mb-16 text-center">
        <p className="text-xs font-medium tracking-[0.18em] text-white/50 mb-4">
          🚀 PROCESO
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight mb-4 leading-tight">
          En marcha en 3 pasos
        </h2>
        <p className="text-gray-400 text-base md:text-lg leading-7 max-w-xl mx-auto">
          Sin complicaciones técnicas. Nuestro equipo se encarga de absolutamente
          todo.
        </p>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1080px]">
        <div
          aria-hidden
          className="hidden md:block absolute top-[80px] left-[12%] right-[12%] h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(255,255,255,0.12), transparent)",
          }}
        />

        {STEPS.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
            className="relative flex flex-col items-center text-center"
          >
            <div className="relative liquid-glass w-16 h-16 rounded-2xl flex items-center justify-center mb-6 z-10">
              <step.icon
                size={22}
                strokeWidth={2.2}
                className="text-white/90"
              />
            </div>

            <span
              className="font-display font-medium bg-clip-text text-transparent"
              style={{
                fontSize: 36,
                lineHeight: 1,
                letterSpacing: "-0.03em",
                backgroundImage: ACCENT_GRADIENT,
              }}
            >
              {step.number}
            </span>

            <h3 className="mt-3 text-white font-medium text-xl tracking-tight">
              {step.title}
            </h3>
            <p className="mt-3 text-gray-400 text-sm leading-relaxed max-w-[280px]">
              {step.description}
            </p>
            <p className="mt-4 text-xs text-white/50 tracking-wide">
              ⏱ {step.duration}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
