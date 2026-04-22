import React, { useEffect, useRef, useState } from 'react';

const services = [
  {
    id: 1,
    title: 'BACKEND SYSTEMS',
    subtitle: 'PYTHON • DJANGO • FASTAPI',
    description: 'Building scalable backend systems with secure API endpoints, Google Authentication, user management, and efficient data processing.',
    tech: ['FastAPI', 'Django', 'Flask', 'REST APIs'],
    icon: '⚙️',
    gradient: 'from-violet-500 to-indigo-500',
    glow: 'rgba(139,92,246,0.3)',
  },
  {
    id: 2,
    title: 'WEB SCRAPING',
    subtitle: 'DATA EXTRACTION & AUTOMATION',
    description: 'Advanced web scraping solutions using Selectolax, BeautifulSoup, and Selenium for automated data collection and processing.',
    tech: ['Selectolax', 'BeautifulSoup', 'Scrapy', 'Selenium'],
    icon: '🕷️',
    gradient: 'from-fuchsia-500 to-pink-500',
    glow: 'rgba(217,70,239,0.3)',
  },
  {
    id: 3,
    title: 'WORDPRESS & WIX',
    subtitle: 'CMS DEVELOPMENT',
    description: 'Custom WordPress themes, WooCommerce stores, WIX sites with backend integrations, SEO optimization, and performance tuning.',
    tech: ['WordPress', 'WIX', 'PHP', 'WooCommerce', 'SEO'],
    icon: '🌐',
    gradient: 'from-indigo-500 to-sky-500',
    glow: 'rgba(99,102,241,0.3)',
  },
  {
    id: 4,
    title: 'REACT FRONTENDS',
    subtitle: 'MODERN UI DEVELOPMENT',
    description: 'Creating responsive, modern web interfaces using React.js with state management, component architecture, and smooth animations.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Angular'],
    icon: '🎨',
    gradient: 'from-violet-400 to-fuchsia-500',
    glow: 'rgba(167,139,250,0.3)',
  },
  {
    id: 5,
    title: 'API DEVELOPMENT',
    subtitle: 'REST & AUTHENTICATION',
    description: 'Building robust REST APIs with proper authentication (Google Auth), MongoDB/Redis integration, and comprehensive documentation.',
    tech: ['REST APIs', 'MongoDB', 'Redis', 'Docker', 'Deployment'],
    icon: '🔗',
    gradient: 'from-pink-500 to-rose-500',
    glow: 'rgba(236,72,153,0.3)',
  },
];

const VeggieTDesigner: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.getAttribute('data-idx'));
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set(prev).add(idx));
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="w-full bg-transparent text-white section-padding relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-[160px] opacity-[0.05]"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.6) 0%, transparent 70%)',
            top: '10%',
            left: '-15%',
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full blur-[140px] opacity-[0.04]"
          style={{
            background: 'radial-gradient(circle, rgba(236,72,153,0.5) 0%, transparent 70%)',
            bottom: '10%',
            right: '-10%',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-violet-400 font-semibold mb-4">
            SERVICES & EXPERTISE
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6">
            What I{' '}
            <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
              Deliver
            </span>
          </h2>
          <p className="text-gray-400 text-base lg:text-lg max-w-2xl mx-auto">
            Specialized solutions tailored to your needs, from robust backend systems and automated data pipelines to engaging modern frontends.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {services.map((service, idx) => {
            const isVisible = visibleCards.has(idx);
            // Make the first card span 2 columns on tablet/desktop if we want a bento-style look
            const isFeatured = idx === 0 || idx === 3;
            
            return (
              <div
                key={service.id}
                data-idx={idx}
                ref={(el) => { cardRefs.current[idx] = el; }}
                className={`group ${isFeatured ? 'md:col-span-2 lg:col-span-2' : ''}`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.7s cubic-bezier(0.16,0.84,0.44,1) ${idx * 100}ms`,
                }}
              >
                <div className="glass-card p-8 h-full flex flex-col justify-between hover:border-violet-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden">
                  
                  {/* Subtle glowing background on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(circle at center, ${service.glow} 0%, transparent 70%)` }}
                  />

                  <div>
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} p-[1px] flex items-center justify-center`}>
                        <div className="w-full h-full bg-[#030014] rounded-[15px] flex items-center justify-center text-2xl">
                          {service.icon}
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                        0{service.id}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs tracking-wider font-semibold text-violet-400 mb-4">
                      {service.subtitle}
                    </p>
                    <p className="text-sm text-gray-400 leading-relaxed mb-8">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {service.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-medium text-gray-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full group-hover:border-white/20 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VeggieTDesigner;