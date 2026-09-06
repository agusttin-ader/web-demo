/**
 * Proyectos del portfolio: clientes en producción y demos.
 */
export type ProjectType = "production" | "demo";

export type ProjectMediaTheme = "patagonia" | "guarida" | "medical" | "medical-demo" | "neutral";

export interface Project {
  id: string;
  title: string;
  client: string;
  description: string;
  /** @deprecated Usar logo + ProjectMedia */
  image: string;
  logo: string;
  mediaTheme: ProjectMediaTheme;
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
    featured: true,
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
    logo: "/images/logos/drakarmijos.png",
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
    client: "Proyecto demo",
    description:
      "Demo médico con servicios, formación, casos, reseñas y contacto por WhatsApp o formulario.",
    image: "/images/drlopezmoris-home.jpg",
    logo: "/images/logos/drlopezmoris.png",
    mediaTheme: "medical-demo",
    imageAlt:
      "Demo del Dr. Carlos López Moris: rinología, cirugía nasal y turnos en Buenos Aires",
    stack: "Next.js · Rinología · Consultas",
    problem:
      "Un médico necesita transmitir confianza, mostrar trayectoria y que pedir turno sea fácil.",
    solution:
      "Demo con servicios, formación, casos, FAQ, galería y botones claros a WhatsApp y formulario.",
    result:
      "Base lista para adaptar a consultorios y especialistas de salud.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "WhatsApp"],
    type: "demo",
    demo: "https://drlopezmoris-seven.vercel.app/",
    link: "https://drlopezmoris-seven.vercel.app/",
  },
];

export function getFeaturedProject(): Project | undefined {
  return projects.find((p) => p.featured) ?? projects.find((p) => p.type === "production");
}

export function getProductionProjects(): Project[] {
  const featured = getFeaturedProject();
  return projects.filter((p) => p.type === "production" && p.id !== featured?.id);
}

export function getDemoProjects(): Project[] {
  return projects.filter((p) => p.type === "demo");
}
