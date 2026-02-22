import React, { useEffect } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {

  useEffect(() => {
    console.log(
      "%c PABLO GONZÁLEZ %c FULL STACK DEVELOPER ",
      "background: #fff; color: #000; padding: 5px; font-weight: bold;",
      "background: #000; color: #fff; padding: 5px;"
    );
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <main className="bg-[#050505] min-h-screen w-full relative">
      {/* Navigation (Sticky minimal) */}
      <nav className="fixed top-0 left-0 w-full z-40 px-6 py-6 flex justify-between items-center mix-blend-difference text-white pointer-events-none">
        <a href="#hero" className="font-poppinstext-xs font-bold tracking-widest pointer-events-auto hover:text-neutral-300 transition-colors">NOSE</a>
        <div className="flex gap-6 pointer-events-auto">
          <a href="#about" className="font-poppins text-xs hover:text-neutral-300 transition-colors">Quién soy</a>
          <a href="#projects" className="font-poppins text-xs hover:text-neutral-300 transition-colors">Proyectos</a>
          <a href="#contact" className="ffont-poppins text-xs hover:text-neutral-300 transition-colors">Contacto</a>
        </div>
      </nav>

      <Hero />
      <About />
      <Projects />
      <Contact />

      <footer className="py-8 bg-[#050505] border-t border-white/5 text-center">
        <p className="font-poppins text-[10px] text-neutral-600 uppercase tracking-widest">
          Pablo González © {currentYear}
        </p>
      </footer>
    </main>
  );
}

export default App;