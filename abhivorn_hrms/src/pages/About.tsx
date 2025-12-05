import React, { useEffect, useState } from 'react';
import { FaClipboardList, FaCheckCircle, FaChartLine, FaUserAlt } from 'react-icons/fa';

const About = () => {
  const [visible, setVisible] = useState(false);

  // Fade-in animation effect when the component mounts
  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className={`min-h-screen py-20 px-6 transition-all duration-1000 ease-in-out transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6">About VORN HR</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          VORN HR is an advanced Human Resource Management System (HRMS) designed to optimize and automate key HR processes, improve efficiency, and provide insightful data to enhance employee management.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Employee Information Management Card */}
        <div className="bg-white p-8 rounded-xl shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-4">
          <div className="text-center mb-6">
            <FaClipboardList className="text-6xl text-blue-500 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Employee Information Management</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              Centralized management of employee data, including personal details, employment history, and job-specific information.
            </p>
          </div>
        </div>

        {/* Leave and Attendance Management Card */}
        <div className="bg-white p-8 rounded-xl shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-4">
          <div className="text-center mb-6">
            <FaCheckCircle className="text-6xl text-green-500 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Leave and Attendance Management</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              Effortlessly track employee attendance, manage leave requests, and maintain accurate records for compliance and reporting.
            </p>
          </div>
        </div>

        {/* Payroll Management Card */}
        <div className="bg-white p-8 rounded-xl shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-4">
          <div className="text-center mb-6">
            <FaChartLine className="text-6xl text-yellow-500 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Payroll Management</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              Automate payroll processing, including salary calculations, tax deductions, and payslip generation, ensuring accuracy and timely payments.
            </p>
          </div>
        </div>

        {/* Recruitment and Onboarding Card */}
        <div className="bg-white p-8 rounded-xl shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-4">
          <div className="text-center mb-6">
            <FaUserAlt className="text-6xl text-purple-500 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Recruitment & Onboarding</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              Streamline the hiring process with job posting, candidate tracking, and an efficient onboarding process for new employees.
            </p>
          </div>
        </div>
      </div>

      {/* Section for Why Choose VORN HR */}
      <div className="max-w-6xl mx-auto text-center mt-16">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">Why Choose VORN HR?</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-6">
          VORN HR offers a comprehensive suite of features, including data-driven insights, automation, and seamless integration, to improve HR operations and employee experience.
        </p>
        <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
          Get Started Today
        </button>
      </div>
    </div>
  );
};

export default About;
