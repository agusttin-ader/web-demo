import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { getDictionary } from "@/i18n/get-dictionary";
import { DS_CLASS } from "@/lib/design-system";

export async function About() {
  const t = await getDictionary();

  return (
    <section id="sobre-mi" className={`about ${DS_CLASS.sectionDark}`}>
      <div className={DS_CLASS.container}>
        <div className="about__layout">
          <aside className="about__aside">
            <SectionHeader label={t.about.label} title="Agustín Ader" description={t.about.role} />

            <Reveal variant="fade">
              <div className="about__copy">
                <p>{t.about.body}</p>
                <p>{t.about.bodyAlt}</p>
                <p className="about__muted">{t.about.bodyExtra}</p>
                <ul className="about__highlights">
                  {t.about.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </aside>

          <Reveal variant="fade" className="about__media">
            <figure className="about__figure">
              <Image
                src="/about.jpeg"
                alt={t.about.photoAlt}
                width={480}
                height={640}
                sizes="(min-width: 1024px) 22rem, 70vw"
                className="about__photo"
                loading="lazy"
              />
              <figcaption>
                <p>Agustín Ader</p>
                <p>{t.about.photoCaption}</p>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <Reveal variant="fade">
          <div className="about__numbers">
            <p className="about__block-label">{t.about.numbers}</p>
            <dl className="about__stats">
              {t.about.stats.map((stat) => (
                <div key={stat.label} className="about__stat">
                  <dt>{stat.label}</dt>
                  <dd>{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        <Reveal variant="fade">
          <section className="about__timeline" aria-labelledby="about-timeline-title">
            <p className="about__block-label">{t.about.timelineLabel}</p>
            <h3 id="about-timeline-title">{t.about.timelineTitle}</h3>
            <ol className="about__timeline-list">
              {t.about.timeline.map((item) => (
                <li key={item.id}>
                  <span className="about__timeline-year">{item.year}</span>
                  <div className="about__timeline-body">
                    <h4>{item.title}</h4>
                    <p className="about__muted">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </Reveal>

        <Reveal variant="fade">
          <section className="about__certs" aria-labelledby="about-focus-title">
            <p className="about__block-label">{t.about.focusLabel}</p>
            <h3 id="about-focus-title">{t.about.focusTitle}</h3>
            <ul className="about__certs-grid">
              {t.about.certs.map((cert) => (
                <li key={cert.title}>
                  <p className="about__cert-title">{cert.title}</p>
                  <p className="about__muted">{cert.meta}</p>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>
      </div>
    </section>
  );
}
