import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Star, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { SiGoogle } from "@icons-pack/react-simple-icons";

const MAPS_URL =
  "https://www.google.com/maps/place/HEAT+IA/@-33.3992303,-70.5713581,17z/data=!4m6!3m5!1s0x9662cb95b469932b:0x81ea6fe51290427d!8m2!3d-33.3992303!4d-70.5713581!16s%2Fg%2F11j2wm8x0x";

type Review = {
  name: string;
  meta: string;
  date: string;
  text: string;
  avatar: string;
  bg: string;
};

const REVIEWS: Review[] = [
  {
    name: "Anaís Burgos",
    meta: "6 opiniones · 2 fotos",
    date: "Hace 9 semanas",
    text: "Excelente atención, la plataforma increíble! Me ha ayudado mucho con mi negocio.",
    avatar: "👩",
    bg: "from-emerald-500 to-teal-500",
  },
  {
    name: "Consultoría Rivera Ríos",
    meta: "2 opiniones",
    date: "Hace 9 semanas",
    text: "Me sorprendió el nivel de respuesta de los agentes — son lo que quería, y muy cercanos con mis clientes. Hasta el momento, perfecto!",
    avatar: "🦷",
    bg: "from-pink-500 to-rose-500",
  },
  {
    name: "Luis Rojas Álvarez",
    meta: "3 opiniones",
    date: "Hace 9 semanas",
    text: "Excelente herramienta. Me ha ayudado muchísimo en mi pyme de lavado de autos, ya que puedo calificar a mis clientes y fidelizarlos con IA.",
    avatar: "👨",
    bg: "from-indigo-500 to-blue-500",
  },
  {
    name: "Magdy Picón",
    meta: "2 opiniones",
    date: "Hace 9 semanas",
    text: "Excelente atención. Muy buen equipo. Me gustó mucho esta herramienta para mi trabajo.",
    avatar: "👩",
    bg: "from-amber-500 to-orange-500",
  },
  {
    name: "Leily Araujo",
    meta: "Reseña reciente",
    date: "Hace 9 semanas",
    text: "Súper recomendados. Muy contenta con el servicio y la rapidez del equipo.",
    avatar: "👩",
    bg: "from-slate-500 to-slate-600",
  },
  {
    name: "Andrés Cruz",
    meta: "1 opinión",
    date: "Hace 3 meses",
    text: "Es una herramienta muy útil, nos ha servido bastante para prospectar, hacer seguimiento y cerrar ventas. La recomiendo 100%.",
    avatar: "👨",
    bg: "from-cyan-500 to-blue-600",
  },
];

const AUTO_ROTATE_MS = 2500;
const CARD_WIDTH = 340;
const CARD_OFFSET_X = 290; // horizontal distance per slot

function Stars() {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className="fill-yellow-300 stroke-yellow-300"
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div
      className="h-full rounded-3xl border border-white/10 bg-[#0E0E14] backdrop-blur-md p-7 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)]"
      style={{ width: CARD_WIDTH }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3 min-w-0">
          <div
            className={`shrink-0 w-10 h-10 rounded-full bg-gradient-to-br ${review.bg} flex items-center justify-center text-base shadow-[0_0_0_2px_rgba(255,255,255,0.05)]`}
          >
            <span className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]">
              {review.avatar}
            </span>
          </div>
          <div className="min-w-0">
            <p className="text-foreground text-sm font-medium truncate">
              {review.name}
            </p>
            <p className="text-gray-500 text-[11px] truncate">{review.meta}</p>
          </div>
        </div>
        <SiGoogle size={16} className="shrink-0 text-white/30" />
      </div>

      <div className="flex items-center gap-3 mb-3">
        <Stars />
        <span className="text-gray-500 text-[11px]">{review.date}</span>
      </div>

      <p className="text-gray-300 text-[14px] leading-relaxed min-h-[100px]">
        "{review.text}"
      </p>

      <div className="mt-5 pt-4 border-t border-white/5 inline-flex items-center gap-1.5 text-[11px] text-gray-500">
        Verificada en Google
        <ExternalLink size={11} />
      </div>
    </div>
  );
}

export default function GoogleReviewsSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(
      () => setIndex((i) => (i + 1) % REVIEWS.length),
      AUTO_ROTATE_MS,
    );
    return () => clearInterval(t);
  }, [paused]);

  const N = REVIEWS.length;
  const half = Math.floor(N / 2);

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

      <motion.a
        href={MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="group mb-4 inline-flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-400"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-[0_8px_24px_-8px_rgba(66,133,244,0.4)]">
          <SiGoogle size={22} color="#4285F4" />
        </div>
        <div className="text-left">
          <div className="flex items-center gap-2">
            <span className="font-display font-semibold text-white text-2xl tracking-tight leading-none">
              5.0
            </span>
            <Stars />
          </div>
          <p className="text-xs text-gray-400 mt-1">
            12 reseñas en Google · HEAT IA · Santiago
          </p>
        </div>
        <ExternalLink size={16} className="text-gray-500 group-hover:text-foreground transition-colors" />
      </motion.a>

      <div
        ref={containerRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="relative w-full max-w-[1200px] flex items-center justify-center"
        style={{ height: 340 }}
      >
        <button
          aria-label="Anterior"
          onClick={() =>
            setIndex((i) => (i - 1 + REVIEWS.length) % REVIEWS.length)
          }
          className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full liquid-glass flex items-center justify-center text-foreground hover:scale-110 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] transition-all duration-300"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          aria-label="Siguiente"
          onClick={() => setIndex((i) => (i + 1) % REVIEWS.length)}
          className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full liquid-glass flex items-center justify-center text-foreground hover:scale-110 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] transition-all duration-300"
        >
          <ChevronRight size={20} />
        </button>
        {REVIEWS.map((review, i) => {
          let offset = i - index;
          if (offset > half) offset -= N;
          if (offset < -half) offset += N;
          const distance = Math.abs(offset);
          const isCenter = distance === 0;
          const isAdjacent = distance === 1;
          const isFar = distance === 2;
          return (
            <motion.div
              key={review.name}
              className="absolute top-1/2 left-1/2 -translate-y-1/2"
              animate={{
                x: offset * CARD_OFFSET_X - CARD_WIDTH / 2,
                scale: isCenter ? 1 : isAdjacent ? 0.85 : isFar ? 0.7 : 0.55,
                opacity: isCenter
                  ? 1
                  : isAdjacent
                    ? 0.4
                    : isFar
                      ? 0.12
                      : 0,
                zIndex: isCenter ? 30 : isAdjacent ? 20 : isFar ? 10 : 1,
                filter: isCenter ? "blur(0px)" : isAdjacent ? "blur(1px)" : "blur(3px)",
              }}
              transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
              style={{ width: CARD_WIDTH }}
              onClick={() => setIndex(i)}
            >
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={isCenter ? "cursor-pointer" : "cursor-pointer pointer-events-none"}
                tabIndex={isCenter ? 0 : -1}
              >
                <ReviewCard review={review} />
              </a>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-6 flex items-center gap-2">
        {REVIEWS.map((_, i) => {
          const active = i === index;
          return (
            <button
              key={i}
              aria-label={`Reseña ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`rounded-full transition-all duration-400 ${
                active
                  ? "w-6 h-1.5 bg-foreground"
                  : "w-1.5 h-1.5 bg-white/25 hover:bg-white/50"
              }`}
            />
          );
        })}
      </div>

      <motion.a
        href={MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-6 inline-flex items-center gap-2 text-sm text-gray-300 hover:text-foreground transition-colors group"
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
