import React from 'react';
import Header from './components/header';
import Hero from './components/hero';
import AboutHeroSection from './components/aboutme';
import VeggieTDesigner from './components/veggiedesigner';
import './index.css';

// src/App.tsx

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutHeroSection />
      <VeggieTDesigner />
    </div>
  );
};

export default App;