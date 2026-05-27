import { Link, useLocation } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import logo from "@/assets/logo.png";

const ITEMS: { label: string; anchor: string; isRoute?: boolean }[] = [
  { label: "Precios", anchor: "#planes" },
  { label: "Integraciones", anchor: "#integraciones" },
  { label: "Performance Ads", anchor: "#performance-ads" },
  { label: "Partners", anchor: "/partners", isRoute: true },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const onHome = pathname === "/";

  return (
    <>
      <header className="w-full py-5 px-8 flex flex-row justify-between items-center relative z-30">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="HEAT" style={{ height: 32 }} />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {ITEMS.map((item) => {
            if (item.isRoute) {
              return (
                <Link
                  key={item.label}
                  to={item.anchor}
                  className={`relative text-sm group transition-colors ${
                    pathname === item.anchor
                      ? "text-foreground"
                      : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 right-0 h-px bg-foreground/60 transition-transform duration-300 origin-left ${
                      pathname === item.anchor
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            }
            const href = onHome ? item.anchor : `/${item.anchor}`;
            return (
              <a
                key={item.label}
                href={href}
                className="relative text-foreground/80 hover:text-foreground transition-colors text-sm group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-foreground/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://app.heatlatam.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-white/15 hover:border-white/35 text-foreground/80 hover:text-foreground text-xs font-medium px-4 py-2 transition-all duration-300"
          >
            Portal clientes
            <ExternalLink size={12} className="opacity-70" />
          </a>

          <a
            href={onHome ? "#demo" : "/#demo"}
            className="group relative inline-flex items-center justify-center rounded-full liquid-glass text-foreground text-sm font-medium px-5 py-2 overflow-hidden transition-all duration-500 ease-out hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.35)]"
          >
            <span
              aria-hidden
              className="absolute inset-0 rounded-full bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"
            />
            <span className="relative z-10 transition-colors duration-500 ease-out group-hover:text-background">
              Agendar Demo
            </span>
          </a>
        </div>
      </header>

      <div className="relative z-30 mt-[3px] h-px w-full bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
    </>
  );
}
