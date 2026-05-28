import { motion } from "motion/react";
import { BarChart3, Target, TrendingUp, X, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const SERVICES: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: BarChart3,
    title: "Setup y lanzamiento",
    description:
      "Pixel de Meta, eventos de conversión, audiencias, creatividades. Dejamos tu campaña lista para vender desde el día uno.",
  },
  {
    icon: Target,
    title: "Optimización continua",
    description:
      "Ajustamos creatividades, audiencias y presupuesto basados en data real, no en intuición ni en lo que se ve bonito.",
  },
  {
    icon: TrendingUp,
    title: "Reportería y ROAS",
    description:
      "Dashboard mensual con las métricas que importan: CPL, CPA, ROAS, conversiones. Sin humo, sin vanity metrics.",
  },
];

const PROJECTIONS = [
  { invest: "$1.000", commission: "$100", fee: "$449", total: "$549" },
  { invest: "$3.000", commission: "$300", fee: "$449", total: "$749" },
  { invest: "$5.000", commission: "$500", fee: "$449", total: "$949" },
  { invest: "$10.000", commission: "$1.000", fee: "$449", total: "$1.449" },
];

const NOT_INCLUDED = [
  "Community Management",
  "Contenido orgánico",
  "Calendario editorial",
];

const PRICE_GRADIENT =
  "linear-gradient(to left, #6366f1, #a855f7, #fcd34d)";
const HIGHLIGHT_GRADIENT =
  "linear-gradient(137deg, #FF3D77 0%, #FFB1CE 45%, #FF9D3C 100%)";

function ServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.08 }}
      className="group relative rounded-3xl border border-white/5 bg-white/[0.02] p-7 hover:border-white/15 hover:bg-white/[0.04] hover:-translate-y-1 hover:shadow-[0_16px_50px_-12px_rgba(168,85,247,0.22)] transition-all duration-500 ease-out"
    >
      <div className="liquid-glass w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-500 ease-out group-hover:scale-110">
        <service.icon size={20} strokeWidth={2.2} className="text-white/90" />
      </div>
      <h3 className="text-foreground font-medium text-lg tracking-tight mb-2">
        {service.title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  );
}

export default function PerformanceAdsSection() {
  return (
    <section
      className="bg-[#0A0A0B] flex flex-col items-center px-6 md:px-12 py-20 md:py-24"
    >
      <div className="w-full max-w-[1080px] mb-12 text-center">
        <p className="text-xs font-medium tracking-[0.18em] text-white/50 mb-4">
          📊 HEAT ADS · META PERFORMANCE
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight mb-4 leading-tight">
          Marketing digital que escala con tu inversión
        </h2>
        <p className="text-gray-400 text-base md:text-lg leading-7 max-w-2xl mx-auto">
          Diseñamos, lanzamos y optimizamos tus campañas de Meta (Facebook +
          Instagram), conectadas a la plataforma HEAT. Performance puro. Cero
          contenido orgánico.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1080px]">
        {SERVICES.map((s, i) => (
          <ServiceCard key={s.title} service={s} index={i} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
        className="relative mt-10 w-full max-w-[1080px] rounded-3xl overflow-hidden"
        style={{
          border: "1.5px solid transparent",
          background: `linear-gradient(#0E0E10, #0E0E10) padding-box, ${HIGHLIGHT_GRADIENT} border-box`,
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 p-8 md:p-10">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-white/60 mb-4">
              FEE FIJO MENSUAL
            </p>
            <div className="flex items-baseline gap-2">
              <span
                className="font-display font-medium bg-clip-text text-transparent"
                style={{
                  fontSize: "clamp(56px, 6vw, 88px)",
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                  backgroundImage: PRICE_GRADIENT,
                }}
              >
                $449
              </span>
              <span className="text-gray-400 text-sm">USD / mes</span>
            </div>
            <p className="mt-4 text-gray-300 text-sm leading-relaxed">
              + <span className="text-foreground font-medium">10%</span> sobre
              el{" "}
              <span className="text-foreground font-medium">
                total de la inversión
              </span>{" "}
              publicitaria mensual en Meta.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-gray-400">
              <li>✓ Fee bajo de entrada</li>
              <li>✓ Comisión proporcional a tu inversión</li>
              <li>✓ Incentivos alineados con tu crecimiento</li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-white/60 mb-4">
              PROYECCIÓN · CÓMO ESCALA EL TOTAL
            </p>
            <div className="overflow-x-auto rounded-2xl border border-white/5">
              <table className="w-full text-sm min-w-[460px]">
                <thead>
                  <tr className="bg-white/[0.03] text-xs text-gray-400 tracking-wider">
                    <th className="text-left px-4 py-3 font-medium">
                      Inversión
                    </th>
                    <th className="text-left px-4 py-3 font-medium">Fee</th>
                    <th className="text-left px-4 py-3 font-medium">
                      +10% Inversión
                    </th>
                    <th className="text-left px-4 py-3 font-medium">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {PROJECTIONS.map((row) => (
                    <tr
                      key={row.invest}
                      className="border-t border-white/5 text-gray-300"
                    >
                      <td className="px-4 py-3">{row.invest} USD</td>
                      <td className="px-4 py-3 text-gray-400">{row.fee}</td>
                      <td className="px-4 py-3 text-gray-400">
                        {row.commission}
                      </td>
                      <td className="px-4 py-3 font-medium text-foreground">
                        {row.total} USD
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-gray-500 leading-relaxed">
              Todos los montos en USD. La inversión publicitaria la pagas tú
              directamente a Meta con tu medio de pago.
            </p>
          </div>
        </div>
      </motion.div>

      {/* CTA → full /perform-ads page */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10 flex flex-col items-center gap-3"
      >
        <a
          href="/perform-ads"
          className="group relative inline-flex items-center justify-center gap-2 rounded-full liquid-glass text-foreground text-sm font-medium px-6 py-3 overflow-hidden transition-all duration-500 ease-out hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.35)]"
        >
          <span
            aria-hidden
            className="absolute inset-0 rounded-full bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"
          />
          <span className="relative z-10 transition-colors duration-500 ease-out group-hover:text-background inline-flex items-center gap-2">
            Ver más sobre Performance ADS
            <ArrowRight size={14} />
          </span>
        </a>
        <p className="text-xs text-gray-500">
          15 años de agencia · +250 clientes · CPA medido al cierre
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-10 w-full max-w-[1080px] rounded-2xl border border-white/5 bg-white/[0.01] p-6 md:p-8"
      >
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
          <p className="text-xs font-semibold tracking-[0.18em] text-white/50 shrink-0">
            LO QUE NO HACEMOS
          </p>
          <ul className="flex flex-wrap gap-2">
            {NOT_INCLUDED.map((item) => (
              <li
                key={item}
                className="group inline-flex items-center gap-2 rounded-full border border-transparent bg-transparent px-3 py-1.5 text-sm text-gray-400 hover:border-rose-500/25 hover:bg-rose-500/[0.06] hover:text-rose-100 transition-all duration-300 cursor-default"
              >
                <X
                  size={14}
                  strokeWidth={2.5}
                  className="text-gray-600 transition-colors duration-300 group-hover:text-rose-400"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-4 text-xs text-gray-500 leading-relaxed">
          Performance ADS y manejo orgánico son disciplinas distintas que
          requieren equipos distintos. Especializarnos solo en Meta ADS hace que
          entreguemos más ROI por cada dólar invertido.
        </p>
      </motion.div>
    </section>
  );
}
