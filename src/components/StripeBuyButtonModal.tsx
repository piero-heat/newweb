import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ShoppingBag } from "lucide-react";

/* ────────────────────────────────────────────────────────────── */
/* Stripe Buy Button Modal — popup premium HEAT con el web        */
/* component <stripe-buy-button> adentro. Reusable para cualquier */
/* producto: solo se le pasan los IDs de Stripe.                  */
/* ────────────────────────────────────────────────────────────── */

const HIGHLIGHT_GRADIENT =
  "linear-gradient(137deg, #6366f1 0%, #a855f7 50%, #fcd34d 100%)";

type StripeBuyButtonModalProps = {
  open: boolean;
  onClose: () => void;
  buyButtonId: string;
  publishableKey: string;
  title?: string;
  subtitle?: string;
};

export default function StripeBuyButtonModal({
  open,
  onClose,
  buyButtonId,
  publishableKey,
  title = "Completa tu compra",
  subtitle = "Pago seguro procesado por Stripe",
}: StripeBuyButtonModalProps) {
  // Lock body scroll mientras abierto
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
        >
          {/* Spotlight púrpura */}
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
            className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-[0_40px_120px_-30px_rgba(168,85,247,0.55),0_0_0_1px_rgba(255,255,255,0.03)]"
            style={{
              border: "1.5px solid transparent",
              background: `linear-gradient(#0E0E14, #0E0E14) padding-box, ${HIGHLIGHT_GRADIENT} border-box`,
            }}
          >
            {/* HEADER */}
            <div className="flex items-center gap-3 px-5 md:px-7 py-4 border-b border-white/[0.06]">
              <div className="liquid-glass w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
                <ShoppingBag
                  size={18}
                  className="text-white/90"
                  strokeWidth={2.2}
                />
              </div>
              <div className="min-w-0">
                <p className="text-foreground text-[15px] font-medium tracking-tight leading-tight">
                  {title}
                </p>
                <p className="text-gray-500 text-[11px] mt-0.5">{subtitle}</p>
              </div>
              <button
                onClick={onClose}
                aria-label="Cerrar"
                className="ml-auto shrink-0 p-2 rounded-full text-gray-400 hover:text-foreground hover:bg-white/[0.06] transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* STRIPE BUY BUTTON — centrado con padding generoso */}
            <div className="flex flex-col items-center gap-4 px-6 md:px-8 py-8 md:py-10">
              <stripe-buy-button
                buy-button-id={buyButtonId}
                publishable-key={publishableKey}
              />
              <p className="text-[11px] text-gray-500 text-center">
                Al continuar accedes al checkout seguro de Stripe.
                Sin sorpresas, sin cargos extra.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
