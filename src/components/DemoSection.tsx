import { useEffect } from "react";
import { motion } from "motion/react";
import { Target, Zap, Gift } from "lucide-react";

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

const HIGHLIGHT_GRADIENT =
  "linear-gradient(137deg, #6366f1 0%, #a855f7 50%, #fcd34d 100%)";

// Reunión Demo Online HEAT · 30 minutos (mismo calendario del popup).
const CALENDAR_URL =
  "https://go.heatlatam.com/widget/booking/jZtrNyIhd4n3PGcBqJvi";
const CALENDAR_HEIGHT = 820;

export default function DemoSection() {
  // Cargar form_embed.js de GHL para que el iframe se auto-ajuste de alto
  useEffect(() => {
    if (
      document.querySelector<HTMLScriptElement>('script[src*="form_embed.js"]')
    ) {
      return;
    }
    const script = document.createElement("script");
    script.src = "https://go.heatlatam.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section
      id="demo"
      className="relative bg-[#0A0A0B] flex flex-col items-center px-6 md:px-12 py-20 md:py-24 scroll-mt-8 overflow-hidden"
    >
      {/* Spotlight púrpura detrás del calendario */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 70%, rgba(168,85,247,0.16), transparent 65%)",
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

      {/* Value props · 3 columnas horizontales */}
      <motion.ul
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-full max-w-[1080px] grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-10"
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

      {/* Calendar embed · full-width con gradient border + glow */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="relative w-full max-w-[1080px] rounded-3xl overflow-hidden shadow-[0_40px_120px_-30px_rgba(168,85,247,0.45),0_0_0_1px_rgba(255,255,255,0.03)]"
        style={{
          border: "1.5px solid transparent",
          background: `linear-gradient(#FFFFFF, #FFFFFF) padding-box, ${HIGHLIGHT_GRADIENT} border-box`,
        }}
      >
        <iframe
          src={CALENDAR_URL}
          title="HEAT · Reserva tu Demo Online"
          width="100%"
          height={CALENDAR_HEIGHT}
          style={{ border: "none", display: "block" }}
          scrolling="no"
          loading="lazy"
        />
      </motion.div>

      <p className="relative mt-6 text-xs text-gray-500 text-center">
        Sin compromiso · Sin letra chica · 30 minutos por videollamada
      </p>
    </section>
  );
}
