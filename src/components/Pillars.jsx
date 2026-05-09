'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Network, Brain, Sparkles, Landmark, TrendingUp } from 'lucide-react';

const iconMap = {
  network: Network,
  intelligence: Brain,
  experience: Sparkles,
  summit: Landmark,
  capital: TrendingUp,
};

const colorMap = {
  network: { bg: 'bg-fenix-ember/10', text: 'text-fenix-ember', border: 'border-fenix-ember/20', img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80' },
  intelligence: { bg: 'bg-fenix-amber/10', text: 'text-fenix-amber', border: 'border-fenix-amber/20', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80' },
  experience: { bg: 'bg-fenix-plum/10', text: 'text-fenix-plum', border: 'border-fenix-plum/20', img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80' },
  summit: { bg: 'bg-fenix-copper/10', text: 'text-fenix-copper', border: 'border-fenix-copper/20', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80' },
  capital: { bg: 'bg-fenix-sage/10', text: 'text-fenix-sage', border: 'border-fenix-sage/20', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80' },
};

export default function Pillars({ dict }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="pillars" className="relative py-28 overflow-hidden bg-white/30" ref={ref}>
      <div className="absolute top-0 left-0 right-0 divider" />
      <div className="absolute top-[30%] right-0 w-[350px] h-[350px] rounded-full bg-fenix-ember/[0.025] blur-[80px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-20">
          <span className="badge">{dict.badge}</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mt-8 fenix-text">{dict.title}</h2>
          <p className="font-body text-xl text-fenix-char-500 max-w-2xl mx-auto mt-4">{dict.subtitle}</p>
        </motion.div>

        {/* Top row: 3 pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {dict.items.slice(0, 3).map((item, i) => {
            const Icon = iconMap[item.icon] || Network;
            const colors = colorMap[item.icon] || colorMap.network;
            return (
              <motion.div key={item.title} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
                className="group bg-white border border-fenix-sand/50 rounded-sm overflow-hidden hover:border-fenix-ember/25 hover:shadow-lg hover:shadow-fenix-ember/[0.04] transition-all duration-500">
                {/* Image */}
                <div className="relative h-36 overflow-hidden">
                  <img src={colors.img} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
                  <div className={`absolute top-3 left-3 w-10 h-10 rounded-full ${colors.bg} ${colors.border} border flex items-center justify-center backdrop-blur-sm`}>
                    <Icon size={18} className={colors.text} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-fenix-char-800 mb-3">{item.title}</h3>
                  <p className="font-body text-base text-fenix-char-500 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom row: 2 pillars centered */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {dict.items.slice(3, 5).map((item, i) => {
            const Icon = iconMap[item.icon] || Network;
            const colors = colorMap[item.icon] || colorMap.network;
            return (
              <motion.div key={item.title} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.5 + i * 0.12 }}
                className="group bg-white border border-fenix-sand/50 rounded-sm overflow-hidden hover:border-fenix-ember/25 hover:shadow-lg hover:shadow-fenix-ember/[0.04] transition-all duration-500">
                <div className="relative h-36 overflow-hidden">
                  <img src={colors.img} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
                  <div className={`absolute top-3 left-3 w-10 h-10 rounded-full ${colors.bg} ${colors.border} border flex items-center justify-center backdrop-blur-sm`}>
                    <Icon size={18} className={colors.text} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-fenix-char-800 mb-3">{item.title}</h3>
                  <p className="font-body text-base text-fenix-char-500 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
