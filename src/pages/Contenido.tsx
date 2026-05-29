import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, ExternalLink, Sparkles, X } from "lucide-react";
import { SiYoutube, SiInstagram } from "@icons-pack/react-simple-icons";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ────────────────────────────────────────────────────────────── */
/* Contenido — hub de contenido HEAT Latam.                       */
/* Sección 1: 5 videos YouTube embebidos (tutoriales/casos).      */
/* Sección 2: 6 Reels de Instagram embebidos.                     */
/*                                                                  */
/* ⚙ Para editar el contenido: solo cambia los IDs/URLs en las     */
/* constantes YOUTUBE_VIDEOS y INSTAGRAM_REELS de abajo. Listo.   */
/* ────────────────────────────────────────────────────────────── */

const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@heat-ia";
const INSTAGRAM_URL = "https://www.instagram.com/heat.ia";

/**
 * YouTube videos a mostrar.
 *   - id: el ID del video (los 11 chars después de v= o /shorts/)
 *     Ej: https://www.youtube.com/watch?v=dQw4w9WgXcQ → "dQw4w9WgXcQ"
 *   - title: lo que se ve debajo del video
 *   - eyebrow (opcional): tag pequeño arriba del title (Tutorial, Caso, etc.)
 */
const YOUTUBE_VIDEOS: {
  id: string;
  title: string;
  eyebrow?: string;
}[] = [
  {
    id: "4JwaPrC1C_A",
    title: "Conoce HEAT IA en acción",
    eyebrow: "Demo",
  },
  {
    id: "U47IrDqpnFs",
    title: "Cómo configurar tu primer agente",
    eyebrow: "Tutorial",
  },
  {
    id: "418qPg7k-Rc",
    title: "Automatización HEAT IA en vivo",
    eyebrow: "Caso real",
  },
  {
    id: "cvaue5n5sgs",
    title: "HEAT IA · Behind the scenes",
    eyebrow: "Behind the scenes",
  },
  // ⬇ Agregar más videos acá. Piero los manda y los plugueamos.
];

/**
 * Instagram Reels a mostrar.
 *   - url: URL completa del reel (debe ser PUBLIC). Acepta:
 *     https://www.instagram.com/reel/REEL_ID/
 *     https://www.instagram.com/reels/REEL_ID/
 *     https://www.instagram.com/p/POST_ID/
 *
 *  La función `instagramEmbedSrc()` lo convierte al formato embed.
 */
const INSTAGRAM_REELS: { url: string | null; caption?: string }[] = [
  { url: "https://www.instagram.com/reel/DXPRs0lp3yQ/" },
  { url: "https://www.instagram.com/reel/DXKj4eBjyP1/" },
  { url: "https://www.instagram.com/reel/DWhA6TAkXCt/" },
  { url: "https://www.instagram.com/reel/DWZIFiDETx7/" },
  { url: "https://www.instagram.com/reel/DWhhpRHD9mO/" },
  { url: "https://www.instagram.com/reel/DWC1Waopqk3/" },
  { url: "https://www.instagram.com/reel/DWE-yN4JxVS/" },
  { url: "https://www.instagram.com/reel/DWZhpwkpMDT/" },
  { url: "https://www.instagram.com/reel/DWHYe4ckRC4/" },
  // ⬇ Agregar más reels acá. Piero los manda y los plugueamos.
];

/* ────────────────────────────────────────────────────────────── */
/* Helpers de embed                                                */
/* ────────────────────────────────────────────────────────────── */

function youtubeEmbedSrc(id: string, autoplay = false): string {
  // rel=0 → no muestra videos relacionados al final
  // modestbranding=1 → reduce el logo YT en el player
  // autoplay=1 → empieza a reproducirse al abrir el modal
  const ap = autoplay ? "&autoplay=1" : "";
  return `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1${ap}`;
}

function youtubeThumbnailSrc(id: string): string {
  // maxresdefault es 1280×720, lo mejor disponible.
  // Si no existe (videos viejos), fallback a hqdefault vía onError.
  return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
}

