import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Github } from 'lucide-react';
import { ContactForm } from './ContactForm';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "pablodev1422@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
                  <a href="https://github.com/pabloperez14" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xl md:text-2xl text-white font-sans hover:text-neutral-300 transition-colors w-fit">
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
        <div className="w-full md:w-auto flex-1">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};