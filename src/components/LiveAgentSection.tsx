import ChatDemo from "./ChatDemo";

export default function LiveAgentSection() {
  return (
    <section className="bg-[#0A0A0B] flex flex-col items-center px-6 md:px-12 py-20 md:py-24">
      <div className="w-full max-w-[820px] mb-10 text-center">
        <p className="text-xs font-medium tracking-[0.18em] text-white/50 mb-4">
          💬 AGENTE EN VIVO · DEMO
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight mb-4 leading-tight">
          Así conversa tu agente HEAT
        </h2>
        <p className="text-gray-400 text-base md:text-lg leading-7 max-w-xl mx-auto">
          Una conversación real de WhatsApp: filtra, califica y agenda — sin
          que tu equipo levante un dedo.
        </p>
      </div>
      <ChatDemo />
    </section>
  );
}
