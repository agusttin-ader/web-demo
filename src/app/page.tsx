import type { Metadata } from "next";
import { About } from "@/components/About";
import { Benefits } from "@/components/Benefits";
import { BentoGrid } from "@/components/BentoGrid";
import { Contact } from "@/components/Contact";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Portfolio } from "@/components/Portfolio";
import { Problem } from "@/components/Problem";
import { Plans } from "@/components/Plans";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { homeMetadata } from "@/lib/seo";
import { SeoFaq } from "@/components/SeoFaq";
import { getDictionary } from "@/i18n/get-dictionary";

export const metadata: Metadata = homeMetadata;

export default async function Home() {
  const t = await getDictionary();

  return (
    <>
      <main id="contenido" aria-label={t.common.mainAria}>
        <Hero />
        <TrustBar />
        <Problem />
        <Benefits />
        <Portfolio />
        <BentoGrid />
        <Services />
        <Plans />
        <About />
        <Skills />
        <SeoFaq />
        <CtaBanner />
        <Contact />
        <Footer />
      </main>

      <WhatsAppFab />
    </>
  );
}
