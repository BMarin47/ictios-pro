"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Sparkles } from "lucide-react";
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
    <>
      <section
        id="hero"
        className="relative w-full h-[55vh] md:h-screen overflow-hidden bg-black text-white flex items-center justify-center"
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
              sizes="(max-width: 768px) 100vw, 100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Subtle, elegant Starlink overlay: soft tint and bottom gradient */}
        <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 z-10 pointer-events-none" />

        {/* Hero Content with Glassmorphic Container (z-20 above overlay) */}
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center pt-8 md:pt-0 flex flex-col items-center">
          {/* Glassmorphism Wrapper for main titles and rotating slogans */}
          <div className="w-full max-w-2xl p-3 sm:p-5 md:p-8 rounded-xl sm:rounded-3xl bg-black/40 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.6)] flex flex-col items-center">
            {/* Subtle pill tag */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/[0.08] border border-white/20 backdrop-blur-md mb-1.5 sm:mb-3 shadow-lg shadow-black/40"
            >
              <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-zinc-200 animate-pulse shrink-0" />
              <span className="text-[8px] sm:text-[10px] md:text-[11px] font-medium tracking-[0.14em] sm:tracking-[0.25em] text-zinc-200 uppercase drop-shadow-md">
                Ingeniería Limnológica & Monitoreo Ambiental
              </span>
            </motion.div>

            {/* Huge Bold Title - strictly text-3xl md:text-6xl */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="text-3xl md:text-6xl font-black tracking-tighter text-white uppercase leading-none drop-shadow-[0_6px_24px_rgba(0,0,0,0.95)]"
            >
              ICTIOS
              <span className="block text-xs sm:text-lg md:text-3xl font-light tracking-[0.14em] sm:tracking-[0.18em] text-zinc-200 mt-0.5 sm:mt-1.5 drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                CONSULTORA AMBIENTAL
              </span>
            </motion.h1>

            {/* Dynamic Rotating Slogans */}
            <div className="min-h-[46px] sm:min-h-[60px] md:min-h-[75px] mt-1.5 sm:mt-3 max-w-lg flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlogan.title}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="flex flex-col items-center text-center px-1"
                >
                  <div className="inline-block px-2 py-0.5 rounded-full bg-white/10 border border-white/25 text-[7px] sm:text-[9px] font-mono tracking-widest uppercase text-zinc-200 mb-0.5 sm:mb-1 shadow-md">
                    {currentSlogan.badge}
                  </div>
                  <h2 className="text-xs sm:text-base md:text-xl font-semibold tracking-tight text-white mb-0.5 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                    &ldquo;{currentSlogan.title}&rdquo;
                  </h2>
                  <p className="text-[10px] sm:text-xs md:text-sm text-zinc-300 font-light leading-snug line-clamp-1 sm:line-clamp-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
                    {currentSlogan.subtitle}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Apple-style Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="mt-2 sm:mt-4 flex flex-row items-center justify-center gap-2 sm:gap-4 w-full sm:w-auto"
            >
              <a
                href="#servicios"
                className="px-4 sm:px-7 py-1.5 sm:py-3 rounded-full text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-black bg-white hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-[1.02] flex items-center justify-center gap-1.5 group touch-manipulation"
              >
                <span>Servicios</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#equipo"
                className="px-4 sm:px-7 py-1.5 sm:py-3 rounded-full text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-white bg-zinc-950/70 hover:bg-zinc-900 border border-white/20 hover:border-white/50 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-1.5 touch-manipulation"
              >
                <span>Equipo</span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Desktop Animated Scroll Indicator */}
        <motion.a
          href="#porque-elegirnos"
          aria-label="Scroll to Por qué elegirnos"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="hidden md:flex absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-1 text-zinc-300 hover:text-white transition-colors cursor-pointer group"
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

      {/* Quick Stats Strip - Dedicated section immediately below the Hero */}
      <section className="relative z-20 bg-zinc-950 border-y border-zinc-800/80 py-5 sm:py-8 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 md:gap-8">
          <div className="bg-black/40 backdrop-blur-sm p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/5">
            <div className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">25+</div>
            <div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-zinc-400 font-mono mt-0.5">
              Años de Trayectoria
            </div>
          </div>
          <div className="bg-black/40 backdrop-blur-sm p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/5">
            <div className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">50+</div>
            <div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-zinc-400 font-mono mt-0.5">
              Equipos Especializados
            </div>
          </div>
          <div className="bg-black/40 backdrop-blur-sm p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/5">
            <div className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">100%</div>
            <div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-zinc-400 font-mono mt-0.5">
              Operatividad en Campo
            </div>
          </div>
          <div className="bg-black/40 backdrop-blur-sm p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/5">
            <div className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">15+</div>
            <div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-zinc-400 font-mono mt-0.5">
              Avales Oficiales
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
