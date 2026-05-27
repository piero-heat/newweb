import { motion } from "motion/react";
import {
  Target,
  GaugeCircle,
  Layers,
  Filter,
  Database,
  ArrowRight,
  Check,
  X,
  Calendar,
  TrendingUp,
  Users,
  Award,
  Video,
  Film,
  Clapperboard,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingCard, { type PricingCardProps } from "@/components/PricingCard";

/* ────────────────────────────────────────────────────────────── */
/* DATA                                                            */
/* ────────────────────────────────────────────────────────────── */

const HERO_STATS = [
  { value: "15+", label: "Años como agencia" },
  { value: "+250", label: "Clientes manejados" },
  { value: "$10M+", label: "USD gestionados en Meta" },
  { value: "4", label: "Países activos" },
];

const PILLARS = [
  {
    icon: Database,
    title: "API conectada al CRM",
    description:
      "La Conversion API de Meta envía cada evento de tu CRM (lead, visita agendada, compra) de vuelta al algoritmo. Meta optimiza con datos reales del cierre — no con clics o impresiones.",
  },
  {
    icon: Filter,
    title: "Calidad de leads, no volumen",
    description:
      "Filtramos al lead antes de gastar plata. El agente de IA precalifica en WhatsApp y descarta a los curiosos. El presupuesto se concentra en quien va a comprar.",
  },
  {
    icon: Layers,
    title: "Estructura de campaña por etapa",
    description:
      "Campañas separadas por intención: top-funnel (awareness), middle (consideración), bottom (conversión + retargeting). Cada una con creatividades, audiencias y bidding distintos.",
  },
  {
    icon: GaugeCircle,
    title: "CPA medido al cierre, no al clic",
    description:
      "Reportamos el CPA real — cuánto te cuesta cada venta cerrada, no cada formulario llenado. Es la única métrica que importa cuando estás invirtiendo plata propia.",
  },
];

const CPA_STEPS = [
  {
    title: "1 · Define qué es 'cliente' para ti",
    description:
      "No es el lead que se registra. Es el que paga, agenda y cierra. Marcamos ese evento como la conversión real en el CRM.",
  },
  {
    title: "2 · Sumá todo lo que invertiste",
    description:
      "Inversión en Meta + gestión + creatividades + setup técnico. Todo lo que gastaste por un período (mes, trimestre).",
  },
  {
    title: "3 · Divide entre clientes cerrados",
    description: (
      <>
        CPA real ={" "}
        <span className="text-foreground font-medium">
          Inversión total ÷ Clientes que pagaron
        </span>
        . Eso te dice cuánto te cuesta cada venta — y si tu LTV lo sostiene.
      </>
    ),
  },
  {
    title: "4 · Optimizá para que baje cada mes",
    description:
      "Si tu CPA es $80 y tu cliente vale $300 de LTV, podes escalar inversión. Si es $150, hay que iterar creatividades, audiencias o el funnel completo.",
  },
];

const LEAD_STAGES = [
  {
    label: "100%",
    title: "Click en el ad",
    desc: "Tráfico crudo desde Meta. Sin filtrar.",
  },
  {
    label: "30%",
    title: "Conversación iniciada",
    desc: "El agente arranca a calificar.",
  },
  {
    label: "12%",
    title: "Lead calificado (MQL)",
    desc: "Tiene presupuesto, urgencia y fit.",
  },
  {
    label: "5%",
    title: "Reunión agendada",
    desc: "Pasa al equipo comercial.",
  },
  {
    label: "2%",
    title: "Cliente cerrado",
    desc: "Pagó, agendó y firmó.",
  },
];

const FAQ = [
  {
    q: "¿Por qué solo Meta? ¿No deberíamos sumar Google Ads?",
    a: "Para PyMEs con ticket medio (<$5K USD) y ciclo corto, Meta vence a Google Ads en ROI 9 de 10 veces. Cuando estás listo para escalar a $15K USD/mes en ads, sumamos Google. Antes, dispersa tu plata.",
  },
  {
    q: "¿Qué pasa si mis campañas anteriores no funcionaron?",
    a: "Casi nunca es problema del algoritmo de Meta. Es: 1) creatividades flojas, 2) audiencia mal segmentada, 3) Pixel sin eventos de fondo, 4) leads sin calificar después del ad. Auditamos los 4 puntos antes de tocar presupuesto.",
  },
  {
    q: "¿Cuánto demora ver resultados?",
    a: "Semana 1-2: setup + aprendizaje del algoritmo. Semana 3-4: primeras conversiones a CPA aceptable. Mes 2-3: optimización + escalado. Cualquiera que te prometa resultados en 7 días te está mintiendo.",
  },
  {
    q: "¿La inversión publicitaria entra en el fee?",
    a: "No. Tú pagas Meta directamente con tu medio de pago (tu cuenta, tu control). Nuestro fee es solo por gestión: $449 USD + 10% sobre lo que supere $1.000 USD de inversión.",
  },
  {
    q: "¿Y si invierto poco al inicio?",
    a: "Recomendamos $1.000 USD/mes mínimo para que Meta tenga data suficiente para optimizar. Con menos, el algoritmo no aprende y el CPA se dispara. Si recién empezás, parte con $1.000-$2.000 y escalá según ROI.",
  },
];

const NOT_INCLUDED = [
  "Community management",
  "Posteo orgánico",
  "Calendario editorial",
  "Reels orgánicos",
  "Diseño de feed",
];

const PRICE_GRADIENT = "linear-gradient(to left, #6366f1, #a855f7, #fcd34d)";
const HIGHLIGHT_GRADIENT =
  "linear-gradient(137deg, #FF3D77 0%, #FFB1CE 45%, #FF9D3C 100%)";

// Video Ad creative packs — production for Meta paid ads only.
const VIDEO_PACKS: PricingCardProps[] = [
  {
    icon: Video,
    name: "3 VIDEOS",
    tagline: "≈ $197 USD por video. Para arrancar tu primera campaña.",
    price: "590",
    billing: "pago único",
    features: [
      "Guion estratégico",
      "Grabación profesional",
      "Edición optimizada para Meta Ads",
      "Entrega lista para subir",
    ],
    ctaLabel: "Pedir pack →",
    delay: 0.05,
  },
  {
    icon: Film,
    name: "5 VIDEOS",
    tagline: "≈ $170 USD por video. Renovar creativos cada mes.",
    price: "850",
    billing: "pago único",
    features: [
      "Guion estratégico",
      "Grabación profesional",
      "Edición optimizada para Meta Ads",
      "Entrega lista para subir",
    ],
    highlighted: true,
    highlightLabel: "MEJOR VALOR",
    ctaLabel: "Pedir pack →",
    delay: 0.15,
  },
  {
    icon: Clapperboard,
    name: "10 VIDEOS",
    tagline: "≈ $150 USD por video. Pipeline creativo trimestral.",
    price: "1.500",
    billing: "pago único",
    features: [
      "Guion estratégico",
      "Grabación profesional",
      "Edición optimizada para Meta Ads",
      "Entrega lista para subir",
    ],
    ctaLabel: "Pedir pack →",
    delay: 0.25,
  },
];

/* ────────────────────────────────────────────────────────────── */
/* PAGE                                                            */
/* ────────────────────────────────────────────────────────────── */

export default function PerformAds() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative bg-[#0A0A0B] px-6 md:px-12 pt-12 md:pt-16 pb-20 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(255,61,119,0.18), transparent 50%), radial-gradient(circle at 70% 70%, rgba(255,157,60,0.12), transparent 55%)",
          }}
        />
        <div className="relative mx-auto max-w-[1080px] text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-white/70 mb-6"
          >
            📊 PERFORM &amp; ADS · 15 AÑOS DE AGENCIA
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-medium text-white tracking-tight leading-[1.02] mb-5"
            style={{
              fontSize: "clamp(38px, 5.2vw, 68px)",
              letterSpacing: "-0.035em",
            }}
          >
            No vendemos clics.
            <br />
            Vendemos{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #FFB1CE, #FF3D77, #FF9D3C)",
              }}
            >
              clientes cerrados.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-base md:text-lg leading-7 max-w-2xl mx-auto mb-8"
          >
            15 años manejando campañas en Meta para más de 250 marcas en LATAM y
            EEUU. Performance puro, CPA medido al cierre y leads calificados
            por IA antes de tocar a tu equipo comercial.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="/#demo"
              className="group relative inline-flex items-center justify-center gap-2 rounded-full liquid-glass text-foreground text-sm font-medium px-6 py-3 overflow-hidden transition-all duration-500 ease-out hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.35)]"
            >
              <span
                aria-hidden
                className="absolute inset-0 rounded-full bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"
              />
              <span className="relative z-10 transition-colors duration-500 ease-out group-hover:text-background inline-flex items-center gap-2">
                Hablemos de tu CPA
                <ArrowRight size={14} />
              </span>
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 hover:border-white/30 text-foreground/80 hover:text-foreground text-sm font-medium px-5 py-3 transition-all duration-300"
            >
              Ver precios
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="bg-[#0A0A0B] px-6 md:px-12 py-10 border-y border-white/[0.05]">
        <div className="mx-auto max-w-[1080px] grid grid-cols-2 md:grid-cols-4 gap-6">
          {HERO_STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="text-center"
            >
              <div
                className="font-display font-medium bg-clip-text text-transparent"
                style={{
                  fontSize: "clamp(34px, 3.6vw, 52px)",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                  backgroundImage:
                    "linear-gradient(to right, #FFB1CE, #FF3D77, #FF9D3C)",
                }}
              >
                {s.value}
              </div>
              <p className="text-gray-400 text-xs md:text-sm mt-2 tracking-wide uppercase">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 4 Pillars ── */}
      <section className="bg-[#0A0A0B] px-6 md:px-12 py-20 md:py-24">
        <div className="mx-auto max-w-[1080px]">
          <div className="text-center mb-12">
            <p className="text-xs font-medium tracking-[0.18em] text-white/50 mb-4">
              🎯 NUESTRO STACK
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight mb-4 leading-tight">
              Cómo logramos un CPA bajo (y sostenible)
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-7 max-w-2xl mx-auto">
              Cuatro pilares técnicos que separan una campaña amateur de una
              que genera ROI mes a mes. Implementamos los cuatro desde el día
              uno.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group rounded-3xl border border-white/[0.06] bg-white/[0.02] p-7 hover:border-white/15 hover:bg-white/[0.04] hover:-translate-y-1 transition-all duration-500 ease-out hover:shadow-[0_16px_50px_-12px_rgba(255,61,119,0.22)]"
              >
                <div className="liquid-glass w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-500 ease-out group-hover:scale-110">
                  <p.icon size={20} strokeWidth={2.2} className="text-white/90" />
                </div>
                <h3 className="text-foreground font-medium text-lg tracking-tight mb-2">
                  {p.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {p.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CPA deep dive ── */}
      <section className="bg-[#0A0A0B] px-6 md:px-12 py-20 md:py-24 border-t border-white/[0.05]">
        <div className="mx-auto max-w-[1080px]">
          <div className="text-center mb-12">
            <p className="text-xs font-medium tracking-[0.18em] text-white/50 mb-4">
              📐 CPA · COSTO POR ADQUISICIÓN
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight mb-4 leading-tight">
              La métrica que separa el ROI del humo
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-7 max-w-2xl mx-auto">
              Todo el mundo habla de CPL, CPM, CTR. Nada de eso paga las
              cuentas. La única métrica que importa es{" "}
              <span className="text-foreground font-medium">
                CPA al cierre
              </span>{" "}
              — y la diferencia entre un CPA decente y uno brutal es la{" "}
              <span className="text-foreground font-medium">
                Conversion API conectada a tu CRM
              </span>
              . Sin eso, Meta optimiza para clics; con eso, optimiza para
              clientes que pagan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {CPA_STEPS.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 hover:border-white/15 hover:bg-white/[0.04] transition-all duration-400"
              >
                <h3 className="text-foreground font-medium text-base tracking-tight mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CAPI Before/After card — services focused */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 rounded-3xl p-8 md:p-10"
            style={{
              border: "1.5px solid transparent",
              background: `linear-gradient(#0E0E10, #0E0E10) padding-box, ${HIGHLIGHT_GRADIENT} border-box`,
            }}
          >
            <p className="text-xs font-semibold tracking-[0.18em] text-white/60 mb-2">
              IMPACTO REAL · CLIENTE DE SERVICIOS · CAPI + CRM + AGENTE IA
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-7 max-w-2xl">
              Mismo presupuesto Meta. Lo único que cambió: conectamos la
              Conversion API al CRM HEAT, sumamos el agente de IA al primer
              mensaje y reestructuramos las campañas por intención.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* BEFORE */}
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6">
                <p className="text-[10px] font-semibold tracking-[0.22em] text-rose-300/80 mb-4">
                  ANTES · PIXEL SOLO
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-baseline justify-between gap-3">
                    <span className="text-gray-400">Inversión Meta</span>
                    <span className="text-foreground font-medium">
                      $4.000 USD
                    </span>
                  </li>
                  <li className="flex items-baseline justify-between gap-3">
                    <span className="text-gray-400">Leads totales</span>
                    <span className="text-foreground font-medium">280</span>
                  </li>
                  <li className="flex items-baseline justify-between gap-3">
                    <span className="text-gray-400">Calificados</span>
                    <span className="text-foreground font-medium">
                      47 (17%)
                    </span>
                  </li>
                  <li className="flex items-baseline justify-between gap-3">
                    <span className="text-gray-400">Cerrados</span>
                    <span className="text-foreground font-medium">9</span>
                  </li>
                  <li className="flex items-baseline justify-between gap-3 border-t border-white/[0.06] pt-3 mt-3">
                    <span className="text-gray-300">CPA real</span>
                    <span className="text-foreground text-xl font-medium">
                      $444 USD
                    </span>
                  </li>
                </ul>
              </div>

              {/* AFTER */}
              <div
                className="relative rounded-2xl p-6"
                style={{
                  border: "1.5px solid transparent",
                  background: `linear-gradient(#121214, #121214) padding-box, ${HIGHLIGHT_GRADIENT} border-box`,
                }}
              >
                <p className="text-[10px] font-semibold tracking-[0.22em] text-emerald-300/90 mb-4">
                  DESPUÉS · CAPI + CRM + AGENTE IA
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-baseline justify-between gap-3">
                    <span className="text-gray-400">Inversión Meta</span>
                    <span className="text-foreground font-medium">
                      $4.000 USD
                    </span>
                  </li>
                  <li className="flex items-baseline justify-between gap-3">
                    <span className="text-gray-400">Leads totales</span>
                    <span className="text-foreground font-medium">
                      168{" "}
                      <span className="text-gray-500 text-xs">
                        (Meta optimiza)
                      </span>
                    </span>
                  </li>
                  <li className="flex items-baseline justify-between gap-3">
                    <span className="text-gray-400">Calificados</span>
                    <span className="text-foreground font-medium">
                      112 (67%)
                    </span>
                  </li>
                  <li className="flex items-baseline justify-between gap-3">
                    <span className="text-gray-400">Cerrados</span>
                    <span className="text-foreground font-medium">31</span>
                  </li>
                  <li className="flex items-baseline justify-between gap-3 border-t border-white/[0.08] pt-3 mt-3">
                    <span className="text-gray-300">CPA real</span>
                    <p
                      className="font-display font-medium bg-clip-text text-transparent"
                      style={{
                        fontSize: "28px",
                        lineHeight: 1,
                        letterSpacing: "-0.02em",
                        backgroundImage: PRICE_GRADIENT,
                      }}
                    >
                      $129 USD
                    </p>
                  </li>
                </ul>
                <p className="mt-4 inline-flex items-center gap-1.5 text-xs text-emerald-300 font-medium">
                  <TrendingUp size={12} />
                  CPA −71% · Calificación +290%
                </p>
              </div>
            </div>

            {/* Meta's own data */}
            <div className="mt-7 pt-6 border-t border-white/[0.06]">
              <p className="text-[10px] font-semibold tracking-[0.22em] text-white/50 mb-3">
                DATA PUBLICADA POR META
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <p className="text-foreground text-lg font-medium">−13%</p>
                  <p className="text-gray-500 text-xs leading-relaxed mt-1">
                    menor costo por resultado con Pixel + CAPI vs solo Pixel.
                  </p>
                </div>
                <div>
                  <p className="text-foreground text-lg font-medium">+19%</p>
                  <p className="text-gray-500 text-xs leading-relaxed mt-1">
                    más conversiones atribuidas correctamente con CAPI.
                  </p>
                </div>
                <div>
                  <p className="text-foreground text-lg font-medium">
                    +16,4%
                  </p>
                  <p className="text-gray-500 text-xs leading-relaxed mt-1">
                    mayor confianza de atribución sobre Pixel solo.
                  </p>
                </div>
              </div>
              <p className="mt-3 text-[11px] text-gray-600 leading-relaxed">
                Fuente: Meta Business · Estudios internos sobre advertisers
                que pasaron de Pixel a Pixel + Conversion API.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Lead funnel ── */}
      <section className="bg-[#0A0A0B] px-6 md:px-12 py-20 md:py-24 border-t border-white/[0.05]">
        <div className="mx-auto max-w-[1080px]">
          <div className="text-center mb-12">
            <p className="text-xs font-medium tracking-[0.18em] text-white/50 mb-4">
              🧪 CALIFICACIÓN DE LEADS
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight mb-4 leading-tight">
              No todo lead es un cliente
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-7 max-w-2xl mx-auto">
              Una campaña de Meta sin filtros entrega 70% de basura. Por eso
              conectamos el agente de IA al primer mensaje — califica antes de
              que el lead llegue a tu equipo. Tu vendedor solo habla con los
              que importan.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {LEAD_STAGES.map((stage, i) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 hover:border-white/15 hover:bg-white/[0.04] transition-all duration-400"
              >
                <div
                  className="font-display font-medium bg-clip-text text-transparent mb-2"
                  style={{
                    fontSize: "clamp(28px, 2.6vw, 36px)",
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                    backgroundImage:
                      "linear-gradient(to right, #FFB1CE, #FF3D77, #FF9D3C)",
                  }}
                >
                  {stage.label}
                </div>
                <p className="text-foreground text-[13px] font-medium tracking-tight mb-1">
                  {stage.title}
                </p>
                <p className="text-gray-500 text-[11.5px] leading-relaxed">
                  {stage.desc}
                </p>
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-gray-500 text-center mt-6 max-w-xl mx-auto">
            Ejemplo real con cliente de servicios profesionales. Sin el agente
            IA en medio, el equipo comercial perdía 4 horas al día filtrando
            curiosos en vez de cerrando reuniones.
          </p>
        </div>
      </section>

      {/* ── Video Ads creative packs ── */}
      <section
        id="videos-ads"
        className="bg-[#0A0A0B] px-6 md:px-12 py-20 md:py-24 border-t border-white/[0.05] scroll-mt-8"
      >
        <div className="mx-auto max-w-[1080px]">
          <div className="text-center mb-12">
            <p className="text-xs font-medium tracking-[0.18em] text-white/50 mb-4">
              📦 PACKS DE VIDEOS · CREATIVIDAD PARA META ADS
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight mb-4 leading-tight">
              Sin creatividades buenas, tu CPA no baja
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-7 max-w-2xl mx-auto">
              El algoritmo de Meta optimiza, pero no inventa. Si tu hook no
              detiene el scroll en los primeros 3 segundos, ningún CAPI ni
              estructura te salva. Producimos los videos junto a las campañas.
              Mismo equipo, misma estrategia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VIDEO_PACKS.map((pack) => (
              <PricingCard key={pack.name} {...pack} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 rounded-2xl border border-yellow-300/15 bg-yellow-300/[0.03] p-6"
          >
            <p className="text-sm text-yellow-200/90 leading-relaxed">
              <span className="font-semibold">⚠️ Importante:</span> estos videos
              son exclusivamente para usar como creatividad publicitaria en
              Meta Ads pagados. No son contenido orgánico para feed. Están
              guionizados para captar atención en feed pagado con hooks,
              no para construir presencia de marca.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Agency credentials ── */}
      <section className="bg-[#0A0A0B] px-6 md:px-12 py-20 md:py-24 border-t border-white/[0.05]">
        <div className="mx-auto max-w-[1080px] grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-medium tracking-[0.18em] text-white/50 mb-4">
              🏆 AGENCIA · DESDE 2010
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight mb-5 leading-tight">
              15 años haciendo solo una cosa, bien hecha
            </h2>
            <p className="text-gray-300 text-base md:text-lg leading-7 mb-5">
              HEAT empezó como agencia de performance puro en 2010. Más de 250
              clientes pasaron por nuestro pipeline — desde e-commerce de
              nicho hasta clínicas dentales, retail de alimentos, moda premium
              y servicios B2B.
            </p>
            <p className="text-gray-300 text-base md:text-lg leading-7 mb-7">
              Esa experiencia es lo que se traduce en CPAs bajos desde el primer
              mes: ya conocemos los errores típicos por industria, las
              creatividades que conviertan en cada vertical y los pixel events
              que el algoritmo de Meta necesita para optimizar bien.
            </p>
            <ul className="space-y-3 text-sm text-gray-300">
              {[
                "Auditamos tu cuenta de Meta antes de tocar un peso",
                "Migramos campañas existentes sin perder histórico de aprendizaje",
                "Conectamos la Conversion API con tu CRM en setup",
                "Reportería semanal con CPA real, no vanity metrics",
              ].map((l) => (
                <li key={l} className="flex items-start gap-2.5">
                  <Check size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: Award, label: "Agencia desde", value: "2010" },
              { icon: Users, label: "Clientes manejados", value: "+250" },
              { icon: TrendingUp, label: "USD gestionados", value: "+$10M" },
              { icon: Calendar, label: "Reportería", value: "Semanal" },
            ].map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 hover:border-white/15 hover:bg-white/[0.04] transition-all duration-400"
              >
                <c.icon size={20} className="text-white/70 mb-4" />
                <p className="text-foreground text-2xl font-medium">
                  {c.value}
                </p>
                <p className="text-gray-500 text-xs mt-1 tracking-wide uppercase">
                  {c.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section
        id="pricing"
        className="bg-[#0A0A0B] px-6 md:px-12 py-20 md:py-24 border-t border-white/[0.05] scroll-mt-8"
      >
        <div className="mx-auto max-w-[1080px]">
          <div className="text-center mb-12">
            <p className="text-xs font-medium tracking-[0.18em] text-white/50 mb-4">
              💰 FEE FIJO + COMISIÓN ALINEADA
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight mb-4 leading-tight">
              Precios transparentes. Sin sorpresas.
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-7 max-w-2xl mx-auto">
              Fee fijo bajo de entrada + 10% solo sobre lo que supera $1.000
              USD de inversión. Nuestro incentivo está alineado: ganamos cuando
              crece tu inversión rentable.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative rounded-3xl overflow-hidden"
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
                  +{" "}
                  <span className="text-foreground font-medium">10%</span>{" "}
                  solo sobre el monto que supera{" "}
                  <span className="text-foreground font-medium">
                    $1.000 USD
                  </span>{" "}
                  de inversión mensual en Meta.
                </p>
                <ul className="mt-5 space-y-2 text-sm text-gray-400">
                  <li>✓ Fee bajo de entrada</li>
                  <li>✓ Inversión Meta la pagas tú directamente</li>
                  <li>✓ Solo cobramos el exceso, no el primer dólar</li>
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
                        <th className="text-left px-4 py-3 font-medium">
                          Fee
                        </th>
                        <th className="text-left px-4 py-3 font-medium">
                          +10% Exceso
                        </th>
                        <th className="text-left px-4 py-3 font-medium">
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Hasta $1.000", "$449", "—", "$449"],
                        ["$3.000", "$449", "$200", "$649"],
                        ["$5.000", "$449", "$400", "$849"],
                        ["$10.000", "$449", "$900", "$1.349"],
                        ["$25.000", "$449", "$2.400", "$2.849"],
                      ].map((row) => (
                        <tr
                          key={row[0]}
                          className="border-t border-white/5 text-gray-300"
                        >
                          <td className="px-4 py-3">{row[0]} USD</td>
                          <td className="px-4 py-3 text-gray-400">{row[1]}</td>
                          <td className="px-4 py-3 text-gray-400">{row[2]}</td>
                          <td className="px-4 py-3 font-medium text-foreground">
                            {row[3]} USD
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 text-xs text-gray-500 leading-relaxed">
                  Inversión publicitaria la pagas tú directo a Meta. Nuestro
                  fee es solo por gestión, optimización y reportería.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Lo que NO hacemos */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 rounded-2xl border border-white/5 bg-white/[0.01] p-6 md:p-8"
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
              Performance Ads y manejo orgánico son disciplinas distintas que
              requieren equipos distintos. Especializarnos solo en Meta Ads hace
              que entreguemos más ROI por cada dólar invertido.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#0A0A0B] px-6 md:px-12 py-20 md:py-24 border-t border-white/[0.05]">
        <div className="mx-auto max-w-[820px]">
          <div className="text-center mb-12">
            <p className="text-xs font-medium tracking-[0.18em] text-white/50 mb-4">
              💬 PREGUNTAS FRECUENTES
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight mb-4 leading-tight">
              Lo que todos preguntan
            </h2>
          </div>

          <div className="space-y-3">
            {FAQ.map((item, i) => (
              <motion.details
                key={item.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.035] transition-all duration-400 ease-out overflow-hidden"
              >
                <summary className="flex items-start justify-between gap-4 cursor-pointer list-none p-5">
                  <span className="text-foreground text-base font-medium tracking-tight">
                    {item.q}
                  </span>
                  <span
                    aria-hidden
                    className="shrink-0 text-gray-500 transition-transform duration-400 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 -mt-1">
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative bg-[#0A0A0B] px-6 md:px-12 py-20 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(255,61,119,0.18), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-[860px] text-center">
          <Target
            size={32}
            className="mx-auto mb-5 text-white/70"
            strokeWidth={1.6}
          />
          <h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight mb-4 leading-tight">
            ¿Listos para bajar tu CPA?
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-7 max-w-xl mx-auto mb-7">
            Agenda una auditoría gratis de 30 minutos. Revisamos tu cuenta de
            Meta, tu pixel y tu funnel — y te decimos exactamente dónde se está
            yendo la plata.
          </p>
          <a
            href="/#demo"
            className="group relative inline-flex items-center justify-center rounded-full liquid-glass text-foreground text-sm font-medium px-6 py-3 overflow-hidden transition-all duration-500 ease-out hover:shadow-[0_10px_40px_-10px_rgba(255,61,119,0.4)]"
          >
            <span
              aria-hidden
              className="absolute inset-0 rounded-full bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"
            />
            <span className="relative z-10 transition-colors duration-500 ease-out group-hover:text-background inline-flex items-center gap-2">
              Agendar auditoría
              <ArrowRight size={14} />
            </span>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
