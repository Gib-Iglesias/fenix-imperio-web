'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Network, Globe, FileText, TrendingUp, Sparkles } from 'lucide-react';

export default function Founder({ dict }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const stats = [
    { icon: Network, value: dict.stat1Value, label: dict.stat1Label },
    { icon: Globe, value: dict.stat2Value, label: dict.stat2Label },
    { icon: FileText, value: dict.stat3Value, label: dict.stat3Label },
    { icon: TrendingUp, value: dict.stat4Value, label: dict.stat4Label },
  ];
  const journey = dict.journey || [];

  return (
    <section id="about" className="relative py-28 overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 right-0 divider" />
      <div className="absolute top-[10%] right-0 w-[400px] h-[400px] rounded-full bg-fenix-ember/[0.025] blur-[80px]" />
      <div className="absolute bottom-[10%] left-0 w-[300px] h-[300px] rounded-full bg-fenix-amber/[0.03] blur-[70px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-20">
          <span className="badge">{dict.badge}</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mt-8 fenix-text">{dict.title}</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start mb-24">
          {/* Portrait */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
            <div className="relative aspect-[3/4] max-w-md mx-auto">
              <div className="absolute inset-0 rounded-sm bg-gradient-to-br from-fenix-ember/10 via-transparent to-fenix-amber/10" />
              <div className="absolute inset-4 border border-fenix-sand rounded-sm overflow-hidden">
                {/* Replace src with Marcelo's actual photo */}
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face&q=80"
                  alt="Marcelo Capote — Founder & CEO, Fenix Fragrance Holdings"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-fenix-char-900/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="font-sans text-[0.55rem] tracking-[0.3em] uppercase text-fenix-cream/70">Founder & CEO</span>
                  <span className="block font-display text-lg text-white mt-1">Marcelo Capote</span>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-8 h-px bg-fenix-ember/40" />
              <div className="absolute top-0 left-0 w-px h-8 bg-fenix-ember/40" />
              <div className="absolute bottom-0 right-0 w-8 h-px bg-fenix-amber/40" />
              <div className="absolute bottom-0 right-0 w-px h-8 bg-fenix-amber/40" />
            </div>
            {/* Quote */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6 }} className="mt-8 max-w-md mx-auto bg-white/50 border border-fenix-sand/60 p-6 rounded-sm">
              <p className="font-display text-xl italic text-fenix-char-600 leading-relaxed">&ldquo;{dict.quote}&rdquo;</p>
              <span className="block font-sans text-[0.6rem] tracking-[0.2em] uppercase text-fenix-ember mt-3">{dict.quoteName}</span>
            </motion.div>
          </motion.div>

          {/* Story */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.3 }}>
            <div className="space-y-5 font-body text-lg text-fenix-char-600 leading-relaxed">
              <p className="text-xl text-fenix-char-700 font-medium">{dict.intro}</p>
              <p>{dict.p1}</p>
              <p>{dict.p2}</p>
              <p>{dict.p3}</p>
              <p>{dict.p4}</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-10 border-t border-fenix-sand">
              {stats.map((s, i) => (
                <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 + i * 0.1 }} className="text-center">
                  <s.icon size={18} className="mx-auto text-fenix-ember/50 mb-2" />
                  <div className="font-display text-3xl font-semibold fenix-text">{s.value}</div>
                  <div className="font-sans text-[0.6rem] tracking-[0.12em] uppercase text-fenix-char-400 mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        {journey.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6 }}>
            <div className="text-center mb-12"><h3 className="font-display text-2xl md:text-3xl font-semibold text-fenix-char-700">{dict.journeyTitle}</h3></div>
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-fenix-sand -translate-x-1/2 hidden md:block" />
              {journey.map((item, i) => (
                <motion.div key={item.year} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.7 + i * 0.08 }}
                  className={`relative md:flex items-center gap-8 md:py-5 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} mb-4 md:mb-0`}>
                    <span className="font-display text-2xl font-semibold fenix-text">{item.year}</span>
                    <h4 className="font-display text-lg font-medium text-fenix-char-700 mt-1">{item.title}</h4>
                    <p className="font-body text-base text-fenix-char-500 mt-1">{item.desc}</p>
                  </div>
                  <div className="hidden md:flex items-center justify-center w-3 h-3 rounded-full bg-fenix-ember/60 ring-4 ring-fenix-ivory flex-shrink-0" />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
