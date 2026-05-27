import { motion } from "motion/react";
import { BarChart3, Target, TrendingUp, X } from "lucide-react";
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
  { invest: "Hasta $1M CLP", excess: "$0", fee: "$449", total: "$449 USD" },
  { invest: "$3M CLP", excess: "$2M", fee: "$449", total: "$660 USD" },
  { invest: "$5M CLP", excess: "$4M", fee: "$449", total: "$870 USD" },
  { invest: "$10M CLP", excess: "$9M", fee: "$449", total: "$1.396 USD" },
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
      className="relative rounded-3xl border border-white/5 bg-white/[0.02] p-7 hover:border-white/15 hover:bg-white/[0.04] transition-colors duration-300"
    >
      <div className="liquid-glass w-12 h-12 rounded-xl flex items-center justify-center mb-5">
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
    <section className="min-h-screen bg-[#0A0A0B] flex flex-col items-center justify-center p-6 md:p-12">
      <div className="w-full max-w-[1080px] mb-16 text-center">
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
              + <span className="text-foreground font-medium">10%</span> solo
              sobre el monto que supera{" "}
              <span className="text-foreground font-medium">$1.000.000 CLP</span>{" "}
              de inversión mensual.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-gray-400">
              <li>✓ Fee bajo de entrada</li>
              <li>✓ Solo cobramos el exceso</li>
              <li>✓ Incentivos alineados con tu crecimiento</li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-white/60 mb-4">
              PROYECCIÓN · CÓMO ESCALA EL TOTAL
            </p>
            <div className="overflow-hidden rounded-2xl border border-white/5">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-white/[0.03] text-xs text-gray-400 tracking-wider">
                    <th className="text-left px-4 py-3 font-medium">
                      Inversión
                    </th>
                    <th className="text-left px-4 py-3 font-medium">Fee</th>
                    <th className="text-left px-4 py-3 font-medium">
                      +10% Exceso
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
                      <td className="px-4 py-3">{row.invest}</td>
                      <td className="px-4 py-3 text-gray-400">{row.fee}</td>
                      <td className="px-4 py-3 text-gray-400">
                        {row.excess === "$0"
                          ? "—"
                          : `~${Math.round(
                              parseInt(row.excess.replace(/[$M]/g, "")) *
                                100000,
                            ).toLocaleString()} CLP`}
                      </td>
                      <td className="px-4 py-3 font-medium text-foreground">
                        {row.total}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-gray-500 leading-relaxed">
              Tasa referencial 1 USD ≈ 950 CLP. La inversión publicitaria la
              pagas tú directamente a Meta.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-10 w-full max-w-[1080px] rounded-2xl border border-white/5 bg-white/[0.01] p-6 md:p-8"
      >
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <p className="text-xs font-semibold tracking-[0.18em] text-white/50 shrink-0">
            LO QUE NO HACEMOS
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {NOT_INCLUDED.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm text-gray-400"
              >
                <X size={14} strokeWidth={2.5} className="text-gray-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-4 text-xs text-gray-500 leading-relaxed">
          Performance ADS y manejo orgánico son disciplinas distintas que
          requieren equipos distintos. Especializarnos solo en Meta Ads hace que
          entreguemos más ROI por cada dólar invertido.
        </p>
      </motion.div>
    </section>
  );
}
