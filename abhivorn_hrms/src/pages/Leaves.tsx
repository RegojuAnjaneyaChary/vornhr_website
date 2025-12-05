import React from 'react';
import { FaClipboardList, FaCheckCircle, FaHistory, FaBalanceScale, FaRocket } from 'react-icons/fa';

const Leaves = () => {
  const leaveFeatures = [
    {
      title: "Leave Request Form",
      description:
        "Employees can submit leave requests by selecting leave type, dates, and reason. Requests are tracked and stored for approval.",
      icon: <FaClipboardList className="text-4xl text-blue-400 mb-4" />,
    },
    {
      title: "Leave Approval",
      description:
        "Managers can approve or reject leave requests, ensuring proper staffing and policy compliance.",
      icon: <FaCheckCircle className="text-4xl text-green-400 mb-4" />,
    },
    {
      title: "Leave History",
      description:
        "Employees can view all past leaves with status and type for transparency and planning.",
      icon: <FaHistory className="text-4xl text-yellow-400 mb-4" />,
    },
    {
      title: "Leave Balance",
      description:
        "Tracks remaining leave balance for each employee and updates automatically after approvals.",
      icon: <FaBalanceScale className="text-4xl text-purple-400 mb-4" />,
    },
    {
      title: "Interactive & Animated UI",
      description:
        "Hover effects, scaling animations, and icons make the interface engaging and user-friendly.",
      icon: <FaRocket className="text-4xl text-pink-400 mb-4" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Leave Management System
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Manage leave requests, approvals, history, and balances in an interactive HRMS portal.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {leaveFeatures.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-3xl shadow-lg border border-gray-200 transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2"
          >
            <div className="flex justify-center">{feature.icon}</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              {feature.title}
            </h2>
            <p className="text-gray-600 text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaves;