function instagramEmbedSrc(url: string): string {
  // Extraer el ID del reel/post de la URL.
  const match = url.match(/\/(reel|reels|p)\/([^/?]+)/);
  const path = match ? `${match[1]}/${match[2]}` : "";
  return `https://www.instagram.com/${path}/embed`;
}

/* ────────────────────────────────────────────────────────────── */
/* Subcomponentes                                                  */
/* ────────────────────────────────────────────────────────────── */

function YouTubeCard({
  video,
  index,
  onPlay,
}: {
  video: (typeof YOUTUBE_VIDEOS)[number];
  index: number;
  onPlay: (id: string) => void;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group relative rounded-2xl overflow-hidden bg-white/[0.03] border border-white/[0.08] transition-all duration-500 ease-out hover:border-white/[0.18] hover:bg-white/[0.05] hover:shadow-[0_20px_60px_-20px_rgba(239,68,68,0.3)]"
    >
      <button
        type="button"
        onClick={() => onPlay(video.id)}
        aria-label={`Reproducir: ${video.title}`}
        className="block w-full text-left"
      >
        {/* Thumbnail · YouTube auto-generated preview */}
        <div className="relative aspect-video bg-black overflow-hidden">
          <img
            src={youtubeThumbnailSrc(video.id)}
            alt={video.title}
            loading="lazy"
            onError={(e) => {
              // Fallback si maxresdefault no existe (videos sin HD)
              const t = e.currentTarget;
              if (!t.dataset.fallback) {
                t.dataset.fallback = "1";
                t.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
              }
            }}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          />
          {/* Dark gradient overlay para legibilidad */}
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/0"
          />
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="relative flex h-16 w-16 items-center justify-center rounded-full text-white transition-transform duration-300 ease-out group-hover:scale-110"
              style={{
                background:
                  "radial-gradient(circle at 30% 25%, #ff8a8a 0%, #ef4444 45%, #b91c1c 100%)",
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.45), 0 0 0 1px rgba(239,68,68,0.4), 0 0 22px rgba(239,68,68,0.6), 0 8px 24px -4px rgba(0,0,0,0.5)",
              }}
            >
              <Play
                size={26}
                className="ml-1 fill-white drop-shadow-[0_1px_2px_rgba(80,0,0,0.5)]"
              />
            </div>
          </div>
        </div>
        <div className="px-5 py-4">
          {video.eyebrow && (
            <p className="text-[10px] font-semibold tracking-[0.18em] text-red-300/80 mb-1.5">
              {video.eyebrow.toUpperCase()}
            </p>
          )}
          <h3 className="text-[15px] font-medium text-foreground leading-snug">
            {video.title}
          </h3>
        </div>
      </button>
    </motion.article>
  );
}

/**
 * Modal de reproducción de video. Se abre al click en una YouTubeCard.
 * Backdrop dark blur · contenedor 16:9 grande · close button · ESC + click
 * fuera cierran · body scroll lock mientras está abierto.
 */
