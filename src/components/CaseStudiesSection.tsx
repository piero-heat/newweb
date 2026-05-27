import { motion } from "motion/react";
import { Star } from "lucide-react";

const CASES = [
  {
    industry: "CLÍNICA DENTAL",
    metric: "+127%",
    metricLabel: "más citas agendadas en 60 días",
    quote:
      "HEAT IA nos cambió la operación. Antes perdíamos pacientes por no contestar a tiempo. Ahora el agente agenda 24/7 y mi equipo se enfoca en la atención presencial.",
    emoji: "🦷",
    author: "Dra. Carolina M.",
    business: "Clínica Dental Premium · Santiago, Chile",
  },
  {
    industry: "E-COMMERCE",
    metric: "+83%",
    metricLabel: "más ventas por WhatsApp",
    quote:
      "Teníamos cientos de mensajes sin contestar cada día. Ahora la IA filtra, responde sobre productos y conecta al cliente con ventas solo cuando está listo para comprar.",
    emoji: "🛍️",
    author: "Rodrigo P.",
    business: "Tienda Online · Ciudad de México",
  },
  {
    industry: "INMOBILIARIA",
    metric: "+200%",
    metricLabel: "más leads calificados al mes",
    quote:
      "Nuestros agentes recibían demasiados curiosos. Con HEAT IA, solo llegan prospectos precalificados con presupuesto y urgencia real. El equipo cierra más con menos esfuerzo.",
    emoji: "🏠",
    author: "Andrés F.",
    business: "Inmobiliaria Sur · Bogotá, Colombia",
  },
] as const;

const METRIC_GRADIENT =
  "linear-gradient(to left, #6366f1, #a855f7, #fcd34d)";

function CaseCard({
  data,
  index,
}: {
  data: (typeof CASES)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.08 }}
      className="relative flex h-full flex-col rounded-3xl border border-white/5 bg-white/[0.02] p-8 hover:border-white/15 hover:bg-white/[0.04] transition-colors duration-300"
    >
      <p className="text-[10px] font-semibold tracking-[0.2em] text-white/50">
        {data.industry}
      </p>

      <div
        className="mt-4 font-display font-medium bg-clip-text text-transparent inline-block"
        style={{
          fontSize: "clamp(52px, 5.5vw, 80px)",
          lineHeight: 1,
          letterSpacing: "-0.04em",
          backgroundImage: METRIC_GRADIENT,
        }}
      >
        {data.metric}
      </div>
      <p className="mt-2 text-gray-400 text-sm">{data.metricLabel}</p>

      <p className="mt-6 flex-1 text-gray-300 text-[15px] leading-relaxed">
        “{data.quote}”
      </p>

      <div className="mt-6 flex items-center gap-3 border-t border-white/5 pt-5">
        <div className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center text-lg">
          {data.emoji}
        </div>
        <div>
          <p className="text-foreground text-sm font-medium">{data.author}</p>
          <p className="text-gray-500 text-xs">{data.business}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function CaseStudiesSection() {
  return (
    <section className="min-h-screen bg-[#0A0A0B] flex flex-col items-center justify-center p-6 md:p-12">
      <div className="w-full max-w-[1080px] mb-16 text-center">
        <p className="text-xs font-medium tracking-[0.18em] text-white/50 mb-4">
          🏆 CASOS DE ÉXITO
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight mb-4 leading-tight">
          Resultados reales de negocios reales
        </h2>
        <p className="text-gray-400 text-base md:text-lg leading-7 max-w-xl mx-auto">
          Más de 100 negocios en LATAM y EEUU ya confían en HEAT IA para
          potenciar sus ventas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1080px]">
        {CASES.map((c, i) => (
          <CaseCard key={c.industry} data={c} index={i} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        className="mt-10 flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5"
      >
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={14}
              className="fill-yellow-300 stroke-yellow-300"
            />
          ))}
        </div>
        <p className="text-sm text-gray-300">
          <span className="font-semibold text-white">5.0</span> · 11 reseñas en
          Google · Heat Agency
        </p>
      </motion.div>
    </section>
  );
}
