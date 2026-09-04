import type { Metadata } from "next";
import { IconComments } from "@/components/icons";
import { About } from "@/components/About";
import { BentoGrid } from "@/components/BentoGrid";
import { Contact } from "@/components/Contact";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { MotionReveal } from "@/components/motion/MotionReveal";
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
      <main id="contenido" className="site-shell relative z-10" aria-label="Contenido principal">
        <Hero />

        <div className="marquee-section border-y border-[var(--section-divider)] py-6" aria-hidden>
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
                    className="mx-10 flex shrink-0 items-center gap-10 font-display text-[length:var(--text-sm)] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]"
                  >
                    {item}
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] opacity-60" />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <section id="problema" className="section-shell">
          <div className="cq mx-auto max-w-3xl">
            <SectionHeader
              label="El problema"
              title="Tenés tráfico, pero no consultas"
              description="Se pierde tiempo respondiendo lo mismo por WhatsApp y la web no guía a nadie. Una landing clara convierte mejor y ordena el contacto desde el primer click."
            />
            <MotionReveal variant="scale" delay={40}>
              <ul className="cq-grid-problem mb-12">
                {PROBLEM_POINTS.map((point, i) => (
                  <li
                    key={point}
                    className="glass-card rounded-[var(--radius-xl)] p-6 text-center text-[length:var(--text-sm)] leading-relaxed text-[var(--foreground-muted)] sm:text-[length:var(--text-base)]"
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    <span className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent-soft)] text-sm font-bold text-[var(--accent)]">
                      {i + 1}
                    </span>
                    <p>{point}</p>
                  </li>
                ))}
              </ul>
              <div className="mx-auto max-w-xl text-center">
                <IconComments className="mx-auto h-6 w-6 text-[var(--accent)]" aria-hidden />
                <p className="mt-6 font-display text-[length:var(--text-xl)] font-semibold leading-snug text-[var(--foreground)] sm:text-[length:var(--text-2xl)]">
                  Menos fricción, más consultas reales.{" "}
                  <span className="text-gradient">Ese es el objetivo.</span>
                </p>
              </div>
            </MotionReveal>
          </div>
        </section>

        <section id="beneficios" className="section-shell">
          <div className="cq mx-auto max-w-4xl">
            <SectionHeader label="Beneficios" title="Lo que cambia con una buena landing" />

            <div className="cq-grid-benefits">
              {BENEFITS.map((b, i) => (
                <MotionReveal
                  key={b.title}
                  className={b.span || undefined}
                  variant={i % 2 === 0 ? "up" : "scale"}
                  delay={i * 40}
                >
                  <article
                    className={`glass-card h-full rounded-[var(--radius-xl)] p-8 ${
                      b.accent ? "glass-card-accent" : ""
                    }`}
                  >
                    <h3 className="font-display text-[length:var(--text-xl)] font-bold text-[var(--foreground)]">
                      {b.title}
                    </h3>
                    <p className="mt-4 max-w-md text-[length:var(--text-sm)] leading-relaxed text-[var(--foreground-muted)] sm:text-[length:var(--text-base)]">
                      {b.desc}
                    </p>
                  </article>
                </MotionReveal>
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
