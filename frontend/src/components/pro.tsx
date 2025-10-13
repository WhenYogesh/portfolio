import React, { useEffect, useRef, useState } from "react";

// All skills (8 total) with one-word usage
const items = [
  { label: "My Skills", usage: "" },
  { label: "HTML5", usage: "Structure" },
  { label: "CSS3 (Sass)", usage: "Styling" },
  { label: "Tailwind CSS", usage: "Utility" },
  { label: "JavaScript (ES6+)", usage: "Logic" },
  { label: "TypeScript", usage: "Typing" },
  { label: "React.js", usage: "UI" },
  { label: "Next.js", usage: "SSR" },
];

export default function VerticalConnectList() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    itemRefs.current = itemRefs.current.slice(0, items.length);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-idx"));
            setActiveIndex(idx);
            history.replaceState(null, "", `#item-${idx}`);
          }
        });
      },
      {
        root: containerRef.current,
        threshold: 0.6,
      }
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen w-full bg-black text-white flex items-center justify-center py-4 relative overflow-hidden">
      <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.8s cubic-bezier(.16,.84,.44,1) both;
          }
        `}
      </style>

      <div
        ref={containerRef}
        className="w-full h-[88vh] overflow-y-auto snap-y snap-mandatory scrollbar-hide"
        aria-label="Vertical skills list"
      >
        {items.map((item, idx) => {
          const isActive = activeIndex === idx;

          return (
            <div
              key={item.label}
              id={`item-${idx}`}
              data-idx={idx}
              ref={(el) => {
                if (el) itemRefs.current[idx] = el;
              }}
              className={`snap-start min-h-[24vh] flex flex-col items-center justify-center px-6 sm:px-12 lg:px-40 transition-all duration-500 ease-out transform-gpu ${
                isActive ? "animate-fadeInUp" : ""
              }`}
              style={{
                backgroundColor: isActive ? "#1a1a1a" : "transparent",
                borderRadius: isActive ? "1rem" : "0",
              }}
            >
              <h2
                className={`font-serif text-center leading-tight transition-all duration-500 ease-out transform-gpu ${
                  isActive
                    ? "text-[4.6rem] sm:text-[5.6rem] md:text-[6.2rem] scale-100"
                    : "text-[2.4rem] sm:text-[3rem] md:text-[3.6rem] opacity-70 scale-95"
                }`}
                style={{ WebkitFontSmoothing: "antialiased" }}
              >
                <span
                  className={`inline-block transition-all duration-500 ${
                    isActive
                      ? "bg-gradient-to-b from-orange-400 to-rose-600 bg-clip-text text-transparent drop-shadow-[0_8px_18px_rgba(0,0,0,0.6)] tracking-wide"
                      : "text-white tracking-normal"
                  }`}
                >
                  {item.label}
                </span>
              </h2>

              {isActive && idx !== 0 && (
                <>
                  <p className="mt-2 text-sm sm:text-base text-orange-400 font-semibold animate-fadeInUp">
                    {item.usage}
                  </p>
                  <p className="mt-1 text-xs sm:text-sm text-gray-400 max-w-xl text-center animate-fadeInUp">
                    Experienced with building responsive, accessible, and high-performance web apps.
                  </p>
                </>
              )}
            </div>
          );
        })}
      </div>

      <a
        href="#item-0"
        className="fixed right-6 bottom-6 hidden sm:inline-block rounded-full bg-rose-600/80 px-4 py-2 text-sm font-medium text-white shadow-lg"
      >
        Top
      </a>
    </section>
  );
}

