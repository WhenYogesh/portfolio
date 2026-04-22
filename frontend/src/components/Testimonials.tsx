import React, { useState, useEffect, useRef } from 'react';

interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  avatar: string;
}

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Founder',
    company: 'TechNova Solutions',
    text: 'Yogesh delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and problem-solving skills are remarkable. The site performance improved by 60%.',
    rating: 5,
    avatar: 'PS',
  },
  {
    id: 2,
    name: 'Rahul Verma',
    role: 'Product Manager',
    company: 'DataFlow Inc.',
    text: 'Working with Yogesh on our web scraping infrastructure was a game-changer. He built a robust pipeline that handles millions of records daily with incredible reliability.',
    rating: 5,
    avatar: 'RV',
  },
  {
    id: 3,
    name: 'Ananya Reddy',
    role: 'Creative Director',
    company: 'PixelCraft Studio',
    text: 'The WordPress theme Yogesh built for our agency is stunning. Clean code, fast load times, and the client loved the custom admin panel. Truly a professional developer.',
    rating: 5,
    avatar: 'AR',
  },
  {
    id: 4,
    name: 'Karthik Nair',
    role: 'CTO',
    company: 'StartupHub',
    text: 'Yogesh brings both technical depth and creative vision. His full-stack capabilities made him an invaluable part of our team. Would highly recommend for any web project.',
    rating: 5,
    avatar: 'KN',
  },
];

const avatarGradients = [
  'from-violet-500 to-purple-600',
  'from-emerald-500 to-teal-600',
  'from-amber-500 to-orange-600',
  'from-sky-500 to-blue-600',
];

const Testimonials: React.FC = () => {
  const [active, setActive] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const timerRef = useRef<number>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto-rotate
  useEffect(() => {
    if (!isVisible) return;
    timerRef.current = window.setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timerRef.current);
  }, [isVisible]);

  const handleDotClick = (idx: number) => {
    setActive(idx);
    clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="w-full bg-transparent text-white section-padding relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-[500px] h-[500px] rounded-full blur-[160px] opacity-[0.06]"
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,0.6) 0%, transparent 70%)',
            bottom: '10%',
            right: '-10%',
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-violet-400 font-semibold mb-4">
            TESTIMONIALS
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6">
            What Clients{' '}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Say
            </span>
          </h2>
          <p className="text-gray-400 text-base lg:text-lg max-w-2xl mx-auto">
            Feedback from people I've had the pleasure of working with.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative min-h-[300px] sm:min-h-[280px]">
            {testimonials.map((t, idx) => (
              <div
                key={t.id}
                className="absolute inset-0 flex flex-col items-center"
                style={{
                  opacity: idx === active ? 1 : 0,
                  transform: idx === active ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.98)',
                  transition: 'all 0.6s cubic-bezier(0.16,0.84,0.44,1)',
                  pointerEvents: idx === active ? 'auto' : 'none',
                }}
              >
                {/* Quote mark */}
                <div className="text-5xl sm:text-6xl text-violet-500/20 font-serif mb-4 select-none">"</div>

                {/* Text */}
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 text-center leading-relaxed mb-8 max-w-2xl font-medium italic">
                  {t.text}
                </p>

                {/* Avatar + Info */}
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${avatarGradients[idx % avatarGradients.length]} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm sm:text-base">{t.name}</p>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mt-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2.5 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  idx === active
                    ? 'w-8 bg-violet-400'
                    : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
