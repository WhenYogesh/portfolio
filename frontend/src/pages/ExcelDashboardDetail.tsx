import React from 'react';
import projectImage from '../assets/s1.jpg'; // Replace with your actual image path

const ExcelDashboardDetail: React.FC = () => {
  return (
    <section className="min-h-screen bg-[#F6F6F6] px-6 py-12 md:py-20 flex items-center justify-center font-nunito">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">
        
        {/* LEFT: Project Description */}
        <div className="w-full md:w-1/2 space-y-6">
          <p className="text-yellow-500 text-sm font-semibold uppercase tracking-wider">
            Data Visualization Project
          </p>

          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold font-playfair text-gray-900 leading-snug">
            Interactive Excel Dashboard for Sales & Performance Tracking
          </h2>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Designed and developed a dynamic Excel dashboard to visualize and monitor sales and team performance metrics across multiple regions. The dashboard provides real-time insights through interactive charts, pivot tables, and custom formulas.
          </p>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Incorporated slicers, drop-down filters, and conditional formatting to enhance usability, allowing users to filter data by region, product, month, and sales rep. KPIs such as monthly revenue, conversion rates, and target completion were highlighted using data bars and color codes.
          </p>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            This tool was aimed at improving decision-making for sales managers and executives, offering a quick and intuitive overview of performance trends. It eliminated the need for manual reporting and helped identify underperforming areas in real time.
          </p>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            The project demonstrated strong expertise in Excel functions (VLOOKUP, INDEX-MATCH, IF, SUMIFS), chart design, and dashboard UX for non-technical users. It can be easily extended to track KPIs for other departments like marketing, operations, or HR.
          </p>
        </div>

        {/* RIGHT: Project Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={projectImage}
            alt="Excel Dashboard Project"
            className="w-full max-w-md rounded-xl shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ExcelDashboardDetail;
