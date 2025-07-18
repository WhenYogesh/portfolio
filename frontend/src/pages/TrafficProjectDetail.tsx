import React from 'react';
import projectImage from '../assets/ml2.webp'; 

const TrafficProjectDetail: React.FC = () => {
  return (
    <section className="min-h-screen bg-[#F6F6F6] px-6 py-12 md:py-20 flex items-center justify-center font-nunito">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">
        
        <div className="w-full md:w-1/2 space-y-6">
          <p className="text-yellow-500 text-sm font-semibold uppercase tracking-wider">
            IoT-Based Smart City Project
          </p>

          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold font-playfair text-gray-900 leading-snug">
            Automatic Traffic Management System Using IoT
          </h2>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            This IoT-based traffic control system was built to dynamically manage signal timing by monitoring real-time traffic density. Using IR sensors and Arduino microcontrollers, traffic at each signal was measured, and signal durations were adjusted accordingly.
          </p>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Emergency vehicle detection was implemented using RFID and prioritized in signal control, drastically reducing delay for ambulances and fire brigades. This real-time smart control reduces congestion and optimizes traffic flow during peak hours.
          </p>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            The system was prototyped using Arduino UNO, IR sensors, RFID readers, and integrated through serial communication with a custom logic-based algorithm written in C++. A small-scale demo was created using LEDs to simulate signal behavior.
          </p>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            This project supports the vision of smart cities by increasing road safety, improving traffic management, and enhancing emergency response times. It is scalable for real-world deployment in metro areas with heavier traffic.
          </p>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={projectImage}
            alt="IoT Traffic Management"
            className="w-full max-w-md rounded-xl shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default TrafficProjectDetail;
