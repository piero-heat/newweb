import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Send,
  ChevronLeft,
  Video,
  Phone as PhoneIcon,
  Plus,
  RefreshCw,
  CheckCheck,
  Sparkles,
} from "lucide-react";

type Industry = {
  id:
    | "auto"
    | "educacion"
    | "inmo"
    | "retail"
    | "salud"
    | "seguros"
    | "servicios"
    | "ecommerce";
  name: string;
  emoji: string;
  agentName: string;
  agentSub: string;
  welcome: string;
  suggestion: string;
};

const INDUSTRIES: Industry[] = [
  {
    id: "auto",
    name: "Automotriz",
    emoji: "🚗",
    agentName: "AutoStar Concesionaria",
    agentSub: "Asesor de ventas",
    welcome:
      "¡Hola! 👋 Soy de AutoStar Concesionaria. ¿Estás buscando un modelo en particular o quieres que te recomiende según uso?",
    suggestion: "Busco un SUV para mi familia, 4 personas",
  },
  {
    id: "educacion",
    name: "Educación",
    emoji: "🎓",
    agentName: "Academia Cumbre",
    agentSub: "Admisión",
    welcome:
      "¡Hola! Soy de admisión de Academia Cumbre. ¿Estás buscando una carrera técnica, un diplomado corto, o todavía explorando?",
    suggestion: "Quiero saber sobre la carrera de marketing digital",
  },
  {
    id: "inmo",
    name: "Inmobiliario",
    emoji: "🏠",
    agentName: "Prima Propiedades",
    agentSub: "Asesor",
    welcome:
      "¡Hola! 👋 Soy de Prima Propiedades. ¿Buscas arriendo, compra o estás explorando proyectos en preventa?",
    suggestion: "Busco departamento en arriendo en Providencia",
  },
  {
    id: "retail",
    name: "Retail · Moda",
    emoji: "🛍️",
    agentName: "Boutique Velvet",
    agentSub: "Asesora de estilo",
    welcome:
      "¡Hola! 😊 Soy tu asesora de Boutique Velvet. ¿Andas buscando algo para una ocasión especial o solo paseando?",
    suggestion: "Necesito un vestido para un matrimonio",
  },
  {
    id: "salud",
    name: "Salud",
    emoji: "🩺",
    agentName: "Clínica Vital",
    agentSub: "Recepción",
    welcome:
      "¡Hola! Soy la recepción de Clínica Vital. ¿En qué especialidad necesitas atención o tienes alguna duda específica?",
    suggestion: "Necesito hora con dermatóloga lo antes posible",
  },
  {
    id: "seguros",
    name: "Seguros",
    emoji: "🛡️",
    agentName: "AsegurAlfa",
    agentSub: "Corredor de seguros",
    welcome:
      "¡Hola! Soy de AsegurAlfa, corredora de seguros. ¿Qué seguro te interesa cotizar — auto, hogar, vida, viajes?",
    suggestion: "Quiero cotizar seguro para mi auto nuevo",
  },
  {
    id: "servicios",
    name: "Servicios · Agencia",
    emoji: "⚡",
    agentName: "Pulse Digital",
    agentSub: "Comercial",
    welcome:
      "¡Hola! Soy de Pulse Digital. ¿Qué objetivo concreto te trae por acá — más leads, más ventas, o web nueva?",
    suggestion: "Necesito generar más leads para mi negocio",
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    emoji: "🛒",
    agentName: "Helios Shop",
    agentSub: "Tienda online",
    welcome:
      "¡Hola! 👋 Soy de Helios Shop. ¿Necesitas ayuda con un pedido en curso, tienes una consulta de producto, o estás navegando?",
    suggestion: "¿Cuándo me llega mi pedido #HSH-1284?",
  },
];

const MAX_HISTORY = 16;
const MAX_MSG_LEN = 500;

type Message = {
  role: "user" | "assistant";
  content: string;
  time: string;
};

function now(): string {
  const d = new Date();
  return `${String(d.getHours()).padStart(2, "0")}:${String(
    d.getMinutes(),
  ).padStart(2, "0")}`;
}

