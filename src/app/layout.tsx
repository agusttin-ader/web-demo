import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { ScrollProgress } from "@/components/ScrollProgress";
import { siteMetadata } from "@/lib/seo";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = siteMetadata;

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#05070a" },
    { media: "(prefers-color-scheme: light)", color: "#05070a" },
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
      <body className={`${manrope.variable} ${syne.variable} site-shell font-sans antialiased`}>
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[var(--radius)] focus:bg-[var(--btn-primary-bg)] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-[var(--btn-primary-text)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
        >
          Saltar al contenido principal
        </a>
        <ScrollProgress />
        <Header />
        {children}
      </body>
    </html>
  );
}
