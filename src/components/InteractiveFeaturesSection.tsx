import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Filter,
  CalendarCheck,
  MessageCircle,
  Plug,
  BarChart3,
  Check,
  TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  SiWhatsapp,
  SiInstagram,
  SiMeta,
  SiShopify,
  SiMercadopago,
  SiGoogleads,
} from "@icons-pack/react-simple-icons";
import logo from "@/assets/logo.png";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    icon: Filter,
    title: "Filtra curiosos antes de tu equipo",
    description:
      "La IA precalifica y descarta el 85% de curiosos. Solo te llegan prospectos con intención real de comprar — los que cierran rápido.",
  },
  {
    icon: CalendarCheck,
    title: "Agenda citas y reuniones 24/7",
    description:
      "Conectado a tu calendario, HEAT cierra reuniones mientras tu equipo descansa. Integra Google Calendar, Calendly, Dentalink y más.",
  },
  {
    icon: MessageCircle,
    title: "Responde al instante en todos tus canales",
    description:
      "WhatsApp, Instagram, Facebook Messenger — un solo agente, todos tus canales. Respuesta en segundos, 365 días al año.",
  },
  {
    icon: Plug,
    title: "Conectado con tu stack actual",
    description:
      "Dentalink, Shopify, WooCommerce, Mercado Pago, WhatsApp Business API… Migración incluida en la implementación, sin fricciones.",
  },
  {
    icon: BarChart3,
    title: "Dashboard de operación en tiempo real",
    description:
      "Visibilidad total: leads atendidos, derivados, CPL, conversión y atribución por canal. Datos para decidir, no para mirar.",
  },
];

/* ──────────────────────────── Left column item ──────────────────────────── */
function FeatureItem({
  feature,
  active,
  isLast,
  onClick,
}: {
  feature: Feature;
  active: boolean;
  isLast: boolean;
  onClick: () => void;
}) {
  const Icon = feature.icon;
  return (
    <div className="relative flex gap-4">
      {!isLast && (
        <div
          aria-hidden
          className="absolute left-[19px] top-12 bottom-0 w-px bg-white/[0.08]"
        />
      )}

      <button
        onClick={onClick}
        aria-label={feature.title}
        className={`shrink-0 z-10 relative w-10 h-10 rounded-full liquid-glass flex items-center justify-center transition-all duration-500 ease-out ${
          active
            ? "scale-110 shadow-[0_0_30px_-2px_rgba(168,85,247,0.5)]"
            : "opacity-50 hover:opacity-90"
        }`}
      >
        <Icon
          size={16}
          strokeWidth={2.2}
          className={active ? "text-white" : "text-white/80"}
        />
      </button>

      <div className="flex-1 min-w-0 pb-8">
        <button
          onClick={onClick}
          className={`text-left text-[15px] md:text-base font-medium tracking-tight leading-snug transition-colors duration-400 ${
            active
              ? "text-foreground"
              : "text-gray-500 hover:text-gray-300"
          }`}
        >
          {feature.title}
        </button>

        <AnimatePresence initial={false}>
          {active && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <div className="mt-3 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4">
                <p className="text-sm text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ──────────────────────────── Right column visuals ──────────────────────────── */

function VisualWrap({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-full w-full flex items-center justify-center">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-12 rounded-[60px] opacity-60"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(99,102,241,0.25), transparent 70%)",
          filter: "blur(50px)",
        }}
      />
      <div className="relative w-full max-w-md">{children}</div>
    </div>
  );
}

