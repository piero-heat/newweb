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
  SiGooglecalendar,
  SiGoogleforms,
  SiGooglemaps,
  SiStripe,
  SiPaypal,
  SiSquare,
  SiXero,
  SiQuickbooks,
  SiHubspot,
  SiNotion,
  SiAirtable,
  SiBasecamp,
  SiTypeform,
  SiClickup,
  SiCaldotcom,
  SiFathom,
  SiLinear,
  SiOpenrouter,
  SiMistralai,
  SiAsana,
  SiInstagram,
} from "@icons-pack/react-simple-icons";
import type { ComponentType } from "react";

type IconProps = {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
};

// ── Inline SVG fallbacks for brands not in the icon-pack ──────────
// Path data from simple-icons.org (CC0). Sized at 24×24 viewBox.

const SvgWrap = ({
  children,
  size = 24,
  color = "currentColor",
  className,
  style,
}: IconProps & { children: React.ReactNode }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    className={className}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
  >
    {children}
  </svg>
);

const SiSlackInline: ComponentType<IconProps> = (p) => (
  <SvgWrap {...p}>
    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
  </SvgWrap>
);

const SiLinkedinInline: ComponentType<IconProps> = (p) => (
  <SvgWrap {...p}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.063 2.063 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </SvgWrap>
);

const SiCanvaInline: ComponentType<IconProps> = (p) => (
  <SvgWrap {...p}>
    <path d="M11.802.002C5.555-.108.392 4.776.012 11.024c-.382 6.291 4.412 11.696 10.704 12.077 5.624.34 10.483-3.305 11.918-8.508.066-.24-.083-.481-.319-.514a.413.413 0 0 0-.45.265c-.74 2.046-2.534 3.473-4.638 3.594-1.747.1-3.235-.793-3.91-2.345-.143-.331-.04-.717.255-.927a4.66 4.66 0 0 0 1.95-3.46c.071-1.243-.398-2.43-1.243-3.193-.66-.598-1.527-.91-2.408-.88-1.788.063-3.22 1.553-3.124 3.343.066 1.227.81 2.286 1.913 2.776.327.144.476.523.34.853-.464 1.143-1.586 1.971-2.91 2.046-1.86.106-3.553-1.305-3.834-3.146-.342-2.236 1.394-4.226 3.598-4.353 2.026-.117 3.81 1.243 4.236 3.193.075.342.397.561.74.5.342-.06.566-.388.499-.73-.514-2.514-2.755-4.31-5.302-4.18-2.811.143-4.998 2.49-4.876 5.298.137 3.094 2.752 5.5 5.84 5.366.36-.015.713-.07 1.054-.158.331-.085.665.105.756.434.605 2.166 2.668 3.732 5.058 3.658 2.624-.082 4.83-1.952 5.476-4.488.04-.157.183-.27.345-.27.183 0 .339.143.354.327.143 1.69-.328 3.348-1.295 4.722-1.347 1.913-3.598 3.097-6.06 3.097H10.7c-5.61 0-10.252-4.473-10.252-9.967 0-5.494 4.642-9.973 10.252-9.973 4.84 0 9.087 3.327 9.967 7.853.04.207.224.355.434.355.246 0 .445-.214.402-.46C20.582 3.643 16.385.002 11.802.002Z" />
  </SvgWrap>
);

const SiKlaviyoInline: ComponentType<IconProps> = (p) => (
  <SvgWrap {...p}>
    <path d="M3.16 14.534l8.847-5.078 8.835 5.078a3.5 3.5 0 0 0 .353-1.59c0-.74-.247-1.474-.706-2.061L13.62 6.738a3.207 3.207 0 0 0-3.218 0L3.495 10.87A3.288 3.288 0 0 0 2.8 12.944c0 .576.124 1.131.36 1.59zm8.847-.811a3.205 3.205 0 0 0-2.659 1.39l-.952 1.39c.918 1.193 2.224 1.969 3.605 1.969 1.395 0 2.7-.787 3.617-1.969l-.952-1.39a3.146 3.146 0 0 0-2.659-1.39z" />
  </SvgWrap>
);

