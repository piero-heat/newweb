import type { Context } from "@netlify/functions";

type Role = "user" | "assistant";
type Msg = { role: Role; content: string };

const MODEL = "claude-haiku-4-5-20251001";
const MAX_TOKENS = 220;
const MAX_HISTORY = 16;
const MAX_MSG_CHARS = 600;

const SYSTEMS: Record<string, string> = {
  clinica: `Sos la recepción virtual de "Clínica Sonríe", una clínica dental en Chile/LATAM.
Tu trabajo es agendar citas y resolver consultas básicas.

REGLAS:
- Tono cálido pero profesional. Español Chile/LATAM.
- Conciso: máximo 2-3 frases por respuesta. Nunca párrafos largos.
- Antes de agendar, preguntá: motivo (limpieza, ortodoncia, urgencia…) y si es primera visita o paciente recurrente.
- Cuando agendes, ofrecé SIEMPRE 2 horarios concretos para que elija (ej: "mañana 10:00 AM" o "viernes 15:00").
- Cuando confirmes una cita: día + hora + aviso de recordatorio. Usá emoji 🦷 ocasionalmente.
- NO inventes precios exactos. Si preguntan: "Un especialista te confirma el detalle, podemos agendar y allí lo vemos".
- Si preguntan algo fuera de lo dental, derivá amable: "Para eso te conecto con un humano del equipo".
- NO menciones que sos una IA de HEAT ni hables de tecnología. Sos parte de la clínica.`,

  auto: `Sos vendedor virtual de "AutoStar Concesionaria" en Chile/LATAM.
Tu trabajo es calificar leads y agendar test drives.

REGLAS:
- Tono confiable, comercial pero no agresivo. Español Chile/LATAM.
- Conciso: 2-3 frases máximo por respuesta.
- Antes de ofrecer modelos, preguntá: uso (ciudad / familia / trabajo), presupuesto aproximado, si financian o pagan contado.
- Modelos genéricos que manejás: SUV compacta, sedán mediano, camioneta de trabajo, eléctrico/híbrido.
- Una vez calificado, ofrecé AGENDAR TEST DRIVE con 2 horarios concretos.
- NO inventes precios. "Cotización exacta te la pasa el ejecutivo en el test drive".
- Si preguntan cosas fuera del rubro automotor, derivá amable.
- NO menciones HEAT ni que sos una IA. Sos parte de AutoStar. Emoji 🚗 ocasional.`,

  inmo: `Sos asesor virtual de "Hogar Inmobiliaria" en Chile/LATAM.
Tu trabajo es calificar leads y agendar visitas a propiedades.

REGLAS:
- Tono profesional, cercano. Español Chile/LATAM.
- Conciso: 2-3 frases máximo.
- Antes de mostrar propiedades preguntá: arriendo o compra, presupuesto aproximado, zona/comuna preferida, dormitorios necesarios, cuándo necesitan mudarse.
- Hablá en términos genéricos ("Tengo varias opciones en el rango que decís"). NO inventes propiedades específicas con direcciones.
- Una vez calificado, ofrecé AGENDAR VISITA con 2 opciones de horario.
- Si preguntan cosas fuera de inmuebles, derivá amable.
- NO menciones HEAT ni que sos una IA. Sos parte de la inmobiliaria. Emoji 🏠 ocasional.`,

  servicios: `Sos comercial virtual de "Pulse Agencia Digital" en Chile/LATAM.
Tu trabajo es calificar leads y agendar llamadas de descubrimiento.

REGLAS:
- Tono profesional, consultivo. Español Chile/LATAM.
- Conciso: 2-3 frases máximo.
- Antes de proponer servicios, preguntá: qué problema/objetivo tienen, presupuesto mensual aproximado, timeline (urgente / explorando).
- Servicios genéricos que ofrecés: diseño web, branding, paid ads, contenido, automatización.
- Una vez calificado, ofrecé AGENDAR LLAMADA de 30 min con 2 horarios concretos.
- NO inventes precios exactos. "Después de la llamada armamos una propuesta a tu medida".
- Si preguntan cosas fuera del rubro agencia, derivá amable.
- NO menciones HEAT ni que sos una IA. Sos parte de Pulse. Emoji ⚡ ocasional.`,
};

function jsonResp(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}

export default async (req: Request, _ctx: Context) => {
  if (req.method !== "POST") {
    return jsonResp({ error: "method_not_allowed" }, 405);
  }

  let payload: { industry?: string; messages?: Msg[] };
  try {
    payload = await req.json();
  } catch {
    return jsonResp({ error: "invalid_json" }, 400);
  }

  const { industry, messages } = payload;

  if (!industry || typeof industry !== "string" || !SYSTEMS[industry]) {
    return jsonResp({ error: "invalid_industry" }, 400);
  }
  if (
    !Array.isArray(messages) ||
    messages.length === 0 ||
    messages.length > MAX_HISTORY
  ) {
    return jsonResp({ error: "invalid_messages_length" }, 400);
  }
  for (const m of messages) {
    if (
      !m ||
      (m.role !== "user" && m.role !== "assistant") ||
      typeof m.content !== "string" ||
      m.content.trim().length === 0 ||
      m.content.length > MAX_MSG_CHARS
    ) {
      return jsonResp({ error: "invalid_message_shape" }, 400);
    }
  }
  if (messages[messages.length - 1].role !== "user") {
    return jsonResp({ error: "last_message_must_be_user" }, 400);
  }

  const apiKey =
    process.env.ANTHROPIC_API_KEY ??
    (typeof Netlify !== "undefined" ? Netlify.env.get("ANTHROPIC_API_KEY") : undefined);
  if (!apiKey) {
    console.error("Missing ANTHROPIC_API_KEY in env");
    return jsonResp({ error: "server_misconfigured" }, 500);
  }
  // Diagnostic log (no key exposure): length + prefix + presence of whitespace/newline
  console.log(
    "Key check:",
    "len=" + apiKey.length,
    "prefix=" + apiKey.slice(0, 12),
    "suffix=" + apiKey.slice(-6),
    "hasWS=" + /\s/.test(apiKey),
  );

  try {
    const upstream = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: MAX_TOKENS,
        temperature: 0.7,
        system: SYSTEMS[industry],
        messages: messages.map((m) => ({ role: m.role, content: m.content })),
      }),
    });

    if (!upstream.ok) {
      const errText = await upstream.text();
      console.error("Anthropic error:", upstream.status, errText);
      return jsonResp({ error: "upstream_error" }, 502);
    }

    const data = (await upstream.json()) as {
      content?: { type: string; text?: string }[];
    };
    const reply =
      data.content
        ?.filter((c) => c.type === "text")
        .map((c) => c.text ?? "")
        .join("\n")
        .trim() || "Disculpá, no pude responder en este momento.";

    return jsonResp({ reply });
  } catch (e) {
    console.error("Function exception:", e);
    return jsonResp({ error: "internal_error" }, 500);
  }
};
