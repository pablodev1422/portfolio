import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const About: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} id="about" className="py-24 md:py-32 px-6 bg-[#050505] border-t border-white/5 overflow-hidden">
      <motion.div style={{ y, opacity }} className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-4 block">Sobre mí</span>

          <h2 className="text-3xl md:text-5xl font-sans text-white mb-8 leading-tight font-light">
            Más que código, construyo <span className="text-neutral-500">soluciones</span>.
          </h2>

          <div className="space-y-6 text-neutral-400 text-lg font-light leading-relaxed">
            <p>
              Mi viaje comenzó en 2022, casi por necesidad, cuando me enfrenté al reto de digitalizar una empresa. Lo que empezó como "trastear" con Shopify se convirtió en una obsesión por entender cómo funcionan las cosas por dentro.
            </p>
            <p>
              Esa curiosidad me llevó al Grado Superior (DAM), donde cambié el "hacer que funcione" por la <strong>arquitectura robusta</strong>. Me apasiona el ecosistema Java/Spring Boot para el backend, aunque no dudo en usar React para crear experiencias completas.
            </p>
            <p>
              Soy una persona tranquila y algo tímida, pero cuando se trata de resolver un problema técnico o optimizar un proceso, me transformo. Me encanta aprender, experimentar y, sobre todo, ver cómo una buena lógica de software puede ahorrar costes y tiempo real a un negocio.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {["Java", "Spring Boot", "Docker", "React", "SQL", "Shopify API", "MongoDB", "Git"].map((skill, index) => (
              <span key={index} className="px-4 py-2 bg-neutral-900 border border-white/5 rounded-full text-xs font-mono text-neutral-300">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};