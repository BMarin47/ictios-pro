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
  title: "Ictios S.A. Consultora Ambiental | Batimetrías, Limnología y Monitoreos",
  description:
    "Consultora ambiental líder en monitoreos de fauna íctica, estudios batimétricos, calidad de agua, piscicultura y gestión ambiental en Argentina. Flota especializada y equipamiento de alta precisión.",
  keywords: [
    "Ictios Consultora Ambiental",
    "Batimetría Argentina",
    "Monitoreo de Calidad de Agua",
    "Fauna Íctica",
    "Limnología",
    "San Rafael Mendoza",
    "Pampa Energía",
    "EIA Ambiental",
  ],
  authors: [{ name: "Ictios S.A." }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
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
      <body className="min-h-screen bg-black text-zinc-100 antialiased selection:bg-white/20 selection:text-white">
        {children}
      </body>
    </html>
  );
}
