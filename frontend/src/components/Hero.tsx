import heroImage from '../assets/landingpaged1.png'; // Your combined image

const Hero = () => {
  return (
    <section className="relative bg-[#F6F6F6] overflow-hidden font-nunito">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center px-6 sm:px-10 lg:px-20 py-8 sm:py-20 lg:py-24 gap-10">

        {/* LEFT - Text Content */}
        <div className="text-center md:text-left w-full md:w-1/2 space-y-8 z-20 relative order-1 md:order-none">
          <p className="text-yellow-500 text-m font-bold uppercase tracking-wider">
            Passionate About Technology & Innovation
          </p>
          <h1 className="text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-playfair font-bold text-gray-900 leading-tight">
            Hello, my name is <br />
            <span className="whitespace-nowrap">Divya Shree H M</span>
          </h1>
          <p className="text-gray-500 text-base sm:text-lg md:text-lg xl:text-xl leading-relaxed">
            Turning complex data into impactful decisions using Python, SQL, Power BI, and AI-driven solutions and visualization.
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

        {/* RIGHT - Single Combined Image */}
        <div className="relative w-full md:w-1/2 flex items-center justify-center z-10 order-2 md:order-none">
          <img
            src={heroImage}
            alt="Hero Image"
            className="
              relative z-10 pointer-events-none
              w-[90%] sm:w-[90%] md:w-[105%] xl:w-[115%] 2xl:w-[130%]
              max-w-[750px] h-auto
              right-[-2%] sm:right-[-10%] md:right-[-15%] xl:right-[-20%] 2xl:right-[-25%]
              top-[20px] sm:top-[-40px] md:top-[-60px] xl:top-[30px]
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
