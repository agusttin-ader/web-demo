import type { Metadata } from "next";
import { IconComments } from "@/components/icons";
import { About } from "@/components/About";
import { BentoGrid } from "@/components/BentoGrid";
import { Contact } from "@/components/Contact";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { BENEFITS, MARQUEE_ITEMS, PROBLEM_POINTS } from "@/data/site-content";
import { siteMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...siteMetadata,
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <main id="contenido" className="page-mesh site-shell relative z-10" aria-label="Contenido principal">
        <Hero />

        <div className="border-y border-[var(--section-divider)] py-5" aria-hidden>
          <div className="site-container overflow-x-clip">
            <div className="marquee-strip md:hidden">
              {MARQUEE_ITEMS.map((item) => (
                <span key={item} className="eyebrow-muted tracking-[0.14em]">
                  {item}
                </span>
              ))}
            </div>
            <div className="hidden overflow-hidden md:block">
              <div className="marquee-track">
                {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
                  <span
                    key={`${item}-${i}`}
                    className="mx-8 flex shrink-0 items-center gap-8 font-display text-[length:var(--text-sm)] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]"
                  >
                    {item}
                    <span className="h-1 w-1 rounded-full bg-[var(--accent)] opacity-50" />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <section id="problema" className="section-shell">
          <div className="cq mx-auto max-w-3xl">
            <Reveal>
              <SectionHeader
                label="El problema"
                title="Tenes trafico, pero no consultas"
                description="Se pierde tiempo respondiendo lo mismo por WhatsApp y la web no guia a nadie. Una landing clara convierte mejor y ordena el contacto desde el primer click."
              />
            </Reveal>
            <Reveal>
              <ul className="cq-grid-problem mb-10">
                {PROBLEM_POINTS.map((point) => (
                  <li
                    key={point}
                    className="border-t border-[var(--section-divider)] py-6 text-center text-[length:var(--text-sm)] leading-relaxed text-[var(--foreground-muted)] sm:border-t-0 sm:py-2 sm:text-[length:var(--text-base)]"
                  >
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mx-auto max-w-xl border-t border-[var(--section-divider)] pt-10 text-center">
                <IconComments className="mx-auto h-5 w-5 text-[var(--accent)]" aria-hidden />
                <p className="mt-5 font-display text-[length:var(--text-lg)] font-semibold leading-snug text-[var(--foreground)] sm:text-[length:var(--text-xl)]">
                  Menos friccion, mas consultas reales. Ese es el objetivo de cada decision.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="beneficios" className="section-shell">
          <div className="cq mx-auto max-w-4xl">
            <Reveal>
              <SectionHeader label="Beneficios" title="Lo que cambia con una buena landing" />
            </Reveal>

            <div className="cq-grid-benefits">
              {BENEFITS.map((b, i) => (
                <Reveal
                  key={b.title}
                  className={b.span || undefined}
                  variant={i % 2 === 0 ? "up" : "fade"}
                  delay={i * 70}
                >
                  <article
                    className={`h-full border-t border-[var(--section-divider)] py-8 ${
                      b.accent ? "border-[color-mix(in_srgb,var(--accent)_35%,var(--section-divider))]" : ""
                    }`}
                  >
                    <h3 className="font-display text-[length:var(--text-xl)] font-semibold text-[var(--foreground)]">
                      {b.title}
                    </h3>
                    <p className="mt-4 max-w-md text-[length:var(--text-sm)] leading-relaxed text-[var(--foreground-muted)] sm:text-[length:var(--text-base)]">
                      {b.desc}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Portfolio />
        <BentoGrid />
        <Services />
        <About />
        <Skills />
        <CtaBanner />
        <Contact />
        <Footer />
      </main>

      <WhatsAppFab />
    </>
  );
}
