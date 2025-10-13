import React, { useState, useRef, useEffect } from 'react';

// Import all images at the top
import letterW from '/images/bw.jpg';
import letterE from '/images/color.jpg';
import letterB from '/images/bw.jpg';
import letterD from '/images/color.jpg';
import letterV from '/images/bw.jpg';
import letterL from '/images/color.jpg';
import letterO from '/images/bw.jpg';
import letterP from '/images/color.jpg';
import letterE2 from '/images/bw.jpg';
import letterR2 from '/images/color.jpg';
import profileImage from '/images/bw.jpg';

const CreativeDesignerHero: React.FC = () => {
  const [hoveredLetter, setHoveredLetter] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const title = "WEB DEVELOPER";
  const letters = title.split('');

  // Left side services (3 items)
  const leftServices = [
    { title: "/PYTHON DEVELOPER", key: 1 },
    { title: "/WEB DESIGN (UX/UI)", key: 2 },
    { title: "/WORDPRESS DEVELOPMENT", key: 3 },
  ];   

  // Right side services (3 items)
  const rightServices = [
    { title: "/UI/UX DESIGNER", key: 4 },
    { title: "/FRONTEND DEVELOPMENT", key: 5 },
    { title: "/WEB SCRAPING", key: 6 },
  ];

  // All services for mobile view
  const allServices = [...leftServices, ...rightServices];

  // Different images for different letters using imported images
  const letterImages = [
    letterW, // W
    letterE, // E
    letterB, // B
    letterD, // D
    letterE, // E
    letterV, // V
    letterE, // E
    letterL, // L
    letterO, // O
    letterP, // P
    letterE2, // E
    letterR2, // R (using E as placeholder)
  ];

  // Function to adjust font size for full width
  const adjustFontSize = () => {
    if (titleRef.current) {
      const container = titleRef.current.parentElement;
      if (container) {
        const containerWidth = container.offsetWidth;
        const currentFontSize = parseFloat(getComputedStyle(titleRef.current).fontSize);
        const textWidth = titleRef.current.scrollWidth;
        
        if (textWidth > containerWidth) {
          const newFontSize = currentFontSize * (containerWidth / textWidth) * 0.95;
          titleRef.current.style.fontSize = `${newFontSize}px`;
        }
      }
    }
  };

  useEffect(() => {
    adjustFontSize();
    window.addEventListener('resize', adjustFontSize);

    // Hide default cursor when inside this section
    const handleMouseEnter = () => {
      document.body.style.cursor = 'none';
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      document.body.style.cursor = 'auto';
      setIsHovering(false);
      setHoveredLetter(null);
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mouseenter', handleMouseEnter);
      section.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      window.removeEventListener('resize', adjustFontSize);
      if (section) {
        section.removeEventListener('mouseenter', handleMouseEnter);
        section.removeEventListener('mouseleave', handleMouseLeave);
      }
      document.body.style.cursor = 'auto';
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleLetterHover = (index: number) => {
    setHoveredLetter(index);
  };

  const handleLetterLeave = () => {
    setHoveredLetter(null);
  };

  // Enhanced Galaxy Spreading Shining Cursor Component
  const GalaxyCursor: React.FC = () => {
    if (!isHovering) return null;

    return (
      <>
        {/* Main cursor core with intense glow */}
        <div
          className="absolute pointer-events-none z-50 transition-all duration-75 ease-out"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className={`relative transition-all duration-300 ${
            hoveredLetter !== null ? "scale-200" : "scale-100"
          }`}>
            {/* Outer spreading glow */}
            <div className={`absolute inset-0 rounded-full blur-xl transition-all duration-700 ${
              hoveredLetter !== null 
                ? "bg-purple-500/60 w-16 h-16 animate-pulse" 
                : "bg-blue-400/40 w-8 h-8"
            }`}></div>
            
            {/* Middle nebula layer */}
            <div className={`absolute inset-0 rounded-full blur-lg transition-all duration-500 ${
              hoveredLetter !== null 
                ? "bg-pink-400/70 w-12 h-12 animate-ping" 
                : "bg-cyan-400/50 w-6 h-6"
            }`} style={{ animationDuration: '2s' }}></div>
            
            {/* Inner star core */}
            <div className={`relative rounded-full transition-all duration-300 shadow-2xl ${
              hoveredLetter !== null 
                ? "bg-white w-4 h-4 shadow-white/80" 
                : "bg-white w-2 h-2 shadow-white/60"
            }`}></div>
          </div>
        </div>

        {/* Orbiting particles - enhanced for galaxy effect */}
        {[0, 1, 2, 3, 4, 5].map((particle) => (
          <div
            key={particle}
            className="absolute pointer-events-none z-45 transition-all duration-1000 ease-out"
            style={{
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y}px`,
              transform: `translate(-50%, -50%) rotate(${particle * 60}deg) translateX(${hoveredLetter !== null ? 30 : 15}px) rotate(-${particle * 60}deg)`,
              transitionDelay: `${particle * 100}ms`,
            }}
          >
            <div
              className={`rounded-full blur-sm transition-all duration-500 ${
                hoveredLetter !== null
                  ? `bg-gradient-to-r from-purple-400 to-pink-400 w-2 h-2 opacity-80 animate-bounce`
                  : `bg-blue-300/40 w-1 h-1 opacity-60`
              }`}
              style={{ animationDelay: `${particle * 200}ms` }}
            ></div>
          </div>
        ))}

        {/* Spreading shine effect on hover */}
        {hoveredLetter !== null && (
          <>
            {/* Large spreading circles */}
            {[0, 1, 2].map((circle) => (
              <div
                key={`circle-${circle}`}
                className="absolute pointer-events-none z-40 rounded-full border-2 border-purple-300/30 animate-spread"
                style={{
                  left: `${mousePosition.x}px`,
                  top: `${mousePosition.y}px`,
                  transform: 'translate(-50%, -50%)',
                  width: `${20 + circle * 40}px`,
                  height: `${20 + circle * 40}px`,
                  animationDelay: `${circle * 200}ms`,
                }}
              />
            ))}
            
            {/* Random sparkles */}
            {[...Array(8)].map((_, sparkle) => (
              <div
                key={`sparkle-${sparkle}`}
                className="absolute pointer-events-none z-45 rounded-full bg-white animate-twinkle"
                style={{
                  left: `${mousePosition.x}px`,
                  top: `${mousePosition.y}px`,
                  transform: `translate(-50%, -50%) rotate(${sparkle * 45}deg) translateX(${40 + Math.random() * 30}px)`,
                  width: `${Math.random() * 3 + 1}px`,
                  height: `${Math.random() * 3 + 1}px`,
                  animationDelay: `${sparkle * 100}ms`,
                }}
              />
            ))}
          </>
        )}

        {/* Custom cursor with image (only shows on letter hover) */}
        <div
          className={`absolute pointer-events-none z-50 transition-all duration-300 ${
            hoveredLetter !== null ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
          style={{
            left: `${mousePosition.x + 80}px`,
            top: `${mousePosition.y + 80}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {hoveredLetter !== null && (
            <div className="w-32 h-40 bg-gray-800 overflow-hidden rounded-lg shadow-2xl border-2 border-white/50 backdrop-blur-sm">
              <img 
                src={letterImages[hoveredLetter]} 
                alt={`Letter ${letters[hoveredLetter]}`}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </>
    );
  };

  const renderServiceItem = (service: { title: string, key: number }) => (
    <p 
      key={service.key}
      className="text-[17px] xl:text-[19px] 2xl:text-[22px] font-black tracking-tight leading-tight transform hover:translate-x-3 transition-transform duration-300 cursor-pointer text-white"
    >
      {service.title}
    </p>
  );

  const renderRightServiceItem = (service: { title: string, key: number }) => (
    <p 
      key={service.key}
      className="text-[17px] xl:text-[19px] 2xl:text-[22px] font-black tracking-tight leading-tight transform hover:-translate-x-3 transition-transform duration-300 cursor-pointer text-white"
    >
      {service.title}
    </p>
  );

  return (
    <section 
      ref={sectionRef}
      className="w-full min-h-screen bg-black text-white overflow-hidden relative"
      onMouseMove={handleMouseMove}
    >
      {/* Custom CSS for animations */}
      <style>
        {`
          @keyframes spread {
            0% {
              transform: translate(-50%, -50%) scale(0);
              opacity: 1;
            }
            100% {
              transform: translate(-50%, -50%) scale(1);
              opacity: 0;
            }
          }
          @keyframes twinkle {
            0%, 100% {
              opacity: 0;
              transform: translate(-50%, -50%) scale(0);
            }
            50% {
              opacity: 1;
              transform: translate(-50%, -50%) scale(1);
            }
          }
          .animate-spread {
            animation: spread 1.5s ease-out forwards;
          }
          .animate-twinkle {
            animation: twinkle 1s ease-in-out infinite;
          }
        `}
      </style>

      {/* YouTube Video Background */}
      <div 
        ref={videoRef}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <div className="relative w-full h-full">
          {/* Mobile Video (Portrait Optimized) */}
          <div className="lg:hidden absolute inset-0">
            <iframe
              src="https://www.youtube.com/embed/Gsc0HtG6rTc?autoplay=1&mute=1&loop=1&playlist=Gsc0HtG6rTc&controls=0&showinfo=0&rel=0&modestbranding=1"
              className="absolute top-1/2 left-1/2 w-[180%] h-[120%]"
              style={{ 
                transform: 'translate(-50%, -50%) scale(1.4)',
                pointerEvents: 'none',
                minWidth: '100vw',
                minHeight: '100vh',
                objectFit: 'cover'
              }}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Background Video Mobile"
            />
          </div>
          
          {/* Desktop Video */}
          <div className="hidden lg:block absolute inset-0">
            <iframe
              src="https://www.youtube.com/embed/Gsc0HtG6rTc?autoplay=1&mute=1&loop=1&playlist=Gsc0HtG6rTc&controls=0&showinfo=0&rel=0&modestbranding=1"
              className="absolute top-0 left-0 w-full h-full scale-150"
              style={{ 
                transform: 'scale(1.2)',
                pointerEvents: 'none'
              }}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Background Video Desktop"
            />
          </div>
          
          {/* Overlay to improve text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
      </div>

      <GalaxyCursor />
      
      {/* Content Container */}
      <div className="relative z-10 w-full min-h-screen px-[2vw] sm:px-[3vw] lg:px-[4vw] py-[2vw] lg:py-[4vw]">
        
        {/* Mobile/Tablet Version */}
        <div className="lg:hidden flex flex-col items-center justify-start min-h-screen pt-20">
          <div className="mb-6 text-center mt-2 w-full">
            <h1 
              ref={titleRef}
              className="text-[42px] leading-[0.85] font-black tracking-tighter mb-3 text-white w-full text-center"
              style={{ fontSize: 'clamp(32px, 12vw, 72px)' }}
            >
              {letters.map((letter, index) => (
                <span key={index} className="inline-block">
                  {letter}
                </span>
              ))}
            </h1>
            <p className="text-[11px] tracking-[0.3em] font-light mt-4 text-white">
              LIVES IN BENGALURU
            </p>
          </div>

          {/* Image and YOGESH V side by side */}
          <div className="mb-8 flex items-center justify-center gap-4 px-4">
            {/* Image */}
            <div className="w-[220px] aspect-[3/4] bg-gray-800 overflow-hidden rounded-lg">
              <img 
                src={profileImage} 
                alt="Creative Designer"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* YOGESH V next to image */}
            <h2 className="text-[18px] font-black tracking-tight leading-none text-white">
              YOGESH V
            </h2>
          </div>

          {/* Services under image on mobile */}
          <div className="text-center space-y-3 px-4 mb-6">
            {allServices.map(service => (
              <p 
                key={service.key}
                className="text-[16px] font-800 font-black tracking-tight transform hover:scale-105 transition-transform duration-200 text-white"
              >
                {service.title}
              </p>
            ))}
          </div>

          {/* Know more section */}
          <div className="mb-6 text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <p className="text-[16px] tracking-wide font-bold text-white">Know More</p>
              <svg className="w-5 h-5 text-white" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4"/>
              </svg>
            </div>
          </div>

          {/* Contact section */}
          <div className="text-center space-y-4 pb-8">
            <div className="flex items-center justify-center gap-3">
              <p className="text-[16px] tracking-wide font-medium text-white">AVAILABLE FOR COLLABORATION</p>
              <svg className="w-4 h-4 text-white" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4"/>
              </svg>
            </div>
            <a href="mailto:yogesh.unique9844@gmail.com" className="text-[15px] underline font-bold block break-all text-white hover:text-gray-300 transition-colors">
              yogesh.unique9844@gmail.com
            </a>
          </div>
        </div>

        {/* Desktop & Tablet Version */}
        <div className="hidden lg:block w-full h-[calc(100vh-4vw)] relative">
          
          {/* Top-Left: 2025 */}
          <div className="absolute top-[60px] left-0 text-[11px] xl:text-[16px] 2xl:text-[18px] font-medium z-30 text-white">
            2025
          </div>
          
          {/* Top-Right: BASED IN BENGALURU */}
          <div className="absolute top-[180px] xl:top-[200px] 2xl:top-[320px] right-0 text-[11px] xl:text-[12px] 2xl:text-[13px] tracking-[0.3em] font-light z-30 text-white">
            LIVES IN BENGALURU
          </div>

          {/* Main Title and Image Container */}
          <div className="relative w-full pt-12">
            
            {/* Title Text - Made fully responsive */}
            <h1 
              ref={titleRef}
              className="w-full text-center leading-[0.82] font-black tracking-[-0.02em] cursor-default select-none overflow-visible relative z-30 pt-8 text-white"
              style={{ 
                fontSize: 'clamp(80px, 15vw, 240px)',
                whiteSpace: 'nowrap'
              }}
            >
              {letters.map((letter, index) => (
                <span
                  key={index}
                  className="inline-block transition-all duration-300 hover:text-gray-400 hover:scale-110 hover:translate-y-[-4px] text-white"
                  onMouseEnter={() => handleLetterHover(index)}
                  onMouseLeave={handleLetterLeave}
                  style={{
                    transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  }}
                >
                  {letter}
                </span>
              ))}
            </h1>
            
            {/* Image */}
            <div className="absolute lg:left-[36%] xl:left-[40%] 2xl:left-[%] lg:top-[200px] xl:top-[220px] 2xl:top-[200px] w-[300px] xl:w-[360px] 2xl:w-[450px] aspect-[3/4] bg-gray-800 overflow-hidden z-10 rounded-lg shadow-xl">
              <img 
                src={profileImage} 
                alt="Creative Designer"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* DUAL SERVICES LIST CONTAINER (Left and Right Columns) */}
          <div className="absolute left-0 right-0 top-[400px] xl:top-[440px] 2xl:top-[440px] z-30 px-4">
            <div className="flex justify-between w-full max-w-[1400px] xl:max-w-[1600px] 2xl:max-w-[1800px] mx-auto">
              
              {/* Left Services Column */}
              <div className="space-y-3 xl:space-y-4">
                {leftServices.map(renderServiceItem)}
              </div>
              
              {/* Right Services Column */}
              <div className="space-y-3 xl:space-y-4 text-right">
                {rightServices.map(renderRightServiceItem)}
              </div>
            </div>
          </div>

          {/* Bottom Section - Full width across the bottom */}
          <div className="absolute bottom-0 left-0 right-0 w-full z-30">
            <div className="flex justify-between items-end">
              {/* Left: Recent Work (YOGESH V) */}
              <div className="mb-8 xl:mb-10">
                <div className="flex items-center gap-3 xl:gap-4 mb-2 xl:mb-3">
                  <p className="text-[11px] xl:text-[13px] 2xl:text-[18px] tracking-[0.2em] font-medium text-white">Know More</p>
                  <svg className="w-4 h-4 xl:w-5 xl:h-5 text-white" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8h10M9 4l4 4-4 4"/>
                  </svg>
                </div>
                <h2 
                  className="text-[46px] xl:text-[56px] 2xl:text-[72px] font-black tracking-tight leading-none transform hover:scale-105 transition-transform duration-300 cursor-pointer text-white"
                >
                  YOGESH V
                </h2>
              </div>
              
              {/* Right: AVAILABLE FOR COLLABORATION & Email */}
              <div className="flex flex-col items-end space-y-4">
                <div 
                  className="flex items-center gap-3 xl:gap-4 transform hover:translate-x-2 transition-transform duration-300 cursor-pointer"
                >
                  <p className="text-[11px] xl:text-[13px] 2xl:text-[18px] tracking-[0.2em] font-medium text-white">AVAILABLE FOR COLLABORATION</p>
                  <svg className="w-4 h-4 xl:w-5 xl:h-5 text-white" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8h10M9 4l4 4-4 4"/>
                  </svg>
                </div>
                <a 
                  href="mailto:yogesh.unique9844@gmail.com" 
                  className="text-[13px] xl:text-[14px] 2xl:text-[18px] underline font-medium hover:no-underline transition-all transform hover:scale-105 text-white hover:text-gray-300"
                >
                  yogesh.unique9844@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeDesignerHero;