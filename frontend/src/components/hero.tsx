import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Status Badge */}
          <div className="flex justify-center mb-8 lg:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm lg:text-base text-gray-800 font-medium">Availble to work</span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="text-center space-y-4 lg:space-y-6 mb-8 lg:mb-12">
            {/* First Line */}
            <div className="flex items-center justify-center gap-3 lg:gap-6 flex-wrap">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold text-black tracking-tight">
                Brands
              </h1>
              <div className="relative group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 bg-white rounded-2xl lg:rounded-3xl shadow-lg flex items-center justify-center transform group-hover:rotate-3 transition-transform">
                  <div className="w-12 h-8 sm:w-14 sm:h-10 lg:w-20 lg:h-14 bg-gray-100 rounded-lg relative overflow-hidden">
                    <div className="absolute inset-2 border border-gray-300 rounded">
                      <div className="text-[6px] lg:text-[8px] font-mono text-gray-400 p-1 leading-tight">
                        &lt;div&gt;<br/>
                        &nbsp;&nbsp;code<br/>
                        &lt;/div&gt;
                      </div>
                    </div>
                    <svg className="absolute bottom-1 right-1 w-8 h-8 lg:w-12 lg:h-12" viewBox="0 0 40 40" fill="none">
                      <path d="M5 25 Q 15 15, 25 20 T 35 15" stroke="#ef4444" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold text-gray-400 tracking-tight">
                Grow
              </h1>
            </div>

            {/* Second Line */}
            <div className="flex items-center justify-center gap-3 lg:gap-6 flex-wrap">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold text-gray-400 tracking-tight">
                Fast
              </h1>
              <div className="relative group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 bg-gray-900 rounded-2xl lg:rounded-3xl shadow-lg flex items-center justify-center transform group-hover:rotate-3 transition-transform">
                  <svg className="w-8 h-8 lg:w-12 lg:h-12" viewBox="0 0 40 40" fill="white">
                    <path d="M8 8 L32 8 L32 20 L20 20 L20 32 L8 32 Z" opacity="0.9"/>
                  </svg>
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold text-black tracking-tight">
                With us
              </h1>
            </div>
          </div>

          {/* Description */}
          <p className="text-center text-gray-600 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-10 lg:mb-16 px-4">
            We don't just make brands pretty — we craft<br className="hidden sm:block" />
            smart design that fuels real business growth.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button className="group relative inline-flex items-center gap-3 px-8 py-4 lg:px-10 lg:py-5 bg-black text-white rounded-full text-base lg:text-lg font-semibold hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <span>Book a Meeting</span>
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// ===================================================================

