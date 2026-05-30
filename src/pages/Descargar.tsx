import { motion } from "motion/react";
import { Download, Smartphone, Monitor, Sparkles, Check } from "lucide-react";
import {
  SiApple,
  SiLinux,
  SiAppstore,
  SiGoogleplay,
} from "@icons-pack/react-simple-icons";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ────────────────────────────────────────────────────────────── */
/* Descargar — hub de descargas de la app HEAT.                   */
/* Móvil (App Store + Google Play) + Escritorio (macOS/Win/Linux). */
/*                                                                  */
/* ⚙ Para editar: cambia las URLs en MOBILE_APPS y DESKTOP_APPS.   */
/* Las de escritorio ya están con los links reales de GCS.         */
/* Las móviles: pega los URLs de App Store / Google Play.          */
/* ────────────────────────────────────────────────────────────── */

const HEAT_GRADIENT =
  "linear-gradient(90deg, #7DD3FC 0%, #A855F7 50%, #FCD34D 100%)";

// ── App móvil (stores) ── · null → muestra "próximamente"
const MOBILE_APPS: {
  store: "appstore" | "googleplay";
  name: string;
  meta: string;
  url: string | null;
}[] = [
  {
    store: "appstore",
    name: "App Store",
    meta: "iPhone · iPad",
    url: null, // ⬅ pega aquí el URL de App Store
  },
  {
    store: "googleplay",
    name: "Google Play",
    meta: "Android",
    url: null, // ⬅ pega aquí el URL de Google Play
  },
];

// ── App de escritorio (descarga directa) ── · links reales
const DESKTOP_APPS: {
  os: "mac" | "windows" | "linux";
  name: string;
  meta: string;
  url: string;
}[] = [
  {
    os: "mac",
    name: "macOS",
    meta: ".dmg · universal (Intel + Apple Silicon)",
    url: "https://storage.googleapis.com/revex-desktop-app-production/branded-apps/WeOJUQPjssWBIlyaGmyy/releases/0.1.10/mac/Heat%20Latam-0.1.10-universal.dmg",
  },
  {
    os: "windows",
    name: "Windows",
    meta: ".exe · instalador",
    url: "https://storage.googleapis.com/revex-desktop-app-production/branded-apps/WeOJUQPjssWBIlyaGmyy/releases/0.1.10/win/Heat%20Latam%20Setup%200.1.10.exe",
  },
  {
    os: "linux",
    name: "Linux",
    meta: ".deb · amd64",
    url: "https://storage.googleapis.com/revex-desktop-app-production/branded-apps/WeOJUQPjssWBIlyaGmyy/releases/0.1.8/linux/heat-latam_0.1.8_amd64.deb",
  },
];

/* Icono de Windows (simple-icons quitó el logo de Windows por marca,
   usamos un glyph propio con los 4 paneles). */
function WindowsGlyph({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 5.1 10.4 4v7.5H3V5.1zM3 12.5h7.4V20L3 18.9v-6.4zM11.3 3.9 21 2.5v9H11.3V3.9zM11.3 12.5H21V21.5l-9.7-1.4v-7.6z" />
    </svg>
  );
}

function osIcon(os: "mac" | "windows" | "linux") {
  if (os === "mac") return <SiApple size={26} color="currentColor" />;
  if (os === "windows") return <WindowsGlyph size={24} />;
  return <SiLinux size={26} color="currentColor" />;
}

function DesktopCard({
  app,
  index,
}: {
  app: (typeof DESKTOP_APPS)[number];
  index: number;
}) {
  return (
    <motion.a
      href={app.url}
      download
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="group relative flex flex-col items-center text-center rounded-2xl border border-white/[0.08] bg-white/[0.02] px-6 py-7 transition-all duration-400 ease-out hover:border-white/[0.2] hover:bg-white/[0.04] hover:-translate-y-1 hover:shadow-[0_24px_60px_-24px_rgba(168,85,247,0.35)]"
    >
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.05] text-white/85 group-hover:text-white transition-colors">
        {osIcon(app.os)}
      </div>
      <p className="text-foreground text-lg font-semibold mb-1">{app.name}</p>
      <p className="text-gray-500 text-[12px] mb-5">{app.meta}</p>
      <span className="inline-flex items-center gap-2 rounded-full bg-foreground text-background text-sm font-medium px-5 py-2.5 transition-transform group-hover:scale-[1.03]">
        <Download size={15} />
        Descargar
      </span>
    </motion.a>
  );
}

