import React, { useEffect, useState } from 'react';

const Loader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Keep loader for 2.5 seconds, then trigger fade out
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      // Wait for fade out animation (0.5s) then call onComplete
      setTimeout(onComplete, 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const title = "YOGESH";
  const letters = title.split('');

  return (
    <div
      className={`fixed inset-0 z-[999] flex items-center justify-center bg-[#030014] transition-opacity duration-500 ${
        isFadingOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center">
        <h1
          className="text-white font-black tracking-widest flex items-center gap-2"
          style={{ fontSize: 'clamp(40px, 8vw, 80px)' }}
        >
          {letters.map((letter, index) => (
            <span
              key={index}
              className="inline-block animate-pulse"
              style={{
                animationDelay: `${index * 0.15}s`,
                animationDuration: '1.5s',
              }}
            >
              {letter}
            </span>
          ))}
          <span className="inline-block w-4 h-4 rounded-full bg-violet-500 animate-ping ml-4" />
        </h1>
        <div className="mt-8 h-1 w-48 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-violet-500 to-pink-500 animate-loader-bar" />
        </div>
      </div>
      
      <style>{`
        @keyframes loader-bar {
          0% { width: 0%; opacity: 1; }
          100% { width: 100%; opacity: 0; }
        }
        .animate-loader-bar {
          animation: loader-bar 2.5s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Loader;
