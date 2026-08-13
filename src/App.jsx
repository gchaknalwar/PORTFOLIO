import React, { useState, useEffect } from 'react';
import IntroAnimation from './components/IntroAnimation';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Process from './components/Process';
import About from './components/About';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [introFinished, setIntroFinished] = useState(false);

  useEffect(() => {
    // 1. Disable browser's automatic scroll restoration on reload
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // 2. Force scroll to top (0, 0) immediately
    window.scrollTo(0, 0);

    // 3. Clear URL hash (e.g. removes #contact or #projects so page reloads clean)
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, []);

  // Handle scroll to top once Intro Animation finishes
  const handleIntroComplete = () => {
    window.scrollTo(0, 0);
    setIntroFinished(true);
  };

  return (
    <div className="min-h-screen bg-bgDark text-slate-100 selection:bg-blue-600 selection:text-white">
      {/* Show intro on initial load */}
      {!introFinished && (
        <IntroAnimation onComplete={handleIntroComplete} />
      )}

      {/* Render Website Content */}
      <div className={introFinished ? 'opacity-100 transition-opacity duration-700' : 'opacity-0'}>
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <Skills />
          <Process />
          <About />
          <Experience />
          <Certificates />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}