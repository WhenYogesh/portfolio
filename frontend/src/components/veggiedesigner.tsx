// VeggieTDesigner.tsx
import React, { useEffect, useState } from 'react';

// Import images - adjust these paths according to your project structure
import pythonDeveloperImage from '/images/Gemini_Generated_Image_hd9dhqhd9dhqhd9d.png';
import webScrapingImage from '/images/Gemini_Generated_Image_nldsh5nldsh5nlds.png';
import webDesignImage from '/images/Gemini_Generated_Image_yjf1t5yjf1t5yjf1.png';
import wordpressDevImage from '/images/Gemini_Generated_Image_yeu7cuyeu7cuyeu7.png';
import apiDevelopmentImage from '/images/Gemini_Generated_Image_yjf1t5yjf1t5yjf1.png';

const VeggieTDesigner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      id: 1,
      title: "PYTHON DEVELOPER",
      subtitle: "SERVER ARCHITECTURE",
      description: "Building scalable Python backend systems with Django, FastAPI, and Flask",
      tech: "Python • Django • PostgreSQL • Redis",
      image: pythonDeveloperImage
    },
    {
      id: 2,
      title: "WEB SCRAPING",
      subtitle: "DATA EXTRACTION",
      description: "Advanced web scraping solutions with BeautifulSoup, Scrapy, and Selenium",
      tech: "Scrapy • BeautifulSoup • Selenium • APIs",
      image: webScrapingImage
    },
    {
      id: 3,
      title: "WEB DESIGN",
      subtitle: "UI/UX DESIGN",
      description: "Creating responsive web designs with modern frameworks and best practices",
      tech: "React • Tailwind • Figma • Responsive Design",
      image: webDesignImage
    },
    {
      id: 4,
      title: "WORDPRESS DEV",
      subtitle: "DATA MODELING",
      description: "Designing efficient database schemas and optimizing queries for performance",
      tech: "SQL • MongoDB • Database Design • Optimization",
      image: wordpressDevImage
    },
    {
      id: 5,
      title: "API DEVELOPMENT",
      subtitle: "REST & GRAPHQL",
      description: "Building robust APIs with proper documentation and authentication systems",
      tech: "REST APIs • GraphQL • Authentication • Documentation",
      image: apiDevelopmentImage
    }
  ];

  const handleSlideChange = (newSlide: number) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentSlide(newSlide);
    
    // Reset animation state after transition
    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault();
        if (e.key === 'ArrowRight') {
          handleSlideChange(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
        } else if (e.key === 'ArrowLeft') {
          handleSlideChange(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, slides.length]);

  const nextSlide = () => {
    handleSlideChange(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    handleSlideChange(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section with Slides */}
      <section className="h-screen relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 transition-all duration-1000 ease-out"
          style={{
            backgroundImage: `url(${slides[currentSlide].image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(60%) brightness(0.2)',
            transform: `scale(1.02)`,
          }}
        />
        
        {/* Animated Glow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 animate-pulse-slow" />
        
        {/* Content Overlay */}
        <div className="relative z-10 h-full flex items-center justify-center px-8">
          <div className="text-center max-w-4xl">
            {/* Main Title with Scroll Animation */}
            <div className="overflow-hidden mb-4">
              <h1 
                className="text-5xl md:text-8xl font-black text-white mb-4 tracking-tight transform transition-all duration-700 ease-out hover:scale-105"
                style={{
                  textShadow: `
                    0 0 10px rgba(0, 0, 0, 0.8),
                    0 0 20px rgba(255, 255, 255, 0.6),
                    0 0 30px rgba(255, 255, 255, 0.4),
                    0 0 40px rgba(255, 255, 255, 0.2)
                  `,
                  filter: 'brightness(5) contrast(1.1)',
                  transform: isAnimating ? 'translateY(100px) opacity-0' : 'translateY(0) opacity-100',
                  transition: 'transform 0.8s cubic-bezier(0.23, 1, 0.32, 1), opacity 9.8s ease-out'
                }}
              >
                {slides[currentSlide].title}
              </h1>
            </div>
            
            {/* Subtitle with Slide Animation */}
            <div className="overflow-hidden mb-8">
              <h2 
                className="text-2xl md:text-4xl font-bold text-white transform transition-all duration-700 ease-out delay-200 hover:translate-x-2 hover:scale-105"
                style={{
                  textShadow: `
                    0 0 8px rgba(255, 255, 255, 0.75),
                    0 0 16px rgba(255, 255, 255, 0.5),
                    0 0 24px rgba(255, 255, 255, 0.3)
                  `,
                  filter: 'brightness(1)',
                  transform: isAnimating ? 'translateX(-100px) opacity-0' : 'translateX(0) opacity-100',
                  transition: 'transform 0.8s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.8s ease-out'
                }}
              >
                {slides[currentSlide].subtitle}
              </h2>
            </div>
            
            {/* Description with Fade Up Animation */}
            <div className="overflow-hidden mb-6">
              <p 
                className="text-xl md:text-2xl text-white max-w-2xl mx-auto leading-relaxed transform transition-all duration-700 ease-out delay-300 hover:translate-y-1 hover:scale-102"
                style={{
                  textShadow: `
                    0 0 6px rgba(255, 255, 255, 0.6),
                    0 0 12px rgba(255, 255, 255, 0.4)
                  `,
                  filter: 'brightness(1.05)',
                  transform: isAnimating ? 'translateY(50px) opacity-0' : 'translateY(0) opacity-100',
                  transition: 'transform 0.8s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.8s ease-out'
                }}
              >
                {slides[currentSlide].description}
              </p>
            </div>
            
            {/* Tech Stack with Typewriter Effect */}
            <div className="overflow-hidden mb-12">
              <p 
                className="text-lg md:text-xl text-white font-mono transform transition-all duration-700 ease-out delay-400 hover:translate-x-4 hover:skew-x-2"
                style={{
                  textShadow: `
                    0 0 5px rgba(255, 255, 255, 0.8),
                    0 0 10px rgba(255, 255, 255, 0.6),
                    0 0 15px rgba(255, 255, 255, 0.4)
                  `,
                  filter: 'brightness(1.1)',
                  transform: isAnimating ? 'translateX(100px) opacity-0' : 'translateX(0) opacity-100',
                  transition: 'transform 0.8s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.8s ease-out'
                }}
              >
                {slides[currentSlide].tech}
              </p>
            </div>

            {/* Navigation Dots with Glow Effect */}
            <div className="flex justify-center gap-3 mb-8">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSlideChange(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-150 ${
                    index === currentSlide 
                      ? 'bg-white scale-125 shadow-glow' 
                      : 'bg-gray-400 hover:bg-white hover:shadow-glow'
                  }`}
                  style={{
                    boxShadow: index === currentSlide ? 
                      '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6)' : 
                      'none'
                  }}
                />
              ))}
            </div>

            {/* Navigation Buttons with Enhanced Glow */}
            <div className="flex justify-center gap-4">
              <button
                onClick={prevSlide}
                className="px-12 py-3 bg-white bg-opacity-10 hover:bg-opacity-20 text-white font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm border border-white border-opacity-30 transform hover:scale-105 hover:-translate-x-2 group relative overflow-hidden"
                style={{
                  textShadow: '0 0 8px rgba(255, 255, 255, 0.6)',
                  boxShadow: '0 0 15px rgba(255, 255, 255, 0.3)'
                }}
              >
                <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">
                  ← PREV
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </button>
              
              <button
                onClick={nextSlide}
                className="px-12 py-3 bg-white bg-opacity-10 hover:bg-opacity-20 text-white font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm border border-white border-opacity-30 transform hover:scale-105 hover:translate-x-2 group relative overflow-hidden"
                style={{
                  textShadow: '0 0 8px rgba(255, 255, 255, 0.6)',
                  boxShadow: '0 0 15px rgba(255, 255, 255, 0.3)'
                }}
              >
                <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">
                  NEXT →
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </button>
            </div>
          </div>
        </div>

        {/* Slide Counter with Glow */}
        <div className="absolute bottom-8 right-8 z-20">
          <div 
            className="text-white text-xl font-mono bg-black bg-opacity-50 px-4 py-2 rounded-lg border border-white border-opacity-20 transform hover:scale-110 transition-all duration-300"
            style={{
              textShadow: '0 0 8px rgba(255, 255, 255, 0.6)',
              boxShadow: '0 0 15px rgba(255, 255, 255, 0.2)'
            }}
          >
            {currentSlide + 1} / {slides.length}
          </div>
        </div>

        {/* Instructions with Subtle Glow */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-center">
          <p 
            className="text-white text-sm bg-black bg-opacity-50 px-4 py-2 rounded-lg border border-white border-opacity-20 transform hover:scale-105 transition-all duration-300"
            style={{
              textShadow: '0 0 5px rgba(255, 255, 255, 0.5)',
              boxShadow: '0 0 10px rgba(255, 255, 255, 0.1)'
            }}
          >
            Use ← → arrow keys or click buttons to navigate
          </p>
        </div>
      </section>
    </div>
  );
};

export default VeggieTDesigner;