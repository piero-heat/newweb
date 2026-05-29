import {
  SiMeta,
  SiShopify,
  SiAppstore,
  SiGoogleplay,
  SiMacos,
} from "@icons-pack/react-simple-icons";
import logo from "@/assets/logo.png";

type FooterLink = {
  label: string;
  href: string;
  /** Open in new tab if true */
  external?: boolean;
};

const COLUMNS: { title: string; links: FooterLink[] }[] = [
  {
    title: "PRODUCTO",
    links: [
      { label: "HEAT IA", href: "/#planes" },
      { label: "Performance ADS", href: "/perform-ads" },
      { label: "Páginas Web", href: "/desarrollo-web" },
    ],
  },
  {
    title: "EMPRESA",
    links: [
      { label: "Nosotros", href: "/nosotros" },
      { label: "Casos de éxito", href: "/#casos" },
      { label: "Partners", href: "/partners" },
      { label: "Contacto", href: "/#demo" },
    ],
  },
  {
    title: "RECURSOS",
    links: [
      {
        label: "Portal Clientes",
        href: "https://app.heatlatam.com",
        external: true,
      },
      {
        label: "Soporte WhatsApp",
        href: "https://wa.me/56978919125",
        external: true,
      },
      { label: "Términos", href: "/terminos" },
      { label: "Privacidad", href: "/privacidad" },
    ],
  },
];

type AppBadgeProps = {
  href: string;
  label1: string;
  label2: string;
  hint?: string;
  iconColor: string;
  glowColor: string;
  children: React.ReactNode;
};

function AppBadge({
  href,
  label1,
  label2,
  hint,
  iconColor,
  glowColor,
  children,
}: AppBadgeProps) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-black px-3.5 py-2 transition-all duration-400 ease-out hover:border-white/25 hover:bg-[#0f0f0f] relative"
      style={{
        ["--icon-color" as never]: iconColor,
        ["--glow-color" as never]: glowColor,
      }}
      title={hint}
    >
      <span className="shrink-0 text-white/70 group-hover:text-[var(--icon-color)] transition-colors duration-400 [&_svg]:transition-colors [&_svg]:duration-400">
        {children}
      </span>
      <div className="leading-tight text-left">
        <p className="text-[8px] font-medium tracking-[0.14em] text-white/60 group-hover:text-white/80 transition-colors">
          {label1}
        </p>
        <p className="text-[12px] font-semibold text-white/90 group-hover:text-white transition-colors leading-tight">
          {label2}
        </p>
      </div>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{
          boxShadow: `0 8px 28px -6px var(--glow-color)`,
        }}
      />
    </a>
  );
}

type PartnerBadgeProps = {
  href: string;
  title: string;
  brandColor: string;
  line1: string;
  line2: string;
  children: React.ReactNode;
};

function PartnerBadge({
  href,
  title,
  brandColor,
  line1,
  line2,
  children,
}: PartnerBadgeProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      className="group inline-flex items-center gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3.5 py-2 transition-all duration-400 ease-out hover:border-white/15 hover:bg-white/[0.04]"
      style={{
        ["--brand-color" as never]: brandColor,
      }}
    >
      <span className="shrink-0 text-white/40 group-hover:text-[var(--brand-color)] transition-colors duration-400">
        {children}
      </span>
      <div className="leading-tight text-left">
        <p className="text-[9px] font-semibold tracking-[0.16em] text-white/50 group-hover:text-white/80 transition-colors">
          {line1}
        </p>
        <p className="text-[9px] font-semibold tracking-[0.16em] text-white/50 group-hover:text-white/80 transition-colors">
          {line2}
        </p>
      </div>
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0B] border-t border-white/5 px-6 md:px-12 pt-16 pb-10">
      {/* Row 1 — Logo + description + 3 columns */}
      <div className="mx-auto max-w-[1180px] grid grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-white/[0.06]">
        <div className="col-span-2 md:col-span-1">
          <img src={logo} alt="HEAT" style={{ height: 32 }} />
          <p className="mt-5 text-sm text-gray-400 leading-relaxed max-w-xs">
            Plataforma de Agentes de IA + CRM para automatizar ventas y
            atención 24/7 en LATAM y EEUU.
          </p>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <p className="text-xs font-semibold tracking-[0.18em] text-white/50">
              {col.title}
            </p>
            <ul className="mt-5 space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={
                      link.external ? "noopener noreferrer" : undefined
                    }
                    className="text-sm text-gray-300 hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Row 2 — Partners (left) + App downloads (right) */}
      <div className="mx-auto max-w-[1180px] py-10 grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-12 items-start border-b border-white/[0.06]">
        <div>
          <p className="text-[10px] font-semibold tracking-[0.22em] text-white/40 mb-3">
            PARTNERS · CERTIFICACIONES
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <PartnerBadge
              href="https://www.facebook.com/business/partner-directory"
              title="Meta Tech Provider"
              brandColor="#1877F2"
              line1="META"
              line2="TECH PROVIDER"
            >
              <SiMeta size={22} color="currentColor" />
            </PartnerBadge>
            <PartnerBadge
              href="https://www.shopify.com/partners"
              title="Shopify Partner"
              brandColor="#95BF46"
              line1="SHOPIFY"
              line2="PARTNER"
            >
              <SiShopify size={22} color="currentColor" />
            </PartnerBadge>
          </div>
        </div>

        <div className="lg:text-right">
          <p className="text-[10px] font-semibold tracking-[0.22em] text-white/40 mb-3">
            DESCARGÁ HEAT
          </p>
          <div className="flex flex-wrap items-center gap-3 lg:justify-end">
            <a
              href="#"
              className="group inline-flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-black px-3.5 py-2 transition-all duration-400 ease-out hover:border-white/25 hover:bg-[#0f0f0f] hover:shadow-[0_8px_28px_-6px_rgba(10,132,255,0.35)] relative"
              title="App Store · disponible"
            >
              <span className="shrink-0 text-[#0A84FF]">
                <SiAppstore size={22} color="currentColor" />
              </span>
              <div className="leading-tight text-left">
                <p className="text-[8px] font-medium tracking-[0.14em] text-white/60 group-hover:text-white/80 transition-colors">
                  DESCARGA EN
                </p>
                <p className="text-[12px] font-semibold text-white/90 group-hover:text-white transition-colors leading-tight">
                  App Store
                </p>
              </div>
            </a>
            <AppBadge
              href="#"
              label1="DESCARGA PARA"
              label2="Mac · Desktop"
              hint="App Desktop · disponible"
              iconColor="#FFFFFF"
              glowColor="rgba(255,255,255,0.20)"
            >
              <SiMacos size={22} color="currentColor" />
            </AppBadge>
            <AppBadge
              href="#"
              label1="PRÓXIMAMENTE EN"
              label2="Google Play"
              hint="Google Play · próximamente"
              iconColor="#34A853"
              glowColor="rgba(52,168,83,0.30)"
            >
              <SiGoogleplay size={22} color="currentColor" />
            </AppBadge>
          </div>
        </div>
      </div>

      {/* Row 3 — Copyright */}
      <div className="mx-auto max-w-[1180px] pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-gray-500">
        <p>© 2026 HEAT™ · Todos los derechos reservados · hola@heatlatam.com</p>
        <div className="flex items-center gap-5">
          <a href="/terminos" className="hover:text-gray-300 transition-colors">
            Términos
          </a>
          <a
            href="/privacidad"
            className="hover:text-gray-300 transition-colors"
          >
            Privacidad
          </a>
        </div>
      </div>
    </footer>
  );
}
