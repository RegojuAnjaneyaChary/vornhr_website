import React, { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
  category: string
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  const faqs: FAQItem[] = [
    {
      question: 'How long does implementation take?',
      answer: 'Most companies are fully operational within 2-3 weeks. Small businesses can often go live in just 3-5 days with our streamlined setup process.',
      category: 'Implementation'
    },
    {
      question: 'Is HRFlow compliant with local regulations?',
      answer: 'Yes, we stay updated with labor laws, tax regulations, and compliance requirements in all 150+ countries we serve. Automatic updates ensure you stay compliant.',
      category: 'Compliance'
    },
    {
      question: 'Can we migrate from our current HR system?',
      answer: 'Absolutely. We offer free data migration services from any HR system. Our team handles the entire process with a 99.9% success rate guarantee.',
      category: 'Migration'
    },
    {
      question: 'What support options are available?',
      answer: 'We provide 24/7 support via chat, email, and phone. Premium plans include a dedicated account manager and priority support.',
      category: 'Support'
    },
    {
      question: 'Is there a mobile app for employees?',
      answer: 'Yes, both iOS and Android apps are available. Employees can view payslips, request time off, clock in/out, and update information on the go.',
      category: 'Mobile'
    }
  ]

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about HRFlow
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <HelpCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                      <span className="ml-3 text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        {faq.category}
                      </span>
                    </div>
                  </div>
                  <ChevronDown 
                    className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
                      activeIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? 'py-5 border-t border-gray-100' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed pl-14">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl text-white">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Need personalized advice?
                </h3>
                <p className="text-blue-100">
                  Schedule a free consultation with our HR experts to discuss your specific needs.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors">
                  Schedule Call
                </button>
                <button className="bg-blue-700/50 hover:bg-blue-700/70 text-white font-semibold py-3 px-6 rounded-lg border border-blue-500/30 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