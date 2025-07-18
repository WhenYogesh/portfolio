import React from 'react';

const Banner: React.FC = () => {
  const text =
    'Actively seeking opportunities in the tech industry — open to roles in data, AI, and software development.';

  return (
    <div className="w-full bg-gray-100 py-14 overflow-hidden">
      <div className="w-[200%] flex animate-marquee space-x-16 font-nunito font-semibold text-xl md:text-2xl xl:text-3xl text-yellow-500 whitespace-nowrap">
        <div className="flex space-x-16">
          {[...Array(6)].map((_, i) => (
            <span key={`left-${i}`} className="min-w-max">{text}</span>
          ))}
        </div>
        <div className="flex space-x-16">
          {[...Array(6)].map((_, i) => (
            <span key={`right-${i}`} className="min-w-max">{text}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
