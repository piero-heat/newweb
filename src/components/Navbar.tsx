import { Link, useLocation } from "react-router-dom";
import { ExternalLink, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import logo from "@/assets/logo.png";
import CalendarModal from "@/components/CalendarModal";

const ITEMS: { label: string; anchor: string; isRoute?: boolean }[] = [
  { label: "Precios IA", anchor: "#planes" },
  { label: "Performance ADS", anchor: "/perform-ads", isRoute: true },
  { label: "Desarrollo web", anchor: "/desarrollo-web", isRoute: true },
  { label: "Nosotros", anchor: "/nosotros", isRoute: true },
  { label: "Partners", anchor: "/partners", isRoute: true },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const onHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [calOpen, setCalOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => setOpen(false), [pathname]);

  // Lock body scroll while open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="w-full py-4 md:py-5 px-5 md:px-8 flex flex-row justify-between items-center relative z-40">
        <Link to="/" className="flex items-center shrink-0">
          <img src={logo} alt="HEAT" className="h-7 md:h-8 w-auto" />
        </Link>

        {/* Desktop nav */}
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

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://app.heatlatam.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 hover:border-white/35 text-foreground/80 hover:text-foreground text-xs font-medium px-4 py-2 transition-all duration-300"
          >
            Portal clientes
            <ExternalLink size={12} className="opacity-70" />
          </a>

          <button
            type="button"
            onClick={() => setCalOpen(true)}
            className="group relative inline-flex items-center justify-center rounded-full liquid-glass text-foreground text-sm font-medium px-5 py-2 overflow-hidden transition-all duration-500 ease-out hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.35)]"
          >
            <span
              aria-hidden
              className="absolute inset-0 rounded-full bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"
            />
            <span className="relative z-10 transition-colors duration-500 ease-out group-hover:text-background">
              Agendar Demo
            </span>
          </button>
        </div>

        {/* Mobile: tiny Demo CTA + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setCalOpen(true)}
            className="inline-flex items-center justify-center rounded-full liquid-glass text-foreground text-[12px] font-medium px-3.5 py-1.5"
          >
            Demo
          </button>
          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-foreground hover:bg-white/[0.06] transition-colors"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      <div className="relative z-30 mt-[3px] h-px w-full bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />

      {/* Mobile menu — full-screen drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="md:hidden fixed inset-0 z-30 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              key="drawer"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
              className="md:hidden fixed left-3 right-3 top-[68px] z-40 rounded-2xl border border-white/10 bg-[#0E0E14]/95 backdrop-blur-xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]"
            >
              <nav className="flex flex-col p-2">
                {ITEMS.map((item) => {
                  const isCurrent = item.isRoute && pathname === item.anchor;
                  const linkClass = `flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] transition-colors ${
                    isCurrent
                      ? "bg-white/[0.06] text-foreground font-medium"
                      : "text-foreground/85 hover:bg-white/[0.04] hover:text-foreground"
                  }`;
                  if (item.isRoute) {
                    return (
                      <Link key={item.label} to={item.anchor} className={linkClass}>
                        {item.label}
                      </Link>
                    );
                  }
                  const href = onHome ? item.anchor : `/${item.anchor}`;
                  return (
                    <a
                      key={item.label}
                      href={href}
                      onClick={() => setOpen(false)}
                      className={linkClass}
                    >
                      {item.label}
                    </a>
                  );
                })}

                <div className="mt-2 pt-3 border-t border-white/[0.06] flex flex-col gap-2 px-2 pb-2">
                  <a
                    href="https://app.heatlatam.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/15 text-foreground/85 text-sm font-medium px-4 py-2.5 transition-all duration-300 hover:border-white/35"
                  >
                    Portal clientes
                    <ExternalLink size={12} className="opacity-70" />
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setOpen(false);
                      setCalOpen(true);
                    }}
                    className="inline-flex items-center justify-center rounded-full bg-foreground text-background text-sm font-medium px-4 py-2.5"
                  >
                    Agendar Demo
                  </button>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Calendar popup global — disparado desde cualquier "Agendar Demo" */}
      <CalendarModal open={calOpen} onClose={() => setCalOpen(false)} />
    </>
  );
}
