import React from 'react';
import { Upload, Settings, PlayCircle, BarChart } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: Upload,
      title: 'Setup',
      description: 'Import your employee data or start fresh.',
      details: ['No technical skills needed', 'Guided setup process', 'Data migration support'],
    },
    {
      number: '02',
      icon: Settings,
      title: 'Configure',
      description: 'Customize workflows and permissions.',
      details: ['Set up payroll rules', 'Define approval flows', 'Configure notifications'],
    },
    {
      number: '03',
      icon: PlayCircle,
      title: 'Launch',
      description: 'Go live with your team in minutes.',
      details: ['Employee self-service', 'Mobile app access', 'Training materials'],
    },
    {
      number: '04',
      title: 'Scale',
      icon: BarChart,
      description: 'Grow your team with confidence.',
      details: ['Add new features', 'Expand to new locations', 'Advanced analytics'],
    },
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="container-clean">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-sm font-medium text-primary-600 mb-4">PROCESS</div>
          <h2 className="heading-2 mb-6">Simple setup, immediate impact</h2>
          <p className="body-lg">
            Get started quickly and see results from day one with our straightforward implementation process.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-12 left-1/2 h-0.5 w-3/4 bg-gradient-to-r from-primary-500/0 via-primary-500/30 to-primary-500/0 transform -translate-x-1/2"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Step number */}
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white border-2 border-primary-500 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 font-bold">{step.number}</span>
                  </div>

                  <div className="card p-8 text-center pt-16">
                    <div className="flex justify-center mb-6">
                      <div className="p-3 bg-primary-50 rounded-lg">
                        <Icon className="h-8 w-8 text-primary-600" />
                      </div>
                    </div>
                    
                    <h3 className="heading-3 mb-3">{step.title}</h3>
                    <p className="body-base mb-6">{step.description}</p>
                    
                    <div className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="text-sm text-gray-500">{detail}</div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-6 p-8 bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl">
            <div>
              <div className="text-3xl font-bold text-gray-900">10 minutes</div>
              <div className="text-sm text-gray-600">Average setup time</div>
            </div>
            <div className="h-12 w-px bg-gray-300"></div>
            <div>
              <div className="text-3xl font-bold text-gray-900">24/7</div>
              <div className="text-sm text-gray-600">Support available</div>
            </div>
            <div className="h-12 w-px bg-gray-300"></div>
            <div>
              <div className="text-3xl font-bold text-gray-900">99.9%</div>
              <div className="text-sm text-gray-600">Uptime SLA</div>
            </div>
          </div>
          
          <button className="btn-primary mt-8">
            Start Your Free Trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;