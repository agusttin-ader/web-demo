/**
 * Proyectos reales en producción (clientes).
 */
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
  tags?: string[];
  highlights?: string[];
}

export const projects: Project[] = [
  {
    id: "la-guarida",
    title: "La Guarida Instrumentos",
    description:
      "Sitio desarrollado para mejorar la presentacion del negocio y facilitar consultas directas.",
    image: "/images/laguarida-instrumentos.png",
    link: "https://www.laguaridainstrumentos.com/",
    tags: ["Catálogo", "Instrumentos", "Responsive"],
    highlights: ["Diseno claro y rapido", "Optimizado para mobile", "Enfoque en contacto directo"],
  },
  {
    id: "alo-patagonia",
    title: "Alo Patagonia",
    description:
      "Web de turismo para coordinar viajes por la Patagonia con consultas directas por WhatsApp.",
    image: "/images/alopatagonia-home.png",
    link: "https://www.alopatagonia.com/",
    tags: ["Turismo", "WhatsApp", "Conversion"],
    highlights: ["Itinerarios y destinos claros", "Contacto rapido por WhatsApp", "Diseno mobile-first"],
  },
];
