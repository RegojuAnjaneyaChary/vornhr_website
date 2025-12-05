import React from 'react';

const Profile = () => {
  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Profile Overview */}
        <div className="text-center mb-12 transition-all duration-500 transform hover:scale-105">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Employee Profile</h1>
          <p className="text-lg text-gray-600 mb-6">Displays employee personal and professional details clearly.</p>
        </div>

        {/* Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Personal Info */}
          <div className="bg-white rounded-2xl shadow-xl p-6 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Information</h3>
            <p className="text-gray-700">Employee details such as email, phone, and location.</p>
          </div>

          {/* Card 2: Professional Info */}
          <div className="bg-white rounded-2xl shadow-xl p-6 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Professional Information</h3>
            <p className="text-gray-700">Position, department, and status within the company.</p>
          </div>

          {/* Card 3: Key Stats */}
          <div className="bg-white rounded-2xl shadow-xl p-6 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Stats</h3>
            <p className="text-gray-700">Tasks completed, leaves taken, and other work metrics.</p>
          </div>
        </div>

        {/* Actions Section */}
        <div className="flex justify-center gap-6 mt-12">
          <button
            className="bg-[#191919] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-80 transition duration-300 shadow-lg transform hover:scale-105"
          >
            ✏️ Edit Profile
          </button>
          <button
            className="bg-[#3fc6e4] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-80 transition duration-300 shadow-lg transform hover:scale-105"
          >
            📝 Assign Task
          </button>
          <button
            className="bg-[#3fc6e4] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-80 transition duration-300 shadow-lg transform hover:scale-105"
          >
            💬 Send Message
          </button>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {/* Tasks Completed */}
          <div className="bg-green-50 p-6 rounded-2xl border border-green-200 text-center transform hover:scale-105 transition duration-500">
            <div className="text-3xl font-bold text-green-800 mb-2">48</div>
            <p className="text-green-600 font-medium">Tasks Completed</p>
          </div>

          {/* Leaves Taken */}
          <div className="bg-red-50 p-6 rounded-2xl border border-red-200 text-center transform hover:scale-105 transition duration-500">
            <div className="text-3xl font-bold text-red-800 mb-2">5</div>
            <p className="text-red-600 font-medium">Leaves Taken</p>
          </div>

          {/* Projects */}
          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200 text-center transform hover:scale-105 transition duration-500">
            <div className="text-3xl font-bold text-blue-800 mb-2">12</div>
            <p className="text-blue-600 font-medium">Ongoing Projects</p>
          </div>

          {/* Team Contributions */}
          <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-200 text-center transform hover:scale-105 transition duration-500">
            <div className="text-3xl font-bold text-yellow-800 mb-2">15</div>
            <p className="text-yellow-600 font-medium">Team Contributions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
