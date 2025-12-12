import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: 'Alex Morgan',
      role: 'CEO',
      company: 'StartupXYZ',
      content: 'HRFlow transformed how we manage our team. What used to take days now takes minutes.',
      rating: 5,
    },
    {
      name: 'Sarah Chen',
      role: 'HR Director',
      company: 'TechCorp',
      content: 'The payroll automation alone saved us 20 hours per month. Incredible product.',
      rating: 5,
    },
    {
      name: 'David Park',
      role: 'Operations Lead',
      company: 'GrowthLabs',
      content: 'Simple, intuitive, and powerful. Exactly what a growing company needs.',
      rating: 5,
    },
  ];

  return (
    <section id="customers" className="py-20 bg-white">
      <div className="container-clean">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-sm font-medium text-primary-600 mb-4">TESTIMONIALS</div>
          <h2 className="heading-2 mb-6">Loved by growing teams</h2>
          <p className="body-lg">
            See how companies like yours are streamlining their HR operations with HRFlow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card p-8 hover:shadow-lg">
              <Quote className="h-8 w-8 text-primary-100 mb-6" />
              
              <p className="body-base mb-8 italic text-gray-700">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</div>
                </div>
              </div>
              
              <div className="flex items-center mt-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200'}`}
                  />
                ))}
                <span className="text-sm text-gray-500 ml-2">5.0</span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
            <div className="text-gray-600">Companies</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">50k+</div>
            <div className="text-gray-600">Employees</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">98%</div>
            <div className="text-gray-600">Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;