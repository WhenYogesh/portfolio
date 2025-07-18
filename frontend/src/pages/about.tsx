import React from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import profileImg from '../assets/about1.png';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F6F6F6] px-6 py-12 flex flex-col items-center">
      {/* Main content */}
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Section */}
        <div className="w-full md:w-1/2 order-2 md:order-1 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold font-playfair text-gray-900 mb-6">
            About me
          </h2>
          <p className="text-gray-600 text-lg md:text-xl mb-6 font-nunito leading-relaxed">
            I'm Divya Shree H M. I’ve gained practical expertise in tools and technologies such as <strong>Python</strong>, <strong>SQL</strong>, <strong>Power BI</strong>, and <strong>Excel</strong>.
          </p>
          <p className="text-gray-600 text-lg md:text-xl mb-6 font-nunito leading-relaxed">
            My recent role as an <strong>AI Prompt Engineer</strong> at Xtransmatrix Consulting allowed me to work on real-world healthcare data pipelines, emphasizing data privacy and HIPAA compliance.
          </p>
          <p className="text-gray-600 text-lg md:text-xl mb-6 font-nunito leading-relaxed">
            I’ve built interactive dashboards, worked on predictive maintenance with machine learning, and developed automation projects involving IoT and cloud systems. My certifications in <strong>Cloud Computing</strong>, <strong>Financial Literacy</strong>, and <strong>Employability Skills</strong> enhance my job readiness.
          </p>
          <p className="text-gray-600 text-lg md:text-xl mb-6 font-nunito leading-relaxed">
            I’m currently seeking a tech opportunity where I can grow, contribute to data-driven innovation, and thrive in a collaborative team.
          </p>
          <a
            href="/Resume.pdf"
            download
            className="inline-block bg-yellow-400 text-base text-black font-roboto font-semibold px-6 py-2 rounded hover:bg-yellow-300 transition"
          >
            Resume
          </a>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative w-[22rem] h-[22rem] sm:w-[24rem] sm:h-[24rem] md:w-[26rem] md:h-[26rem] xl:w-[34rem] xl:h-[34rem] rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-yellow-400 rounded-full"></div>
            <img
              src={profileImg}
              alt="Profile"
              className="absolute inset-2 w-[92%] h-[92%] object-cover rounded-full z-10"
            />
          </div>
        </div>
      </div>

      {/* Footer Section (icons closer) */}
      <div className="mt-10 flex flex-col items-center">
        <div className="flex gap-4 text-gray-800 text-2xl mb-2">
          <a
            href="https://www.linkedin.com/in/divya-shree-h-m-4a1947258/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:divyashreehm2704@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
        <p className="text-sm text-gray-500">© 2025 Divya Shree H M.</p>
      </div>
    </div>
  );
};

export default About;
