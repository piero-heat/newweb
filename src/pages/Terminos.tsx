import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* Términos y Condiciones — borrador legal.
 * Placeholders entre [CORCHETES] deben ser reemplazados por los datos
 * reales de la entidad antes de ir a producción legal. */

export default function Terminos() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      <section className="bg-[#0A0A0B] px-6 md:px-12 py-16 md:py-20">
        <div className="mx-auto max-w-[820px]">
          <p className="text-xs font-medium tracking-[0.18em] text-white/50 mb-4">
            📄 LEGAL
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-medium text-white tracking-tight mb-3 leading-tight">
            Términos y Condiciones
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed mb-12">
            Última actualización: mayo de 2026 · Vigentes para todos los
            usuarios y clientes de la plataforma HEAT IA.
          </p>

          <article className="prose prose-invert max-w-none">
            <Section
              n="1"
              title="Aceptación"
              body={
                <>
                  Al acceder o utilizar la plataforma HEAT IA, los servicios
                  de agencia y/o cualquier herramienta provista por{" "}
                  <em>[NOMBRE LEGAL DE LA EMPRESA — ej. HEAT IA LATAM SpA]</em>,{" "}
                  <em>[RUT]</em>, con domicilio en{" "}
                  <em>[DIRECCIÓN COMERCIAL — Santiago, Chile]</em> (en adelante
                  "HEAT"), el usuario o cliente declara haber leído, entendido
                  y aceptado íntegramente los presentes Términos y
                  Condiciones.
                </>
              }
            />

            <Section
              n="2"
              title="Servicios"
              body={
                <>
                  HEAT ofrece servicios de software (plataforma de Agentes de
                  IA + CRM) y servicios de agencia digital (gestión de
                  campañas en Meta, producción de creatividades, consultoría).
                  La descripción específica de cada servicio, sus alcances,
                  precios y plazos se detallan en la propuesta comercial,
                  contrato u orden de servicio firmados con cada cliente.
                </>
              }
            />

            <Section
              n="3"
              title="Planes y pagos"
              body={
                <>
                  Los planes Standard, Pro y Advance se facturan en dólares
                  estadounidenses (USD) en ciclos mensuales o anuales según el
                  contrato. La inversión publicitaria en plataformas
                  externas (Meta, Google, etc.) se paga directamente por el
                  cliente a esas plataformas con su propio medio de pago, y
                  no está incluida en el fee de HEAT. Los pagos atrasados
                  pueden suspender temporalmente el acceso al servicio.
                </>
              }
            />

            <Section
              n="4"
              title="Propiedad intelectual"
              body={
                <>
                  La plataforma HEAT IA, su código, diseño, marca, prompts,
                  agentes pre-configurados y documentación son propiedad
                  exclusiva de HEAT. El cliente conserva la propiedad de su
                  data (contactos, conversaciones, contenidos cargados). Las
                  creatividades producidas por HEAT como parte de un servicio
                  contratado son propiedad del cliente una vez pagada la
                  totalidad del proyecto.
                </>
              }
            />

            <Section
              n="5"
              title="Datos de clientes y usuarios finales"
              body={
                <>
                  HEAT procesa datos personales en nombre del cliente
                  (controlador) siguiendo la{" "}
                  <a href="/privacidad" className="text-cyan-300 hover:underline">
                    Política de Privacidad
                  </a>{" "}
                  y la legislación aplicable (Ley 19.628 de Chile, GDPR cuando
                  aplique). El cliente garantiza haber obtenido los
                  consentimientos necesarios de sus usuarios finales para que
                  HEAT pueda procesar sus datos.
                </>
              }
            />

            <Section
              n="6"
              title="Uso aceptable"
              body={
                <>
                  El cliente se compromete a no usar HEAT para enviar spam,
                  contenido ilegal, engañoso, fraudulento o que infrinja
                  derechos de terceros. HEAT puede suspender o terminar
                  cuentas que violen estas reglas, leyes locales o las
                  políticas de las plataformas integradas (WhatsApp Business
                  API, Meta, etc.).
                </>
              }
            />

            <Section
              n="7"
              title="Resultados y garantías"
              body={
                <>
                  HEAT trabaja con metodología comprobada y métricas medibles
                  (CPA, ROAS, calidad de leads). No obstante, los resultados
                  publicitarios dependen de múltiples factores externos
                  (presupuesto, oferta, vertical, competencia, plataformas
                  externas). HEAT no garantiza un retorno específico de
                  inversión. El cliente acepta este principio antes de
                  contratar.
                </>
              }
            />

            <Section
              n="8"
              title="Disponibilidad del servicio"
              body={
                <>
                  HEAT compromete sus mejores esfuerzos para mantener una
                  disponibilidad superior al 99% mensual. Pueden ocurrir
                  ventanas de mantenimiento o interrupciones por causas de
                  fuerza mayor (caídas de Meta API, WhatsApp API, AWS u
                  otros proveedores). HEAT no responde por fallos de servicios
                  de terceros.
                </>
              }
            />

            <Section
              n="9"
              title="Cancelación"
              body={
                <>
                  Los planes mensuales pueden cancelarse con un aviso de 15
                  días corridos antes del próximo ciclo. Los servicios de
                  agencia con contrato a plazo definido se rigen por las
                  cláusulas específicas firmadas. No se reembolsan ciclos ya
                  facturados.
                </>
              }
            />

            <Section
              n="10"
              title="Modificaciones"
              body={
                <>
                  HEAT puede actualizar estos términos en cualquier momento.
                  Los cambios sustanciales serán comunicados con al menos 30
                  días de anticipación al email registrado del cliente.
                </>
              }
            />

            <Section
              n="11"
              title="Ley aplicable"
              body={
                <>
                  Estos términos se rigen por las leyes de la República de
                  Chile. Cualquier controversia se someterá a los tribunales
                  ordinarios de Santiago, sin perjuicio de la jurisdicción que
                  pueda aplicar para clientes fuera de Chile según el contrato
                  firmado.
                </>
              }
            />

            <Section
              n="12"
              title="Contacto legal"
              body={
                <>
                  Cualquier consulta sobre estos términos se puede enviar a{" "}
                  <a
                    href="mailto:hola@heatlatam.com"
                    className="text-cyan-300 hover:underline"
                  >
                    hola@heatlatam.com
                  </a>{" "}
                  con asunto "Legal — Términos". Respondemos en un plazo
                  máximo de 5 días hábiles.
                </>
              }
            />
          </article>

          <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <p className="text-xs text-gray-500 leading-relaxed">
              ⚠️ Este documento es un borrador estándar. Antes de operar
              comercialmente, recomendamos revisarlo con un abogado para
              completar los datos legales específicos (entidad, RUT,
              dirección) y adaptarlo a las cláusulas específicas de tus
              contratos con clientes.
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
      <p className="text-gray-300 text-[15px] leading-7">{body}</p>
    </section>
  );
}
