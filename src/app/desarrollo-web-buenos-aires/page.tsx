import type { Metadata } from "next";
import { SeoLanding, seoLandingMetadata } from "@/components/SeoLanding";
import { getSeoLanding } from "@/data/seo-pages";
import { notFound } from "next/navigation";

const PAGE = getSeoLanding("desarrollo-web-buenos-aires");

export const metadata: Metadata = PAGE ? seoLandingMetadata(PAGE) : {};

export default function DesarrolloWebBuenosAiresPage() {
  if (!PAGE) notFound();
  return <SeoLanding page={PAGE} />;
}
