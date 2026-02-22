import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

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
      {/* Navigation */}
      <Navbar />

      <Hero />
      <About />
      <Projects />
      <Contact />

      <Footer />
    </main>
  );
}

export default App;