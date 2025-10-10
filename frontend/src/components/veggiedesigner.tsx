// VeggieTDesigner.tsx
import React, { useEffect, useState } from 'react';

const VeggieTDesigner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "PYTHON DEVELOPER",
      subtitle: "SERVER ARCHITECTURE",
      description: "Building scalable Python backend systems with Django, FastAPI, and Flask",
      tech: "Python • Django • PostgreSQL • Redis",
      image: "./src/assets/Gemini_Generated_Image_hd9dhqhd9dhqhd9d.png"
    },
    {
      id: 2,
      title: "WEB SCRAPING",
      subtitle: "DATA EXTRACTION",
      description: "Advanced web scraping solutions with BeautifulSoup, Scrapy, and Selenium",
      tech: "Scrapy • BeautifulSoup • Selenium • APIs",
      image: "./src/assets/Gemini_Generated_Image_nldsh5nldsh5nlds.png"
    },
    {
      id: 3,
      title: "WEB DESIGN",
      subtitle: "UI/UX DESIGN",
      description: "Creating responsive web designs with modern frameworks and best practices",
      tech: "React • Tailwind • Figma • Responsive Design",
      image: "./src/assets/Gemini_Generated_Image_72lhqo72lhqo72lh.png"
    },
    {
      id: 4,
      title: "WORDPRESS DEV",
      subtitle: "DATA MODELING",
      description: "Designing efficient database schemas and optimizing queries for performance",
      tech: "SQL • MongoDB • Database Design • Optimization",
      image: "./src/assets/Gemini_Generated_Image_yeu7cuyeu7cuyeu7.png"
    },
    {
      id: 5,
      title: "API DEVELOPMENT",
      subtitle: "REST & GRAPHQL",
      description: "Building robust APIs with proper documentation and authentication systems",
      tech: "REST APIs • GraphQL • Authentication • Documentation",
      image: "./src/assets/Gemini_Generated_Image_yjf1t5yjf1t5yjf1.png"
    }
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only prevent default if we're actually changing slides
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault();
        if (e.key === 'ArrowRight') {
          setCurrentSlide(prev => prev === slides.length - 1 ? 0 : prev + 1);
        } else if (e.key === 'ArrowLeft') {
          setCurrentSlide(prev => prev === 0 ? slides.length - 1 : prev - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide(prev => prev === slides.length - 1 ? 0 : prev + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => prev === 0 ? slides.length - 1 : prev - 1);
  };

  return (
    <div className="w-full min-h-screen bg-black">
      {/* Hero Section with Slides */}
      <section className="h-screen relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 transition-all duration-700 ease-out"
          style={{
            backgroundImage: `url(${slides[currentSlide].image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(60%) brightness(0.2)',
            transform: `scale(1.02)`,
          }}
        />
        
        {/* Content Overlay */}
        <div className="relative z-10 h-full flex items-center justify-center px-8">
          <div className="text-center max-w-4xl">
            {/* Main Title */}
            <h1 className="text-5xl md:text-8xl font-black text-white mb-4 tracking-tight">
              {slides[currentSlide].title}
            </h1>
            
            {/* Subtitle */}
            <h2 className="text-2xl md:text-4xl font-bold text-gray-200 mb-8">
              {slides[currentSlide].subtitle}
            </h2>
            
            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-200 mb-6 max-w-2xl mx-auto leading-relaxed">
              {slides[currentSlide].description}
            </p>
            
            {/* Tech Stack */}
            <p className="text-lg md:text-xl text-gray-300 mb-12 font-mono">
              {slides[currentSlide].tech}
            </p>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-3 mb-8">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-white scale-125' 
                      : 'bg-gray-600 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4">
              <button
                onClick={prevSlide}
                className="px-12 py-3 bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm border border-white border-opacity-30"
              >
                ← PREV
              </button>
              <button
                onClick={nextSlide}
                className="px-12 py-3 bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm border border-white border-opacity-30"
              >
                NEXT →
              </button>
            </div>
          </div>
        </div>

        {/* Slide Counter */}
        <div className="absolute bottom-8 right-8 z-20">
          <div className="text-white text-xl font-mono bg-black bg-opacity-50 px-4 py-2 rounded-lg">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>

        {/* Instructions */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-center">
          <p className="text-white text-sm bg-black bg-opacity-50 px-4 py-2 rounded-lg">
            Use ← → arrow keys or click buttons to navigate
          </p>
        </div>
      </section>
    </div>
  );
};

export default VeggieTDesigner;