import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo5 from "../../public/logo5.png";

interface NavItem {
  label: string;
  href: string;
}

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems: NavItem[] = [
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Customers", href: "#testimonials" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setIsOpen(false);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow"
          : "bg-white/90 backdrop-blur-md border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src={logo5} alt="Logo" className="h-9 w-auto" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={handleNavClick}
                className="text-gray-700 hover:text-primary-600 text-sm font-medium"
              >
                {item.label}
              </a>
            ))}

            {/* GET STARTED → PRICING */}
            <a
              href="#pricing"
              onClick={handleNavClick}
              className="bg-gradient-to-r from-primary-600 to-primary-700
                         text-white px-4 py-2 rounded-md text-sm font-medium shadow"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ${
            isOpen ? "max-h-80 mt-2" : "max-h-0 overflow-hidden"
          }`}
        >
          <div className="py-3 space-y-2 border-t">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={handleNavClick}
                className="block px-4 py-2 text-sm text-gray-700"
              >
                {item.label}
              </a>
            ))}

            {/* GET STARTED → PRICING (MOBILE) */}
            <a
              href="#pricing"
              onClick={handleNavClick}
              className="block text-center bg-gradient-to-r from-primary-600 to-primary-700
                         text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
