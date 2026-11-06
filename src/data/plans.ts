export type PlanId = "essential" | "premium" | "demo";

export type Plan = {
  id: PlanId;
  name: string;
  tagline: string;
  priceUsd: number;
  /** Precio de lista antes de promos (se muestra tachado). */
  compareAtPriceUsd?: number;
  discountPercent?: number;
  priceNote?: string;
  featured?: boolean;
  delivery: string;
  features: readonly string[];
  cta: string;
  whatsappMessage: string;
};

/** Promo 15% — fechas inclusive, calendario Argentina. */
export const PLAN_PROMO = {
  percent: 15,
  start: "2026-10-27",
  end: "2027-01-01",
  timeZone: "America/Argentina/Buenos_Aires",
} as const;

export type PlanPricing = {
  priceUsd: number;
  compareAtPriceUsd?: number;
  discountPercent?: number;
};

function calendarDateInArgentina(now = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: PLAN_PROMO.timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

export function isPlanPromoActive(now = new Date()): boolean {
  const day = calendarDateInArgentina(now);
  return day >= PLAN_PROMO.start && day <= PLAN_PROMO.end;
}

export function subscribePlanPromo(onStoreChange: () => void) {
  if (typeof window === "undefined") return () => {};
  const id = window.setInterval(onStoreChange, 60_000);
  window.addEventListener("focus", onStoreChange);
  return () => {
    window.clearInterval(id);
    window.removeEventListener("focus", onStoreChange);
  };
}

export function resolvePlanPricing(plan: Plan, promoActive = isPlanPromoActive()): PlanPricing {
  const promoApplies =
    promoActive &&
    plan.discountPercent != null &&
    plan.compareAtPriceUsd != null &&
    plan.compareAtPriceUsd > plan.priceUsd;

  if (promoApplies) {
    return {
      priceUsd: plan.priceUsd,
      compareAtPriceUsd: plan.compareAtPriceUsd,
      discountPercent: plan.discountPercent,
    };
  }

  return {
    priceUsd: plan.compareAtPriceUsd ?? plan.priceUsd,
  };
}

export const PLANS: Plan[] = [
  {
    id: "essential",
    name: "Landing",
    tagline: "Para arrancar y recibir consultas",
    priceUsd: 298,
    compareAtPriceUsd: 350,
    discountPercent: 15,
    delivery: "7 a 10 días hábiles",
    features: [
      "Una landing de una sola página (hasta 5 secciones)",
      "Diseño pensado para el celu",
      "Botón de WhatsApp con mensaje listo",
      "SEO base (título, descripción, redes)",
      "La subo online y conecto tu dominio",
      "1 ronda de cambios incluida",
    ],
    cta: "Cotizar landing",
    whatsappMessage:
      "Hola Agustín, quiero cotizar una landing (referencia desde USD 350). Mi negocio es: ",
  },
  {
    id: "premium",
    name: "Landing completa",
    tagline: "Cuando necesitás más conversión y detalle",
    priceUsd: 425,
    compareAtPriceUsd: 500,
    discountPercent: 15,
    featured: true,
    delivery: "2 a 3 semanas",
    features: [
      "Todo lo de la Landing",
      "Formulario de contacto que te llega al mail",
      "Animaciones y diseño más trabajado",
      "Una sección extra: FAQ, galería o testimonios",
      "Datos para que Google te encuentre mejor",
      "2 rondas de cambios incluidas",
      "30 días de soporte después de publicar",
    ],
    cta: "Cotizar landing completa",
    whatsappMessage:
      "Hola Agustín, quiero cotizar una landing completa (referencia desde USD 500). Mi negocio es: ",
  },
  {
    id: "demo",
    name: "Demo gratis",
    tagline: "Mirá cómo quedaría tu web antes de decidir",
    priceUsd: 0,
    delivery: "3 a 5 días hábiles",
    features: [
      "Preview con tu logo y colores",
      "Hero + 2 secciones de ejemplo",
      "Link en vivo para compartir",
      "Sin costo ni compromiso",
    ],
    cta: "Pedir demo gratis",
    whatsappMessage: "Hola Agustín, me interesa la demo gratis a medida. Mi negocio es: ",
  },
];
