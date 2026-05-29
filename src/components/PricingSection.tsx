import { Flame, Zap, Rocket } from "lucide-react";
import {
  SiFacebook,
  SiInstagram,
  SiWhatsapp,
} from "@icons-pack/react-simple-icons";
import PricingCard, { type PricingCardProps } from "./PricingCard";

const PLANS: PricingCardProps[] = [
  {
    icon: Flame,
    name: "HEAT IA · STANDARD",
    tagline: "Automatiza la atención en Instagram y Facebook con IA.",
    price: "299",
    billing: "/mes",
    features: [
      "Instagram + Facebook",
      "CRM + App móvil con IA",
      "3 usuarios",
      "10.000 contactos",
      "1 embudo configurado",
      "Landing pages incluidas",
      "Reportes Meta & Google Ads",
      "ASK IA · IA interna para consultas",
    ],
    href: "/suscripcion/standard",
    delay: 0.05,
  },
  {
    icon: Zap,
    name: "HEAT IA · PRO",
    tagline: "Automatiza Instagram, Facebook y WhatsApp con IA.",
    price: "349",
    billing: "/mes",
    features: [
      "WhatsApp + Instagram + Facebook",
      "CRM + App móvil con IA",
      "10 usuarios",
      "100.000 contactos",
      "3 embudos configurados",
      "Landing pages incluidas",
      "Reportes Meta & Google Ads",
      "ASK IA · IA interna para consultas",
    ],
    href: "/suscripcion/pro",
    highlighted: true,
    delay: 0.15,
  },
  {
    icon: Rocket,
    name: "HEAT IA · ADVANCE",
    tagline: "Automatización completa con IA. Usuarios y contactos ilimitados.",
    price: "649",
    billing: "/mes",
    features: [
      "WhatsApp + Instagram + Facebook",
      "CRM + App móvil con IA",
      "Usuarios ilimitados",
      "Contactos ilimitados",
      "5 embudos configurados",
      "Landing pages incluidas",
      "Reportes Meta & Google Ads",
      "ASK IA · IA interna para consultas",
      "Voice AI · llamadas + Token LLM",
    ],
    href: "/suscripcion/advance",
    delay: 0.25,
  },
];

export default function PricingSection() {
  return (
    <section
      id="planes"
      className="bg-[#0A0A0B] flex flex-col items-center px-6 md:px-12 py-20 md:py-24 scroll-mt-8"
    >
      <div className="w-full max-w-[1080px] mb-12 text-center">
        <p className="text-xs font-medium tracking-[0.18em] text-white/50 mb-4">
          🔥 PLANES HEAT IA
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight mb-4 leading-tight">
          Elige el plan que necesitas
        </h2>
        <p className="text-gray-400 text-base md:text-lg leading-7 max-w-xl mx-auto">
          Tres planes diseñados para cada etapa de tu negocio. Sin contratos,
          cancela cuando quieras.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1080px]">
        {PLANS.map((plan) => (
          <PricingCard key={plan.name} {...plan} />
        ))}
      </div>

      <div className="mt-12 w-full max-w-[1080px] rounded-3xl border border-white/[0.06] bg-white/[0.015] p-8 md:p-10 text-center">
        <p className="text-foreground text-base md:text-lg leading-relaxed">
          Todos los planes incluyen{" "}
          <span className="font-semibold text-cyan-300">
            1 empresa y 1 número de WhatsApp.
          </span>
        </p>
        <p className="mt-2 text-gray-400 text-sm">
          Costo de IA por uso:{" "}
          <span className="text-foreground font-medium">$0,04 por mensaje</span>{" "}
          <span className="text-gray-500">(Tokens ChatGPT)</span>
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-6 md:gap-3">
          <div className="group relative flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-5 py-3 transition-all duration-400 ease-out hover:border-white/15 hover:bg-white/[0.04] hover:shadow-[0_12px_40px_-12px_rgba(24,119,242,0.35)]">
            <div className="flex items-center gap-2">
              <SiFacebook
                size={22}
                className="text-white/40 transition-colors duration-400 group-hover:text-[#1877F2]"
              />
              <SiInstagram
                size={22}
                className="text-white/40 transition-colors duration-400 group-hover:text-[#E4405F]"
              />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-semibold tracking-[0.18em] text-white/50 group-hover:text-white/80 transition-colors">
                PREMIUM PARTNERS
              </p>
              <p className="text-[10px] font-semibold tracking-[0.18em] text-white/50 group-hover:text-white/80 transition-colors">
                FOR MESSAGING API
              </p>
            </div>
          </div>

          <div className="hidden md:block h-10 w-px bg-white/[0.08]" />

          <div className="group relative flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-5 py-3 transition-all duration-400 ease-out hover:border-white/15 hover:bg-white/[0.04] hover:shadow-[0_12px_40px_-12px_rgba(37,211,102,0.35)]">
            <SiWhatsapp
              size={22}
              className="text-white/40 transition-colors duration-400 group-hover:text-[#25D366]"
            />
            <div className="text-left">
              <p className="text-[10px] font-semibold tracking-[0.18em] text-white/50 group-hover:text-white/80 transition-colors">
                BUSINESS
              </p>
              <p className="text-[10px] font-semibold tracking-[0.18em] text-white/50 group-hover:text-white/80 transition-colors">
                SOLUTION PROVIDER
              </p>
            </div>
          </div>
        </div>

        <p className="mt-7 text-xs text-gray-400">
          *Puedes cancelar cuando desees{" "}
          <span className="text-emerald-400 font-medium">
            ¡sin ataduras ni contratos de permanencia!
          </span>
        </p>
      </div>
    </section>
  );
}
