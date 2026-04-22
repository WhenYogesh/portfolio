<<<<<<< HEAD
import React, { useRef, useEffect, useState, useCallback } from 'react';

=======
import React, { useRef, useEffect, useState, useMemo } from 'react';

// --- TYPE DEFINITIONS ---
>>>>>>> 7ed862beeeff71a3961184ecc21deb126379068c
interface Project {
  id: number;
  title: string;
  description: string;
  bgColor: string;
  tech: string[];
<<<<<<< HEAD
  role: string;
}

const ProjectCard: React.FC<{
  project: Project;
  index: number;
  isVisible: boolean;
}> = ({ project, index, isVisible }) => {
  return (
    <div
      className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[50vw] lg:w-[380px] h-[420px] sm:h-[480px] lg:h-[520px]"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
        transition: `all 0.7s cubic-bezier(0.16,0.84,0.44,1) ${index * 100}ms`,
      }}
    >
      <div
        className={`w-full h-full ${project.bgColor} rounded-3xl flex flex-col justify-between p-6 sm:p-8 text-white relative overflow-hidden group cursor-pointer`}
      >
        {/* Project Number */}
        <div className="absolute top-4 left-5 text-white/15 text-5xl sm:text-7xl font-black select-none">
          {String(index + 1).padStart(2, '0')}
        </div>

        {/* Role badge */}
        <div className="relative z-10">
          <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
            {project.role}
          </span>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 rounded-3xl" />

        <div className="flex-1" />

        {/* Content */}
        <div className="relative z-10 bg-black/50 backdrop-blur-xl rounded-2xl p-5 sm:p-6 transform group-hover:-translate-y-2 transition-transform duration-500 border border-white/10">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-2 leading-tight">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base opacity-80 mb-4 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="text-xs bg-white/15 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10 font-medium"
=======
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
>>>>>>> 7ed862beeeff71a3961184ecc21deb126379068c
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

