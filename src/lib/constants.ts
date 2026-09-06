export const PHONE_E164 = "+5491168696491";
export const WHATSAPP_NUMBER = "5491168696491";
export const EMAIL = "agusttin.dev@gmail.com";
export const INSTAGRAM_URL = "https://www.instagram.com/agustinader.dev/";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hola Agustín, quiero una web que me traiga más consultas."
)}`;

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const NAV_ITEMS = [
  { id: "beneficios", label: "Beneficios" },
  { id: "proyecto-real", label: "Proyectos" },
  { id: "servicios", label: "Servicios" },
  { id: "planes", label: "Planes" },
  { id: "contacto", label: "Contacto" },
] as const;

export const TECH_STACK = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Vercel",
] as const;

/** Stack mostrado en overview / bento. */
export const OVERVIEW_TECH = TECH_STACK;

export const CLIENTS = ["La Guarida Instrumentos", "Alo Patagonia", "Dra. Karla Armijos"] as const;

export const CERTIFICATIONS = [
  { title: "Frontend moderno", meta: "Next.js · React · TypeScript" },
  { title: "Webs que convierten", meta: "Orden · botones claros · lectura fácil" },
  { title: "WhatsApp integrado", meta: "Contacto directo, sin vueltas" },
  { title: "Sitios rápidos", meta: "Carga liviana · pensados para el celu" },
] as const;

export const CERTIFICATIONS_SHORT = [
  { title: "Frontend moderno", meta: "Next.js · React" },
  { title: "Webs que convierten", meta: "Claridad · contacto fácil" },
  { title: "WhatsApp integrado", meta: "Un click y te escriben" },
] as const;
