import { SiMeta, SiShopify } from "@icons-pack/react-simple-icons";
import logo from "@/assets/logo.png";

const COLUMNS: { title: string; links: string[] }[] = [
  {
    title: "PRODUCTO",
    links: ["Standard", "Pro", "Advance", "Planes y Precios"],
  },
  {
    title: "EMPRESA",
    links: ["Casos de éxito", "Contacto", "Cómo funciona"],
  },
  {
    title: "RECURSOS",
    links: ["Mi cuenta", "Soporte", "Términos", "Privacidad"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0B] border-t border-white/5 px-6 md:px-12 py-16">
      <div className="mx-auto max-w-[1080px] grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <img src={logo} alt="HEAT" style={{ height: 32 }} />
          <p className="mt-5 text-sm text-gray-400 leading-relaxed max-w-xs">
            Plataforma de Agentes de IA + CRM para automatizar ventas y
            atención 24/7 en LATAM y EEUU.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="https://www.facebook.com/business/partner-directory"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2 transition-all duration-400 ease-out hover:border-white/15 hover:bg-white/[0.04] hover:shadow-[0_8px_28px_-8px_rgba(24,119,242,0.4)]"
              title="Meta Tech Provider"
            >
              <SiMeta
                size={22}
                className="text-white/40 transition-colors duration-400 group-hover:text-[#1877F2]"
              />
              <div className="leading-tight">
                <p className="text-[9px] font-semibold tracking-[0.16em] text-white/50 group-hover:text-white/80 transition-colors">
                  META
                </p>
                <p className="text-[9px] font-semibold tracking-[0.16em] text-white/50 group-hover:text-white/80 transition-colors">
                  TECH PROVIDER
                </p>
              </div>
            </a>

            <a
              href="https://www.shopify.com/partners"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2 transition-all duration-400 ease-out hover:border-white/15 hover:bg-white/[0.04] hover:shadow-[0_8px_28px_-8px_rgba(149,191,70,0.4)]"
              title="Shopify Partner"
            >
              <SiShopify
                size={22}
                className="text-white/40 transition-colors duration-400 group-hover:text-[#95BF46]"
              />
              <div className="leading-tight">
                <p className="text-[9px] font-semibold tracking-[0.16em] text-white/50 group-hover:text-white/80 transition-colors">
                  SHOPIFY
                </p>
                <p className="text-[9px] font-semibold tracking-[0.16em] text-white/50 group-hover:text-white/80 transition-colors">
                  PARTNER
                </p>
              </div>
            </a>
          </div>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <p className="text-xs font-semibold tracking-[0.18em] text-white/50">
              {col.title}
            </p>
            <ul className="mt-5 space-y-3">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-gray-300 hover:text-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-[1080px] mt-14 pt-8 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-gray-500">
        <p>© 2026 HEAT™ · Todos los derechos reservados · hola@heatlatam.com</p>
        <div className="flex items-center gap-5">
          <a href="#" className="hover:text-gray-300 transition-colors">
            Términos
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            Privacidad
          </a>
        </div>
      </div>
    </footer>
  );
}
