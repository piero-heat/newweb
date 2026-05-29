import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  MapPin,
  Sparkles,
  Flame,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ROLES, WHY_HEAT } from "@/data/careers";

/* ────────────────────────────────────────────────────────────── */
/* Careers · index page                                            */
/* ────────────────────────────────────────────────────────────── */

const HEAT_GRADIENT =
  "linear-gradient(90deg, #ef4444 0%, #f0abfc 50%, #fcd34d 100%)";

const CULTURE_GRADIENT =
  "linear-gradient(90deg, #7DD3FC 0%, #C084FC 50%, #FCD34D 100%)";

function RoleCard({
  role,
  index,
}: {
  role: (typeof ROLES)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link
        to={`/careers/${role.slug}`}
        className="group relative block rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm p-6 md:p-7 transition-all duration-500 ease-out hover:border-white/[0.18] hover:bg-white/[0.04] hover:shadow-[0_20px_60px_-20px_rgba(168,85,247,0.3)]"
      >
        <div className="flex flex-col gap-4 md:gap-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p
                className="text-[10px] font-semibold tracking-[0.2em] mb-2 bg-clip-text text-transparent"
                style={{ backgroundImage: CULTURE_GRADIENT }}
              >
                {role.eyebrow}
              </p>
              <h3 className="text-2xl md:text-3xl font-display font-medium text-foreground tracking-tight leading-tight">
                {role.title}
              </h3>
            </div>
            <span
              aria-hidden
              className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/60 group-hover:text-white group-hover:border-white/25 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-400"
            >
              <ArrowUpRight size={16} />
            </span>
          </div>

          <p className="text-gray-400 text-[15px] leading-7">{role.intro}</p>

          <div className="flex flex-wrap items-center gap-2 pt-1">
            <Chip icon={<Briefcase size={11} />}>{role.department}</Chip>
            <Chip icon={<MapPin size={11} />}>{role.location}</Chip>
            <Chip>{role.type}</Chip>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function Chip({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-gray-300">
      {icon && <span className="text-white/50">{icon}</span>}
      {children}
    </span>
  );
}

function WhyCard({
  pillar,
  index,
}: {
  pillar: (typeof WHY_HEAT)[number];
  index: number;
}) {
  const Icon = pillar.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-400 ease-out hover:border-white/[0.14] hover:bg-white/[0.04]"
    >
      <div
        className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl text-white"
        style={{
          background:
            "linear-gradient(135deg, rgba(239,68,68,0.18), rgba(168,85,247,0.18) 60%, rgba(252,211,77,0.18))",
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)",
        }}
      >
        <Icon size={18} />
      </div>
      <h3 className="text-foreground text-[17px] font-semibold mb-2 leading-snug">
        {pillar.title}
      </h3>
      <p className="text-gray-400 text-sm leading-7">{pillar.description}</p>
    </motion.div>
  );
}

