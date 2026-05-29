import { motion } from "motion/react";
import { Play, ExternalLink, Sparkles } from "lucide-react";
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
  id: string | null;
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
  {
    id: null,
    title: "Próximo video",
    eyebrow: "Próximamente",
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
  { url: null, caption: "Próximo reel" },
  // ⬇ Agregar más reels acá. Piero los manda y los plugueamos.
];

/* ────────────────────────────────────────────────────────────── */
/* Helpers de embed                                                */
/* ────────────────────────────────────────────────────────────── */

function youtubeEmbedSrc(id: string): string {
  // rel=0 → no muestra videos relacionados al final
  // modestbranding=1 → reduce el logo YT en el player
  return `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`;
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
}: {
  video: (typeof YOUTUBE_VIDEOS)[number];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group relative rounded-2xl overflow-hidden bg-white/[0.03] border border-white/[0.08] transition-all duration-500 ease-out hover:border-white/[0.18] hover:bg-white/[0.05] hover:shadow-[0_20px_60px_-20px_rgba(239,68,68,0.25)]"
    >
      <div className="relative aspect-video bg-black">
        {video.id ? (
          <iframe
            src={youtubeEmbedSrc(video.id)}
            title={video.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <PlaceholderYouTube />
        )}
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
    </motion.article>
  );
}

function PlaceholderYouTube() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-red-500/15 via-black to-black">
      <div
        className="relative flex h-16 w-16 items-center justify-center rounded-full text-white mb-3"
        style={{
          background:
            "radial-gradient(circle at 30% 25%, #ff8a8a 0%, #ef4444 45%, #b91c1c 100%)",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.45), 0 0 0 1px rgba(239,68,68,0.4), 0 0 22px rgba(239,68,68,0.6)",
        }}
      >
        <Play size={26} className="ml-1 fill-white" />
      </div>
      <p className="text-xs text-white/60 max-w-[200px] leading-relaxed">
        Próximamente
      </p>
    </div>
  );
}

function ReelCard({
  reel,
  index,
}: {
  reel: (typeof INSTAGRAM_REELS)[number];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative rounded-2xl overflow-hidden bg-white border border-white/[0.08] transition-all duration-500 ease-out hover:shadow-[0_20px_60px_-20px_rgba(225,48,108,0.35)]"
    >
      <div
        className="relative bg-white"
        style={{ aspectRatio: "9 / 16" }}
      >
        {reel.url ? (
          <iframe
            src={instagramEmbedSrc(reel.url)}
            title={reel.caption ?? "Instagram Reel"}
            loading="lazy"
            scrolling="no"
            allowTransparency
            allow="encrypted-media; clipboard-write"
            className="absolute inset-0 w-full h-full border-0"
          />
        ) : (
          <PlaceholderReel />
        )}
      </div>
    </motion.article>
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
              HEAT LATAM · CONTENIDO
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {YOUTUBE_VIDEOS.map((video, i) => (
              <YouTubeCard key={i} video={video} index={i} />
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
              <ReelCard key={i} reel={reel} index={i} />
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
    </div>
  );
}
