import { useState } from "react";
import { motion } from "motion/react";
import { Target, Zap, Gift, CalendarDays } from "lucide-react";
import CalendarModal from "@/components/CalendarModal";

const VALUE_PROPS = [
  {
    icon: Target,
    title: "Diagnóstico personalizado",
    description:
      "Analizamos tu negocio y te mostramos exactamente cómo implementar los agentes IA.",
  },
  {
    icon: Zap,
    title: "Demo en vivo de tu industria",
    description:
      "Te mostramos casos reales de negocios similares al tuyo ya funcionando con HEAT IA.",
  },
  {
    icon: Gift,
    title: "Implementación en 5 días hábiles",
    description:
      "Nuestro equipo configura todo por ti. Arrancamos apenas confirmes tu plan.",
  },
];

// Gradient con ONDA — rosado → morado → celeste
const HEAT_VIBES_GRADIENT =
  "linear-gradient(137deg, #FF3D77 0%, #A855F7 50%, #7DD3FC 100%)";

export default function DemoSection() {
  const [calOpen, setCalOpen] = useState(false);

  return (
    <section
      id="demo"
      className="relative bg-[#0A0A0B] flex flex-col items-center px-6 md:px-12 py-20 md:py-24 scroll-mt-8 overflow-hidden"
    >
      {/* Spotlight en el bg */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 70%, rgba(168,85,247,0.18), transparent 65%), radial-gradient(40% 30% at 50% 80%, rgba(255,61,119,0.08), transparent 70%)",
        }}
      />

      {/* Header */}
      <div className="relative w-full max-w-[1080px] mb-10 text-center">
        <p className="text-xs font-medium tracking-[0.18em] text-white/50 mb-4">
          📅 DEMO GRATUITA
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight mb-4 leading-tight">
          Agenda tu Demo Gratis
        </h2>
        <p className="text-gray-400 text-base md:text-lg leading-7 max-w-xl mx-auto">
          En 30 minutos te mostramos cómo HEAT IA puede potenciar la operación
          de tu negocio. Sin compromiso, sin letra chica.
        </p>
      </div>

      {/* Value props · 3 columnas */}
      <motion.ul
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-full max-w-[1080px] grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-14"
      >
        {VALUE_PROPS.map((vp, i) => (
          <motion.li
            key={vp.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.05 + i * 0.08, ease: "easeOut" }}
            className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 md:p-6 hover:border-white/15 hover:bg-white/[0.04] hover:-translate-y-0.5 transition-all duration-500 ease-out"
          >
            <div className="liquid-glass w-11 h-11 rounded-xl flex items-center justify-center mb-4">
              <vp.icon size={18} strokeWidth={2.2} className="text-white/90" />
            </div>
            <h3 className="text-white font-medium text-[15px] tracking-tight">
              {vp.title}
            </h3>
            <p className="mt-1.5 text-gray-400 text-[13px] leading-relaxed">
              {vp.description}
            </p>
          </motion.li>
        ))}
      </motion.ul>

      {/* CTA con ONDA — solo el botón, sin caluga */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        className="relative flex flex-col items-center gap-4"
      >
        {/* Glow pulsante detrás del botón */}
        <motion.div
          aria-hidden
          animate={{
            opacity: [0.5, 0.85, 0.5],
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -inset-12 blur-3xl rounded-full"
          style={{ background: HEAT_VIBES_GRADIENT, opacity: 0.45 }}
        />

        {/* Botón gradient-border con efecto group:hover shine */}
        <button
          type="button"
          onClick={() => setCalOpen(true)}
          className="group relative inline-flex items-center justify-center rounded-full overflow-hidden transition-transform duration-500 ease-out hover:scale-[1.03]"
          style={{
            padding: "2px",
            background: HEAT_VIBES_GRADIENT,
            boxShadow:
              "0 18px 60px -12px rgba(168, 85, 247, 0.55), 0 6px 24px -6px rgba(255, 61, 119, 0.35)",
          }}
        >
          {/* Inner dark capsule */}
          <span
            className="relative inline-flex items-center justify-center gap-2.5 rounded-full bg-[#0A0A0B] text-foreground font-medium px-8 md:px-10 py-4 md:py-5 text-[15px] md:text-base transition-colors duration-500 ease-out group-hover:bg-[#13131A]"
          >
            {/* Animated shimmer sweep */}
            <span
              aria-hidden
              className="absolute inset-0 rounded-full overflow-hidden"
            >
              <span
                className="absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 transition-transform duration-1000 ease-out group-hover:translate-x-[450%]"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)",
                }}
              />
            </span>
            <CalendarDays size={18} strokeWidth={2.2} className="relative" />
            <span className="relative">Reservá tu demo gratis</span>
          </span>
        </button>

        <p className="relative text-xs text-gray-500 mt-1">
          30 minutos · Por videollamada · Sin compromiso
        </p>
      </motion.div>

      <CalendarModal open={calOpen} onClose={() => setCalOpen(false)} />
    </section>
  );
}
