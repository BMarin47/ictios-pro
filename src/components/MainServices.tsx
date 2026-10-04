"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Layers, ArrowUpRight, Sparkles, X, ShieldCheck } from "lucide-react";
import { MAIN_SERVICES, DETAILED_SERVICES_LIST, ServiceItem } from "@/data/ictiosData";

export function MainServices() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Close modal on Escape key and prevent background scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  const handleOpenModal = (service?: ServiceItem) => {
    setSelectedService(service || null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
              onClick={() => handleOpenModal()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 hover:bg-white hover:text-black border border-white/20 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-white/10"
            >
              <Layers className="w-4 h-4" />
              <span>Ver Nómina Completa (15 Servicios)</span>
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
              onClick={() => handleOpenModal(service)}
              className="group rounded-3xl overflow-hidden bg-zinc-950/80 border border-zinc-800/80 hover:border-zinc-500/80 hover:ring-1 hover:ring-white/20 transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-white/5"
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

        {/* Interactive Modal / Dialog with Framer Motion */}
        <AnimatePresence>
          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
              {/* Backdrop Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={handleCloseModal}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
                className="relative z-50 w-full max-w-4xl max-h-[88vh] bg-zinc-950 border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden text-zinc-300 my-auto"
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between p-6 sm:p-8 border-b border-white/10 bg-zinc-950/80 backdrop-blur-md shrink-0">
                  <div>
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-widest text-zinc-400 mb-2">
                      <ShieldCheck className="w-3 h-3 text-zinc-300" />
                      <span>Certificación Oficial &bull; Ictios S.A.</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight uppercase">
                      Nómina Completa de Servicios
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                      Catálogo integral de 15 capacidades técnicas certificadas
                    </p>
                  </div>

                  {/* Close button X */}
                  <button
                    onClick={handleCloseModal}
                    aria-label="Cerrar modal"
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-white hover:text-black border border-white/10 transition-all duration-200 flex items-center justify-center text-zinc-300 shrink-0 cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Scrollable Body */}
                <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                  {/* Selected service spotlight (if opened by clicking a specific card) */}
                  {selectedService && (
                    <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row items-center sm:items-start gap-4">
                      <div className="relative w-full sm:w-36 aspect-[3/2] sm:h-24 rounded-xl overflow-hidden shrink-0 border border-white/10 bg-zinc-900">
                        <Image
                          src={selectedService.imageUrl}
                          alt={selectedService.title}
                          fill
                          className="object-cover object-center"
                        />
                      </div>
                      <div className="flex-1 text-center sm:text-left">
                        <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-400 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10 inline-block mb-1.5">
                          {selectedService.category}
                        </span>
                        <h4 className="text-base sm:text-lg font-bold text-white uppercase tracking-tight">
                          {selectedService.title}
                        </h4>
                        <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                          {selectedService.description}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Grid of 15 Certified Services */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider font-mono">
                        Servicios Certificados ({DETAILED_SERVICES_LIST.length})
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                      {DETAILED_SERVICES_LIST.map((srv, idx) => (
                        <div
                          key={idx}
                          className="group p-4 rounded-2xl bg-zinc-900/60 border border-white/5 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-200 flex items-start gap-3.5"
                        >
                          <div className="w-6 h-6 rounded-full bg-white/10 border border-white/15 flex items-center justify-center shrink-0 mt-0.5 text-zinc-300 group-hover:text-white group-hover:bg-white/20 transition-colors">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                            {srv}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="p-4 sm:p-5 border-t border-white/10 bg-zinc-950/80 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
                  <span className="text-[11px] text-zinc-500 font-mono">
                    Ictios Consultora Ambiental &bull; Dictámenes & Monitoreos Oficiales
                  </span>
                  <button
                    onClick={handleCloseModal}
                    className="w-full sm:w-auto px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 hover:bg-white hover:text-black border border-white/20 transition-all duration-200 cursor-pointer"
                  >
                    Cerrar Nómina
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
