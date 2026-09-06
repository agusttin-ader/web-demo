import { IconArrowRight } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function CtaBanner() {
  return (
    <section id="cta" className="cta-banner relative overflow-x-clip cv-auto">
      <div className="cta-banner-gradient" aria-hidden />

      <div className="site-container relative z-10 flex flex-col items-center justify-center py-[var(--section-y)] text-center">
        <Reveal variant="fade">
          <p className="eyebrow">Próximo paso</p>
        </Reveal>
        <Reveal variant="up" delay={40}>
          <h2 className="mt-10 max-w-[14ch] px-1 font-display text-[length:var(--text-hero)] font-bold leading-[0.95] tracking-[-0.04em] text-[var(--foreground)]">
            Hagamos que tu web
            <br />
            <span className="text-gradient">genere consultas</span>
          </h2>
        </Reveal>
        <Reveal variant="up" delay={80}>
          <p className="mx-auto mt-10 max-w-md text-[length:var(--text-lg)] leading-relaxed text-[var(--foreground-muted)]">
            Empezá por el formulario — te mando una propuesta clara y vemos el siguiente paso.
          </p>
        </Reveal>
        <Reveal variant="up" delay={120}>
          <div className="mt-14 flex w-full max-w-md flex-col items-stretch gap-4 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-5">
            <a href="#contacto" className="btn-primary focus-ring !min-h-12 !px-8 w-full sm:w-auto">
              Pedir propuesta
              <IconArrowRight className="mi-icon mi-icon-right h-4 w-4" aria-hidden />
            </a>
            <WhatsAppButton variant="ghost" magnetic={false} className="!min-h-12 !px-8 w-full">
              Hablar por WhatsApp
            </WhatsAppButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
