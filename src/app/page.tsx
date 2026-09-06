import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { IconComments } from "@/components/icons";
import { About } from "@/components/About";
import { Benefits } from "@/components/Benefits";
import { BentoGrid } from "@/components/BentoGrid";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Portfolio } from "@/components/Portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { Plans } from "@/components/Plans";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { PROBLEM_POINTS } from "@/data/site-content";
import { siteMetadata } from "@/lib/seo";

const Contact = dynamic(() => import("@/components/Contact").then((m) => m.Contact), {
  loading: () => <div className="section-shell min-h-[24rem]" aria-hidden />,
});

export const metadata: Metadata = {
  ...siteMetadata,
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <main id="contenido" className="site-shell relative z-10" aria-label="Contenido principal">
        <Hero />

        <Marquee />

        <section id="problema" className="section-shell">
          <div className="cq mx-auto max-w-3xl">
            <SectionHeader
              label="El problema"
              title="Tenés tráfico, pero no consultas"
              description="Perdés tiempo respondiendo lo mismo por WhatsApp y la web no ayuda. Una landing clara ordena el contacto desde el primer click."
            />
            <Reveal variant="scale" delay={40}>
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
                  Menos vueltas, más consultas.{" "}
                  <span className="text-gradient">Para eso laburo.</span>
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <Benefits />

        <Portfolio />
        <BentoGrid />
        <Services />
        <Plans />
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
