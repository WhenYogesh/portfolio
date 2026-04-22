import React, { useState, useEffect, useRef } from 'react';
import './veggiedesigner.css';

import pythonDeveloperImage from '/images/Gemini_Generated_Image_hd9dhqhd9dhqhd9d.png';
import webScrapingImage from '/images/Gemini_Generated_Image_nldsh5nldsh5nlds.png';
import webDesignImage from '/images/Gemini_Generated_Image_yjf1t5yjf1t5yjf1.png';
import wordpressDevImage from '/images/Gemini_Generated_Image_yeu7cuyeu7cuyeu7.png';
import apiDevelopmentImage from '/images/Gemini_Generated_Image_yjf1t5yjf1t5yjf1.png';

const VeggieTDesigner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const slides = [
    {
      id: 1,
      title: 'BACKEND SYSTEMS',
      subtitle: 'PYTHON • DJANGO • FASTAPI',
      description: 'Building scalable backend systems with secure API endpoints, Google Authentication, user management, and efficient data processing.',
      tech: 'FastAPI • Django • Flask • REST APIs',
      image: pythonDeveloperImage,
    },
    {
      id: 2,
      title: 'WEB SCRAPING',
      subtitle: 'DATA EXTRACTION & AUTOMATION',
      description: 'Advanced web scraping solutions using Selectolax, BeautifulSoup, and Selenium for automated data collection and processing.',
      tech: 'Selectolax • BeautifulSoup • Scrapy • Selenium',
      image: webScrapingImage,
    },
    {
      id: 3,
      title: 'WORDPRESS & WIX',
      subtitle: 'CMS DEVELOPMENT',
      description: 'Custom WordPress themes, WooCommerce stores, WIX sites with backend integrations, SEO optimization, and performance tuning.',
      tech: 'WordPress • WIX • PHP • WooCommerce • SEO',
      image: wordpressDevImage,
    },
    {
      id: 4,
      title: 'REACT FRONTENDS',
      subtitle: 'MODERN UI DEVELOPMENT',
      description: 'Creating responsive, modern web interfaces using React.js with state management, component architecture, and smooth animations.',
      tech: 'React • TypeScript • Tailwind CSS • Angular',
      image: webDesignImage,
    },
    {
      id: 5,
      title: 'API DEVELOPMENT',
      subtitle: 'REST & AUTHENTICATION',
      description: 'Building robust REST APIs with proper authentication (Google Auth), MongoDB/Redis integration, and comprehensive documentation.',
      tech: 'REST APIs • MongoDB • Redis • Docker • Deployment',
      image: apiDevelopmentImage,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSlideChange = (newSlide: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(newSlide);
    setTimeout(() => setIsAnimating(false), 800);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleSlideChange(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handleSlideChange(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, slides.length]);

  useEffect(() => {
    if (!isVisible) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [isVisible, slides.length]);

  const nextSlide = () => handleSlideChange(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  const prevSlide = () => handleSlideChange(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);

  return (
    <div id="services" ref={sectionRef} className="veggie-section w-full min-h-screen bg-transparent">
      <section className="h-screen relative overflow-hidden">
        {/* Background images */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="absolute inset-0 slide-bg"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'grayscale(40%) brightness(0.5)',
              opacity: index === currentSlide ? 1 : 0,
              transform: index === currentSlide ? 'scale(1.02)' : 'scale(1.08)',
              willChange: 'opacity, transform',
              transition: 'opacity 0.8s cubic-bezier(0.4,0,0.2,1), transform 1.2s cubic-bezier(0.4,0,0.2,1)',
            }}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/50 z-[1]" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-6 sm:px-8">
          <div className="text-center max-w-4xl">
            <p
              className="text-xs sm:text-sm tracking-[0.3em] uppercase text-violet-400 font-semibold mb-4"
              style={{
                opacity: isAnimating ? 0 : 1,
                transform: isAnimating ? 'translateY(-10px)' : 'translateY(0)',
                transition: 'all 0.5s ease',
              }}
            >
              {slides[currentSlide].subtitle}
            </p>

            <h2
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight"
              style={{
                opacity: isAnimating ? 0 : 1,
                transform: isAnimating ? 'translateY(30px)' : 'translateY(0)',
                transition: 'all 0.6s cubic-bezier(0.23,1,0.32,1)',
              }}
            >
              {slides[currentSlide].title}
            </h2>

            <p
              className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6"
              style={{
                opacity: isAnimating ? 0 : 1,
                transform: isAnimating ? 'translateY(20px)' : 'translateY(0)',
                transition: 'all 0.6s cubic-bezier(0.23,1,0.32,1) 0.1s',
              }}
            >
              {slides[currentSlide].description}
            </p>

            <p
              className="text-sm sm:text-base text-violet-300/70 font-mono mb-10"
              style={{ opacity: isAnimating ? 0 : 1, transition: 'opacity 0.5s ease 0.15s' }}
            >
              {slides[currentSlide].tech}
            </p>

            {/* Dots */}
            <div className="flex justify-center gap-2.5 mb-8">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSlideChange(index)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    index === currentSlide ? 'w-8 bg-violet-400' : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Nav */}
            <div className="flex justify-center gap-4">
              <button
                onClick={prevSlide}
                className="btn-shimmer px-8 sm:px-10 py-3 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:scale-105 active:scale-95"
              >
                ← PREV
              </button>
              <button
                onClick={nextSlide}
                className="btn-shimmer px-8 sm:px-10 py-3 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:scale-105 active:scale-95"
              >
                NEXT →
              </button>
            </div>
          </div>
        </div>

        {/* Counter */}
        <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-20">
          <span className="text-white/50 text-sm font-mono bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/5">
            {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </span>
        </div>
      </section>
    </div>
  );
};

export default VeggieTDesigner;