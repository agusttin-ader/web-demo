import { ExternalLink } from "@/components/ExternalLink";
import { HeroMedia } from "@/components/HeroMedia";
import { HeroTitle, type HeroTitleLine } from "@/components/HeroTitle";
import { Reveal } from "@/components/Reveal";
import { getDictionary } from "@/i18n/get-dictionary";
import { DS_CLASS } from "@/lib/design-system";
import { whatsappUrl } from "@/lib/constants";

export async function Hero() {
  const t = await getDictionary();

  return (
    <section id="hero" className="hero hero--video" aria-labelledby="hero-heading">
      <div className="hero__stage">
        <div className="hero__media">
          <HeroMedia posterSrc="/about.jpeg" label={t.hero.photoAlt} />
        </div>

        <div className="hero__scrim" aria-hidden />

        <div className={`hero__copy ${DS_CLASS.container}`}>
          <div className="hero__copy-inner">
            <Reveal variant="fade" initialVisible delay={0}>
              <p className={`${DS_CLASS.eyebrow} hero__eyebrow`}>
                <span className={DS_CLASS.eyebrowDot} aria-hidden />
                {t.hero.eyebrow}
              </p>
            </Reveal>

            <Reveal variant="up" initialVisible delay={40}>
              <p className="hero__brand">{t.hero.brand}</p>
            </Reveal>

            <HeroTitle id="hero-heading" lines={t.hero.titleLines as HeroTitleLine[]} />

            <Reveal variant="up" initialVisible delay={120}>
              <p className="hero__lead">{t.hero.body}</p>
            </Reveal>

            <Reveal variant="up" initialVisible delay={180}>
              <div className="hero__actions">
                <a href="#proyecto-real" className={DS_CLASS.btnPrimary}>
                  {t.hero.ctaProjects}
                </a>
                <ExternalLink
                  href={whatsappUrl(t.whatsapp.defaultMessage)}
                  className={`${DS_CLASS.btnOutline} hero__btn-ghost`}
                  showHint={false}
                >
                  {t.hero.ctaWhatsapp}
                </ExternalLink>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
