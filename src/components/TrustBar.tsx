import { getAllProductionProjects } from "@/data/projects";
import { interpolate } from "@/i18n/format";
import { getDictionary } from "@/i18n/get-dictionary";
import { Reveal } from "@/components/Reveal";
import { ClientMockups } from "@/components/ClientMockups";
import { DS_CLASS } from "@/lib/design-system";

export async function TrustBar() {
  const t = await getDictionary();
  const liveCount = getAllProductionProjects().length;

  return (
    <section className="trust-bar trust-bar--mockups" aria-label={t.portfolio.label}>
      <Reveal variant="fade" className={`trust-bar__inner ${DS_CLASS.container}`}>
        <p className="trust-bar__label">{interpolate(t.portfolio.activeSites, { count: liveCount })}</p>
        <ClientMockups
          listClassName="trust-bar__mockups client-mockups"
          ariaLabel={t.portfolio.label}
          compact
        />
      </Reveal>
    </section>
  );
}
