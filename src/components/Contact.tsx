import { BudgetForm } from "@/components/BudgetForm";
import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { getDictionary } from "@/i18n/get-dictionary";
import { DS_CLASS } from "@/lib/design-system";
import { whatsappUrl } from "@/lib/constants";

export async function Contact() {
  const t = await getDictionary();

  return (
    <section id="contacto" className={`contact ${DS_CLASS.sectionLight}`} aria-labelledby="contacto-heading">
      <div className={DS_CLASS.container}>
        <Reveal variant="up">
          <header className="ds-section-header contact__header">
            <p className={DS_CLASS.eyebrow}>
              <span className={DS_CLASS.eyebrowDot} aria-hidden />
              {t.contact.label}
            </p>
            <h2 id="contacto-heading">
              {t.contact.titleBefore}{" "}
              <span className="text-accent">{t.contact.titleAccent}</span>
            </h2>
            <p className={`ds-section-header__desc ${DS_CLASS.proseMuted}`}>{t.contact.body}</p>
          </header>
        </Reveal>

        <Reveal variant="up" delay={60}>
          <div className="contact__shell">
            <aside className="contact__aside">
              <ul className="contact__promises">
                {t.contact.promises.map((item) => (
                  <li key={item.title}>
                    <p className="contact__promise-title">{item.title}</p>
                    <p className="contact__promise-desc">{item.desc}</p>
                  </li>
                ))}
              </ul>

              <div className="contact__whatsapp">
                <p className="contact__whatsapp-prompt">{t.contact.whatsappPrompt}</p>
                <WhatsAppButton
                  magnetic={false}
                  href={whatsappUrl(t.whatsapp.defaultMessage)}
                  className={`${DS_CLASS.btnOutline} contact__whatsapp-btn`}
                  showIcon={false}
                >
                  {t.contact.whatsappCta}
                </WhatsAppButton>
              </div>
            </aside>

            <div className="contact__form-col">
              <BudgetForm featured showHeader={false} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
