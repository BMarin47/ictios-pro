"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Truck,
  Ship,
  Fish,
  Compass,
  FlaskConical,
  Radio,
  Search,
  SlidersHorizontal,
  Sparkles,
  ChevronDown,
  Info,
} from "lucide-react";
import { EQUIPMENT_CATEGORIES, EquipmentCategory } from "@/data/ictiosData";

const iconMap: Record<string, React.ElementType> = {
  Truck,
  Ship,
  Fish,
  Compass,
  FlaskConical,
  Radio,
};

export function DetailedEquipment() {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(EQUIPMENT_CATEGORIES[0].id);
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const activeCategory = useMemo(() => {
    return EQUIPMENT_CATEGORIES.find((c) => c.id === activeCategoryId) || EQUIPMENT_CATEGORIES[0];
  }, [activeCategoryId]);

  // Global search filtering across all categories or within active
  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) {
      return activeCategory.items;
    }
    const query = searchQuery.toLowerCase();
    return activeCategory.items.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        (item.modelOrSpec && item.modelOrSpec.toLowerCase().includes(query)) ||
        (item.badge && item.badge.toLowerCase().includes(query))
    );
  }, [activeCategory, searchQuery]);

  // Total count calculation
  const totalEquipments = useMemo(() => {
    return EQUIPMENT_CATEGORIES.reduce((acc, cat) => acc + cat.items.length, 0);
  }, []);

  return (
    <section id="equipamiento" className="relative py-28 sm:py-36 bg-black text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-zinc-800/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.25em] font-mono text-zinc-400 mb-3"
          >
            <Sparkles className="w-3 h-3 text-zinc-300" />
            <span>Infraestructura y Tecnología</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase"
          >
            Equipamiento General
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-zinc-400 font-light"
          >
            Inventario técnico integral: flota terrestre 4x4, motorhome de campaña, embarcaciones fluviales matriculadas e instrumental oceanográfico de alta precisión.
          </motion.p>
        </div>

        {/* Search & Filter Bar */}
        <div className="max-w-xl mx-auto mb-10">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-zinc-500 absolute left-4 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar en el inventario (ej. Hilux, Raytheon, HANNA, Ecosonda)..."
              className="w-full bg-zinc-950/80 border border-zinc-800 rounded-full pl-11 pr-4 py-3 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all backdrop-blur-md"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 text-xs text-zinc-500 hover:text-white"
              >
                Limpiar
              </button>
            )}
          </div>
        </div>

        {/* Interactive Tabs Header */}
        <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-4 gap-2 no-scrollbar mb-10">
          {EQUIPMENT_CATEGORIES.map((cat) => {
            const Icon = iconMap[cat.icon] || SlidersHorizontal;
            const isActive = activeCategoryId === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategoryId(cat.id);
                  setSearchQuery("");
                }}
                className={`relative px-5 py-3 rounded-full text-xs font-medium tracking-wide uppercase transition-all whitespace-nowrap flex items-center gap-2.5 shrink-0 ${
                  isActive
                    ? "text-black bg-white shadow-[0_0_20px_rgba(255,255,255,0.25)] font-semibold"
                    : "text-zinc-400 hover:text-white bg-zinc-950 border border-zinc-800/80 hover:border-zinc-700"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-black" : "text-zinc-400"}`} />
                <span>{cat.name}</span>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                    isActive ? "bg-black/10 text-black" : "bg-zinc-800 text-zinc-400"
                  }`}
                >
                  {cat.items.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Category Description Banner */}
        <div className="mb-8 p-4 rounded-2xl bg-zinc-950/40 border border-zinc-800/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-zinc-400 shrink-0" />
            <span>{activeCategory.description}</span>
          </div>
          <span className="font-mono text-[11px] text-zinc-300">
            {filteredItems.length} de {activeCategory.items.length} unidades disponibles
          </span>
        </div>

        {/* Items Grid with Motion Transitions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategoryId + searchQuery}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filteredItems.length === 0 ? (
              <div className="col-span-full py-16 text-center text-zinc-500 text-sm">
                No se encontraron equipos que coincidan con &ldquo;{searchQuery}&rdquo; en esta categoría.
              </div>
            ) : (
              filteredItems.map((item, index) => {
                const isExpanded = expandedItem === item.name;
                return (
                  <div
                    key={index}
                    onClick={() => setExpandedItem(isExpanded ? null : item.name)}
                    className="group relative rounded-2xl p-6 bg-zinc-950/70 border border-zinc-800/90 hover:border-zinc-600/90 backdrop-blur-md transition-all duration-300 flex flex-col justify-between cursor-pointer hover:shadow-[0_0_25px_rgba(255,255,255,0.04)]"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <h4 className="text-base font-semibold text-white tracking-tight group-hover:text-zinc-200 transition-colors">
                          {item.name}
                        </h4>
                        {item.badge && (
                          <span className="text-[10px] uppercase font-mono px-2.5 py-0.5 rounded-full bg-white/[0.06] border border-white/10 text-zinc-300 shrink-0">
                            {item.badge}
                          </span>
                        )}
                      </div>

                      {item.modelOrSpec && (
                        <div className="text-xs font-mono text-zinc-300 mb-2.5">
                          {item.modelOrSpec}
                        </div>
                      )}

                      <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-zinc-900/80 flex items-center justify-between text-[11px] text-zinc-300 font-mono">
                      <span>Equipamiento Oficial Ictios</span>
                      <span className="text-zinc-300 group-hover:text-white transition-colors">
                        Activo
                      </span>
                    </div>
                  </div>
                );
              })
            )}
          </motion.div>
        </AnimatePresence>

        {/* Global Summary Footer */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-400">
            <span>Inventario Activo Certificado:</span>
            <strong className="text-white font-bold">{totalEquipments} unidades técnicas en dotación</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
