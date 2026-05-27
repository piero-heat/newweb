import { motion } from "motion/react";
import {
  SiWhatsapp,
  SiMeta,
  SiShopify,
  SiWoocommerce,
  SiMercadopago,
  SiGoogleads,
  SiTiktok,
  SiMessenger,
} from "@icons-pack/react-simple-icons";
import type { ComponentType } from "react";

type IconProps = {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
};

type Brand = {
  name: string;
  subtitle: string;
  Icon: ComponentType<IconProps>;
  color: string;
};

const INTEGRATIONS: Brand[] = [
  {
    name: "WhatsApp Business API",
    subtitle: "Oficial de Meta",
    Icon: SiWhatsapp,
    color: "#25D366",
  },
  {
    name: "Facebook & Instagram",
    subtitle: "Mensajería + Ads",
    Icon: SiMeta,
    color: "#1877F2",
  },
  {
    name: "Shopify",
    subtitle: "E-commerce",
    Icon: SiShopify,
    color: "#7AB55C",
  },
  {
    name: "WooCommerce",
    subtitle: "E-commerce WordPress",
    Icon: SiWoocommerce,
    color: "#7F54B3",
  },
  {
    name: "Mercado Pago",
    subtitle: "Pagos LATAM",
    Icon: SiMercadopago,
    color: "#00AAFF",
  },
  {
    name: "Google Ads",
    subtitle: "Campañas de búsqueda",
    Icon: SiGoogleads,
    color: "#4285F4",
  },
  {
    name: "TikTok Ads",
    subtitle: "Performance + UGC",
    Icon: SiTiktok,
    color: "#FF0050",
  },
  {
    name: "Messenger",
    subtitle: "Chat directo Meta",
    Icon: SiMessenger,
    color: "#0084FF",
  },
];

function IntegrationCard({ brand, index }: { brand: Brand; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.04 }}
      className="group relative flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 transition-all duration-400 ease-out hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.04] hover:shadow-[0_12px_40px_-12px_rgba(99,102,241,0.25)]"
    >
      <div className="relative shrink-0 w-11 h-11 rounded-xl bg-white/[0.04] flex items-center justify-center overflow-hidden">
        <brand.Icon
          size={22}
          color="currentColor"
          className="text-white/40 transition-all duration-400 ease-out group-hover:text-[var(--brand)] group-hover:drop-shadow-[0_0_12px_var(--brand)]"
          style={{ ["--brand" as never]: brand.color }}
        />
      </div>
      <div className="min-w-0">
        <p className="text-foreground text-[15px] font-medium tracking-tight truncate">
          {brand.name}
        </p>
        <p className="text-gray-500 text-xs mt-0.5 truncate">{brand.subtitle}</p>
      </div>
    </motion.div>
  );
}

export default function IntegrationsSection() {
  return (
    <section
      id="integraciones"
      className="bg-[#0A0A0B] flex flex-col items-center px-6 md:px-12 py-20 md:py-24"
    >
      <div className="w-full max-w-[1080px] mb-12 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/[0.06] px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-cyan-300 mb-5">
          🔌 INTEGRACIONES
        </span>
        <h2 className="font-display font-medium text-white tracking-tight leading-[1.05] mb-4">
          <span
            style={{
              fontSize: "clamp(34px, 5vw, 64px)",
              letterSpacing: "-0.02em",
            }}
            className="block"
          >
            Conectado con
          </span>
          <span
            className="block bg-clip-text text-transparent"
            style={{
              fontSize: "clamp(34px, 5vw, 64px)",
              letterSpacing: "-0.02em",
              backgroundImage:
                "linear-gradient(to right, #7DD3FC, #06B6D4, #6366F1)",
            }}
          >
            tu ecosistema
          </span>
        </h2>
        <p className="text-gray-400 text-base md:text-lg leading-7 max-w-xl mx-auto">
          Se integra con las herramientas que ya usas. Migración incluida en la
          implementación.
        </p>
      </div>

      <div className="grid w-full max-w-[1080px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {INTEGRATIONS.map((b, i) => (
          <IntegrationCard key={b.name} brand={b} index={i} />
        ))}
      </div>

      <p className="mt-10 text-xs text-gray-500 text-center max-w-xl">
        ¿Tu herramienta no está en la lista? La conectamos vía API o webhooks
        durante la implementación. Sin costo extra.
      </p>
    </section>
  );
}
