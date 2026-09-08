import { IconArrowRight } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { getDictionary } from "@/i18n/get-dictionary";
import { whatsappUrl } from "@/lib/constants";

export async function CtaBanner() {
  const t = await getDictionary();

  return (
    <section id="cta" className="cta-banner relative overflow-x-clip cv-auto">
      <div className="cta-banner-gradient" aria-hidden />

      <div className="site-container relative z-10 flex flex-col items-center justify-center py-[var(--section-y)] text-center">
        <Reveal variant="fade">
          <p className="eyebrow">{t.cta.label}</p>
        </Reveal>
        <Reveal variant="up" delay={40}>
          <h2 className="mt-10 max-w-[16ch] px-1 font-display text-[length:var(--text-hero)] font-bold leading-[0.95] tracking-[-0.04em] text-[var(--foreground)]">
            {t.cta.titleBefore}
            <br />
            <span className="text-gradient">{t.cta.titleAccent}</span>
          </h2>
        </Reveal>
        <Reveal variant="up" delay={80}>
          <p className="mx-auto mt-10 max-w-md text-[length:var(--text-lg)] leading-relaxed text-[var(--foreground-muted)]">
            {t.cta.body}
          </p>
        </Reveal>
        <Reveal variant="up" delay={120}>
          <div className="mt-14 flex w-full max-w-md flex-col items-stretch gap-4 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-5">
            <a href="#contacto" className="btn-primary focus-ring !min-h-12 !px-8 w-full sm:w-auto">
              {t.cta.ctaProposal}
              <IconArrowRight className="mi-icon mi-icon-right h-4 w-4" aria-hidden />
            </a>
            <WhatsAppButton
              variant="ghost"
              magnetic={false}
              className="!min-h-12 !px-8 w-full sm:w-auto"
              href={whatsappUrl(t.whatsapp.defaultMessage)}
            >
              {t.cta.ctaWhatsapp}
            </WhatsAppButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
