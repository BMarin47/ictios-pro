"use client";

import { motion } from "framer-motion";
import { Sparkles, Building } from "lucide-react";
import { CLIENTS_LIST } from "@/data/ictiosData";

export function ClientsMarquee() {
  // Duplicate array to achieve smooth infinite CSS marquee loop
  const marqueeList = [...CLIENTS_LIST, ...CLIENTS_LIST];

  return (
    <section id="clientes" className="relative py-28 sm:py-36 bg-zinc-950 text-white overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-zinc-800/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.25em] font-mono text-zinc-400 mb-3"
        >
          <Sparkles className="w-3 h-3 text-zinc-300" />
          <span>Trayectoria & Confianza Corporativa</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase"
        >
          Algunos de Nuestros Clientes
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-zinc-400 font-light max-w-3xl mx-auto"
        >
          Los clientes son nuestra prioridad. Lo demostramos con la actitud de servicio y compromiso técnico riguroso que caracteriza a todos quienes forman parte de ICTIOS S.A.
        </motion.p>
      </div>

      {/* Infinite Monochromatic Marquee - Apple / Starlink Style */}
      <div className="relative w-full overflow-hidden py-6 border-y border-zinc-800/80 bg-black/40 backdrop-blur-md">
        {/* Left & Right gradient fade masks */}
        <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-zinc-950 via-zinc-950/80 to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-6 sm:gap-8">
          {marqueeList.map((client, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-6 py-3.5 rounded-full bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-500/80 hover:bg-zinc-800/80 transition-all duration-300 shrink-0 group cursor-default"
            >
              <Building className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-zinc-300 group-hover:text-white transition-colors">
                  {client.name}
                </span>
                <span className="text-[10px] font-mono text-zinc-500 group-hover:text-zinc-400">
                  {client.note}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Monochromatic Grid of Highlighted Corporate Accounts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {CLIENTS_LIST.slice(0, 12).map((client, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-900 hover:border-zinc-700/80 text-center transition-all duration-300 flex flex-col justify-center items-center h-24"
            >
              <span className="text-xs font-semibold text-zinc-300 uppercase tracking-tight line-clamp-2">
                {client.name}
              </span>
              <span className="text-[9px] font-mono text-zinc-400 mt-1 line-clamp-1">
                {client.note}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
