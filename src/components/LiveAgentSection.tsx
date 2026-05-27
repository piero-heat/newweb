import ChatDemo from "./ChatDemo";
import HeatNetworkDiagram from "./HeatNetworkDiagram";

export default function LiveAgentSection() {
  return (
    <section className="bg-[#0A0A0B] flex flex-col items-center px-6 md:px-12 py-20 md:py-24">
      <div className="w-full max-w-[1080px] mb-12 text-center">
        <p className="text-xs font-medium tracking-[0.18em] text-white/50 mb-4">
          💬 AGENTE EN VIVO · CONECTADO
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight mb-4 leading-tight">
          Habla como humano. Se integra con todo.
        </h2>
        <p className="text-gray-400 text-base md:text-lg leading-7 max-w-2xl mx-auto">
          El agente HEAT vive en WhatsApp, IG y Facebook — y se enchufa a las
          herramientas que ya usás. Una conversación real, un stack
          conectado.
        </p>
      </div>

      <div className="grid w-full max-w-[1200px] gap-12 lg:gap-16 lg:grid-cols-2 items-center">
        <ChatDemo />
        <HeatNetworkDiagram />
      </div>
    </section>
  );
}
