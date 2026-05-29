import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  MapPin,
  Sparkles,
  Mail,
  Star,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ROLES } from "@/data/careers";

/* ────────────────────────────────────────────────────────────── */
/* Careers · individual role page                                  */
/* ────────────────────────────────────────────────────────────── */

const HEAT_GRADIENT =
  "linear-gradient(90deg, #ef4444 0%, #f0abfc 50%, #fcd34d 100%)";

const CULTURE_GRADIENT =
  "linear-gradient(90deg, #7DD3FC 0%, #C084FC 50%, #FCD34D 100%)";

function Chip({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[12px] font-medium text-gray-300">
      {icon && <span className="text-white/55">{icon}</span>}
      {children}
    </span>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-foreground tracking-tight text-2xl md:text-[28px] mb-5 leading-tight">
      {children}
    </h2>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3.5">
      {items.map((item, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.35, delay: i * 0.04 }}
          className="flex items-start gap-3 text-gray-300 text-[15px] leading-7"
        >
          <span
            aria-hidden
            className="mt-2 inline-block h-1.5 w-1.5 rounded-full shrink-0"
            style={{
              background:
                "linear-gradient(135deg, #ef4444, #a855f7 60%, #fcd34d)",
            }}
          />
          <span>{item}</span>
        </motion.li>
      ))}
    </ul>
  );
}

