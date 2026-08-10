export const PHONE_E164 = "+5491168696491";
export const WHATSAPP_NUMBER = "5491168696491";
export const EMAIL = "agusttin.dev@gmail.com";
export const INSTAGRAM_URL = "https://www.instagram.com/agustinader.dev/";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hola Agustin, quiero mejorar mi web para recibir mas consultas."
)}`;

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const NAV_ITEMS = [
  { id: "beneficios", label: "Beneficios" },
  { id: "proyecto-real", label: "Proyectos" },
  { id: "servicios", label: "Servicios" },
  { id: "contacto", label: "Contacto" },
] as const;

export const TECH_STACK = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind",
  "Motion CSS",
  "Vercel",
] as const;

/** Stack mostrado en overview / bento. */
export const OVERVIEW_TECH = TECH_STACK;

export const CLIENTS = ["La Guarida Instrumentos", "Alo Patagonia"] as const;

export const CERTIFICATIONS = [
  { title: "Frontend moderno", meta: "Next.js · React · TypeScript" },
  { title: "UI orientada a conversion", meta: "Jerarquia · CTA · claridad" },
  { title: "Integracion WhatsApp", meta: "Flujo de contacto directo" },
  { title: "Performance web", meta: "Carga rapida · mobile-first" },
] as const;

export const CERTIFICATIONS_SHORT = [
  { title: "Frontend moderno", meta: "Next.js · React" },
  { title: "Conversion UX", meta: "CTA · claridad" },
  { title: "WhatsApp flows", meta: "Contacto directo" },
] as const;
