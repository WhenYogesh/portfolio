import React from 'react';
import { FaPython, FaReact, FaGitAlt, FaChartBar, FaFileExcel } from 'react-icons/fa';
import { SiMysql, SiJavascript } from 'react-icons/si';

const Skills: React.FC = () => {
  const skills = [
    { name: 'Python', icon: <FaPython className="text-yellow-500" /> },
    { name: 'SQL (MySQL)', icon: <SiMysql className="text-blue-600" /> },
    { name: 'Power BI', icon: <FaChartBar className="text-yellow-400" /> },
    { name: 'Excel', icon: <FaFileExcel className="text-green-600" /> },
    { name: 'React', icon: <FaReact className="text-blue-500" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-300" /> },
    { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
  ];

  return (
    <div id="skills" className="w-full bg-[#F6F6F6] px-6 py-12 flex flex-col items-center">
      <div className="max-w-5xl w-full text-center mb-8">
        <h2 className="text-3xl md:text-5xl xl:text-6xl font-bold font-playfair text-gray-900 mb-3">
          Skills
        </h2>
        <p className="text-gray-600 text-base md:text-lg xl:text-xl font-nunito">
          Technologies and tools I’ve worked with and learned throughout my journey.
        </p>
      </div>

      {/* Horizontal Scroll Area */}
      <div className="w-full max-w-6xl overflow-x-auto">
        <div className="flex gap-6 px-2 md:px-4 py-4 w-max scroll-smooth scrollbar-thin scrollbar-thumb-yellow-400">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center justify-center w-28 h-28 md:w-32 md:h-32 bg-white rounded-xl shadow-md hover:shadow-lg transition p-4"
            >
              <div className="text-3xl md:text-4xl mb-2">{skill.icon}</div>
              <p className="text-sm md:text-base font-nunito text-gray-700 text-center">{skill.name}</p>

              {/* Animated Tooltip on Hover */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-1 bg-black text-white text-xs rounded-md opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-10 pointer-events-none">
                {skill.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
