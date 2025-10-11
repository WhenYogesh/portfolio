import React, { useRef, useEffect, useState } from 'react';

const AutoHorizontalScrollPortfolio = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalContentRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !horizontalContentRef.current) return;

      const container = containerRef.current;
      const horizontalContent = horizontalContentRef.current;
      
      const containerTop = container.offsetTop;
      const containerHeight = container.offsetHeight;
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      // Calculate how far we've scrolled through this section (0 to 1)
      const start = containerTop - viewportHeight * 0.5;
      const end = containerTop + containerHeight - viewportHeight * 0.5;
      const progress = Math.max(0, Math.min(1, (scrollY - start) / (end - start)));

      setScrollProgress(progress);

      // Calculate horizontal translation with bounce effect
      const totalHorizontalScroll = horizontalContent.scrollWidth - horizontalContent.clientWidth;
      
      // Enhanced easing with bounce
      let easedProgress = progress;
      if (progress < 0.1) {
        // Bounce in at start
        easedProgress = progress * (2 - progress * 10) * 0.5;
      } else if (progress > 0.9) {
        // Bounce out at end
        easedProgress = 1 - (1 - progress) * (2 - (1 - progress) * 10) * 0.5;
      }

      const translateX = -easedProgress * totalHorizontalScroll;
      horizontalContent.style.transform = `translateX(${translateX}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Web Development",
      description: "Python & Web Scraping",
      bgColor: "bg-gradient-to-br from-blue-500 to-purple-700",
      tech: ["Python", "BeautifulSoup", "Scrapy", "FastAPI"]
    },
    {
      id: 2,
      title: "WordPress",
      description: "Custom Themes & Plugins",
      bgColor: "bg-gradient-to-br from-green-500 to-blue-600",
      tech: ["PHP", "JavaScript", "Custom Themes", "WooCommerce"]
    },
    {
      id: 3,
      title: "UX Design",
      description: "User Experience & Research",
      bgColor: "bg-gradient-to-br from-orange-500 to-pink-700",
      tech: ["Figma", "User Research", "Prototyping", "Testing"]
    },
    {
      id: 4,
      title: "AWS Cloud",
      description: "Infrastructure & Deployment",
      bgColor: "bg-gradient-to-br from-yellow-500 to-red-600",
      tech: ["EC2", "S3", "Lambda", "RDS"]
    },
    {
      id: 5,
      title: "Digital Design",
      description: "Motion & Web Experience",
      bgColor: "bg-gradient-to-br from-purple-500 to-indigo-700",
      tech: ["After Effects", "WebGL", "GSAP", "Three.js"]
    }
  ];

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full bg-white overflow-hidden"
    >
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <h2 className="text-[120px] md:text-[180px] lg:text-[300px] xl:text-[400px] font-black text-gray-100 select-none leading-none">
          PROJECTS
        </h2>
      </div>

      {/* Fixed Left Content */}
      <div className="relative z-20 flex-1 max-w-2xl pl-8 lg:pl-16 h-full flex items-center">
        <div className="text-black">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-4 md:mb-6 leading-tight">
            I'M A WEB DEVELOPER
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl opacity-80 mb-6 md:mb-8 leading-relaxed">
            Specialized in Python, Web Scraping, WordPress, UX Design, and AWS Cloud Solutions
          </p>
          
          {/* Tech Stack Indicators */}
          <div className="flex flex-wrap gap-3 md:gap-4">
            {["Python", "Web Scraping", "WordPress", "UX Design", "AWS"].map((tech) => (
              <span 
                key={tech}
                className="bg-black text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-lg font-bold shadow-lg"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Scroll Progress Indicator */}
          <div className="mt-8 md:mt-12">
            <div className="w-48 md:w-64 h-2 bg-gray-300 rounded-full overflow-hidden">
              <div 
                className="h-full bg-black rounded-full transition-all duration-100"
                style={{ width: `${scrollProgress * 100}%` }}
              />
            </div>
            <p className="text-sm md:text-base text-gray-600 mt-2">
              Scroll down to explore projects →
            </p>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Content - Right Side */}
      <div className="absolute right-0 top-0 h-full w-2/3 lg:w-1/2 overflow-hidden">
        <div 
          ref={horizontalContentRef}
          className="h-full flex items-center space-x-6 md:space-x-8 lg:space-x-12 pl-8 pr-8 transition-transform duration-100 ease-out will-change-transform"
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="flex-shrink-0 w-[280px] h-[380px] md:w-[320px] md:h-[450px] lg:w-[380px] lg:h-[520px] rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              style={{
                opacity: 0.8 + (Math.cos((scrollProgress - index * 0.2) * Math.PI * 2) + 1) * 0.1
              }}
            >
              <div className={`w-full h-full ${project.bgColor} rounded-3xl flex flex-col justify-between p-6 md:p-8 text-white relative overflow-hidden group`}>
                
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="w-full h-full bg-gradient-to-br from-white via-transparent to-black animate-pulse"></div>
                </div>
                
                {/* Project Number */}
                <div className="absolute top-6 left-6 text-white text-6xl md:text-8xl font-black opacity-30">
                  {index + 1}
                </div>
                
                {/* Content */}
                <div className="flex-1"></div>
                
                <div className="bg-black bg-opacity-70 backdrop-blur-lg rounded-2xl p-6 md:p-8 transform group-hover:translate-y-[-10px] transition-transform duration-500 border border-white border-opacity-20">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-black mb-3 md:mb-4 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-lg md:text-xl lg:text-2xl opacity-90 mb-4 md:mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-xs md:text-sm bg-white bg-opacity-25 px-3 py-1 rounded-full border border-white border-opacity-30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Extra space at the end for better scroll completion */}
          <div className="flex-shrink-0 w-8 md:w-16"></div>
        </div>
      </div>
    </section>
  );
};

export default AutoHorizontalScrollPortfolio;