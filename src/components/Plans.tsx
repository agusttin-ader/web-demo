import { HiCheck, HiArrowUpRight } from "react-icons/hi2";
import { ExternalLink } from "@/components/ExternalLink";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { interpolate } from "@/i18n/format";
import { getDictionary } from "@/i18n/get-dictionary";
import { PLANS } from "@/data/plans";
import { whatsappUrl } from "@/lib/constants";

export async function Plans() {
  const t = await getDictionary();
  const [essential, premium, demo] = PLANS;

  return (
    <section id="planes" className="section-shell">
      <div className="cq mx-auto max-w-6xl">
        <SectionHeader
          label={t.plans.label}
          title={t.plans.title}
          description={t.plans.description}
          titleClassName="text-[clamp(2rem,5vw,3.25rem)]"
        />

        <div className="plans-showcase mt-14 lg:mt-20">
          <Reveal variant="up" delay={0}>
            <PlanCard plan={essential} copy={t.plans} featured={false} />
          </Reveal>

          <Reveal variant="up" delay={60}>
            <PlanCard plan={premium} copy={t.plans} featured />
          </Reveal>

          <Reveal variant="up" delay={120}>
            <PlanCard plan={demo} copy={t.plans} compact />
          </Reveal>
        </div>

        <Reveal variant="fade" delay={200} className="plans-note-wrap">
          <p className="plans-note">
            {t.plans.addonsNote}{" "}
            <a href="#contacto" className="link-brand">
              {t.plans.noteLink}
            </a>
            .
          </p>
        </Reveal>
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

  return (
    <article
      className={[
        "plan-card glass-card flex h-full flex-col rounded-[var(--radius-2xl)] p-7 sm:p-8",
        featured ? "plan-card--featured glass-card-accent" : "",
        compact ? "plan-card--compact" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {featured ? (
        <span className="plan-badge">{copy.featuredBadge}</span>
      ) : compact ? (
        <span className="plan-badge plan-badge--muted">{copy.demoBadge}</span>
      ) : null}

      <p className="eyebrow-muted">{item.name}</p>
      <h3 className="mt-2 font-display text-[length:var(--text-xl)] font-bold text-[var(--foreground)]">
        {item.tagline}
      </h3>

      <div className="mt-6 flex items-end gap-2">
        <p className="font-display text-[clamp(2.25rem,5vw,3rem)] font-bold leading-none tracking-tight text-[var(--foreground)]">
          USD {plan.priceUsd}
        </p>
      </div>
      {"priceNote" in item && item.priceNote ? (
        <p className="mt-2 text-[length:var(--text-sm)] text-[var(--accent-bright)]">{item.priceNote}</p>
      ) : null}
      <p className="mt-3 text-[length:var(--text-sm)] text-[var(--muted)]">
        {interpolate(copy.delivery, { time: item.delivery })}
      </p>

      <ul className={`mt-7 flex flex-1 flex-col gap-2.5 ${compact ? "sm:grid sm:grid-cols-2 sm:gap-x-4" : ""}`}>
        {item.features.map((feature) => (
          <li key={feature} className="flex gap-2.5 text-[length:var(--text-sm)] leading-relaxed text-[var(--foreground-muted)]">
            <HiCheck className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" aria-hidden />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <ExternalLink
        href={whatsappUrl(item.whatsappMessage)}
        className={`focus-ring mt-8 inline-flex w-full items-center justify-center gap-2 rounded-[var(--radius-full)] px-6 py-3.5 text-[length:var(--text-sm)] font-semibold transition-colors ${
          featured
            ? "btn-primary"
            : "border border-[var(--card-border)] bg-[var(--surface-2)] text-[var(--foreground)] hover:border-[var(--accent)]/40"
        }`}
      >
        {item.cta}
        <HiArrowUpRight className="h-4 w-4" aria-hidden />
      </ExternalLink>
    </article>
  );
}
