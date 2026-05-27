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
  id: "clinica" | "auto" | "inmo" | "servicios";
  name: string;
  emoji: string;
  agentName: string;
  agentSub: string;
  welcome: string;
  suggestion: string;
};

const INDUSTRIES: Industry[] = [
  {
    id: "clinica",
    name: "Clínica",
    emoji: "🦷",
    agentName: "Clínica Sonríe",
    agentSub: "Recepción",
    welcome: "¡Hola! 😊 Soy la asistente de Clínica Sonríe. ¿En qué te puedo ayudar hoy?",
    suggestion: "Quería pedir hora para una limpieza",
  },
  {
    id: "auto",
    name: "Automotor",
    emoji: "🚗",
    agentName: "AutoStar",
    agentSub: "Asesor de ventas",
    welcome: "¡Hola! Soy de AutoStar Concesionaria. ¿Estás buscando un modelo en particular?",
    suggestion: "Busco un SUV para mi familia, 4 personas",
  },
  {
    id: "inmo",
    name: "Inmobiliaria",
    emoji: "🏠",
    agentName: "Hogar Inmobiliaria",
    agentSub: "Asesor",
    welcome: "¡Hola! 👋 Soy de Hogar Inmobiliaria. ¿Buscás arriendo, compra o solo info?",
    suggestion: "Busco departamento en arriendo en Providencia",
  },
  {
    id: "servicios",
    name: "Agencia",
    emoji: "💼",
    agentName: "Pulse Digital",
    agentSub: "Comercial",
    welcome: "¡Hola! Soy de Pulse Agencia Digital. ¿Qué objetivo o problema te trae por acá?",
    suggestion: "Necesito una web nueva y mejorar mi marca",
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

export default function LiveDemoSection() {
  const [industry, setIndustry] = useState<Industry>(INDUSTRIES[0]);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: INDUSTRIES[0].welcome, time: now() },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

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
  };

  const reset = () => {
    setMessages([
      { role: "assistant", content: industry.welcome, time: now() },
    ]);
    setInput("");
    setError(null);
  };

  const send = async (textOverride?: string) => {
    const text = (textOverride ?? input).trim();
    if (!text || loading) return;
    if (text.length > MAX_MSG_LEN) {
      setError(`Máximo ${MAX_MSG_LEN} caracteres por mensaje`);
      return;
    }
    if (messages.length >= MAX_HISTORY) {
      setError("Llegaste al límite del demo. Refrescá para reiniciar.");
      return;
    }

    const userMsg: Message = { role: "user", content: text, time: now() };
    const nextMessages = [...messages, userMsg];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);
    setError(null);

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

      setMessages([
        ...nextMessages,
        { role: "assistant", content: data.reply, time: now() },
      ]);
    } catch {
      setError("No pudimos contactar al agente. Intentá de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const remaining = MAX_HISTORY - messages.length;

  return (
    <section className="bg-[#0A0A0B] flex flex-col items-center px-6 md:px-12 py-20 md:py-24">
      <div className="w-full max-w-[1080px] mb-12 text-center">
        <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-emerald-300 mb-4">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          PROBALO EN VIVO · 100% REAL · AHORA
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight mb-4 leading-tight">
          Hablá vos mismo con un agente HEAT
        </h2>
        <p className="text-gray-400 text-base md:text-lg leading-7 max-w-xl mx-auto">
          Elegí tu industria. Escribí lo que quieras. El agente responde como si
          fuera tu propio negocio — sin formulario, sin registro.
        </p>
      </div>

      <div className="grid w-full max-w-[1100px] gap-12 lg:gap-16 lg:grid-cols-[1fr_auto] items-center">
        <div className="order-2 lg:order-1">
          <p className="text-[11px] font-semibold tracking-[0.18em] text-white/50 mb-4">
            ELEGÍ TU INDUSTRIA
          </p>
          <div className="grid grid-cols-2 gap-3 mb-8">
            {INDUSTRIES.map((i) => {
              const active = i.id === industry.id;
              return (
                <button
                  key={i.id}
                  onClick={() => switchIndustry(i)}
                  className={`group relative rounded-2xl border px-4 py-3.5 text-left transition-all duration-400 ${
                    active
                      ? "border-white/30 bg-white/[0.06] shadow-[0_8px_30px_-10px_rgba(168,85,247,0.4)]"
                      : "border-white/[0.08] bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{i.emoji}</span>
                    <div className="min-w-0">
                      <p
                        className={`text-sm font-semibold tracking-tight ${
                          active ? "text-foreground" : "text-gray-300"
                        }`}
                      >
                        {i.name}
                      </p>
                      <p className="text-[11px] text-gray-500 truncate">
                        {i.agentName}
                      </p>
                    </div>
                  </div>
                  {active && (
                    <span className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#0A0A0B]" />
                  )}
                </button>
              );
            })}
          </div>

          <ul className="space-y-3 mb-6 text-sm text-gray-300">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 w-1 h-1 rounded-full bg-emerald-400 shrink-0" />
              <span>Conversación <strong className="text-foreground">REAL</strong> con Claude, no un script grabado.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 w-1 h-1 rounded-full bg-emerald-400 shrink-0" />
              <span>Probá tono, claridad y velocidad antes de contratar.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 w-1 h-1 rounded-full bg-emerald-400 shrink-0" />
              <span>Cambiá de industria cuando quieras — el agente se adapta.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 w-1 h-1 rounded-full bg-emerald-400 shrink-0" />
              <span>Cuando contrates, lo personalizamos a <strong className="text-foreground">tu negocio real</strong>.</span>
            </li>
          </ul>

          <button
            onClick={() => send(industry.suggestion)}
            disabled={loading || messages.length >= MAX_HISTORY}
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-gray-300 hover:border-white/25 hover:text-foreground transition-all disabled:opacity-50"
          >
            <Sparkles size={13} className="text-yellow-300" />
            Probá: "{industry.suggestion}"
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

                <div className="bg-[#1F2C34] px-2 py-2 flex items-end gap-2">
                  <div className="flex-1 bg-[#2A3942] rounded-3xl px-3 py-2 flex items-center gap-2 min-h-[40px]">
                    <Plus size={18} className="text-gray-400 shrink-0" />
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault();
                          send();
                        }
                      }}
                      placeholder={
                        remaining <= 0
                          ? "Reiniciá para seguir…"
                          : "Escribe un mensaje"
                      }
                      maxLength={MAX_MSG_LEN}
                      disabled={loading || remaining <= 0}
                      className="flex-1 bg-transparent text-white text-[13px] placeholder:text-gray-500 outline-none disabled:opacity-50"
                    />
                  </div>
                  <button
                    onClick={() => send()}
                    disabled={!input.trim() || loading || remaining <= 0}
                    className="w-10 h-10 rounded-full bg-[#00A884] hover:bg-[#00B996] flex items-center justify-center text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors shrink-0"
                  >
                    <Send size={17} className="ml-0.5" />
                  </button>
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
