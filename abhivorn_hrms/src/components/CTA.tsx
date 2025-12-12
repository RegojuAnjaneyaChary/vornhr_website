import React from 'react'
import { CheckCircle, Shield, Clock, Users } from 'lucide-react'

const CTA: React.FC = () => {
  const benefits = [
    {
      icon: CheckCircle,
      title: 'No Setup Fees',
      description: 'Start immediately with zero upfront costs'
    },
    {
      icon: Shield,
      title: '30-Day Trial',
      description: 'Full access to all features, no credit card needed'
    },
    {
      icon: Clock,
      title: 'Quick Setup',
      description: 'Get up and running in days, not months'
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'Expert assistance throughout your journey'
    }
  ]

  return (
    <section id="pricing" className="py-24">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-12 lg:p-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Start Your HR Transformation Today
                </h2>
                <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                  Join thousands of companies that have modernized their HR operations
                </p>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-8 mb-12">
                {/* Free Trial Card */}
                <div className="bg-white rounded-2xl p-8">
                  <div className="text-center mb-6">
                    <div className="text-sm font-semibold text-blue-600 mb-2">START FREE</div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">$0</div>
                    <div className="text-gray-600 mb-4">for 30 days</div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {['Up to 50 employees', 'Basic HR features', 'Email support', 'Mobile app access'].map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full btn-primary bg-blue-600 hover:bg-blue-700">
                    Start Free Trial
                  </button>
                </div>
                
                {/* Pro Plan Card */}
                <div className="bg-white rounded-2xl p-8 border-2 border-blue-500 relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-500 text-white font-semibold rounded-full text-sm">
                    MOST POPULAR
                  </div>
                  
                  <div className="text-center mb-6">
                    <div className="text-sm font-semibold text-blue-600 mb-2">PRO PLAN</div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">$8</div>
                    <div className="text-gray-600 mb-4">per employee/month</div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {['Unlimited employees', 'Advanced analytics', 'Priority support', 'Custom workflows', 'Compliance management'].map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full btn-primary bg-blue-600 hover:bg-blue-700">
                    Get Started
                  </button>
                </div>
                
                {/* Enterprise Card */}
                <div className="bg-white rounded-2xl p-8">
                  <div className="text-center mb-6">
                    <div className="text-sm font-semibold text-blue-600 mb-2">ENTERPRISE</div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">Custom</div>
                    <div className="text-gray-600 mb-4">Tailored solution</div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {['Everything in Pro', 'Dedicated account manager', 'Custom integrations', 'White-label options', 'SLA guarantees'].map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full btn-secondary">
                    Contact Sales
                  </button>
                </div>
              </div>
              
              {/* Benefits */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon
                  return (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                      <div className="flex flex-col items-center text-center">
                        <Icon className="h-10 w-10 text-white mb-4" />
                        <h4 className="text-lg font-bold text-white mb-2">
                          {benefit.title}
                        </h4>
                        <p className="text-blue-100 text-sm">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
              
              {/* Guarantee */}
              <div className="mt-12 pt-8 border-t border-blue-500/30 text-center">
                <p className="text-blue-100">
                  <Shield className="h-5 w-5 inline mr-2" />
                  100% satisfaction guarantee • No long-term contracts • Cancel anytime
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA