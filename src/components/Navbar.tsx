"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Waves, Menu, X, ArrowUpRight, Phone, Mail } from "lucide-react";
import { CONTACT_INFO } from "@/data/ictiosData";

const NAV_ITEMS = [
  { name: "Inicio", href: "/#hero" },
  { name: "Números", href: "/#nuestros-numeros" },
  { name: "Por Qué Elegirnos", href: "/#porque-elegirnos" },
  { name: "Servicios", href: "/#servicios" },
  { name: "Equipo", href: "/#equipo" },
  { name: "Antecedentes", href: "/#antecedentes" },
  { name: "Clientes", href: "/clientes" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/80 py-3 sm:py-3.5"
            : "bg-black/40 backdrop-blur-md border-b border-white/10 py-3.5 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo Minimalist */}
          <Link href="/#hero" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:border-white/40 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] shrink-0">
              <Waves className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-100 transition-transform group-hover:scale-110" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.22em] text-white uppercase group-hover:text-zinc-200 transition-colors leading-tight">
                ICTIOS
              </span>
              <span className="text-[8px] sm:text-[9px] tracking-[0.14em] sm:tracking-[0.18em] text-zinc-400 uppercase font-mono">
                Consultora Ambiental
              </span>
            </div>
          </Link>

          {/* Centered Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xs font-medium text-zinc-300 tracking-wider uppercase hover:text-white transition-colors relative py-1 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Button - Desktop */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs font-medium text-white tracking-wider uppercase bg-black/40 backdrop-blur-md hover:bg-white hover:text-black border border-white/10 hover:border-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
            >
              <span>Contacto</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none touch-manipulation"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[56px] sm:top-[65px] z-40 bg-black/80 backdrop-blur-2xl border-b border-white/10 p-5 sm:p-6 lg:hidden max-h-[calc(100vh-60px)] overflow-y-auto shadow-2xl"
          >
            <div className="flex flex-col space-y-3">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs sm:text-sm font-medium text-zinc-300 hover:text-white tracking-wider uppercase py-2.5 border-b border-white/5 transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-3 flex flex-col gap-2.5">
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-2 text-xs text-zinc-400 hover:text-white py-1"
                >
                  <Mail className="w-4 h-4 text-zinc-400 shrink-0" />
                  <span className="break-all">{CONTACT_INFO.email}</span>
                </a>
                <a
                  href={`tel:${CONTACT_INFO.phones[0]}`}
                  className="flex items-center gap-2 text-xs text-zinc-400 hover:text-white py-1"
                >
                  <Phone className="w-4 h-4 text-zinc-400 shrink-0" />
                  <span>{CONTACT_INFO.phones[0]}</span>
                </a>
                <a
                  href="#contacto"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full mt-2 text-center py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-white hover:bg-zinc-200 transition-colors touch-manipulation"
                >
                  Contactar Ahora
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
