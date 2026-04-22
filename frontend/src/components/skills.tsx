import { useEffect, useRef, useState } from 'react';

interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level: number }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Backend',
    icon: '⚡',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'Django', level: 88 },
      { name: 'FastAPI', level: 85 },
      { name: 'REST APIs', level: 92 },
      { name: 'PHP', level: 75 },
    ],
  },
  {
    title: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React', level: 85 },
      { name: 'Angular', level: 70 },
      { name: 'HTML & CSS', level: 92 },
      { name: 'JavaScript', level: 88 },
    ],
  },
  {
    title: 'Databases',
    icon: '🗄️',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'SQLite', level: 82 },
      { name: 'Redis', level: 78 },
    ],
  },
  {
    title: 'CMS & Platforms',
    icon: '🌐',
    skills: [
      { name: 'WordPress', level: 92 },
      { name: 'WIX', level: 85 },
      { name: 'WooCommerce', level: 80 },
    ],
  },
  {
    title: 'Data & AI',
    icon: '🤖',
    skills: [
      { name: 'Web Scraping', level: 90 },
      { name: 'Data Extraction', level: 85 },
      { name: 'LLM', level: 72 },
      { name: 'RAG', level: 70 },
    ],
  },
  {
    title: 'DevOps & Tools',
    icon: '🛠️',
    skills: [
      { name: 'Git & GitHub', level: 88 },
      { name: 'Docker', level: 75 },
      { name: 'Deployment & Hosting', level: 82 },
      { name: 'SEO', level: 80 },
    ],
  },
];

export default function VerticalConnectList() {
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
      id="skills"
      ref={sectionRef}
      className="w-full bg-transparent text-white section-padding relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-[500px] h-[500px] rounded-full blur-[150px] opacity-[0.06]"
          style={{
            background: 'radial-gradient(circle, rgba(236,72,153,0.5) 0%, transparent 70%)',
            top: '20%',
            right: '-10%',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-violet-400 font-semibold mb-4">
            SKILLS & TOOLS
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-white mb-6">
            Technologies I{' '}
            <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              Work With
            </span>
          </h2>
          <p className="text-gray-400 text-base lg:text-lg max-w-2xl mx-auto">
            From Python backends and REST APIs to React frontends and cloud deployment — here's my complete toolkit.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {skillCategories.map((category, idx) => {
            const isVisible = visibleCards.has(idx);
            return (
              <div
                key={category.title}
                data-idx={idx}
                ref={(el) => { cardRefs.current[idx] = el; }}
                className="group"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.7s cubic-bezier(0.16,0.84,0.44,1) ${idx * 100}ms`,
                }}
              >
                <div className="glass-card p-6 h-full hover:border-violet-500/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/5">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-2xl">{category.icon}</span>
                    <h3 className="text-lg font-bold text-white group-hover:text-violet-300 transition-colors duration-300">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills */}
                  <div className="space-y-3.5">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                          <span className="text-xs font-mono text-gray-500">{skill.level}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-violet-500 to-pink-500"
                            style={{
                              width: isVisible ? `${skill.level}%` : '0%',
                              transition: `width 1s cubic-bezier(0.16,0.84,0.44,1) ${idx * 100 + 400}ms`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-12 text-center">
          <p className="text-xs text-gray-500 font-semibold tracking-widest uppercase mb-4">Also experienced with</p>
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
            {['Selectolax', 'BeautifulSoup', 'Scrapy', 'Selenium', 'Tailwind CSS', 'TypeScript', 'PostgreSQL', 'Flask', 'Figma', 'AWS', 'GSAP', 'Three.js'].map((tech) => (
              <span
                key={tech}
                className="text-xs font-medium text-gray-400 bg-white/[0.03] border border-white/5 px-3 py-1.5 rounded-lg hover:text-white hover:border-violet-500/20 transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}