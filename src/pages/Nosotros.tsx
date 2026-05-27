import { motion } from "motion/react";
import {
  Linkedin,
  Building2,
  Sparkles,
  ArrowRight,
  Rocket,
  Bot,
  Megaphone,
  LayoutDashboard,
  Briefcase,
  Award,
} from "lucide-react";
import {
  SiAppstore,
  SiGoogleplay,
  SiMacos,
} from "@icons-pack/react-simple-icons";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import piero from "@/assets/branding/piero-portrait.jpg";
import heatDashboard from "@/assets/branding/heat-app-dashboard.jpg";

const STATS = [
  { value: "+15", suffix: "años", label: "En marketing digital" },
  { value: "+350", suffix: "empresas", label: "Confían en HEAT" },
  { value: "4", suffix: "países", label: "Chile · Miami · Perú · Argentina" },
  { value: "12", suffix: "personas", label: "Equipo en oficina" },
];

const PILLARS = [
  {
    icon: Megaphone,
    title: "Agencia de marketing digital",
    description:
      "Más de 15 años diseñando, lanzando y optimizando campañas de performance. Conocemos los cuellos de botella reales: leads que no responden, equipos saturados, ventas que se pierden por no contestar a tiempo.",
  },
  {
    icon: Bot,
    title: "Agentes de IA propios",
    description:
      "Construimos agentes que califican, conversan, agendan y venden 24/7 en WhatsApp, Instagram, web y voz. Conectados directo a tus campañas — el lead que entra por Meta o Google es atendido en segundos.",
  },
  {
    icon: LayoutDashboard,
    title: "Plataforma + CRM unificado",
    description:
      "Software HEAT con bandejas de entrada, pipeline de oportunidades, calendario, automatizaciones, reportería y app móvil. Todo lo que una agencia y un equipo comercial necesitan, en un solo lugar.",
  },
  {
    icon: Sparkles,
    title: "Páginas web creadas por IA",
    description:
      "Producimos landings y sitios diseñados por IA con calidad de estudio premium. Activamos tu funnel completo: ad → landing → agente → CRM → cierre.",
  },
];

const TIMELINE = [
  {
    year: "2010",
    title: "Primeros años en marketing digital",
    description:
      "Piero arranca en performance marketing manejando cuentas de Meta y Google para PyMEs latinoamericanas.",
  },
  {
    year: "2015",
    title: "Nace HEAT como agencia",
    description:
      "Especialización en campañas de adquisición y embudos de conversión. Clientes en e-commerce, retail, clínicas y servicios.",
  },
  {
    year: "2020",
    title: "Detectamos el cuello de botella",
    description:
      "Vemos que el problema no es traer leads — es responderlos. 70% de los leads se pierden por no contestar en los primeros 5 minutos.",
  },
  {
    year: "2023",
    title: "HEAT IA",
    description:
      "Sumamos Agentes de IA + CRM al stack. Pasamos de ser solo agencia a una plataforma que automatiza ventas y atención 24/7.",
  },
  {
    year: "2026",
    title: "+350 empresas en 4 países",
    description:
      "Equipo de 12 personas en oficina, clientes en Chile, Miami, Perú y Argentina. Seguimos siendo agencia — pero conectada con nuestro propio software.",
  },
];

const CLIENTS_REACH = [
  { city: "Santiago", country: "Chile", flag: "🇨🇱" },
  { city: "Miami", country: "EE.UU.", flag: "🇺🇸" },
  { city: "Lima", country: "Perú", flag: "🇵🇪" },
  { city: "Buenos Aires", country: "Argentina", flag: "🇦🇷" },
];

function PillarCard({
  pillar,
  index,
}: {
  pillar: (typeof PILLARS)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.08 }}
      className="group rounded-3xl border border-white/[0.06] bg-white/[0.02] p-7 hover:border-white/15 hover:bg-white/[0.04] hover:-translate-y-1 transition-all duration-500 ease-out hover:shadow-[0_16px_50px_-12px_rgba(99,102,241,0.22)]"
    >
      <div className="liquid-glass w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-500 ease-out group-hover:scale-110">
        <pillar.icon size={20} strokeWidth={2.2} className="text-white/90" />
      </div>
      <h3 className="text-foreground font-medium text-lg tracking-tight mb-2">
        {pillar.title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        {pillar.description}
      </p>
    </motion.div>
  );
}

