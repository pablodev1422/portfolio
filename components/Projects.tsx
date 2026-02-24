import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../projectsData';
import { Project } from '../types';
import { X, ExternalLink } from 'lucide-react';
import { FaJava } from 'react-icons/fa';
import { SiSpring, SiDocker, SiReact, SiMysql, SiShopify, SiMongodb, SiGit, SiTypescript, SiVite, SiVercel, SiAmazon } from 'react-icons/si';

// Helper for dynamic tech icons matching the premium badges design
export const getTechBadge = (tech: string) => {
  const t = tech.toLowerCase();
  let icon = null;
  if (t.includes('java spring') || t.includes('spring')) icon = <span className="text-[#6db33f]"><SiSpring size={12} /></span>;
  else if (t.includes('java')) icon = <span className="text-[#f89820]"><FaJava size={12} /></span>;
  else if (t.includes('react')) icon = <span className="text-[#61dafb]"><SiReact size={12} /></span>;
  else if (t.includes('docker')) icon = <span className="text-[#2496ed]"><SiDocker size={12} /></span>;
  else if (t.includes('shopify')) icon = <span className="text-[#95BF47]"><SiShopify size={12} /></span>;
  else if (t.includes('typescript')) icon = <span className="text-[#3178c6]"><SiTypescript size={12} /></span>;
  else if (t.includes('vite')) icon = <span className="text-[#646cff]"><SiVite size={12} /></span>;
  else if (t.includes('vercel')) icon = <span className="text-white"><SiVercel size={12} /></span>;
  else if (t.includes('amazon')) icon = <span className="text-[#FF9900]"><SiAmazon size={12} /></span>;
  else if (t.includes('seo') || t.includes('algoritmia') || t.includes('lógica') || t.includes('resiliencia')) icon = null;

  return (
    <span key={tech} className="flex items-center gap-1.5 px-3 py-1 bg-white/[0.03] border border-white/5 rounded-full text-[10px] md:text-xs font-mono text-neutral-300">
      {icon}
      {tech}
    </span>
  );
};

// Interfaz para las props
interface ProjectCardProps {
  project: Project;
  selectedId: number | null;
  setSelectedId: (id: number | null) => void;
}

