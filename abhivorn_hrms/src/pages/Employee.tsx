import React from 'react';

const Employee = () => {
  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Employee Roles and Responsibilities</h1>
          <p className="text-lg text-gray-600">Understanding the frameworks that define an employee's role and performance.</p>
        </div>

        {/* Job Description (JD) and Performance Management System (PMS) Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Job Description Card */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xl transform hover:scale-105 transition duration-500">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">1. Job Description (JD)</h3>
            <p className="text-gray-700 mb-4">
              The Job Description defines an employee's role and responsibilities, outlining their scope and authority within the organization.
            </p>
            <ul className="list-disc pl-5 text-gray-600">
              <li><strong>Role:</strong> e.g., "Software Engineer"</li>
              <li><strong>Responsibilities:</strong> Key Result Areas (KRAs), e.g., "Managing recruitment pipeline" for HR Specialist.</li>
            </ul>
            <p className="mt-4 text-gray-600 text-sm">
              The JD places the employee on the organizational chart, defining their reporting lines and span of control.
            </p>
          </div>

          {/* Performance Management System (PMS) Card */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xl transform hover:scale-105 transition duration-500">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">2. Performance Management System (PMS)</h3>
            <p className="text-gray-700 mb-4">
              The PMS measures the employee's performance against their responsibilities and ensures accountability through clear goals.
            </p>
            <ul className="list-disc pl-5 text-gray-600">
              <li><strong>Ability:</strong> Focus on human capital development (skill gaps and training).</li>
              <li><strong>Motivation:</strong> Goal alignment and pursuing SMART goals.</li>
              <li><strong>Opportunity:</strong> Clarity on resources, role expectations, and overcoming roadblocks.</li>
            </ul>
            <p className="mt-4 text-gray-600 text-sm">
              The HRMS tracks trainings, goals, and performance reviews, ensuring continuous development and feedback.
            </p>
          </div>

          {/* Ability, Motivation, and Opportunity (AMO) Theory Card */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xl transform hover:scale-105 transition duration-500">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">AMO Theory: Ability, Motivation, Opportunity</h3>
            <p className="text-gray-700 mb-4">
              The AMO theory links an employee’s ability, motivation, and opportunity to their performance. These elements are tracked through the HRMS.
            </p>
            <ul className="list-disc pl-5 text-gray-600">
              <li><strong>Ability:</strong> Identifying skill gaps and participating in training (LMS modules).</li>
              <li><strong>Motivation:</strong> Actively pursuing and executing SMART goals.</li>
              <li><strong>Opportunity:</strong> Communicating resource needs and clarifying expectations.</li>
            </ul>
            <p className="mt-4 text-gray-600 text-sm">
              The HRMS captures training progress, annual goals, feedback, and performance ratings to ensure accountability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;
