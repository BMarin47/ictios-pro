"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Compass, Sparkles } from "lucide-react";
import { HERO_SLOGANS } from "@/data/ictiosData";

export function Hero() {
  const [sloganIndex, setSloganIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSloganIndex((prev) => (prev + 1) % HERO_SLOGANS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const currentSlogan = HERO_SLOGANS[sloganIndex];

  // 4 fotografías limpias en orden estricto proporcionadas por el usuario:
  // 1: Motorhome + Bote Sea Runner
  // 2: Equipo de Expertos en el bote
  // 3: Bote verde con equipamiento científico Raytheon y cordillera
  // 4: Motor Honda ICTIOS al atardecer
  const HERO_BACKGROUNDS = [
    "/images/hero-1-motorhome.jpg",
    "/images/hero-2-equipo.jpg",
    "/images/hero-3-bote-verde.jpg",
    "/images/hero-4-atardecer.jpg",
  ];

  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden bg-black text-white flex items-center justify-center"
    >
      {/* Background Image - strictly natural proportions: object-cover object-center, ZERO zoom */}
      <AnimatePresence mode="wait">
        <motion.div
          key={sloganIndex}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={HERO_BACKGROUNDS[sloganIndex]}
            alt={currentSlogan.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* Subtle, elegant Starlink overlay: soft tint and bottom gradient */}
      <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 pointer-events-none" />

      {/* Hero Content with Glassmorphic Container (z-20 above overlay) */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-12 flex flex-col items-center">
        {/* Glassmorphism Wrapper for main titles and rotating slogans */}
        <div className="w-full max-w-4xl p-6 sm:p-10 rounded-3xl bg-black/30 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.6)] flex flex-col items-center">
          {/* Subtle pill tag */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.08] border border-white/20 backdrop-blur-md mb-6 shadow-lg shadow-black/40"
          >
            <Sparkles className="w-3.5 h-3.5 text-zinc-200 animate-pulse" />
            <span className="text-[11px] font-medium tracking-[0.25em] text-zinc-200 uppercase drop-shadow-md">
              Ingeniería Limnológica & Monitoreo Ambiental
            </span>
          </motion.div>

          {/* Huge Bold Title with Drop Shadow */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white uppercase leading-none drop-shadow-[0_6px_24px_rgba(0,0,0,0.95)]"
          >
            ICTIOS
            <span className="block text-2xl sm:text-4xl md:text-5xl font-light tracking-[0.18em] text-zinc-200 mt-2 sm:mt-3 drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
              CONSULTORA AMBIENTAL
            </span>
          </motion.h1>

          {/* Dynamic Rotating Slogans */}
          <div className="min-h-[100px] sm:min-h-[85px] mt-6 max-w-2xl flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlogan.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col items-center"
              >
                <div className="inline-block px-3 py-0.5 rounded-full bg-white/10 border border-white/25 text-[10px] font-mono tracking-widest uppercase text-zinc-200 mb-2 shadow-md">
                  {currentSlogan.badge}
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-2 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                  &ldquo;{currentSlogan.title}&rdquo;
                </h2>
                <p className="text-sm sm:text-base text-zinc-200 max-w-xl font-light leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
                  {currentSlogan.subtitle}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Apple-style Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#servicios"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-semibold tracking-widest uppercase text-black bg-white hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] hover:scale-[1.02] flex items-center justify-center gap-2 group"
            >
              <span>Explorar Servicios</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#equipo"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-semibold tracking-widest uppercase text-white bg-zinc-950/70 hover:bg-zinc-900 border border-white/20 hover:border-white/50 backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2"
            >
              <span>Ver Equipo de Trabajo</span>
            </a>
          </motion.div>
        </div>

        {/* Feature quick stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-left w-full max-w-4xl"
        >
          <div className="bg-black/30 backdrop-blur-sm p-3 rounded-2xl border border-white/5">
            <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight drop-shadow-md">25+</div>
            <div className="text-[10px] uppercase tracking-wider text-zinc-300 font-mono mt-0.5">Años de Trayectoria</div>
          </div>
          <div className="bg-black/30 backdrop-blur-sm p-3 rounded-2xl border border-white/5">
            <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight drop-shadow-md">50+</div>
            <div className="text-[10px] uppercase tracking-wider text-zinc-300 font-mono mt-0.5">Equipos Especializados</div>
          </div>
          <div className="bg-black/30 backdrop-blur-sm p-3 rounded-2xl border border-white/5">
            <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight drop-shadow-md">100%</div>
            <div className="text-[10px] uppercase tracking-wider text-zinc-300 font-mono mt-0.5">Operatividad en Campo</div>
          </div>
          <div className="bg-black/30 backdrop-blur-sm p-3 rounded-2xl border border-white/5">
            <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight drop-shadow-md">15+</div>
            <div className="text-[10px] uppercase tracking-wider text-zinc-300 font-mono mt-0.5">Avales Oficiales</div>
          </div>
        </motion.div>
      </div>

      {/* Animated Subtle Scroll Indicator */}
      <motion.a
        href="#porque-elegirnos"
        aria-label="Scroll to Por qué elegirnos"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-zinc-300 hover:text-white transition-colors cursor-pointer group"
      >
        <span className="text-[9px] uppercase tracking-[0.25em] font-mono text-zinc-300 group-hover:text-zinc-100 drop-shadow">
          Deslizar
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-zinc-300 group-hover:text-white" />
        </motion.div>
      </motion.a>
    </section>
  );
}
