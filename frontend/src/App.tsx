import React, { useState, useEffect } from 'react';
import Header from './components/header';
import SpaceBackground from './components/SpaceBackground';
import CreativeDesignerHero from './components/hero';
import AboutHeroSection from './components/aboutme';
import AutoHorizontalScrollPortfolio from './components/projects';
import VerticalConnectList from './components/skills';
import VeggieTDesigner from './components/veggiedesigner';
import Experience from './components/Experience';
import Education from './components/Education';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import './App.css';
import './index.css';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen text-white relative">
      <SpaceBackground />
      <Header />

      <main>
        <CreativeDesignerHero />
        <AboutHeroSection />
        <VerticalConnectList />
        <AutoHorizontalScrollPortfolio />
        <Experience />
        <Education />
        <VeggieTDesigner />
        <Testimonials />
        <Contact />
      </main>

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-[90] w-11 h-11 rounded-full bg-violet-600/80 backdrop-blur-sm text-white flex items-center justify-center shadow-lg shadow-violet-500/20 hover:bg-violet-500 hover:scale-110 active:scale-95 transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
};

export default App;