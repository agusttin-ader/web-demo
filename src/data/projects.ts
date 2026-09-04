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
    stack: "Next.js · WhatsApp · Conversión",
    problem:
      "Los viajeros no encontraban itinerarios claros ni un camino simple para consultar y reservar.",
    solution:
      "Web de turismo con destinos ordenados, mensaje de valor claro e integración WhatsApp para cerrar la conversación.",
    result:
      "Más claridad en la oferta, contacto inmediato y una experiencia pensada para convertir desde el celular.",
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
      "Sitio desarrollado para mejorar la presentación del negocio y facilitar consultas directas.",
    image: "/images/laguarida-instrumentos.webp",
    logo: "/images/logos/laguarida.png",
    mediaTheme: "guarida",
    imageAlt:
      "Landing page de La Guarida Instrumentos: catálogo visual de instrumentos musicales y contacto directo",
    stack: "Next.js · TypeScript · Tailwind",
    problem:
      "El negocio dependía de redes y mensajes sueltos. La oferta no se entendía rápido y las consultas se perdían.",
    solution:
      "Landing clara con catálogo visual, jerarquía mobile-first y contacto directo para convertir visitas en consultas.",
    result:
      "Presencia profesional en producción, mejor presentación del negocio y un canal propio para recibir consultas.",
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
      "Sin presencia web propia, los pacientes no encontraban información clara ni un canal directo para consultar.",
    solution:
      "Landing profesional en producción con mensaje claro, identidad médica y base lista para ampliar contenido.",
    result:
      "Canal propio activo en drakarmijos.com mientras se desarrolla el sitio completo.",
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
      "Sitio médico con servicios, formación, galería de casos, reseñas y contacto por WhatsApp y formulario.",
    image: "/images/drlopezmoris-home.jpg",
    logo: "/images/logos/drlopezmoris.png",
    mediaTheme: "medical-demo",
    imageAlt:
      "Demo del Dr. Carlos López Moris: rinología, cirugía nasal y turnos en Buenos Aires",
    stack: "Next.js · Rinología · Conversión",
    problem:
      "Un profesional de salud necesita transmitir confianza, mostrar trayectoria y facilitar el pedido de turno sin fricción.",
    solution:
      "Demo con secciones claras (servicios, formación, casos, FAQ), galería y CTAs a WhatsApp y formulario.",
    result:
      "Experiencia premium lista para adaptar a consultorios y especialistas médicos.",
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