/* 1 · Filtra curiosos */
function FilterVisual() {
  return (
    <VisualWrap>
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 shadow-[0_24px_80px_-20px_rgba(168,85,247,0.3)]">
        <p className="text-xs font-medium tracking-[0.18em] text-white/50 mb-4">
          🤖 IA · PRECALIFICACIÓN
        </p>
        <div className="space-y-2.5">
          <div className="flex justify-end">
            <div className="max-w-[80%] rounded-2xl rounded-br-md bg-white/[0.06] border border-white/10 px-3.5 py-2 text-[13px] text-foreground">
              Hola, quiero info
            </div>
          </div>
          <div className="flex justify-start">
            <div className="max-w-[80%] rounded-2xl rounded-bl-md bg-gradient-to-br from-indigo-500/15 to-purple-500/15 border border-indigo-400/25 px-3.5 py-2 text-[13px] text-foreground">
              ¡Hola! ¿Cuál es tu industria?
            </div>
          </div>
          <div className="flex justify-end">
            <div className="max-w-[80%] rounded-2xl rounded-br-md bg-white/[0.06] border border-white/10 px-3.5 py-2 text-[13px] text-foreground">
              Inmobiliaria
            </div>
          </div>
          <div className="flex justify-start">
            <div className="max-w-[80%] rounded-2xl rounded-bl-md bg-gradient-to-br from-indigo-500/15 to-purple-500/15 border border-indigo-400/25 px-3.5 py-2 text-[13px] text-foreground">
              ¿Presupuesto disponible este mes?
            </div>
          </div>
          <div className="flex justify-end">
            <div className="max-w-[80%] rounded-2xl rounded-br-md bg-white/[0.06] border border-white/10 px-3.5 py-2 text-[13px] text-foreground">
              $5.000.000 CLP
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-emerald-400/30 bg-emerald-400/[0.08] p-3 flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-emerald-400/20 flex items-center justify-center shrink-0">
            <Check size={14} className="text-emerald-300" />
          </div>
          <div className="min-w-0">
            <p className="text-[13px] text-emerald-200 font-medium">
              Lead calificado → derivado a equipo
            </p>
            <p className="text-[11px] text-emerald-200/70">
              Intención real · presupuesto OK
            </p>
          </div>
        </div>
      </div>
    </VisualWrap>
  );
}

