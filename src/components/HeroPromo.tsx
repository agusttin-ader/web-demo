"use client";

import type { Dictionary } from "@/i18n/get-dictionary";
import { interpolate } from "@/i18n/format";
import { DS_CLASS } from "@/lib/design-system";
import { Reveal } from "@/components/Reveal";
import { usePlanPromoActive } from "@/hooks/usePlanPromoActive";
import { PLANS, resolvePlanPricing } from "@/data/plans";

type HeroCopy = Dictionary["hero"];

function promoPlans() {
  const essential = PLANS.find((plan) => plan.id === "essential");
  const premium = PLANS.find((plan) => plan.id === "premium");
  if (!essential || !premium) return null;
  return {
    essential: resolvePlanPricing(essential, true),
    premium: resolvePlanPricing(premium, true),
  };
}

export function HeroPromoBar({ copy }: { copy: HeroCopy }) {
  const active = usePlanPromoActive();
  if (!active) return null;

  return (
    <a href="#planes" className="hero__promo" aria-label={copy.promoAria}>
      <span className={`${DS_CLASS.container} hero__promo-inner`}>
        <span className="hero__promo-pct">{copy.promoKicker}</span>
        <span className="hero__promo-line">{copy.promoLine}</span>
        <span className="hero__promo-until">{copy.promoUntil}</span>
        <span className="hero__promo-cta">
          {copy.promoCta}
          <span aria-hidden> →</span>
        </span>
      </span>
    </a>
  );
}

export function HeroPromoOffer({ copy }: { copy: HeroCopy }) {
  const active = usePlanPromoActive();
  const prices = promoPlans();
  if (!active || !prices) return null;

  return (
    <Reveal variant="up" initialVisible delay={150}>
      <a href="#planes" className="hero__offer" aria-label={copy.promoAria}>
        <span className="hero__offer-kicker">{copy.promoOfferKicker}</span>
        <span className="hero__offer-title">{copy.promoOfferTitle}</span>
        <span className="hero__offer-prices">
          <span>
            {interpolate(copy.promoPriceEssential, { amount: prices.essential.priceUsd })}
            {prices.essential.compareAtPriceUsd ? (
              <s>{interpolate(copy.promoPriceWas, { amount: prices.essential.compareAtPriceUsd })}</s>
            ) : null}
          </span>
          <span>
            {interpolate(copy.promoPricePremium, { amount: prices.premium.priceUsd })}
            {prices.premium.compareAtPriceUsd ? (
              <s>{interpolate(copy.promoPriceWas, { amount: prices.premium.compareAtPriceUsd })}</s>
            ) : null}
          </span>
        </span>
        <span className="hero__offer-cta">
          {copy.promoCta}
          <span aria-hidden> →</span>
        </span>
      </a>
    </Reveal>
  );
}
