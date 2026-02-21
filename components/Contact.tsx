import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Copy, Check, Github } from 'lucide-react'; // AÑADIDO Github

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');
  const [copied, setCopied] = useState(false);
  const email = "pablodev1422@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#050505] relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* Info Side */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-sans font-medium text-white mb-6 tracking-tight">
              Hablemos.
            </h2>
            <p className="text-lg text-neutral-400 font-light mb-8 max-w-md leading-relaxed">
              Aunque soy algo tímido al principio, me encanta charlar sobre nuevos retos, ideas de negocio o simplemente debatir sobre tecnología.
            </p>

            <div className="space-y-6 mt-12">
              <div>
                <span className="font-mono text-xs text-neutral-600 uppercase tracking-widest mb-1 block">Email</span>
                <div className="flex items-center gap-4 group">
                  <a href={`mailto:${email}`} className="text-xl md:text-2xl text-white font-sans hover:text-neutral-300 transition-colors">
                    {email}
                  </a>
                  <button onClick={handleCopy} className="text-neutral-500 hover:text-white transition-colors p-2" title="Copiar email">
                    {copied ? <Check size={18} /> : <Copy size={18} />}
                  </button>
                </div>
              </div>

              <div>
                <span className="font-mono text-xs text-neutral-600 uppercase tracking-widest mb-1 block">Social</span>
                <div className="flex flex-col gap-2">
                  <a href="https://github.com/pablodev1422" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xl md:text-2xl text-white font-sans hover:text-neutral-300 transition-colors w-fit">
                    <Github size={24} /> GitHub ↗
                  </a>
                  <a href="https://www.linkedin.com/in/pablo-gonzalez-perez" target="_blank" rel="noreferrer" className="text-xl md:text-2xl text-white font-sans hover:text-neutral-300 transition-colors w-fit">
                    LinkedIn Profile ↗
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Form Side */}
        <div className="bg-[#0a0a0a] p-8 md:p-12 border border-white/5 rounded-sm">
          {formState === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full flex flex-col items-center justify-center text-center py-20"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black mb-6">
                <Check size={32} />
              </div>
              <h3 className="text-2xl text-white font-sans mb-2">Mensaje Enviado</h3>
              <p className="text-neutral-500 font-light">Gracias por contactar. Te responderé lo antes posible.</p>
              <button
                onClick={() => setFormState('idle')}
                className="mt-8 text-sm text-white underline underline-offset-4 hover:text-neutral-300"
              >
                Enviar otro mensaje
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label className="font-mono text-xs text-neutral-500 uppercase tracking-widest">Tu Nombre</label>
                <input
                  required
                  type="text"
                  className="w-full bg-transparent border-b border-neutral-800 py-3 text-white focus:outline-none focus:border-white transition-colors font-sans text-lg placeholder-neutral-800"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label className="font-mono text-xs text-neutral-500 uppercase tracking-widest">Email</label>
                <input
                  required
                  type="email"
                  className="w-full bg-transparent border-b border-neutral-800 py-3 text-white focus:outline-none focus:border-white transition-colors font-sans text-lg placeholder-neutral-800"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="font-mono text-xs text-neutral-500 uppercase tracking-widest">Mensaje</label>
                <textarea
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-neutral-800 py-3 text-white focus:outline-none focus:border-white transition-colors font-sans text-lg placeholder-neutral-800 resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                disabled={formState === 'sending'}
                className="w-full bg-white text-black font-medium py-4 mt-4 hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {formState === 'sending' ? 'Enviando...' : (
                  <>Enviar Mensaje <Send size={16} /></>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};