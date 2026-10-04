"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, Building2, ShieldCheck } from "lucide-react";
import { FEATURED_CLIENT_LOGOS, EXACT_CLIENTS_LIST } from "@/data/ictiosData";

export function ClientsSection() {
  // Duplicate logos for seamless infinite animation
  const marqueeLogos = [...FEATURED_CLIENT_LOGOS, ...FEATURED_CLIENT_LOGOS, ...FEATURED_CLIENT_LOGOS];

  return (
    <section id="clientes" className="relative py-12 px-4 sm:px-6 md:py-24 md:px-8 lg:px-12 bg-black text-white overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[350px] bg-zinc-800/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[250px] bg-sky-950/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.25em] font-mono text-zinc-400 mb-3"
          >
            <Sparkles className="w-3 h-3 text-zinc-300" />
            <span>Confianza Corporativa & Gubernamental</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase"
          >
            Algunos de Nuestros Clientes
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-zinc-400 font-light"
          >
            Los clientes son nuestra prioridad. Lo demostramos con la actitud de servicio, rigor analítico y compromiso técnico que caracteriza a todo el equipo de ICTIOS S.A.
          </motion.p>
        </div>

        {/* 1. Carrusel de Logos (Infinite Marquee con Framer Motion) */}
        <div className="mb-14 sm:mb-20">
          <div className="flex items-center justify-between mb-4 sm:mb-6 px-1">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400">
              <Building2 className="w-4 h-4 text-zinc-300 shrink-0" />
              <span>Clientes Destacados</span>
            </div>
            <span className="text-[10px] sm:text-[11px] font-mono text-zinc-500 hidden sm:inline-block">
              Desplazamiento continuo • Tocar para pausar
            </span>
          </div>

          <div className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-zinc-950/60 backdrop-blur-xl py-5 sm:py-8">
            {/* Gradient shadow masks for Starlink look */}
            <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-36 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent z-20 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-36 bg-gradient-to-l from-zinc-950 via-zinc-950/80 to-transparent z-20 pointer-events-none" />

            {/* Infinite Marquee Track with Framer Motion */}
            <motion.div
              className="flex items-center gap-4 sm:gap-8 w-max cursor-pointer"
              animate={{ x: ["0%", "-33.333%"] }}
              transition={{
                duration: 25,
                ease: "linear",
                repeat: Infinity,
              }}
              whileHover={{ animationPlayState: "paused" }}
            >
              {marqueeLogos.map((client, idx) => (
                <div
                  key={`${client.name}-${idx}`}
                  className="group relative flex items-center justify-center h-18 sm:h-24 px-5 sm:px-8 min-w-[160px] sm:min-w-[230px] rounded-xl sm:rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-white/20 transition-all duration-300 shadow-lg shadow-black/40"
                >
                  <div className="relative w-28 sm:w-36 h-10 sm:h-12 flex items-center justify-center">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      sizes="160px"
                      className="object-contain filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                    />
                  </div>
                  {/* Subtle label on hover */}
                  <span className="absolute -bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[9px] font-mono tracking-wider uppercase text-zinc-300 bg-zinc-900 px-2 py-0.5 rounded-full border border-zinc-700 pointer-events-none">
                    {client.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* 2. Grilla de Clientes (Bento / Grid Layout) */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8 pb-4 border-b border-white/10">
            <div>
              <h3 className="text-lg sm:text-2xl font-bold tracking-tight text-white uppercase">
                Listado Completo de Clientes
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                Nómina oficial de empresas energéticas, organismos públicos y consultoras.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-xs font-mono text-zinc-300 self-start sm:self-auto shrink-0">
              <ShieldCheck className="w-3.5 h-3.5 text-zinc-300" />
              <span>{EXACT_CLIENTS_LIST.length} Clientes Oficiales</span>
            </div>
          </div>

          {/* Mobile First: 1 col on mobile, 2 on md, 3 on lg */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {EXACT_CLIENTS_LIST.map((clientText, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
                className="group relative rounded-xl sm:rounded-2xl p-4 sm:p-5 bg-white/5 border border-white/10 hover:border-white/25 hover:bg-white/[0.08] backdrop-blur-md transition-all duration-300 flex items-start gap-3 sm:gap-4 hover:shadow-[0_0_25px_rgba(255,255,255,0.05)] cursor-default"
              >
                {/* Minimalist Verification Icon with Pale Blue Accent */}
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-white/10 group-hover:border-sky-300/40 transition-colors">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-200/90 group-hover:text-white transition-colors" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[9px] sm:text-[10px] font-mono text-zinc-500 tracking-wider">
                      #{String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 group-hover:text-white font-light leading-relaxed transition-colors mt-0.5">
                    {clientText}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 sm:mt-16 p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-zinc-950/80 border border-zinc-800/80 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 text-center md:text-left"
        >
          <div>
            <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
              ¿Desea incorporar a su empresa a nuestra cartera de proyectos?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-2xl">
              Realizamos propuestas técnicas y presupuestarias a medida para monitoreos en ríos, lagos, embalses y evaluaciones de impacto ambiental en toda la República Argentina.
            </p>
          </div>

          <a
            href="#contacto"
            className="w-full md:w-auto shrink-0 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-white hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] text-center"
          >
            Solicitar Monitoreo Técnico
          </a>
        </motion.div>
      </div>
    </section>
  );
}
