import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

type Case = {
  industry: string;
  metric: string;
  metricLabel: string;
  quote: string;
  emoji: string;
  author: string;
  business: string;
  url: string;
};

const CASES: Case[] = [
  {
    industry: "CLÍNICA DENTAL",
    metric: "+127%",
    metricLabel: "más citas agendadas en 60 días",
    quote:
      "HEAT IA nos cambió la operación. Antes perdíamos pacientes por no contestar a tiempo. Ahora el agente agenda 24/7 y mi equipo se enfoca en la atención presencial.",
    emoji: "🦷",
    author: "Dra. Carolina M.",
    business: "GoSmile · Santiago, Chile",
    url: "https://www.gosmile.cl",
  },
  {
    industry: "E-COMMERCE · NUTRICIÓN",
    metric: "+83%",
    metricLabel: "más ventas por WhatsApp",
    quote:
      "Teníamos cientos de mensajes sin contestar cada día. Ahora la IA filtra, responde sobre productos y conecta al cliente con ventas solo cuando está listo para comprar.",
    emoji: "🛍️",
    author: "Rodrigo P.",
    business: "Vita Nutrición · Santiago, Chile",
    url: "https://www.vitanutricion.cl",
  },
  {
    industry: "RETAIL · ALIMENTOS",
    metric: "+150%",
    metricLabel: "más pedidos por canal digital",
    quote:
      "Vendemos barquillos en todo Chile y los pedidos volaban por WhatsApp. Con HEAT, el agente toma el pedido, agenda despacho y confirma pago — todo sin intervención manual.",
    emoji: "🍦",
    author: "Andrés F.",
    business: "Barquillos Chile · Santiago",
    url: "https://www.barquillos.cl",
  },
  {
    industry: "MODA · ALTA GAMA",
    metric: "+110%",
    metricLabel: "conversión en consulta premium",
    quote:
      "Nuestras clientas esperan atención de boutique en WhatsApp. HEAT IA mantiene ese estándar 24/7, recomienda con criterio de marca y agenda asesorías personalizadas.",
    emoji: "👗",
    author: "Camila R.",
    business: "Wolford Chile · Santiago",
    url: "https://www.wolforchile.cl",
  },
  {
    industry: "JOYERÍA · LUJO",
    metric: "+95%",
    metricLabel: "agendamiento de visitas exclusivas",
    quote:
      "Cada cliente que pregunta por una pieza es una venta potencial alta. HEAT IA califica con elegancia, agenda visitas presenciales y deriva a la asesora correcta. Cero leads perdidos.",
    emoji: "💎",
    author: "María José L.",
    business: "Joyería Gabriela Prieto · Santiago",
    url: "https://www.gabrielaprieto.cl",
  },
];

