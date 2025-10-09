import React, { useState, useRef } from 'react';

const CreativeDesignerHero: React.FC = () => {
  const [hoveredLetter, setHoveredLetter] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const title = "WEBDEVELOPER";
  const letters = title.split('');

  // Different images for different letters
  const letterImages = [
    "./src/assets/bw.jpg", // W - Web
    "./src/assets/color.jpg", // E - Development
    "./src/assets/bw.jpg", // B - Browser
    "./src/assets/color.jpg", // D - Design
    "./src/assets/bw.jpg", // E - E-commerce
    "./src/assets/color.jpg", // V - Visual
    "./src/assets/bw.jpg", // E - Experience
    "./src/assets/color.jpg", // L - Layout
    "./src/assets/bw.jpg", // O - Optimization
    "./src/assets/color.jpg", // P - Performance
    "./src/assets/bw.jpg", // E - Engineering
    "./src/assets/color.jpg", // R - Responsive
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleLetterHover = (index: number) => {
    setHoveredLetter(index);
  };

  const handleLetterLeave = () => {
    setHoveredLetter(null);
  };

  return (
    <section className="w-full min-h-screen bg-[#f5f5f0] overflow-hidden">
      <div className="w-full h-full px-[2vw] sm:px-[3vw] lg:px-[4vw] py-[2vw] lg:py-[4vw] mt-[8vw] lg:mt-[6vw]">
        {/* Mobile Version */}
        <div className="lg:hidden flex flex-col items-center justify-center min-h-[80vh]">
          {/* Title */}
          <div className="mb-6 text-center">
            <h1 className="text-[36px] leading-[0.9] font-black tracking-tighter mb-2">
              WEB<br />DEVELOPER
            </h1>
            <p className="text-[10px] tracking-[0.3em] font-light mt-3">
              LIVES IN BENGALURU
            </p>
          </div>

          {/* Image */}
          <div className="mb-6 flex flex-col items-center">
            <div className="w-full max-w-[220px] aspect-[3/4] bg-gray-300 overflow-hidden mb-4">
              <img 
                src="./src/assets/color.jpg" 
                alt="Creative Designer"
                className="w-full h-full object-cover grayscale"
              />
            </div>
            
            {/* Services under image on mobile */}
            <div className="text-center space-y-1">
              <p className="text-[12px] font-bold tracking-tight">/PYTHON DEVELOPER</p>
              <p className="text-[12px] font-bold tracking-tight">/WEB DESIGN (UX/UI)</p>
              <p className="text-[12px] font-bold tracking-tight">/WORDPRESS DEVELOPMENT</p>
            </div>
          </div>

          {/* Recent Work */}
          <div className="mb-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <p className="text-[11px] tracking-wide font-medium">RECENT WORK</p>
              <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2 6h8M6 2l4 4-4 4"/>
              </svg>
            </div>
            <h2 className="text-[28px] font-black tracking-tight leading-none">
              YOGESH V
            </h2>
          </div>

          {/* Footer */}
          <div className="text-center space-y-3">
            <div className="flex items-center justify-center gap-2">
              <p className="text-[11px] tracking-wide font-medium">AVAILABLE FOR COLLABORATION</p>
              <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2 6h8M6 2l4 4-4 4"/>
              </svg>
            </div>
            <a href="mailto:yogesh.unique9844@gmail.com" className="text-[12px] underline font-medium block break-all">
              yogesh.unique9844@gmail.com
            </a>
          </div>
        </div>

        {/* Desktop & Tablet Version */}
        <div className="hidden lg:block w-full max-w-[1600px] mx-auto">
          <div className="relative w-full h-[calc(100vh-6rem)]">
            {/* Top Counter */}
            <div className="absolute top-0 left-0 text-[10px] xl:text-[11px] font-medium z-30">
              1,618
            </div>

            {/* Main Title with Letter Hover */}
            <div 
              className="relative w-full"
              onMouseMove={handleMouseMove}
            >
              {/* Background Image - Behind the text */}
              <div className="absolute right-[8%] xl:right-[12%] 2xl:right-[15%] top-[50px] xl:top-[80px] 2xl:top-[120px] w-[220px] xl:w-[280px] 2xl:w-[350px] aspect-[3/4] bg-gray-300 overflow-hidden z-10">
                <img 
                  src="./src/assets/color.jpg" 
                  alt="Creative Designer"
                  className="w-full h-full object-cover grayscale"
                />
              </div>

              {/* Hover Image - Shows when hovering over letters */}
              <div 
                className={`fixed w-[240px] xl:w-[300px] 2xl:w-[350px] aspect-[3/4] bg-gray-300 overflow-hidden pointer-events-none transition-all duration-300 z-20 ${
                  hoveredLetter !== null ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{
                  left: `${mousePosition.x}px`,
                  top: `${mousePosition.y}px`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {hoveredLetter !== null && (
                  <img 
                    src={letterImages[hoveredLetter]} 
                    alt={`Letter ${letters[hoveredLetter]}`}
                    className="w-full h-full object-cover grayscale"
                  />
                )}
              </div>

              {/* Title Text - Above the images */}
              <h1 className="text-[120px] xl:text-[160px] 2xl:text-[220px] leading-[0.82] font-black tracking-[-0.02em] cursor-default select-none whitespace-nowrap overflow-visible relative z-30">
                {letters.map((letter, index) => (
                  <span
                    key={index}
                    className="inline-block transition-all duration-200 hover:text-gray-600 hover:scale-110"
                    onMouseEnter={() => handleLetterHover(index)}
                    onMouseLeave={handleLetterLeave}
                    style={{
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </h1>
            </div>

            {/* "BASED IN BENGALURU" - aligned with title top */}
            <div className="absolute top-[105px] xl:top-[140px] 2xl:top-[190px] right-0 text-[10px] xl:text-[11px] 2xl:text-[12px] tracking-[0.3em] font-light z-30">
              BASED IN BENGALURU
            </div>

            {/* Services List - positioned left below title */}
            <div className="absolute left-0 top-[200px] xl:top-[260px] 2xl:top-[350px] space-y-0.5 xl:space-y-1 z-30">
              <p className="text-[14px] xl:text-[16px] 2xl:text-[17px] font-bold tracking-tight leading-tight">/PYTHON DEVELOPER</p>
              <p className="text-[14px] xl:text-[16px] 2xl:text-[17px] font-bold tracking-tight leading-tight">/WEB DESIGN (UX/UI)</p>
              <p className="text-[14px] xl:text-[16px] 2xl:text-[17px] font-bold tracking-tight leading-tight">/WORDPRESS DEVELOPMENT</p>
            </div>

            {/* Bottom Section - positioned higher up */}
            <div className="absolute bottom-[100px] xl:bottom-[120px] 2xl:bottom-[140px] left-0 right-0 w-full z-30">
              {/* Recent Work */}
              <div className="mb-6 xl:mb-8">
                <div className="flex items-center gap-2 xl:gap-3 mb-1 xl:mb-2">
                  <p className="text-[10px] xl:text-[11px] 2xl:text-[12px] tracking-[0.2em] font-medium">RECENT WORK</p>
                  <svg className="w-3 h-3 xl:w-4 xl:h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8h10M9 4l4 4-4 4"/>
                  </svg>
                </div>
                <h2 className="text-[42px] xl:text-[56px] 2xl:text-[64px] font-black tracking-tight leading-none">
                  YOGESH V
                </h2>
              </div>

              {/* Footer */}
              <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-3 xl:gap-4">
                <div className="flex items-center gap-2 xl:gap-3">
                  <p className="text-[10px] xl:text-[11px] 2xl:text-[12px] tracking-[0.2em] font-medium">AVAILABLE FOR COLLABORATION</p>
                  <svg className="w-3 h-3 xl:w-4 xl:h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8h10M9 4l4 4-4 4"/>
                  </svg>
                </div>
                <a 
                  href="mailto:yogesh.unique9844@gmail.com" 
                  className="text-[12px] xl:text-[13px] 2xl:text-[14px] underline font-medium hover:no-underline transition-all"
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