"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, ShieldCheck, Compass, Sparkles } from "lucide-react";
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

  const HERO_BACKGROUNDS = [
    "/images/motorhome-bote.png",
    "/images/equipo-expertos.png",
    "/images/profesionalismo-batimetria.png",
    "/images/honda-ictios-atardecer.png",
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white"
    >
      {/* Background Image with Starlink Slow Ken-Burns Zoom Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={sloganIndex}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1.08 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.2 },
            scale: { duration: 15, ease: "easeInOut" },
          }}
        >
          <Image
            src={HERO_BACKGROUNDS[sloganIndex]}
            alt={currentSlogan.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.75] contrast-[1.05]"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark Multi-layer Gradient Overlays for Starlink High-Contrast Readability */}
      <div className="absolute inset-0 z-10 bg-black/60 backdrop-blur-[1px]" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/40 to-black/70" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/30 to-black/80" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16 flex flex-col items-center">
        {/* Subtle pill tag */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.07] border border-white/15 backdrop-blur-md mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-zinc-300 animate-pulse" />
          <span className="text-[11px] font-medium tracking-[0.25em] text-zinc-300 uppercase">
            Ingeniería Limnológica & Monitoreo Ambiental
          </span>
        </motion.div>

        {/* Huge Bold Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white uppercase leading-none drop-shadow-2xl"
        >
          ICTIOS
          <span className="block text-2xl sm:text-4xl md:text-5xl font-light tracking-[0.18em] text-zinc-300 mt-2 sm:mt-3">
            CONSULTORA AMBIENTAL
          </span>
        </motion.h1>

        {/* Dynamic Rotating Slogans */}
        <div className="min-h-[110px] sm:min-h-[90px] mt-8 max-w-2xl flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlogan.title}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <div className="inline-block px-3 py-0.5 rounded-full bg-white/10 border border-white/20 text-[10px] font-mono tracking-widest uppercase text-zinc-300 mb-2">
                {currentSlogan.badge}
              </div>
              <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-white mb-2">
                &ldquo;{currentSlogan.title}&rdquo;
              </h2>
              <p className="text-sm sm:text-base text-zinc-300 max-w-xl font-light leading-relaxed">
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
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#servicios"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-semibold tracking-widest uppercase text-black bg-white hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] hover:scale-[1.02] flex items-center justify-center gap-2 group"
          >
            <span>Explorar Servicios</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#equipamiento"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-semibold tracking-widest uppercase text-white bg-zinc-950/70 hover:bg-zinc-900 border border-white/20 hover:border-white/50 backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2"
          >
            <Compass className="w-4 h-4 text-zinc-400" />
            <span>Ver Flota & Equipamiento</span>
          </a>
        </motion.div>

        {/* Feature quick stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 text-left w-full max-w-4xl"
        >
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">25+</div>
            <div className="text-[11px] uppercase tracking-wider text-zinc-400 font-mono mt-0.5">Años de Trayectoria</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">50+</div>
            <div className="text-[11px] uppercase tracking-wider text-zinc-400 font-mono mt-0.5">Equipos Especializados</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">100%</div>
            <div className="text-[11px] uppercase tracking-wider text-zinc-400 font-mono mt-0.5">Operatividad en Campo</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">15+</div>
            <div className="text-[11px] uppercase tracking-wider text-zinc-400 font-mono mt-0.5">Avales Oficiales</div>
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
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-zinc-400 hover:text-white transition-colors cursor-pointer group"
      >
        <span className="text-[9px] uppercase tracking-[0.25em] font-mono text-zinc-400 group-hover:text-zinc-200">
          Deslizar
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-zinc-400 group-hover:text-white" />
        </motion.div>
      </motion.a>
    </section>
  );
}
