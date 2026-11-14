import type { Metadata } from "next";
import { About } from "@/components/About";
import { Benefits } from "@/components/Benefits";
import { BentoGrid } from "@/components/BentoGrid";
import { Contact } from "@/components/Contact";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { Plans } from "@/components/Plans";
import { Problem } from "@/components/Problem";
import { Services } from "@/components/Services";
import dynamic from "next/dynamic";

const WhatsAppFab = dynamic(
  () => import("@/components/WhatsAppFab").then((mod) => mod.WhatsAppFab),
  { loading: () => null }
);
import { homeMetadata } from "@/lib/seo";
import { SeoFaq } from "@/components/SeoFaq";
import { SeoHub } from "@/components/SeoHub";
import { HomeJsonLd } from "@/components/JsonLd";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";

export const metadata: Metadata = homeMetadata;

export default async function Home() {
  const locale = await getLocale();
  const t = await getDictionary(locale);

  return (
    <>
      <HomeJsonLd />
      <main id="contenido" aria-label={t.common.mainAria}>
        <Hero />
        <Portfolio />
        <About />
        <BentoGrid />
        <Services />
        <Benefits />
        <Plans />
        <Problem />
        <SeoFaq />
        <SeoHub />
        <CtaBanner />
        <Contact />
        <Footer />
      </main>

      <WhatsAppFab />
    </>
  );
}
