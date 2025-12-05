import React from 'react';
import { FaFileAlt, FaChartLine, FaClipboardCheck, FaUserAlt } from 'react-icons/fa';

const Reports = () => {
  const reportFeatures = [
    {
      title: "Employee Performance Reports",
      description:
        "Generate detailed reports on employee performance, tasks, and overall productivity.",
      icon: <FaFileAlt className="text-4xl text-blue-500 mb-4" />,
      bgColor: "bg-blue-50",
    },
    {
      title: "Attendance Reports",
      description:
        "Track employee attendance over a period, showing present, absent, and late patterns.",
      icon: <FaChartLine className="text-4xl text-green-500 mb-4" />,
      bgColor: "bg-green-50",
    },
    {
      title: "Leave Reports",
      description:
        "Monitor leave requests, approvals, and balance updates with detailed leave reports.",
      icon: <FaClipboardCheck className="text-4xl text-yellow-500 mb-4" />,
      bgColor: "bg-yellow-50",
    },
    {
      title: "Employee Profile Reports",
      description:
        "Generate employee profiles including role, performance, leave history, and more.",
      icon: <FaUserAlt className="text-4xl text-purple-500 mb-4" />,
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-blue-100 py-20 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Reports Dashboard</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Generate and view detailed reports related to employee performance, attendance, and more.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reportFeatures.map((feature, index) => (
          <div
            key={index}
            className={`p-6 rounded-3xl shadow-lg ${feature.bgColor} border border-gray-200 transform transition duration-500 hover:scale-105 hover:shadow-xl hover:-translate-y-2`}
          >
            <div className="flex justify-center">{feature.icon}</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              {feature.title}
            </h2>
            <p className="text-gray-600 text-center">{feature.description}</p>
            <div className="flex justify-center mt-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-blue-700 transition duration-300 transform hover:scale-110">
                View Report
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;
