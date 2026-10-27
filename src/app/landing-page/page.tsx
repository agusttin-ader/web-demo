import type { Metadata } from "next";
import { SeoLanding, seoLandingMetadata } from "@/components/SeoLanding";
import { getSeoLanding } from "@/data/seo-pages";
import { notFound } from "next/navigation";

const PAGE = getSeoLanding("landing-page");

export const metadata: Metadata = PAGE ? seoLandingMetadata(PAGE) : {};

export default function LandingPagePage() {
  if (!PAGE) notFound();
  return <SeoLanding page={PAGE} />;
}
