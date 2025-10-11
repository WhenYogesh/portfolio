import React, { useRef, useEffect, useState, useMemo } from 'react';

// --- TYPE DEFINITIONS ---
interface Project {
  id: number;
  title: string;
  description: string;
  bgColor: string;
  tech: string[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
  scrollProgress: number;
  isLargeScreen: boolean;
}
// ------------------------

// --- ProjectCard Component (Reusable and Responsive) ---
const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, scrollProgress, isLargeScreen }) => {
  
  const largeScreenStyle = useMemo(() => {
    if (!isLargeScreen) return {};
    const opacity = 0.8 + (Math.cos((scrollProgress - index * 0.2) * Math.PI * 2) + 1) * 0.1;
    return {
      opacity: opacity,
    };
  }, [scrollProgress, index, isLargeScreen]);

  return (
    <div
      key={project.id}
      className="flex-shrink-0 w-full mb-6 lg:w-[380px] lg:h-[520px] rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
      style={largeScreenStyle}
    >
      <div className={`w-full h-full ${project.bgColor} rounded-3xl flex flex-col justify-between p-4 md:p-8 text-white relative overflow-hidden group`}>

        {/* Project Number */}
        <div className="absolute top-4 left-4 text-white text-4xl md:text-6xl font-black opacity-30">
          {index + 1}
        </div>

        {/* Content Section */}
        <div className="flex-1"></div>
        <div className="bg-black bg-opacity-70 backdrop-blur-lg rounded-xl p-4 md:p-6 transform group-hover:translate-y-[-10px] transition-transform duration-500 border border-white border-opacity-20">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-black mb-2 leading-tight">
            {project.title}
          </h3>
          <p className="text-sm md:text-base lg:text-lg opacity-90 mb-3 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, techIndex) => ( 
              <span
                key={techIndex}
                className="text-xs bg-white bg-opacity-25 px-2 py-1 rounded-full border border-white border-opacity-30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main Component ---
const AutoHorizontalScrollPortfolio: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalContentRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [hasCompleted, setHasCompleted] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  const projects: Project[] = [
    { id: 1, title: "Web Development", description: "Python & Web Scraping", bgColor: "bg-gradient-to-br from-blue-500 to-purple-700", tech: ["Python", "BeautifulSoup", "Scrapy", "FastAPI"] },
    { id: 2, title: "WordPress", description: "Custom Themes & Plugins", bgColor: "bg-gradient-to-br from-green-500 to-blue-600", tech: ["PHP", "JavaScript", "Custom Themes", "WooCommerce"] },
    { id: 3, title: "UX Design", description: "User Experience & Research", bgColor: "bg-gradient-to-br from-orange-500 to-pink-700", tech: ["Figma", "User Research", "Prototyping", "Testing"] },
    { id: 4, title: "AWS Cloud", description: "Infrastructure & Deployment", bgColor: "bg-gradient-to-br from-yellow-500 to-red-600", tech: ["EC2", "S3", "Lambda", "RDS"] },
    { id: 5, title: "Digital Design", description: "Motion & Web Experience", bgColor: "bg-gradient-to-br from-purple-500 to-indigo-700", tech: ["After Effects", "WebGL", "GSAP", "Three.js"] }
  ];

  // 1. Check Screen Size for Mobile/Tablet Fallback
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // 2. Smooth Horizontal Scroll Logic (Only for Large Screens)
  useEffect(() => {
    if (!isLargeScreen) return; 

    const handleScroll = () => {
      const container = containerRef.current;
      const horizontalContent = horizontalContentRef.current;

      // Defensive check for null refs
      if (!container || !horizontalContent) return;

      const containerTop = container.offsetTop;
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      const totalHorizontalScroll = horizontalContent.scrollWidth - horizontalContent.clientWidth;
      const scrollHeight = totalHorizontalScroll + viewportHeight * 1.5; 

      const end = containerTop + scrollHeight;

      let progress = 0;
      if (scrollY >= containerTop) {
        progress = Math.max(0, Math.min(1, (scrollY - containerTop) / scrollHeight));
      }

      setScrollProgress(progress);

      // --- STICKY RELEASE LOGIC ---
      if (scrollY >= containerTop && scrollY < end - viewportHeight) {
        // Sticky phase: Animation is active
        setIsSticky(true);
        setHasCompleted(false);
      } else if (scrollY >= end - viewportHeight) {
        // Release point: Animation is completed, allowing normal scroll below
        setIsSticky(false);
        setHasCompleted(true);
      } else {
        // Before entering the sticky area
        setIsSticky(false);
        setHasCompleted(false);
      }
      // ----------------------------

      const translateX = -progress * totalHorizontalScroll;
      horizontalContent.style.transform = `translateX(${translateX}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLargeScreen]);

  const totalHorizontalScroll = horizontalContentRef.current && isLargeScreen
    ? horizontalContentRef.current.scrollWidth - horizontalContentRef.current.clientWidth
    : 0;
  
  const scrollContainerHeight = isLargeScreen ? totalHorizontalScroll + window.innerHeight * 1.5 : 
                                projects.length * 500 + window.innerHeight * 0.5;


  // --- RENDER LOGIC: Mobile/Tablet vs. Desktop ---
  
  if (!isLargeScreen) {
    // Mobile/Tablet View (Dark Theme)
    return (
      <div className="w-full bg-black py-12 px-4 md:px-8"> 
        <div className="relative text-center pointer-events-none z-0 mb-8">
          <h2 className="text-[60px] md:text-[100px] font-black text-gray-900 select-none leading-none">
            PROJECTS
          </h2>
        </div>

        <div className="text-white max-w-3xl mx-auto mb-10">
          <h1 className="text-3xl md:text-4xl font-black mb-3 leading-tight">
            I'M A WEB DEVELOPER
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
            Specialized in Python, Web Scraping, WordPress, UX Design, and AWS Cloud Solutions
          </p>

          <div className="flex flex-wrap gap-2 md:gap-3">
            {["Python", "Web Scraping", "WordPress", "UX Design", "AWS"].map((tech, index) => (
              <span key={index} className="bg-white/10 text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-sm font-bold shadow-lg">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} scrollProgress={0} isLargeScreen={false} />
          ))}
        </div>
      </div>
    );
  }

  // Large Screen View (Dark Theme, Smooth Horizontal Scroll)
  return (
    <>
      {/* Spacer to create scroll distance */}
      <div style={{ height: `${scrollContainerHeight}px` }} ref={containerRef} className="relative">
        <div
          className={`w-full bg-black overflow-hidden ${isSticky ? 'fixed top-0 left-0 z-50' : 'relative'}`}
          style={{
            height: '100vh',
            ...(hasCompleted && { position: 'absolute', bottom: 0, top: 'auto' })
          }}
        >
          {/* Background Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <h2 className="text-[120px] md:text-[180px] lg:text-[300px] xl:text-[400px] font-black text-gray-900 select-none leading-none">
              PROJECTS
            </h2>
          </div>

          {/* Fixed Left Content */}
          <div className="relative z-20 flex-1 max-w-2xl pl-8 lg:pl-16 h-full flex items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-4 leading-tight">
                I'M A WEB DEVELOPER
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 leading-relaxed">
                Specialized in Python, Web Scraping, WordPress, UX Design, and AWS Cloud Solutions
              </p>

              {/* Tech Stack Indicators */}
              <div className="flex flex-wrap gap-4">
                {["Python", "Web Scraping", "WordPress", "UX Design", "AWS"].map((tech, index) => (
                  <span key={index} className="bg-white/10 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Scroll Progress Indicator - Smooth Transition */}
              <div className="mt-12">
                <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${scrollProgress * 100}%` }}
                  />
                </div>
                <p className="text-base text-gray-400 mt-2">
                  {scrollProgress < 1 ? 'Scroll down to explore projects →' : 'All projects viewed ✓'}
                </p>
              </div>
            </div>
          </div>

          {/* Horizontal Scroll Content - Right Side */}
          <div className="absolute right-0 top-0 h-full w-2/3 lg:w-1/2 overflow-hidden">
            <div
              ref={horizontalContentRef}
              className="h-full flex items-center space-x-12 pl-8 pr-8 transition-transform duration-700 ease-out will-change-transform"
            >
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  scrollProgress={scrollProgress}
                  isLargeScreen={true}
                />
              ))}

              {/* Extra space at the end */}
              <div className="flex-shrink-0 w-16"></div>
            </div>
          </div>
        </div>
      </div>

      {/* The component ends here. */}
    </>
  );
};

export default AutoHorizontalScrollPortfolio;