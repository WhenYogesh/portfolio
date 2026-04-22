import React, { useEffect, useRef, useState } from 'react';

interface ExperienceItem {
  id: number;
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
  type: 'work' | 'internship' | 'education';
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    period: 'September 2025 — Present',
    role: 'WordPress Developer',
    company: 'Tekhportal Digital Agency',
    location: 'Full Time',
    description:
      'Building and managing WordPress websites with end-to-end ownership of theme customization, plugin integration, and performance optimization.',
    highlights: [
      'Theme customization, plugin integration & WooCommerce setup',
      'SEO optimization and performance enhancements',
      'Full-stack development using PHP and Python for backend solutions',
      'React.js for modern, responsive web interfaces',
      'Scalable web applications & high-quality digital solutions',
    ],
    technologies: ['WordPress', 'PHP', 'Python', 'React.js', 'WooCommerce', 'SEO'],
    type: 'work',
  },
  {
    id: 2,
    period: 'December 2024 — August 2025',
    role: 'Backend Developer',
    company: 'Xtransmatrix Consulting Services Pvt Ltd',
    location: 'Bengaluru',
    description:
      'Worked as a Backend Python Developer, building backend systems for a designing course platform and a merchandise site using FastAPI and Python.',
    highlights: [
      'Integrated Google Authentication & user management',
      'Developed secure API endpoints with FastAPI',
      'MongoDB and Redis for data storage & caching',
      'Web scraping using Selectolax',
      'Built & managed websites using WordPress and Wix',
      'Git for version control & backend best practices',
    ],
    technologies: ['Python', 'FastAPI', 'MongoDB', 'Redis', 'WordPress', 'Wix', 'Selectolax', 'Git'],
    type: 'work',
  },
  {
    id: 3,
    period: 'July 2024 — August 2024',
    role: 'Backend Developer Intern',
    company: 'Karunadu Technologies Pvt Ltd',
    location: 'Bengaluru',
    description:
      'Worked on a student admission management system using Python and Django. Primary responsibility was developing and optimizing features for student registration and enrollment.',
    highlights: [
      'Student admission management system development',
      'Student registration & enrollment features',
      'Python and Django backend development',
      'Feature optimization & code quality',
    ],
    technologies: ['Python', 'Django', 'SQLite', 'HTML', 'CSS'],
    type: 'internship',
  },
  {
    id: 4,
    period: 'Graduated July 2024',
    role: 'Bachelor in Computer Application (BCA)',
    company: 'East West School of Business Management',
    location: 'Yelahanka, Bengaluru',
    description:
      'Graduated with a strong foundation in computer science, software engineering, and web technologies.',
    highlights: [
      'Computer Science fundamentals',
      'Software engineering & web development',
      'Data structures & algorithms',
    ],
    technologies: ['Data Structures', 'Algorithms', 'Web Development', 'Cloud Computing'],
    type: 'education',
  },
];

const typeConfig: Record<string, { dot: string; badge: string; badgeText: string; glow: string }> = {
  work: {
    dot: 'bg-violet-500',
    badge: 'bg-violet-500/10 border-violet-500/20',
    badgeText: 'text-violet-400',
    glow: 'rgba(139,92,246,0.4)',
  },
  internship: {
    dot: 'bg-sky-500',
    badge: 'bg-sky-500/10 border-sky-500/20',
    badgeText: 'text-sky-400',
    glow: 'rgba(14,165,233,0.4)',
  },
  education: {
    dot: 'bg-amber-500',
    badge: 'bg-amber-500/10 border-amber-500/20',
    badgeText: 'text-amber-400',
    glow: 'rgba(245,158,11,0.4)',
  },
};

const Experience: React.FC = () => {
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
      { threshold: 0.15, rootMargin: '0px 0px -30px 0px' }
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      className="w-full bg-transparent text-white section-padding relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-[180px] opacity-[0.05]"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.6) 0%, transparent 70%)',
            top: '30%',
            left: '-15%',
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full blur-[140px] opacity-[0.04]"
          style={{
            background: 'radial-gradient(circle, rgba(14,165,233,0.5) 0%, transparent 70%)',
            bottom: '10%',
            right: '-10%',
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-violet-400 font-semibold mb-4">
            EXPERIENCE & EDUCATION
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6">
            My{' '}
            <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-gray-400 text-base lg:text-lg max-w-2xl mx-auto">
            From learning the fundamentals at university to building production backends at scale — here's my professional path.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-6 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-violet-500/20 to-transparent lg:-translate-x-px" />

          {experiences.map((exp, idx) => {
            const isVisible = visibleCards.has(idx);
            const isEven = idx % 2 === 0;
            const colors = typeConfig[exp.type];

            return (
              <div
                key={exp.id}
                data-idx={idx}
                ref={(el) => { cardRefs.current[idx] = el; }}
                className={`relative flex mb-10 lg:mb-14 ${
                  isEven ? 'lg:justify-start' : 'lg:justify-end'
                }`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                  transition: `all 0.7s cubic-bezier(0.16,0.84,0.44,1) ${idx * 120}ms`,
                }}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-4 sm:left-6 lg:left-1/2 w-3.5 h-3.5 rounded-full ${colors.dot} border-[3px] border-[#030014] transform -translate-x-1/2 mt-6 z-10`}
                  style={{ boxShadow: `0 0 16px ${colors.glow}` }}
                />

                {/* Card */}
                <div
                  className={`ml-10 sm:ml-14 lg:ml-0 w-full lg:w-[calc(50%-3rem)] ${
                    isEven ? '' : 'lg:ml-[calc(50%+3rem)]'
                  }`}
                >
                  <div className="glass-card p-5 sm:p-6 hover:border-violet-500/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/5 group">
                    {/* Period & Type badge */}
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-xs font-mono text-gray-500">{exp.period}</span>
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${colors.badge} ${colors.badgeText}`}
                      >
                        {exp.type}
                      </span>
                    </div>

                    {/* Role & Company */}
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-violet-300 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-violet-400/70 font-semibold mb-1">{exp.company}</p>
                    <p className="text-xs text-gray-500 mb-4">{exp.location}</p>

                    {/* Description */}
                    <p className="text-sm text-gray-400 leading-relaxed mb-4">{exp.description}</p>

                    {/* Highlights */}
                    <ul className="space-y-1.5 mb-4">
                      {exp.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2 text-xs text-gray-400">
                          <span className="text-violet-400 mt-0.5 flex-shrink-0">▸</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-medium text-gray-300 bg-white/5 px-2 py-0.5 rounded-md border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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

export default Experience;
