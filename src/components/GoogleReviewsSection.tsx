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
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.06 }}
      className="group flex flex-col rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6 transition-all duration-400 ease-out hover:border-white/15 hover:bg-white/[0.035]"
    >
      {/* Header — author + meta */}
      <header className="flex items-start gap-3">
        <div
          className={`shrink-0 w-10 h-10 rounded-full bg-gradient-to-br ${review.bg} flex items-center justify-center text-[17px] shadow-[0_0_0_2px_rgba(255,255,255,0.04)]`}
        >
          <span className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]">
            {review.avatar}
          </span>
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-foreground text-[14px] font-medium leading-tight truncate">
            {review.name}
          </p>
          <p className="text-gray-500 text-[11.5px] mt-0.5 truncate">
            {review.meta}
          </p>
        </div>
        <button
          aria-label="Más"
          className="shrink-0 text-gray-600 hover:text-gray-400 transition-colors pt-0.5"
        >
          <MoreVertical size={16} />
        </button>
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

      {/* Footer — Google review attribution + helpful */}
      <footer className="mt-5 pt-4 border-t border-white/[0.05] flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 text-[11px] text-gray-500">
          <SiGoogle size={11} className="text-gray-500" />
          Publicada en Google
        </span>
        <button
          aria-label="Marcar como útil"
          className="inline-flex items-center gap-1.5 text-[11px] text-gray-500 hover:text-gray-300 transition-colors"
        >
          <ThumbsUp size={12} />
          Útil
        </button>
      </footer>
    </motion.article>
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
      <div className="grid w-full max-w-[1080px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
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
