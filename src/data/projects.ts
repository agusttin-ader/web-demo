/**
 * Proyectos del portfolio: clientes en producción y demos.
 */
export type ProjectType = "production" | "demo";

export type ProjectMediaTheme =
  | "patagonia"
  | "guarida"
  | "medical"
  | "medical-demo"
  | "rhinoscopy"
  | "chinski"
  | "neutral";

export interface Project {
  id: string;
  title: string;
  client: string;
  description: string;
  /** @deprecated Usar logo + ProjectMedia */
  image: string;
  logo: string;
  mediaTheme: ProjectMediaTheme;
  /** Logo oscuro sobre PNG transparente — monocromo blanco en portfolio */
  logoOnDark?: boolean;
  /** Logo oscuro sobre fondo claro en el PNG — invertir colores en cards oscuras */
  logoInvert?: boolean;
  /** Logo a color sobre oscuro — mix-blend screen (p. ej. sello circular) */
  logoScreenBlend?: boolean;
  /** Logo blanco vectorial/PNG — sin screen y render nítido */
  logoCrisp?: boolean;
  /** SEO-friendly image alt when provided */
  imageAlt?: string;
  stack: string;
  problem: string;
  solution: string;
  result: string;
  technologies: string[];
  type: ProjectType;
  /** Proyecto principal en la sección portfolio */
  featured?: boolean;
  demo?: string;
  github?: string;
  /** @deprecated use technologies */
  tags?: string[];
  /** @deprecated use problem/solution/result */
  highlights?: string[];
  /** @deprecated use demo */
  link?: string;
}

export const projects: Project[] = [
  {
    id: "dr-chinski",
    title: "Dr. Chinski Rinoplastia",
    client: "Dres. Luis y Hernán Chinski",
    description:
      "Sitio de rinoplastia estética, funcional y reparadora: casos, equipo, turnos y consulta en Buenos Aires.",
    image: "/images/logos/chinski.png",
    logo: "/images/logos/chinski.png",
    logoCrisp: true,
    mediaTheme: "chinski",
    imageAlt:
      "Sitio de Dr. Chinski Rinoplastia: cirugía de nariz, casos antes y después y turnos en Buenos Aires",
    stack: "Next.js · Rinoplastia · ES/EN/PT",
    problem:
      "El consultorio necesitaba un canal propio, claro y premium, para explicar la cirugía y convertir visitas en consultas.",
    solution:
      "Sitio completo con casos, equipo, técnica ultrasónica, testimonios, FAQ y caminos de turno por WhatsApp y formulario.",
    result:
      "Hub clínico en rinoplastia.com.ar, con identidad propia, contenido en tres idiomas y consulta directa.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "i18n", "Vercel"],
    type: "production",
    featured: true,
    demo: "https://rinoplastia.com.ar/",
    link: "https://rinoplastia.com.ar/",
  },
  {
    id: "rhinoscopy",
    title: "Rhinoscopy",
    client: "Rhinoscopy",
    description:
      "Plataforma de formación en otorrinolaringología, rinología y rinoscopia: congreso, webinars y certificados.",
    image: "/images/logos/rhinoscopy-logo-hero-sombra.png",
    logo: "/images/logos/rhinoscopy-logo-hero-sombra.png",
    mediaTheme: "rhinoscopy",
    imageAlt:
      "Sitio de Rhinoscopy: formación en rinología, Rhinoscopy Meet, webinars y certificados",
    stack: "Next.js · Educación médica · ES/EN/PT",
    problem:
      "La comunidad de rinología dependía de Instagram para el congreso, los webinars y los certificados.",
    solution:
      "Sitio completo con Meet 2026, speakers, galería, webinars, certificados descargables y contacto.",
    result:
      "Hub educativo regional en rhinoscopy.com.ar, con congreso, contenido clínico y canal propio.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "i18n", "Vercel"],
    type: "production",
    demo: "https://www.rhinoscopy.com.ar/",
    link: "https://www.rhinoscopy.com.ar/",
  },
  {
    id: "alo-patagonia",
    title: "Alo Patagonia",
    client: "Alo Patagonia",
    description:
      "Web de turismo para coordinar viajes por la Patagonia con consultas directas por WhatsApp.",
    image: "/images/alopatagonia-home.webp",
    logo: "/images/logos/alopatagonia.png",
    mediaTheme: "patagonia",
    imageAlt:
      "Sitio web de Alo Patagonia: viajes por la Patagonia con itinerarios claros y consulta por WhatsApp",
    stack: "Next.js · WhatsApp · Consultas",
    problem:
      "Los viajeros no encontraban itinerarios claros ni una forma simple de consultar y reservar.",
    solution:
      "Web con destinos ordenados, mensaje claro y WhatsApp a mano para cerrar la charla.",
    result:
      "Oferta más clara, contacto al toque y una web pensada para quien entra desde el celu.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "WhatsApp"],
    type: "production",
    demo: "https://www.alopatagonia.com/",
    link: "https://www.alopatagonia.com/",
  },
  {
    id: "la-guarida",
    title: "La Guarida Instrumentos",
    client: "La Guarida Instrumentos",
    description:
      "Web para mostrar mejor el negocio y que la gente consulte directo, sin depender solo de Instagram.",
    image: "/images/laguarida-instrumentos.webp",
    logo: "/images/logos/laguarida.png",
    mediaTheme: "guarida",
    imageAlt:
      "Landing page de La Guarida Instrumentos: catálogo visual de instrumentos musicales y contacto directo",
    stack: "Next.js · TypeScript · Tailwind",
    problem:
      "Dependían de redes y mensajes sueltos. No se entendía bien la oferta y se perdían consultas.",
    solution:
      "Landing con catálogo visual, orden claro en el celu y contacto directo.",
    result:
      "Web propia online, mejor presentación y un canal para recibir consultas.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    type: "production",
    demo: "https://www.laguaridainstrumentos.com/",
    link: "https://www.laguaridainstrumentos.com/",
  },
  {
    id: "dra-karla-armijos",
    title: "Dra. Karla Armijos",
    client: "Dra. Karla Armijos",
    description:
      "Landing en producción para otorrinolaringología: rinología y trastornos respiratorios del sueño.",
    image: "/images/drakarmijos-home.png",
    logo: "/images/logos/karmijos.png",
    logoScreenBlend: true,
    mediaTheme: "medical",
    imageAlt:
      "Sitio de la Dra. Karla Armijos: rinología y trastornos respiratorios del sueño",
    stack: "Next.js · Salud · Mobile-first",
    problem:
      "Sin web propia, los pacientes no encontraban info clara ni cómo consultar.",
    solution:
      "Landing con mensaje directo, identidad médica y base lista para crecer.",
    result:
      "Canal propio en drakarmijos.com mientras se desarrolla el sitio completo.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    type: "production",
    demo: "https://www.drakarmijos.com/",
    link: "https://www.drakarmijos.com/",
  },
  {
    id: "dr-lopez-moris",
    title: "Dr. Carlos López Moris",
    client: "Dr. Carlos López Moris",
    description:
      "Sitio en producción para rinología y cirugía nasal: servicios, formación, casos, reseñas y turnos en Buenos Aires.",
    image: "/images/drlopezmoris-home.jpg",
    logo: "/images/logos/lopezmoris.png",
    logoCrisp: true,
    mediaTheme: "medical",
    imageAlt:
      "Sitio del Dr. Carlos López Moris: rinología, cirugía nasal y turnos en Buenos Aires",
    stack: "Next.js · Rinología · Consultas",
    problem:
      "Sin web propia, los pacientes no encontraban info clara ni un camino simple para pedir turno.",
    solution:
      "Sitio con servicios, formación, casos, FAQ, galería y contacto por WhatsApp y formulario.",
    result:
      "Canal propio en drlopezmoris.com para consultas y turnos.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "WhatsApp", "Vercel"],
    type: "production",
    demo: "https://drlopezmoris.com/",
    link: "https://drlopezmoris.com/",
  },
];

