import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">Orlando Business Spotlight</h1>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <a href="#benefits" className="text-gray-custom hover:text-primary font-medium transition-colors duration-200">
              Benefits
            </a>
            <a href="#testimonials" className="text-gray-custom hover:text-primary font-medium transition-colors duration-200">
              Success Stories
            </a>
            <a href="#contact" className="text-gray-custom hover:text-primary font-medium transition-colors duration-200">
              Contact
            </a>
          </nav>
          
          {/* CTA Button */}
          <div className="flex items-center">
            <button className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg p-2">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