const SiMondayInline: ComponentType<IconProps> = (p) => (
  <SvgWrap {...p}>
    <path d="M2.66 18.913a2.66 2.66 0 0 1-2.297-1.32 2.665 2.665 0 0 1 .02-2.661L6.508 4.66a2.665 2.665 0 0 1 2.36-1.341 2.65 2.65 0 0 1 2.327 1.408 2.665 2.665 0 0 1-.083 2.696L5.001 17.612a2.66 2.66 0 0 1-2.34 1.3zm9.342 0a2.659 2.659 0 0 1-2.298-1.319 2.665 2.665 0 0 1 .021-2.662l6.124-10.272a2.664 2.664 0 0 1 2.36-1.341 2.65 2.65 0 0 1 2.328 1.408 2.665 2.665 0 0 1-.083 2.696l-6.111 10.19a2.66 2.66 0 0 1-2.341 1.3zm9.353-.018a2.668 2.668 0 0 1-2.659-2.659 2.668 2.668 0 0 1 2.659-2.658A2.668 2.668 0 0 1 24 16.236a2.668 2.668 0 0 1-2.645 2.659z" />
  </SvgWrap>
);

const SiWaveInline: ComponentType<IconProps> = (p) => (
  <SvgWrap {...p}>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.094 5.18c.554.005 1.014.34 1.224.79l3.486 7.42 1.85-3.728c.243-.49.668-.78 1.183-.79.501-.01.94.247 1.181.708l1.4 2.67c.207.395.207.835 0 1.226a1.24 1.24 0 0 1-1.085.685c-.487 0-.886-.227-1.084-.605l-.413-.787-1.85 3.726c-.232.467-.65.733-1.169.733-.526 0-.949-.273-1.18-.768l-3.494-7.434-1.852 3.73c-.243.49-.668.776-1.181.787-.504.01-.94-.247-1.184-.71l-1.4-2.667c-.205-.392-.205-.838 0-1.23.243-.464.668-.71 1.184-.71.519 0 .891.224 1.085.609l.41.786 1.85-3.725c.218-.438.595-.713 1.05-.768.039-.005.082-.006.121-.006.022-.001.044-.001.066-.002z" />
  </SvgWrap>
);

const SiClioInline: ComponentType<IconProps> = (p) => (
  <SvgWrap {...p}>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.6c-5.302 0-9.6-4.298-9.6-9.6 0-5.302 4.298-9.6 9.6-9.6 2.65 0 5.046 1.073 6.785 2.815L12 12V2.4c-5.302 0-9.6 4.298-9.6 9.6 0 5.302 4.298 9.6 9.6 9.6 5.302 0 9.6-4.298 9.6-9.6h-2.4c0 3.977-3.223 7.2-7.2 7.2z" />
  </SvgWrap>
);

const SiPrintfulInline: ComponentType<IconProps> = (p) => (
  <SvgWrap {...p}>
    <path d="M3 3v18h18V3H3zm15 15H6V6h12v12zM8 8h8v2H8V8zm0 3h8v2H8v-2zm0 3h5v2H8v-2z" />
  </SvgWrap>
);

const SiPrintifyInline: ComponentType<IconProps> = (p) => (
  <SvgWrap {...p}>
    <path d="M19.5 5.4c-1.5-1.5-3.6-2.4-5.7-2.4H10.2C8.1 3 6 3.9 4.5 5.4 3 6.9 2.1 9 2.1 11.1V21h3.6v-9.9c0-1.2.5-2.3 1.4-3.2.9-.9 2-1.4 3.1-1.4h3.6c1.1 0 2.2.5 3.1 1.4.9.9 1.4 2 1.4 3.2 0 1.2-.5 2.3-1.4 3.2-.9.9-2 1.4-3.1 1.4h-1.8v3.6h1.8c2.1 0 4.2-.9 5.7-2.4 1.5-1.5 2.4-3.6 2.4-5.7 0-2.2-.9-4.3-2.4-5.8z" />
  </SvgWrap>
);

const SiShippoInline: ComponentType<IconProps> = (p) => (
  <SvgWrap {...p}>
    <path d="M21 7l-9-4-9 4 9 4 9-4zm-9 6l-9-4v8l9 4 9-4V9l-9 4z" />
  </SvgWrap>
);