export function getFeaturedProjects(): Project[] {
  const featured = projects.filter((p) => p.featured && p.type === "production");
  if (featured.length) return featured;
  const fallback = projects.find((p) => p.type === "production");
  return fallback ? [fallback] : [];
}

export function getFeaturedProject(): Project | undefined {
  return getFeaturedProjects()[0];
}

/** Orden de la grilla (izq → der, arr → abj). La Guarida queda última, con el arte a su derecha. */
const PRODUCTION_GRID_ORDER = [
  "alo-patagonia",
  "rhinoscopy",
  "dr-lopez-moris",
  "dra-karla-armijos",
  "la-guarida",
] as const;

export function getProductionProjects(): Project[] {
  const featuredIds = new Set(getFeaturedProjects().map((p) => p.id));
  const rest = projects.filter((p) => p.type === "production" && !featuredIds.has(p.id));
  const rank = new Map<string, number>(PRODUCTION_GRID_ORDER.map((id, index) => [id, index]));
  return [...rest].sort((a, b) => (rank.get(a.id) ?? 99) - (rank.get(b.id) ?? 99));
}

/** Todos los clientes en producción (destacados primero, mismo orden que en `projects`). */
export function getAllProductionProjects(): Project[] {
  const featuredIds = new Set(getFeaturedProjects().map((p) => p.id));
  const featured = projects.filter((p) => p.type === "production" && featuredIds.has(p.id));
  const rest = projects.filter((p) => p.type === "production" && !featuredIds.has(p.id));
  return [...featured, ...rest];
}

export function getDemoProjects(): Project[] {
  return projects.filter((p) => p.type === "demo");
}

export function withProjectCopy(
  project: Project,
  copy: {
    description: string;
    imageAlt: string;
    problem: string;
    solution: string;
    result: string;
  }
): Project {
  return {
    ...project,
    description: copy.description,
    imageAlt: copy.imageAlt,
    problem: copy.problem,
    solution: copy.solution,
    result: copy.result,
  };
}
