import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CalendarDays } from "lucide-react";

/* ────────────────────────────────────────────────────────────── */
/* GHL Calendar Modal — popup premium con look HEAT 3.0           */
/* Backdrop dark blur · gradient border · header glass · iframe   */
/* del widget GHL embebido dentro.                                */
/* ────────────────────────────────────────────────────────────── */

const HIGHLIGHT_GRADIENT =
  "linear-gradient(137deg, #6366f1 0%, #a855f7 50%, #fcd34d 100%)";

// URL del widget de booking de GHL. El iframe que pegó Piero usa este ID.
// (Distinto del enlace permanente — GHL genera IDs separados para embeds).
const CALENDAR_URL =
  "https://go.heatlatam.com/widget/booking/Huxl2sb42iZcJL4s6NrY";
const CALENDAR_HEIGHT = 820;

type CalendarModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function CalendarModal({ open, onClose }: CalendarModalProps) {
  // Lock body scroll mientras está abierto
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Cargar el form_embed.js de GHL on-demand (auto-resize del iframe)
  useEffect(() => {
    if (!open) return;
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src*="form_embed.js"]'
    );
    if (existing) return;
    const script = document.createElement("script");
    script.src = "https://go.heatlatam.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          style={{
            background: "rgba(10, 10, 11, 0.75)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
          onClick={onClose}
          aria-modal="true"
          role="dialog"
          aria-labelledby="calendar-modal-title"
        >
          {/* Spotlight púrpura detrás del modal */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(50% 60% at 50% 50%, rgba(168,85,247,0.18), transparent 65%)",
            }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[1040px] max-h-[92vh] rounded-3xl overflow-hidden shadow-[0_40px_120px_-30px_rgba(168,85,247,0.55),0_0_0_1px_rgba(255,255,255,0.03)] flex flex-col"
            style={{
              border: "1.5px solid transparent",
              background: `linear-gradient(#0A0A0B, #0A0A0B) padding-box, ${HIGHLIGHT_GRADIENT} border-box`,
            }}
          >
            {/* HEADER: glass dark con título + close */}
            <div className="flex items-center gap-3 px-5 md:px-7 py-4 border-b border-white/[0.06] shrink-0">
              <div className="liquid-glass w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
                <CalendarDays
                  size={18}
                  className="text-white/90"
                  strokeWidth={2.2}
                />
              </div>
              <div className="min-w-0">
                <p
                  id="calendar-modal-title"
                  className="text-foreground text-[15px] font-medium tracking-tight leading-tight"
                >
                  Agenda una reunión
                </p>
                <p className="text-gray-500 text-[11px] mt-0.5">
                  Elige el horario que te acomode · 120 minutos
                </p>
              </div>
              <button
                onClick={onClose}
                aria-label="Cerrar"
                className="ml-auto shrink-0 p-2 rounded-full text-gray-400 hover:text-foreground hover:bg-white/[0.06] transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* IFRAME del widget de GHL (white inside dark frame) */}
            <div className="bg-white overflow-y-auto flex-1">
              <iframe
                src={CALENDAR_URL}
                title="HEAT · Reservar reunión"
                width="100%"
                height={CALENDAR_HEIGHT}
                style={{ border: "none", display: "block" }}
                scrolling="no"
                loading="lazy"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
