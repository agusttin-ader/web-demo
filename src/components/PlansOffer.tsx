"use client";

import { useSyncExternalStore } from "react";
import { ExternalLink } from "@/components/ExternalLink";
import { interpolate } from "@/i18n/format";
import type { Dictionary } from "@/i18n/get-dictionary";
import {
  PLANS,
  isPlanPromoActive,
  resolvePlanPricing,
  subscribePlanPromo,
  type Plan,
  type PlanId,
} from "@/data/plans";
import { whatsappUrl } from "@/lib/constants";
import { Reveal } from "@/components/Reveal";
import { DS_CLASS } from "@/lib/design-system";

const PLAN_ORDER: PlanId[] = ["essential", "premium", "demo"];

export function PlansOffer({ copy }: { copy: Dictionary["plans"] }) {
  const promoActive = useSyncExternalStore(
    subscribePlanPromo,
    isPlanPromoActive,
    isPlanPromoActive,
  );
  const plansById = Object.fromEntries(PLANS.map((plan) => [plan.id, plan])) as Record<
    PlanId,
    Plan
  >;

  return (
    <>
      <div className="plans__grid">
        {PLAN_ORDER.map((id, index) => {
          const plan = plansById[id];
          const featured = id === "premium";
          const compact = id === "demo";

          return (
            <Reveal key={id} variant="up" delay={index * 80}>
              <PlanCard
                plan={plan}
                copy={copy}
                featured={featured}
                compact={compact}
                promoActive={promoActive}
              />
            </Reveal>
          );
        })}
      </div>

      {promoActive ? <p className="plans__footnote">{copy.promoNote}</p> : null}
      <p className="plans__footnote">{copy.paymentNote}</p>
      <p className="plans__footnote">
        {copy.addonsNote}{" "}
        <a href="#contacto">{copy.noteLink}</a>.
      </p>
    </>
  );
}

function PlanCard({
  plan,
  copy,
  featured = false,
  compact = false,
  promoActive,
}: {
  plan: Plan;
  copy: Dictionary["plans"];
  featured?: boolean;
  compact?: boolean;
  promoActive: boolean;
}) {
  const item = copy.items[plan.id];
  const pricing = resolvePlanPricing(plan, promoActive);
  const cardClass = `plan-card${featured ? " plan-card--featured" : ""}`;
  const priceLabel =
    plan.id === "demo"
      ? copy.priceFree
      : interpolate(copy.priceFrom, { amount: pricing.priceUsd });
  const showCompare =
    pricing.compareAtPriceUsd != null && pricing.compareAtPriceUsd > pricing.priceUsd;
  const compareAmount = pricing.compareAtPriceUsd;
  const compareLabel =
    showCompare && compareAmount != null
      ? interpolate(copy.priceFrom, { amount: compareAmount })
      : null;
  const priceAriaLabel =
    showCompare && compareLabel
      ? `${compareLabel}, ahora ${priceLabel}`
      : priceLabel;
  const whatsappMessage =
    promoActive && "whatsappMessagePromo" in item && item.whatsappMessagePromo
      ? item.whatsappMessagePromo
      : item.whatsappMessage;

  return (
    <article className={cardClass}>
      <div className="plan-card__badge-slot">
        {featured ? <p className="plan-card__badge">{copy.featuredBadge}</p> : null}
        {compact && !featured ? <p className="plan-card__badge">{copy.demoBadge}</p> : null}
      </div>

      <p className="plan-card__name">{item.name}</p>
      <h3>{item.tagline}</h3>
      <div className="plan-card__pricing" aria-label={priceAriaLabel}>
        {showCompare ? (
          <div className="plan-card__price-row">
            {pricing.discountPercent ? (
              <span className="plan-card__discount">
                {interpolate(copy.discountBadge, { percent: pricing.discountPercent })}
              </span>
            ) : null}
            {compareLabel ? (
              <span className="plan-card__price-compare">{compareLabel}</span>
            ) : null}
          </div>
        ) : null}
        <p className="plan-card__price">{priceLabel}</p>
        {showCompare ? <p className="plan-card__promo-until">{copy.promoUntil}</p> : null}
      </div>
      <p className="plan-card__delivery">{interpolate(copy.delivery, { time: item.delivery })}</p>

      <ul>
        {item.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>

      <ExternalLink href={whatsappUrl(whatsappMessage)} className={DS_CLASS.btnPrimary}>
        {item.cta}
      </ExternalLink>
    </article>
  );
}
