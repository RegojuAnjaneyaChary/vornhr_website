import React from 'react';
import { Users, Calendar, DollarSign, Shield, PieChart, FileText, ArrowRight } from 'lucide-react';

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
}

const Features: React.FC = () => {
  const features: Feature[] = [
    {
      icon: Users,
      title: 'Employee Management',
      description: 'Centralized employee database with profiles, documents, and onboarding workflows.',
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: Calendar,
      title: 'Time & Attendance',
      description: 'Automated time tracking, leave management, and shift scheduling.',
      color: 'bg-emerald-50 text-emerald-600',
    },
    {
      icon: DollarSign,
      title: 'Payroll Processing',
      description: 'Automated payroll calculations, tax filings, and direct deposits.',
      color: 'bg-purple-50 text-purple-600',
    },
    {
      icon: Shield,
      title: 'Compliance',
      description: 'Stay compliant with local labor laws and regulations automatically.',
      color: 'bg-amber-50 text-amber-600',
    },
    {
      icon: PieChart,
      title: 'Analytics',
      description: 'Real-time insights into workforce metrics and performance.',
      color: 'bg-indigo-50 text-indigo-600',
    },
    {
      icon: FileText,
      title: 'Document Management',
      description: 'Secure storage and management of all HR documents.',
      color: 'bg-rose-50 text-rose-600',
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container-clean">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-sm font-medium text-primary-600 mb-4">FEATURES</div>
          <h2 className="heading-2 mb-6">Everything you need to manage your team</h2>
          <p className="body-lg">
            A comprehensive suite of tools designed to simplify HR management for growing businesses.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="card p-6 hover:shadow-lg animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex p-3 rounded-lg ${feature.color.split(' ')[0]} mb-4`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="heading-3 mb-3">{feature.title}</h3>
                <p className="body-base">{feature.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium mt-4"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            );
          })}
        </div>

       
      </div>
    </section>
  );
};

export default Features;