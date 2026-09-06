import type { Metadata } from "next";
import { projects } from "@/data/projects";
import {
  EMAIL,
  INSTAGRAM_URL,
  PHONE_E164,
  WHATSAPP_NUMBER,
} from "@/lib/constants";

export const SITE_URL = "https://www.agustinaderdev.com";
export const SITE_NAME = "Agustín Ader";
export const SITE_TAGLINE = "Landings para más consultas";

export const DEFAULT_TITLE = `${SITE_NAME} | ${SITE_TAGLINE}`;
export const DEFAULT_DESCRIPTION =
  "Armo landings claras y rápidas para negocios en Argentina. Pensadas para el celu, con WhatsApp integrado, para que te escriban de verdad.";

export const OG_TITLE = `${SITE_NAME} | Webs que traen consultas`;
export const OG_DESCRIPTION =
  "Landings simples de entender, rápidas de cargar y con contacto directo por WhatsApp. Más consultas, menos idas y vueltas.";

export const TWITTER_TITLE = DEFAULT_TITLE;
export const TWITTER_DESCRIPTION =
  "Landings para negocios que quieren más consultas y un canal propio, sin depender solo de las redes.";

export const OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Agustín Ader — Landings para más consultas por WhatsApp",
  type: "image/png",
} as const;

export const LOGO_URL = `${SITE_URL}/new-logo-transparent.webp`;
export { EMAIL, INSTAGRAM_URL, PHONE_E164 };
export const WHATSAPP_PROFILE = `https://wa.me/${WHATSAPP_NUMBER}`;

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized === "/" ? "" : normalized}`;
}

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",
  keywords: [
    "landing page Argentina",
    "desarrollador freelance Argentina",
    "web para consultas WhatsApp",
    "diseño web conversión",
    "landing page mobile first",
    "Agustín Ader",
    "desarrollo web Buenos Aires",
  ],
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon-32.png"],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "/",
    languages: {
      "es-AR": "/",
      es: "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: SITE_URL,
    siteName: `${SITE_NAME} — Landing pages`,
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE.url,
        width: OG_IMAGE.width,
        height: OG_IMAGE.height,
        alt: OG_IMAGE.alt,
        type: OG_IMAGE.type,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TWITTER_TITLE,
    description: TWITTER_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE.url,
        alt: OG_IMAGE.alt,
        width: OG_IMAGE.width,
        height: OG_IMAGE.height,
      },
    ],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    "geo.region": "AR-B",
    "geo.placename": "Buenos Aires",
  },
};

export function buildJsonLd() {
  const projectEntities = projects.map((project, index) => ({
    "@type": "CreativeWork",
    "@id": `${SITE_URL}/#project-${project.id}`,
    position: index + 1,
    name: project.title,
    description: project.description,
    image: absoluteUrl(project.image),
    url: project.demo ?? project.link ?? SITE_URL,
    creator: { "@id": `${SITE_URL}/#person` },
    about: project.client,
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: SITE_NAME,
        url: SITE_URL,
        image: {
          "@id": `${SITE_URL}/#logo`,
        },
        email: `mailto:${EMAIL}`,
        telephone: PHONE_E164,
        jobTitle: "Desarrollador web freelance",
        description: DEFAULT_DESCRIPTION,
        sameAs: [INSTAGRAM_URL, WHATSAPP_PROFILE],
        knowsAbout: [
          "Landing pages",
          "Next.js",
          "React",
          "TypeScript",
          "Conversión web",
          "Integración WhatsApp",
          "Diseño mobile-first",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Buenos Aires",
          addressCountry: "AR",
        },
        worksFor: { "@id": `${SITE_URL}/#service` },
      },
      {
        "@type": "ImageObject",
        "@id": `${SITE_URL}/#logo`,
        url: LOGO_URL,
        contentUrl: LOGO_URL,
        caption: `${SITE_NAME} logo`,
        width: 256,
        height: 256,
      },
      {
        "@type": "ImageObject",
        "@id": `${SITE_URL}/#primaryimage`,
        url: absoluteUrl(OG_IMAGE.url),
        contentUrl: absoluteUrl(OG_IMAGE.url),
        width: OG_IMAGE.width,
        height: OG_IMAGE.height,
        caption: OG_IMAGE.alt,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: DEFAULT_TITLE,
        description: DEFAULT_DESCRIPTION,
        inLanguage: "es-AR",
        publisher: { "@id": `${SITE_URL}/#person` },
        copyrightHolder: { "@id": `${SITE_URL}/#person` },
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: DEFAULT_TITLE,
        description: DEFAULT_DESCRIPTION,
        inLanguage: "es-AR",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#person` },
        primaryImageOfPage: { "@id": `${SITE_URL}/#primaryimage` },
        breadcrumb: { "@id": `${SITE_URL}/#breadcrumb` },
        dateModified: new Date().toISOString().slice(0, 10),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: SITE_URL,
          },
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#service`,
        name: `${SITE_NAME} — Landing pages para negocios`,
        description:
          "Diseño y desarrollo de landings para negocios en Argentina, con WhatsApp integrado y enfoque mobile-first.",
        url: SITE_URL,
        image: { "@id": `${SITE_URL}/#primaryimage` },
        logo: { "@id": `${SITE_URL}/#logo` },
        provider: { "@id": `${SITE_URL}/#person` },
        areaServed: {
          "@type": "Country",
          name: "Argentina",
        },
        serviceType: ["Landing page", "Diseño web", "Desarrollo web", "Integración WhatsApp"],
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "sales",
            email: EMAIL,
            telephone: PHONE_E164,
            availableLanguage: ["Spanish", "es"],
            areaServed: "AR",
            url: WHATSAPP_PROFILE,
          },
        ],
        sameAs: [INSTAGRAM_URL, WHATSAPP_PROFILE],
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/#projects`,
        name: "Proyectos en producción",
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        numberOfItems: projectEntities.length,
        itemListElement: projectEntities.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item,
        })),
      },
    ],
  };
}
