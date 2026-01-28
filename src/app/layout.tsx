import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700"],
});

// metadataBase declared above to ensure Next resolves social images correctly

export const metadata: Metadata = {
  title: "Agustín Ader | Desarrollo Web Profesional",
  description: "Desarrollo de sitios web profesionales para negocios y emprendimientos. Especial enfoque en servicios y turismo.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    url: "https://www.agustinaderdev.com",
    images: [
      {
        url: "/og-image.png",
        alt: "Agustín Ader - Desarrollo Web Profesional",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.agustinaderdev.com",
  },
};

export const metadataBase = new URL("https://www.agustinaderdev.com");

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "name": "Agustín Ader",
      "url": "https://www.agustinaderdev.com",
      "sameAs": ["https://www.instagram.com/agusttin.ader/"],
      "email": "mailto:agusttin.dev@gmail.com"
    },
    {
      "@type": "WebSite",
      "url": "https://www.agustinaderdev.com",
      "name": "Agustín Ader | Desarrollo Web Profesional",
      "description": "Desarrollo de sitios web profesionales para negocios y emprendimientos. Especial enfoque en servicios y turismo.",
      "publisher": {
        "@type": "Person",
        "name": "Agustín Ader"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR">
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          key="ldjson"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
