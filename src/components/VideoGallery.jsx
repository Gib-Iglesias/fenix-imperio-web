'use client';
import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Play, X, Star } from 'lucide-react';
import { getActiveVideos, getVideosByCategory, categoryLabels } from '@/lib/videos.config';

const platformIcons = { youtube: '▶ YouTube', tiktok: '♪ TikTok', instagram: '◉ Instagram', 'youtube-short': '▶ Short' };

export default function VideoGallery({ dict, lang }) {
  const [cat, setCat] = useState('all');
  const [playing, setPlaying] = useState(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const labels = categoryLabels[lang] || categoryLabels.en;
  const categories = ['all', 'campaigns', 'events', 'talent', 'reels', 'behind'];
  const filtered = getVideosByCategory(cat);

  return (
    <section id="campaigns" className="relative py-28 overflow-hidden bg-fenix-char-900 dark-section" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(212,112,58,0.06),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(201,138,60,0.04),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="inline-block px-5 py-1.5 border border-fenix-ember/30 font-sans text-[0.6rem] font-semibold tracking-[0.25em] uppercase text-fenix-ember-light">{dict.badge}</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mt-8 text-fenix-cream">{dict.title}</h2>
          <p className="font-body text-xl text-fenix-char-400 max-w-2xl mx-auto mt-4">{dict.subtitle}</p>
        </motion.div>

        {/* Filters */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }} className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((c) => (
            <button key={c} onClick={() => setCat(c)}
              className={`px-4 py-2 font-sans text-[0.6rem] tracking-[0.15em] uppercase rounded-sm border transition-all duration-300 ${cat === c ? 'border-fenix-ember bg-fenix-ember/15 text-fenix-ember-light' : 'border-fenix-char-700 text-fenix-char-500 hover:text-fenix-cream hover:border-fenix-char-500'}`}>
              {labels[c]}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div key={cat} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((v, i) => (
              <motion.div key={v.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
                className="video-card group cursor-pointer rounded-sm overflow-hidden border border-fenix-char-700/50 bg-fenix-char-800/50 hover:border-fenix-ember/25" onClick={() => setPlaying(v)}>
                <div className="relative aspect-video overflow-hidden flex items-center justify-center">
                  {/* Thumbnail images by category */}
                  {(() => {
                    const thumbs = {
                      campaigns: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=600&h=340&fit=crop&q=80',
                      events: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=340&fit=crop&q=80',
                      talent: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=340&fit=crop&q=80',
                      reels: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=340&fit=crop&q=80',
                      behind: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&h=340&fit=crop&q=80',
                    };
                    return <img src={thumbs[v.category] || thumbs.campaigns} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500" loading="lazy" />;
                  })()}
                  <div className="relative z-10 w-12 h-12 rounded-full border border-fenix-cream/15 flex items-center justify-center bg-fenix-char-900/50 group-hover:border-fenix-ember/40 group-hover:bg-fenix-ember/10 transition-all duration-300">
                    <Play size={18} className="text-fenix-cream/40 group-hover:text-fenix-ember-light transition-colors ml-0.5" />
                  </div>
                  <div className="absolute top-2 right-2 px-2 py-1 bg-fenix-char-900/70 font-sans text-[0.5rem] text-fenix-char-400 rounded-sm">{platformIcons[v.platform] || v.platform}</div>
                  {v.featured && <div className="absolute top-2 left-2 flex items-center gap-1 px-2 py-1 bg-fenix-ember/20 border border-fenix-ember/30 rounded-sm"><Star size={8} className="text-fenix-ember-light" /><span className="font-sans text-[0.5rem] text-fenix-ember-light">Featured</span></div>}
                  {v.phase && <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-fenix-char-900/60 font-sans text-[0.45rem] tracking-[0.15em] uppercase text-fenix-char-500 rounded-sm">{v.phase}</div>}
                </div>
                <div className="p-4">
                  <h4 className="font-display text-lg text-fenix-cream/85 group-hover:text-fenix-cream transition-colors">{v.title[lang] || v.title.en}</h4>
                  <div className="flex justify-between items-center mt-2">
                    <span className="font-sans text-[0.55rem] tracking-[0.15em] uppercase text-fenix-ember/40">{labels[v.category]}</span>
                    <span className="font-sans text-[0.5rem] text-fenix-char-600">{v.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <p className="text-center font-sans text-[0.6rem] tracking-[0.1em] text-fenix-char-600 mt-8">
          {filtered.length} / {getActiveVideos().length} videos — edit <code className="text-fenix-ember/40 font-mono">videos.config.js</code> to manage
        </p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {playing && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 modal-backdrop flex items-center justify-center p-4" onClick={() => setPlaying(null)}>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} onClick={(e) => e.stopPropagation()} className="relative w-full max-w-4xl bg-fenix-char-900 rounded-sm overflow-hidden">
              <button onClick={() => setPlaying(null)} className="absolute -top-10 right-0 text-fenix-cream/60 hover:text-fenix-cream"><X size={20} /></button>
              <div className="aspect-video bg-fenix-char-800 flex items-center justify-center">
                {playing.platform === 'youtube' || playing.platform === 'youtube-short' ? (
                  <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${playing.embedId}?autoplay=1`} allow="autoplay; encrypted-media" allowFullScreen title={playing.title[lang] || playing.title.en} />
                ) : (
                  <div className="text-center p-8">
                    <Play size={40} className="text-fenix-ember/40 mx-auto mb-4" />
                    <p className="font-display text-xl text-fenix-cream/60">{playing.title[lang] || playing.title.en}</p>
                    <p className="font-sans text-xs text-fenix-char-500 mt-2">{playing.platform} embed — replace embedId in config</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
