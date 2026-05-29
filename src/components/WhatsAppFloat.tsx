import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";
import { fbqTrack } from "@/lib/fbpixel";

/* ────────────────────────────────────────────────────────────── */
/* WhatsAppFloat — botón flotante abajo-derecha con icono WApp.   */
/* Verde brand + ring de glow + tooltip "Conversemos" al hover.   */
/* Dispara fbq Contact al click.                                  */
/* ────────────────────────────────────────────────────────────── */

const WHATSAPP_NUMBER = "56978919125"; // +56 9 7891 9125
const PREFILL_MESSAGE =
  "Hola HEAT, vengo desde heatlatam.com y quiero más información.";

const HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  PREFILL_MESSAGE
)}`;

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Pequeño delay para que aparezca con una animación suave después del
  // mount inicial (no compite con LCP del hero).
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 800);
    return () => clearTimeout(t);
  }, []);

  function handleClick() {
    fbqTrack("Contact", {
      content_name: "WhatsApp Float",
      method: "whatsapp",
    });
    // El href hace el resto (target=_blank).
  }

  return (
    <AnimatePresence>
      {mounted && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 200,
            damping: 18,
          }}
          className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-[100]"
        >
          <div className="relative">
            {/* Tooltip desktop */}
            <AnimatePresence>
              {showTooltip && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                  className="hidden md:flex absolute right-full top-1/2 -translate-y-1/2 mr-3 items-center gap-2 whitespace-nowrap rounded-full bg-black/90 backdrop-blur-md text-white text-[13px] font-medium px-4 py-2 shadow-lg border border-white/10"
                >
                  <span>Conversemos por WhatsApp</span>
                  <div
                    className="absolute right-[-5px] top-1/2 -translate-y-1/2 w-0 h-0"
                    style={{
                      borderTop: "5px solid transparent",
                      borderBottom: "5px solid transparent",
                      borderLeft: "5px solid rgba(0,0,0,0.9)",
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Halo pulsante */}
            <motion.span
              aria-hidden
              animate={{
                opacity: [0.4, 0.7, 0.4],
                scale: [1, 1.25, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(37,211,102,0.5) 0%, rgba(37,211,102,0) 70%)",
                filter: "blur(8px)",
              }}
            />

            {/* Botón principal */}
            <a
              href={HREF}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Conversemos por WhatsApp"
              onClick={handleClick}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              className="relative flex h-14 w-14 md:h-[60px] md:w-[60px] items-center justify-center rounded-full text-white transition-transform duration-300 ease-out hover:scale-110 active:scale-95"
              style={{
                background:
                  "radial-gradient(circle at 30% 25%, #6BFFAE 0%, #25D366 45%, #128C7E 100%)",
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.45), inset 0 -2px 6px rgba(0,80,40,0.45), 0 0 0 1px rgba(37,211,102,0.5), 0 0 22px rgba(37,211,102,0.6), 0 8px 24px -6px rgba(0,0,0,0.5)",
              }}
            >
              <SiWhatsapp
                size={28}
                color="currentColor"
                className="md:hidden drop-shadow-[0_1px_2px_rgba(0,60,30,0.45)]"
              />
              <SiWhatsapp
                size={30}
                color="currentColor"
                className="hidden md:block drop-shadow-[0_1px_2px_rgba(0,60,30,0.45)]"
              />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
