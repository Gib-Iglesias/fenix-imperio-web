'use client';
import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X, Droplets, Heart, Mountain, Tag, FlaskConical, Ruler } from 'lucide-react';

function Modal({ product, dict, onClose }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 modal-backdrop flex items-center justify-center p-4" onClick={onClose}>
      <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }} onClick={(e) => e.stopPropagation()} className="relative w-full max-w-2xl bg-fenix-ivory border border-fenix-sand overflow-hidden max-h-[90vh] overflow-y-auto rounded-sm">
        <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, transparent, ${product.color}, transparent)` }} />
        <button onClick={onClose} className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center text-fenix-char-400 hover:text-fenix-ember transition-colors"><X size={20} /></button>
        <div className="p-8 md:p-12">
          <span className="font-sans text-[0.6rem] tracking-[0.3em] uppercase" style={{ color: product.color }}>{product.family}</span>
          <h3 className="font-display text-4xl md:text-5xl font-semibold mt-2 fenix-text">{product.name}</h3>
          <p className="font-display text-xl italic text-fenix-char-400 mt-1 mb-8">{product.tagline}</p>
          <p className="font-body text-lg text-fenix-char-600 leading-relaxed mb-10">{product.description}</p>
          <div className="space-y-5 mb-10">
            {[{ icon: Droplets, l: dict.topNotes, v: product.topNotes }, { icon: Heart, l: dict.heartNotes, v: product.heartNotes }, { icon: Mountain, l: dict.baseNotes, v: product.baseNotes }].map((n) => (
              <div key={n.l} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-fenix-sand flex items-center justify-center bg-white/50"><n.icon size={16} className="text-fenix-ember/60" /></div>
                <div><span className="font-sans text-[0.6rem] tracking-[0.2em] uppercase text-fenix-ember">{n.l}</span><p className="font-body text-lg text-fenix-char-700 mt-1">{n.v}</p></div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-fenix-sand mb-8">
            {[{ icon: Tag, l: dict.family, v: product.family }, { icon: FlaskConical, l: dict.concentration, v: product.concentration }, { icon: Ruler, l: dict.volume, v: product.volume }].map((s) => (
              <div key={s.l} className="text-center"><s.icon size={14} className="mx-auto text-fenix-char-300 mb-2" /><span className="block font-sans text-[0.55rem] tracking-[0.18em] uppercase text-fenix-char-400">{s.l}</span><span className="block font-body text-sm text-fenix-char-700 mt-1">{s.v}</span></div>
            ))}
          </div>
          <a href="#contact" onClick={onClose} className="block w-full text-center btn-filled">{dict.inquire}</a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Products({ dict }) {
  const [sel, setSel] = useState(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <section id="collection" className="relative py-28 overflow-hidden bg-white/30" ref={ref}>
      <div className="absolute top-0 left-0 right-0 divider" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-20">
          <span className="badge">{dict.badge}</span>
          <h2 className="font-display text-4xl md:text-6xl font-semibold mt-8 fenix-text">{dict.title}</h2>
          <p className="font-body text-xl text-fenix-char-500 max-w-xl mx-auto mt-4">{dict.subtitle}</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dict.items.map((p, i) => {
            const productImages = [
              'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=530&fit=crop&q=80',
              'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=400&h=530&fit=crop&q=80',
              'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=530&fit=crop&q=80',
              'https://images.unsplash.com/photo-1594035910387-fbd1a485b12e?w=400&h=530&fit=crop&q=80',
            ];
            return (
            <motion.div key={p.name} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }} className="product-card group cursor-pointer" onClick={() => setSel(p)}>
              <div className="relative bg-white border border-fenix-sand/60 overflow-hidden rounded-sm transition-all duration-500 group-hover:border-fenix-ember/25">
                <div className="h-0.5 w-full opacity-50 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(90deg, transparent, ${p.color}, transparent)` }} />
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img src={productImages[i]} alt={p.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                  <div className="absolute bottom-4 left-4"><span className="font-sans text-[0.55rem] tracking-[0.25em] uppercase font-medium px-2 py-0.5 bg-white/80 backdrop-blur-sm rounded-sm" style={{ color: p.color }}>{p.family}</span></div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-2xl font-semibold text-fenix-char-800">{p.name}</h3>
                  <p className="font-display text-sm italic text-fenix-char-400 mt-1">{p.tagline}</p>
                  <div className="mt-4 pt-4 border-t border-fenix-sand/60"><span className="font-sans text-[0.6rem] tracking-[0.18em] uppercase text-fenix-ember/60 group-hover:text-fenix-ember transition-colors">{dict.viewDetails} →</span></div>
                </div>
              </div>
            </motion.div>
          );
          })}
        </div>
      </div>
      <AnimatePresence>{sel && <Modal product={sel} dict={dict} onClose={() => setSel(null)} />}</AnimatePresence>
    </section>
  );
}
