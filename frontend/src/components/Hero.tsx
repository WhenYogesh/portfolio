import bgImage from '../assets/bgimage.png';
import ladyImage from '../assets/d21.png';

const Hero = () => {
  return (
    <section className="relative bg-[#F6F6F6] overflow-hidden font-nunito">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center px-6 sm:px-10 lg:px-20 py-28 gap-10">

        {/* LEFT - Text Content (now on top for mobile) */}
        <div className="text-center md:text-left w-full md:w-1/2 space-y-8 z-20 relative order-1 md:order-none">
          <p className="text-yellow-500 text-m font-bold uppercase tracking-wider">
            Full Stack Developer
          </p>
          <h1 className="text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-playfair font-bold text-gray-900 leading-tight">
            Hello, my name is <br />
            <span className="whitespace-nowrap">Divya Shree H M</span>
          </h1>
          <p className="text-gray-500 text-base sm:text-lg md:text-lg xl:text-xl leading-relaxed">
            Turning complex data into impactful decisions using Python, SQL, Power BI, and Excel—specialized in AI-driven solutions and visualization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:justify-start justify-center">
  <a
    href="#projects"
    className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-md hover:bg-yellow-500 transition"
  >
    Projects
  </a>

  <a
    href="https://www.linkedin.com/in/divya-shree-h-m-4a1947258/"
    target="_blank"
    rel="noopener noreferrer"
    className="border border-gray-900 px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition"
  >
    LinkedIn
  </a>
</div>

        </div>

        {/* RIGHT - Image Block (now on bottom for mobile) */}
        <div className="relative w-full md:w-1/2 flex items-center justify-center z-10 order-2 md:order-none">
          {/* Background Blob Image */}
          <img
            src={bgImage}
            alt="Background Shape"
            className="
              absolute z-0 max-w-none
              w-[120%] sm:w-[110%] md:w-[120%] xl:w-[140%] 2xl:w-[150%]
              right-[-20%] md:right-[-40%] lg:right-[-50%]
              top-[10px] sm:top-[-60px] md:top-[-80px] xl:top-[-100px]
            "
          />

          {/* Foreground Lady Image */}
          <img
            src={ladyImage}
            alt="Lady holding flower"
            className="
              relative z-10 pointer-events-none
              w-[50%] md:w-[60%] xl:w-[60%] 2xl:w-[70%]
              max-w-[380px]
              right-[-5%] sm:right-[-15%] md:right-[-20%] xl:right-[-25%] 2xl:right-[-30%]
              top-[65px] sm:top-[-20px] md:top-[-40px] xl:top-[64px]
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;