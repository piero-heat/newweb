import { useState } from "react";
import { motion } from "motion/react";
import {
  Plus,
  TrendingUp,
  HeartHandshake,
  Megaphone,
  ArrowRight,
  Sparkles,
  Check,
} from "lucide-react";
import {
  SiMeta,
  SiShopify,
  SiWhatsapp,
  SiMercadopago,
  SiGoogleads,
} from "@icons-pack/react-simple-icons";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const STATS = [
  { value: "+50%", label: "Ventas para tus clientes" },
  { value: "-85%", label: "Curiosos filtrados" },
  { value: "5 días", label: "Setup completo" },
];

const BENEFITS = [
  {
    icon: Plus,
    title: "Amplía tu oferta",
    description:
      "Suma HEAT IA a tu portafolio. Una plataforma de Agentes IA + CRM que automatiza ventas y atención en LATAM y EEUU, sin que tu equipo cambie de stack.",
  },
  {
    icon: TrendingUp,
    title: "Ingresos compartidos",
    description:
      "Gana comisiones recurrentes por cada cliente que traigas, con un modelo transparente que escala a medida que crece tu pipeline.",
  },
  {
    icon: HeartHandshake,
    title: "Soporte directo",
    description:
      "Canal dedicado con el equipo de HEAT para armar los proyectos de tus clientes, asegurar implementación rápida y la máxima calidad.",
  },
  {
    icon: Sparkles,
    title: "Oportunidades comerciales",
    description:
      "Te derivamos leads cuando calcen con tu expertise. Queremos que ganes más clientes, no solo comisiones.",
  },
  {
    icon: Megaphone,
    title: "Co-Marketing con propósito",
    description:
      "Compartimos casos de éxito, contenido, webinars y activaciones en conjunto, para aumentar tu visibilidad y acelerar cierres.",
  },
];

type PartnerIconProps = {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
};

const PARTNER_LOGOS: {
  name: string;
  Icon: React.ComponentType<PartnerIconProps>;
  color: string;
}[] = [
  { name: "Meta Tech Provider", Icon: SiMeta, color: "#1877F2" },
  { name: "Shopify Partner", Icon: SiShopify, color: "#95BF46" },
  { name: "WhatsApp BSP", Icon: SiWhatsapp, color: "#25D366" },
  { name: "Mercado Pago", Icon: SiMercadopago, color: "#00AAFF" },
  { name: "Google Ads", Icon: SiGoogleads, color: "#4285F4" },
];

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-gray-500 focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-colors";

function BenefitCard({
  benefit,
  index,
}: {
  benefit: (typeof BENEFITS)[number];
  index: number;
}) {
  const Icon = benefit.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.06 }}
      className="group relative flex h-full flex-col rounded-3xl border border-white/[0.06] bg-white/[0.02] p-7 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.04] hover:shadow-[0_16px_50px_-12px_rgba(168,85,247,0.22)]"
    >
      <div className="liquid-glass w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110">
        <Icon size={20} strokeWidth={2.2} className="text-white/90" />
      </div>
      <h3 className="text-foreground font-medium text-lg tracking-tight mb-2">
        {benefit.title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        {benefit.description}
      </p>
    </motion.div>
  );
}

