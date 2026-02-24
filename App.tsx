import React, { useEffect } from 'react';
import ReactLenis from 'lenis/react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FilmGrain } from './components/FilmGrain';
import { AmbientCursor } from './components/AmbientCursor';
import { AvisoLegal } from './components/AvisoLegal';
import { PoliticaPrivacidad } from './components/PoliticaPrivacidad';

const Home = () => (
  <>
    <Hero />
    <About />
    <Projects />
    <Contact />
  </>
);

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
    <ReactLenis root options={{ lerp: 0.08, smoothWheel: true }}>
      <main className="bg-[#050505] min-h-screen w-full relative">
        <AmbientCursor />
        <FilmGrain />
        {/* Navigation */}
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aviso-legal" element={<AvisoLegal />} />
          <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
        </Routes>

        <Footer />
      </main>
    </ReactLenis>
  );
}

export default App;