<<<<<<< HEAD
=======
// --- Main Component ---
>>>>>>> 7ed862beeeff71a3961184ecc21deb126379068c
const AutoHorizontalScrollPortfolio: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalContentRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [hasCompleted, setHasCompleted] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(true);
<<<<<<< HEAD
  const [isVisible, setIsVisible] = useState(false);
  const rafRef = useRef<number>(0);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Course Platform',
      description: 'Backend system for a designing course platform with Google Auth, user management, and secure API endpoints.',
      bgColor: 'bg-gradient-to-br from-violet-600 to-indigo-900',
      tech: ['Python', 'FastAPI', 'MongoDB', 'Redis'],
      role: 'Backend Developer',
    },
    {
      id: 2,
      title: 'Merchandise Site',
      description: 'Full backend for e-commerce merchandise site with product management, authentication, and payment integrations.',
      bgColor: 'bg-gradient-to-br from-emerald-600 to-teal-900',
      tech: ['FastAPI', 'MongoDB', 'Google Auth', 'REST APIs'],
      role: 'Backend Developer',
    },
    {
      id: 3,
      title: 'Admission System',
      description: 'Student admission management system with registration, enrollment workflows, and admin dashboard.',
      bgColor: 'bg-gradient-to-br from-sky-500 to-blue-900',
      tech: ['Python', 'Django', 'SQLite', 'HTML/CSS'],
      role: 'Backend Intern',
    },
    {
      id: 4,
      title: 'WordPress Sites',
      description: 'Custom WordPress themes and WooCommerce stores with SEO optimization, plugin integration, and performance tuning.',
      bgColor: 'bg-gradient-to-br from-amber-500 to-orange-900',
      tech: ['WordPress', 'PHP', 'WooCommerce', 'SEO'],
      role: 'WordPress Developer',
    },
    {
      id: 5,
      title: 'Web Scraping',
      description: 'Advanced data extraction pipelines using Selectolax, BeautifulSoup, and automated scraping solutions.',
      bgColor: 'bg-gradient-to-br from-pink-500 to-rose-900',
      tech: ['Python', 'Selectolax', 'BeautifulSoup', 'Selenium'],
      role: 'Data Engineer',
    },
  ];

  useEffect(() => {
    const checkScreenSize = () => setIsLargeScreen(window.innerWidth >= 1024);
=======

  const projects: Project[] = [
    { id: 1, title: "Web Development", description: "Python & Web Scraping", bgColor: "bg-gradient-to-br from-purple-300 to-grey-900", tech: ["Python", "BeautifulSoup", "Scrapy", "FastAPI"] },
    { id: 2, title: "WordPress", description: "Custom Themes & Plugins", bgColor: "bg-gradient-to-br from-green-800 to-grey-900", tech: ["PHP", "JavaScript", "Custom Themes", "WooCommerce"] },
    { id: 3, title: "UX Design", description: "User Experience & Research", bgColor: "bg-gradient-to-br from-blue-300 to-grey-900", tech: ["Figma", "User Research", "Prototyping", "Testing"] },
    { id: 4, title: "AWS Cloud", description: "Infrastructure & Deployment", bgColor: "bg-gradient-to-br from-red-300 to-grey-900", tech: ["EC2", "S3", "Lambda", "RDS"] },
    { id: 5, title: "Digital Design", description: "Motion & Web Experience", bgColor: "bg-gradient-to-br from-purple-300 to-grey-900", tech: ["After Effects", "WebGL", "GSAP", "Three.js"] }
  ];

  // 1. Check Screen Size for Mobile/Tablet Fallback
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
>>>>>>> 7ed862beeeff71a3961184ecc21deb126379068c
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

<<<<<<< HEAD
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    const horizontalContent = horizontalContentRef.current;
    if (!container || !horizontalContent || !isLargeScreen) return;

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

    if (scrollY >= containerTop && scrollY < end - viewportHeight) {
      setIsSticky(true);
      setHasCompleted(false);
    } else if (scrollY >= end - viewportHeight) {
      setIsSticky(false);
      setHasCompleted(true);
    } else {
      setIsSticky(false);
      setHasCompleted(false);
    }

    const translateX = -progress * totalHorizontalScroll;
    horizontalContent.style.transform = `translate3d(${translateX}px, 0, 0)`;
  }, [isLargeScreen]);

  useEffect(() => {
    if (!isLargeScreen) return;
    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(handleScroll);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [isLargeScreen, handleScroll]);

  const totalHorizontalScroll =
    horizontalContentRef.current && isLargeScreen
      ? horizontalContentRef.current.scrollWidth - horizontalContentRef.current.clientWidth
      : 0;
  const scrollContainerHeight = isLargeScreen
    ? totalHorizontalScroll + window.innerHeight * 1.5
    : 0;

  // Mobile
  if (!isLargeScreen) {
    return (
      <section id="projects" className="w-full bg-transparent section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-violet-400 font-semibold mb-4">
              PORTFOLIO
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-white">
              Featured{' '}
              <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-gray-400 text-base max-w-xl mx-auto">
              Real work from my roles at Xtransmatrix, Karunadu Technologies, and freelance projects.
            </p>
          </div>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div key={project.id} className="w-full max-w-md mx-auto">
                <ProjectCard project={project} index={index} isVisible={isVisible} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Desktop
  return (
    <div id="projects" style={{ height: `${scrollContainerHeight}px` }} ref={containerRef} className="relative">
      <div
        className={`w-full bg-transparent overflow-hidden ${isSticky ? 'fixed top-0 left-0 z-40' : 'relative'}`}
        style={{
          height: '100vh',
          ...(hasCompleted && { position: 'absolute', bottom: 0, top: 'auto' }),
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <h2 className="text-[120px] md:text-[200px] lg:text-[280px] xl:text-[360px] font-black text-white/[0.02] select-none leading-none">
=======
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
>>>>>>> 7ed862beeeff71a3961184ecc21deb126379068c
            PROJECTS
          </h2>
        </div>

<<<<<<< HEAD
        <div className="relative z-20 flex-1 max-w-2xl pl-8 lg:pl-16 h-full flex items-center">
          <div className="text-white">
            <p className="text-xs tracking-[0.3em] uppercase text-violet-400 font-semibold mb-4">
              PORTFOLIO
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight">
              Featured{' '}
              <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-400 mb-8 leading-relaxed max-w-lg">
              Real work from my roles at Xtransmatrix, Karunadu Technologies, and Tekhportal.
            </p>
            <div className="max-w-xs">
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-violet-500 to-pink-500 rounded-full"
                  style={{ width: `${scrollProgress * 100}%`, transition: 'width 0.1s linear' }}
                />
              </div>
              <p className="text-xs text-gray-500 mt-2">
                {scrollProgress < 1 ? 'Scroll to explore →' : 'All projects viewed ✓'}
              </p>
            </div>
          </div>
        </div>

        <div className="absolute right-0 top-0 h-full w-2/3 lg:w-1/2 overflow-hidden">
          <div
            ref={horizontalContentRef}
            className="h-full flex items-center gap-8 pl-8 pr-8 gpu-accelerated"
            style={{ willChange: 'transform' }}
          >
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} isVisible={isVisible} />
            ))}
            <div className="flex-shrink-0 w-16" />
          </div>
        </div>
      </div>
    </div>
=======
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
>>>>>>> 7ed862beeeff71a3961184ecc21deb126379068c
  );
};

export default AutoHorizontalScrollPortfolio;