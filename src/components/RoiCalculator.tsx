import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { Calculator, TrendingUp, ArrowRight } from "lucide-react";

/* ────────────────────────────────────────────────────────────── */
/* RoiCalculator — calculadora interactiva de leads perdidos.     */
/* Refuerza el dolor del hero ("no poder atenderlos") con un      */
/* número de plata concreto. Inputs por slider, output en vivo.   */
/* ────────────────────────────────────────────────────────────── */

const HEAT_GRADIENT =
  "linear-gradient(90deg, #7DD3FC 0%, #A855F7 50%, #FCD34D 100%)";
const AMBER_GRADIENT =
  "linear-gradient(90deg, #FCD34D 0%, #F59E0B 100%)";

type SliderProps = {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  suffix?: string;
  prefix?: string;
  onChange: (v: number) => void;
  format?: (v: number) => string;
};

function Slider({
  label,
  value,
  min,
  max,
  step,
  suffix,
  prefix,
  onChange,
  format,
}: SliderProps) {
  const display = format ? format(value) : value.toLocaleString("es-CL");
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-baseline justify-between mb-2">
        <label className="text-[13px] text-gray-300">{label}</label>
        <span className="text-[15px] font-semibold text-foreground tabular-nums">
          {prefix}
          {display}
          {suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="heat-range w-full"
        style={{
          background: `linear-gradient(to right, #a855f7 0%, #a855f7 ${pct}%, rgba(255,255,255,0.1) ${pct}%, rgba(255,255,255,0.1) 100%)`,
        }}
      />
    </div>
  );
}

function fmtUSD(n: number) {
  return "$" + Math.round(n).toLocaleString("en-US");
}

export default function RoiCalculator() {
  const [leads, setLeads] = useState(150); // leads nuevos / mes
  const [lostPct, setLostPct] = useState(30); // % que NO alcanzas a contestar
  const [ticket, setTicket] = useState(300); // valor promedio de un cliente (USD)
  const [closeRate, setCloseRate] = useState(20); // % cierre cuando contestas a tiempo

  const { lostLeads, recoveredSales, monthly, yearly } = useMemo(() => {
    const lostLeads = Math.round((leads * lostPct) / 100);
    const recoveredSales = (lostLeads * closeRate) / 100;
    const monthly = recoveredSales * ticket;
    return {
      lostLeads,
      recoveredSales: Math.round(recoveredSales),
      monthly,
      yearly: monthly * 12,
    };
  }, [leads, lostPct, ticket, closeRate]);

  return (
    <section className="relative bg-[#0A0A0B] px-6 md:px-12 py-20 md:py-28 border-t border-white/[0.05] overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(50% 60% at 80% 20%, rgba(252,211,77,0.10), transparent 60%), radial-gradient(50% 60% at 20% 90%, rgba(168,85,247,0.12), transparent 65%)",
        }}
      />
      <div className="relative mx-auto max-w-[1080px]">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] text-white/50 mb-4">
            <Calculator size={13} className="text-amber-300" />
            CALCULADORA
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-medium text-white tracking-tight leading-tight mb-3">
            ¿Cuánto estás dejando{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: HEAT_GRADIENT }}
            >
              sobre la mesa
            </span>
            ?
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-7 max-w-xl mx-auto">
            Cada lead que no contestas a tiempo es una venta que se va con la
            competencia. Mira cuánto recuperarías con un agente que responde
            24/7.
          </p>
        </div>

        {/* Grid: inputs · resultado */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Inputs */}
          <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-8 space-y-7">
            <Slider
              label="Leads nuevos al mes"
              value={leads}
              min={10}
              max={1000}
              step={10}
              onChange={setLeads}
            />
            <Slider
              label="% de leads que NO alcanzas a contestar a tiempo"
              value={lostPct}
              min={5}
              max={70}
              step={1}
              suffix="%"
              onChange={setLostPct}
            />
            <Slider
              label="Valor promedio de un cliente"
              value={ticket}
              min={50}
              max={5000}
              step={50}
              prefix="$"
              suffix=" USD"
              onChange={setTicket}
              format={(v) => v.toLocaleString("en-US")}
            />
            <Slider
              label="Tu tasa de cierre cuando contestas a tiempo"
              value={closeRate}
              min={5}
              max={60}
              step={1}
              suffix="%"
              onChange={setCloseRate}
            />
            <p className="text-[11px] text-gray-500 leading-5 pt-1">
              Estimación referencial en USD. Tu resultado real depende de tu
              industria y ejecución — en la demo te mostramos tu caso.
            </p>
          </div>

          {/* Resultado */}
          <div
            className="relative rounded-3xl p-6 md:p-8 flex flex-col justify-center overflow-hidden"
            style={{
              border: "1.5px solid transparent",
              background: `linear-gradient(#0E0E14, #0E0E14) padding-box, ${HEAT_GRADIENT} border-box`,
            }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                background:
                  "radial-gradient(60% 70% at 50% 0%, rgba(168,85,247,0.18), transparent 65%)",
              }}
            />
            <div className="relative text-center">
              <p className="text-[11px] font-semibold tracking-[0.2em] text-white/50 mb-2">
                RECUPERARÍAS HASTA
              </p>
              <motion.div
                key={monthly}
                initial={{ opacity: 0.4, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="font-display font-medium bg-clip-text text-transparent leading-none mb-1"
                style={{
                  fontSize: "clamp(44px, 7vw, 72px)",
                  letterSpacing: "-0.03em",
                  backgroundImage: AMBER_GRADIENT,
                }}
              >
                {fmtUSD(monthly)}
              </motion.div>
              <p className="text-gray-300 text-sm mb-7">al mes en ventas perdidas</p>

              <div className="grid grid-cols-3 gap-3 mb-7">
                <Stat value={lostLeads.toLocaleString("es-CL")} label="leads perdidos / mes" />
                <Stat value={recoveredSales.toLocaleString("es-CL")} label="ventas recuperables / mes" />
                <Stat value={fmtUSD(yearly)} label="al año" highlight />
              </div>

              <a
                href="/#demo"
                className="group inline-flex items-center justify-center gap-2 w-full rounded-full text-background text-sm font-semibold px-6 py-3.5 bg-foreground transition-transform hover:scale-[1.02]"
              >
                <TrendingUp size={16} />
                Recupera esas ventas con HEAT
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  value,
  label,
  highlight,
}: {
  value: string;
  label: string;
  highlight?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-2 py-3">
      <p
        className={`font-display font-medium leading-none tabular-nums ${
          highlight ? "" : "text-foreground"
        }`}
        style={
          highlight
            ? {
                fontSize: "clamp(16px, 2vw, 20px)",
                backgroundImage: AMBER_GRADIENT,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }
            : { fontSize: "clamp(18px, 2.2vw, 24px)" }
        }
      >
        {value}
      </p>
      <p className="text-[10px] text-gray-500 mt-1.5 leading-tight">{label}</p>
    </div>
  );
}
