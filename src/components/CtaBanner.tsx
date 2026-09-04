"use client";

import { IconArrowRight } from "@/components/icons";
import { Magnetic } from "@/components/Magnetic";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { SplitTextReveal } from "@/components/motion/TextReveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function CtaBanner() {
  return (
    <section id="cta" className="cta-banner relative overflow-x-clip cv-auto">
      <div className="cta-banner-gradient" aria-hidden />

      <div className="site-container relative z-10 flex flex-col items-center justify-center py-[var(--section-y)] text-center">
        <MotionReveal variant="fade">
          <p className="eyebrow">Próximo paso</p>
        </MotionReveal>
        <MotionReveal variant="up" delay={30}>
          <h2 className="mt-10 max-w-[14ch] px-1 font-display text-[length:var(--text-hero)] font-bold leading-[0.95] tracking-[-0.04em] text-[var(--foreground)]">
            <SplitTextReveal text="Hagamos que tu web" delay={0.05} />
            <br />
            <span className="text-gradient">
              <SplitTextReveal text="genere consultas" delay={0.15} />
            </span>
          </h2>
        </MotionReveal>
        <MotionReveal variant="up" delay={60}>
          <p className="mx-auto mt-10 max-w-md text-[length:var(--text-lg)] leading-relaxed text-[var(--foreground-muted)]">
            Empezá por el formulario: te respondo con una propuesta clara y el siguiente paso.
          </p>
        </MotionReveal>
        <MotionReveal variant="scale" delay={90}>
          <div className="mt-14 flex w-full max-w-md flex-col items-stretch gap-4 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-5">
            <Magnetic strength={0.2} className="w-full sm:w-auto">
              <a href="#contacto" className="btn-primary focus-ring !min-h-12 !px-8 w-full">
                Pedir propuesta
                <IconArrowRight className="mi-icon mi-icon-right h-4 w-4" aria-hidden />
              </a>
            </Magnetic>
            <WhatsAppButton variant="ghost" strength={0.16} className="!min-h-12 !px-8 w-full">
              Hablar por WhatsApp
            </WhatsAppButton>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
