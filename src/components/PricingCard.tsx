import { motion } from "motion/react";
import { Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const HIGHLIGHT_GRADIENT =
  "linear-gradient(137deg, #FF3D77 0%, #FFB1CE 45%, #FF9D3C 100%)";

export interface PricingCardProps {
  icon: LucideIcon;
  name: string;
  tagline: string;
  currency?: string;
  price: string;
  billing: string;
  features: string[];
  ctaLabel?: string;
  highlighted?: boolean;
  highlightLabel?: string;
  delay?: number;
}

export default function PricingCard({
  icon: Icon,
  name,
  tagline,
  currency = "USD",
  price,
  billing,
  features,
  ctaLabel = "Comenzar ahora →",
  highlighted = false,
  highlightLabel = "MÁS VENDIDO",
  delay = 0,
}: PricingCardProps) {
  const highlightedStyles = highlighted
    ? {
        border: "1.5px solid transparent",
        background: `linear-gradient(#0E0E10, #0E0E10) padding-box, ${HIGHLIGHT_GRADIENT} border-box`,
      }
    : undefined;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className="relative group transition-transform duration-500 ease-out hover:-translate-y-1"
    >
      {highlighted ? (
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 px-3 py-1 rounded-full text-[10px] font-semibold tracking-[0.18em] text-white"
          style={{ background: HIGHLIGHT_GRADIENT }}
        >
          {highlightLabel}
        </div>
      ) : null}

      <div
        className={
          highlighted
            ? "relative h-full rounded-3xl overflow-hidden transition-shadow duration-500 ease-out group-hover:shadow-[0_20px_60px_-15px_rgba(255,61,119,0.4)]"
            : "relative h-full rounded-3xl border border-white/5 bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04] transition-all duration-500 ease-out group-hover:shadow-[0_16px_50px_-12px_rgba(168,85,247,0.25)]"
        }
        style={highlightedStyles}
      >
        <div className="flex h-full flex-col p-8 md:p-9">
          <div className="text-white/80">
            <Icon size={24} strokeWidth={2.2} />
          </div>

          <h3 className="mt-4 font-display text-lg font-medium tracking-tight text-white">
            {name}
          </h3>
          <p className="mt-2 text-gray-400 text-sm leading-relaxed min-h-[40px]">
            {tagline}
          </p>

          <div className="mt-6 flex items-baseline gap-2">
            <span className="text-gray-500 text-xs font-medium tracking-wider">
              {currency}
            </span>
            <span
              className="font-display font-medium text-white tracking-tight"
              style={{ fontSize: 56, lineHeight: 1 }}
            >
              {price}
            </span>
            <span className="text-gray-500 text-sm">{billing}</span>
          </div>

          <ul className="mt-6 space-y-3 flex-1">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed"
              >
                <Check
                  size={16}
                  strokeWidth={2.5}
                  className="mt-0.5 shrink-0 text-white/70"
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <Button
            variant="heroSecondary"
            size="none"
            className="mt-8 w-full rounded-full px-4 py-3 text-sm"
          >
            {ctaLabel}
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
