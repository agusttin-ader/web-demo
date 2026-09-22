export const PHONE_E164 = "+5491168696491";
export const WHATSAPP_NUMBER = "5491168696491";
export const EMAIL = "agusttin.dev@gmail.com";
export const INSTAGRAM_URL = "https://www.instagram.com/agustinader.dev/";
export const LINKEDIN_URL = "https://www.linkedin.com/in/agustin-franco-ader-165770259/";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hola Agustín, quiero una web que me traiga más consultas."
)}`;

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const NAV_ITEMS = [
  "beneficios",
  "proyecto-real",
  "servicios",
  "planes",
  "contacto",
] as const;

export type NavItemId = (typeof NAV_ITEMS)[number];

export const TECH_STACK = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Vercel",
] as const;

export const TRUST_LOGOS = [
  { id: "rhinoscopy", src: "/images/logos/rhinoscopy-circle.png", alt: "Rhinoscopy" },
  { id: "alo-patagonia", src: "/images/logos/alopatagonia-brand.png", alt: "Alo Patagonia" },
  { id: "la-guarida", src: "/images/logos/laguarida.png", alt: "La Guarida Instrumentos" },
  { id: "dra-karla-armijos", src: "/images/logos/drakarmijos.png", alt: "Dra. Karla Armijos" },
] as const;
