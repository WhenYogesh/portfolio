import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-m">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 lg:w-7 lg:h-7 bg-white rounded-sm flex items-center justify-center">
              <div className="w-3 h-3 lg:w-3.5 lg:h-3.5 bg-black rounded-full"></div>
            </div>
            <span className="text-xl lg:text-2xl font-semibold text-white">YOGESH</span>
          </div>

          {/* Menu Button */}
          <button className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-gray-300 transition-colors">
            <div className="flex flex-col gap-1.5">
              <div className="w-5 h-0.5 bg-white"></div>
              <div className="w-5 h-0.5 bg-white"></div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;