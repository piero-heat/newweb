import { motion } from "motion/react";
import { Check } from "lucide-react";
import HeatNetworkDiagram from "./HeatNetworkDiagram";

const STAT_GRADIENT = "linear-gradient(to left, #6366f1, #a855f7, #fcd34d)";

const STATS: { value: string; label: string; sub: string }[] = [
  {
    value: "+30",
    label: "Integraciones nativas",
    sub: "WhatsApp, Shopify, Mercado Pago, Dentalink, Google Ads, TikTok…",
  },
  {
    value: "5 días",
    label: "Setup completo",
    sub: "Nosotros configuramos. Tu equipo se enfoca en cerrar ventas.",
  },
  {
    value: "0",
    label: "Líneas de código de tu lado",
    sub: "Migración incluida. Sin desarrolladores, sin friction.",
  },
];

const BENEFITS = [
  "Conectamos a las herramientas que ya tienes",
  "Sin migrar a sistemas nuevos",
  "Sin código de tu lado",
  "Webhooks + API para lo que falte",
];

export default function LiveAgentSection() {
  return (
    <section className="bg-[#0A0A0B] flex flex-col items-center px-6 md:px-12 py-20 md:py-24">
      <div className="w-full max-w-[1080px] mb-12 text-center">
        <p className="text-xs font-medium tracking-[0.18em] text-white/50 mb-4">
          🔌 STACK CONECTADO
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight mb-4 leading-tight">
          Conectado con todo tu stack
        </h2>
        <p className="text-gray-400 text-base md:text-lg leading-7 max-w-2xl mx-auto">
          Sin migrar a un sistema nuevo. HEAT se enchufa a las herramientas
          que ya funcionan en tu negocio.
        </p>
      </div>

      <div className="grid w-full max-w-[1200px] gap-12 lg:gap-16 lg:grid-cols-2 items-center">
        <div className="space-y-8">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
              className="relative"
            >
              <div
                className="font-display font-medium bg-clip-text text-transparent inline-block leading-none"
                style={{
                  fontSize: "clamp(56px, 7vw, 88px)",
                  letterSpacing: "-0.04em",
                  backgroundImage: STAT_GRADIENT,
                }}
              >
                {s.value}
              </div>
              <p className="mt-2 text-foreground text-lg font-medium tracking-tight">
                {s.label}
              </p>
              <p className="mt-1 text-gray-400 text-sm leading-relaxed max-w-md">
                {s.sub}
              </p>
            </motion.div>
          ))}

          <motion.ul
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/[0.06] max-w-md"
          >
            {BENEFITS.map((b) => (
              <li
                key={b}
                className="flex items-start gap-2 text-sm text-gray-300"
              >
                <Check
                  size={14}
                  strokeWidth={2.5}
                  className="mt-0.5 shrink-0 text-emerald-400"
                />
                <span>{b}</span>
              </li>
            ))}
          </motion.ul>
        </div>

        <HeatNetworkDiagram />
      </div>
    </section>
  );
}
