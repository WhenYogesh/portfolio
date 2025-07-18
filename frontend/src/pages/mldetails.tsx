import React from 'react';
import projectImage from '../assets/ml1.jpg'; // Replace with your actual image

const ProjectDetail: React.FC = () => {
  return (
    <section className="min-h-screen bg-[#F6F6F6] px-6 py-12 md:py-20 flex items-center justify-center font-nunito">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">
        
        {/* LEFT: Project Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <p className="text-yellow-500 text-sm font-semibold uppercase tracking-wider">
            Machine Learning Project
          </p>

          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold font-playfair text-gray-900 leading-snug">
            Predictive Maintenance of Sensors
          </h2>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            This project involved designing a predictive maintenance system using a machine learning pipeline to forecast sensor failures in advance. The aim was to minimize unplanned downtime, optimize maintenance schedules, and reduce operational costs for industrial systems.
          </p>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            We used a dataset with sensor readings collected from various manufacturing units over time. After pre-processing and cleaning the data, several models were trained, including Random Forest, Gradient Boosting, and Support Vector Machines. Evaluation was done using precision-recall metrics due to the imbalance in failure data.
          </p>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            The final model achieved a high F1 score and was integrated with a live dashboard that visually alerts engineers about at-risk sensors. The predictive alerts enabled the team to take proactive actions, significantly improving equipment reliability and safety.
          </p>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Tools and technologies used include <span className="font-semibold text-gray-800">Python (pandas, scikit-learn, XGBoost)</span>, <span className="font-semibold text-gray-800">Jupyter Notebooks</span> for development, and <span className="font-semibold text-gray-800">Streamlit</span> for a lightweight interactive dashboard.
          </p>
        </div>

        {/* RIGHT: Project Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={projectImage}
            alt="Predictive Maintenance Project"
            className="w-full max-w-md rounded-xl shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
