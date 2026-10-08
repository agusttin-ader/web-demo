export const PHONE_E164 = "+5491168696491";
export const WHATSAPP_NUMBER = "5491168696491";
export const EMAIL = "agusttin.dev@gmail.com";
export const INSTAGRAM_URL = "https://www.instagram.com/agustinader.dev/";
export const LINKEDIN_URL = "https://www.linkedin.com/in/agustin-franco-ader-165770259/";

/** Isotipo (A geométrica azul) — header, footer, schema. */
export const BRAND_LOGO_SRC = "/images/logo-mark.png";

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

export type TrustLogo = {
  id: string;
  src: string;
  alt: string;
  href: string;
  /** Logo blanco en PNG — en superficies claras se muestra en negro vía CSS */
  trustMonoOnLight?: boolean;
};

export const TRUST_LOGOS: readonly TrustLogo[] = [
  {
    id: "rhinoscopy",
    src: "/images/logos/rhinoscopy-logo-hero-sombra.png",
    alt: "Rhinoscopy",
    href: "https://www.rhinoscopy.com.ar/",
  },
  {
    id: "alo-patagonia",
    src: "/images/logos/alopatagonia-dark.png",
    alt: "Alo Patagonia",
    href: "https://www.alopatagonia.com/",
  },
  {
    id: "la-guarida",
    src: "/images/logos/laguarida.png",
    alt: "La Guarida Instrumentos",
    href: "https://www.laguaridainstrumentos.com/",
  },
  {
    id: "dra-karla-armijos",
    src: "/images/logos/karmijos-dark.png",
    alt: "Dra. Karla Armijos",
    href: "https://www.drakarmijos.com/",
  },
  {
    id: "dr-lopez-moris",
    src: "/images/logos/lopezmoris.png",
    alt: "Dr. Carlos López Moris",
    href: "https://drlopezmoris.com/",
    trustMonoOnLight: true,
  },
];
