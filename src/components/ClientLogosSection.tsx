import ztyle from "@/assets/clients/individual/ztyle.png";
import printme from "@/assets/clients/individual/printme.png";
import laSantoria from "@/assets/clients/individual/la-santoria.png";
import coch from "@/assets/clients/individual/coch.png";
import wolford from "@/assets/clients/individual/wolford.png";
import promixx from "@/assets/clients/individual/promixx.png";
import dmoov from "@/assets/clients/individual/dmoov.png";
import crew from "@/assets/clients/individual/crew.png";
import ready from "@/assets/clients/individual/ready.png";
import conceptoBlanco from "@/assets/clients/individual/concepto-blanco.png";
import marengo from "@/assets/clients/individual/marengo.png";
import todoCotillon from "@/assets/clients/individual/todo-cotillon.png";
import shaks from "@/assets/clients/individual/shaks.png";
import xmiami from "@/assets/clients/individual/xmiami.png";
import palmetto from "@/assets/clients/individual/palmetto.png";
import mrDetailing from "@/assets/clients/individual/mr-detailing.png";
import mrShopper from "@/assets/clients/individual/mr-shopper.png";
import goSmile from "@/assets/clients/individual/go-smile.png";
import century21 from "@/assets/clients/individual/century-21.png";

type ClientLogo = {
  name: string;
  src: string;
  /** Per-logo height tweak in px so the row stays visually balanced */
  h?: number;
};

// Order picked to make the marquee feel varied (mix wide + narrow logos)
const LOGOS: ClientLogo[] = [
  { name: "Ztyle", src: ztyle, h: 32 },
  { name: "GoSmile", src: goSmile, h: 44 },
  { name: "Wolford", src: wolford, h: 28 },
  { name: "PROMIXX", src: promixx, h: 26 },
  { name: "Ready", src: ready, h: 36 },
  { name: "Concepto Blanco", src: conceptoBlanco, h: 48 },
  { name: "MARENGO", src: marengo, h: 28 },
  { name: "Todo Cotillón", src: todoCotillon, h: 52 },
  { name: "SHAKS", src: shaks, h: 30 },
  { name: "XMIAMI", src: xmiami, h: 52 },
  { name: "PALMETTO", src: palmetto, h: 34 },
  { name: "Mr. Detailing", src: mrDetailing, h: 48 },
  { name: "Mr. Shopper", src: mrShopper, h: 44 },
  { name: "DMOOV", src: dmoov, h: 30 },
  { name: "CREW", src: crew, h: 38 },
  { name: "La Santoría", src: laSantoria, h: 42 },
  { name: "PrintMe", src: printme, h: 40 },
  { name: "COCH", src: coch, h: 30 },
  { name: "Century 21", src: century21, h: 48 },
];

function LogoItem({ logo }: { logo: ClientLogo }) {
  return (
    <div className="shrink-0 flex items-center justify-center px-2">
      <img
        src={logo.src}
        alt={logo.name}
        loading="lazy"
        draggable={false}
        className="block w-auto select-none opacity-60 hover:opacity-100 transition-opacity duration-400 ease-out"
        style={{ height: logo.h ?? 36 }}
      />
    </div>
  );
}

export default function ClientLogosSection() {
  return (
    <section className="bg-[#0A0A0B] px-6 md:px-12 py-12 md:py-14 border-y border-white/[0.04]">
      <div className="mx-auto max-w-[1280px] flex flex-col items-center">
        <p className="text-white/50 text-[11px] font-semibold tracking-[0.22em] uppercase mb-8 text-center">
          +350 negocios confían en HEAT
          <span className="hidden sm:inline"> · LATAM y EEUU</span>
        </p>

        <div
          className="relative w-full overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          }}
        >
          <div className="flex items-center gap-14 md:gap-16 w-max animate-marquee">
            {[...LOGOS, ...LOGOS].map((logo, i) => (
              <LogoItem key={`${logo.name}-${i}`} logo={logo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
