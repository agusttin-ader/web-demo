/**
 * Proyectos en desarrollo (clientes con permiso de mostrar el avance).
 * Cuando pasen a producción, movelos a projects.ts.
 * Imagen: guardá una captura en /public/images/ (ej. zingueria-adaro.png).
 */
export interface InDevelopmentProject {
  id: string;
  title: string;
  description: string;
  image: string;
  imagePosition?: string;
  link: string;
  tags?: string[];
}

export const inDevelopmentProjects: InDevelopmentProject[] = [
  {
    id: "zingueria-adaro",
    title: "Zinguería Adaro",
    description: "Sitio para zinguería en Buenos Aires: más de 60 años de experiencia, servicios (canaletas, extractores, claraboyas, membranas), trabajos realizados y contacto por WhatsApp.",
    image: "/images/zingueria-home.png",
    imagePosition: "center 35%",
    link: "https://zingueria-adaro.vercel.app/",
    tags: ["Zinguería", "Servicios", "Responsive"],
  },
];
