"use client";

import { motion } from "framer-motion";
import { UserCheck, Sparkles, GraduationCap, CheckCircle2 } from "lucide-react";
import { TEAM_MEMBERS, INTERDISCIPLINARY_ROLES } from "@/data/ictiosData";

export function Team() {
  return (
    <section id="equipo" className="relative py-28 sm:py-36 bg-black text-white overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[300px] bg-zinc-800/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.25em] font-mono text-zinc-400 mb-3"
          >
            <Sparkles className="w-3 h-3 text-zinc-300" />
            <span>Capital Humano & Científico</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase"
          >
            Equipo de Trabajo
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-zinc-400 font-light"
          >
            Liderazgo especializado y un sólido cuerpo interdisciplinario para abordar integralmente desafíos limnológicos, acuícolas y de gestión ambiental.
          </motion.p>
        </div>

        {/* Minimalist Core Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative rounded-3xl p-8 bg-zinc-950/80 border border-zinc-800/80 hover:border-zinc-600/80 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
            >
              <div>
                {/* Minimalist Avatar Icon */}
                <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <UserCheck className="w-7 h-7" />
                </div>

                <div className="text-[11px] font-mono tracking-widest uppercase text-zinc-400 mb-1">
                  {member.role}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2 group-hover:text-zinc-100 transition-colors">
                  {member.name}
                </h3>

                <div className="inline-block px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-medium text-zinc-300 mb-4">
                  {member.specialty}
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  {member.bio}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-zinc-900 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span>Ictios S.A. Staff</span>
                <span className="text-zinc-400 group-hover:text-zinc-200">Activo</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interdisciplinary Scientific Network */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl p-8 sm:p-12 bg-zinc-950/60 border border-zinc-800/80 backdrop-blur-md"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 mb-8 border-b border-zinc-800/80 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400 mb-1">
                <GraduationCap className="w-4 h-4 text-zinc-300" />
                <span>Cuerpo Científico & Técnico</span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Red Interdisciplinaria de Especialistas
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-md font-light">
              Profesionales asociados de alto calibre convocados de forma específica para cada tipología de cuenca o proyecto.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
            {INTERDISCIPLINARY_ROLES.map((role, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800/60 hover:border-zinc-600 transition-colors"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                <span className="text-xs sm:text-sm text-zinc-300 font-light truncate">
                  {role}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
