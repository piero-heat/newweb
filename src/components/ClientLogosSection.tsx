import { motion } from "motion/react";
import clientesLogos from "@/assets/clients/clientes-heat.svg";

export default function ClientLogosSection() {
  return (
    <section className="bg-[#0A0A0B] px-6 md:px-12 py-12 md:py-14 border-y border-white/[0.04]">
      <div className="mx-auto max-w-[1180px] flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-white/50 text-[11px] font-semibold tracking-[0.22em] uppercase mb-6 text-center"
        >
          +350 negocios confían en HEAT
          <span className="hidden sm:inline"> · LATAM y EEUU</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="relative w-full max-w-[920px]"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          }}
        >
          <img
            src={clientesLogos}
            alt="Clientes de HEAT — Ztyle, PrintMe, La Santoría, COCH, Wolford, PROMIXX, DMOOV, CREW, Ready, Concepto Blanco, MARENGO, Todo Cotillón, SHAKS, XMIAMI, PALMETTO, Mr. Detailing, Mr. Shopper, Barquillos, GoSmile, Century 21"
            className="block w-full h-auto select-none pointer-events-none opacity-85 hover:opacity-100 transition-opacity duration-500"
            draggable={false}
          />
        </motion.div>
      </div>
    </section>
  );
}
