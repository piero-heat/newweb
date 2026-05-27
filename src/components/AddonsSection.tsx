import { motion } from "motion/react";
import { Check } from "lucide-react";

type Plan = "Standard" | "Pro" | "Advance";

type Addon = {
  title: string;
  price: string;
  description: string;
  availableIn: Plan[];
  includedIn?: Plan[];
};

const ADDONS: Addon[] = [
  {
    title: "Embudo configurado adicional",
    price: "49",
    description:
      "Configuramos un embudo extra para otro vertical, producto o canal de captación.",
    availableIn: ["Standard", "Pro", "Advance"],
  },
  {
    title: "Número WhatsApp con IA",
    price: "35",
    description:
      "Suma otro número de WhatsApp Business API con su propio agente HEAT.",
    availableIn: ["Standard", "Pro", "Advance"],
  },
  {
    title: "Usuario adicional",
    price: "20",
    description:
      "Suma asientos del CRM más allá del límite incluido en tu plan.",
    availableIn: ["Standard", "Pro", "Advance"],
  },
  {
    title: "Pack 10 asientos",
    price: "150",
    description:
      "10 usuarios extra de un saque para equipos en crecimiento. Más barato que sumarlos sueltos.",
    availableIn: ["Standard", "Pro"],
    includedIn: ["Advance"],
  },
  {
    title: "Asientos ilimitados",
    price: "300",
    description:
      "Sin tope de usuarios. Ideal para operaciones grandes que escalan rápido.",
    availableIn: ["Standard", "Pro"],
    includedIn: ["Advance"],
  },
  {
    title: "Voice AI",
    price: "89",
    description:
      "Atención automática de llamadas con IA + Token LLM. Tu agente HEAT también atiende al teléfono.",
    availableIn: ["Standard", "Pro"],
    includedIn: ["Advance"],
  },
];

const PLAN_PILL: Record<Plan, string> = {
  Standard: "bg-cyan-500/[0.10] border-cyan-400/30 text-cyan-300",
  Pro: "bg-pink-500/[0.10] border-pink-400/30 text-pink-300",
  Advance: "bg-violet-500/[0.10] border-violet-400/30 text-violet-300",
};

function PlanPill({ plan, included }: { plan: Plan; included?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[10px] font-semibold tracking-wide ${PLAN_PILL[plan]}`}
    >
      {included ? <Check size={11} strokeWidth={3} /> : null}
      {plan}
    </span>
  );
}

function AddonCard({ addon, index }: { addon: Addon; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
      className="group relative flex h-full flex-col rounded-3xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.04] hover:shadow-[0_16px_50px_-12px_rgba(168,85,247,0.22)]"
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="text-foreground font-medium text-[15px] tracking-tight leading-snug">
          {addon.title}
        </h3>
        <div className="text-right shrink-0 whitespace-nowrap">
          <span className="font-display text-xl font-semibold text-foreground tracking-tight">
            ${addon.price}
          </span>
          <span className="text-[11px] text-gray-400 ml-1">USD /mes</span>
        </div>
      </div>

      <p className="text-sm text-gray-400 leading-relaxed flex-1">
        {addon.description}
      </p>

      <div className="mt-5 flex items-center gap-2 flex-wrap">
        {addon.availableIn.map((p) => (
          <PlanPill key={p} plan={p} />
        ))}
        {addon.includedIn?.map((p) => (
          <PlanPill key={`inc-${p}`} plan={p} included />
        ))}
      </div>
    </motion.div>
  );
}

export default function AddonsSection() {
  return (
    <section className="bg-[#0A0A0B] flex flex-col items-center px-6 md:px-12 py-20 md:py-24">
      <div className="w-full max-w-[1080px] mb-12 text-center">
        <p className="text-xs font-medium tracking-[0.18em] text-white/50 mb-4">
          🧩 ADD-ONS
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight mb-4 leading-tight">
          Personaliza tu plan
        </h2>
        <p className="text-gray-400 text-base md:text-lg leading-7 max-w-xl mx-auto">
          Funcionalidades adicionales que se suman a cualquier plan. Activá las
          que necesités y cancelá cuando quieras — sin contratos.
        </p>
      </div>

      <div className="grid w-full max-w-[1080px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {ADDONS.map((a, i) => (
          <AddonCard key={a.title} addon={a} index={i} />
        ))}
      </div>

      <div className="mt-10 flex items-center gap-3 text-xs text-gray-500">
        <span className="inline-flex items-center gap-1.5">
          <Check size={12} className="text-cyan-300" />
          <span className="text-cyan-300">Standard</span>
        </span>
        <span className="text-gray-700">·</span>
        <span className="inline-flex items-center gap-1.5">
          <Check size={12} className="text-pink-300" />
          <span className="text-pink-300">Pro</span>
        </span>
        <span className="text-gray-700">·</span>
        <span className="inline-flex items-center gap-1.5">
          <Check size={12} className="text-violet-300" />
          <span className="text-violet-300">Advance</span>
        </span>
        <span className="ml-3 text-gray-500">
          — Con ✓ significa "ya incluido en ese plan"
        </span>
      </div>
    </section>
  );
}
