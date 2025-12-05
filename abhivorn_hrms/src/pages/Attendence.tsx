import React from 'react';
import { FaCheckCircle, FaClock, FaChartBar, FaUsers, FaEye } from 'react-icons/fa';

const Attendence = () => {
  const points = [
    {
      icon: <FaCheckCircle className="text-[#3fc6e4] w-8 h-8" />,
      title: 'Daily Attendance',
      description: 'Track employee check-ins and check-outs every day with accurate timestamps.',
    },
    {
      icon: <FaClock className="text-[#3fc6e4] w-8 h-8" />,
      title: 'Check-In & Check-Out',
      description: 'Monitor who is on time, late, or has left early with real-time status.',
    },
    {
      icon: <FaChartBar className="text-[#3fc6e4] w-8 h-8" />,
      title: 'Monthly Statistics',
      description: 'View attendance summaries, total hours worked, and punctuality rates.',
    },
    {
      icon: <FaUsers className="text-[#3fc6e4] w-8 h-8" />,
      title: 'Employee Overview',
      description: 'Get a quick glance of attendance trends across departments or teams.',
    },
    {
      icon: <FaEye className="text-[#3fc6e4] w-8 h-8" />,
      title: 'Status Indicators',
      description: 'Color-coded indicators show present, absent, late, or weekend days instantly.',
    },
  ];

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-20 px-4">
      <div className="max-w-5xl w-full bg-gray-50 rounded-3xl shadow-xl p-12 border border-gray-200">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Attendance Management Overview
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {points.map((point, index) => (
            <div key={index} className="flex gap-4 items-start p-4 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <div>{point.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{point.title}</h3>
                <p className="text-gray-700">{point.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-6 mt-12">
          <button
            className="bg-[#191919] text-white px-8 py-4 rounded-xl font-semibold hover:opacity-80 transition"
          >
            Learn More
          </button>
          <button
            className="bg-[#3fc6e4] text-white px-8 py-4 rounded-xl font-semibold hover:opacity-80 transition"
          >
            Go to Attendance
          </button>
        </div>
      </div>
    </div>
  );
};

export default Attendence;
