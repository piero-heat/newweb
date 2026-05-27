import { motion } from "motion/react";
import { Star, ExternalLink } from "lucide-react";
import { SiGoogle } from "@icons-pack/react-simple-icons";

const MAPS_URL =
  "https://www.google.com/maps/place/HEAT+IA/@-33.3992303,-70.5713581,17z/data=!4m6!3m5!1s0x9662cb95b469932b:0x81ea6fe51290427d!8m2!3d-33.3992303!4d-70.5713581!16s%2Fg%2F11j2wm8x0x";

type Review = {
  name: string;
  meta: string;
  date: string;
  text?: string;
  initial: string;
  bg: string; // tailwind bg class
};

const REVIEWS: Review[] = [
  {
    name: "Anaís Burgos",
    meta: "6 opiniones · 2 fotos",
    date: "Hace 9 semanas",
    text: "Excelente atención, la plataforma increíble! Me ha ayudado mucho con mi negocio.",
    initial: "A",
    bg: "from-emerald-500 to-teal-500",
  },
  {
    name: "Consultoría Rivera Ríos",
    meta: "2 opiniones",
    date: "Hace 9 semanas",
    text: "Me sorprendió el nivel de respuesta de los agentes — son lo que quería, y muy cercanos con mis clientes. Hasta el momento, perfecto!",
    initial: "C",
    bg: "from-pink-500 to-rose-500",
  },
  {
    name: "Luis Rojas Álvarez",
    meta: "3 opiniones",
    date: "Hace 9 semanas",
    text: "Excelente herramienta. Me ha ayudado muchísimo en mi pyme de lavado de autos, ya que puedo calificar a mis clientes y fidelizarlos con IA.",
    initial: "L",
    bg: "from-indigo-500 to-blue-500",
  },
  {
    name: "Magdy Picón",
    meta: "2 opiniones",
    date: "Hace 9 semanas",
    text: "Excelente atención. Muy buen equipo. Me gustó mucho esta herramienta para mi trabajo.",
    initial: "M",
    bg: "from-amber-500 to-orange-500",
  },
  {
    name: "Leily Araujo",
    meta: "Reseña reciente",
    date: "Hace 9 semanas",
    text: undefined, // sin texto
    initial: "L",
    bg: "from-slate-500 to-slate-600",
  },
];

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

function ReviewCard({ review, index }: { review: Review; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.06 }}
      className="group relative flex h-full flex-col rounded-3xl border border-white/5 bg-white/[0.02] p-7 transition-all duration-500 ease-out hover:border-white/15 hover:bg-white/[0.04] hover:-translate-y-1 hover:shadow-[0_16px_50px_-12px_rgba(168,85,247,0.22)]"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3 min-w-0">
          <div
            className={`shrink-0 w-10 h-10 rounded-full bg-gradient-to-br ${review.bg} flex items-center justify-center text-white font-semibold text-sm shadow-[0_0_0_2px_rgba(255,255,255,0.05)]`}
          >
            {review.initial}
          </div>
          <div className="min-w-0">
            <p className="text-foreground text-sm font-medium truncate">
              {review.name}
            </p>
            <p className="text-gray-500 text-[11px] truncate">{review.meta}</p>
          </div>
        </div>
        <SiGoogle
          size={16}
          className="shrink-0 text-white/30 group-hover:text-white/50 transition-colors"
        />
      </div>

      <div className="flex items-center gap-3 mb-3">
        <Stars />
        <span className="text-gray-500 text-[11px]">{review.date}</span>
      </div>

      {review.text ? (
        <p className="text-gray-300 text-[14px] leading-relaxed flex-1">
          "{review.text}"
        </p>
      ) : (
        <p className="text-gray-500 text-[13px] italic flex-1">
          ★★★★★ — Calificación de 5 estrellas
        </p>
      )}

      <a
        href={MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 pt-4 border-t border-white/5 inline-flex items-center gap-1.5 text-[11px] text-gray-500 hover:text-foreground transition-colors"
      >
        Verificada en Google
        <ExternalLink size={11} />
      </a>
    </motion.div>
  );
}

export default function GoogleReviewsSection() {
  return (
    <section className="bg-[#0A0A0B] flex flex-col items-center px-6 md:px-12 py-20 md:py-24">
      <div className="w-full max-w-[1080px] mb-12 text-center">
        <p className="text-xs font-medium tracking-[0.18em] text-white/50 mb-4">
          ⭐ RESEÑAS REALES EN GOOGLE
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight mb-4 leading-tight">
          Lo que dicen nuestros clientes
        </h2>
        <p className="text-gray-400 text-base md:text-lg leading-7 max-w-xl mx-auto">
          Reseñas verificadas en Google Business — sin filtros, sin
          maquillaje. Click en cualquier reseña para verla en tu Maps.
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
        className="group mb-12 inline-flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-400"
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
        <ExternalLink
          size={16}
          className="text-gray-500 group-hover:text-foreground transition-colors"
        />
      </motion.a>

      <div className="grid w-full max-w-[1080px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {REVIEWS.map((r, i) => (
          <ReviewCard key={r.name} review={r} index={i} />
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
        className="mt-10 inline-flex items-center gap-2 text-sm text-gray-300 hover:text-foreground transition-colors group"
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
