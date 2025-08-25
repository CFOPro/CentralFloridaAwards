import React from 'react';

const Header: React.FC = () => {
  return (
    <header className='sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-20'>
          {/* Logo */}
          <div className='flex items-center'>
            <div className='mr-4'>
              <div className='w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-professional'>
                <svg
                  className='w-7 h-7 text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
            </div>
            <div>
              <h1 className='text-xl font-bold text-primary leading-tight'>
                Central Florida
              </h1>
              <p className='text-sm text-gray font-semibold'>
                Rising Businesses Awards
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className='hidden md:flex items-center space-x-8'>
            <a
              href='#benefits'
              className='text-gray hover:text-primary font-medium transition-all duration-200 relative group'
            >
              Why Apply
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full'></span>
            </a>
            <a
              href='#criteria'
              className='text-gray hover:text-primary font-medium transition-all duration-200 relative group'
            >
              Criteria
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full'></span>
            </a>
            <a
              href='#process'
              className='text-gray-custom hover:text-primary font-medium transition-all duration-200 relative group'
            >
              Process
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full'></span>
            </a>
          </nav>

          {/* CTA Button */}
          <div className='flex items-center'>
            <a
              href='https://forms.office.com/r/ez5w9LPJ4g?origin=lprLink'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-modern hover:shadow-modern-lg'
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
