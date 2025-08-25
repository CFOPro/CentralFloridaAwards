import React from 'react';
import logo from '../assets/Outlook-4fivdc51.png';

const Header: React.FC = () => {
  return (
    <header className='sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/50 shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-20'>
          {/* Logo */}
          <div className='flex items-center'>
            <div className='mr-4'>
              <img 
                src={logo} 
                alt="CFOPro Logo" 
                className='w-12 h-12 object-contain'
              />
            </div>
            <div>
              <h1 className='text-xl font-bold text-slate-900 leading-tight'>
                Central Florida
              </h1>
              <p className='text-sm text-slate-600 font-medium'>
                Business Awards
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className='hidden md:flex items-center space-x-8'>
            <a
              href='#benefits'
              className='text-slate-700 hover:text-blue-600 font-medium transition-all duration-200 relative group'
            >
              Why Apply
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full'></span>
            </a>
            <a
              href='#criteria'
              className='text-slate-700 hover:text-blue-600 font-medium transition-all duration-200 relative group'
            >
              Criteria
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full'></span>
            </a>
            <a
              href='#process'
              className='text-slate-700 hover:text-blue-600 font-medium transition-all duration-200 relative group'
            >
              Process
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full'></span>
            </a>
          </nav>

          {/* CTA Button */}
          <div className='flex items-center'>
            <a
              href='https://forms.office.com/r/ez5w9LPJ4g?origin=lprLink'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
