import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { getDictionary } from "@/i18n/get-dictionary";
import { DS_CLASS } from "@/lib/design-system";
import { whatsappUrl } from "@/lib/constants";

export async function CtaBanner() {
  const t = await getDictionary();

  return (
    <section id="cta" className={`cta-banner ${DS_CLASS.sectionDark}`}>
      <div className={DS_CLASS.container}>
        <Reveal variant="up" className="cta-banner__inner">
          <p className={DS_CLASS.eyebrow}>
            <span className={DS_CLASS.eyebrowDot} aria-hidden />
            {t.cta.label}
          </p>
          <h2>
            {t.cta.titleBefore}
            <br />
            <span className="text-accent">{t.cta.titleAccent}</span>
          </h2>
          <p className={DS_CLASS.proseMuted}>{t.cta.body}</p>
          <div className="cta-banner__actions">
            <a href="#contacto" className={DS_CLASS.btnPrimary}>
              {t.cta.ctaProposal}
            </a>
            <WhatsAppButton
              magnetic={false}
              href={whatsappUrl(t.whatsapp.defaultMessage)}
              className={DS_CLASS.btnOutline}
              showIcon={false}
            >
              {t.cta.ctaWhatsapp}
            </WhatsAppButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
