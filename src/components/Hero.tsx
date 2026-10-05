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
      <motion.section
        id="hero"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full flex flex-col md:block md:h-screen md:overflow-hidden bg-black text-white"
      >
        {/* Dedicated Image Container: aspect-video on mobile, fullscreen on desktop */}
        <div className="relative w-full aspect-video md:absolute md:inset-0 md:h-screen md:aspect-auto mt-14 sm:mt-16 md:mt-0 overflow-hidden">
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

          {/* Desktop-only subtle Starlink overlays for text readability */}
          <div className="hidden md:block absolute inset-0 bg-black/40 z-10 pointer-events-none" />
          <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 z-10 pointer-events-none" />
        </div>

        {/* Text Container: Glassmorphism Dark Premium on both mobile and desktop */}
        <div className="flex-1 flex flex-col justify-center items-center p-4 sm:p-6 md:bg-transparent md:absolute md:inset-0 md:z-20">
          <div className="w-full max-w-2xl flex flex-col items-center text-center p-5 sm:p-7 md:p-8 rounded-2xl md:rounded-3xl bg-black/40 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.6)]">
            {/* Subtle pill tag */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.08] border border-white/20 mb-2.5 sm:mb-4 shadow-lg shadow-black/40"
            >
              <Sparkles className="w-3 h-3 text-zinc-200 animate-pulse shrink-0" />
              <span className="text-[9px] sm:text-[11px] font-medium tracking-[0.16em] sm:tracking-[0.25em] text-zinc-200 uppercase drop-shadow-md">
                Ingeniería Limnológica & Monitoreo Ambiental
              </span>
            </motion.div>

            {/* Title with responsive scaling: text-3xl on mobile, text-6xl on desktop */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="text-3xl md:text-6xl font-black tracking-tighter text-white uppercase leading-none drop-shadow-[0_6px_24px_rgba(0,0,0,0.95)]"
            >
              ICTIOS
              <span className="block text-sm sm:text-lg md:text-3xl font-light tracking-[0.14em] sm:tracking-[0.18em] text-zinc-200 mt-1 drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                CONSULTORA AMBIENTAL
              </span>
            </motion.h1>

            {/* Dynamic Rotating Slogans */}
            <div className="min-h-[55px] sm:min-h-[65px] md:min-h-[75px] mt-2.5 sm:mt-4 max-w-lg flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlogan.title}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="flex flex-col items-center text-center px-1"
                >
                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-white/10 border border-white/25 text-[8px] sm:text-[9px] font-mono tracking-widest uppercase text-zinc-200 mb-1 shadow-md">
                    {currentSlogan.badge}
                  </div>
                  <h2 className="text-sm sm:text-base md:text-xl font-semibold tracking-tight text-white mb-0.5 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                    &ldquo;{currentSlogan.title}&rdquo;
                  </h2>
                  <p className="text-[11px] sm:text-xs md:text-sm text-zinc-300 font-light leading-snug line-clamp-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
                    {currentSlogan.subtitle}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="mt-4 sm:mt-5 flex flex-row items-center justify-center gap-3 w-full sm:w-auto"
            >
              <a
                href="#servicios"
                className="px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs font-semibold tracking-wider uppercase text-black bg-white hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-[1.02] flex items-center justify-center gap-1.5 group touch-manipulation"
              >
                <span>Servicios</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#equipo"
                className="px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs font-semibold tracking-wider uppercase text-white bg-black/40 hover:bg-white/10 border border-white/20 hover:border-white/50 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-1.5 touch-manipulation"
              >
                <span>Equipo</span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Desktop Animated Scroll Indicator */}
        <motion.a
          href="#nuestros-numeros"
          aria-label="Scroll to Nuestros Números"
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
      </motion.section>
    </>
  );
}
