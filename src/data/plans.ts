export type PlanId = "essential" | "premium" | "demo";

export type Plan = {
  id: PlanId;
  name: string;
  tagline: string;
  priceUsd: number;
  priceNote?: string;
  featured?: boolean;
  delivery: string;
  features: readonly string[];
  cta: string;
  whatsappMessage: string;
};

export const PLANS: Plan[] = [
  {
    id: "essential",
    name: "Essential",
    tagline: "Para arrancar y recibir consultas",
    priceUsd: 320,
    delivery: "7 a 10 días hábiles",
    features: [
      "Una landing de una sola página (hasta 5 secciones)",
      "Diseño pensado para el celu",
      "Botón de WhatsApp con mensaje listo",
      "SEO base (título, descripción, redes)",
      "La subo online y conecto tu dominio",
      "1 ronda de cambios incluida",
    ],
    cta: "Quiero Essential",
    whatsappMessage:
      "Hola Agustín, me interesa el plan Essential (USD 320). Quiero una landing para mi negocio.",
  },
  {
    id: "premium",
    name: "Premium",
    tagline: "Cuando querés ir un paso más allá",
    priceUsd: 520,
    featured: true,
    delivery: "2 a 3 semanas",
    features: [
      "Todo lo del Essential",
      "Formulario de contacto que te llega al mail",
      "Animaciones y diseño más trabajado",
      "Una sección extra: FAQ, galería o testimonios",
      "Datos para que Google te encuentre mejor",
      "2 rondas de cambios incluidas",
      "30 días de soporte después de publicar",
    ],
    cta: "Quiero Premium",
    whatsappMessage:
      "Hola Agustín, me interesa el plan Premium (USD 520). Quiero una landing más completa para mi negocio.",
  },
  {
    id: "demo",
    name: "Demo a medida",
    tagline: "Mirá cómo quedaría tu web antes de decidir",
    priceUsd: 79,
    priceNote: "Si avanzamos con un plan, te lo descuento",
    delivery: "3 a 5 días hábiles",
    features: [
      "Preview con tu logo y colores",
      "Hero + 2 secciones de ejemplo",
      "Link en vivo para compartir",
      "Los USD 79 se descuentan al contratar Essential o Premium",
    ],
    cta: "Pedir demo",
    whatsappMessage: "Hola Agustín, me interesa la demo a medida (USD 79). Mi negocio es: ",
  },
];

export const PLAN_ADDONS_NOTE =
  "Dominio, textos, SEO avanzado, blog, otro idioma y mantenimiento mensual van aparte — te los cotizo sin drama.";
