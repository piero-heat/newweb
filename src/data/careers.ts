import type { LucideIcon } from "lucide-react";
import {
  Rocket,
  Brain,
  TrendingUp,
  Coffee,
  Globe2,
  Sparkles,
  Code2,
  Target,
  Users,
} from "lucide-react";

/* ────────────────────────────────────────────────────────────── */
/* Careers data · 3 roles abiertos en HEAT IA LATAM               */
/* ────────────────────────────────────────────────────────────── */

export type RoleOffer = { icon: LucideIcon; label: string };

export type Role = {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  eyebrow: string;
  intro: string;
  about: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  offer: RoleOffer[];
  applyEmail: string;
};

const APPLY_EMAIL = "careers@heatlatam.com";

const SHARED_OFFER: RoleOffer[] = [
  { icon: Rocket, label: "Equity en el cap table de HEAT" },
  { icon: TrendingUp, label: "Compensación por encima del mercado en Chile" },
  { icon: Brain, label: "Cultura AI-first · acceso a Claude, GPT, herramientas top" },
  { icon: Coffee, label: "Oficina HEAT en Spot Kennedy, Santiago · híbrido" },
  { icon: Globe2, label: "Impacto en +350 clientes activos en LATAM y EEUU" },
  { icon: Sparkles, label: "Onboarding inmersivo · te formamos en HEAT IA Pro" },
];

export const ROLES: Role[] = [
  {
    slug: "sdr-lead",
    title: "SDR Lead",
    department: "Sales",
    location: "Santiago, Chile",
    type: "Full-time · Híbrido",
    eyebrow: "SALES · LEADERSHIP",
    intro:
      "Lidera y escala el motor de prospección outbound que está conquistando LATAM y EEUU.",
    about:
      "Como SDR Lead vas a liderar la primera línea de fuego comercial de HEAT IA. Eres responsable de diseñar el playbook outbound, formar y mentorear al equipo de SDRs, y construir la máquina de pipeline que alimenta a Account Executives. Reportas directo al Head of Sales y trabajas codo a codo con marketing, producto y CX. Es un rol con escala internacional: tus campañas activan leads en Chile, México, Colombia, Perú y EEUU.",
    responsibilities: [
      "Diseñar, ejecutar y iterar el playbook outbound de HEAT IA (cadencias multi-canal: email, WhatsApp, LinkedIn, llamadas)",
      "Liderar, mentorear y escalar un equipo de 3–6 SDRs en Chile y región",
      "Definir KPIs, dashboards y forecast semanal (meetings booked, SQLs, conversión a oportunidad)",
      "Operar y optimizar el stack de prospección: HubSpot, Apollo, Lemlist, Clay, HEAT IA propio",
      "Trabajar con marketing en la calidad del lead inbound y MQL → SQL",
      "Hacer enablement constante del equipo: rol play, library de objeciones, intros por industria",
      "Coordinar handoff impecable a Account Executives para que no se pierda velocity",
    ],
    requirements: [
      "3+ años de experiencia en SDR/BDR/sales B2B SaaS, idealmente +1 año liderando equipo",
      "Track record demostrable cerrando cuotas en SaaS (idealmente con ACV +$3K USD/año)",
      "Español nativo · inglés avanzado escrito y conversacional (clientes EEUU)",
      "Dominio de CRM (HubSpot o equivalente) + tooling de prospección moderno",
      "Mentalidad de constructor: te gusta crear el playbook, no solo ejecutarlo",
      "Bias to action, organización maniática, comunicación de impacto",
    ],
    niceToHave: [
      "Experiencia previa en AI / IA conversacional / agentes",
      "Background técnico para entender integraciones (WhatsApp Business API, CRMs)",
      "Network en C-level de retail, salud, educación, eCommerce LATAM",
      "Experiencia en startups en fase de hyper-growth (Series A → C)",
    ],
    offer: SHARED_OFFER,
    applyEmail: APPLY_EMAIL,
  },
  {
    slug: "software-engineer",
    title: "Software Engineer",
    department: "Engineering",
    location: "Santiago, Chile",
    type: "Full-time · Híbrido",
    eyebrow: "ENGINEERING · FULL-STACK",
    intro:
      "Construye la plataforma de agentes de IA + CRM que está cambiando cómo se vende en LATAM.",
    about:
      "Buscamos engineers de producto que se obsesionen con la experiencia de usuario y la velocidad. Vas a trabajar end-to-end: desde el agente de IA conversacional, pasando por el CRM, hasta los dashboards de operación en tiempo real. Stack moderno (TS / React / Node / Postgres / Redis / Anthropic + OpenAI APIs). Equipo pequeño, autonomía alta, decisiones técnicas tuyas. Cero burocracia, cero meetings de relleno.",
    responsibilities: [
      "Diseñar, implementar y mantener features de la plataforma HEAT IA (front + back)",
      "Trabajar con LLMs (Claude, GPT-4o, Gemini) — prompt engineering, routing, evals, function calling",
      "Integrar nuestro stack con WhatsApp Business API, Meta CAPI, Stripe, HubSpot y +30 sistemas",
      "Construir flows de automatización visuales (low-code builder interno)",
      "Garantizar performance, observabilidad y data integrity en escala (millones de mensajes/mes)",
      "Code reviews exigentes pero respetuosos · ownership de tu código en producción",
      "Pair con Product Specialist para resolver problemas reales de clientes",
    ],
    requirements: [
      "3+ años full-stack con TypeScript, React (Next.js o Vite) y Node",
      "Experiencia productiva con LLMs / IA generativa (API integration, prompt design, RAG)",
      "Sólido con SQL y Postgres · familiar con Redis / queues",
      "Calidad técnica: tests, observabilidad, deploys seguros, performance budget",
      "Español + inglés técnico fluido (docs, PRs, slack)",
      "Mentalidad de producto: te importa el usuario, no solo el código",
    ],
    niceToHave: [
      "Experiencia con vector DBs (pgvector, Pinecone) y frameworks tipo LangChain / LangGraph",
      "Background en startups B2B SaaS · entiendes ciclo comercial",
      "Open source contributions o side projects relevantes",
      "Has trabajado con WhatsApp Business API, Meta APIs o similares",
    ],
    offer: SHARED_OFFER,
    applyEmail: APPLY_EMAIL,
  },
  {
    slug: "product-specialist",
    title: "Product Specialist",
    department: "Product / CX",
    location: "Santiago, Chile",
    type: "Full-time · Híbrido",
    eyebrow: "PRODUCT · CUSTOMER EXPERIENCE",
    intro:
      "Sé el puente entre nuestros clientes y el producto. Haz que HEAT IA sea la plataforma más fácil de LATAM.",
    about:
      "El Product Specialist en HEAT vive entre el cliente y el equipo de producto. Onboarding técnico, configuración del agente, training del equipo del cliente, y feedback loop constante a engineering y product. Vas a trabajar con +50 clientes activos: desde clínicas dentales y retailers en Chile hasta startups en EEUU. Si te apasiona resolver problemas con IA y ver impacto en métricas de negocio, este es tu rol.",
    responsibilities: [
      "Onboarding técnico de clientes nuevos: configurar agente, integrar WhatsApp, conectar CRM",
      "Capacitar a los equipos del cliente para que saquen el 100% de HEAT IA",
      "Recopilar feedback estructurado y traducirlo a tickets accionables para engineering",
      "Co-diseñar features con product manager basado en patterns reales de uso",
      "Mantener documentación y playbooks de implementación por vertical (retail, salud, edu)",
      "Apoyar en demos enterprise junto al equipo de sales cuando se requiera",
      "Operar dashboards de health score · prevenir churn antes que pase",
    ],
    requirements: [
      "2+ años en roles de Product / CS / Implementation / Solutions Engineer en SaaS",
      "Fluidez técnica: entiendes APIs, webhooks, integraciones, no le tienes miedo a JSON",
      "Habilidad demostrada de simplificar conceptos complejos para usuarios no-técnicos",
      "Español nativo · inglés avanzado (manejas tickets y demos en ambos)",
      "Empatía radical con el cliente + mentalidad de mejora continua del producto",
      "Comodidad operando en startup: ambigüedad, velocidad, contexto cambiante",
    ],
    niceToHave: [
      "Background en AI / IA conversacional o herramientas no-code",
      "Experiencia con CRMs (HubSpot, Salesforce, GHL) o eCommerce (Shopify, WooCommerce)",
      "Capacidad de hacer prototipos rápidos (Figma, Notion, scripts simples)",
      "Conocimiento de WhatsApp Business API + integraciones Meta",
    ],
    offer: SHARED_OFFER,
    applyEmail: APPLY_EMAIL,
  },
];

