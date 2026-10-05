import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ictios-pro.vercel.app"),
  title: {
    default: "Ictios | Consultoría Ambiental y Estudios Ictícolas",
    template: "%s | Ictios",
  },
  description:
    "Consultora ambiental especializada en relevamiento de fauna acuática, estudios ictícolas, líneas de base y monitoreo de biodiversidad para proyectos de alta complejidad.",
  keywords: [
    "consultoría ambiental",
    "estudios ictícolas",
    "ictiología",
    "relevamiento de peces",
    "fauna acuática",
    "impacto ambiental",
    "rescate de fauna",
    "monitoreo de biodiversidad",
    "líneas de base",
    "limnología",
    "estudios batimétricos",
    "ictios consultora ambiental",
    "argentina",
  ],
  authors: [{ name: "Ictios S.A." }],
  creator: "Ictios S.A.",
  publisher: "Ictios S.A.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://ictios-pro.vercel.app",
    siteName: "Ictios - Consultoría Ambiental y Estudios Ictícolas",
    title: "Ictios | Consultoría Ambiental y Estudios Ictícolas",
    description:
      "Consultora ambiental especializada en relevamiento de fauna acuática, estudios ictícolas, líneas de base y monitoreo de biodiversidad para proyectos de alta complejidad.",
    images: [
      {
        url: "/images/hero-1-motorhome.jpg",
        width: 1200,
        height: 630,
        alt: "Ictios Consultora Ambiental y Estudios Ictícolas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ictios | Consultoría Ambiental y Estudios Ictícolas",
    description:
      "Consultora ambiental especializada en relevamiento de fauna acuática, estudios ictícolas, líneas de base y monitoreo de biodiversidad para proyectos de alta complejidad.",
    images: ["/images/hero-1-motorhome.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://ictios-pro.vercel.app",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Ictios S.A. Consultora Ambiental",
  url: "https://ictios-pro.vercel.app",
  logo: "https://ictios-pro.vercel.app/images/hero-1-motorhome.jpg",
  description:
    "Consultora ambiental especializada en relevamiento de fauna acuática, estudios ictícolas, líneas de base y monitoreo de biodiversidad para proyectos de alta complejidad.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Rafael",
    addressRegion: "Mendoza",
    addressCountry: "AR",
  },
  areaServed: "Argentina",
  serviceType: [
    "Consultoría Ambiental",
    "Estudios Ictícolas",
    "Relevamiento de Fauna Acuática",
    "Estudios de Impacto Ambiental",
    "Líneas de Base",
    "Monitoreo de Biodiversidad",
    "Rescate de Fauna",
    "Estudios Batimétricos",
    "Limnología",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-black text-zinc-100 antialiased selection:bg-white/20 selection:text-white">
        {children}
      </body>
    </html>
  );
}
