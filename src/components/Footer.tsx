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
            Plataforma de Agentes de IA + CRM para automatizar ventas y atención
            24/7 en LATAM y EEUU.
          </p>
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
