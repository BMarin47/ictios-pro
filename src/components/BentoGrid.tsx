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
    <section id="porque-elegirnos" className="relative py-28 sm:py-36 bg-black text-white overflow-hidden">
      {/* Subtle radial ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-zinc-800/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.25em] font-mono text-zinc-400 mb-4"
          >
            <Sparkles className="w-3 h-3 text-zinc-300" />
            <span>Diferenciales Estratégicos</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase"
          >
            Por Qué Elegirnos
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-zinc-400 font-light"
          >
            Somos una empresa con una extensa trayectoria y una vasta experiencia en estudios acuáticos, limnológicos y gestión ambiental.
          </motion.p>
        </div>

        {/* Apple Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {BENTO_CARDS.map((card, index) => {
            const IconComponent = iconMap[card.icon] || ShieldCheck;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className={`group relative rounded-3xl p-8 sm:p-10 transition-all duration-300 ${
                  card.colSpan ?? "col-span-1"
                } bg-zinc-950/70 border border-zinc-800/80 hover:border-zinc-600/80 backdrop-blur-xl hover:shadow-[0_0_35px_rgba(255,255,255,0.06)] flex flex-col justify-between overflow-hidden`}
              >
                {/* Background subtle mesh glow on hover */}
                <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-zinc-700/10 rounded-full blur-3xl group-hover:bg-zinc-500/15 transition-all duration-500 pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {card.highlight && (
                      <span className="text-[11px] font-mono tracking-widest uppercase px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300">
                        {card.highlight}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-3 group-hover:text-zinc-100 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-900 flex items-center justify-between text-xs text-zinc-400 group-hover:text-white transition-colors">
                  <span className="font-mono tracking-wider uppercase text-[10px]">Ictios S.A. Estándar</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
