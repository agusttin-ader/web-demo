import Image from "next/image";
import { ExternalLink } from "@/components/ExternalLink";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { getDictionary } from "@/i18n/get-dictionary";
import { TECH_STACK, TRUST_LOGOS, whatsappUrl } from "@/lib/constants";
import { DS_CLASS } from "@/lib/design-system";

export async function BentoGrid() {
  const t = await getDictionary();
  const stats = t.about.stats;

  return (
    <section id="overview" className={`overview ${DS_CLASS.sectionLight}`}>
      <div className={DS_CLASS.container}>
        <div className="overview__layout">
          <aside className="overview__aside">
            <SectionHeader
              label={t.overview.label}
              title={t.overview.title}
              description={t.overview.description}
            />

            <Reveal variant="up" delay={80}>
              <div className="overview__availability">
                <p className="overview__block-label">{t.overview.availability}</p>
                <p className="overview__highlight">{t.overview.available}</p>
                <p className="overview__muted">{t.overview.availableBody}</p>
              </div>
            </Reveal>

            <Reveal variant="up" delay={140}>
              <div className="overview__cta">
                <p className="overview__block-label">{t.overview.contact}</p>
                <h3 className="overview__cta-title">{t.overview.ctaTitle}</h3>
                <p className="overview__muted">{t.overview.ctaBody}</p>
                <ExternalLink href={whatsappUrl(t.whatsapp.defaultMessage)} className={DS_CLASS.btnPrimary}>
                  {t.overview.ctaAction}
                </ExternalLink>
              </div>
            </Reveal>
          </aside>

          <div className="overview__main">
            <dl className="overview__kpis">
              {stats.map((stat, index) => (
                <div key={stat.label} className="overview__kpi">
                  <Reveal variant="fade" delay={index * 40}>
                    <dt>{stat.label}</dt>
                    <dd>{stat.value}</dd>
                  </Reveal>
                </div>
              ))}
            </dl>

            <Reveal variant="up">
              <section className="overview__block">
                <p className="overview__block-label">{t.overview.tech}</p>
                <h3 className="overview__block-title">{t.overview.techTitle}</h3>
                <ul className="overview__tags">
                  {TECH_STACK.map((tech) => (
                    <li key={tech}>
                      <span className={DS_CLASS.tag}>{tech}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>

            <Reveal variant="up" delay={60}>
              <section className="overview__block">
                <p className="overview__block-label">{t.overview.clients}</p>
                <ul className="overview__logos" aria-label={t.overview.clients}>
                  {TRUST_LOGOS.map((logo) => (
                    <li key={logo.id}>
                      <Image src={logo.src} alt={logo.alt} width={120} height={40} />
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>

            <Reveal variant="up" delay={100}>
              <section className="overview__block">
                <p className="overview__block-label">{t.overview.experience}</p>
                <p className="overview__body">{t.overview.experienceBody}</p>
                <p className="overview__muted">{t.overview.experienceMeta}</p>
              </section>
            </Reveal>

            <Reveal variant="up" delay={120}>
              <section className="overview__block">
                <p className="overview__block-label">{t.overview.certs}</p>
                <ul className="overview__certs">
                  {t.overview.certsItems.map((cert) => (
                    <li key={cert.title}>
                      <p className="overview__cert-title">{cert.title}</p>
                      <p className="overview__muted">{cert.meta}</p>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
