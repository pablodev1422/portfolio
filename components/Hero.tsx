import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="hero" className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#050505] selection:bg-white selection:text-black">
      {/* Ultra-subtle Apple style radial dark gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0%,transparent_50%)] z-0 pointer-events-none" />

      <div className="z-10 flex flex-col items-center w-full max-w-5xl px-6">

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-32 h-32 md:w-40 md:h-40 mb-10"
        >
          <div className="w-full h-full rounded-full overflow-hidden border border-white/10 bg-neutral-900 relative z-10">
            <div className="w-full h-full bg-neutral-800 flex items-center justify-center text-neutral-600 font-mono text-xs">
              FOTO.JPG
            </div>
          </div>
        </motion.div>

        <motion.div style={{ y: yText, opacity: opacityText }} className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span className="h-px w-8 bg-neutral-700"></span>
            <span className="font-mono text-xs text-neutral-400 tracking-widest uppercase">Backend Architecture</span>
            <span className="h-px w-8 bg-neutral-700"></span>
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-sans font-medium tracking-tight text-white mb-6 leading-[1.1]">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="block"
            >
              Pablo González Pérez
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-sans text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Transformo complejidad en sistemas eficientes. <br />
            Especialista en lógica de negocio y ecosistemas escalables.
          </motion.p>

          {/* Social Links Updated */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex gap-6 justify-center mt-10"
          >
            <a href="https://github.com/pabloperez14" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-white/10 text-neutral-400 hover:text-white hover:border-white/30 transition-all hover:scale-105">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/pablo-gonzalez-perez" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-white/10 text-neutral-400 hover:text-white hover:border-white/30 transition-all hover:scale-105">
              <Linkedin size={20} />
            </a>
            <a href="mailto:pablodev1422@gmail.com" className="p-3 rounded-full border border-white/10 text-neutral-400 hover:text-white hover:border-white/30 transition-all hover:scale-105">
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};