/* ────────────────────────────────────────────────────────────── */
/* Why HEAT pillars                                                */
/* ────────────────────────────────────────────────────────────── */

export type WhyPillar = { icon: LucideIcon; title: string; description: string };

export const WHY_HEAT: WhyPillar[] = [
  {
    icon: Target,
    title: "Impacto desde el día 1",
    description:
      "Equipo pequeño, decisiones rápidas. Tu trabajo se ve en producción en horas, no semanas. +350 clientes en LATAM y EEUU sienten lo que construyes.",
  },
  {
    icon: Brain,
    title: "AI-first, de verdad",
    description:
      "No usamos IA como buzzword: la operamos en producción todos los días. Claude, GPT-4o, Gemini, function calling, RAG. Tu trabajo está al filo de la frontera.",
  },
  {
    icon: Rocket,
    title: "Equity + crecimiento real",
    description:
      "Compensación por encima del mercado en Chile + equity en cap table. Career path claro: tu crecimiento escala con el de HEAT.",
  },
  {
    icon: Users,
    title: "Cultura sin BS",
    description:
      "Cero meetings de relleno. Comunicación directa. Trabajo profundo. Si quieres política corporativa, esto no es para ti. Si quieres construir, vamos.",
  },
  {
    icon: Coffee,
    title: "Oficina + híbrido inteligente",
    description:
      "Spot Kennedy en Santiago para los días que necesitas equipo. Remoto los días que necesitas foco. Tú decides.",
  },
  {
    icon: Code2,
    title: "Stack moderno",
    description:
      "TypeScript, React, Node, Postgres, Anthropic API, Meta Graph, Stripe. Sin legacy code, sin deuda histórica. Cada PR mejora el producto.",
  },
];