/* 2 · Agenda citas */
function CalendarVisual() {
  return (
    <VisualWrap>
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 shadow-[0_24px_80px_-20px_rgba(168,85,247,0.3)]">
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs font-medium tracking-[0.18em] text-white/50">
            📅 AGENDA · JUEVES 14
          </p>
          <span className="text-xs text-emerald-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            En vivo
          </span>
        </div>

        <div className="space-y-2 mb-5">
          {[
            { time: "09:00", label: "María González", state: "booked" },
            { time: "10:00", label: "Carlos Pérez", state: "booked" },
            { time: "11:00", label: "Disponible", state: "free" },
            {
              time: "12:00",
              label: "Reservando…",
              state: "booking",
            },
            { time: "13:00", label: "Disponible", state: "free" },
          ].map((slot) => (
            <div
              key={slot.time}
              className={`flex items-center gap-3 rounded-xl border px-3 py-2 ${
                slot.state === "booked"
                  ? "border-white/10 bg-white/[0.04]"
                  : slot.state === "booking"
                  ? "border-indigo-400/40 bg-indigo-400/[0.08] shadow-[0_0_20px_-4px_rgba(99,102,241,0.4)]"
                  : "border-white/[0.06] bg-transparent"
              }`}
            >
              <span className="text-xs font-mono text-gray-500 w-12 shrink-0">
                {slot.time}
              </span>
              <span
                className={`text-[13px] ${
                  slot.state === "free"
                    ? "text-gray-500"
                    : "text-foreground"
                }`}
              >
                {slot.label}
              </span>
              {slot.state === "booking" && (
                <span className="ml-auto text-[10px] tracking-wider text-indigo-300 font-medium">
                  IA
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/[0.10] to-purple-500/[0.08] p-3">
          <p className="text-[13px] text-foreground leading-relaxed">
            <span className="font-semibold text-indigo-300">Agendado:</span>{" "}
            Demo HEAT IA con <span className="font-medium">Andrés Soto</span> el
            jueves 12:00.
          </p>
        </div>
      </div>
    </VisualWrap>
  );
}

/* 3 · Multi-canal */
function MultiChannelVisual() {
  const channels: {
    name: string;
    Icon: typeof SiWhatsapp;
    color: string;
    sample: string;
    time: string;
  }[] = [
    {
      name: "WhatsApp",
      Icon: SiWhatsapp,
      color: "#25D366",
      sample: "Confirma tu cita para mañana 10 AM ✅",
      time: "02:14",
    },
    {
      name: "Instagram",
      Icon: SiInstagram,
      color: "#E4405F",
      sample: "Te paso 3 opciones que se ajustan a tu presupuesto.",
      time: "03:47",
    },
    {
      name: "Messenger",
      Icon: SiMeta,
      color: "#0084FF",
      sample: "El envío llega entre el 9 y 11. ¿Te lo confirmo?",
      time: "05:02",
    },
  ];
  return (
    <VisualWrap>
      <div className="space-y-3">
        {channels.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.4,
              delay: i * 0.08,
              ease: "easeOut",
            }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-4 flex items-center gap-3"
          >
            <div
              className="w-10 h-10 rounded-xl bg-white/[0.05] flex items-center justify-center shrink-0"
              style={{ color: c.color }}
            >
              <c.Icon size={20} color="currentColor" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <p className="text-[13px] text-foreground font-medium truncate">
                  {c.name}
                </p>
                <span className="text-[11px] text-gray-500 font-mono shrink-0">
                  {c.time}
                </span>
              </div>
              <p className="text-[12px] text-gray-400 truncate mt-0.5">
                {c.sample}
              </p>
            </div>
            <div className="shrink-0 px-2 py-0.5 rounded-full bg-emerald-400/15 border border-emerald-400/30">
              <span className="text-[10px] font-semibold tracking-wider text-emerald-300">
                IA
              </span>
            </div>
          </motion.div>
        ))}
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/[0.08] to-transparent p-4 text-center">
          <p className="text-xs text-gray-400">
            <span className="text-foreground font-semibold">3 canales</span> · 1
            agente · respondiendo en{" "}
            <span className="text-foreground font-semibold">&lt; 5 seg</span>
          </p>
        </div>
      </div>
    </VisualWrap>
  );
}

/* 4 · Integrations circle */
function IntegrationsCircleVisual() {
  const brands: { Icon: typeof SiWhatsapp; color: string; angle: number }[] = [
    { Icon: SiWhatsapp, color: "#25D366", angle: 0 },
    { Icon: SiInstagram, color: "#E4405F", angle: 60 },
    { Icon: SiMeta, color: "#1877F2", angle: 120 },
    { Icon: SiShopify, color: "#7AB55C", angle: 180 },
    { Icon: SiMercadopago, color: "#00AAFF", angle: 240 },
    { Icon: SiGoogleads, color: "#4285F4", angle: 300 },
  ];

  const R = 130;

  return (
    <VisualWrap>
      <div className="relative w-[320px] h-[320px] mx-auto">
        <div
          aria-hidden
          className="absolute inset-0 rounded-full border border-white/10 bg-gradient-to-br from-white/[0.02] to-transparent"
        />
        <div
          aria-hidden
          className="absolute inset-6 rounded-full border border-white/[0.05]"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-28 h-28 rounded-full liquid-glass flex items-center justify-center shadow-[0_0_60px_-10px_rgba(168,85,247,0.6)]">
            <img src={logo} alt="HEAT" className="h-7 relative z-10" />
          </div>
        </div>

        {brands.map((b, i) => {
          const rad = (b.angle * Math.PI) / 180;
          const x = Math.cos(rad) * R;
          const y = Math.sin(rad) * R;
          // Position OUTER wrapper (no animation) and animate INNER motion.div
          // — otherwise motion's animate prop overwrites the positional transform
          return (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 pointer-events-none"
              style={{
                transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: i * 0.07,
                  duration: 0.4,
                  ease: "easeOut",
                }}
                className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md flex items-center justify-center shadow-[0_8px_24px_-8px_rgba(0,0,0,0.5)]"
                style={{ color: b.color }}
              >
                <b.Icon size={22} color="currentColor" />
              </motion.div>
            </div>
          );
        })}
      </div>
    </VisualWrap>
  );
}

/* 5 · Dashboard */
function DashboardVisual() {
  const kpis = [
    { label: "Leads atendidos", value: "1,284", delta: "+18%" },
    { label: "Calificados", value: "374", delta: "+24%" },
    { label: "Tiempo de 1ª respuesta", value: "3.2s", delta: "-41%" },
  ];
  const bars = [42, 58, 36, 71, 64, 88, 79];
  return (
    <VisualWrap>
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 shadow-[0_24px_80px_-20px_rgba(168,85,247,0.3)]">
        <div className="flex items-center justify-between mb-5">
          <p className="text-xs font-medium tracking-[0.18em] text-white/50">
            📊 DASHBOARD · 7 DÍAS
          </p>
          <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400">
            <TrendingUp size={12} /> Mejorando
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-5">
          {kpis.map((k) => (
            <div
              key={k.label}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3"
            >
              <p className="text-[10px] text-gray-500 tracking-wide leading-tight">
                {k.label}
              </p>
              <p className="font-display text-xl font-medium text-foreground mt-1.5 tracking-tight">
                {k.value}
              </p>
              <p
                className={`text-[10px] mt-0.5 font-medium ${
                  k.delta.startsWith("+") || k.delta.startsWith("-4")
                    ? "text-emerald-400"
                    : "text-gray-400"
                }`}
              >
                {k.delta}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
          <div className="flex items-end justify-between gap-1.5 h-24">
            {bars.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-md bg-gradient-to-t from-indigo-500/40 to-purple-500/40 border-t border-purple-400/40"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="mt-3 flex items-center justify-between text-[10px] text-gray-500">
            <span>L</span>
            <span>M</span>
            <span>X</span>
            <span>J</span>
            <span>V</span>
            <span>S</span>
            <span>D</span>
          </div>
        </div>
      </div>
    </VisualWrap>
  );
}

const VISUALS = [
  FilterVisual,
  CalendarVisual,
  MultiChannelVisual,
  IntegrationsCircleVisual,
  DashboardVisual,
];

/* ──────────────────────────── Section ──────────────────────────── */
export default function InteractiveFeaturesSection() {
  const [active, setActive] = useState(0);
  const ActiveVisual = VISUALS[active];

  return (
    <section className="bg-[#0A0A0B] flex flex-col items-center px-6 md:px-12 py-20 md:py-24">
      <div className="w-full max-w-[1200px] mb-12 md:mb-16 text-center">
        <p className="text-xs font-medium tracking-[0.18em] text-white/50 mb-4">
          ⚡ LO QUE HACE HEAT IA
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight mb-4 leading-tight">
          Un agente. Toda tu operación.
        </h2>
        <p className="text-gray-400 text-base md:text-lg leading-7 max-w-2xl mx-auto">
          De WhatsApp a tu CRM, sin saltos ni copy-paste. Filtra, agenda,
          responde y deriva al equipo solo cuando hay venta real.
        </p>
      </div>

      <div className="grid w-full max-w-[1200px] gap-10 lg:gap-16 lg:grid-cols-[1fr_1.1fr] items-start">
        <div className="relative">
          {FEATURES.map((f, i) => (
            <FeatureItem
              key={f.title}
              feature={f}
              active={i === active}
              isLast={i === FEATURES.length - 1}
              onClick={() => setActive(i)}
            />
          ))}
        </div>

        <div className="relative min-h-[440px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full"
            >
              <ActiveVisual />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
