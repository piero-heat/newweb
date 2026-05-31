import { Link, useLocation } from "react-router-dom";
import { ExternalLink, Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import logo from "@/assets/logo.png";
import CalendarModal from "@/components/CalendarModal";

type NavChild = { label: string; to: string };
type NavItem = { label: string; to: string; children?: NavChild[] };

const ITEMS: NavItem[] = [
  { label: "HEAT", to: "/" },
  { label: "Agentes IA", to: "/#planes" },
  { label: "Performance ADS", to: "/perform-ads" },
  { label: "Páginas Web", to: "/desarrollo-web" },
  {
    label: "HEAT Life",
    to: "/heat-life",
    children: [
      { label: "Nosotros", to: "/nosotros" },
      { label: "Partners", to: "/partners" },
      { label: "Careers", to: "/careers" },
    ],
  },
];

/* ── Link simple del navbar (desktop) ── */
function NavLink({ item, active }: { item: NavItem; active: boolean }) {
  return (
    <Link
      to={item.to}
      className={`relative text-sm group transition-colors ${
        active ? "text-foreground" : "text-foreground/80 hover:text-foreground"
      }`}
    >
      {item.label}
      <span
        className={`absolute -bottom-1 left-0 right-0 h-px bg-foreground/60 transition-transform duration-300 origin-left ${
          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        }`}
      />
    </Link>
  );
}

/* ── Item con dropdown (HEAT Life) — desktop ── */
function NavDropdown({ item, pathname }: { item: NavItem; pathname: string }) {
  const [open, setOpen] = useState(false);
  const active =
    pathname === item.to ||
    (item.children?.some((c) => c.to === pathname) ?? false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        to={item.to}
        className={`relative inline-flex items-center gap-1 text-sm group transition-colors ${
          active ? "text-foreground" : "text-foreground/80 hover:text-foreground"
        }`}
      >
        {item.label}
        <ChevronDown
          size={13}
          className={`opacity-60 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
        <span
          className={`absolute -bottom-1 left-0 right-5 h-px bg-foreground/60 transition-transform duration-300 origin-left ${
            active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
          }`}
        />
      </Link>

      <AnimatePresence>
        {open && item.children && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            // pt-3 = puente invisible para no perder el hover entre el
            // label y el panel
            className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50"
          >
            <div className="min-w-[180px] rounded-2xl border border-white/10 bg-[#0E0E14]/95 backdrop-blur-xl p-1.5 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.8)]">
              {item.children.map((c) => (
                <Link
                  key={c.to}
                  to={c.to}
                  className={`block rounded-xl px-3.5 py-2.5 text-sm transition-colors ${
                    pathname === c.to
                      ? "bg-white/[0.06] text-foreground font-medium"
                      : "text-foreground/80 hover:bg-white/[0.05] hover:text-foreground"
                  }`}
                >
                  {c.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const { pathname } = useLocation();
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
          {ITEMS.map((item) =>
            item.children ? (
              <NavDropdown key={item.label} item={item} pathname={pathname} />
            ) : (
              <NavLink
                key={item.label}
                item={item}
                active={pathname === item.to}
              />
            )
          )}
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
                  const isCurrent = pathname === item.to;
                  const linkClass = `flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] transition-colors ${
                    isCurrent
                      ? "bg-white/[0.06] text-foreground font-medium"
                      : "text-foreground/85 hover:bg-white/[0.04] hover:text-foreground"
                  }`;
                  return (
                    <div key={item.label}>
                      <Link to={item.to} className={linkClass}>
                        {item.label}
                      </Link>
                      {/* Sub-items (HEAT Life) indentados */}
                      {item.children && (
                        <div className="ml-3 mb-1 mt-0.5 border-l border-white/[0.08] pl-3 flex flex-col">
                          {item.children.map((c) => (
                            <Link
                              key={c.to}
                              to={c.to}
                              className={`rounded-lg px-3 py-2.5 text-[14px] transition-colors ${
                                pathname === c.to
                                  ? "text-foreground font-medium"
                                  : "text-foreground/70 hover:text-foreground hover:bg-white/[0.03]"
                              }`}
                            >
                              {c.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
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