export default function Partners() {
  const [step, setStep] = useState<1 | 2>(1);

  return (
    <div className="relative bg-background min-h-screen">
      <Navbar />

      {/* ───────── Hero ───────── */}
      <section className="relative px-6 md:px-12 pt-12 md:pt-20 pb-20 md:pb-28 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] rounded-full opacity-50"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(99,102,241,0.3), transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        <div className="relative grid w-full max-w-[1200px] mx-auto gap-12 lg:gap-16 lg:grid-cols-[1.05fr_1fr] items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/[0.06] px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-cyan-300 mb-6">
              🤝 PROGRAMA DE PARTNERS
            </span>
            <h1
              className="font-display font-medium text-white tracking-tight leading-[1.05] mb-5"
              style={{
                fontSize: "clamp(40px, 6vw, 80px)",
                letterSpacing: "-0.022em",
              }}
            >
              Crezcamos
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(to left, #6366f1, #a855f7, #fcd34d)",
                }}
              >
                juntos
              </span>
            </h1>
            <p className="text-foreground/90 text-xl md:text-2xl font-medium mb-4">
              Únete al programa de Partners HEAT.
            </p>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl mb-6">
              Estamos construyendo un ecosistema de colaboración con agencias,
              consultoras y proveedores tecnológicos para entregar más valor a
              nuestros clientes en LATAM y EEUU.
            </p>
            <p className="text-gray-400 text-base leading-relaxed max-w-xl mb-8">
              Creemos en el poder de las alianzas entre empresas para impulsar
              la innovación y fortalecer el ecosistema de la IA aplicada a
              ventas y atención.
            </p>
            <a
              href="#partner-form"
              className="group relative inline-flex items-center gap-2 rounded-full liquid-glass text-foreground text-sm font-medium px-6 py-3 overflow-hidden transition-all duration-500 ease-out hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.35)]"
            >
              <span
                aria-hidden
                className="absolute inset-0 rounded-full bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"
              />
              <span className="relative z-10 transition-colors duration-500 ease-out group-hover:text-background flex items-center gap-2">
                Conversemos <ArrowRight size={14} />
              </span>
            </a>
          </div>

          <div className="space-y-5">
            <div className="grid grid-cols-3 gap-3">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 text-center"
                >
                  <p
                    className="font-display font-medium bg-clip-text text-transparent leading-none"
                    style={{
                      fontSize: "clamp(28px, 3vw, 38px)",
                      letterSpacing: "-0.03em",
                      backgroundImage:
                        "linear-gradient(to left, #6366f1, #a855f7, #fcd34d)",
                    }}
                  >
                    {s.value}
                  </p>
                  <p className="mt-2 text-[10px] text-gray-400 leading-snug">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 shadow-[0_24px_80px_-20px_rgba(99,102,241,0.3)]"
            >
              <div className="flex items-center gap-3 pb-4 border-b border-white/5 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-xs">
                  IA
                </div>
                <div>
                  <p className="text-foreground font-medium text-sm">
                    Cliente de tu agencia
                  </p>
                  <p className="text-xs text-emerald-400">
                    Atendido por HEAT IA
                  </p>
                </div>
              </div>
              <div className="space-y-2.5 text-[13px]">
                <div className="flex justify-end">
                  <div className="max-w-[82%] rounded-2xl rounded-br-md px-3.5 py-2 bg-white/[0.06] border border-white/10 text-foreground">
                    Necesito una propuesta de marketing
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="max-w-[82%] rounded-2xl rounded-bl-md px-3.5 py-2 border border-indigo-400/25 bg-gradient-to-br from-indigo-500/[0.12] to-purple-500/[0.10] text-foreground">
                    ¡Perfecto! Te conecto con tu Account Manager
                    especializado. ¿Te acomoda mañana 11:00 AM?
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="max-w-[82%] rounded-2xl rounded-br-md px-3.5 py-2 bg-white/[0.06] border border-white/10 text-foreground">
                    Dale, agéndame 🙌
                  </div>
                </div>
              </div>
              <div className="mt-4 rounded-2xl border border-emerald-400/30 bg-emerald-400/[0.08] p-3 flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-emerald-400/20 flex items-center justify-center shrink-0">
                  <Check size={14} className="text-emerald-300" />
                </div>
                <p className="text-[13px] text-emerald-200">
                  Lead calificado → derivado a tu equipo
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───────── ¿Por qué ser parte? ───────── */}
      <section className="bg-[#0A0A0B] flex flex-col items-center px-6 md:px-12 py-20 md:py-24">
        <div className="w-full max-w-[1080px] mb-12 text-center">
          <p className="text-xs font-medium tracking-[0.18em] text-white/50 mb-4">
            💎 ¿POR QUÉ SER PARTE?
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight mb-4 leading-tight">
            ¿Por qué ser parte?
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-7 max-w-2xl mx-auto">
            Te acompañamos de punta a punta: conexión, soporte y un modelo
            comercial que premia el crecimiento en conjunto.
          </p>
        </div>

        <div className="grid w-full max-w-[1080px] grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {BENEFITS.slice(0, 3).map((b, i) => (
            <BenefitCard key={b.title} benefit={b} index={i} />
          ))}
        </div>
        <div className="grid w-full max-w-[720px] grid-cols-1 md:grid-cols-2 gap-5">
          {BENEFITS.slice(3).map((b, i) => (
            <BenefitCard key={b.title} benefit={b} index={i + 3} />
          ))}
        </div>
      </section>

      {/* ───────── Nuestros Partners ───────── */}
      <section className="bg-[#0A0A0B] flex flex-col items-center px-6 md:px-12 py-20 md:py-24 border-t border-white/[0.04]">
        <div className="w-full max-w-[1080px] mb-12 text-center">
          <p className="text-xs font-medium tracking-[0.18em] text-white/50 mb-4">
            🌐 NUESTROS PARTNERS
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight mb-4 leading-tight">
            Nuestros Partners
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-7 max-w-xl mx-auto">
            Tecnologías y empresas con las que trabajamos día a día para
            entregar la mejor experiencia.
          </p>
        </div>

        <div className="grid w-full max-w-[1080px] grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {PARTNER_LOGOS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 flex flex-col items-center gap-3 transition-all duration-400 hover:border-white/15 hover:bg-white/[0.04] hover:-translate-y-0.5"
            >
              <p.Icon
                size={28}
                color="currentColor"
                className="text-white/40 transition-colors duration-400 group-hover:text-[var(--brand)]"
                style={{ ["--brand" as never]: p.color }}
              />
              <p className="text-[11px] text-gray-400 font-medium tracking-wide text-center group-hover:text-foreground transition-colors">
                {p.name}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ───────── Form ───────── */}
      <section
        id="partner-form"
        className="bg-[#0A0A0B] flex flex-col items-center px-6 md:px-12 py-20 md:py-24"
      >
        <div className="w-full max-w-[920px] rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 items-start">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-white tracking-tight mb-5 leading-tight">
                ¿Quieres ser partner de{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(to left, #6366f1, #a855f7, #fcd34d)",
                  }}
                >
                  HEAT
                </span>
                ?
              </h2>
              <p className="text-gray-400 text-base leading-relaxed mb-4">
                Si tu foco es escalar negocios con IA, automatización o
                performance, HEAT puede ser parte de tu propuesta.
              </p>
              <p className="text-gray-400 text-base leading-relaxed">
                Cuéntanos un poco sobre tu empresa y agenda una breve reunión
                para confirmar fit y revisar los próximos pasos.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setStep(step === 1 ? 2 : 1);
              }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between mb-4">
                <p className="text-foreground text-sm font-semibold">
                  Formulario
                </p>
                <p className="text-xs text-gray-500">Paso {step} de 2</p>
              </div>
              <div className="h-1 w-full rounded-full bg-white/5 overflow-hidden mb-6">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: step === 1 ? "50%" : "100%",
                    background:
                      "linear-gradient(to right, #6366f1, #a855f7, #FF9D3C)",
                  }}
                />
              </div>

              {step === 1 ? (
                <>
                  <label className="flex flex-col gap-1.5">
                    <span className="text-xs text-gray-400 tracking-wide">
                      Nombre y apellido *
                    </span>
                    <input
                      type="text"
                      required
                      placeholder="Tu nombre completo"
                      className={inputClass}
                    />
                  </label>
                  <label className="flex flex-col gap-1.5">
                    <span className="text-xs text-gray-400 tracking-wide">
                      Correo corporativo *
                    </span>
                    <input
                      type="email"
                      required
                      placeholder="tu@empresa.com"
                      className={inputClass}
                    />
                  </label>
                  <label className="flex flex-col gap-1.5">
                    <span className="text-xs text-gray-400 tracking-wide">
                      Teléfono *
                    </span>
                    <div className="flex gap-2">
                      <select className={inputClass + " max-w-[110px]"}>
                        <option className="bg-[#0A0A0B]">🇨🇱 +56</option>
                        <option className="bg-[#0A0A0B]">🇲🇽 +52</option>
                        <option className="bg-[#0A0A0B]">🇦🇷 +54</option>
                        <option className="bg-[#0A0A0B]">🇨🇴 +57</option>
                        <option className="bg-[#0A0A0B]">🇵🇪 +51</option>
                        <option className="bg-[#0A0A0B]">🇺🇸 +1</option>
                      </select>
                      <input
                        type="tel"
                        required
                        placeholder="123456789"
                        className={inputClass + " flex-1"}
                      />
                    </div>
                  </label>
                </>
              ) : (
                <>
                  <label className="flex flex-col gap-1.5">
                    <span className="text-xs text-gray-400 tracking-wide">
                      Empresa
                    </span>
                    <input
                      type="text"
                      placeholder="Nombre de tu empresa"
                      className={inputClass}
                    />
                  </label>
                  <label className="flex flex-col gap-1.5">
                    <span className="text-xs text-gray-400 tracking-wide">
                      Tipo de partnership *
                    </span>
                    <select className={inputClass} defaultValue="">
                      <option value="" disabled className="bg-[#0A0A0B]">
                        Selecciona una opción
                      </option>
                      <option className="bg-[#0A0A0B]">
                        Agencia digital
                      </option>
                      <option className="bg-[#0A0A0B]">
                        Consultora / Implementador
                      </option>
                      <option className="bg-[#0A0A0B]">
                        Software / Plataforma
                      </option>
                      <option className="bg-[#0A0A0B]">
                        Co-marketing / Medios
                      </option>
                      <option className="bg-[#0A0A0B]">Otro</option>
                    </select>
                  </label>
                  <label className="flex flex-col gap-1.5">
                    <span className="text-xs text-gray-400 tracking-wide">
                      Cuéntanos brevemente
                    </span>
                    <textarea
                      rows={3}
                      placeholder="¿Qué proponés? ¿Cuántos clientes tenés en pipeline?"
                      className={inputClass + " resize-none"}
                    />
                  </label>
                </>
              )}

              <div className="flex items-center gap-3 pt-2">
                {step === 2 && (
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="rounded-full border border-white/10 text-foreground/80 hover:text-foreground hover:border-white/25 transition-colors text-sm px-5 py-3"
                  >
                    Atrás
                  </button>
                )}
                <button
                  type="submit"
                  className="flex-1 rounded-full liquid-glass text-foreground text-sm font-medium px-6 py-3 hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.35)] transition-all duration-400 inline-flex items-center justify-center gap-2"
                >
                  {step === 1 ? (
                    <>
                      Continuar <ArrowRight size={14} />
                    </>
                  ) : (
                    <>Enviar postulación</>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
