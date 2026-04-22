import React, { useEffect, useRef, useState } from 'react';
import backgroundImage from '/images/Gemini_Generated_Image_yjf1t5yjf1t5yjf1.png';

const AboutHeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isInView, setIsInView] = useState<boolean>(false);
  const rafRef = useRef<number>(0);
  const mousePosRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const setMaskPos = (x: number, y: number) => {
      section.style.setProperty('--mx', `${x}px`);
      section.style.setProperty('--my', `${y}px`);
    };

    const updatePositions = () => {
      setMousePos({ x: mousePosRef.current.x, y: mousePosRef.current.y });
      setMaskPos(mousePosRef.current.x, mousePosRef.current.y);
      rafRef.current = requestAnimationFrame(updatePositions);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      mousePosRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
      rafRef.current = requestAnimationFrame(updatePositions);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setMaskPos(-9999, -9999);
      cancelAnimationFrame(rafRef.current);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (!entry.isIntersecting) {
          setIsHovering(false);
          setMaskPos(-9999, -9999);
          cancelAnimationFrame(rafRef.current);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    section.addEventListener('mousemove', handleMouseMove, { passive: true });
    section.addEventListener('mouseenter', handleMouseEnter);
    section.addEventListener('mouseleave', handleMouseLeave);

    let scrollTimer: number | null = null;
    const handleScroll = () => {
      if (isHovering) {
        setIsHovering(false);
        setMaskPos(-9999, -9999);
        cancelAnimationFrame(rafRef.current);
      }
      if (scrollTimer) window.clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(() => { scrollTimer = null; }, 150);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      section.removeEventListener('mousemove', handleMouseMove);
      section.removeEventListener('mouseenter', handleMouseEnter);
      section.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafRef.current);
      if (scrollTimer) window.clearTimeout(scrollTimer);
    };
  }, []);

  const showBackground = isHovering && isInView;

  // Stats data
  const stats = [
    { value: '10+', label: 'Projects Delivered' },
    { value: '1+', label: 'Years Experience' },
    { value: '3', label: 'Companies Worked' },
    { value: '15+', label: 'Technologies' },
  ];

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .about-section {
            --mx: -9999px;
            --my: -9999px;
            --spot-size: 150px;
            position: relative;
            overflow: hidden;
          }
          @media (min-width: 1024px) {
            .about-section { cursor: none; }
            .about-section * { cursor: none; }
          }
          .bg-layer {
            position: absolute;
            inset: 0;
            background-size: cover;
            background-position: center;
            opacity: 0;
<<<<<<< HEAD
            transition: opacity 0.3s ease-in-out;
            pointer-events: none;
            z-index: 1;
=======
            transition: opacity 0.28s ease-in-out;
            pointer-events: none;
            z-index: 1;

            /* radial mask centered at CSS vars --mx / --my */
>>>>>>> 7ed862beeeff71a3961184ecc21deb126379068c
            -webkit-mask-image: radial-gradient(circle var(--spot-size) at var(--mx) var(--my), black 0%, rgba(0,0,0,0.9) 55%, transparent 75%);
            mask-image: radial-gradient(circle var(--spot-size) at var(--mx) var(--my), black 0%, rgba(0,0,0,0.9) 55%, transparent 75%);
            -webkit-mask-repeat: no-repeat;
            mask-repeat: no-repeat;
<<<<<<< HEAD
          }
          .bg-layer.visible { opacity: 1; }
=======
            -webkit-mask-position: 0 0;
            mask-position: 0 0;
          }

          /* Visible only when both conditions met (JS toggles class) */
          .bg-layer.visible { opacity: 1; }

          /* Decorative spotlight (optional) */
>>>>>>> 7ed862beeeff71a3961184ecc21deb126379068c
          .cursor-spotlight {
            position: absolute;
            width: var(--spot-size);
            height: var(--spot-size);
            border-radius: 50%;
            pointer-events: none;
            z-index: 2;
            transform: translate(-50%, -50%);
<<<<<<< HEAD
            background: radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%);
          }
          .content-wrap { position: relative; z-index: 10; }
          @media (max-width: 1023px) {
            .about-section, .about-section * { cursor: default; }
            .cursor-spotlight { display: none !important; }
            .bg-layer { display: none !important; }
=======
            transition: opacity 0.12s ease;
          }

          /* Text area stays above the bg */
          .content-wrap { position: relative; z-index: 10; transition: color 0.18s ease; }

          /* Mobile: disable image and force white background */
          @media (max-width: 768px) {
            .about-section, .about-section * { cursor: default; }
            .cursor-spotlight { display: none !important; }
            .bg-layer { display: none !important; } /* completely remove background on mobile */
            .about-section { background-color: #ffffff !important; } /* ensure white on mobile */
>>>>>>> 7ed862beeeff71a3961184ecc21deb126379068c
          }
        `,
        }}
      />

      <section
        id="about"
        ref={sectionRef}
        className="about-section w-full bg-transparent flex items-center justify-center section-padding relative"
      >
        <div
          className={`bg-layer ${showBackground ? 'visible' : ''}`}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />

        {showBackground && (
          <div
            className="cursor-spotlight"
            style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}
          />
        )}

        <div className="max-w-5xl w-full text-center relative z-20 content-wrap">
          {/* Label */}
          <div className="mb-8">
            <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-violet-400 font-semibold">
              ABOUT ME
            </p>
          </div>

          {/* Main Heading */}
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] mb-8 lg:mb-10 text-white font-black"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span className="block sm:inline">Backend developer </span>
            <span className="block sm:inline">building </span>
            <span className="block sm:inline bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
              scalable & efficient APIs.
            </span>
          </h2>

          {/* Description */}
          <div className="max-w-3xl mx-auto mb-12 lg:mb-14">
            <p className="text-base sm:text-lg leading-relaxed text-gray-300 font-medium">
              With expertise in Python, I build scalable and efficient APIs using Django, FastAPI, and Flask. 
              Experienced in full-stack development with React frontends, WordPress & WIX sites, 
              web scraping, and cloud deployment — I bring a strong understanding of web development 
              and problem-solving skills to deliver high-quality digital solutions thats it.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto mb-12">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-card p-4 sm:p-5 text-center hover:border-violet-500/20 transition-all duration-300 hover:-translate-y-1"
              >
                <p className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </p>
                <p className="text-xs text-gray-500 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 rounded-full text-lg sm:text-xl font-bold text-gray-200 hover:text-white hover:border-violet-500/50 hover:bg-violet-500/5 transition-all duration-300 group"
          >
            Get In Touch
            <span className="transform group-hover:translate-x-2 transition-transform duration-300 text-2xl">
              →
            </span>
          </a>
        </div>
      </section>
    </>
  );
};

export default AboutHeroSection;