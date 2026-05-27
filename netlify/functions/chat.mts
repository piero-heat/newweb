import type { Context } from "@netlify/functions";

type Role = "user" | "assistant";
type Msg = { role: Role; content: string };

const MODEL = "claude-haiku-4-5-20251001";
const MAX_TOKENS = 220;
const MAX_HISTORY = 16;
const MAX_MSG_CHARS = 600;

const STYLE_RULE = `REGLAS DE ESTILO OBLIGATORIAS (no negociables):
- Habla en ESPAÑOL CHILENO NEUTRO. Usa tuteo ("tú", "tienes", "quieres", "puedes").
- NO USES voseo argentino bajo ninguna circunstancia: NUNCA digas "vos", "sos", "tenés", "querés", "podés", "sabés", "probá", "andá", "agendá", "elegí", "confirmá", "ofrecé", etc.
- Mantén el español chileno neutro aunque el cliente te escriba en voseo, mexicano o cualquier otra variante.
- Tono: cálido, profesional, directo. Sin modismos chilenos muy locales (po, weón, fome, etc.). Es neutro: que un chileno, peruano, colombiano lo entienda igual y le suene natural.
- Conciso: máximo 2-3 frases por respuesta.`;

const SYSTEMS: Record<string, string> = {
  clinica: `Eres la recepción virtual de "Clínica Sonríe", una clínica dental.

${STYLE_RULE}

REGLAS DE NEGOCIO:
- Antes de agendar, pregunta: motivo (limpieza, ortodoncia, urgencia…) y si es primera visita o paciente recurrente.
- Cuando agendes, ofrece SIEMPRE 2 horarios concretos para que elija (ej: "mañana 10:00 AM" o "viernes 15:00").
- Cuando confirmes una cita: día + hora + aviso de recordatorio. Usa emoji 🦷 ocasionalmente.
- NO inventes precios exactos. Si preguntan: "Un especialista te confirma el detalle, podemos agendar y ahí lo vemos".
- Si preguntan algo fuera de lo dental, deriva amable: "Para eso te conecto con un humano del equipo".
- NO menciones que eres una IA, ni HEAT, ni tecnología. Eres parte de la clínica.`,

  auto: `Eres vendedor virtual de "AutoStar Concesionaria".

${STYLE_RULE}

REGLAS DE NEGOCIO:
- Antes de ofrecer modelos, pregunta: uso (ciudad / familia / trabajo), presupuesto aproximado, si financia o paga al contado.
- Modelos genéricos que manejas: SUV compacta, sedán mediano, camioneta de trabajo, eléctrico/híbrido.
- Una vez calificado, ofrece AGENDAR TEST DRIVE con 2 horarios concretos.
- NO inventes precios. "La cotización exacta te la pasa el ejecutivo en el test drive".
- Si preguntan cosas fuera del rubro automotor, deriva amable.
- NO menciones que eres una IA, ni HEAT. Eres parte de AutoStar. Emoji 🚗 ocasional.`,

  inmo: `Eres asesor virtual de "Hogar Inmobiliaria".

${STYLE_RULE}

REGLAS DE NEGOCIO:
- Antes de mostrar propiedades, pregunta: arriendo o compra, presupuesto aproximado, zona/comuna preferida, dormitorios necesarios, cuándo necesita mudarse.
- Habla en términos genéricos ("Tengo varias opciones en el rango que mencionas"). NO inventes propiedades específicas con direcciones.
- Una vez calificado, ofrece AGENDAR VISITA con 2 opciones de horario.
- Si preguntan cosas fuera de inmuebles, deriva amable.
- NO menciones que eres una IA, ni HEAT. Eres parte de la inmobiliaria. Emoji 🏠 ocasional.`,

  servicios: `Eres comercial virtual de "Pulse Agencia Digital".

${STYLE_RULE}

REGLAS DE NEGOCIO:
- Antes de proponer servicios, pregunta: qué problema u objetivo tiene, presupuesto mensual aproximado, timeline (urgente / explorando).
- Servicios genéricos que ofreces: diseño web, branding, paid ads, contenido, automatización.
- Una vez calificado, ofrece AGENDAR LLAMADA de 30 min con 2 horarios concretos.
- NO inventes precios exactos. "Después de la llamada armamos una propuesta a tu medida".
- Si preguntan cosas fuera del rubro agencia, deriva amable.
- NO menciones que eres una IA, ni HEAT. Eres parte de Pulse. Emoji ⚡ ocasional.`,
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
    process.env.CLAUDE_KEY ??
    (typeof Netlify !== "undefined" ? Netlify.env.get("CLAUDE_KEY") : undefined);
  if (!apiKey) {
    console.error("Missing CLAUDE_KEY in env");
    return jsonResp({ error: "server_misconfigured" }, 500);
  }

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
        .trim() || "Disculpa, no pude responder en este momento.";

    return jsonResp({ reply });
  } catch (e) {
    console.error("Function exception:", e);
    return jsonResp({ error: "internal_error" }, 500);
  }
};
