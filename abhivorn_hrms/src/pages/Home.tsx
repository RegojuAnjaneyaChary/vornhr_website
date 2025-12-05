import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 px-6">

      {/* Hero Section */}
      <motion.div
        className="max-w-7xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6">Welcome to VORN HR</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Simplify your HR processes with our comprehensive Human Resource Management System (HRMS). Streamline hiring, attendance, payroll, and performance management, all in one place.
        </p>
        <div className="mt-8">
          <motion.button
            className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Get Started
          </motion.button>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="max-w-7xl mx-auto text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Key Features</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Explore the powerful features of VORN HR to manage your workforce more efficiently.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300 hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Employee Management</h3>
            <p className="text-gray-600">
              Keep track of employee data, from personal information to work history and performance.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300 hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Leave and Attendance</h3>
            <p className="text-gray-600">
              Simplify leave requests and track employee attendance effortlessly with real-time data.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300 hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Payroll and Compensation</h3>
            <p className="text-gray-600">
              Automate payroll processing and ensure timely and accurate salary disbursements.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Testimonial Section */}
      <motion.div
        className="max-w-7xl mx-auto text-center mb-12"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-6">What Our Clients Say</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Hear from our satisfied clients who have successfully streamlined their HR operations using VORN HR.
        </p>
        <div className="flex justify-center space-x-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-sm">
            <p className="text-gray-600 mb-4">
              "VORN HR has significantly improved our HR operations. The system is intuitive, and the reporting features are game-changers."
            </p>
            <p className="font-semibold text-gray-800">John Doe</p>
            <p className="text-gray-600">HR Manager, Tech Solutions</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-sm">
            <p className="text-gray-600 mb-4">
              "The payroll automation is incredible! VORN HR has saved us countless hours each month. Highly recommend!"
            </p>
            <p className="font-semibold text-gray-800">Jane Smith</p>
            <p className="text-gray-600">Operations Director, Retail Corp</p>
          </div>
        </div>
      </motion.div>

     
    </div>
  );
};

export default Home;
