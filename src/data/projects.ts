/**
 * Proyectos reales en producción (clientes).
 */
export interface Project {
  id: string;
  title: string;
  client: string;
  description: string;
  image: string;
  /** SEO-friendly image alt when provided */
  imageAlt?: string;
  stack: string;
  problem: string;
  solution: string;
  result: string;
  technologies: string[];
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
    id: "la-guarida",
    title: "La Guarida Instrumentos",
    client: "La Guarida Instrumentos",
    description:
      "Sitio desarrollado para mejorar la presentacion del negocio y facilitar consultas directas.",
    image: "/images/laguarida-instrumentos.webp",
    imageAlt:
      "Landing page de La Guarida Instrumentos: catálogo visual de instrumentos musicales y contacto directo",
    stack: "Next.js · TypeScript · Tailwind",
    problem:
      "El negocio dependia de redes y mensajes sueltos. La oferta no se entendia rapido y las consultas se perdian.",
    solution:
      "Landing clara con catalogo visual, jerarquia mobile-first y contacto directo para convertir visitas en consultas.",
    result:
      "Presencia profesional en produccion, mejor presentacion del negocio y un canal propio para recibir consultas.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    demo: "https://www.laguaridainstrumentos.com/",
    // Repositorio privado del cliente
    github: undefined,
    tags: ["Catálogo", "Instrumentos", "Responsive"],
    link: "https://www.laguaridainstrumentos.com/",
  },
  {
    id: "alo-patagonia",
    title: "Alo Patagonia",
    client: "Alo Patagonia",
    description:
      "Web de turismo para coordinar viajes por la Patagonia con consultas directas por WhatsApp.",
    image: "/images/alopatagonia-home.webp",
    imageAlt:
      "Sitio web de Alo Patagonia: viajes por la Patagonia con itinerarios claros y consulta por WhatsApp",
    stack: "Next.js · WhatsApp · Conversion",
    problem:
      "Los viajeros no encontraban itinerarios claros ni un camino simple para consultar y reservar.",
    solution:
      "Web de turismo con destinos ordenados, mensaje de valor claro e integracion WhatsApp para cerrar la conversacion.",
    result:
      "Mas claridad en la oferta, contacto inmediato y una experiencia pensada para convertir desde el celular.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "WhatsApp"],
    demo: "https://www.alopatagonia.com/",
    github: undefined,
    tags: ["Turismo", "WhatsApp", "Conversion"],
    link: "https://www.alopatagonia.com/",
  },
];
