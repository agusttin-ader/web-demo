import Image from "next/image";
import { getProductionProjects, getFeaturedProjects } from "@/data/projects";
import { interpolate } from "@/i18n/format";
import { getDictionary } from "@/i18n/get-dictionary";
import { Reveal } from "@/components/Reveal";
import { DS_CLASS } from "@/lib/design-system";
import { TRUST_LOGOS } from "@/lib/constants";

export async function TrustBar() {
  const t = await getDictionary();
  const liveCount = getFeaturedProjects().length + getProductionProjects().length;

  return (
    <section className="trust-bar" aria-label={t.portfolio.label}>
      <Reveal variant="fade" className={`trust-bar__inner ${DS_CLASS.container}`}>
        <p className="trust-bar__label">{interpolate(t.portfolio.activeSites, { count: liveCount })}</p>
        <ul className="trust-bar__logos">
          {TRUST_LOGOS.map((logo) => (
            <li key={logo.id}>
              <Image src={logo.src} alt={logo.alt} width={120} height={40} />
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
