"use client";

import Link from "next/link";
import { Waves, ArrowUp } from "lucide-react";
import { CONTACT_INFO } from "@/data/ictiosData";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white border-t border-zinc-900 py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-zinc-900">
          {/* Brand info */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-zinc-900 border border-white/20 flex items-center justify-center">
              <Waves className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-[0.22em] text-white uppercase">
                ICTIOS S.A.
              </span>
              <span className="text-[10px] tracking-[0.18em] text-zinc-500 uppercase font-mono">
                Consultora Ambiental • San Rafael, Mendoza
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={CONTACT_INFO.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-zinc-900/60 border border-zinc-800 hover:border-zinc-500 text-xs font-mono uppercase text-zinc-400 hover:text-white transition-all"
            >
              Facebook
            </a>
            <a
              href={CONTACT_INFO.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-zinc-900/60 border border-zinc-800 hover:border-zinc-500 text-xs font-mono uppercase text-zinc-400 hover:text-white transition-all"
            >
              Instagram
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Volver arriba"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white hover:text-black border border-white/20 flex items-center justify-center transition-all"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Footer Sub Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 font-light gap-4">
          <p>
            © {new Date().getFullYear()} Ictios S.A. Consultora Ambiental. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6 text-[11px] font-mono text-zinc-400">
            <span>Matrículas Provinciales & PNA</span>
            <span>Normas ISO 14001</span>
            <span>Sitio de Referencia DGI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