function MessageBubble({ msg }: { msg: Message }) {
  const isUser = msg.role === "user";
  return (
    <motion.div
      initial={{ opacity: 0, y: 6, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`relative max-w-[80%] px-3 py-2 text-[13px] leading-snug ${
          isUser
            ? "rounded-2xl rounded-br-md bg-[#005C4B] text-white"
            : "rounded-2xl rounded-bl-md bg-[#202C33] text-white"
        }`}
      >
        <p className="whitespace-pre-wrap break-words">{msg.content}</p>
        <div className="mt-0.5 flex items-center justify-end gap-1 text-[10px] opacity-60">
          <span>{msg.time}</span>
          {isUser && <CheckCheck size={11} className="text-cyan-300" />}
        </div>
      </div>
    </motion.div>
  );
}

function TypingDots() {
  return (
    <div className="flex justify-start">
      <div className="rounded-2xl rounded-bl-md bg-[#202C33] px-4 py-3 flex items-center gap-1.5">
        <span className="block w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce" />
        <span className="block w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce [animation-delay:140ms]" />
        <span className="block w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce [animation-delay:280ms]" />
      </div>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="absolute top-0 inset-x-0 z-20 h-9 flex items-center justify-between px-7 text-[12px] font-semibold text-white pointer-events-none">
      <span>9:41</span>
      <div className="flex items-center gap-1.5 opacity-90">
        <svg width="16" height="11" viewBox="0 0 16 11" fill="currentColor">
          <rect x="0" y="6" width="3" height="5" rx="0.5" />
          <rect x="4" y="4" width="3" height="7" rx="0.5" />
          <rect x="8" y="2" width="3" height="9" rx="0.5" />
          <rect x="12" y="0" width="3" height="11" rx="0.5" />
        </svg>
        <svg width="14" height="10" viewBox="0 0 14 10" fill="currentColor">
          <path d="M7 9.5L9.5 7a3.5 3.5 0 0 0-5 0L7 9.5zM7 5L11 1a7 7 0 0 0-8 0L7 5zM7 .5L13.5 -6a10 10 0 0 0-13 0L7 .5z" transform="translate(0,2)" />
        </svg>
        <div className="w-6 h-3 rounded-sm border border-white/80 relative">
          <div className="absolute inset-0.5 bg-white/80 rounded-[1px]" style={{ width: "70%" }} />
          <div className="absolute -right-1 top-1 w-0.5 h-1 bg-white/80 rounded-r" />
        </div>
      </div>
    </div>
  );
}

/* ─── Signal detection for "live monitor" panel ─── */
type SignalKey = "budget" | "urgency" | "authority" | "intent";
const SIGNAL_DEFS: {
  key: SignalKey;
  label: string;
  test: (msg: string) => boolean;
}[] = [
  {
    key: "budget",
    label: "Presupuesto detectado",
    test: (m) => /\$\s*[\d.,]+|[\d.,]+\s*(usd|clp|peso|dólar|millon|mil\b)/i.test(m),
  },
  {
    key: "urgency",
    label: "Urgencia detectada",
    test: (m) =>
      /(urgente|urgencia|pronto|ahora|esta semana|hoy|mañana|asap|antes posible)/i.test(m),
  },
  {
    key: "authority",
    label: "Decisor confirmado",
    test: (m) =>
      /(soy (?:el |la )?(?:dueñ|fundador|jef)|mi (?:negocio|empresa|tienda|clínica|consulta|equipo)|yo (?:decido|elijo))/i.test(
        m,
      ),
  },
  {
    key: "intent",
    label: "Intención clara",
    test: (m) =>
      m.trim().length > 30 &&
      /(busco|necesito|quiero|me interesa|estoy buscando|me gustaría|recomienda)/i.test(
        m,
      ),
  },
];

const HANDOFF_RE =
  /(agend(ar|emos|amos)|te (?:conecto|llamo|llamamos|paso|derivo)|reserv(ar|amos|emos)|coordin(ar|emos|amos)|confirm(emos|amos|ar)\s+(la|tu|el)?\s*(cita|visita|test|llamada|reunión|asesoría|hora)|\d{1,2}:\d{2}\s*(am|pm|hrs)?|este\s+(lunes|martes|miércoles|jueves|viernes))/i;

export default function LiveDemoSection() {
  const [industry, setIndustry] = useState<Industry>(INDUSTRIES[0]);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: INDUSTRIES[0].welcome, time: now() },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [responseTimes, setResponseTimes] = useState<number[]>([]);
  const [signals, setSignals] = useState<Record<SignalKey, boolean>>({
    budget: false,
    urgency: false,
    authority: false,
    intent: false,
  });
  const [handedOff, setHandedOff] = useState(false);
  // Track si el usuario ya escribió algo para esconder el hint del input.
  const [hasInteracted, setHasInteracted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const resetMonitor = () => {
    setResponseTimes([]);
    setSignals({
      budget: false,
      urgency: false,
      authority: false,
      intent: false,
    });
    setHandedOff(false);
  };

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading]);

  const switchIndustry = (i: Industry) => {
    if (i.id === industry.id) return;
    setIndustry(i);
    setMessages([{ role: "assistant", content: i.welcome, time: now() }]);
    setInput("");
    setError(null);
    resetMonitor();
  };

  const reset = () => {
    setMessages([
      { role: "assistant", content: industry.welcome, time: now() },
    ]);
    setInput("");
    setError(null);
    resetMonitor();
  };

  const send = async (textOverride?: string) => {
    const text = (textOverride ?? input).trim();
    if (!text || loading) return;
    if (text.length > MAX_MSG_LEN) {
      setError(`Máximo ${MAX_MSG_LEN} caracteres por mensaje`);
      return;
    }
    if (messages.length >= MAX_HISTORY) {
      setError("Llegaste al límite del demo. Refresca para reiniciar.");
      return;
    }

    // Detect signals from the user message
    setSignals((prev) => {
      const next = { ...prev };
      for (const s of SIGNAL_DEFS) {
        if (!next[s.key] && s.test(text)) next[s.key] = true;
      }
      return next;
    });

    const userMsg: Message = { role: "user", content: text, time: now() };
    const nextMessages = [...messages, userMsg];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);
    setError(null);

    const startedAt = Date.now();
    try {
      const res = await fetch("/.netlify/functions/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          industry: industry.id,
          messages: nextMessages.map(({ role, content }) => ({ role, content })),
        }),
      });

      if (!res.ok) throw new Error("upstream");
      const data = (await res.json()) as { reply?: string; error?: string };
      if (!data.reply) throw new Error(data.error ?? "no_reply");

      // Track response time
      const elapsed = Date.now() - startedAt;
      setResponseTimes((r) => [...r, elapsed]);

      // Detect handoff trigger in agent reply
      if (!handedOff && HANDOFF_RE.test(data.reply)) {
        setHandedOff(true);
      }

      setMessages([
        ...nextMessages,
        { role: "assistant", content: data.reply, time: now() },
      ]);
    } catch {
      setError("No pudimos contactar al agente. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const remaining = MAX_HISTORY - messages.length;

  return (
    <section className="bg-[#0A0A0B] flex flex-col items-center px-6 md:px-12 py-20 md:py-24">
      <div className="w-full max-w-[1080px] mb-12 text-center">
        <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] mb-4">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-70" />
            <span
              className="relative inline-flex h-2 w-2 rounded-full"
              style={{
                background:
                  "linear-gradient(135deg, #06B6D4 0%, #A855F7 50%, #EC4899 100%)",
              }}
            />
          </span>
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #7DD3FC 0%, #C084FC 50%, #F0ABFC 100%)",
            }}
          >
            PRUEBA UN AGENTE DE IA EN VIVO · 100% REAL · AHORA
          </span>
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight mb-4 leading-tight">
          Habla con un agente HEAT IA
        </h2>
        <p className="text-gray-400 text-base md:text-lg leading-7 max-w-xl mx-auto">
          Elige tu industria. Escribe lo que quieras. El agente responde como si
          fuera tu propio negocio — sin formulario, sin registro.
        </p>
      </div>

      <div className="grid w-full max-w-[1100px] gap-12 lg:gap-16 lg:grid-cols-[1fr_auto] items-center">
        <div className="order-2 lg:order-1">
          <div className="flex items-baseline justify-between mb-4">
            <p className="text-[11px] font-semibold tracking-[0.18em] text-white/50">
              ELIGE TU INDUSTRIA
            </p>
            <p className="text-[10px] text-white/30">
              {INDUSTRIES.length} disponibles
            </p>
          </div>
          <div
            className="grid grid-cols-2 gap-3 mb-6 pt-2 pr-2 -mr-1 overflow-y-auto"
            style={{ maxHeight: 380 }}
          >
            {INDUSTRIES.map((i) => {
              const active = i.id === industry.id;
              return (
                <button
                  key={i.id}
                  onClick={() => switchIndustry(i)}
                  className={`group relative rounded-2xl px-3 py-3 text-left transition-all duration-400 ${
                    active
                      ? "shadow-[0_12px_40px_-8px_rgba(168,85,247,0.55)]"
                      : "border border-white/[0.08] bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                  }`}
                  style={
                    active
                      ? {
                          border: "1.5px solid transparent",
                          background:
                            "linear-gradient(#0E0E14, #0E0E14) padding-box, linear-gradient(135deg, #06B6D4 0%, #A855F7 50%, #EC4899 100%) border-box",
                        }
                      : undefined
                  }
                >
                  {/* Outer color glow for active state */}
                  {active && (
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -inset-1 rounded-2xl opacity-60 blur-md -z-10"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(6,182,212,0.35), rgba(168,85,247,0.35), rgba(236,72,153,0.35))",
                      }}
                    />
                  )}

                  <div className="flex items-center gap-2.5">
                    <span className="text-[18px] shrink-0">{i.emoji}</span>
                    <div className="min-w-0">
                      <p
                        className={`text-[13px] font-semibold tracking-tight leading-tight truncate ${
                          active ? "text-foreground" : "text-gray-300"
                        }`}
                      >
                        {i.name}
                      </p>
                      <p className="text-[10.5px] text-gray-500 truncate leading-tight mt-0.5">
                        {i.agentName}
                      </p>
                    </div>
                  </div>

                  {/* Active dot — inside card (was being clipped before) */}
                  {active && (
                    <span
                      className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full ring-2 ring-[#0E0E14]"
                      style={{
                        background:
                          "linear-gradient(135deg, #06B6D4 0%, #A855F7 50%, #EC4899 100%)",
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <MonitorPanel
            userMsgCount={messages.filter((m) => m.role === "user").length}
            responseTimes={responseTimes}
            signals={signals}
            handedOff={handedOff}
            industry={industry}
          />


          <button
            onClick={() => send(industry.suggestion)}
            disabled={loading || messages.length >= MAX_HISTORY}
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-gray-300 hover:border-white/25 hover:text-foreground transition-all disabled:opacity-50"
          >
            <Sparkles size={13} className="text-yellow-300" />
            Prueba: "{industry.suggestion}"
          </button>
        </div>

        <div className="order-1 lg:order-2 mx-auto">
          <div
            aria-hidden
            className="pointer-events-none absolute hidden lg:block"
          />
          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-10 rounded-full opacity-60"
              style={{
                background:
                  "radial-gradient(50% 50% at 50% 50%, rgba(99,102,241,0.3), transparent 70%)",
                filter: "blur(50px)",
              }}
            />

            <div className="relative w-[330px] sm:w-[340px] h-[680px] rounded-[48px] bg-[#0A0A0B] border-[8px] border-[#0A0A0B] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.08)]">
              <div className="absolute inset-0 rounded-[40px] overflow-hidden flex flex-col bg-[#0B141A]">
                <StatusBar />

                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#0A0A0B] rounded-b-[14px] z-30" />

                <div className="relative z-10 pt-9">
                  <div className="px-3 py-2 flex items-center gap-3 bg-gradient-to-r from-indigo-700 via-purple-700 to-purple-600 text-white shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
                    <ChevronLeft size={20} className="shrink-0" />
                    <div className="relative w-9 h-9 rounded-full bg-white/15 flex items-center justify-center text-base shrink-0">
                      {industry.emoji}
                      <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-indigo-700" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] font-semibold leading-tight truncate">
                        {industry.agentName}
                      </p>
                      <p className="text-[10px] opacity-80 truncate">
                        En línea · {industry.agentSub}
                      </p>
                    </div>
                    <button
                      onClick={reset}
                      title="Reiniciar conversación"
                      className="opacity-80 hover:opacity-100 transition-opacity"
                    >
                      <RefreshCw size={16} />
                    </button>
                    <Video size={18} className="opacity-80" />
                    <PhoneIcon size={18} className="opacity-80" />
                  </div>
                </div>

                <div
                  ref={scrollRef}
                  className="flex-1 overflow-y-auto px-3 py-4 space-y-2 scrollbar-thin"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 20% 20%, rgba(76,29,149,0.06), transparent 40%), radial-gradient(circle at 80% 80%, rgba(59,130,246,0.05), transparent 40%)",
                  }}
                >
                  <div className="flex justify-center mb-2">
                    <span className="text-[10px] bg-[#1F2C34]/80 text-gray-400 px-2.5 py-1 rounded-full">
                      Hoy
                    </span>
                  </div>

                  <AnimatePresence initial={false}>
                    {messages.map((m, i) => (
                      <MessageBubble key={`${industry.id}-${i}`} msg={m} />
                    ))}
                    {loading && <TypingDots key="typing" />}
                  </AnimatePresence>

                  {error && (
                    <div className="flex justify-center pt-1">
                      <span className="text-[11px] text-red-300 bg-red-500/10 border border-red-500/20 px-2.5 py-1 rounded-full">
                        ⚠ {error}
                      </span>
                    </div>
                  )}
                </div>

                <div className="bg-[#1F2C34] px-2 py-2 flex items-end gap-2 relative">
                  {/* Hint flotante "¡Probá escribir aquí!" — sale arriba del
                       input hasta que el usuario interactúa. Auto-esconde después
                       de la primera tecla. */}
                  {!hasInteracted && remaining > 0 && (
                    <motion.div
                      key="input-hint"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.4, delay: 0.6 }}
                      className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-0.5"
                    >
                      <motion.div
                        animate={{
                          y: [0, -3, 0],
                          opacity: [0.9, 1, 0.9],
                        }}
                        transition={{
                          duration: 1.4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="px-2.5 py-1 rounded-full text-[10px] font-medium tracking-wide text-white whitespace-nowrap shadow-[0_4px_16px_-2px_rgba(168,85,247,0.6)]"
                        style={{
                          background:
                            "linear-gradient(90deg, #A855F7 0%, #EC4899 100%)",
                        }}
                      >
                        ✍️ Escribe aquí · es real
                      </motion.div>
                      <motion.div
                        animate={{ y: [0, 3, 0] }}
                        transition={{
                          duration: 1.4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="w-0 h-0"
                        style={{
                          borderLeft: "5px solid transparent",
                          borderRight: "5px solid transparent",
                          borderTop: "5px solid #EC4899",
                        }}
                      />
                    </motion.div>
                  )}

                  <div
                    className="flex-1 bg-[#2A3942] rounded-3xl px-3 py-2 flex items-center gap-2 min-h-[40px] relative transition-shadow"
                    style={
                      !hasInteracted && remaining > 0
                        ? {
                            boxShadow:
                              "0 0 0 2px rgba(168,85,247,0.35), 0 0 24px -4px rgba(168,85,247,0.5)",
                          }
                        : undefined
                    }
                  >
                    <Plus size={18} className="text-gray-400 shrink-0" />
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => {
                        setInput(e.target.value);
                        if (!hasInteracted) setHasInteracted(true);
                      }}
                      onFocus={() => {
                        if (!hasInteracted) setHasInteracted(true);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault();
                          send();
                        }
                      }}
                      placeholder={
                        remaining <= 0
                          ? "Reinicia para seguir…"
                          : "Escribe un mensaje"
                      }
                      maxLength={MAX_MSG_LEN}
                      disabled={loading || remaining <= 0}
                      className="flex-1 bg-transparent text-white text-[13px] placeholder:text-gray-500 outline-none disabled:opacity-50"
                    />
                  </div>

                  {/* Botón Send con halo verde pulsante hasta que el usuario
                       toca el input. Llama la atención al CTA real. */}
                  <div className="relative shrink-0">
                    {!hasInteracted && remaining > 0 && (
                      <motion.span
                        aria-hidden
                        animate={{
                          opacity: [0.5, 0.95, 0.5],
                          scale: [1, 1.18, 1],
                        }}
                        transition={{
                          duration: 1.6,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="pointer-events-none absolute inset-0 rounded-full"
                        style={{
                          background:
                            "radial-gradient(circle, rgba(0,168,132,0.6) 0%, rgba(0,168,132,0) 70%)",
                          filter: "blur(8px)",
                        }}
                      />
                    )}
                    <button
                      onClick={() => send()}
                      disabled={!input.trim() || loading || remaining <= 0}
                      className="relative w-10 h-10 rounded-full bg-[#00A884] hover:bg-[#00B996] flex items-center justify-center text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                    >
                      <Send size={17} className="ml-0.5" />
                    </button>
                  </div>
                </div>

                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full" />
              </div>
            </div>

            <p className="mt-4 text-center text-[11px] text-gray-500">
              Mensajes restantes en esta sesión:{" "}
              <span
                className={
                  remaining <= 3 ? "text-amber-400 font-medium" : "text-gray-400"
                }
              >
                {Math.max(0, remaining)}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────── */
/* MONITOR PANEL — live signals + metrics + handoff          */
/* ───────────────────────────────────────────────────────── */

function MonitorPanel({
  userMsgCount,
  responseTimes,
  signals,
  handedOff,
  industry,
}: {
  userMsgCount: number;
  responseTimes: number[];
  signals: Record<SignalKey, boolean>;
  handedOff: boolean;
  industry: Industry;
}) {
  const avgMs =
    responseTimes.length > 0
      ? Math.round(
          responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length,
        )
      : null;

  const lastMs =
    responseTimes.length > 0 ? responseTimes[responseTimes.length - 1] : null;

  const status: { label: string; color: string; bg: string } = handedOff
    ? {
        label: "Listo para tu equipo",
        color: "text-emerald-300",
        bg: "bg-emerald-500/15 border-emerald-500/30",
      }
    : userMsgCount >= 4
      ? {
          label: "Lead calificado",
          color: "text-violet-300",
          bg: "bg-violet-500/15 border-violet-500/30",
        }
      : userMsgCount >= 1
        ? {
            label: "Calificando…",
            color: "text-cyan-300",
            bg: "bg-cyan-500/15 border-cyan-500/30",
          }
        : {
            label: "Esperando primer mensaje",
            color: "text-gray-400",
            bg: "bg-white/[0.03] border-white/10",
          };

  return (
    <div
      className="rounded-2xl p-4 mb-6 relative overflow-hidden"
      style={{
        background:
          "radial-gradient(120% 120% at 50% 0%, rgba(37,99,235,.18), transparent 60%), #0B0F1C",
        border: "1px solid rgba(91,169,255,0.22)",
        boxShadow:
          "0 24px 70px -28px rgba(37,99,235,0.45), inset 0 1px 0 rgba(255,255,255,0.05)",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-70" />
            <span
              className="relative inline-flex h-2 w-2 rounded-full"
              style={{
                background:
                  "linear-gradient(135deg, #06B6D4 0%, #A855F7 50%, #EC4899 100%)",
              }}
            />
          </span>
          <p className="text-[11px] font-semibold tracking-[0.18em] text-white/70 uppercase">
            Monitor en vivo
          </p>
        </div>
        <span className="text-[10px] text-white/30">
          Lo que HEAT detecta en tiempo real
        </span>
      </div>

      {/* Metrics row */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        <Stat label="Mensajes" value={String(userMsgCount)} />
        <Stat
          label="Respuesta"
          value={
            lastMs == null
              ? "—"
              : lastMs < 1000
                ? `${lastMs} ms`
                : `${(lastMs / 1000).toFixed(1)} s`
          }
          sub={avgMs ? `prom. ${(avgMs / 1000).toFixed(1)} s` : undefined}
        />
        <div
          className={`rounded-xl border px-2.5 py-2 ${status.bg} flex flex-col justify-center min-w-0`}
        >
          <p className={`text-[10px] tracking-[0.14em] uppercase ${status.color}`}>
            Estado
          </p>
          <p className={`text-[12px] font-medium leading-tight mt-0.5 truncate ${status.color}`}>
            {status.label}
          </p>
        </div>
      </div>

      {/* Signals */}
      <div>
        <p className="text-[10px] font-semibold tracking-[0.16em] text-white/40 uppercase mb-2">
          Señales detectadas
        </p>
        <div className="flex flex-wrap gap-1.5">
          {SIGNAL_DEFS.map((s) => {
            const on = signals[s.key];
            return (
              <span
                key={s.key}
                className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] transition-all duration-400 ${
                  on ? "text-foreground" : "text-gray-400"
                }`}
                style={
                  on
                    ? {
                        border: "1px solid transparent",
                        background:
                          "linear-gradient(#0B0F1C, #0B0F1C) padding-box, linear-gradient(135deg, #06B6D4 0%, #A855F7 50%, #EC4899 100%) border-box",
                      }
                    : {
                        border: "1px solid rgba(91,169,255,0.18)",
                        background: "rgba(255,255,255,0.02)",
                      }
                }
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    on ? "" : "bg-gray-600"
                  }`}
                  style={
                    on
                      ? {
                          background:
                            "linear-gradient(135deg, #06B6D4, #A855F7, #EC4899)",
                        }
                      : undefined
                  }
                />
                {s.label}
              </span>
            );
          })}
        </div>
      </div>

      {/* Handoff card */}
      {handedOff && (
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
          className="mt-3 rounded-xl p-3 flex items-center gap-3"
          style={{
            border: "1.5px solid transparent",
            background:
              "linear-gradient(#0B0F1C, #0B0F1C) padding-box, linear-gradient(135deg, #10B981 0%, #06B6D4 50%, #A855F7 100%) border-box",
          }}
        >
          <div className="shrink-0 w-9 h-9 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-300 text-base">
            🤝
          </div>
          <div className="min-w-0">
            <p className="text-[12px] font-semibold text-foreground tracking-tight">
              Lead pasado a tu equipo
            </p>
            <p className="text-[10.5px] text-gray-400 truncate">
              {industry.agentName} → ejecutiva del equipo comercial
            </p>
          </div>
        </motion.div>
      )}

      {/* Footer note */}
      <p className="mt-3 text-[10px] text-white/30 leading-relaxed">
        Cuando contratas HEAT, todo esto va sincronizado a tu CRM real,
        no a un simulador.
      </p>
    </div>
  );
}

function Stat({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <div
      className="rounded-xl px-2.5 py-2 min-w-0"
      style={{
        border: "1px solid rgba(91,169,255,0.15)",
        background: "rgba(255,255,255,0.025)",
      }}
    >
      <p className="text-[10px] tracking-[0.14em] uppercase text-white/45 truncate">
        {label}
      </p>
      <p className="text-[14px] font-semibold text-foreground leading-tight mt-0.5 truncate">
        {value}
      </p>
      {sub && (
        <p className="text-[9.5px] text-white/35 leading-tight mt-0.5 truncate">
          {sub}
        </p>
      )}
    </div>
  );
}