const SiShipstationInline: ComponentType<IconProps> = (p) => (
  <SvgWrap {...p}>
    <path d="M2 7v10l10 4 10-4V7L12 3 2 7zm10 12.2L4 16V8.8l8 3.2v7.2zm0-9L4 7l8-3.2L20 7l-8 3.2zm8 5.8l-8 3.2V12l8-3.2V16z" />
  </SvgWrap>
);

const SiApifyInline: ComponentType<IconProps> = (p) => (
  <SvgWrap {...p}>
    <path d="M5.038 22.498L19.516 7.4l1.815 13.064a2 2 0 0 1-1.713 2.245l-12.852 1.766a2 2 0 0 1-1.728-1.977zM20.55 5.453l-2.41-2.252a2 2 0 0 0-2.825.095L4.683 14.713a2 2 0 0 0-.487 1.842l1.293 4.946L20.55 5.453z" />
  </SvgWrap>
);

const SiManusInline: ComponentType<IconProps> = (p) => (
  <SvgWrap {...p}>
    <path d="M12 2L2 7l10 5 10-5-10-5zm0 6.5L4.5 5 12 1.5 19.5 5 12 8.5zM2 17l10 5 10-5v-7l-10 5-10-5v7zm10-2l8-4v3l-8 4-8-4v-3l8 4z" />
  </SvgWrap>
);

const SiGoogleBusinessInline: ComponentType<IconProps> = (p) => (
  <SvgWrap {...p}>
    <path d="M12 2C7.6 2 4 5.6 4 10c0 5.5 8 12 8 12s8-6.5 8-12c0-4.4-3.6-8-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
  </SvgWrap>
);

const SiContactsInline: ComponentType<IconProps> = (p) => (
  <SvgWrap {...p}>
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </SvgWrap>
);

type Brand = {
  name: string;
  category: string;
  Icon: ComponentType<IconProps>;
  color: string;
};