export default function CareersRole() {
  const { slug } = useParams<{ slug?: string }>();
  const role = ROLES.find((r) => r.slug === slug);

  if (!role) {
    // Slug inválido → redirige al listing
    return <Navigate to="/careers" replace />;
  }

  const applyUrl = `mailto:${role.applyEmail}?subject=${encodeURIComponent(
    `Aplicación · ${role.title} · HEAT`
  )}&body=${encodeURIComponent(
    `Hola HEAT,\n\nMe gustaría aplicar al cargo de ${role.title}.\n\nAdjunto mi CV / LinkedIn y un breve mensaje de por qué creo que encajo.\n\n[Tu mensaje]\n\nLinkedIn: \nCV: \n\nSaludos,\n`
  )}`;

  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      {/* ── Top breadcrumb + back ── */}
      <div className="bg-background px-6 md:px-12 pt-6 md:pt-8">
        <div className="mx-auto max-w-[920px]">
          <Link
            to="/careers"
            className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-foreground transition-colors group"
          >
            <ArrowLeft
              size={14}
              className="transition-transform group-hover:-translate-x-0.5"
            />
            Volver a Careers
          </Link>
        </div>
      </div>

      {/* ── Hero del rol ── */}
      <section className="relative bg-background px-6 md:px-12 pt-8 md:pt-10 pb-12 md:pb-14 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(60% 80% at 25% 0%, rgba(168,85,247,0.20), transparent 60%), radial-gradient(60% 80% at 75% 0%, rgba(125,211,252,0.16), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-[920px]">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[11px] font-semibold tracking-[0.22em] mb-4 bg-clip-text text-transparent inline-block"
            style={{ backgroundImage: CULTURE_GRADIENT }}
          >
            {role.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-medium text-foreground tracking-tight leading-[1.05] mb-5"
            style={{
              fontSize: "clamp(34px, 4.6vw, 56px)",
              letterSpacing: "-0.025em",
            }}
          >
            {role.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center gap-2 mb-6"
          >
            <Chip icon={<Briefcase size={11} />}>{role.department}</Chip>
            <Chip icon={<MapPin size={11} />}>{role.location}</Chip>
            <Chip>{role.type}</Chip>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base md:text-lg text-gray-300 leading-7 max-w-2xl"
          >
            {role.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-7"
          >
            <a
              href={applyUrl}
              className="group relative inline-flex items-center gap-2 rounded-full text-background text-sm font-semibold px-6 py-3 overflow-hidden bg-foreground transition-all duration-300 ease-out hover:scale-[1.02]"
            >
              <Mail size={14} />
              Postular a {role.title}
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── About the role ── */}
      <section className="relative px-6 md:px-12 py-12 md:py-16 bg-background border-t border-white/[0.04]">
        <div className="mx-auto max-w-[920px]">
          <SectionHeading>Sobre el rol</SectionHeading>
          <p className="text-gray-300 text-[15px] md:text-[16px] leading-8 max-w-3xl">
            {role.about}
          </p>
        </div>
      </section>

      {/* ── Responsibilities ── */}
      <section className="relative px-6 md:px-12 py-12 md:py-16 bg-background border-t border-white/[0.04]">
        <div className="mx-auto max-w-[920px]">
          <SectionHeading>Qué vas a hacer</SectionHeading>
          <BulletList items={role.responsibilities} />
        </div>
      </section>

      {/* ── Requirements ── */}
      <section className="relative px-6 md:px-12 py-12 md:py-16 bg-background border-t border-white/[0.04]">
        <div className="mx-auto max-w-[920px]">
          <SectionHeading>Qué buscamos</SectionHeading>
          <BulletList items={role.requirements} />
        </div>
      </section>

      {/* ── Nice to have ── */}
      <section className="relative px-6 md:px-12 py-12 md:py-16 bg-background border-t border-white/[0.04]">
        <div className="mx-auto max-w-[920px]">
          <SectionHeading>Plus, no obligatorio</SectionHeading>
          <BulletList items={role.niceToHave} />
        </div>
      </section>

      {/* ── What we offer ── */}
      <section className="relative px-6 md:px-12 py-12 md:py-16 bg-background border-t border-white/[0.04]">
        <div className="mx-auto max-w-[920px]">
          <SectionHeading>Qué ofrecemos</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {role.offer.map((o, i) => {
              const Icon = o.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-center gap-3.5 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-4 py-3.5 transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.04]"
                >
                  <span
                    className="shrink-0 flex h-9 w-9 items-center justify-center rounded-xl text-white"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(239,68,68,0.18), rgba(168,85,247,0.18) 60%, rgba(252,211,77,0.18))",
                      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)",
                    }}
                  >
                    <Icon size={15} />
                  </span>
                  <span className="text-gray-300 text-[14px] leading-snug">
                    {o.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Process expectations ── */}
      <section className="relative px-6 md:px-12 py-12 md:py-16 bg-background border-t border-white/[0.04]">
        <div className="mx-auto max-w-[920px]">
          <SectionHeading>Cómo es el proceso</SectionHeading>
          <ol className="space-y-4">
            {[
              {
                step: "01",
                title: "Postulas",
                description:
                  "Mándanos tu CV/LinkedIn + por qué crees que encajas en HEAT.",
              },
              {
                step: "02",
                title: "Primera conversación · 30 min",
                description:
                  "Fit cultural y entendimiento mutuo. Sin BS, vamos al punto.",
              },
              {
                step: "03",
                title: "Caso real / entrevista técnica",
                description:
                  "Te damos un problema del día a día de HEAT. Si es engineering, code. Si es sales/product, caso real.",
              },
              {
                step: "04",
                title: "Conoces al equipo",
                description:
                  "Charla con 2–3 personas del team con quienes vas a colaborar día a día.",
              },
              {
                step: "05",
                title: "Oferta + onboarding",
                description:
                  "Si hay match en ambos lados, te enviamos oferta detallada y kickoff de onboarding.",
              },
            ].map((p, i) => (
              <motion.li
                key={p.step}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-start gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-5 py-4"
              >
                <span
                  className="shrink-0 mt-0.5 text-[12px] font-semibold tracking-[0.16em] bg-clip-text text-transparent"
                  style={{ backgroundImage: HEAT_GRADIENT }}
                >
                  {p.step}
                </span>
                <div>
                  <p className="text-foreground text-[15px] font-semibold leading-tight">
                    {p.title}
                  </p>
                  <p className="text-gray-400 text-[14px] leading-7 mt-1">
                    {p.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Final apply CTA ── */}
      <section className="relative px-6 md:px-12 py-16 md:py-20 bg-background border-t border-white/[0.04] overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(50% 70% at 50% 50%, rgba(239,68,68,0.16), transparent 65%)",
          }}
        />
        <div className="relative mx-auto max-w-[760px] text-center">
          <Star
            size={28}
            className="mx-auto mb-4 text-amber-300/80"
            strokeWidth={1.5}
            fill="currentColor"
          />
          <h2 className="font-display text-foreground tracking-tight text-3xl md:text-4xl mb-4">
            ¿Te ves haciendo esto?
          </h2>
          <p className="text-gray-400 text-[15px] leading-7 mb-7">
            Si llegaste hasta acá leyendo, hay algo que te llamó. Da el paso
            y postula. Te respondemos en menos de 7 días.
          </p>
          <a
            href={applyUrl}
            className="group relative inline-flex items-center gap-2 rounded-full text-background text-sm font-semibold px-6 py-3 overflow-hidden bg-foreground transition-all duration-300 ease-out hover:scale-[1.02]"
          >
            <Mail size={14} />
            Postular a {role.title}
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
          <p className="mt-4 text-[12px] text-gray-500">
            o escríbenos directo a{" "}
            <a
              href={`mailto:${role.applyEmail}`}
              className="text-gray-400 hover:text-foreground transition-colors underline"
            >
              {role.applyEmail}
            </a>
          </p>
        </div>
      </section>

      {/* ── Other open positions ── */}
      <section className="relative px-6 md:px-12 py-16 md:py-20 bg-background border-t border-white/[0.04]">
        <div className="mx-auto max-w-[920px]">
          <p
            className="text-[11px] font-semibold tracking-[0.22em] mb-3 bg-clip-text text-transparent inline-block"
            style={{ backgroundImage: CULTURE_GRADIENT }}
          >
            OTRAS POSICIONES ABIERTAS
          </p>
          <h2 className="font-display text-foreground tracking-tight text-2xl md:text-3xl mb-7">
            Mira si también encajas en alguna de estas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ROLES.filter((r) => r.slug !== role.slug).map((r) => (
              <Link
                key={r.slug}
                to={`/careers/${r.slug}`}
                className="group block rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 md:p-6 transition-all duration-400 hover:border-white/[0.14] hover:bg-white/[0.04] hover:shadow-[0_16px_50px_-20px_rgba(168,85,247,0.3)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p
                      className="text-[10px] font-semibold tracking-[0.2em] mb-2 bg-clip-text text-transparent"
                      style={{ backgroundImage: CULTURE_GRADIENT }}
                    >
                      {r.eyebrow}
                    </p>
                    <p className="text-foreground text-lg md:text-xl font-display font-medium leading-tight">
                      {r.title}
                    </p>
                    <p className="text-gray-500 text-[12px] mt-2">
                      {r.department} · {r.location}
                    </p>
                  </div>
                  <span
                    aria-hidden
                    className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/55 group-hover:text-white group-hover:border-white/20 transition-all duration-300"
                  >
                    <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <Link
            to="/careers"
            className="mt-7 inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-foreground transition-colors group"
          >
            <Sparkles size={13} />
            Ver todos los cargos abiertos
            <ArrowRight
              size={13}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
