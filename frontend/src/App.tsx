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
import ProjectDetail from './pages/mldetails';
import TrafficProjectDetail from './pages/TrafficProjectDetail';
import ExcelDashboardDetail from './pages/ExcelDashboardDetail';
import ScrollToTop from './components/ScrollToTop';


const HomeContent: React.FC = () => (
  <>
    <ScrollToTop />
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
        <ScrollToTop />
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
      <Route path="/mldetails" element={<ProjectDetail />} />
      <Route path="/trafficproject" element={<TrafficProjectDetail />} />
      <Route path="/excel-dashboard" element={<ExcelDashboardDetail />} />
      {/* Add more routes as needed */}
    </Routes>
  );
};

export default App;
