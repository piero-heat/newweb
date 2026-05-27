import { motion } from "motion/react";
import { Star, ExternalLink, ThumbsUp, MoreVertical } from "lucide-react";
import { SiGoogle } from "@icons-pack/react-simple-icons";

const MAPS_URL =
  "https://www.google.com/maps/place/HEAT+IA/@-33.3992303,-70.5713581,17z/data=!4m6!3m5!1s0x9662cb95b469932b:0x81ea6fe51290427d!8m2!3d-33.3992303!4d-70.5713581!16s%2Fg%2F11j2wm8x0x";

type Review = {
  name: string;
  meta: string;
  date: string;
  text: string;
  /** Google-style avatar color (matches the user's profile circle on Maps) */
  avatarBg: string;
  /** Per-review Google Maps URL — fallback to MAPS_URL if user-specific not available */
  url: string;
};

// Show only the top 3 reviews — kept short and credible.
// Each `url` should point to that exact review on Google Maps. Until each
// reviewer's individual share link is captured, we link to the HEAT IA Maps
// listing where the review can be found in the public reviews list.
const REVIEWS: Review[] = [
  {
    name: "Anaís Burgos",
    meta: "6 opiniones · 2 fotos",
    date: "Hace 9 semanas",
    text: "Excelente atención, la plataforma increíble! Me ha ayudado mucho con mi negocio.",
    avatarBg: "#1A73E8", // Google blue
    url: MAPS_URL,
  },
  {
    name: "Consultoría Rivera Ríos",
    meta: "2 opiniones",
    date: "Hace 9 semanas",
    text: "Me sorprendió el nivel de respuesta de los agentes — son lo que quería, y muy cercanos con mis clientes. Hasta el momento, perfecto!",
    avatarBg: "#E94235", // Google red
    url: MAPS_URL,
  },
  {
    name: "Andrés Cruz",
    meta: "1 opinión",
    date: "Hace 3 meses",
    text: "Es una herramienta muy útil, nos ha servido bastante para prospectar, hacer seguimiento y cerrar ventas. La recomiendo 100%.",
    avatarBg: "#34A853", // Google green
    url: MAPS_URL,
  },
];

function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

function Stars({ size = 14 }: { size?: number }) {
  return (
    <div className="flex items-center gap-[1px]">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className="fill-[#FBBC04] stroke-[#FBBC04]"
        />
      ))}
    </div>
  );
}

function ReviewCard({ review, index }: { review: Review; index: number }) {
  return (
    <motion.a
      href={review.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.06 }}
      className="group flex flex-col rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6 transition-all duration-400 ease-out hover:border-white/15 hover:bg-white/[0.035] hover:-translate-y-0.5"
    >
      {/* Header — Google-style avatar initials + name */}
      <header className="flex items-start gap-3">
        <div
          className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white text-[14px] font-medium tracking-wide shadow-[0_0_0_2px_rgba(255,255,255,0.04)]"
          style={{ background: review.avatarBg }}
        >
          {initials(review.name)}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-foreground text-[14px] font-medium leading-tight truncate">
            {review.name}
          </p>
          <p className="text-gray-500 text-[11.5px] mt-0.5 truncate">
            {review.meta}
          </p>
        </div>
        <span
          aria-hidden
          className="shrink-0 text-gray-600 pt-0.5"
        >
          <MoreVertical size={16} />
        </span>
      </header>

      {/* Stars + date — Google-style row */}
      <div className="mt-3 flex items-center gap-2.5">
        <Stars />
        <span className="text-gray-500 text-[11.5px]">{review.date}</span>
      </div>

      {/* Review body */}
      <p className="mt-3 text-gray-300 text-[14px] leading-relaxed">
        {review.text}
      </p>

      {/* Footer — link to real Google review */}
      <footer className="mt-5 pt-4 border-t border-white/[0.05] flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 text-[11px] text-gray-500 group-hover:text-gray-300 transition-colors">
          <SiGoogle size={11} />
          Ver en Google
          <ExternalLink size={10} className="transition-transform group-hover:translate-x-0.5" />
        </span>
        <span className="inline-flex items-center gap-1.5 text-[11px] text-gray-500">
          <ThumbsUp size={12} />
          Útil
        </span>
      </footer>
    </motion.a>
  );
}

export default function GoogleReviewsSection() {
  return (
    <section className="bg-[#0A0A0B] flex flex-col items-center px-6 md:px-12 py-16 md:py-20">
      <div className="w-full max-w-[1080px] mb-8 text-center">
        <p className="text-xs font-medium tracking-[0.18em] text-white/50 mb-4">
          ⭐ RESEÑAS REALES EN GOOGLE
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight mb-4 leading-tight">
          Lo que dicen nuestros clientes
        </h2>
        <p className="text-gray-400 text-base md:text-lg leading-7 max-w-xl mx-auto">
          Reseñas verificadas en Google Business — sin filtros, sin
          maquillaje.
        </p>
      </div>

      {/* Google Business header card — like a real Google Maps panel */}
      <motion.a
        href={MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="group mb-10 w-full max-w-[680px] rounded-2xl border border-white/10 bg-white/[0.025] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-400"
      >
        <div className="flex items-center gap-5 p-5 md:p-6">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_8px_24px_-8px_rgba(66,133,244,0.4)]">
            <SiGoogle size={26} color="#4285F4" />
          </div>
          <div className="flex-1 min-w-0 text-left">
            <p className="text-foreground text-[15px] font-medium tracking-tight">
              HEAT IA · Santiago
            </p>
            <div className="mt-1 flex items-center gap-2">
              <span className="font-display font-semibold text-white text-2xl tracking-tight leading-none">
                5,0
              </span>
              <Stars size={15} />
              <span className="text-xs text-gray-400">· 12 reseñas</span>
            </div>
          </div>
          <ExternalLink
            size={16}
            className="shrink-0 text-gray-500 group-hover:text-foreground transition-colors"
          />
        </div>
      </motion.a>

      {/* Flat grid — 3 cols desktop, 2 tablet, 1 mobile */}
      <div className="grid w-full max-w-[1080px] grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        {REVIEWS.map((review, i) => (
          <ReviewCard key={review.name} review={review} index={i} />
        ))}
      </div>

      <motion.a
        href={MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-5 py-2.5 text-sm text-gray-300 hover:text-foreground hover:border-white/20 hover:bg-white/[0.04] transition-all duration-400 group"
      >
        Ver las 12 reseñas en Google
        <ExternalLink
          size={14}
          className="transition-transform group-hover:translate-x-0.5"
        />
      </motion.a>
    </section>
  );
}