function MobileCard({
  app,
  index,
}: {
  app: (typeof MOBILE_APPS)[number];
  index: number;
}) {
  const Icon = app.store === "appstore" ? SiAppstore : SiGoogleplay;
  const color = app.store === "appstore" ? "#0A84FF" : "#34A853";
  const isLive = !!app.url;

  const inner = (
    <>
      <span className="shrink-0" style={{ color }}>
        <Icon size={26} color="currentColor" />
      </span>
      <div className="leading-tight text-left">
        <p className="text-[9px] font-medium tracking-[0.14em] text-white/55">
          {isLive ? "DESCARGA EN" : "PRÓXIMAMENTE EN"}
        </p>
        <p className="text-[15px] font-semibold text-white/90">{app.name}</p>
        <p className="text-[11px] text-gray-500">{app.meta}</p>
      </div>
    </>
  );

  const cls =
    "group inline-flex items-center gap-3.5 rounded-2xl border border-white/[0.08] bg-white/[0.02] px-5 py-4 min-w-[230px] transition-all duration-400 ease-out";

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
    >
      {isLive ? (
        <a
          href={app.url!}
          target="_blank"
          rel="noopener noreferrer"
          className={`${cls} hover:border-white/[0.2] hover:bg-white/[0.04] hover:-translate-y-0.5`}
        >
          {inner}
        </a>
      ) : (
        <div className={`${cls} opacity-60 cursor-default`}>{inner}</div>
      )}
    </motion.div>
  );
}

export default function Descargar() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative bg-background px-6 md:px-12 pt-10 md:pt-16 pb-10 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(60% 80% at 50% 0%, rgba(168,85,247,0.20), transparent 60%), radial-gradient(50% 60% at 50% 0%, rgba(125,211,252,0.14), transparent 65%)",
          }}
        />
        <div className="relative mx-auto max-w-[900px] text-center">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm px-3 py-1 text-[11px] font-semibold tracking-[0.18em] mb-5"
          >
            <Sparkles size={11} className="text-amber-300" />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: HEAT_GRADIENT }}
            >
              DESCARGA HEAT
            </span>
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-medium text-foreground tracking-tight leading-[1.05] mb-4"
            style={{ fontSize: "clamp(34px, 4.6vw, 56px)", letterSpacing: "-0.025em" }}
          >
            Lleva HEAT contigo,{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: HEAT_GRADIENT }}
            >
              donde estés
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-gray-400 leading-7 max-w-2xl mx-auto"
          >
            Tu CRM, tus conversaciones y tu agente de IA en el celular y en el
            escritorio. Responde, agenda y vende desde cualquier dispositivo.
          </motion.p>
        </div>
      </section>

      {/* ── App móvil ── */}
      <section className="relative px-6 md:px-12 py-10 md:py-12 bg-background">
        <div className="mx-auto max-w-[900px]">
          <div className="flex items-center justify-center gap-2 mb-6 text-white/50">
            <Smartphone size={15} />
            <p className="text-[11px] font-semibold tracking-[0.22em]">
              APP MÓVIL
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {MOBILE_APPS.map((app, i) => (
              <MobileCard key={app.store} app={app} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── App de escritorio ── */}
      <section className="relative px-6 md:px-12 py-10 md:py-14 bg-background border-t border-white/[0.04]">
        <div className="mx-auto max-w-[900px]">
          <div className="flex items-center justify-center gap-2 mb-8 text-white/50">
            <Monitor size={15} />
            <p className="text-[11px] font-semibold tracking-[0.22em]">
              APP DE ESCRITORIO
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
            {DESKTOP_APPS.map((app, i) => (
              <DesktopCard key={app.os} app={app} index={i} />
            ))}
          </div>
          <p className="mt-6 text-center text-[12px] text-gray-500">
            Descarga directa · sin tiendas. Si tu navegador pregunta, acepta el
            archivo — viene firmado por HEAT.
          </p>
        </div>
      </section>

      {/* ── Reassurance ── */}
      <section className="relative px-6 md:px-12 py-12 md:py-16 bg-background border-t border-white/[0.04]">
        <div className="mx-auto max-w-[760px]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            {[
              "Sincroniza con tu CRM en la nube",
              "Notificaciones en tiempo real",
              "Mismo login que el Portal web",
            ].map((t) => (
              <div
                key={t}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-4 py-5"
              >
                <Check
                  size={18}
                  className="mx-auto mb-2 text-emerald-400"
                  strokeWidth={2.5}
                />
                <p className="text-gray-300 text-[13px] leading-6">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
