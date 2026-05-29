import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";

/* ────────────────────────────────────────────────────────────── */
/* BACK TO HOME — botón discreto pero atractivo para volver al    */
/* home. Se usa al final de las landings de pre-compra.          */
/* ────────────────────────────────────────────────────────────── */

export default function BackToHomeLink() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative mt-12 flex justify-center"
    >
      <a
        href="/"
        className="group relative inline-flex items-center gap-2 rounded-full liquid-glass text-foreground/85 text-sm font-medium px-6 py-3 overflow-hidden transition-all duration-500 ease-out hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.3)] hover:text-foreground"
      >
        <span
          aria-hidden
          className="absolute inset-0 rounded-full bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"
        />
        <span className="relative z-10 inline-flex items-center gap-2 transition-colors duration-500 ease-out group-hover:text-background">
          <ArrowLeft
            size={14}
            className="transition-transform duration-500 ease-out group-hover:-translate-x-0.5"
          />
          Volver al inicio
        </span>
      </a>
    </motion.div>
  );
}
