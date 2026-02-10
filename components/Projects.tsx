import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../projectsData'; 
import { Project } from '../types'; 
import { X, ExternalLink } from 'lucide-react';

// Interfaz para las props
interface ProjectCardProps {
  project: Project;
  setSelectedId: (id: number | null) => void;
}

// --- COMPONENTE 1: LA TARJETA DEL GRID (VERSIÓN ROBUSTA USEEFFECT) ---
const ProjectCard: React.FC<ProjectCardProps> = ({ project, setSelectedId }) => {
  // Usamos un solo estado para controlar todo. Es la fuente de la verdad.
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Este useEffect es el "cerebro" que sincroniza el estado del hover con el video.
  // Es la forma más estándar y segura en React de manejar esto.
  useEffect(() => {
    const video = videoRef.current;
    // Si no hay video (ej. el proyecto de DAM) o el elemento no está listo, no hacemos nada.
    if (!video || !project.video) return;

    if (isHovered) {
      // ENTRAR: Intentamos reproducir
      video.currentTime = 0; // Aseguramos que empiece desde el principio
      const playPromise = video.play();
      
      // Gestión de errores de promesas de video (vital para evitar cuelgues)
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Si el navegador bloquea el autoplay o se interrumpe, lo ignoramos silenciosamente.
          // Esto evita errores en consola y comportamientos raros.
        });
      }
    } else {
      // SALIR: Pausamos y rebobinamos
      video.pause();
      video.currentTime = 0;
    }
  }, [isHovered, project.video]); // Se ejecuta cada vez que isHovered cambia

  const imageVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: project.video ? 1 : 1.05,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // Lógica de visualización: Mostramos el vídeo solo si hay hover Y el proyecto tiene vídeo.
  const showVideo = isHovered && project.video;

  return (
    <motion.div
      layoutId={`card-container-${project.id}`}
      onClick={() => setSelectedId(project.id)}
      // Los eventos solo cambian el estado. Simple.
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover="hover"
      initial="rest"
      className="group cursor-pointer relative bg-[#0a0a0a] border border-white/5 hover:border-white/20 transition-colors overflow-hidden rounded-sm"
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Barra de navegador decorativa */}
      <div className="h-6 w-full bg-neutral-900 border-b border-white/5 flex items-center px-3 gap-1.5 z-20 relative">
        <div className="w-2 h-2 rounded-full bg-neutral-700/50"></div>
        <div className="w-2 h-2 rounded-full bg-neutral-700/50"></div>
        <div className="w-2 h-2 rounded-full bg-neutral-700/50"></div>
      </div>

      {/* Contenedor Multimedia */}
      <motion.div 
        layoutId={`card-image-container-${project.id}`}
        className="aspect-[4/3] overflow-hidden relative bg-neutral-900"
      >
        {/* IMAGEN: Se oculta basándose en la variable showVideo */}
        <motion.img 
          layoutId={`card-image-${project.id}`}
          variants={imageVariants}
          src={project.image} 
          alt={project.title} 
          className={`w-full h-full object-cover object-top absolute inset-0 z-10 transition-opacity duration-500
            ${showVideo ? 'opacity-0' : 'opacity-100'} 
            grayscale group-hover:grayscale-0
          `} 
        />

        {project.video && (
          <video
            ref={videoRef}
            src={project.video}
            loop
            muted
            playsInline
            preload="auto"
            // El video siempre está "visible" en el DOM, la imagen z-10 es la que lo tapa o destapa.
            className="w-full h-full object-cover object-top absolute inset-0 z-0 opacity-100"
          />
        )}
      </motion.div>
      
      {/* Contenido Texto */}
      <div className="p-6 relative z-20 bg-[#0a0a0a]">
         <div className="mb-3">
            <motion.h3 
              layoutId={`card-title-${project.id}`}
              className="text-xl font-sans font-medium text-white group-hover:text-neutral-200"
            >
              {project.title}
            </motion.h3>
         </div>
         <motion.p 
            layoutId={`card-short-${project.id}`}
            className="text-sm text-neutral-500 font-light line-clamp-2"
         >
            {project.shortDescription}
         </motion.p>
         <div className="mt-4 flex gap-2 flex-wrap">
            {project.tech.slice(0, 3).map((t: string, i: number) => (
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
  );
};

// 2. Definimos la interfaz para el Modal
interface ModalContentProps {
  selectedProject: Project;
  setSelectedId: (id: number | null) => void;
}

// --- COMPONENTE 2: EL CONTENIDO DEL MODAL ---
const ModalContent: React.FC<ModalContentProps> = ({ selectedProject, setSelectedId }) => {
  const [hasPlayedOnce, setHasPlayedOnce] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnd = () => {
    setHasPlayedOnce(true);
  };

  return (
    <motion.div
      layoutId={`card-container-${selectedProject.id}`}
      className="w-full max-w-6xl h-full md:h-auto md:max-h-[95vh] bg-[#0a0a0a] border border-white/10 overflow-hidden relative flex flex-col md:rounded-lg shadow-2xl"
    >
      <button 
        onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
        className="absolute top-4 right-4 z-50 p-2 bg-black/50 backdrop-blur-md rounded-full text-white border border-white/10 hover:bg-white hover:text-black transition-all"
      >
        <X size={24} />
      </button>

      {/* HEADER MULTIMEDIA (Aspect Video 16:9) */}
      <motion.div 
          layoutId={`card-image-container-${selectedProject.id}`}
          className="relative w-full aspect-video shrink-0 bg-neutral-900 overflow-hidden"
      >
          <motion.img 
            layoutId={`card-image-${selectedProject.id}`}
            src={selectedProject.image} 
            className="w-full h-full object-cover object-top grayscale-0"
          />

          {selectedProject.video && (
            <video
              ref={videoRef}
              src={selectedProject.video}
              autoPlay
              muted
              playsInline
              loop={hasPlayedOnce} 
              onEnded={handleVideoEnd}
              className={`w-full h-full object-cover object-top absolute inset-0 z-10 transition-opacity duration-700 ${
                hasPlayedOnce ? 'opacity-0 hover:opacity-100' : 'opacity-100'
              }`}
            />
          )}
          
          {/* --- CORRECCIÓN DEL DIFUMINADO --- */}
          {/* Hemos cambiado 'from-[#0a0a0a]' por 'from-black/60' para que sea semitransparente */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none z-20" />
      </motion.div>

      {/* CONTENIDO TEXTO */}
      <div className="flex-1 overflow-y-auto p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 justify-between items-start mb-10 border-b border-white/5 pb-8">
            <div>
              <motion.h2 layoutId={`card-title-${selectedProject.id}`} className="text-3xl md:text-5xl font-sans font-semibold text-white mb-2">
                {selectedProject.title}
              </motion.h2>
              <motion.p layoutId={`card-short-${selectedProject.id}`} className="text-lg text-neutral-400 font-light">
                  {selectedProject.shortDescription}
              </motion.p>
            </div>
            {selectedProject.link && (
              <a href={selectedProject.link} target="_blank" rel="noreferrer" className="shrink-0 flex items-center gap-3 px-6 py-3 bg-white text-black text-sm font-medium rounded-sm hover:bg-neutral-200 transition-colors">
                Ver Proyecto <ExternalLink size={16} />
              </a>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h4 className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-4">La Historia</h4>
              <p className="text-neutral-300 font-sans text-base leading-loose whitespace-pre-wrap font-light">{selectedProject.description}</p>
            </div>
            <div className="space-y-8">
                <div>
                  <h4 className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-4">Stack Tecnológico</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1.5 bg-neutral-900 border border-white/10 rounded-md text-sm text-neutral-300 font-mono">{tech}</span>
                    ))}
                  </div>
                </div>
            </div>
          </div>
      </div>
    </motion.div>
  );
};

// --- COMPONENTE PRINCIPAL ---
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} setSelectedId={setSelectedId} />
          ))}
        </div>

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
              <ModalContent selectedProject={selectedProject} setSelectedId={setSelectedId} />
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};