// Use hook for responsive carousel widths
function useCarouselSizing() {
  const [w, setW] = useState({ card: 360, offset: 310 });
  useEffect(() => {
    const compute = () => {
      const vw = window.innerWidth;
      if (vw < 480) setW({ card: 280, offset: 230 });
      else if (vw < 768) setW({ card: 320, offset: 270 });
      else setW({ card: 360, offset: 310 });
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);
  return w;
}

const AUTO_ROTATE_MS = 4000;
const METRIC_GRADIENT = "linear-gradient(to left, #6366f1, #a855f7, #fcd34d)";

function CaseCard({ data, width }: { data: Case; width: number }) {
  return (
    <div
      className="group relative flex h-full flex-col rounded-3xl border border-white/8 bg-[#0E0E14] p-6 md:p-7 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)]"
      style={{ width, minHeight: 380 }}
    >
      <p className="text-[10px] font-semibold tracking-[0.2em] text-white/50">
        {data.industry}
      </p>
      <div
        className="mt-4 font-display font-medium bg-clip-text text-transparent inline-block"
        style={{
          fontSize: "clamp(48px, 5vw, 72px)",
          lineHeight: 1,
          letterSpacing: "-0.04em",
          backgroundImage: METRIC_GRADIENT,
        }}
      >
        {data.metric}
      </div>
      <p className="mt-2 text-gray-400 text-sm">{data.metricLabel}</p>
      <p className="mt-6 flex-1 text-gray-300 text-[14px] leading-relaxed">
        "{data.quote}"
      </p>
      <div className="mt-6 flex items-center gap-3 border-t border-white/5 pt-5">
        <div className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center text-lg">
          {data.emoji}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-foreground text-sm font-medium truncate">
            {data.author}
          </p>
          <p className="text-gray-500 text-xs truncate">{data.business}</p>
        </div>
        <a
          href={data.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ir a ${data.business}`}
          className="shrink-0 text-gray-500 hover:text-foreground transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
}

export default function CaseStudiesSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { card: CARD_WIDTH, offset: CARD_OFFSET_X } = useCarouselSizing();

  useEffect(() => {
    if (paused) return;
    const t = setInterval(
      () => setIndex((i) => (i + 1) % CASES.length),
      AUTO_ROTATE_MS,
    );
    return () => clearInterval(t);
  }, [paused]);

  const N = CASES.length;
  const half = Math.floor(N / 2);

  return (
    <section
      id="casos"
      className="bg-[#0A0A0B] flex flex-col items-center px-6 md:px-12 pt-20 md:pt-24 pb-32 md:pb-40 scroll-mt-8"
    >
      <div className="w-full max-w-[1080px] mb-12 text-center">
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

      <div
        ref={containerRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="relative w-full max-w-[1280px] flex items-center justify-center h-[400px] sm:h-[400px]"
      >
        {CASES.map((c, i) => {
          let offset = i - index;
          if (offset > half) offset -= N;
          if (offset < -half) offset += N;
          const distance = Math.abs(offset);
          const isCenter = distance === 0;
          const isAdjacent = distance === 1;
          const isFar = distance === 2;
          return (
            <motion.div
              key={c.business}
              className="absolute top-1/2 left-1/2 -translate-y-1/2"
              animate={{
                x: offset * CARD_OFFSET_X - CARD_WIDTH / 2,
                scale: isCenter ? 1 : isAdjacent ? 0.85 : isFar ? 0.7 : 0.55,
                opacity: isCenter
                  ? 1
                  : isAdjacent
                    ? 0.4
                    : isFar
                      ? 0.12
                      : 0,
                zIndex: isCenter ? 30 : isAdjacent ? 20 : isFar ? 10 : 1,
                filter: isCenter
                  ? "blur(0px)"
                  : isAdjacent
                    ? "blur(1px)"
                    : "blur(3px)",
              }}
              transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
              style={{ width: CARD_WIDTH }}
              onClick={() => !isCenter && setIndex(i)}
            >
              <div className={isCenter ? "" : "cursor-pointer"}>
                <CaseCard data={c} width={CARD_WIDTH} />
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-12 flex items-center gap-5">
        <button
          aria-label="Anterior"
          onClick={() => setIndex((i) => (i - 1 + N) % N)}
          className="w-11 h-11 rounded-full liquid-glass flex items-center justify-center text-foreground hover:scale-110 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] transition-all duration-300"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="flex items-center gap-2">
          {CASES.map((_, i) => {
            const active = i === index;
            return (
              <button
                key={i}
                aria-label={`Caso ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`rounded-full transition-all duration-400 ${
                  active
                    ? "w-6 h-1.5 bg-foreground"
                    : "w-1.5 h-1.5 bg-white/25 hover:bg-white/50"
                }`}
              />
            );
          })}
        </div>

        <button
          aria-label="Siguiente"
          onClick={() => setIndex((i) => (i + 1) % N)}
          className="w-11 h-11 rounded-full liquid-glass flex items-center justify-center text-foreground hover:scale-110 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] transition-all duration-300"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}
