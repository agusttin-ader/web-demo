/**
 * Proyectos para la sección "Webs que desarrollé".
 * Para mostrar la web que ya hiciste: reemplazá el link y la imagen.
 * Imagen: guardá una captura en /public/images/ y poné la ruta en "image".
 * Link: URL del sitio en vivo (ej. https://tu-cliente.com).
 */
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
  tags?: string[];
}

export const projects: Project[] = [
  {
    id: "escapate-al-lago",
    title: "Escápate al lago",
    description: "Sitio de muestra para alojamiento turístico: reservas, habitaciones, ubicación y contacto. Diseño claro y rápido en móvil y desktop.",
    image: "/images/escapate-al-lago.jpg",
    link: "#",
    tags: ["Turismo", "Alojamiento", "Responsive"],
  },
  {
    id: "la-guarida",
    title: "La Guarida Instrumentos",
    description: "Catálogo de guitarras, bajos y accesorios. Muestra de instrumentos disponibles, sección «Sobre la guarida», contacto por WhatsApp y diseño responsive.",
    image: "/images/laguarida.PNG",
    link: "https://www.laguaridainstrumentos.com/",
    tags: ["Catálogo", "Instrumentos", "Responsive"],
  },
];
