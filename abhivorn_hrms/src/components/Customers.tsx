import React from "react";

const Customers = () => {
  const logos = [
    "/logo5.png",
      "react.svg",
     "/logo5.png",
      "react.svg",
     "/logo5.png",
    "react.svg",
   
  ];

  // Placeholder text for each logo (for alt text)
  const companyNames = [
    "Google",
    "Microsoft",
    "Amazon",
    "Accenture",
    "wipro",
    "Infosys"
  ];

  return (
    <section id="customers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Trusted by Leading Companies
          </h2>
          <p className="text-gray-600 text-lg mt-4">
            Thousands of teams use our platform to streamline their operations
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex justify-center opacity-70 hover:opacity-100 transition duration-300 grayscale hover:grayscale-0"
            >
              {/* If you want to use actual images from the array */}
              <img
                src={logo}
                alt={`${companyNames[i]} logo`}
                className="h-10 object-contain"
              />
            </div>
          ))}
        </div>

        {/* Bottom line */}
        <p className="text-center text-gray-500 mt-10 text-sm">
          Over <span className="font-bold text-gray-800">12,000+</span> businesses trust our platform worldwide
        </p>
      </div>
    </section>
  );
};

export default Customers;