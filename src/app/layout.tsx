import type { Metadata } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ScrollToTopOnLoad } from "@/components/ScrollToTopOnLoad";
import { siteMetadata } from "@/lib/seo";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = siteMetadata;

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0b0c0e" },
    { media: "(prefers-color-scheme: light)", color: "#0b0c0e" },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
  colorScheme: "dark" as const,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR">
      <head>
        <link rel="dns-prefetch" href="https://wa.me" />
        <JsonLd />
      </head>
      <body className={`${plusJakarta.variable} ${bricolage.variable} site-shell mesh-bg font-sans antialiased`}>
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[var(--radius)] focus:bg-[var(--btn-primary-bg)] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-[var(--btn-primary-text)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
        >
          Saltar al contenido principal
        </a>
        <ScrollToTopOnLoad />
        <ScrollProgress />
        <Header />
        {children}
      </body>
    </html>
  );
}
