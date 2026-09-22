import { ExternalLink } from "@/components/ExternalLink";
import { SectionHeader } from "@/components/SectionHeader";
import { interpolate } from "@/i18n/format";
import { getDictionary } from "@/i18n/get-dictionary";
import { PLANS, type PlanId } from "@/data/plans";
import { whatsappUrl } from "@/lib/constants";
import { Reveal } from "@/components/Reveal";
import { DS_CLASS } from "@/lib/design-system";

const PLAN_ORDER: PlanId[] = ["essential", "premium", "demo"];

export async function Plans() {
  const t = await getDictionary();
  const plansById = Object.fromEntries(PLANS.map((plan) => [plan.id, plan])) as Record<
    PlanId,
    (typeof PLANS)[number]
  >;

  return (
    <section id="planes" className={`plans ${DS_CLASS.sectionLight}`}>
      <div className={DS_CLASS.container}>
        <SectionHeader label={t.plans.label} title={t.plans.title} description={t.plans.description} />

        <div className="plans__grid">
          {PLAN_ORDER.map((id, index) => {
            const plan = plansById[id];
            const featured = id === "premium";
            const compact = id === "demo";

            return (
              <Reveal key={id} variant="up" delay={index * 80}>
                <PlanCard
                  plan={plan}
                  copy={t.plans}
                  featured={featured}
                  compact={compact}
                />
              </Reveal>
            );
          })}
        </div>

        <p className="plans__footnote">
          {t.plans.addonsNote}{" "}
          <a href="#contacto">{t.plans.noteLink}</a>.
        </p>
      </div>
    </section>
  );
}

function PlanCard({
  plan,
  copy,
  featured = false,
  compact = false,
}: {
  plan: (typeof PLANS)[number];
  copy: Awaited<ReturnType<typeof getDictionary>>["plans"];
  featured?: boolean;
  compact?: boolean;
}) {
  const item = copy.items[plan.id];
  const cardClass = `plan-card${featured ? " plan-card--featured" : ""}`;
  const priceLabel =
    plan.id === "demo"
      ? interpolate(copy.priceFixed, { amount: plan.priceUsd })
      : interpolate(copy.priceFrom, { amount: plan.priceUsd });

  return (
    <article className={cardClass}>
      <div className="plan-card__badge-slot">
        {featured ? <p className="plan-card__badge">{copy.featuredBadge}</p> : null}
        {compact && !featured ? <p className="plan-card__badge">{copy.demoBadge}</p> : null}
      </div>

      <p className="plan-card__name">{item.name}</p>
      <h3>{item.tagline}</h3>
      <p className="plan-card__price">{priceLabel}</p>
      {"priceNote" in item && item.priceNote ? <p className="plan-card__note">{item.priceNote}</p> : null}
      <p className="plan-card__delivery">{interpolate(copy.delivery, { time: item.delivery })}</p>

      <ul>
        {item.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>

      <ExternalLink href={whatsappUrl(item.whatsappMessage)} className={DS_CLASS.btnPrimary}>
        {item.cta}
      </ExternalLink>
    </article>
  );
}
