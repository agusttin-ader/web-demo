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

/** Promo 25% — fechas inclusive, calendario Argentina. */
export const PLAN_PROMO = {
  percent: 25,
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
    name: "Essential",
    tagline: "Para arrancar y recibir consultas",
    priceUsd: 225,
    compareAtPriceUsd: 300,
    discountPercent: 25,
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
      "Hola Agustín, me interesa el plan Essential (desde USD 300). Quiero una landing para mi negocio.",
  },
  {
    id: "premium",
    name: "Premium",
    tagline: "Cuando querés ir un paso más allá",
    priceUsd: 375,
    compareAtPriceUsd: 500,
    discountPercent: 25,
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
      "Hola Agustín, me interesa el plan Premium (desde USD 500). Quiero una landing más completa para mi negocio.",
  },
  {
    id: "demo",
    name: "Demo a medida",
    tagline: "Mirá cómo quedaría tu web antes de decidir",
    priceUsd: 0,
    delivery: "3 a 5 días hábiles",
    features: [
      "Preview con tu logo y colores",
      "Hero + 2 secciones de ejemplo",
      "Link en vivo para compartir",
      "Sin costo ni compromiso",
    ],
    cta: "Pedir demo",
    whatsappMessage: "Hola Agustín, me interesa la demo a medida gratuita. Mi negocio es: ",
  },
];
