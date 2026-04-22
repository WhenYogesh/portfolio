import React, { useState, useRef, useEffect, useCallback } from 'react';
import profileImage from '/images/bw.jpg';

/* ──────────────────────────────────────────────
   Solar-system themed hero with orbital rings,
   planet particles, and fully centred layout.
   ────────────────────────────────────────────── */

interface Planet {
  id: number;
  orbitRadius: number;
  size: number;
  speed: number;
  angle: number;
  color: string;
  glowColor: string;
  hasRing: boolean;
  label: string;
}

const PLANETS: Planet[] = [
  { id: 1, orbitRadius: 160, size: 10, speed: 0.008, angle: 0, color: '#a78bfa', glowColor: 'rgba(167,139,250,0.6)', hasRing: false, label: 'Python' },
  { id: 2, orbitRadius: 210, size: 8, speed: -0.006, angle: 2.1, color: '#818cf8', glowColor: 'rgba(129,140,248,0.6)', hasRing: true, label: 'Django' },
  { id: 3, orbitRadius: 265, size: 12, speed: 0.004, angle: 4.2, color: '#6366f1', glowColor: 'rgba(99,102,241,0.6)', hasRing: false, label: 'React' },
  { id: 4, orbitRadius: 320, size: 7, speed: -0.003, angle: 1.0, color: '#c084fc', glowColor: 'rgba(192,132,252,0.5)', hasRing: false, label: 'FastAPI' },
  { id: 5, orbitRadius: 375, size: 9, speed: 0.0025, angle: 3.5, color: '#e879f9', glowColor: 'rgba(232,121,249,0.5)', hasRing: true, label: 'APIs' },
];