export default function Nosotros() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative bg-[#0A0A0B] px-6 md:px-12 pt-12 md:pt-16 pb-24 overflow-hidden">
        {/* Background glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(circle at 20% 30%, rgba(99,102,241,0.18), transparent 50%), radial-gradient(circle at 80% 70%, rgba(168,85,247,0.12), transparent 50%)",
          }}
        />

        <div className="relative mx-auto max-w-[1180px] grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-14 items-center">
          {/* Copy column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-white/70 mb-5">
              👋 NOSOTROS · HEAT IA
            </span>
            <h1
              className="font-display font-medium text-white tracking-tight leading-[1.02] mb-5"
              style={{
                fontSize: "clamp(40px, 5.4vw, 72px)",
                letterSpacing: "-0.035em",
              }}
            >
              15 años resolviendo
              <br />
              los{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #7DD3FC, #A855F7, #FCD34D)",
                }}
              >
                cuellos de botella
              </span>
              <br />
              de los negocios.
            </h1>
            <p className="text-gray-300 text-base md:text-lg leading-7 max-w-[560px] mb-7">
              HEAT nació como agencia de marketing digital hace más de 15 años.
              Manejando campañas todos los días vimos el mismo patrón: traer
              leads es la parte fácil — responderlos a tiempo es donde se cae
              la venta. Por eso construimos nuestra propia plataforma de
              Agentes de IA + CRM. Hoy seguimos siendo agencia, pero ahora
              conectada con un software que cierra el ciclo completo.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://www.linkedin.com/in/pierosetti/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-[#0A66C2] hover:bg-[#0a5aab] text-white text-sm font-medium px-5 py-2.5 transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(10,102,194,0.6)]"
              >
                <Linkedin size={16} className="fill-white stroke-none" />
                Conoce a Piero Setti en LinkedIn
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
              <a
                href="/#demo"
                className="group relative inline-flex items-center justify-center rounded-full liquid-glass text-foreground text-sm font-medium px-5 py-2.5 overflow-hidden transition-all duration-500 ease-out hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.35)]"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-full bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"
                />
                <span className="relative z-10 transition-colors duration-500 ease-out group-hover:text-background">
                  Agendar demo
                </span>
              </a>
            </div>
          </motion.div>

          {/* Portrait column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-[460px]">
              {/* Gradient ring */}
              <div
                aria-hidden
                className="absolute -inset-1 rounded-[2rem] opacity-60 blur-2xl"
                style={{
                  background:
                    "linear-gradient(137deg, #6366f1 0%, #a855f7 50%, #fcd34d 100%)",
                }}
              />
              <div
                className="relative rounded-[2rem] overflow-hidden border border-white/10"
                style={{
                  background:
                    "linear-gradient(#0E0E14, #0E0E14) padding-box, linear-gradient(137deg, #6366f1, #a855f7, #fcd34d) border-box",
                  borderWidth: "1.5px",
                  borderStyle: "solid",
                  borderColor: "transparent",
                }}
              >
                <img
                  src={piero}
                  alt="Piero Setti — CEO y fundador de HEAT IA"
                  className="block w-full h-auto"
                />
              </div>
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-2xl border border-white/10 bg-[#0E0E14]/95 backdrop-blur-xl px-5 py-3 flex items-center gap-3 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.7)]"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.08]">
                  <Award size={16} className="text-yellow-300" />
                </div>
                <div className="text-left">
                  <p className="text-foreground text-sm font-medium leading-tight">
                    Piero Setti
                  </p>
                  <p className="text-gray-400 text-[11px] leading-tight">
                    CEO & Fundador · HEAT IA
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="bg-[#0A0A0B] px-6 md:px-12 py-12 border-t border-white/[0.05]">
        <div className="mx-auto max-w-[1180px] grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="text-center md:text-left"
            >
              <div className="flex items-baseline gap-1.5 justify-center md:justify-start">
                <span
                  className="font-display font-medium bg-clip-text text-transparent"
                  style={{
                    fontSize: "clamp(40px, 4vw, 56px)",
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                    backgroundImage:
                      "linear-gradient(to right, #7DD3FC, #A855F7)",
                  }}
                >
                  {s.value}
                </span>
                <span className="text-gray-400 text-sm font-medium">
                  {s.suffix}
                </span>
              </div>
              <p className="text-gray-500 text-xs mt-2 tracking-wide uppercase">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Founder story ── */}
      <section className="bg-[#0A0A0B] px-6 md:px-12 py-20 md:py-24">
        <div className="mx-auto max-w-[1080px]">
          <div className="text-center mb-12">
            <p className="text-xs font-medium tracking-[0.18em] text-white/50 mb-4">
              📖 LA HISTORIA
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight mb-4 leading-tight">
              De agencia tradicional a plataforma de IA
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-7 max-w-2xl mx-auto">
              No nos despertamos un día queriendo construir un software. Lo
              construimos porque, después de 15 años manejando campañas,
              entendimos exactamente qué falla.
            </p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div
              aria-hidden
              className="absolute left-[19px] md:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent md:-translate-x-1/2"
            />

            <ul className="space-y-10">
              {TIMELINE.map((t, i) => (
                <motion.li
                  key={t.year}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className={`relative md:grid md:grid-cols-2 md:gap-12 items-start ${
                    i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                  }`}
                >
                  {/* Dot */}
                  <div
                    aria-hidden
                    className="absolute left-0 top-1.5 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-[#0A0A0B] border border-white/15 flex items-center justify-center shadow-[0_0_0_4px_rgba(255,255,255,0.02)]"
                  >
                    <span className="block w-2.5 h-2.5 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500" />
                  </div>

                  <div className={`pl-14 md:pl-0 ${i % 2 === 0 ? "md:pr-14 md:text-right" : "md:pl-14"}`}>
                    <span
                      className="font-display font-medium bg-clip-text text-transparent"
                      style={{
                        fontSize: "clamp(32px, 3vw, 44px)",
                        letterSpacing: "-0.03em",
                        backgroundImage:
                          "linear-gradient(to right, #7DD3FC, #A855F7)",
                      }}
                    >
                      {t.year}
                    </span>
                    <h3 className="text-foreground font-medium text-lg tracking-tight mt-1">
                      {t.title}
                    </h3>
                  </div>
                  <div className={`pl-14 md:pl-0 mt-2 md:mt-0 ${i % 2 === 0 ? "md:pl-14" : "md:pr-14 md:text-right"}`}>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {t.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 4 Pillars ── */}
      <section className="bg-[#0A0A0B] px-6 md:px-12 py-20 md:py-24 border-t border-white/[0.05]">
        <div className="mx-auto max-w-[1180px]">
          <div className="text-center mb-12">
            <p className="text-xs font-medium tracking-[0.18em] text-white/50 mb-4">
              🛠️ QUÉ HACEMOS
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight mb-4 leading-tight">
              Agencia + plataforma. En un solo equipo.
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-7 max-w-2xl mx-auto">
              No vendemos software pelado. Diseñamos el funnel completo —
              campañas, agentes, CRM y landings — y lo dejamos andando.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PILLARS.map((p, i) => (
              <PillarCard key={p.title} pillar={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── App showcase ── */}
      <section
        className="relative bg-[#0A0A0B] px-6 md:px-12 py-20 md:py-24 border-t border-white/[0.05] overflow-hidden"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(circle at 75% 30%, rgba(99,102,241,0.18), transparent 55%)",
          }}
        />
        <div className="relative mx-auto max-w-[1180px] grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-xs font-medium tracking-[0.18em] text-white/50 mb-4">
              📱 LA APP DE HEAT
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight mb-4 leading-tight">
              Tu CRM y bandeja en el bolsillo
            </h2>
            <p className="text-gray-300 text-base md:text-lg leading-7 mb-6 max-w-[520px]">
              Aplicación nativa para iOS, Android y desktop. Bandejas de
              entrada, pipeline de oportunidades, calendario, reseñas, métricas
              en vivo y control de tu equipo desde cualquier lugar.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#"
                className="group inline-flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-black px-4 py-2.5 transition-all duration-400 ease-out hover:border-white/25 hover:bg-[#0f0f0f] hover:shadow-[0_8px_28px_-6px_rgba(10,132,255,0.35)]"
                title="App Store · disponible"
              >
                <SiAppstore size={24} color="#0A84FF" />
                <div className="leading-tight text-left">
                  <p className="text-[9px] font-medium tracking-[0.14em] text-white/60">
                    DESCARGA EN
                  </p>
                  <p className="text-[13px] font-semibold text-white/95 leading-tight">
                    App Store
                  </p>
                </div>
              </a>
              <a
                href="#"
                className="group inline-flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-black px-4 py-2.5 transition-all duration-400 ease-out hover:border-white/25 hover:bg-[#0f0f0f] hover:shadow-[0_8px_28px_-6px_rgba(255,255,255,0.18)]"
                title="App Desktop · disponible"
              >
                <SiMacos size={24} className="text-white/90" />
                <div className="leading-tight text-left">
                  <p className="text-[9px] font-medium tracking-[0.14em] text-white/60">
                    DESCARGA PARA
                  </p>
                  <p className="text-[13px] font-semibold text-white/95 leading-tight">
                    Mac · Desktop
                  </p>
                </div>
              </a>
              <a
                href="#"
                className="group inline-flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-black px-4 py-2.5 transition-all duration-400 ease-out hover:border-white/25 hover:bg-[#0f0f0f] hover:shadow-[0_8px_28px_-6px_rgba(52,168,83,0.3)]"
                title="Google Play · próximamente"
              >
                <SiGoogleplay size={24} className="text-[#34A853]" />
                <div className="leading-tight text-left">
                  <p className="text-[9px] font-medium tracking-[0.14em] text-white/60">
                    PRÓXIMAMENTE EN
                  </p>
                  <p className="text-[13px] font-semibold text-white/95 leading-tight">
                    Google Play
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_40px_120px_-20px_rgba(99,102,241,0.45)]">
              <img
                src={heatDashboard}
                alt="HEAT App — CRM dashboard"
                className="block w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Global reach ── */}
      <section className="bg-[#0A0A0B] px-6 md:px-12 py-20 md:py-24 border-t border-white/[0.05]">
        <div className="mx-auto max-w-[1180px] grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-medium tracking-[0.18em] text-white/50 mb-4">
              🌎 ALCANCE
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight mb-4 leading-tight">
              Clientes en 4 países, equipo en Santiago
            </h2>
            <p className="text-gray-300 text-base md:text-lg leading-7 max-w-[520px] mb-6">
              Operamos desde nuestra oficina en Santiago con un equipo de 12
              personas — comerciales, performance managers, devs y diseñadores
              — atendiendo clientes en Chile, Miami, Perú y Argentina.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-300">
              <Building2 size={14} className="text-white/60" />
              Oficina central · Santiago, Chile
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {CLIENTS_REACH.map((c, i) => (
              <motion.div
                key={c.city}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 hover:border-white/15 hover:bg-white/[0.04] transition-all duration-400"
              >
                <div className="text-3xl mb-3">{c.flag}</div>
                <p className="text-foreground font-medium text-sm">{c.city}</p>
                <p className="text-gray-500 text-xs mt-0.5">{c.country}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Founder spotlight ── */}
      <section className="bg-[#0A0A0B] px-6 md:px-12 py-20 md:py-24 border-t border-white/[0.05]">
        <div className="mx-auto max-w-[1080px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden p-10 md:p-14"
            style={{
              border: "1.5px solid transparent",
              background:
                "linear-gradient(#0E0E14, #0E0E14) padding-box, linear-gradient(137deg, #6366f1 0%, #a855f7 50%, #fcd34d 100%) border-box",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-center">
              <div className="mx-auto md:mx-0">
                <div className="relative w-[180px] h-[180px] md:w-[200px] md:h-[200px] rounded-full overflow-hidden border-2 border-white/10 shadow-[0_24px_60px_-20px_rgba(168,85,247,0.5)]">
                  <img
                    src={piero}
                    alt="Piero Setti"
                    className="block w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-semibold tracking-[0.18em] text-white/70 mb-4">
                  <Briefcase size={11} /> FUNDADOR · CEO
                </span>
                <h3 className="font-display text-3xl md:text-4xl font-medium text-white tracking-tight leading-tight mb-3">
                  Piero Setti
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-5">
                  CEO de HEAT IA y fundador de HEAT Agency. Más de 15 años en
                  marketing digital y performance, especializado en armar
                  funnels de adquisición y automatización para PyMEs y
                  empresas en LATAM y EEUU. Pregúntame por la historia de
                  HEAT, por cómo construimos los agentes, por lo que aprendimos
                  manejando cuentas en 4 países — me encanta hablar de esto.
                </p>
                <a
                  href="https://www.linkedin.com/in/pierosetti/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#0A66C2] hover:bg-[#0a5aab] text-white text-sm font-medium px-5 py-2.5 transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(10,102,194,0.6)]"
                >
                  <Linkedin size={16} className="fill-white stroke-none" />
                  Conectemos en LinkedIn
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative bg-[#0A0A0B] px-6 md:px-12 py-20 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(168,85,247,0.18), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-[860px] text-center">
          <Rocket
            size={32}
            className="mx-auto mb-5 text-white/70"
            strokeWidth={1.6}
          />
          <h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight mb-4 leading-tight">
            ¿Listo para que la IA trabaje por ti?
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-7 max-w-xl mx-auto mb-7">
            Agenda una demo de 20 minutos con nuestro equipo. Te mostramos cómo
            sería tu agente, tu CRM y tus campañas funcionando juntas.
          </p>
          <a
            href="/#demo"
            className="group relative inline-flex items-center justify-center rounded-full liquid-glass text-foreground text-sm font-medium px-6 py-3 overflow-hidden transition-all duration-500 ease-out hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.35)]"
          >
            <span
              aria-hidden
              className="absolute inset-0 rounded-full bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"
            />
            <span className="relative z-10 transition-colors duration-500 ease-out group-hover:text-background inline-flex items-center gap-2">
              Agendar demo
              <ArrowRight size={14} />
            </span>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
