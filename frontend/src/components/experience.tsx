import React from 'react';

const Experience: React.FC = () => {
  return (
    <div className="w-full bg-[#F6F6F6] px-6 pt-20 pb-0 flex flex-col items-center">
      <div className="max-w-5xl w-full text-center mb-8">
        <h2 className="text-3xl md:text-5xl xl:text-6xl font-bold font-playfair text-gray-900 mb-3">
          Experience
        </h2>
        <p className="text-gray-600 text-base md:text-lg xl:text-xl font-nunito">
          Here's a quick overview of my professional journey and recent roles.
        </p>
      </div>

      <div className="w-full max-w-4xl space-y-6">
        <div className="bg-white shadow-md rounded-xl p-6 border-l-8 border-yellow-400">
          <h3 className="text-xl md:text-2xl xl:text-3xl font-semibold text-black mb-1 font-playfair">
            AI Prompt Engineer
          </h3>
          <p className="text-gray-600 text-sm md:text-base xl:text-lg mb-2 font-nunito">
            <span className="font-semibold text-black">Xtransmatrix Consulting Services Pvt. Ltd</span> – Bengaluru
          </p>
          <p className="text-xs md:text-sm xl:text-base text-gray-500 mb-4 font-nunito italic">
            November 2024 
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base xl:text-lg font-nunito">
            <li>
              Collaborated with cross-functional teams to integrate AI prompts into machine learning pipelines for a US-based healthcare client.
            </li>
            <li>
              Ensured strict compliance with HIPAA guidelines, maintaining confidentiality and security of sensitive healthcare data.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
