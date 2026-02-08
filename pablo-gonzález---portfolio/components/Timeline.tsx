import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projects } from '../projectsData';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

const TimelineItem: React.FC<{ data: Project; index: number; isLast: boolean }> = ({ data, index, isLast }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const x = useTransform(scrollYProgress, [0, 0.5], [index % 2 === 0 ? 50 : -50, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <div ref={ref} className={`relative flex flex-col md:flex-row gap-8 md:gap-24 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-32 md:mb-48`}>
      
      {/* Center Line Marker */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-neutral-900 -translate-x-1/2 hidden md:block">
        <motion.div 
          style={{ height: scrollYProgress, scaleY: scrollYProgress }} 
          className="absolute top-0 left-0 w-full bg-white origin-top" 
        />
      </div>

      {/* Image Side */}
      <motion.div 
        style={{ opacity, x: index % 2 === 0 ? -50 : 50, scale }}
        className="w-full md:w-1/2 pl-12 md:pl-0"
      >
        <div className="relative aspect-video md:aspect-[4/3] overflow-hidden bg-neutral-900 border border-neutral-800 group">
          <img 
            src={data.image} 
            alt={data.title} 
            className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
            <span className="font-mono text-xs text-white bg-black/50 backdrop-blur-md px-2 py-1 border border-white/10">
              {data.tech.slice(0, 3).join(" + ")}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Content Side */}
      <motion.div 
        style={{ opacity, x }}
        className="w-full md:w-1/2 pl-12 md:pl-0 flex flex-col justify-center"
      >
        <div className="flex items-center gap-4 mb-4">
          <span className="font-mono text-xs text-neutral-500">0{index + 1}</span>
          <div className="h-px w-12 bg-neutral-800" />
          <span className="font-mono text-xs text-white uppercase tracking-wider">
            {index === 0 ? '2022' : index === 1 ? 'Formación' : index === 2 ? '2023' : 'Actualidad'}
          </span>
        </div>

        <h3 className="text-3xl md:text-5xl font-sans text-white mb-6 leading-tight">
          {data.title}
        </h3>

        <p className="text-neutral-400 font-sans leading-relaxed text-base md:text-lg mb-8 max-w-md">
          {data.description}
        </p>

        {data.link && (
          <a 
            href={data.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white border-b border-white/20 pb-1 hover:border-white transition-colors w-fit font-mono text-xs uppercase tracking-widest group"
          >
            Visitar Proyecto
            <ArrowUpRight size={14} className="transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        )}
      </motion.div>

      {/* Mobile vertical line */}
      <div className="absolute left-4 top-0 bottom-0 w-px bg-neutral-800 md:hidden" />
      <div className="absolute left-4 top-8 w-2 h-2 bg-white -translate-x-1/2 md:hidden" />
    </div>
  );
};

export const Timeline: React.FC = () => {
  return (
    <section className="py-32 px-4 md:px-8 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-32 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-sans tracking-tight text-white mb-6"
          >
            La Evolución
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-mono text-neutral-500 text-sm md:text-base max-w-xl mx-auto"
          >
            DE EXPERIMENTAR EN SHOPIFY A ORQUESTAR SISTEMAS LOGÍSTICOS COMPLEJOS.
          </motion.p>
        </div>

        <div>
          {projects.map((project, index) => (
            <TimelineItem 
              key={project.id} 
              data={project} 
              index={index} 
              isLast={index === projects.length - 1} 
            />
          ))}
        </div>
        
        <div className="h-32 flex items-center justify-center">
             <div className="font-mono text-xs text-neutral-600 animate-pulse">TO BE CONTINUED...</div>
        </div>
      </div>
    </section>
  );
};