/**
 * Ejemplos: deploys de demostración, no proyectos en producción.
 * Sirven para mostrar habilidades (ecommerce, landing, turismo, etc.).
 * Reemplazá el link cuando tengas el deploy y añadí imagen en /public/images/.
 */
export interface Example {
  id: string;
  title: string;
  description: string;
  /** Línea opcional bajo la descripción (ej. panel de admin, demo bajo solicitud). */
  extraNote?: string;
  image: string;
  /** Objeto de posición para recortar la captura y ocultar la barra del navegador. Ej: "center 45%" */
  imagePosition?: string;
  link: string;
  tags?: string[];
}

export const examples: Example[] = [
  {
    id: "ecommerce",
    title: "Ecommerce de ejemplo",
    description: "Tienda demo con catálogo, carrito y flujo de compra. Productos, carrito y checkout funcional.",
    image: "/images/ecommerce-home.png",
    imagePosition: "center 42%",
    link: "https://ecommerce-example-murex.vercel.app/",
    tags: ["Ecommerce", "Carrito", "Responsive"],
  },
  {
    id: "turismo-reservas",
    title: "Web de turismo con agenda y reservas",
    description: "Sitio tipo hostel con búsqueda de fechas, habitaciones, ubicación y reservaciones. Incluye panel de administración para que el dueño gestione reservas y disponibilidad de habitaciones (libres/ocupadas) desde un solo lugar.",
    extraNote: "Si te interesa ver el panel de gestión, pedime acceso a la demo.",
    image: "/images/turismo-home.png",
    imagePosition: "center 45%",
    link: "https://turismo-demo-xi.vercel.app/",
    tags: ["Turismo", "Reservas", "Hostel", "Panel admin"],
  },
];
