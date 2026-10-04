"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Waves, Menu, X, ArrowUpRight, Phone, Mail } from "lucide-react";
import { CONTACT_INFO } from "@/data/ictiosData";

const NAV_ITEMS = [
  { name: "Inicio", href: "/#hero" },
  { name: "Por Qué Elegirnos", href: "/#porque-elegirnos" },
  { name: "Servicios", href: "/#servicios" },
  { name: "Equipamiento", href: "/#equipamiento" },
  { name: "Antecedentes", href: "/#antecedentes" },
  { name: "Equipo", href: "/#equipo" },
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
            ? "bg-black/75 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50 py-3.5"
            : "bg-black/30 backdrop-blur-md border-b border-white/5 py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo Minimalist */}
          <Link href="#hero" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full bg-zinc-900 border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:border-white/50 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              <Waves className="w-5 h-5 text-zinc-100 transition-transform group-hover:scale-110" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-[0.22em] text-white uppercase group-hover:text-zinc-200 transition-colors">
                ICTIOS
              </span>
              <span className="text-[9px] tracking-[0.18em] text-zinc-400 uppercase font-mono">
                Consultora Ambiental
              </span>
            </div>
          </Link>

          {/* Centered Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-7">
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

          {/* Right Action Button - Apple Style */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-medium text-white tracking-wider uppercase bg-white/5 hover:bg-white hover:text-black border border-white/20 hover:border-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.35)]"
            >
              <span>Contacto</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors focus:outline-none"
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
            className="fixed inset-x-0 top-[65px] z-40 bg-zinc-950/95 backdrop-blur-2xl border-b border-zinc-800 p-6 lg:hidden"
          >
            <div className="flex flex-col space-y-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-zinc-300 hover:text-white tracking-wider uppercase py-2 border-b border-zinc-900 transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-2 text-xs text-zinc-400 hover:text-white"
                >
                  <Mail className="w-4 h-4 text-zinc-400" />
                  <span>{CONTACT_INFO.email}</span>
                </a>
                <a
                  href={`tel:${CONTACT_INFO.phones[0]}`}
                  className="flex items-center gap-2 text-xs text-zinc-400 hover:text-white"
                >
                  <Phone className="w-4 h-4 text-zinc-400" />
                  <span>{CONTACT_INFO.phones[0]}</span>
                </a>
                <a
                  href="#contacto"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full mt-2 text-center py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-white hover:bg-zinc-200 transition-colors"
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