export default function Careers() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative bg-background px-6 md:px-12 pt-10 md:pt-16 pb-16 md:pb-20 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(60% 80% at 25% 0%, rgba(168,85,247,0.22), transparent 60%), radial-gradient(60% 80% at 75% 0%, rgba(125,211,252,0.18), transparent 60%), radial-gradient(40% 60% at 50% 100%, rgba(252,211,77,0.10), transparent 70%)",
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
              style={{ backgroundImage: CULTURE_GRADIENT }}
            >
              CAREERS · ÚNETE A HEAT
            </span>
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-medium text-foreground tracking-tight leading-[1.04] mb-4"
            style={{
              fontSize: "clamp(36px, 5vw, 64px)",
              letterSpacing: "-0.025em",
            }}
          >
            Construye el futuro de la{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: HEAT_GRADIENT }}
            >
              IA en LATAM
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-gray-400 leading-7 max-w-2xl mx-auto mb-8"
          >
            HEAT está cambiando cómo +350 negocios en LATAM y EEUU venden con
            IA. Si quieres impactar a millones de usuarios, construir lo que
            recién está siendo posible, y crecer con un equipo top — este es
            tu lugar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <a
              href="#open-roles"
              className="group relative inline-flex items-center gap-2 rounded-full text-background text-sm font-semibold px-6 py-3 overflow-hidden bg-foreground transition-all duration-300 ease-out hover:scale-[1.02]"
            >
              Ver cargos abiertos
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#why-heat"
              className="group relative inline-flex items-center gap-2 rounded-full liquid-glass text-foreground text-sm font-medium px-6 py-3 overflow-hidden transition-all duration-500 ease-out"
            >
              ¿Por qué HEAT?
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Why HEAT ── */}
      <section
        id="why-heat"
        className="relative px-6 md:px-12 py-16 md:py-20 bg-background border-t border-white/[0.04]"
      >
        <div className="mx-auto max-w-[1180px]">
          <div className="text-center mb-10 md:mb-14">
            <p
              className="text-[11px] font-semibold tracking-[0.22em] mb-3 bg-clip-text text-transparent inline-block"
              style={{ backgroundImage: HEAT_GRADIENT }}
            >
              POR QUÉ HEAT
            </p>
            <h2 className="font-display text-foreground tracking-tight text-3xl md:text-4xl mb-3">
              Las razones reales por las que estamos creciendo
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-[15px] leading-7">
              No es una página de careers más. Es un equipo construyendo el
              futuro del trabajo con IA. Esto es lo que ofrecemos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {WHY_HEAT.map((p, i) => (
              <WhyCard key={p.title} pillar={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Open positions ── */}
      <section
        id="open-roles"
        className="relative px-6 md:px-12 py-16 md:py-20 bg-background border-t border-white/[0.04] scroll-mt-8"
      >
        <div className="mx-auto max-w-[1080px]">
          <div className="mb-10">
            <p
              className="text-[11px] font-semibold tracking-[0.22em] mb-3 bg-clip-text text-transparent inline-block"
              style={{ backgroundImage: CULTURE_GRADIENT }}
            >
              CARGOS ABIERTOS · {ROLES.length}
            </p>
            <h2 className="font-display text-foreground tracking-tight text-3xl md:text-4xl">
              ¿Qué estás buscando?
            </h2>
            <p className="text-gray-400 mt-3 max-w-xl text-[15px] leading-7">
              3 posiciones abiertas en Santiago, Chile · híbrido en Spot
              Kennedy. Si no ves tu rol pero crees que aportas, escríbenos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {ROLES.map((r, i) => (
              <RoleCard key={r.slug} role={r} index={i} />
            ))}
          </div>

          {/* Spontaneous application */}
          <div className="mt-10 rounded-2xl border border-dashed border-white/10 bg-white/[0.01] p-6 md:p-7 text-center">
            <p className="text-gray-400 text-sm leading-7">
              ¿No ves tu rol pero crees que puedes aportar a HEAT? Cuéntanos.
              <br className="hidden md:block" />
              Siempre estamos abiertos a perfiles top.
            </p>
            <a
              href="mailto:careers@heatlatam.com?subject=Aplicaci%C3%B3n%20espont%C3%A1nea%20HEAT"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:opacity-80 transition-opacity"
            >
              careers@heatlatam.com
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ── Office Spot Kennedy ── */}
      <section className="relative px-6 md:px-12 py-16 md:py-20 bg-background border-t border-white/[0.04] overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(60% 80% at 50% 0%, rgba(239,68,68,0.12), transparent 65%)",
          }}
        />
        <div className="relative mx-auto max-w-[1080px] text-center">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-white/50 mb-3">
            NUESTRA OFICINA
          </p>
          <h2 className="font-display text-foreground tracking-tight text-3xl md:text-4xl mb-4">
            Te esperamos en Spot Kennedy
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-[15px] leading-7 mb-8">
            La sede principal de HEAT en Santiago de Chile. Coworking premium
            en Avenida Kennedy, sector Vitacura. Día a día con el equipo,
            café, salas de reunión, y la posibilidad de remoto cuando lo
            necesitas. Híbrido inteligente, no presencial forzado.
          </p>
          <a
            href="https://maps.google.com/?q=Spot+Kennedy+Santiago+Chile"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-foreground transition-colors group"
          >
            <MapPin size={14} />
            Spot Kennedy · Vitacura, Santiago
            <ArrowUpRight
              size={14}
              className="opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="relative px-6 md:px-12 py-16 md:py-20 bg-background border-t border-white/[0.04]">
        <div className="mx-auto max-w-[760px] text-center">
          <Flame
            size={32}
            className="mx-auto mb-5 text-amber-300/80"
            strokeWidth={1.5}
          />
          <h2 className="font-display text-foreground tracking-tight text-3xl md:text-4xl mb-4">
            ¿Listo para construir HEAT con nosotros?
          </h2>
          <p className="text-gray-400 text-[15px] leading-7 mb-7">
            Si llegaste hasta acá, probablemente eres la persona que
            estamos buscando. Postula al rol que más te calce.
          </p>
          <a
            href="#open-roles"
            className="group relative inline-flex items-center gap-2 rounded-full text-background text-sm font-semibold px-6 py-3 overflow-hidden bg-foreground transition-all duration-300 ease-out hover:scale-[1.02]"
          >
            Ver cargos abiertos
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
