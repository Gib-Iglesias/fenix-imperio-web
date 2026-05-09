'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { localeNames } from '@/lib/getDictionary';

export default function Navbar({ dict, lang }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => { const fn = () => setScrolled(window.scrollY > 60); window.addEventListener('scroll', fn); return () => window.removeEventListener('scroll', fn); }, []);

  const links = [
    { label: dict.story, href: '#about' },
    { label: dict.pillars, href: '#pillars' },
    { label: dict.collection, href: '#collection' },
    { label: dict.campaigns, href: '#campaigns' },
    { label: dict.contact, href: '#contact' },
  ];
  const otherLangs = Object.entries(localeNames).filter(([k]) => k !== lang);

  return (
    <>
      <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-warm py-3 shadow-sm' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
          <a href={`/${lang}`} className="flex items-center gap-2">
            <span className="font-display text-2xl md:text-[1.65rem] font-bold tracking-wide fenix-text">FENIX</span>
            <span className="hidden sm:block font-sans text-[0.5rem] tracking-[0.25em] text-fenix-char-400 uppercase leading-tight">Fragrance<br/>Holdings</span>
          </a>
          <div className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="font-sans text-[0.68rem] tracking-[0.13em] uppercase text-fenix-char-600 hover:text-fenix-ember transition-colors relative group">
                {l.label}<span className="absolute -bottom-1 left-0 w-0 h-px bg-fenix-ember transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <div className="relative">
              <button onClick={() => setLangOpen(!langOpen)} className="flex items-center gap-1 font-sans text-xs tracking-wider uppercase text-fenix-char-400 hover:text-fenix-ember transition-colors">
                <Globe size={13} />{lang.toUpperCase()}
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} className="absolute top-8 right-0 bg-white rounded-md shadow-lg border border-fenix-sand overflow-hidden min-w-[110px]">
                    {otherLangs.map(([c, n]) => <a key={c} href={`/${c}`} className="block px-4 py-2 font-sans text-xs tracking-wider text-fenix-char-600 hover:text-fenix-ember hover:bg-fenix-cream transition-all">{n}</a>)}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <a href="#contact" className="btn-fenix text-[0.6rem]">{dict.cta}</a>
          </div>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-fenix-char-600 hover:text-fenix-ember"><Menu size={24} /></button>
        </div>
      </motion.nav>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-fenix-ivory/98 backdrop-blur-lg flex flex-col items-center justify-center gap-7">
            <button onClick={() => setMobileOpen(false)} className="absolute top-6 right-6 text-fenix-char-600"><X size={24} /></button>
            {links.map((l, i) => <motion.a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="font-display text-2xl text-fenix-char-700 hover:text-fenix-ember transition-colors">{l.label}</motion.a>)}
            <div className="flex gap-6 mt-2">{Object.entries(localeNames).map(([c, n]) => <a key={c} href={`/${c}`} className={`font-sans text-sm tracking-wider ${c === lang ? 'text-fenix-ember' : 'text-fenix-char-400 hover:text-fenix-ember'} transition-colors`}>{n}</a>)}</div>
            <a href="#contact" onClick={() => setMobileOpen(false)} className="btn-filled mt-2">{dict.cta}</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
