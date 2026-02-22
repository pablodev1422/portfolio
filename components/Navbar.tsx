import React from 'react';

export const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-40 px-6 py-6 flex justify-between items-center mix-blend-difference text-white pointer-events-none">
            <a href="#hero" className="font-poppins text-xs font-bold tracking-widest pointer-events-auto hover:text-neutral-300 transition-colors">
                PG.DEV
            </a>
            <div className="flex gap-6 pointer-events-auto">
                <a href="#about" className="font-poppins text-xs hover:text-neutral-300 transition-colors">Quién soy</a>
                <a href="#projects" className="font-poppins text-xs hover:text-neutral-300 transition-colors">Proyectos</a>
                <a href="#contact" className="font-poppins text-xs hover:text-neutral-300 transition-colors">Contacto</a>
            </div>
        </nav>
    );
};
