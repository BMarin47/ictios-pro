"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronRight, Layers, ArrowUpRight, Sparkles } from "lucide-react";
import { MAIN_SERVICES, DETAILED_SERVICES_LIST } from "@/data/ictiosData";

export function MainServices() {
  const [showFullList, setShowFullList] = useState(false);

  return (
    <section id="servicios" className="relative py-28 sm:py-36 bg-zinc-950 text-white overflow-hidden">
      {/* Background grid lines effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f2315_1px,transparent_1px),linear-gradient(to_bottom,#1f1f2315_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.25em] font-mono text-zinc-400 mb-3"
            >
              <Sparkles className="w-3 h-3 text-zinc-300" />
              <span>Capacidades Especializadas</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase"
            >
              Servicios al Cliente
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <button
              onClick={() => setShowFullList(!showFullList)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 hover:bg-white hover:text-black border border-white/20 transition-all duration-300"
            >
              <Layers className="w-4 h-4" />
              <span>{showFullList ? "Ocultar Nómina Integral" : "Ver Nómina Completa (15 Servicios)"}</span>
            </button>
          </motion.div>
        </div>

        {/* Immersive Service Cards Grid - 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MAIN_SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group rounded-3xl overflow-hidden bg-zinc-950/80 border border-zinc-800/80 hover:border-zinc-500/80 transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-white/5"
            >
              {/* Top Photograph with Natural Landscape Aspect Ratio */}
              <div className="relative aspect-[3/2] w-full overflow-hidden bg-zinc-900 border-b border-zinc-800/60">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                <div className="absolute top-3 left-3">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[9px] uppercase font-mono tracking-widest text-zinc-300">
                    {service.category}
                  </span>
                </div>
              </div>

              {/* Content Below Photo */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="text-base sm:text-lg font-bold tracking-tight text-white uppercase group-hover:text-zinc-100 transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:bg-white group-hover:text-black group-hover:rotate-45 transition-all duration-300 shrink-0">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <p className="text-xs text-zinc-400 font-light leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                {/* Sub-details */}
                <div className="space-y-1.5 pt-3 border-t border-zinc-800/80">
                  {service.details.slice(0, 3).map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[11px] text-zinc-400 font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 mt-1.5 shrink-0" />
                      <span className="line-clamp-1 leading-snug">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Collapsible Complete Nómina Integral */}
        <AnimatePresence>
          {showFullList && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-12 overflow-hidden"
            >
              <div className="rounded-3xl bg-black/70 border border-zinc-800 p-8 sm:p-12 backdrop-blur-xl">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-800">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-tight">
                      Nómina Completa de Servicios Ambientales
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                      Todos los servicios oficiales certificados y prestados por Ictios S.A.
                    </p>
                  </div>
                  <span className="text-xs font-mono text-zinc-300 bg-white/10 px-3 py-1 rounded-full border border-white/20">
                    15 Especialidades
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {DETAILED_SERVICES_LIST.map((srv, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 hover:border-zinc-600 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-zinc-200" />
                      </div>
                      <span className="text-sm text-zinc-300 font-light leading-relaxed">
                        {srv}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