const INTEGRATIONS: Brand[] = [
  // ── Mensajería / Social ──
  { name: "WhatsApp Business", category: "Mensajería", Icon: SiWhatsapp, color: "#25D366" },
  { name: "Instagram", category: "Mensajería", Icon: SiInstagram, color: "#E4405F" },
  { name: "Facebook", category: "Mensajería", Icon: SiMeta, color: "#1877F2" },
  { name: "Messenger", category: "Mensajería", Icon: SiMessenger, color: "#0084FF" },
  { name: "TikTok", category: "Social", Icon: SiTiktok, color: "#FF0050" },
  { name: "LinkedIn", category: "Social", Icon: SiLinkedinInline, color: "#0A66C2" },
  { name: "Slack", category: "Equipo", Icon: SiSlackInline, color: "#4A154B" },

  // ── E-commerce ──
  { name: "Shopify", category: "E-commerce", Icon: SiShopify, color: "#7AB55C" },
  { name: "WooCommerce", category: "E-commerce", Icon: SiWoocommerce, color: "#7F54B3" },
  { name: "Printful", category: "Print-on-demand", Icon: SiPrintfulInline, color: "#FFFFFF" },
  { name: "Printify", category: "Print-on-demand", Icon: SiPrintifyInline, color: "#1AC88B" },
  { name: "Shippo", category: "Envíos", Icon: SiShippoInline, color: "#7B61FF" },
  { name: "ShipStation", category: "Envíos", Icon: SiShipstationInline, color: "#1A3760" },

  // ── Pagos ──
  { name: "Stripe", category: "Pagos", Icon: SiStripe, color: "#635BFF" },
  { name: "PayPal", category: "Pagos", Icon: SiPaypal, color: "#003087" },
  { name: "Mercado Pago", category: "Pagos", Icon: SiMercadopago, color: "#00B1EA" },
  { name: "Square", category: "Pagos", Icon: SiSquare, color: "#3E4348" },

  // ── Contabilidad ──
  { name: "QuickBooks", category: "Contabilidad", Icon: SiQuickbooks, color: "#2CA01C" },
  { name: "Xero", category: "Contabilidad", Icon: SiXero, color: "#13B5EA" },
  { name: "Wave", category: "Contabilidad", Icon: SiWaveInline, color: "#1E88E5" },

  // ── Marketing / Ads ──
  { name: "Google Ads", category: "Ads", Icon: SiGoogleads, color: "#4285F4" },
  { name: "HubSpot", category: "CRM", Icon: SiHubspot, color: "#FF7A59" },
  { name: "Klaviyo", category: "Email Marketing", Icon: SiKlaviyoInline, color: "#1E1E1E" },
  { name: "Canva", category: "Diseño", Icon: SiCanvaInline, color: "#00C4CC" },

  // ── Google ──
  { name: "Google Calendar", category: "Calendarios", Icon: SiGooglecalendar, color: "#4285F4" },
  { name: "Google Forms", category: "Formularios", Icon: SiGoogleforms, color: "#7248B9" },
  { name: "Google Business", category: "Reseñas + Mapa", Icon: SiGoogleBusinessInline, color: "#4285F4" },
  { name: "Google Maps", category: "Ubicaciones", Icon: SiGooglemaps, color: "#4285F4" },
  { name: "Google Contacts", category: "Contactos", Icon: SiContactsInline, color: "#1A73E8" },

  // ── Productividad / Proyectos ──
  { name: "Notion", category: "Productividad", Icon: SiNotion, color: "#FFFFFF" },
  { name: "Airtable", category: "Bases de datos", Icon: SiAirtable, color: "#FCB400" },
  { name: "ClickUp", category: "Proyectos", Icon: SiClickup, color: "#7B68EE" },
  { name: "Asana", category: "Proyectos", Icon: SiAsana, color: "#F06A6A" },
  { name: "Monday.com", category: "Proyectos", Icon: SiMondayInline, color: "#FF3D57" },
  { name: "Basecamp", category: "Proyectos", Icon: SiBasecamp, color: "#1D2D35" },
  { name: "Linear", category: "Issue tracking", Icon: SiLinear, color: "#5E6AD2" },
  { name: "Typeform", category: "Formularios", Icon: SiTypeform, color: "#FFFFFF" },
  { name: "Cal.com", category: "Calendarios", Icon: SiCaldotcom, color: "#FFFFFF" },
  { name: "Fathom", category: "Notas de reuniones", Icon: SiFathom, color: "#9D74F7" },

  // ── Legal / Vertical ──
  { name: "Clio", category: "Legal", Icon: SiClioInline, color: "#1F70C1" },

  // ── IA / Tooling ──
  { name: "OpenRouter", category: "LLM Gateway", Icon: SiOpenrouter, color: "#6466E9" },
  { name: "Mistral AI", category: "LLM", Icon: SiMistralai, color: "#FA520F" },
  { name: "Apify", category: "Scraping / RPA", Icon: SiApifyInline, color: "#97D700" },
  { name: "Manus", category: "AI Agent", Icon: SiManusInline, color: "#FFFFFF" },
];

function IntegrationCard({ brand, index }: { brand: Brand; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
        delay: Math.min(index * 0.015, 0.45),
      }}
      className="group relative flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 h-[120px] transition-all duration-400 ease-out hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.04]"
      style={{ ["--brand" as never]: brand.color }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{
          boxShadow: `0 14px 40px -16px var(--brand)`,
        }}
      />
      <div className="relative shrink-0 flex items-center justify-center">
        <brand.Icon
          size={30}
          color="currentColor"
          className="text-white/45 transition-all duration-400 ease-out group-hover:text-[var(--brand)] group-hover:drop-shadow-[0_0_14px_var(--brand)]"
        />
      </div>
      <div className="min-w-0 text-center">
        <p className="text-foreground text-[12.5px] font-medium tracking-tight leading-tight truncate">
          {brand.name}
        </p>
        <p className="text-gray-500 text-[10px] mt-0.5 truncate tracking-wide uppercase">
          {brand.category}
        </p>
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
          Se integra con herramientas que ya usas con un solo clic.
        </p>
      </div>

      <div className="grid w-full max-w-[1180px] grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
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
