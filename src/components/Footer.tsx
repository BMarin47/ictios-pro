"use client";

import { Waves, ArrowUp } from "lucide-react";
import { CONTACT_INFO } from "@/data/ictiosData";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white border-t border-white/10 py-10 sm:py-16 relative z-10 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 pb-8 sm:pb-12 border-b border-white/10">
          {/* Brand info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center shrink-0">
              <Waves className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.22em] text-white uppercase">
                ICTIOS S.A.
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.14em] sm:tracking-[0.18em] text-zinc-500 uppercase font-mono">
                Consultora Ambiental • San Rafael, Mendoza
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
            <a
              href={CONTACT_INFO.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:border-white/30 text-xs font-mono uppercase text-zinc-400 hover:text-white transition-all shadow-[0_4px_16px_rgba(0,0,0,0.4)]"
            >
              Facebook
            </a>
            <a
              href={CONTACT_INFO.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:border-white/30 text-xs font-mono uppercase text-zinc-400 hover:text-white transition-all shadow-[0_4px_16px_rgba(0,0,0,0.4)]"
            >
              Instagram
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Volver arriba"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/40 backdrop-blur-md hover:bg-white hover:text-black border border-white/10 flex items-center justify-center transition-all cursor-pointer touch-manipulation shadow-[0_4px_16px_rgba(0,0,0,0.4)]"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Footer Sub Links */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 font-light gap-4 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} Ictios S.A. Consultora Ambiental. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 text-[10px] sm:text-[11px] font-mono text-zinc-400">
            <span>Matrículas Provinciales & PNA</span>
            <span>Normas ISO 14001</span>
            <span>Sitio de Referencia DGI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
