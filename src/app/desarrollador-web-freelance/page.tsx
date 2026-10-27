import type { Metadata } from "next";
import { SeoLanding, seoLandingMetadata } from "@/components/SeoLanding";
import { getSeoLanding } from "@/data/seo-pages";
import { notFound } from "next/navigation";

const PAGE = getSeoLanding("desarrollador-web-freelance");

export const metadata: Metadata = PAGE ? seoLandingMetadata(PAGE) : {};

export default function FreelancePage() {
  if (!PAGE) notFound();
  return <SeoLanding page={PAGE} />;
}
