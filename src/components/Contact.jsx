'use client';
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Check } from 'lucide-react';

export default function Contact({ dict }) {
  const [interest, setInterest] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 3000); };

  return (
    <section id="contact" className="relative py-28 overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 right-0 divider" />
      <div className="absolute top-[20%] right-0 w-[350px] h-[350px] rounded-full bg-fenix-ember/[0.025] blur-[80px]" />
      <div className="absolute bottom-[15%] left-0 w-[300px] h-[300px] rounded-full bg-fenix-amber/[0.03] blur-[70px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-20">
          <span className="badge">{dict.badge}</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mt-8 fenix-text">{dict.title}</h2>
          <p className="font-body text-xl text-fenix-char-500 max-w-2xl mx-auto mt-4">{dict.subtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-sans text-[0.6rem] tracking-[0.18em] uppercase text-fenix-char-400 mb-2">{dict.nameLabel}</label>
                  <input type="text" className="form-input" required />
                </div>
                <div>
                  <label className="block font-sans text-[0.6rem] tracking-[0.18em] uppercase text-fenix-char-400 mb-2">{dict.emailLabel}</label>
                  <input type="email" className="form-input" required />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-sans text-[0.6rem] tracking-[0.18em] uppercase text-fenix-char-400 mb-2">{dict.companyLabel}</label>
                  <input type="text" className="form-input" />
                </div>
                <div>
                  <label className="block font-sans text-[0.6rem] tracking-[0.18em] uppercase text-fenix-char-400 mb-2">{dict.countryLabel}</label>
                  <input type="text" className="form-input" />
                </div>
              </div>

              {/* Interest selector */}
              <div>
                <label className="block font-sans text-[0.6rem] tracking-[0.18em] uppercase text-fenix-char-400 mb-3">{dict.interestLabel}</label>
                <div className="flex flex-wrap gap-2">
                  {dict.interests.map((opt) => (
                    <button key={opt} type="button" onClick={() => setInterest(interest === opt ? '' : opt)}
                      className={`px-4 py-2 font-sans text-[0.6rem] tracking-[0.12em] uppercase border rounded-sm transition-all duration-300 flex items-center gap-1.5
                        ${interest === opt ? 'border-fenix-ember bg-fenix-ember/10 text-fenix-ember-deep' : 'border-fenix-sand text-fenix-char-500 hover:border-fenix-ember/40 hover:text-fenix-ember'}`}>
                      {interest === opt && <Check size={10} />}{opt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-sans text-[0.6rem] tracking-[0.18em] uppercase text-fenix-char-400 mb-2">{dict.messageLabel}</label>
                <textarea rows="4" className="form-input resize-none" />
              </div>

              <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className={`w-full sm:w-auto flex items-center justify-center gap-2 transition-all duration-500 ${submitted ? 'bg-fenix-sage text-white px-10 py-3.5 font-sans text-sm tracking-wider' : 'btn-filled'}`}>
                {submitted ? <><Check size={16} /> Sent!</> : <><Send size={14} />{dict.submit}</>}
              </motion.button>
            </form>
          </motion.div>

          {/* Direct contact */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.4 }} className="lg:col-span-2">
            <div className="bg-white/50 border border-fenix-sand/60 p-8 rounded-sm">
              <h3 className="font-display text-2xl font-semibold text-fenix-char-800 mb-2">{dict.directTitle}</h3>
              <p className="font-body text-base text-fenix-char-500 mb-8">{dict.directText}</p>
              <div className="space-y-6">
                {[
                  { icon: Phone, val: dict.phone },
                  { icon: Mail, val: dict.email },
                  { icon: MapPin, val: dict.address },
                ].map((c) => (
                  <div key={c.val} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-fenix-ember/10 border border-fenix-ember/20 flex items-center justify-center flex-shrink-0">
                      <c.icon size={16} className="text-fenix-ember" />
                    </div>
                    <span className="font-body text-lg text-fenix-char-700">{c.val}</span>
                  </div>
                ))}
              </div>
              {/* Social */}
              <div className="mt-10 pt-6 border-t border-fenix-sand/60">
                <span className="font-sans text-[0.55rem] tracking-[0.2em] uppercase text-fenix-char-400 block mb-4">Follow Fenix</span>
                <div className="flex gap-3">
                  {['Instagram', 'TikTok', 'YouTube', 'LinkedIn'].map((s) => (
                    <a key={s} href="#" className="px-3 py-1.5 border border-fenix-sand text-fenix-char-500 font-sans text-[0.55rem] tracking-wider uppercase hover:border-fenix-ember hover:text-fenix-ember transition-all rounded-sm">{s}</a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
