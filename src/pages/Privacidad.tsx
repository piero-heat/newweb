import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* Política de Privacidad — borrador legal alineado con Ley 19.628 (Chile)
 * y GDPR (UE). Placeholders [CORCHETES] deben ser reemplazados por datos
 * reales del responsable de datos antes de producción legal. */

export default function Privacidad() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      <section className="bg-[#0A0A0B] px-6 md:px-12 py-16 md:py-20">
        <div className="mx-auto max-w-[820px]">
          <p className="text-xs font-medium tracking-[0.18em] text-white/50 mb-4">
            🔒 PRIVACIDAD
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight mb-3 leading-tight">
            Política de Privacidad
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed mb-12">
            Última actualización: mayo de 2026 · Tu privacidad importa. Esta
            política explica qué datos recolectamos, por qué y qué derechos
            tienes.
          </p>

          <article className="prose prose-invert max-w-none">
            <Section
              n="1"
              title="Responsable del tratamiento"
              body={
                <>
                  <em>[NOMBRE LEGAL — ej. HEAT IA LATAM SpA]</em>, RUT{" "}
                  <em>[RUT]</em>, con domicilio en{" "}
                  <em>[DIRECCIÓN — Santiago, Chile]</em>, en adelante "HEAT",
                  es la responsable del tratamiento de datos personales
                  obtenidos a través de heatlatam.com, sus subdominios y la
                  plataforma de software.
                </>
              }
            />

            <Section
              n="2"
              title="Qué datos recolectamos"
              body={
                <>
                  <strong className="text-foreground">
                    Datos que nos proporcionas directamente:
                  </strong>{" "}
                  nombre, email, teléfono, empresa, cargo, mensajes que envías
                  a través de formularios, agentes o WhatsApp.{" "}
                  <strong className="text-foreground">
                    Datos técnicos automáticos:
                  </strong>{" "}
                  dirección IP, tipo de navegador, dispositivo, páginas
                  visitadas, fuente de tráfico, cookies y similares.{" "}
                  <strong className="text-foreground">
                    Datos de uso de la plataforma:
                  </strong>{" "}
                  contactos cargados, conversaciones procesadas por agentes
                  de IA, configuraciones, métricas de campañas.
                </>
              }
            />

            <Section
              n="3"
              title="Para qué los usamos"
              body={
                <ul className="space-y-2 list-disc pl-5 marker:text-gray-600">
                  <li>Proveer los servicios contratados (software + agencia).</li>
                  <li>
                    Procesar pagos y emitir documentación tributaria
                    correspondiente.
                  </li>
                  <li>
                    Comunicarte sobre tu cuenta, actualizaciones de producto y
                    soporte técnico.
                  </li>
                  <li>
                    Enviar comunicaciones de marketing solo si diste consentimiento explícito —
                    siempre puedes darte de baja con un clic.
                  </li>
                  <li>
                    Mejorar nuestros agentes de IA y métricas internas
                    (siempre en forma agregada y anonimizada).
                  </li>
                  <li>
                    Cumplir obligaciones legales, fiscales o judiciales.
                  </li>
                </ul>
              }
            />

            <Section
              n="4"
              title="Base legal del tratamiento"
              body={
                <>
                  Procesamos tus datos sobre la base de: (a) ejecución del
                  contrato que firmaste con HEAT (cliente), (b) tu consentimiento
                  expreso para comunicaciones de marketing, (c) interés
                  legítimo en operar y mejorar el servicio, y (d) obligaciones
                  legales aplicables (Ley 19.628 de Chile; GDPR cuando opere
                  en la Unión Europea).
                </>
              }
            />

            <Section
              n="5"
              title="Con quién compartimos datos"
              body={
                <>
                  Sólo compartimos datos con proveedores estrictamente
                  necesarios para operar el servicio (procesadores de datos),
                  bajo contratos que les obligan a confidencialidad y
                  cumplimiento normativo. Algunos:
                  <ul className="space-y-1 list-disc pl-5 mt-3 marker:text-gray-600">
                    <li>
                      <strong className="text-foreground">Meta / WhatsApp:</strong>{" "}
                      para operar la WhatsApp Business API y la Conversion
                      API.
                    </li>
                    <li>
                      <strong className="text-foreground">Anthropic / OpenRouter:</strong>{" "}
                      proveedores de modelos de lenguaje (Claude, GPT) para
                      los agentes de IA.
                    </li>
                    <li>
                      <strong className="text-foreground">Netlify, AWS, Cloudflare:</strong>{" "}
                      infraestructura de hosting y CDN.
                    </li>
                    <li>
                      <strong className="text-foreground">Stripe / Mercado Pago:</strong>{" "}
                      procesamiento de pagos.
                    </li>
                  </ul>
                  Nunca vendemos datos personales a terceros. Punto.
                </>
              }
            />

            <Section
              n="6"
              title="Transferencias internacionales"
              body={
                <>
                  Algunos proveedores procesan datos fuera de Chile (EE.UU.,
                  UE). Estos países tienen marcos de protección equivalentes
                  o superiores. Para clientes en la UE, aplicamos las
                  Cláusulas Contractuales Tipo de la Comisión Europea.
                </>
              }
            />

            <Section
              n="7"
              title="Cookies y tecnologías similares"
              body={
                <>
                  Usamos cookies estrictamente necesarias para que el sitio
                  funcione y cookies analíticas (Google Analytics o
                  equivalente) para entender cómo se navega el sitio.
                  Puedes rechazar cookies analíticas desde la configuración del
                  navegador sin afectar la funcionalidad básica.
                </>
              }
            />

            <Section
              n="8"
              title="Cuánto tiempo guardamos los datos"
              body={
                <>
                  Mantenemos los datos solo el tiempo necesario para los
                  fines descritos: durante toda la relación contractual y
                  hasta 6 años después por obligaciones tributarias y
                  comerciales en Chile. Logs técnicos y conversaciones de
                  agentes IA: 24 meses máximo. Después, eliminación
                  permanente o anonimización irreversible.
                </>
              }
            />

            <Section
              n="9"
              title="Tus derechos"
              body={
                <ul className="space-y-2 list-disc pl-5 marker:text-gray-600">
                  <li>
                    <strong className="text-foreground">Acceso:</strong> saber
                    qué datos tuyos tenemos.
                  </li>
                  <li>
                    <strong className="text-foreground">Rectificación:</strong>{" "}
                    corregir datos erróneos.
                  </li>
                  <li>
                    <strong className="text-foreground">Cancelación:</strong>{" "}
                    eliminar tus datos cuando ya no sean necesarios.
                  </li>
                  <li>
                    <strong className="text-foreground">Oposición:</strong>{" "}
                    oponerte al tratamiento para marketing.
                  </li>
                  <li>
                    <strong className="text-foreground">Portabilidad:</strong>{" "}
                    recibir tus datos en formato estructurado y exportable.
                  </li>
                </ul>
              }
            />

            <Section
              n="10"
              title="Cómo ejercer tus derechos"
              body={
                <>
                  Escríbenos a{" "}
                  <a
                    href="mailto:hola@heatlatam.com"
                    className="text-cyan-300 hover:underline"
                  >
                    hola@heatlatam.com
                  </a>{" "}
                  con asunto "Privacidad — [tu solicitud]". Respondemos en
                  un plazo máximo de 30 días corridos. Si no estás conforme
                  con la respuesta, puedes acudir a la autoridad de
                  protección de datos correspondiente a tu jurisdicción.
                </>
              }
            />

            <Section
              n="11"
              title="Seguridad"
              body={
                <>
                  Implementamos medidas técnicas y organizativas razonables:
                  cifrado en tránsito (HTTPS/TLS), control de acceso por
                  roles, backups periódicos, auditoría de accesos, segregación
                  de ambientes. Ningún sistema es 100% inviolable, pero
                  hacemos lo razonable para protegerte.
                </>
              }
            />

            <Section
              n="12"
              title="Menores de edad"
              body={
                <>
                  HEAT no está dirigido a menores de 18 años. No
                  recolectamos conscientemente datos de menores. Si detectas
                  un caso, avísanos para eliminarlos.
                </>
              }
            />

            <Section
              n="13"
              title="Cambios a esta política"
              body={
                <>
                  Si modificamos esta política, publicaremos la nueva versión
                  con su fecha de actualización en esta misma página. Los
                  cambios sustanciales serán notificados al email registrado
                  de tu cuenta.
                </>
              }
            />
          </article>

          <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <p className="text-xs text-gray-500 leading-relaxed">
              ⚠️ Este documento es un borrador estándar conforme con Ley
              19.628 de Chile y principios GDPR. Antes de operar
              comercialmente, recomendamos revisarlo con un abogado para
              completar los datos del responsable (entidad legal, RUT,
              dirección) y validar las cláusulas específicas según tu
              jurisdicción real de operación.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Section({
  n,
  title,
  body,
}: {
  n: string;
  title: string;
  body: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="font-display text-xl md:text-2xl font-medium text-white tracking-tight mb-3">
        <span className="text-gray-500 mr-3">{n}.</span>
        {title}
      </h2>
      <div className="text-gray-300 text-[15px] leading-7">{body}</div>
    </section>
  );
}