const CreativeDesignerHero: React.FC = () => {
  const [hoveredLetter, setHoveredLetter] = useState<number | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const cursorRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const planetsRef = useRef<Planet[]>(PLANETS.map(p => ({ ...p })));
  const [isHovering, setIsHovering] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const title = "YOGESH V";
  const letters = title.split('');

  const leftServices = [
    { title: "/BACKEND DEVELOPMENT", key: 1 },
    { title: "/REST API DESIGN", key: 2 },
    { title: "/WEB SCRAPING", key: 3 },
  ];

  const rightServices = [
    { title: "/WORDPRESS & WIX", key: 4 },
    { title: "/PYTHON & DJANGO", key: 5 },
    { title: "/REACT FRONTEND", key: 6 },
  ];

  const allServices = [...leftServices, ...rightServices];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  /* ── Solar system canvas animation ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = 0, h = 0;
    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      w = parent.clientWidth;
      h = parent.clientHeight;
      canvas.width = w * devicePixelRatio;
      canvas.height = h * devicePixelRatio;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const cx = w / 2;
      const cy = h / 2;

      // Orbit rings
      planetsRef.current.forEach(p => {
        ctx.beginPath();
        ctx.arc(cx, cy, p.orbitRadius, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(139,92,246,0.07)';
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Planets
      planetsRef.current.forEach(p => {
        p.angle += p.speed;
        const px = cx + Math.cos(p.angle) * p.orbitRadius;
        const py = cy + Math.sin(p.angle) * p.orbitRadius;

        // Glow
        const grad = ctx.createRadialGradient(px, py, 0, px, py, p.size * 3);
        grad.addColorStop(0, p.glowColor);
        grad.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(px, py, p.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Body
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // Ring
        if (p.hasRing) {
          ctx.beginPath();
          ctx.ellipse(px, py, p.size * 2, p.size * 0.5, 0.4, 0, Math.PI * 2);
          ctx.strokeStyle = p.color + '80';
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }

        // Label
        ctx.font = '500 9px Inter, sans-serif';
        ctx.fillStyle = 'rgba(255,255,255,0.35)';
        ctx.textAlign = 'center';
        ctx.fillText(p.label, px, py - p.size - 6);
      });

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  /* ── Cursor tracking ── */
  const updateCursor = useCallback(() => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `${mouseRef.current.x}px`;
      cursorRef.current.style.top = `${mouseRef.current.y}px`;
    }
    if (imageRef.current) {
      imageRef.current.style.left = `${mouseRef.current.x + 20}px`;
      imageRef.current.style.top = `${mouseRef.current.y + 20}px`;
    }
    rafRef.current = requestAnimationFrame(updateCursor);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const handleMouseEnter = () => { setIsHovering(true); rafRef.current = requestAnimationFrame(updateCursor); };
    const handleMouseLeave = () => { setIsHovering(false); setHoveredLetter(null); cancelAnimationFrame(rafRef.current); };

    section.addEventListener('mousemove', handleMouseMove, { passive: true });
    section.addEventListener('mouseenter', handleMouseEnter);
    section.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      section.removeEventListener('mousemove', handleMouseMove);
      section.removeEventListener('mouseenter', handleMouseEnter);
      section.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [updateCursor]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="w-full min-h-screen bg-transparent text-white overflow-hidden relative"
      style={{ cursor: isHovering ? 'none' : 'auto' }}
    >
      {/* ── Inline keyframes ── */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
        @keyframes hero-slide-up {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes hero-scale-in {
          from { opacity: 0; transform: scale(0.7); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes orbit-pulse {
          0%, 100% { box-shadow: 0 0 40px 8px rgba(139,92,246,0.15), 0 0 80px 20px rgba(99,102,241,0.08); }
          50% { box-shadow: 0 0 60px 16px rgba(139,92,246,0.25), 0 0 120px 40px rgba(99,102,241,0.12); }
        }
        @keyframes spin-slow { to { transform: rotate(360deg); } }
        @keyframes spin-reverse { to { transform: rotate(-360deg); } }
        @keyframes letter-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .hero-animate { animation: hero-slide-up 1s cubic-bezier(0.16,0.84,0.44,1) forwards; }
        .hero-fade { animation: hero-fade-in 1.2s ease forwards; }
        .hero-scale { animation: hero-scale-in 1.2s cubic-bezier(0.16,0.84,0.44,1) forwards; }
      `}</style>

      {/* ── Ambient bg blobs ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 via-transparent to-indigo-950/20" />
        <div className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-15"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)', top: '10%', left: '-10%', animation: 'float-slow 20s ease-in-out infinite' }} />
        <div className="absolute w-[500px] h-[500px] rounded-full blur-[100px] opacity-10"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.4) 0%, transparent 70%)', bottom: '5%', right: '-5%', animation: 'float-slow 25s ease-in-out infinite reverse' }} />
      </div>

      {/* ── Cursor glow ── */}
      {isHovering && (
        <div ref={cursorRef} className="absolute pointer-events-none z-50" style={{ transform: 'translate(-50%, -50%)', willChange: 'left, top' }}>
          <div className={`relative transition-transform duration-300 ${hoveredLetter !== null ? 'scale-150' : 'scale-100'}`}>
            <div className={`absolute rounded-full blur-xl transition-all duration-500 -translate-x-1/2 -translate-y-1/2 ${hoveredLetter !== null ? 'bg-violet-500/40 w-16 h-16' : 'bg-indigo-400/25 w-8 h-8'}`} />
            <div className={`relative rounded-full transition-all duration-300 shadow-2xl ${hoveredLetter !== null ? 'bg-white w-3 h-3 shadow-white/60' : 'bg-white/80 w-2 h-2 shadow-white/40'}`} />
          </div>
        </div>
      )}

      {/* ── Cursor image follower ── */}
      {hoveredLetter !== null && (
        <div ref={imageRef} className="absolute pointer-events-none z-50 transition-opacity duration-300" style={{ transform: 'translate(0, 0)', willChange: 'left, top' }}>
          <div className="w-28 h-36 bg-gray-900 overflow-hidden rounded-xl shadow-2xl shadow-violet-500/20 border border-white/10">
            <img src={profileImage} alt="Yogesh V" className="w-full h-full object-cover" />
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════
          CONTENT
      ═══════════════════════════════════════ */}
      <div className="relative z-10 w-full min-h-screen px-4 sm:px-6 lg:px-8 xl:px-12 py-8 lg:py-12">

        {/* ── MOBILE / TABLET ── */}
        <div className="lg:hidden flex flex-col items-center justify-center w-full pt-24 pb-12 mt-4">
          {/* Badge */}
          <div className={`mb-4 ${isLoaded ? 'hero-animate' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-[10px] font-bold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for work
            </span>
          </div>

          {/* Title */}
          <div className={`mb-2 text-center w-full ${isLoaded ? 'hero-animate' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <h1 className="font-black tracking-tighter text-white leading-[0.95]" style={{ fontSize: 'clamp(42px, 14vw, 80px)' }}>
              <span className="block">YOGESH</span>
              <span className="block bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">V</span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className={`mb-8 text-center ${isLoaded ? 'hero-animate' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
            <p className="text-base sm:text-lg font-bold text-gray-300 mb-1.5">Backend Developer</p>
            <p className="text-[10px] sm:text-xs tracking-[0.3em] font-medium text-gray-500 uppercase">Bengaluru, India</p>
          </div>

          {/* Solar orrery (mobile) – small version around image */}
          <div className={`mb-10 relative ${isLoaded ? 'hero-scale' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            {/* Orbit rings */}
            {[80, 110, 140].map((r, i) => (
              <div key={i} className="absolute rounded-full border border-violet-500/10 pointer-events-none"
                style={{ width: r * 2, height: r * 2, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', animation: i % 2 === 0 ? 'spin-slow 40s linear infinite' : 'spin-reverse 55s linear infinite' }}>
                <span className="absolute rounded-full" style={{
                  width: 6 + i * 2, height: 6 + i * 2,
                  background: ['#a78bfa', '#818cf8', '#e879f9'][i],
                  boxShadow: `0 0 8px ${['#a78bfa', '#818cf8', '#e879f9'][i]}`,
                  top: 0, left: '50%', transform: 'translate(-50%,-50%)',
                }} />
              </div>
            ))}
            <div className="w-40 sm:w-48 aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-xl shadow-violet-500/10 relative group mx-auto"
              style={{ animation: 'orbit-pulse 4s ease-in-out infinite' }}>
              <img src={profileImage} alt="Yogesh V" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>

          {/* Services */}
          <div className={`text-center space-y-1.5 px-4 mb-8 ${isLoaded ? 'hero-animate' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
            {allServices.map((s) => (
              <p key={s.key} className="text-[13px] sm:text-sm font-bold tracking-wide text-gray-400 hover:text-white transition-colors duration-300">{s.title}</p>
            ))}
          </div>

          {/* Contact */}
          <div className={`flex flex-col items-center gap-3 ${isLoaded ? 'hero-animate' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
              <span>📞 7996633015</span>
              <span>📍 Bengaluru</span>
            </div>
            <a href="mailto:yogesh.unique9844@gmail.com" className="text-xs underline text-gray-500 hover:text-violet-400 transition-colors">
              yogesh.unique9844@gmail.com
            </a>
          </div>
        </div>

        {/* ── DESKTOP ── */}
        <div className="hidden lg:flex flex-col w-full h-[calc(100vh-6rem)] relative">

          {/* Top bar */}
          <div className="flex justify-between items-start pt-24">
            <div className={`flex items-center gap-3 ${isLoaded ? 'hero-fade' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for work
              </span>
            </div>
            <div className={`text-xs tracking-[0.3em] font-light text-gray-500 ${isLoaded ? 'hero-fade' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
              BENGALURU, INDIA
            </div>
          </div>

          {/* ── Centre stage: name + solar system ── */}
          <div className="flex-1 flex items-center justify-center relative">

            {/* Solar system canvas (behind everything) */}
            <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />

            {/* Decorative CSS orbit rings */}
            {[200, 270, 340, 410].map((r, i) => (
              <div key={i} className="absolute rounded-full border pointer-events-none"
                style={{
                  width: r * 2, height: r * 2,
                  top: '50%', left: '50%',
                  transform: 'translate(-50%,-50%)',
                  borderColor: `rgba(139,92,246,${0.06 - i * 0.01})`,
                  animation: i % 2 === 0 ? 'spin-slow 60s linear infinite' : 'spin-reverse 80s linear infinite',
                }} />
            ))}

            {/* Name – layered below the solar system */}
            <div className="relative z-20 text-center">
              <p className={`text-lg xl:text-xl font-semibold text-gray-400 mb-4 tracking-widest uppercase ${isLoaded ? 'hero-animate' : 'opacity-0'}`}
                style={{ animationDelay: '0.2s' }}>
                Backend Developer
              </p>
              <h1
                className={`leading-[0.82] font-black tracking-[-0.03em] cursor-default select-none text-white ${isLoaded ? 'hero-animate' : 'opacity-0'}`}
                style={{ fontSize: 'clamp(80px, 12vw, 200px)', whiteSpace: 'nowrap', animationDelay: '0.4s' }}
              >
                {letters.map((letter, index) => (
                  <span
                    key={index}
                    className="inline-block transition-all duration-300 hover:text-violet-400"
                    onMouseEnter={() => setHoveredLetter(index)}
                    onMouseLeave={() => setHoveredLetter(null)}
                    style={{
                      transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                      willChange: 'transform',
                      animation: isLoaded ? `letter-float 3s ease-in-out ${index * 0.15}s infinite` : 'none',
                    }}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </span>
                ))}
              </h1>
              <p className={`mt-6 text-base xl:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed ${isLoaded ? 'hero-animate' : 'opacity-0'}`}
                style={{ animationDelay: '0.6s' }}>
                Building scalable & efficient APIs • Python • Django • FastAPI • React
              </p>
            </div>
          </div>

          {/* Services – flanking the bottom */}
          <div className={`absolute left-0 right-0 bottom-[22%] xl:bottom-[24%] z-30 px-4 xl:px-8 ${isLoaded ? 'hero-fade' : 'opacity-0'}`}
            style={{ animationDelay: '0.8s' }}>
            <div className="flex justify-between w-full max-w-7xl mx-auto">
              <div className="space-y-2">
                {leftServices.map((s) => (
                  <p key={s.key} className="text-sm xl:text-base 2xl:text-lg font-black tracking-tight text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer">{s.title}</p>
                ))}
              </div>
              <div className="space-y-2 text-right">
                {rightServices.map((s) => (
                  <p key={s.key} className="text-sm xl:text-base 2xl:text-lg font-black tracking-tight text-gray-400 hover:text-white hover:-translate-x-2 transition-all duration-300 cursor-pointer">{s.title}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className={`flex justify-between items-end pb-4 ${isLoaded ? 'hero-fade' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <p className="text-xs xl:text-sm tracking-[0.2em] font-medium text-gray-500">Know More</p>
                <svg className="w-4 h-4 text-gray-500" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </div>
              <h2 className="text-3xl xl:text-4xl 2xl:text-5xl font-black tracking-tight text-white hover:scale-105 transition-transform duration-300 cursor-pointer">
                BACKEND DEVELOPER
              </h2>
            </div>
            <div className="flex flex-col items-end gap-3">
              <div className="flex items-center gap-3">
                <p className="text-xs xl:text-sm tracking-[0.2em] font-medium text-gray-500">AVAILABLE FOR COLLABORATION</p>
                <svg className="w-4 h-4 text-gray-500" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </div>
              <a href="mailto:yogesh.unique9844@gmail.com" className="text-sm underline font-medium text-gray-400 hover:text-violet-400 transition-colors">
                yogesh.unique9844@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeDesignerHero;