'use client';
import { Flame } from 'lucide-react';

export default function Footer({ dict }) {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-fenix-char-900 border-t border-fenix-char-700/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Flame size={20} className="text-fenix-ember" />
            <div>
              <span className="font-display text-xl font-bold tracking-wide text-fenix-cream">FENIX</span>
              <span className="hidden sm:inline font-sans text-[0.5rem] tracking-[0.2em] text-fenix-char-500 uppercase ml-2">Fragrance Holdings</span>
            </div>
          </div>
          <p className="font-body text-base text-fenix-char-500 italic text-center">{dict.tagline}</p>
          <div className="flex items-center gap-4 font-sans text-[0.55rem] tracking-[0.12em] uppercase text-fenix-char-600">
            <a href="#" className="hover:text-fenix-ember transition-colors">{dict.privacy}</a>
            <span className="text-fenix-char-700">|</span>
            <a href="#" className="hover:text-fenix-ember transition-colors">{dict.terms}</a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-fenix-char-800 text-center">
          <span className="font-sans text-[0.5rem] tracking-[0.15em] uppercase text-fenix-char-700">© {year} Fenix Fragrance Holdings. {dict.rights}</span>
        </div>
      </div>
    </footer>
  );
}
