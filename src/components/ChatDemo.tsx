import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

type Message = { role: "user" | "agent"; text: React.ReactNode };

const SCRIPT: Message[] = [
  { role: "user", text: "Hola, quería pedir hora para una limpieza" },
  {
    role: "agent",
    text: (
      <>
        ¡Hola! <span aria-hidden>😊</span> ¿Es tu{" "}
        <span className="font-semibold text-cyan-300">primera visita</span> o ya
        eres paciente?
      </>
    ),
  },
  { role: "user", text: "Primera visita" },
  {
    role: "agent",
    text: (
      <>
        Perfecto. Tengo dos opciones esta semana:{" "}
        <span className="font-semibold text-cyan-300">mañana 10:00 AM</span> o{" "}
        <span className="font-semibold text-cyan-300">viernes 15:00</span>.
        ¿Cuál te acomoda?
      </>
    ),
  },
  { role: "user", text: "Mañana 10:00 me sirve 🙌" },
  {
    role: "agent",
    text: (
      <>
        ¡Listo! Tu cita queda confirmada para mañana 10:00 AM. Te llega
        recordatorio temprano. <span aria-hidden>🦷</span>
      </>
    ),
  },
];

const USER_DELAY = 1100;
const AGENT_TYPING = 1800;
const RESET_DELAY = 4500;

function TypingDots() {
  return (
    <div className="flex items-center gap-1.5 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 w-fit">
      <span className="block w-1.5 h-1.5 rounded-full bg-white/50 animate-bounce" />
      <span className="block w-1.5 h-1.5 rounded-full bg-white/50 animate-bounce [animation-delay:140ms]" />
      <span className="block w-1.5 h-1.5 rounded-full bg-white/50 animate-bounce [animation-delay:280ms]" />
    </div>
  );
}

export default function ChatDemo() {
  const [visible, setVisible] = useState(1);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    if (visible >= SCRIPT.length) {
      t = setTimeout(() => {
        setVisible(1);
        setTyping(false);
      }, RESET_DELAY);
      return () => clearTimeout(t);
    }
    const next = SCRIPT[visible];
    if (next.role === "agent") {
      setTyping(true);
      t = setTimeout(() => {
        setTyping(false);
        setVisible((v) => v + 1);
      }, AGENT_TYPING);
    } else {
      t = setTimeout(() => setVisible((v) => v + 1), USER_DELAY);
    }
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <div className="relative max-w-md w-full mx-auto">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-8 rounded-[40px] opacity-50"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 40%, rgba(99,102,241,0.35), transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-5 md:p-6 shadow-[0_24px_80px_-20px_rgba(99,102,241,0.3)]">
        <div className="flex items-center gap-3 pb-4 border-b border-white/5">
          <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-xs">
            IA
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#0E0E14]" />
          </div>
          <div>
            <p className="text-foreground font-medium text-sm">
              Clínica Sonríe
            </p>
            <p className="text-xs text-emerald-400 flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              En línea · responde al instante
            </p>
          </div>
        </div>

        <div className="mt-4 space-y-3 min-h-[340px] max-h-[340px] overflow-hidden flex flex-col justify-end">
          <AnimatePresence initial={false}>
            {SCRIPT.slice(0, visible).map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={
                    msg.role === "user"
                      ? "max-w-[82%] rounded-2xl rounded-br-md px-4 py-2.5 text-sm bg-white/[0.07] text-foreground border border-white/10"
                      : "max-w-[82%] rounded-2xl rounded-bl-md px-4 py-2.5 text-sm text-foreground border border-indigo-400/25 bg-gradient-to-br from-indigo-500/[0.12] to-purple-500/[0.10]"
                  }
                >
                  {msg.text}
                </div>
              </motion.div>
            ))}
            {typing && (
              <motion.div
                key="typing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex justify-start"
              >
                <TypingDots />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
