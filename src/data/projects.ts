/**
 * Proyectos reales en producción (clientes).
 * La Guarida es el caso destacado con testimonio.
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
    id: "la-guarida",
    title: "La Guarida Instrumentos",
    description: "Catálogo de guitarras.",
    image: "/images/laguarida.PNG",
    link: "https://www.laguaridainstrumentos.com/",
    tags: ["Catálogo", "Instrumentos", "Responsive"],
  },
];
