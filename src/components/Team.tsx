"use client";

import { motion } from "framer-motion";
import { CheckSquare } from "lucide-react";
import { TEAM_MEMBERS_EXACT, INTERDISCIPLINARY_ROLES } from "@/data/ictiosData";

export function Team() {
  const midPoint = Math.ceil(INTERDISCIPLINARY_ROLES.length / 2);
  const col1 = INTERDISCIPLINARY_ROLES.slice(0, midPoint);
  const col2 = INTERDISCIPLINARY_ROLES.slice(midPoint);

  return (
    <section id="equipo" className="relative py-28 sm:py-36 bg-black text-white overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[350px] bg-zinc-800/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section 1: EQUIPO DE TRABAJO */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase"
          >
            EQUIPO DE TRABAJO
          </motion.h2>
        </div>

        {/* 3 Core Leadership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-24">
          {TEAM_MEMBERS_EXACT.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="p-8 sm:p-9 rounded-2xl bg-zinc-950/70 border border-zinc-800 hover:border-zinc-600/80 backdrop-blur-md transition-all duration-300 flex flex-col justify-between hover:shadow-[0_0_30px_rgba(255,255,255,0.04)]"
            >
              <div>
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white uppercase mb-2">
                  {member.name}
                </h3>

                <div className="text-xs font-mono font-medium tracking-wider uppercase text-zinc-400 mb-6 leading-relaxed">
                  {member.role}
                </div>

                <p className="text-sm text-zinc-300 font-light leading-relaxed">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section 2: INTERDISCIPLINARIO */}
        <div className="text-center mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white uppercase"
          >
            INTERDISCIPLINARIO
          </motion.h3>
        </div>

        {/* 2-Column Checkbox List matching the exact layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-zinc-950/50 border border-zinc-800/80 backdrop-blur-md"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            {/* Column 1 */}
            <div className="space-y-4">
              {col1.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckSquare className="w-5 h-5 text-sky-400 shrink-0" />
                  <span className="text-sm sm:text-base text-zinc-300 font-light">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              {col2.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckSquare className="w-5 h-5 text-sky-400 shrink-0" />
                  <span className="text-sm sm:text-base text-zinc-300 font-light">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
