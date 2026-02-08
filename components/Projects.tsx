import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../projectsData';
import { Project } from '../types';
import { X, ExternalLink, ArrowUpRight } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selectedProject = projects.find(p => p.id === selectedId);

  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedId]);

  return (
    <section className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
             <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-2 block">Portfolio</span>
             <h2 className="text-4xl md:text-5xl font-sans text-white font-light">Proyectos Seleccionados</h2>
          </div>
          <p className="text-neutral-500 text-sm font-light max-w-xs text-right hidden md:block">
            Una colección de retos técnicos y soluciones de negocio reales.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layoutId={`card-container-${project.id}`}
              onClick={() => setSelectedId(project.id)}
              className="group cursor-pointer relative bg-[#0a0a0a] border border-white/5 hover:border-white/20 transition-colors overflow-hidden rounded-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Image Container */}
              <motion.div 
                layoutId={`card-image-container-${project.id}`}
                className="aspect-[4/3] overflow-hidden"
              >
                <motion.img 
                  layoutId={`card-image-${project.id}`}
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out opacity-80 group-hover:opacity-100" 
                />
              </motion.div>
              
              {/* Card Content */}
              <div className="p-6">
                 <div className="flex justify-between items-start mb-3">
                    <motion.h3 
                      layoutId={`card-title-${project.id}`}
                      className="text-xl font-sans font-medium text-white group-hover:text-neutral-200"
                    >
                      {project.title}
                    </motion.h3>
                    <ArrowUpRight size={18} className="text-neutral-600 group-hover:text-white transition-colors" />
                 </div>
                 <motion.p 
                    layoutId={`card-short-${project.id}`}
                    className="text-sm text-neutral-500 font-light line-clamp-2"
                 >
                    {project.shortDescription}
                 </motion.p>
                 <div className="mt-4 flex gap-2 flex-wrap">
                    {project.tech.slice(0, 3).map((t, i) => (
                      <span key={i} className="text-[10px] font-mono text-neutral-400 border border-white/5 px-2 py-1 rounded-sm">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                       <span className="text-[10px] font-mono text-neutral-600 px-1 py-1">+{project.tech.length - 3}</span>
                    )}
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full Screen Modal */}
        <AnimatePresence>
          {selectedId && selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="absolute inset-0 bg-black/90 backdrop-blur-sm"
              />
              
              <motion.div
                layoutId={`card-container-${selectedId}`}
                className="w-full max-w-5xl h-full md:h-auto md:max-h-[90vh] bg-[#0a0a0a] border border-white/10 overflow-hidden relative flex flex-col md:rounded-lg shadow-2xl"
              >
                {/* Close Button */}
                <button 
                  onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                  className="absolute top-4 right-4 z-20 p-2 bg-black/50 backdrop-blur-md rounded-full text-white border border-white/10 hover:bg-white hover:text-black transition-all"
                >
                  <X size={24} />
                </button>

                {/* Modal Image Header */}
                <motion.div 
                   layoutId={`card-image-container-${selectedId}`}
                   className="relative h-64 md:h-96 w-full shrink-0"
                >
                   <motion.img 
                      layoutId={`card-image-${selectedId}`}
                      src={selectedProject.image} 
                      className="w-full h-full object-cover grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                </motion.div>

                {/* Modal Content */}
                <div className="flex-1 overflow-y-auto p-8 md:p-12">
                   <div className="flex flex-col md:flex-row gap-8 justify-between items-start mb-10 border-b border-white/5 pb-8">
                      <div>
                        <motion.h2 
                          layoutId={`card-title-${selectedId}`}
                          className="text-3xl md:text-5xl font-sans font-semibold text-white mb-2"
                        >
                          {selectedProject.title}
                        </motion.h2>
                        <motion.p 
                           layoutId={`card-short-${selectedId}`}
                           className="text-lg text-neutral-400 font-light"
                        >
                           {selectedProject.shortDescription}
                        </motion.p>
                      </div>
                      
                      {selectedProject.link && (
                        <a 
                          href={selectedProject.link} 
                          target="_blank" 
                          rel="noreferrer"
                          className="shrink-0 flex items-center gap-3 px-6 py-3 bg-white text-black text-sm font-medium rounded-sm hover:bg-neutral-200 transition-colors"
                        >
                          Ver Proyecto <ExternalLink size={16} />
                        </a>
                      )}
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                      <div className="md:col-span-2">
                        <h4 className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-4">La Historia</h4>
                        <p className="text-neutral-300 font-sans text-base leading-loose whitespace-pre-wrap font-light">
                          {selectedProject.description}
                        </p>
                      </div>

                      <div className="space-y-8">
                        <div>
                           <h4 className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-4">Stack Tecnológico</h4>
                           <div className="flex flex-wrap gap-2">
                              {selectedProject.tech.map((tech) => (
                                <span key={tech} className="px-3 py-1.5 bg-neutral-900 border border-white/10 rounded-md text-sm text-neutral-300 font-mono">
                                  {tech}
                                </span>
                              ))}
                           </div>
                        </div>
                      </div>
                   </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};