import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 px-6 bg-[#050505] border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="font-poppins text-xs text-neutral-600 uppercase tracking-widest text-center md:text-left">
                    Pablo González Pérez © {currentYear}
                </p>
                <div className="flex items-center gap-6 font-sans text-xs font-light text-neutral-500">
                    <Link to="/aviso-legal" className="hover:text-white transition-colors">Aviso Legal</Link>
                    <Link to="/politica-privacidad" className="hover:text-white transition-colors">Política de Privacidad</Link>
                </div>
            </div>
        </footer>
    );
};
