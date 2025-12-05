import React, { useState } from 'react';
import logo5 from "../../src/assets/logo5.png";

const Navbar = ({ activeSection, onSectionClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Profile', id: 'profile' },
    { name: 'Attendance', id: 'attendance' },
    { name: 'Employees', id: 'employees' },
    { name: 'Leaves', id: 'leaves' },
    { name: 'Reports', id: 'reports' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' }
  ];

  const handleNavClick = (sectionId) => {
    onSectionClick(sectionId);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo container - adjusted size */}
          <div className="flex-shrink-0 flex items-center">
            <img
              src={logo5}
              alt="Vorn HR Logo"
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2 ml-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition duration-300
                  ${
                    activeSection === item.id
                      ? 'bg-[#3fc6e4] text-white shadow-lg'
                      : 'bg-white text-[#191919] hover:bg-[#3fc6e4] hover:text-white'
                  }
                `}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#191919] hover:bg-[#3fc6e4] hover:text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition duration-300"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-3 py-2 rounded-md text-base font-medium transition duration-300
                    ${
                      activeSection === item.id
                        ? 'bg-[#3fc6e4] text-white'
                        : 'bg-white text-[#191919] hover:bg-[#3fc6e4] hover:text-white'
                    }
                  `}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