function YouTubeVideoModal({
  videoId,
  onClose,
}: {
  videoId: string;
  onClose: () => void;
}) {
  // Cerrar con ESC
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Lock body scroll
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8 bg-black/85 backdrop-blur-md"
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 12 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 12 }}
        transition={{ type: "spring", stiffness: 230, damping: 24 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl"
      >
        {/* Close button — afuera del video, arriba a la derecha */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar video"
          className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all hover:scale-105"
        >
          <X size={18} />
        </button>

        {/* Player container 16:9 con borde gradient sutil */}
        <div
          className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]"
          style={{
            boxShadow:
              "0 0 0 1px rgba(255,255,255,0.08), 0 30px 80px -20px rgba(0,0,0,0.85), 0 0 0 6px rgba(239,68,68,0.12)",
          }}
        >
          <iframe
            src={youtubeEmbedSrc(videoId, true)}
            title="HEAT IA video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

function ReelCard({
  reel,
  index,
  onPlay,
}: {
  reel: (typeof INSTAGRAM_REELS)[number];
  index: number;
  onPlay: (url: string) => void;
}) {
  const isInteractive = !!reel.url;

  const inner = (
    <div className="relative bg-white" style={{ aspectRatio: "9 / 14" }}>
      {reel.url ? (
        <>
          <iframe
            src={instagramEmbedSrc(reel.url)}
            title={reel.caption ?? "Instagram Reel"}
            loading="lazy"
            scrolling="no"
            allowTransparency
            allow="encrypted-media; clipboard-write"
            // pointer-events-none → los clicks pasan al <button> padre,
            // que es el que abre el modal. Sin esto el iframe captura
            // los clicks y nunca llegan al handler.
            className="absolute inset-0 w-full h-full border-0 pointer-events-none"
          />
          {/* Footer blanco custom · oculta el "Ver más" zurdo + barra
              de engagement que IG embed renderiza por defecto, y los
              reemplaza con un "Ver más en Instagram" centrado más limpio. */}
          <div
            aria-hidden
            className="absolute bottom-0 left-0 right-0 bg-white pointer-events-none flex items-center justify-center"
            style={{ height: "13%" }}
          >
            <span
              className="text-[12px] font-semibold tracking-wide"
              style={{ color: "#0095F6" }}
            >
              Ver más en Instagram
            </span>
          </div>
        </>
      ) : (
        <PlaceholderReel />
      )}

      {/* Hover overlay sutil + play hint solo si es interactive */}
      {isInteractive && (
        <>
          <span
            aria-hidden
            className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300"
          />
          <span
            aria-hidden
            className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100"
            style={{
              background:
                "linear-gradient(45deg, #f09433 0%, #dc2743 50%, #bc1888 100%)",
              boxShadow: "0 6px 18px -4px rgba(225,48,108,0.5)",
            }}
          >
            <Play size={14} className="ml-0.5 fill-white" />
          </span>
        </>
      )}
    </div>
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative rounded-2xl overflow-hidden bg-white border border-white/[0.08] transition-all duration-500 ease-out hover:shadow-[0_20px_60px_-20px_rgba(225,48,108,0.4)]"
    >
      {isInteractive ? (
        <button
          type="button"
          onClick={() => onPlay(reel.url!)}
          aria-label={`Ver reel${reel.caption ? `: ${reel.caption}` : ""}`}
          className="block w-full text-left"
        >
          {inner}
        </button>
      ) : (
        inner
      )}
    </motion.article>
  );
}

/**
 * Modal de reproducción de Reel Instagram. Tamaño phone (9:16) centrado.
 * Backdrop blur · close button · ESC + click fuera cierran · body scroll
 * lock. El usuario puede subir el volumen / interactuar con el embed.
 */
function ReelModal({
  reelUrl,
  onClose,
}: {
  reelUrl: string;
  onClose: () => void;
}) {
  // ESC para cerrar
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Body scroll lock
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6 bg-black/85 backdrop-blur-md"
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 12 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 12 }}
        transition={{ type: "spring", stiffness: 230, damping: 24 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[420px]"
      >
        {/* Close button — afuera del reel, arriba a la derecha */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar reel"
          className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all hover:scale-105"
        >
          <X size={18} />
        </button>

        {/* Contenedor del reel · phone-shape 9:14 con halo gradient IG */}
        <div
          className="relative w-full rounded-2xl overflow-hidden bg-white"
          style={{
            aspectRatio: "9 / 14",
            boxShadow:
              "0 0 0 1px rgba(255,255,255,0.08), 0 30px 80px -20px rgba(0,0,0,0.85), 0 0 0 6px rgba(225,48,108,0.12)",
          }}
        >
          <iframe
            src={instagramEmbedSrc(reelUrl)}
            title="Instagram Reel"
            allowTransparency
            allow="encrypted-media; clipboard-write; autoplay"
            className="absolute inset-0 w-full h-full border-0"
          />
          {/* Footer blanco custom · "Ver más en Instagram" centrado y
              clickable (a diferencia de las cards, en el modal el link
              SÍ funciona y abre el reel en IG). */}
          <div
            className="absolute bottom-0 left-0 right-0 bg-white flex items-center justify-center"
            style={{ height: "13%" }}
          >
            <a
              href={reelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-semibold tracking-wide hover:underline"
              style={{ color: "#0095F6" }}
            >
              Ver más en Instagram
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function PlaceholderReel() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5 bg-gradient-to-br from-fuchsia-50 via-rose-50 to-amber-50">
      <div
        className="flex h-14 w-14 items-center justify-center rounded-2xl text-white mb-3"
        style={{
          background:
            "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
          boxShadow:
            "0 6px 20px -4px rgba(225,48,108,0.45)",
        }}
      >
        <SiInstagram size={26} color="currentColor" />
      </div>
      <p className="text-[11px] font-medium text-gray-600 max-w-[160px] leading-relaxed">
        Próximamente
      </p>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────── */
/* PAGE                                                             */
/* ────────────────────────────────────────────────────────────── */

export default function Contenido() {
  const [openVideoId, setOpenVideoId] = useState<string | null>(null);
  const [openReelUrl, setOpenReelUrl] = useState<string | null>(null);

  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative bg-background px-6 md:px-12 pt-10 md:pt-16 pb-12 md:pb-16 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(60% 80% at 25% 0%, rgba(239,68,68,0.18), transparent 60%), radial-gradient(60% 80% at 75% 0%, rgba(225,48,108,0.18), transparent 60%), radial-gradient(40% 60% at 50% 100%, rgba(252,211,77,0.08), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-[1180px] text-center">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm px-3 py-1 text-[11px] font-semibold tracking-[0.18em] mb-5"
          >
            <Sparkles size={11} className="text-amber-300" />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #FCA5A5 0%, #F0ABFC 50%, #7DD3FC 100%)",
              }}
            >
              HEAT LIFE · DETRÁS DE LA IA
            </span>
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-medium text-foreground tracking-tight leading-[1.05] mb-4"
            style={{
              fontSize: "clamp(34px, 4.6vw, 60px)",
              letterSpacing: "-0.025em",
            }}
          >
            Aprende cómo otros automatizan con{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #ef4444 0%, #f0abfc 50%, #fcd34d 100%)",
              }}
            >
              HEAT IA
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-gray-400 leading-7 max-w-2xl mx-auto mb-8"
          >
            Tutoriales, casos reales y behind the scenes de cómo nuestros
            clientes en LATAM y EEUU automatizan sus ventas con IA + CRM.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <a
              href={YOUTUBE_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 rounded-full text-white text-sm font-semibold px-6 py-3 overflow-hidden transition-all duration-300 ease-out hover:scale-[1.02]"
              style={{
                background:
                  "linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)",
                boxShadow:
                  "0 0 0 1px rgba(239,68,68,0.35), 0 10px 30px -10px rgba(239,68,68,0.6)",
              }}
            >
              <SiYoutube size={18} color="currentColor" />
              Suscríbete en YouTube
              <ExternalLink
                size={14}
                className="opacity-70 group-hover:translate-x-0.5 transition-transform"
              />
            </a>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 rounded-full text-white text-sm font-semibold px-6 py-3 overflow-hidden transition-all duration-300 ease-out hover:scale-[1.02]"
              style={{
                background:
                  "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                boxShadow:
                  "0 0 0 1px rgba(225,48,108,0.35), 0 10px 30px -10px rgba(225,48,108,0.6)",
              }}
            >
              <SiInstagram size={18} color="currentColor" />
              Síguenos en Instagram
              <ExternalLink
                size={14}
                className="opacity-70 group-hover:translate-x-0.5 transition-transform"
              />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Sección YouTube ── */}
      <section className="relative px-6 md:px-12 py-16 md:py-20 bg-background">
        <div className="mx-auto max-w-[1180px]">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.22em] text-red-300/80 mb-2">
                YOUTUBE · @HEAT-IA
              </p>
              <h2 className="font-display text-foreground tracking-tight leading-tight text-3xl md:text-4xl">
                Tutoriales y casos reales
              </h2>
              <p className="text-gray-400 mt-3 max-w-xl text-[15px] leading-7">
                Aprende cómo configurar agentes, integrar CRM y lanzar
                campañas paso a paso.
              </p>
            </div>
            <a
              href={YOUTUBE_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-foreground/75 hover:text-foreground transition-colors group"
            >
              Ver todos en YouTube
              <ExternalLink
                size={14}
                className="opacity-70 group-hover:translate-x-0.5 transition-transform"
              />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 lg:gap-6 max-w-5xl mx-auto">
            {YOUTUBE_VIDEOS.map((video, i) => (
              <YouTubeCard
                key={i}
                video={video}
                index={i}
                onPlay={setOpenVideoId}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Sección Instagram Reels ── */}
      <section className="relative px-6 md:px-12 py-16 md:py-20 bg-background border-t border-white/[0.05]">
        <div className="mx-auto max-w-[1180px]">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <p
                className="text-[11px] font-semibold tracking-[0.22em] mb-2 bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #f09433 0%, #dc2743 50%, #bc1888 100%)",
                }}
              >
                INSTAGRAM · @HEAT.IA
              </p>
              <h2 className="font-display text-foreground tracking-tight leading-tight text-3xl md:text-4xl">
                Reels: la IA en acción
              </h2>
              <p className="text-gray-400 mt-3 max-w-xl text-[15px] leading-7">
                Bites cortos de agentes conversando, automatizaciones que
                cierran ventas y momentos del equipo.
              </p>
            </div>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-foreground/75 hover:text-foreground transition-colors group"
            >
              Seguir en Instagram
              <ExternalLink
                size={14}
                className="opacity-70 group-hover:translate-x-0.5 transition-transform"
              />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-5">
            {INSTAGRAM_REELS.map((reel, i) => (
              <ReelCard
                key={i}
                reel={reel}
                index={i}
                onPlay={setOpenReelUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Cierre CTA ── */}
      <section className="relative px-6 md:px-12 py-16 md:py-20 bg-background overflow-hidden border-t border-white/[0.05]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(50% 70% at 50% 50%, rgba(239,68,68,0.18), transparent 65%)",
          }}
        />
        <div className="relative mx-auto max-w-[800px] text-center">
          <h2 className="font-display text-foreground tracking-tight leading-tight text-3xl md:text-4xl mb-3">
            ¿Quieres aparecer en nuestro contenido?
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-7 mb-7">
            Cuéntanos tu caso. Si encajamos, te entrevistamos en YouTube y
            tu marca llega a +350 negocios en LATAM y EEUU.
          </p>
          <a
            href="mailto:hola@heatlatam.com?subject=Quiero%20aparecer%20en%20HEAT%20Latam"
            className="group relative inline-flex items-center justify-center rounded-full liquid-glass text-foreground text-sm font-medium px-6 py-3 overflow-hidden transition-all duration-500 ease-out hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.35)]"
          >
            <span
              aria-hidden
              className="absolute inset-0 rounded-full bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"
            />
            <span className="relative z-10 transition-colors duration-500 ease-out group-hover:text-background">
              Postula tu caso
            </span>
          </a>
        </div>
      </section>

      <Footer />

      {/* Modal de video YouTube — solo cuando hay uno abierto */}
      <AnimatePresence>
        {openVideoId && (
          <YouTubeVideoModal
            videoId={openVideoId}
            onClose={() => setOpenVideoId(null)}
          />
        )}
      </AnimatePresence>

      {/* Modal de Reel Instagram — solo cuando hay uno abierto */}
      <AnimatePresence>
        {openReelUrl && (
          <ReelModal
            reelUrl={openReelUrl}
            onClose={() => setOpenReelUrl(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
