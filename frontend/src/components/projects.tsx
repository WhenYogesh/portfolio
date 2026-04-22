import React, { useRef, useEffect, useState, useCallback } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  bgColor: string;
  tech: string[];
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

const AutoHorizontalScrollPortfolio: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalContentRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [hasCompleted, setHasCompleted] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const rafRef = useRef<number>(0);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Course Platform',
      description: 'Backend system for a designing course platform with Google Auth, user management, and secure API endpoints.',
      bgColor: 'bg-gradient-to-br from-violet-900 to-indigo-950 shadow-lg shadow-violet-500/10 border border-violet-500/20',
      tech: ['Python', 'FastAPI', 'MongoDB', 'Redis'],
      role: 'Backend Developer',
    },
    {
      id: 2,
      title: 'Merchandise Site',
      description: 'Full backend for e-commerce merchandise site with product management, authentication, and payment integrations.',
      bgColor: 'bg-gradient-to-br from-purple-900 to-violet-950 shadow-lg shadow-purple-500/10 border border-purple-500/20',
      tech: ['FastAPI', 'MongoDB', 'Google Auth', 'REST APIs'],
      role: 'Backend Developer',
    },
    {
      id: 3,
      title: 'Admission System',
      description: 'Student admission management system with registration, enrollment workflows, and admin dashboard.',
      bgColor: 'bg-gradient-to-br from-indigo-900 to-slate-900 shadow-lg shadow-indigo-500/10 border border-indigo-500/20',
      tech: ['Python', 'Django', 'SQLite', 'HTML/CSS'],
      role: 'Backend Intern',
    },
    {
      id: 4,
      title: 'WordPress Sites',
      description: 'Custom WordPress themes and WooCommerce stores with SEO optimization, plugin integration, and performance tuning.',
      bgColor: 'bg-gradient-to-br from-fuchsia-900 to-pink-950 shadow-lg shadow-fuchsia-500/10 border border-fuchsia-500/20',
      tech: ['WordPress', 'PHP', 'WooCommerce', 'SEO'],
      role: 'WordPress Developer',
    },
    {
      id: 5,
      title: 'Web Scraping',
      description: 'Advanced data extraction pipelines using Selectolax, BeautifulSoup, and automated scraping solutions.',
      bgColor: 'bg-gradient-to-br from-violet-900 to-fuchsia-900 shadow-lg shadow-violet-500/10 border border-violet-500/20',
      tech: ['Python', 'Selectolax', 'BeautifulSoup', 'Selenium'],
      role: 'Data Engineer',
    },
  ];

  useEffect(() => {
    const checkScreenSize = () => setIsLargeScreen(window.innerWidth >= 1024);
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    const node = containerRef.current;
    if (node) observer.observe(node);
    return () => observer.disconnect();
  }, [isLargeScreen]);

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
      progress = Math.max(0, Math.min(1, (scrollY - containerTop) / (scrollHeight - viewportHeight)));
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
      <section id="projects" ref={containerRef} className="w-full bg-transparent section-padding">
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
            PROJECTS
          </h2>
        </div>

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
  );
};

export default AutoHorizontalScrollPortfolio;