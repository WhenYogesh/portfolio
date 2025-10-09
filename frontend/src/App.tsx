import React from 'react';
import Header from './components/header';
import Hero from './components/hero';
import './index.css';

// src/App.tsx

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
    </div>
  );
};

export default App;