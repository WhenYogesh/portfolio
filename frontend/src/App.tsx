import React from 'react';
import Header from './components/header';
import CreativeDesignerHero from './components/hero';
import AboutHeroSection from './components/aboutme';
import AutoHorizontalScrollPortfolio from './components/projects';
import VeggieTDesigner from './components/veggiedesigner';
import './index.css';

// src/App.tsx

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <CreativeDesignerHero />
      <AboutHeroSection />
      <AutoHorizontalScrollPortfolio />
      <VeggieTDesigner />
    </div>
  );
};

export default App;