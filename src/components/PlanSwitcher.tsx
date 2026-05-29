import { motion } from "motion/react";

/* ────────────────────────────────────────────────────────────── */
/* PLAN SWITCHER — pills para cambiar de plan dentro de la misma  */
/* familia (HEAT IA · Páginas Web · Implementación). Se mete entre */
/* el subtítulo del hero y la caluga blanca del checkout.         */
/* ────────────────────────────────────────────────────────────── */

const HIGHLIGHT_GRADIENT =
  "linear-gradient(137deg, #6366f1 0%, #a855f7 50%, #fcd34d 100%)";

export type PlanOption = {
  slug: string;
  label: string;
  price: string;
};

type PlanSwitcherProps = {
  options: PlanOption[];
  currentSlug: string;
  basePath: string;
  caption?: string;
};

export default function PlanSwitcher({
  options,
  currentSlug,
  basePath,
  caption = "¿Te equivocaste? Cambia de plan acá",
}: PlanSwitcherProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="relative mt-8 flex flex-col items-center gap-3"
    >
      <p className="text-[10px] font-semibold tracking-[0.22em] text-white/40 uppercase">
        {caption}
      </p>
      <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] p-1.5 backdrop-blur-sm">
        {options.map((opt) => {
          const isActive = opt.slug === currentSlug;
          if (isActive) {
            return (
              <div
                key={opt.slug}
                className="relative rounded-full"
                style={{
                  padding: "1.5px",
                  background: HIGHLIGHT_GRADIENT,
                  boxShadow:
                    "0 6px 24px -6px rgba(168, 85, 247, 0.4)",
                }}
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-[#0E0E14] px-4 py-2 text-[12px] font-medium text-foreground">
                  <span className="tracking-wide">{opt.label}</span>
                  <span className="text-gray-500">·</span>
                  <span
                    className="bg-clip-text text-transparent font-semibold"
                    style={{
                      backgroundImage:
                        "linear-gradient(to left, #6366f1, #a855f7, #fcd34d)",
                    }}
                  >
                    {opt.price}
                  </span>
                </span>
              </div>
            );
          }
          return (
            <a
              key={opt.slug}
              href={`${basePath}/${opt.slug}`}
              className="group inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-transparent px-4 py-2 text-[12px] font-medium text-white/60 hover:text-foreground hover:border-white/25 hover:bg-white/[0.05] transition-all duration-300"
            >
              <span className="tracking-wide">{opt.label}</span>
              <span className="text-gray-600">·</span>
              <span className="text-gray-400 group-hover:text-gray-200 transition-colors">
                {opt.price}
              </span>
            </a>
          );
        })}
      </div>
    </motion.div>
  );
}
