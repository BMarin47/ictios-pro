import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BentoGrid } from "@/components/BentoGrid";
import { MainServices } from "@/components/MainServices";
import { DetailedEquipment } from "@/components/DetailedEquipment";
import { Antecedents } from "@/components/Antecedents";
import { Team } from "@/components/Team";
import { ClientsSection } from "@/components/ClientsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20 selection:text-white flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <BentoGrid />
        <MainServices />
        <DetailedEquipment />
        <Antecedents />
        <Team />
        <ClientsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
