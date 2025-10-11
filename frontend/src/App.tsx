import React from 'react';
import Header from './components/header';
import Hero from './components/hero';
import AboutHeroSection from './components/aboutme';
import AutoHorizontalScrollPortfolio from './components/projects';
import VeggieTDesigner from './components/veggiedesigner';
import './index.css';

// src/App.tsx

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutHeroSection />
      <AutoHorizontalScrollPortfolio />
      <VeggieTDesigner />
    </div>
  );
};

export default App;