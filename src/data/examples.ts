/**
 * Ejemplos: deploys de demostración, no proyectos en producción.
 * Sirven para mostrar habilidades (ecommerce, landing, turismo, etc.).
 * Reemplazá el link cuando tengas el deploy y añadí imagen en /public/images/.
 */
export interface Example {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  tags?: string[];
}

export const examples: Example[] = [
  {
    id: "ecommerce",
    title: "Ecommerce de ejemplo",
    description: "Tienda demo con catálogo, carrito y flujo de compra. Deploy de ejemplo para mostrar capacidades en ecommerce.",
    image: "/images/escapate-al-lago.jpg",
    link: "#",
    tags: ["Ecommerce", "Carrito", "Responsive"],
  },
  // Próximos ejemplos que podés sumar:
  // - Landing de servicios o producto (una página, CTA, formulario)
  // - Sitio tipo hostel/turismo (reservas, habitaciones, contacto) — ej. Escápate al lago
  // - Portfolio o blog (entradas, categorías, SEO)
  // - Herramienta pequeña (calculadora, configurador, formulario multi-paso)
];
