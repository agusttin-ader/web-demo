import { ExternalLink } from "@/components/ExternalLink";
import { Reveal } from "@/components/Reveal";
import { getDictionary } from "@/i18n/get-dictionary";
import { DS_CLASS } from "@/lib/design-system";
import { TECH_STACK, whatsappUrl } from "@/lib/constants";

export async function Hero() {
  const t = await getDictionary();

  return (
    <section id="hero" className={`hero ${DS_CLASS.sectionLight}`} aria-labelledby="hero-heading">
      <div className={DS_CLASS.container}>
        <div className="hero__grid">
          <div className="hero__main">
            <Reveal variant="fade" initialVisible delay={0}>
              <p className={DS_CLASS.eyebrow}>
                <span className={DS_CLASS.eyebrowDot} aria-hidden />
                {t.hero.eyebrow}
              </p>
            </Reveal>

            <Reveal variant="up" initialVisible delay={60}>
              <h1 id="hero-heading" className="hero__title">
                {t.hero.titleBefore}
                <br />
                <span className="text-accent">{t.hero.titleAccent}</span>
                <br />
                <span className="text-muted">{t.hero.titleAfter}</span>
              </h1>
            </Reveal>
          </div>

          <div className="hero__aside">
            <div className="hero__panel">
              <Reveal variant="up" initialVisible delay={120}>
                <p className={`hero__lead ${DS_CLASS.proseMuted}`}>{t.hero.body}</p>
              </Reveal>

              <Reveal variant="up" initialVisible delay={180}>
                <div className="hero__actions">
                  <a href="#proyecto-real" className={DS_CLASS.btnPrimary}>
                    {t.hero.ctaProjects}
                  </a>
                  <ExternalLink
                    href={whatsappUrl(t.whatsapp.defaultMessage)}
                    className={DS_CLASS.btnOutline}
                    showHint={false}
                  >
                    {t.hero.ctaWhatsapp}
                  </ExternalLink>
                </div>
              </Reveal>

              <Reveal variant="fade" initialVisible delay={240}>
                <ul className="hero__stack" aria-label={t.common.techAria}>
                  {TECH_STACK.map((tech) => (
                    <li key={tech}>
                      <span className={DS_CLASS.tag}>{tech}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
