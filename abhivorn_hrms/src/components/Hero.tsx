import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const features = [
    'No credit card required',
    '30-day free trial',
    'Set up in 10 minutes',
    'Cancel anytime',
  ];

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container-clean">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-8">
            <span className="h-2 w-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
            Designed for modern teams
          </div>

          {/* Main heading */}
          <h1 className="heading-1 mb-6">
            HR Management
            <span className="text-primary-600"> Simplified</span>
          </h1>

          {/* Subheading */}
          <p className="body-lg mb-10 max-w-2xl mx-auto">
            An all-in-one platform to manage employees, payroll, time off, 
            and compliance. Built for startups and growing businesses.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <button className="btn-primary">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <button className="btn-secondary">
              Schedule Demo
            </button>
          </div>

          {/* Features list */}
          <div className="flex flex-wrap justify-center gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center text-gray-600"
              >
                <CheckCircle className="h-4 w-4 text-primary-500 mr-2" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>

          {/* Preview image placeholder */}
          <div className="mt-20 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent z-10"></div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
              <div className="grid grid-cols-3 gap-4 mb-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-4 bg-gray-200 rounded-full"></div>
                ))}
              </div>
              <div className="h-64 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-gray-400 text-sm mb-2">Dashboard Preview</div>
                  <div className="text-gray-300">HRFlow Dashboard</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;