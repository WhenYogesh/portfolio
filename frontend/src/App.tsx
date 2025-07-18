// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/header';
import Hero from './components/Hero';
import ProjectsSection from './components/projectsection';
import Experience from './components/experience';
import About from './pages/about';
import Contact from './pages/contact';
import Skills from './components/skills';
import Banner from './components/scroll';


const HomeContent: React.FC = () => (
  <>
    <Hero />
    <Banner />
    <Skills />
    <Experience />
    <ProjectsSection />
  </>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="font-sans">
        <Header />
        <MainRoutes />
      </div>
    </Router>
  );
};

// Separate routing logic to preserve clarity
const MainRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route path="/" element={<HomeContent />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
