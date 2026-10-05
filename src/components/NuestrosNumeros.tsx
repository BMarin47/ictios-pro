"use client";

import { motion } from "framer-motion";
import { Sparkles, Award, Layers, Compass, ShieldCheck, CheckCircle2 } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";

const STATS = [
  {
    id: "trayectoria",
    value: 25,
    suffix: "+",
    label: "Años de Trayectoria",
    description: "Experiencia ininterrumpida liderando estudios limnológicos y ambientales en Argentina.",
    icon: Award,
  },
  {
    id: "proyectos",
    value: 180,
    prefix: "+",
    label: "Proyectos y Campañas",
    description: "Evaluaciones de impacto, batimetrías y monitoreos en presas, ríos y cuencas mineras.",
    icon: Layers,
  },
  {
    id: "equipos",
    value: 50,
    prefix: "+",
    label: "Equipos Especializados",
    description: "Flota naval propia, unidad móvil motorhome e instrumental multiparamétrico HANNA.",
    icon: Compass,
  },
  {
    id: "avales",
    value: 15,
    suffix: "+",
    label: "Avales Oficiales",
    description: "Dictámenes evaluados por ORSEP, ENRE, AIC, COIRCO, DGI y ministerios provinciales.",
    icon: ShieldCheck,
  },
  {
    id: "operatividad",
    value: 100,
    suffix: "%",
    label: "Operatividad en Campo",
    description: "Despliegue autónomo in situ en todo el territorio nacional con laboratorio móvil.",
    icon: CheckCircle2,
  },
];

export function NuestrosNumeros() {
  return (
    <motion.section
      id="nuestros-numeros"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-20 py-12 px-4 sm:px-6 md:py-20 md:px-8 lg:px-12 bg-black text-white overflow-hidden border-y border-white/10"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-white/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-[0.25em] font-mono text-zinc-300 mb-3"
          >
            <Sparkles className="w-3 h-3 text-zinc-300" />
            <span>Solvencia Técnica Comprobable</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase"
          >
            Nuestros Números
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-3 text-xs sm:text-sm md:text-base text-zinc-400 font-light max-w-2xl mx-auto"
          >
            Métricas que respaldan más de dos décadas de rigor científico e idoneidad en las principales cuencas hidroeléctricas e industriales de Argentina.
          </motion.p>
        </div>

        {/* Stats Grid - Dark Premium Glassmorphism Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 md:gap-5">
          {STATS.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative rounded-2xl p-5 sm:p-6 bg-black/40 backdrop-blur-md border border-white/10 hover:border-white/25 hover:bg-black/60 transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] flex flex-col justify-between"
              >
                {/* Micro-interaction highlight glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:bg-white/10 transition-all duration-300">
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase">
                      ICTIOS #{String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Dynamic Animated Counter */}
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight drop-shadow-[0_2px_12px_rgba(255,255,255,0.15)] font-sans">
                    <AnimatedCounter
                      to={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      duration={2.2}
                    />
                  </div>

                  <div className="text-xs sm:text-sm font-bold tracking-tight text-zinc-200 uppercase mt-2 group-hover:text-white transition-colors">
                    {stat.label}
                  </div>
                </div>

                <p className="text-[11px] sm:text-xs text-zinc-400 font-light leading-relaxed mt-3 pt-3 border-t border-white/5">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
