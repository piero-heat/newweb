import { motion } from "motion/react";
import { Plus } from "lucide-react";

const FAQS = [
  {
    q: "¿Cómo funciona el proceso de implementación?",
    a: "Eliges tu plan, completas el formulario y agendas tu videollamada de bienvenida. Nuestro equipo configura agente IA, embudos e integraciones — incluye migración de tu plataforma anterior. En 5 días hábiles tu sistema queda activo.",
  },
  {
    q: "¿Cuánto tiempo dura el proceso de implementación?",
    a: "5 días hábiles desde la firma. Nuestro equipo se encarga de todo: configuración del agente, integración con tus canales, embudos de venta y migración de datos.",
  },
  {
    q: "¿Qué información necesitan para entrenar al agente?",
    a: "Información sobre tu negocio, productos/servicios, precios, horarios, FAQs y proceso comercial. Te guiamos paso a paso en las sesiones de onboarding. Más completa la información, mejor responde el agente.",
  },
  {
    q: "¿Con qué canales es compatible además de WhatsApp?",
    a: "Instagram, Facebook Messenger, Web Chat y próximamente más. Plan Pro y Advance incluyen WhatsApp Business API oficial de Meta.",
  },
  {
    q: "¿Puedo integrar otros canales más adelante?",
    a: "Sí. Podés sumar canales y herramientas en cualquier momento upgrade-ando el plan o contratando addons independientes.",
  },
  {
    q: "¿Hay aplicación móvil para administrar conversaciones?",
    a: "Sí. Todos los planes incluyen acceso al CRM web y app móvil iOS/Android para gestionar conversaciones, contactos y reportes desde donde estés.",
  },
  {
    q: "¿Cuándo se me empieza a cobrar?",
    a: "Desde el día que tu sistema queda activo (5 días hábiles luego de contratar). No te cobramos durante la implementación.",
  },
  {
    q: "¿Hay contrato mínimo de permanencia?",
    a: "No. Todos los planes son mensuales y podés cancelar cuando quieras, sin letra chica ni penalizaciones.",
  },
  {
    q: "¿Cuánto cuesta la implementación?",
    a: "Tenés tres paquetes: Ignite USD 500, Accelerate USD 1.000 y Transform USD 1.500. Pago único — sin contratos ni costos recurrentes de setup.",
  },
];

function FaqItem({ item, index }: { item: (typeof FAQS)[number]; index: number }) {
  return (
    <motion.details
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.04 }}
      className="group rounded-2xl border border-white/5 bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.03] hover:shadow-[0_8px_30px_-10px_rgba(168,85,247,0.18)] transition-all duration-400 ease-out [&_summary::-webkit-details-marker]:hidden"
    >
      <summary className="cursor-pointer list-none px-6 py-5 flex items-center justify-between gap-4 text-foreground font-medium">
        <span className="text-[15px]">{item.q}</span>
        <Plus
          size={18}
          className="shrink-0 text-white/60 transition-transform duration-300 group-open:rotate-45"
        />
      </summary>
      <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed">
        {item.a}
      </div>
    </motion.details>
  );
}

export default function FaqSection() {
  return (
    <section className="bg-[#0A0A0B] flex flex-col items-center px-6 md:px-12 py-20 md:py-24">
      <div className="w-full max-w-[820px] mb-12 text-center">
        <p className="text-xs font-medium tracking-[0.18em] text-white/50 mb-4">
          ❓ PREGUNTAS FRECUENTES
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight mb-4 leading-tight">
          ¿Tienes preguntas?
        </h2>
        <p className="text-gray-400 text-base md:text-lg leading-7 max-w-xl mx-auto">
          Las preguntas más comunes sobre nuestros planes y precios. ¿No
          encuentras lo que buscas? Ponte en contacto.
        </p>
      </div>

      <div className="w-full max-w-[820px] space-y-3">
        {FAQS.map((item, i) => (
          <FaqItem key={item.q} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
