import React from 'react';
import { CheckCircle } from 'lucide-react';

interface Plan {
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  popular: boolean;
}

const Pricing: React.FC = () => {
  const plans: Plan[] = [
    {
      name: 'Starter',
      description: 'Perfect for small teams',
      price: '$0',
      period: 'for 30 days',
      features: [
        'Up to 10 employees',
        'Basic HR features',
        'Email support',
        'Mobile app',
        'Document storage',
      ],
      cta: 'Start Free Trial',
      popular: false,
    },
    {
      name: 'Professional',
      description: 'For growing businesses',
      price: '$8',
      period: 'per employee/month',
      features: [
        'Unlimited employees',
        'Advanced analytics',
        'Priority support',
        'Custom workflows',
        'Payroll processing',
        'Compliance management',
      ],
      cta: 'Get Started',
      popular: true,
    },
    {
      name: 'Enterprise',
      description: 'Custom solutions',
      price: 'Custom',
      period: 'tailored pricing',
      features: [
        'Everything in Professional',
        'Dedicated account manager',
        'Custom integrations',
        'SLA guarantees',
        'On-premise option',
        'Training & onboarding',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container-clean">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-sm font-medium text-primary-600 mb-4">PRICING</div>
          <h2 className="heading-2 mb-6">Simple, transparent pricing</h2>
          <p className="body-lg">
            Start free, upgrade as you grow. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`card p-8 relative ${plan.popular ? 'border-primary-300 shadow-lg' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="heading-3 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-2">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                </div>
                <div className="text-gray-500">{plan.period}</div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full btn ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-20 max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="heading-3 mb-6">Common questions</h3>
              <div className="space-y-4">
                {[
                  'Can I change plans later?',
                  'Is there a long-term contract?',
                  'How is billing handled?',
                ].map((question, index) => (
                  <div key={index} className="pb-4 border-b border-gray-200">
                    <div className="font-medium text-gray-900">{question}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h4 className="heading-3 mb-4">Need help deciding?</h4>
              <p className="body-base mb-6">
                Our team is here to help you choose the right plan for your business.
              </p>
              <button className="btn-ghost w-full justify-center">
                Schedule a call →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;