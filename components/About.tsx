import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaJava } from 'react-icons/fa';
import { SiSpring, SiDocker, SiReact, SiMysql, SiShopify, SiMongodb, SiGit, SiFirebase, SiTailwindcss } from 'react-icons/si';

const skillCategories = [
  {
    title: "Backend & Arquitectura",
    items: [
      { name: "Java", icon: <span className="text-[#f89820] flex items-center"><FaJava size={16} /></span> },
      { name: "Spring Boot", icon: <span className="text-[#6db33f] flex items-center"><SiSpring size={16} /></span> },
      { name: "SQL", icon: <span className="text-[#4479A1] flex items-center"><SiMysql size={16} /></span> },
      { name: "MongoDB", icon: <span className="text-[#47A248] flex items-center"><SiMongodb size={16} /></span> },
    ]
  },
  {
    title: "Frontend & UI",
    items: [
      { name: "React", icon: <span className="text-[#61dafb] flex items-center"><SiReact size={16} /></span> },
      { name: "Tailwind CSS", icon: <span className="text-[#38bdf8] flex items-center"><SiTailwindcss size={16} /></span> },
    ]
  },
  {
    title: "Tools & Cloud",
    items: [
      { name: "Docker", icon: <span className="text-[#2496ed] flex items-center"><SiDocker size={16} /></span> },
      { name: "Git", icon: <span className="text-[#F05032] flex items-center"><SiGit size={16} /></span> },
      { name: "Shopify API", icon: <span className="text-[#95BF47] flex items-center"><SiShopify size={16} /></span> },
      { name: "Firebase", icon: <span className="text-[#FFCB2B] flex items-center"><SiFirebase size={16} /></span> },
    ]
  }
];

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
              Soy un perfil analítico y extremadamente curioso: me encanta investigar herramientas nuevas, tocar código de todo tipo y probar ideas. Me transformo cuando hay un problema técnico complejo que resolver, porque mi objetivo final siempre es el mismo: usar la lógica del software para optimizar procesos y ahorrar costes y tiempo real a los negocios.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
            {skillCategories.map((category, idx) => (
              <div key={idx} className={`flex flex-col items-center ${idx === 2 ? "md:col-span-2 md:px-12" : ""}`}>
                <h4 className={`font-mono text-xs text-neutral-500 uppercase tracking-widest mb-4 border-b border-white/5 pb-2 w-full text-center ${idx === 2 ? "md:w-3/4 mx-auto" : ""}`}>
                  {category.title}
                </h4>
                <div className="flex flex-wrap gap-3 justify-center">
                  {category.items.map((skill, index) => (
                    <span key={index} className="flex items-center gap-2.5 px-5 py-2.5 bg-white/[0.03] hover:bg-white/[0.08] transition-colors border border-white/10 rounded-full text-sm font-mono text-neutral-300 backdrop-blur-sm cursor-default shadow-sm shadow-black/20">
                      {skill.icon}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};