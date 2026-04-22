import React, { useEffect, useRef, useState } from 'react';

const Education: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const certifications = [
    { name: 'Python Backend Development', issuer: 'Professional Training', year: '2024' },
    { name: 'Django & REST Framework', issuer: 'Hands-on Projects', year: '2024' },
    { name: 'Git & Version Control', issuer: 'Industry Practice', year: '2024' },
    { name: 'Web Scraping & Automation', issuer: 'Self-taught', year: '2023' },
  ];

  const coursework = [
    'Data Structures & Algorithms',
    'Object-Oriented Programming',
    'Database Management Systems',
    'Web Development',
    'Cloud Computing',
    'Software Engineering',
    'Computer Networks',
    'Operating Systems',
  ];

  return (
    <section
      id="education"
      ref={sectionRef}
      className="w-full bg-transparent text-white section-padding relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-[500px] h-[500px] rounded-full blur-[160px] opacity-[0.05]"
          style={{
            background: 'radial-gradient(circle, rgba(245,158,11,0.5) 0%, transparent 70%)',
            top: '20%',
            left: '-10%',
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div
          className="text-center mb-16 lg:mb-20"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.7s cubic-bezier(0.16,0.84,0.44,1)',
          }}
        >
          <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-amber-400 font-semibold mb-4">
            EDUCATION
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6">
            Academic{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Foundation
            </span>
          </h2>
        </div>

        {/* Main Education Card */}
        <div
          className="mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.7s cubic-bezier(0.16,0.84,0.44,1) 0.1s',
          }}
        >
          <div className="glass-card p-8 sm:p-10 relative overflow-hidden hover:border-amber-500/20 transition-all duration-500 group">
            {/* Decorative year */}
            <div className="absolute -top-4 -right-4 text-[120px] sm:text-[180px] font-black text-white/[0.02] select-none leading-none">
              2024
            </div>

            <div className="relative z-10">
              {/* Badge */}
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-bold tracking-widest uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Graduated July 2024
              </span>

              {/* Degree */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-2 group-hover:text-amber-300 transition-colors duration-300">
                Bachelor in Computer Application
              </h3>
              <p className="text-lg sm:text-xl text-amber-400/70 font-semibold mb-2">
                East West School of Business Management
              </p>
              <p className="text-sm text-gray-500 mb-6">Yelahanka, Bengaluru</p>

              <p className="text-base text-gray-400 leading-relaxed max-w-2xl mb-8">
                Graduated with a comprehensive understanding of computer science fundamentals,
                software engineering principles, and modern web technologies. Built a strong
                foundation that powers my current backend development expertise.
              </p>

              {/* Coursework tags */}
              <div>
                <p className="text-xs text-gray-500 font-semibold tracking-widest uppercase mb-3">
                  Key Coursework
                </p>
                <div className="flex flex-wrap gap-2">
                  {coursework.map((course) => (
                    <span
                      key={course}
                      className="text-xs font-medium text-gray-300 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 hover:text-white hover:border-amber-500/20 transition-all duration-300 cursor-default"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.7s cubic-bezier(0.16,0.84,0.44,1) 0.3s',
          }}
        >
          <p className="text-xs text-gray-500 font-semibold tracking-widest uppercase mb-6 text-center">
            Skills Training & Practice
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="glass-card p-5 flex items-start gap-4 hover:border-amber-500/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0 text-lg">
                  🏆
                </div>
                <div>
                  <p className="text-sm font-bold text-white mb-0.5">{cert.name}</p>
                  <p className="text-xs text-gray-500">
                    {cert.issuer} • {cert.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
