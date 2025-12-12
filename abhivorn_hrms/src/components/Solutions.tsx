import React from 'react'
import { Building, Store, Factory, School, Hospital, Briefcase } from 'lucide-react'

interface Solution {
  icon: React.FC<{ className?: string }>
  title: string
  industry: string
  features: string[]
}

const Solutions: React.FC = () => {
  const solutions: Solution[] = [
    {
      icon: Building,
      title: 'Enterprise Edition',
      industry: 'Large Corporations',
      features: ['Multi-location support', 'Advanced analytics', 'Custom workflows', 'Dedicated support']
    },
    {
      icon: Store,
      title: 'Small Business',
      industry: 'SMBs & Startups',
      features: ['Simple setup', 'Affordable pricing', 'Essential features', 'Easy migration']
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      industry: 'Industrial Sector',
      features: ['Shift management', 'OT tracking', 'Compliance alerts', 'Safety management']
    },
    {
      icon: School,
      title: 'Education',
      industry: 'Schools & Universities',
      features: ['Faculty management', 'Academic scheduling', 'Grant tracking', 'Student employment']
    },
    {
      icon: Hospital,
      title: 'Healthcare',
      industry: 'Medical Facilities',
      features: ['Credential tracking', 'Schedule compliance', 'On-call management', 'License renewal']
    },
    {
      icon: Briefcase,
      title: 'Professional Services',
      industry: 'Agencies & Consulting',
      features: ['Project allocation', 'Client billing', 'Timesheet integration', 'Remote team support']
    }
  ]

  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Industry-Specific Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored HRMS solutions designed for your industry's unique needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <div key={index} className="group relative">
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="p-3 bg-blue-50 rounded-lg flex-shrink-0">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{solution.title}</h3>
                      <p className="text-sm text-blue-600 font-medium">{solution.industry}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full mt-4 py-2 text-blue-600 font-medium border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            )
          })}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-gray-50 px-8 py-6 rounded-2xl">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">150+</div>
              <div className="text-sm text-gray-600">Countries Supported</div>
            </div>
            <div className="h-12 w-px bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">50+</div>
              <div className="text-sm text-gray-600">Local Compliance</div>
            </div>
            <div className="h-12 w-px bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">24/7</div>
              <div className="text-sm text-gray-600">Global Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solutions