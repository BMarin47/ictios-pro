"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Check, Sparkles, ArrowUpRight } from "lucide-react";
import { CONTACT_INFO } from "@/data/ictiosData";

export function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    mensaje: "",
    servicio: "Estudios Batimétricos",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate high-end submission
    setFormSubmitted(true);
  };

  return (
    <section id="contacto" className="relative py-28 sm:py-36 bg-black text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[700px] h-[350px] bg-zinc-800/10 rounded-full blur-[150px] pointer-events-none" />

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
            <span>Atención Directa & Presupuestos</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase"
          >
            Contacto Inmediato
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-zinc-400 font-light"
          >
            Comuníquese directamente con nuestro equipo directivo para coordinar campañas de campo, batimetrías o monitoreos ambientales en cualquier punto del país.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Direct Cards (Left) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Email Card */}
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="group p-6 rounded-3xl bg-zinc-950/80 border border-zinc-800 hover:border-zinc-500 transition-all duration-300 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                      Correo Electrónico
                    </span>
                    <h4 className="text-sm sm:text-base font-semibold text-white tracking-tight">
                      {CONTACT_INFO.email}
                    </h4>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
              </a>

              {/* Phones Card */}
              <div className="p-6 rounded-3xl bg-zinc-950/80 border border-zinc-800 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                      Teléfonos de Campaña
                    </span>
                    <h4 className="text-sm sm:text-base font-semibold text-white tracking-tight">
                      Líneas Directas
                    </h4>
                  </div>
                </div>

                <div className="pt-2 border-t border-zinc-900 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {CONTACT_INFO.phones.map((phone, idx) => (
                    <a
                      key={idx}
                      href={`tel:${phone.replace(/\s+/g, "")}`}
                      className="p-3 rounded-xl bg-zinc-900/50 hover:bg-white hover:text-black border border-zinc-800 text-xs font-mono text-zinc-300 transition-all text-center"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              {/* Location Card */}
              <div className="p-6 rounded-3xl bg-zinc-950/80 border border-zinc-800 flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                    Sede Operativa Principal
                  </span>
                  <h4 className="text-sm sm:text-base font-semibold text-white tracking-tight">
                    {CONTACT_INFO.location}
                  </h4>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Operatividad federal con unidad móvil para campañas en todo el país.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Action Button */}
            <a
              href="https://wa.me/5492604654299?text=Hola,%20me%20comunico%20desde%20la%20web%20para%20solicitar%20presupuesto%20de%20consultoría%20ambiental"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-3xl bg-emerald-950/40 border border-emerald-500/30 hover:border-emerald-400 hover:bg-emerald-900/40 transition-all flex items-center justify-between text-emerald-300 group"
            >
              <div className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-emerald-400" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-200">
                    Contacto Inmediato por WhatsApp
                  </div>
                  <div className="text-[11px] text-emerald-400/80">
                    Respuesta en horario de operaciones
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>

          {/* Form (Right) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-zinc-950/80 border border-zinc-800/80 backdrop-blur-xl">
              {formSubmitted ? (
                <div className="py-16 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Mensaje Enviado con Éxito</h3>
                  <p className="text-sm text-zinc-400 max-w-md mb-6">
                    Gracias por comunicarse con Ictios Consultora Ambiental. Nos pondremos en contacto a la brevedad.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 transition-colors"
                  >
                    Enviar Otra Consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase font-mono tracking-wider text-zinc-400 mb-2">
                        Nombre Completo
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        placeholder="Ej. Ing. Martín Rodríguez"
                        className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase font-mono tracking-wider text-zinc-400 mb-2">
                        Empresa u Organismo
                      </label>
                      <input
                        type="text"
                        value={formData.empresa}
                        onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                        placeholder="Ej. Empresa Hidroeléctrica / Minera"
                        className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase font-mono tracking-wider text-zinc-400 mb-2">
                        Correo Electrónico
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="nombre@empresa.com"
                        className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase font-mono tracking-wider text-zinc-400 mb-2">
                        Teléfono de Contacto
                      </label>
                      <input
                        type="tel"
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        placeholder="+54 9 ..."
                        className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase font-mono tracking-wider text-zinc-400 mb-2">
                      Servicio Requerido
                    </label>
                    <select
                      value={formData.servicio}
                      onChange={(e) => setFormData({ ...formData, servicio: e.target.value })}
                      className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-zinc-500 transition-colors"
                    >
                      <option value="Estudios Batimétricos y Volumétricos">Estudios Batimétricos y Volumétricos</option>
                      <option value="Monitoreo de Calidad de Agua & Limnología">Monitoreo de Calidad de Agua & Limnología</option>
                      <option value="Monitoreos de Fauna Íctica">Monitoreos de Fauna Íctica</option>
                      <option value="Auditorías & Evaluación de Impacto Ambiental">Auditorías & Evaluación de Impacto Ambiental (EIA)</option>
                      <option value="Piscicultura y Repoblación de Peces">Piscicultura y Repoblación de Peces</option>
                      <option value="Otro Requerimiento Especial">Otro Requerimiento Especial</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase font-mono tracking-wider text-zinc-400 mb-2">
                      Detalle de la Campaña o Consulta
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      placeholder="Describa la ubicación de la cuenca, alcance del estudio, cronograma requerido..."
                      className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full text-xs font-semibold tracking-widest uppercase text-black bg-white hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.25)] flex items-center justify-center gap-2"
                  >
                    <span>Enviar Requerimiento Técnico</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
