import React from 'react'
import { Users, Menu, X } from 'lucide-react'
import { useState } from 'react'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Users className="h-8 w-8 text-blue-600" />
            <div>
              <span className="text-2xl font-bold text-gray-900">HRFlow</span>
              <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-1 rounded-full ml-2">AI</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Features
            </a>
            <a href="#solutions" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Solutions
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Pricing
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-blue-600 font-medium hidden md:block">
              Login
            </button>
            <button className="btn-primary bg-blue-600 hover:bg-blue-700">
              Get Started Free
            </button>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-600 hover:text-blue-600 font-medium">
                Features
              </a>
              <a href="#solutions" className="text-gray-600 hover:text-blue-600 font-medium">
                Solutions
              </a>
              <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 font-medium">
                How It Works
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 font-medium">
                Pricing
              </a>
              <button className="text-gray-600 hover:text-blue-600 font-medium text-left">
                Login
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header