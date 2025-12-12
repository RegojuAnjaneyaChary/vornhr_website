import React from 'react';
import { Building2, Mail, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const links = {
    Product: ['Features', 'How it works', 'Pricing', 'Integrations', 'API'],
    Company: ['About', 'Blog', 'Careers', 'Press', 'Contact'],
    Legal: ['Privacy', 'Terms', 'Security', 'GDPR', 'Compliance'],
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container-clean py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-primary-50 rounded-lg">
                <Building2 className="h-6 w-6 text-primary-600" />
              </div>
              <div>
                <div className="text-xl font-semibold text-gray-900">HRFlow</div>
                <div className="text-sm text-gray-500">Modern HR Management</div>
              </div>
            </div>
            <p className="text-gray-600 mb-8 max-w-md">
              Simplifying HR management for growing businesses with modern tools and automation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Twitter className="h-5 w-5 text-gray-400" />
              </a>
              <a href="#" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Linkedin className="h-5 w-5 text-gray-400" />
              </a>
              <a href="mailto:hello@hrflow.com" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Mail className="h-5 w-5 text-gray-400" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-semibold text-gray-900 mb-4">{category}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} HRFlow. All rights reserved.
            </div>
            <div className="text-sm text-gray-500">
              Made for growing teams worldwide
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;