import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { ClientsSection } from "@/components/ClientsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Nuestros Clientes",
  description:
    "Clientes corporativos de Ictios: Pampa Energía, AES Argentina, Barrick, Arcor, Central Puerto, UNCUYO e Irrigación. Consultoría ambiental y estudios ictícolas auditados en todo el país.",
  alternates: {
    canonical: "https://ictios-pro.vercel.app/clientes",
  },
};

export default function ClientesPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20 selection:text-white flex flex-col">
      <Navbar />

      <main className="flex-1 pt-16 sm:pt-24">
        {/* Top Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-4 sm:pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white transition-colors py-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Volver a la Portada Principal</span>
          </Link>
        </div>

        {/* Clients Main Content */}
        <ClientsSection />

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
