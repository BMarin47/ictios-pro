"use client";

import { motion } from "framer-motion";
import { Users2, ShieldCheck, Award, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";
import { BENTO_CARDS } from "@/data/ictiosData";

const iconMap: Record<string, React.ElementType> = {
  Users2,
  ShieldCheck,
  Award,
  CheckCircle2,
};

export function BentoGrid() {
  return (
    <motion.section
      id="porque-elegirnos"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative py-14 px-4 sm:px-6 md:py-24 md:px-8 lg:px-12 bg-black text-white overflow-hidden"
    >
      {/* Subtle radial ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-zinc-800/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-[0.25em] font-mono text-zinc-400 mb-3 sm:mb-4"
          >
            <Sparkles className="w-3 h-3 text-zinc-300" />
            <span>Diferenciales Estratégicos</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase"
          >
            Por Qué Elegirnos
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-zinc-400 font-light"
          >
            Somos una empresa con una extensa trayectoria y una vasta experiencia en estudios acuáticos, limnológicos y gestión ambiental.
          </motion.p>
        </div>

        {/* Apple Bento Box Grid - Mobile First: 1 col on mobile, 3 cols on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {BENTO_CARDS.map((card, index) => {
            const IconComponent = iconMap[card.icon] || ShieldCheck;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className={`group relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 transition-all duration-300 ${
                  card.colSpan ?? "col-span-1"
                } bg-black/40 backdrop-blur-md border border-white/10 hover:border-white/25 hover:bg-black/60 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] hover:shadow-[0_12px_40px_0_rgba(255,255,255,0.06)] flex flex-col justify-between overflow-hidden`}
              >
                {/* Background subtle mesh glow on hover */}
                <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-zinc-700/10 rounded-full blur-3xl group-hover:bg-zinc-500/15 transition-all duration-500 pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-6 sm:mb-8">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    {card.highlight && (
                      <span className="text-[10px] sm:text-[11px] font-mono tracking-wider sm:tracking-widest uppercase px-2.5 sm:px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-zinc-300">
                        {card.highlight}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white mb-2 sm:mb-3 group-hover:text-zinc-100 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm md:text-base text-zinc-400 font-light leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400 group-hover:text-white transition-colors">
                  <span className="font-mono tracking-wider uppercase text-[9px] sm:text-[10px]">Ictios S.A. Estándar</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