// --- COMPONENTE 1: LA TARJETA DEL GRID (FIXED HOVER) ---
const ProjectCard: React.FC<ProjectCardProps> = ({ project, selectedId, setSelectedId }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current && project.video) {
      // Forzamos mute para autoplay seguro
      videoRef.current.muted = true;
      // Reproducimos y atrapamos cualquier error silenciosamente
      videoRef.current.play().catch(() => { });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current && project.video) {
      // Pausamos inmediatamente al salir para un corte limpio
      videoRef.current.pause();
    }
  };

  const imageVariants = {
    rest: { scale: 1 },
    hover: {
      scale: project.video ? 1 : 1.05,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      onClick={() => setSelectedId(project.id)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover="hover"
      initial="rest"
      style={{ zIndex: selectedId === project.id ? 50 : (isHovered ? 40 : 'auto') }}
      className="group cursor-pointer relative rounded-lg transition-all duration-500 transform-gpu bg-[#0a0a0a]"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* --- PREMIUM MINIMALIST BACKGROUND GLOW & BORDER --- */}
      {/* Soft Elegant Ambient Glow */}
      <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700 pointer-events-none z-0"></div>

      {/* Borde estático sutil */}
      <div className="absolute inset-0 rounded-lg border border-white/[0.04] group-hover:border-white/[0.1] transition-colors duration-500 pointer-events-none z-30"></div>

      {/* Sombra de hover monocromática elegante */}
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20 shadow-[0_8px_30px_rgb(255,255,255,0.06)]"></div>

      {/* --- CONTENIDO PRINCIPAL --- */}
      <div className="relative z-10 flex flex-col h-full rounded-lg overflow-hidden bg-[#0a0a0a]">

        {/* Barra de navegador decorativa */}
        <div className="h-6 w-full bg-neutral-900/80 border-b border-white/5 flex items-center px-3 gap-1.5 z-20 relative backdrop-blur-sm">
          <div className="w-2 h-2 rounded-full bg-neutral-700/50"></div>
          <div className="w-2 h-2 rounded-full bg-neutral-700/50"></div>
          <div className="w-2 h-2 rounded-full bg-neutral-700/50"></div>
        </div>

        {/* Contenedor Multimedia */}
        <motion.div
          className="aspect-[4/3] overflow-hidden relative bg-neutral-900"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {/* IMAGEN: Se oculta suavemente si hay video y estamos hover */}
          <motion.img
            variants={imageVariants}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-cover object-top absolute inset-0 z-10 transition-opacity duration-500
              ${(isHovered && project.video) ? 'opacity-0' : 'opacity-100'} 
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
              className={`w-full h-full object-cover object-top absolute inset-0 z-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            />
          )}
        </motion.div>

        {/* Contenido Texto */}
        <div className="p-6 relative z-20 bg-[#0a0a0a] flex-1">
          <div className="mb-3">
            <motion.h3
              className="text-xl font-sans font-medium text-white group-hover:text-neutral-200 transition-colors duration-500"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {project.title}
            </motion.h3>
          </div>
          <motion.p
            className="text-sm text-neutral-500 font-light line-clamp-2"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {project.shortDescription}
          </motion.p>
          <div className="mt-4 flex gap-2 flex-wrap">
            {project.tech.slice(0, 3).map((t: string) => getTechBadge(t))}
            {project.tech.length > 3 && (
              <span className="flex items-center justify-center px-2 py-1 bg-white/[0.03] border border-white/5 rounded-full text-[10px] font-mono text-neutral-500">
                +{project.tech.length - 3}
              </span>
            )}
          </div>
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
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-5xl h-[95vh] md:h-auto md:max-h-[90vh] bg-black/80 backdrop-blur-xl border border-white/10 overflow-hidden relative flex flex-col rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.3)] mx-4"
    >
      <button
        onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
        className="absolute top-4 right-4 z-50 p-2 bg-black/50 backdrop-blur-md rounded-full text-white border border-white/10 hover:bg-white hover:text-black transition-all"
      >
        <X size={24} />
      </button>

      {/* HEADER MULTIMEDIA (16:9) */}
      <div className="relative w-full aspect-video shrink-0 bg-neutral-900 overflow-hidden rounded-t-2xl">
        <img
          src={selectedProject.image}
          className="w-full h-full object-cover object-top grayscale-0"
          alt={selectedProject.title}
        />

        {selectedProject.video && (
          <video
            ref={videoRef}
            src={selectedProject.video}
            autoPlay
            muted
            playsInline
            loop
            className={"w-full h-full object-cover absolute inset-0 z-20 transition-opacity duration-1000 opacity-100"}
          />
        )}

      </div>

      {/* CONTENIDO TEXTO */}
      <div className="flex-1 overflow-y-auto p-8 md:p-12">
        <div className="flex flex-col md:flex-row gap-8 justify-between items-start mb-10 border-b border-white/5 pb-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-sans font-semibold text-white mb-2">
              {selectedProject.title}
            </h2>
            <p className="text-lg text-neutral-400 font-light">
              {selectedProject.shortDescription}
            </p>
          </div>
          <div className="w-full md:shrink-0 md:w-auto flex flex-row items-center gap-3">
            {selectedProject.link && (
              <a
                href={selectedProject.link} target="_blank" rel="noreferrer" className="flex-1 md:w-auto flex items-center justify-center gap-2 px-4 md:px-6 py-3 bg-white text-black text-xs md:text-sm font-medium rounded-xl hover:bg-neutral-200 transition-colors">
                Proyecto <ExternalLink size={14} />
              </a>
            )}
            {selectedProject.video && (
              <a
                href={selectedProject.video} target="_blank" rel="noreferrer" className="flex-1 md:w-auto flex items-center justify-center gap-2 px-4 md:px-6 py-3 bg-[#1a1a1a] text-white border border-white/10 text-xs md:text-sm font-medium rounded-xl hover:bg-neutral-800 transition-colors">
                Ver Demo
              </a>
            )}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          <div className="md:col-span-2">
            <h4 className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-4">La Historia</h4>
            <p className="text-neutral-300 font-sans text-base leading-loose whitespace-pre-wrap font-light">{selectedProject.description}</p>
          </div>
          <div className="space-y-8">
            <div>
              <h4 className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-4">Stack Tecnológico</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((tech) => getTechBadge(tech))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// --- COMPONENTE PRINCIPAL ---
export const Projects: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selectedProject = projects.find(p => p.id === selectedId);

  // EFECTO 1: Bloquear scroll al abrir modal
  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedId]);

  // EFECTO 2: Cerrar con tecla ESC (NUEVO)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedId(null);
      }
    };

    if (selectedId) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedId]);

  return (
    <section id="projects" className="pt-32 md:pt-40 pb-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-2 block">Portfolio</span>
            <h2 className="text-3xl md:text-5xl font-sans text-white font-light tracking-tight md:tracking-normal">Proyectos Destacados</h2>
          </div>
          <p className="text-neutral-500 text-sm font-light max-w-xs text-right hidden md:block">
            Mis principales retos técnicos y soluciones de negocio reales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 relative z-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} selectedId={selectedId} setSelectedId={setSelectedId} />
          ))}
        </div>

        <AnimatePresence>
          {selectedId && selectedProject && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-0 md:p-4 isolate">
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