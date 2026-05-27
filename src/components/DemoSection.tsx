import { motion } from "motion/react";
import { Target, Zap, Gift, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const VALUE_PROPS = [
  {
    icon: Target,
    title: "Diagnóstico personalizado",
    description:
      "Analizamos tu negocio y te mostramos exactamente cómo implementar los agentes IA.",
  },
  {
    icon: Zap,
    title: "Demo en vivo de tu industria",
    description:
      "Te mostramos casos reales de negocios similares al tuyo ya funcionando con HEAT IA.",
  },
  {
    icon: Gift,
    title: "Implementación en 5 días hábiles",
    description:
      "Nuestro equipo configura todo por ti. Arrancamos apenas confirmes tu plan.",
  },
];

const INDUSTRIES = [
  "Clínica / Salud",
  "Inmobiliaria",
  "E-commerce / Tienda Online",
  "Gimnasio / Bienestar",
  "Restaurante / Gastronomía",
  "Educación / Academia",
  "Agencia / Servicios",
  "Automotriz",
  "Otro",
];

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-gray-500 focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-colors";

export default function DemoSection() {
  return (
    <section className="bg-[#0A0A0B] flex flex-col items-center px-6 md:px-12 py-20 md:py-24">
      <div className="w-full max-w-[1080px] mb-12 text-center">
        <p className="text-xs font-medium tracking-[0.18em] text-white/50 mb-4">
          📅 DEMO GRATUITA
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight mb-4 leading-tight">
          Agenda tu Demo Gratis
        </h2>
        <p className="text-gray-400 text-base md:text-lg leading-7 max-w-xl mx-auto">
          En 30 minutos te mostramos cómo HEAT IA puede potenciar la operación
          de tu negocio. Sin compromiso, sin letra chica.
        </p>
      </div>

      <div className="grid w-full max-w-[1080px] grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
        <motion.ul
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-8"
        >
          {VALUE_PROPS.map((vp) => (
            <li key={vp.title} className="flex items-start gap-4">
              <div className="liquid-glass w-11 h-11 rounded-xl flex items-center justify-center shrink-0">
                <vp.icon
                  size={18}
                  strokeWidth={2.2}
                  className="text-white/90"
                />
              </div>
              <div>
                <h3 className="text-white font-medium text-lg tracking-tight">
                  {vp.title}
                </h3>
                <p className="mt-1 text-gray-400 text-sm leading-relaxed">
                  {vp.description}
                </p>
              </div>
            </li>
          ))}
        </motion.ul>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          onSubmit={(e) => e.preventDefault()}
          className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-8 space-y-4"
        >
          <p className="text-xs font-medium tracking-[0.18em] text-white/50">
            GRATIS · 30 MINUTOS · SIN COMPROMISO
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex flex-col gap-1.5">
              <span className="text-xs text-gray-400 tracking-wide">
                NOMBRE *
              </span>
              <input
                type="text"
                required
                placeholder="Tu nombre"
                className={inputClass}
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-xs text-gray-400 tracking-wide">
                EMPRESA
              </span>
              <input
                type="text"
                placeholder="Tu empresa"
                className={inputClass}
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-xs text-gray-400 tracking-wide">
                WHATSAPP *
              </span>
              <input
                type="tel"
                required
                placeholder="+56 9 ..."
                className={inputClass}
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-xs text-gray-400 tracking-wide">
                EMAIL *
              </span>
              <input
                type="email"
                required
                placeholder="tu@empresa.com"
                className={inputClass}
              />
            </label>
          </div>

          <label className="flex flex-col gap-1.5">
            <span className="text-xs text-gray-400 tracking-wide">
              ¿CUÁL ES TU INDUSTRIA?
            </span>
            <select className={inputClass + " appearance-none"} defaultValue="">
              <option value="" disabled>
                Selecciona tu industria
              </option>
              {INDUSTRIES.map((ind) => (
                <option key={ind} value={ind} className="bg-[#0A0A0B]">
                  {ind}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-xs text-gray-400 tracking-wide">
              ¿CUÁL ES TU MAYOR DESAFÍO AHORA?
            </span>
            <textarea
              rows={3}
              placeholder="Contanos brevemente"
              className={inputClass + " resize-none"}
            />
          </label>

          <Button
            type="submit"
            variant="heroSecondary"
            size="none"
            className="w-full rounded-full px-6 py-4 text-base inline-flex items-center justify-center gap-2"
          >
            Agendar mi Demo Gratis <ArrowRight size={16} />
          </Button>

          <p className="text-xs text-gray-500 text-center">
            Sin compromiso · Respondemos en menos de 2 horas
          </p>
        </motion.form>
      </div>
    </section>
  );
}
