import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
        e.preventDefault();

        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(hash.replace('#', ''));
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        // Dispatch immediately in case page is loaded mid-scroll
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 px-6 flex justify-between items-center transition-all duration-500 text-white ${isScrolled ? "py-4 backdrop-blur-xl bg-[#050505]/80 border-b border-white/5 shadow-2xl shadow-black/50" : "py-6 bg-transparent border-transparent"
            }`}>
            <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="font-poppins text-sm font-bold tracking-widest hover:text-neutral-300 transition-colors uppercase">
                Inicio
            </a>
            <div className="flex gap-8">
                <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="font-poppins text-base hover:text-neutral-300 transition-colors">Quién soy</a>
                <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')} className="font-poppins text-base hover:text-neutral-300 transition-colors">Proyectos</a>
                <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="font-poppins text-base hover:text-neutral-300 transition-colors">Contacto</a>
            </div>
        </nav>
    );
};
