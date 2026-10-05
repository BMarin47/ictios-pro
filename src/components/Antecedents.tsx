"use client";

import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2, Building2, Sparkles } from "lucide-react";
import { ANTECEDENTS_LIST } from "@/data/ictiosData";

export function Antecedents() {
  return (
    <motion.section
      id="antecedentes"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative py-14 px-4 sm:px-6 md:py-24 md:px-8 lg:px-12 bg-black text-white overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[300px] bg-zinc-800/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-[0.25em] font-mono text-zinc-400 mb-3"
          >
            <Sparkles className="w-3 h-3 text-zinc-300" />
            <span>Validez y Rigor Institucional</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase"
          >
            Antecedentes & Certificaciones
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-zinc-400 font-light"
          >
            Estudios y dictámenes evaluados continuamente por autoridades interjurisdiccionales, organismos reguladores y ministerios de cuenca en todo el país.
          </motion.p>
        </div>

        {/* Antecedents Grid - Mobile First: 1 col, 2 on md, 3 on lg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5">
          {ANTECEDENTS_LIST.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group p-4 sm:p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-white/25 hover:bg-black/60 transition-all duration-300 flex flex-col justify-between shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] hover:shadow-[0_12px_40px_0_rgba(255,255,255,0.06)]"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
                  <span className="inline-flex items-center gap-1.5 text-[9px] sm:text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-zinc-300">
                    <Building2 className="w-3 h-3 text-zinc-400" />
                    {item.entity}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors shrink-0" />
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                  {item.text}
                </p>
              </div>

              <div className="mt-4 sm:mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-zinc-400">
                <span>Registro Oficial</span>
                <span className="text-zinc-400 group-hover:text-zinc-200">Verificado</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-8 sm:mt-12 rounded-2xl sm:rounded-3xl p-5 sm:p-8 bg-black/40 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 text-center md:text-left"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-200" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Estándar de Calidad ISO 14001 & Avales Técnicos
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                Capacidad de dictamen avalada por organismos fiscalizadores de seguridad de presas (ORSEP) y regulación eléctrica (ENRE).
              </p>
            </div>
          </div>

          <a
            href="#contacto"
            className="w-full md:w-auto shrink-0 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-white hover:bg-zinc-200 transition-colors text-center shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            Solicitar Antecedentes
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
