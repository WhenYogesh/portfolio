import React, { useEffect, useRef } from 'react';

const SpaceBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const stars: { x: number; y: number; radius: number; speed: number; alpha: number; }[] = [];

    // Increase star count for a better effect
    for (let i = 0; i < 350; i++) {
        stars.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 1.5,
            speed: Math.random() * 0.4 + 0.1,
            alpha: Math.random()
        });
    }

    let animationFrameId: number;

    const render = () => {
        // Draw deep space background
        const gradient = ctx.createLinearGradient(0, 0, 0, height);
        gradient.addColorStop(0, '#000000');
        gradient.addColorStop(0.5, '#050515');
        gradient.addColorStop(1, '#000000');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);

        stars.forEach(star => {
            star.y -= star.speed;
            
            // Slowly twinkle by altering alpha slightly
            star.alpha = star.alpha + (Math.random() - 0.5) * 0.05;
            if (star.alpha < 0.1) star.alpha = 0.1;
            if (star.alpha > 1) star.alpha = 1;

            if (star.y < 0) {
                star.y = height;
                star.x = Math.random() * width;
            }

            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
            
            // Add subtle glow
            if (star.radius > 1) {
                ctx.shadowBlur = 6;
                ctx.shadowColor = 'white';
            } else {
                ctx.shadowBlur = 0;
            }
            
            ctx.fill();
        });

        animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
        window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-50 pointer-events-none"
    />
  );
};

export default SpaceBackground;
