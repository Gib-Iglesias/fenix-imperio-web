'use client';
import { motion } from 'framer-motion';
import { ArrowDown, Play } from 'lucide-react';

export default function Hero({ dict }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1616949755610-8b9b3e5e5f1a?w=1920&q=80" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-fenix-ivory/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-fenix-cream/80 via-fenix-ivory/95 to-fenix-cream/80" />
      </div>
      {/* Fire-toned orbs */}
      <motion.div animate={{ y: [-15, 15, -15], x: [-8, 8, -8] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-[12%] right-[10%] w-72 h-72 rounded-full bg-fenix-ember/[0.06] blur-[90px]" />
      <motion.div animate={{ y: [12, -12, 12] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }} className="absolute bottom-[18%] left-[6%] w-80 h-80 rounded-full bg-fenix-amber/[0.05] blur-[80px]" />
      <motion.div animate={{ y: [8, -16, 8] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-[40%] left-[30%] w-48 h-48 rounded-full bg-fenix-copper/[0.04] blur-[70px]" />
      {/* Subtle lines */}
      <div className="absolute top-0 right-[33%] w-px h-full bg-gradient-to-b from-transparent via-fenix-sand/60 to-transparent" />
      <div className="absolute top-0 left-[33%] w-px h-full bg-gradient-to-b from-transparent via-fenix-sand/30 to-transparent" />
      {/* Dots */}
      <motion.div animate={{ y: [0, -18, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-[38%] right-[18%] w-2 h-2 rounded-full bg-fenix-ember/25" />
      <motion.div animate={{ y: [-8, 12, -8] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-[55%] left-[14%] w-1.5 h-1.5 rounded-full bg-fenix-amber/25" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
          <span className="badge">{dict.preTitle}</span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6 }} className="mt-10 mb-6">
          <span className="block font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.9] fenix-text">{dict.title.split(' ').slice(0, 2).join(' ')}</span>
          <span className="block font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tight leading-[0.9] mt-1 text-fenix-char-700">{dict.title.split(' ').slice(2).join(' ')}</span>
        </motion.h1>
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 1 }} className="w-28 h-px mx-auto bg-gradient-to-r from-transparent via-fenix-ember to-transparent mb-8" />
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.2 }} className="font-body text-xl md:text-2xl text-fenix-char-500 max-w-2xl mx-auto leading-relaxed">{dict.subtitle}</motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.5 }} className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#pillars" className="btn-filled">{dict.cta}</a>
          <a href="#campaigns" className="btn-fenix"><Play size={14} className="text-fenix-ember" />{dict.ctaSecondary}</a>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}><ArrowDown size={18} className="text-fenix-ember/40" /></motion.div>
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-fenix-ivory to-transparent" />
    </section>
  );
}
