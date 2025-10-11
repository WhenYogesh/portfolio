import React, { useEffect, useRef, useState } from 'react';

const AboutHeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isInView, setIsInView] = useState<boolean>(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // update CSS variables (mask center)
    const setMaskPos = (x: number, y: number) => {
      section.style.setProperty('--mx', `${x}px`);
      section.style.setProperty('--my', `${y}px`);
    };

    const handleMouseMove = (e: MouseEvent) => {
      // compute position relative to section
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setMousePos({ x, y });
      setMaskPos(x, y);
    };

    const handleMouseEnter = () => {
      // only allow hover reveal if section actually visible (intersection observer sets isInView)
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      // hide mask offscreen to be extra-safe
      setMaskPos(-9999, -9999);
    };

    // Intersection Observer to ensure section visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (!entry.isIntersecting) {
          // if not visible, force hide
          setIsHovering(false);
          section.style.setProperty('--mx', `-9999px`);
          section.style.setProperty('--my', `-9999px`);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);

    section.addEventListener('mousemove', handleMouseMove);
    section.addEventListener('mouseenter', handleMouseEnter);
    section.addEventListener('mouseleave', handleMouseLeave);

    // Hide background during page scrolling to avoid flashes
    let scrollTimer: number | null = null;
    const handleScroll = () => {
      // hide spotlight/ bg while scrolling
      if (isHovering) {
        setIsHovering(false);
        section.style.setProperty('--mx', `-9999px`);
        section.style.setProperty('--my', `-9999px`);
      }
      if (scrollTimer) window.clearTimeout(scrollTimer);
      // after short idle (150ms) we don't auto-enable hover; mouseenter must re-trigger
      scrollTimer = window.setTimeout(() => {
        scrollTimer = null;
      }, 150);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      section.removeEventListener('mousemove', handleMouseMove);
      section.removeEventListener('mouseenter', handleMouseEnter);
      section.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimer) window.clearTimeout(scrollTimer);
    };
  }, []); // run once

  // show only when both hovering and in view
  const showBackground = isHovering && isInView;

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Libre+Franklin:wght@500;600;700&display=swap');

          /* CSS VARS for mask center/size */
          .about-section {
            --mx: -9999px;
            --my: -9999px;
            --spot-size: 120px; /* change to increase/decrease spotlight */
            cursor: none;
            position: relative;
            overflow: hidden;
          }

          .about-section * { cursor: none; }

          /* Background layer (masked circle). Removed background-attachment to avoid viewport-anchored flash */
          .bg-layer {
            position: absolute;
            inset: 0;
            background-image: url('./src/assets/Gemini_Generated_Image_72lhqo72lhqo72lh.png');
            background-size: cover;
            background-position: center;
            opacity: 0;
            transition: opacity 0.28s ease-in-out;
            pointer-events: none;
            z-index: 1;

            /* radial mask centered at CSS vars --mx / --my */
            -webkit-mask-image: radial-gradient(circle var(--spot-size) at var(--mx) var(--my), black 0%, rgba(0,0,0,0.9) 55%, transparent 75%);
            mask-image: radial-gradient(circle var(--spot-size) at var(--mx) var(--my), black 0%, rgba(0,0,0,0.9) 55%, transparent 75%);
            -webkit-mask-repeat: no-repeat;
            mask-repeat: no-repeat;
            -webkit-mask-position: 0 0;
            mask-position: 0 0;
          }

          /* Visible only when both conditions met (JS toggles class) */
          .bg-layer.visible { opacity: 1; }

          /* Decorative spotlight (optional) */
          .cursor-spotlight {
            position: absolute;
            width: var(--spot-size);
            height: var(--spot-size);
            border-radius: 50%;
            pointer-events: none;
            z-index: 2;
            transform: translate(-50%, -50%);
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
          }
        `,
        }}
      />

      <section
        ref={sectionRef}
        className="about-section w-full min-h-screen bg-[#e8e6df] flex items-center justify-center px-6 py-20 relative"
      >
        {/* background masked layer */}
        <div className={`bg-layer ${showBackground ? 'visible' : ''}`} />

        {/* optional spotlight element (purely decorative) */}
        {showBackground && (
          <div
            className="cursor-spotlight"
            style={{
              left: `${mousePos.x}px`,
              top: `${mousePos.y}px`,
              opacity: showBackground ? 1 : 0,
            }}
          />
        )}

        <div className="max-w-5xl w-full text-center relative z-20 content-wrap">
          {/* About Me Label */}
          <div className="mb-8">
            <p
              className="text-sm md:text-base tracking-[0.3em] uppercase text-gray-700 font-semibold"
              style={{ fontFamily: "'Libre Franklin', sans-serif" }}
            >
              ABOUT ME
            </p>
          </div>

          {/* Main Heading */}
          <h1
            className="text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-12 text-gray-900"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900 }}
          >
            <span className="block md:inline">A versatile full-stack developer </span>
            <span className="block md:inline">on a mission to build </span>
            <span className="block md:inline">scalable digital solutions.</span>
          </h1>

          {/* Subheading */}
          <div className="max-w-3xl mx-auto mb-16">
            <p
              className="text-base md:text-lg leading-relaxed text-gray-800 font-bold"
              style={{ fontFamily: "'Libre Franklin', sans-serif" }}
            >
              I create robust applications and dynamic websites that deliver seamless
              user experiences, leveraging Python backends, WordPress customization,
              and modern React frontends to bring your vision to life.
            </p>
          </div>

          {/* CTA Button */}
          <div className="inline-block">
            <div className="border-t-2 border-b-2 border-dashed border-gray-800 py-4 px-8">
              <button
                className="text-xl md:text-2xl font-bold uppercase tracking-wider text-gray-900 flex items-center gap-3 hover:gap-5 transition-all duration-300"
                style={{ fontFamily: "'Libre Franklin', sans-serif" }}
              >
                Learn More
                <span className="text-2xl md:text-3xl">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHeroSection;
