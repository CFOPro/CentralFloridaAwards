import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className='bg-gradient-primary text-white py-24 lg:py-32 relative overflow-hidden min-h-screen flex items-center'>
      {/* Professional Background Image */}
      <div
        className='absolute inset-0 z-0'
        style={{
          backgroundImage:
            'linear-gradient(135deg, #1976BB 0%, #677889 50%, #77D4FC 100%), url(https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className='absolute inset-0 bg-primary/80'></div>
      </div>

      {/* Professional Background Elements */}
      <div className='absolute inset-0 z-10'>
        <div className='absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl'></div>
        <div className='absolute bottom-20 right-10 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl'></div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full'>
        <div className='text-center'>
          {/* Professional Badge */}
          <div className='inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl mb-10 shadow-professional'>
            <div className='w-6 h-6 bg-primary-light rounded-full flex items-center justify-center'>
              <svg
                className='w-4 h-4 text-primary'
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
            <span className='font-semibold text-lg'>
              Now Accepting Applications for 2025
            </span>
          </div>

          {/* Main Headline */}
          <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 tracking-tight'>
            Central Florida
            <span className='block text-primary-light'>Rising Businesses</span>
            <span className='block text-4xl md:text-5xl lg:text-6xl'>
              Awards
            </span>
          </h1>

          {/* Professional Subheadline */}
          <p className='text-xl md:text-2xl text-white/90 mb-12 max-w-5xl mx-auto leading-relaxed'>
            Join Central Florida's premier business recognition program. Connect
            with distinguished entrepreneurs, build valuable partnerships, and
            showcase your company's achievements within our professional
            network.
          </p>

          {/* Value Props */}
          <div className='flex flex-col sm:flex-row justify-center items-center gap-8 mb-12 text-white/90'>
            <div className='flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20'>
              <div className='w-8 h-8 bg-primary-light rounded-full flex items-center justify-center'>
                <svg
                  className='w-5 h-5 text-primary'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <span className='font-semibold text-lg'>
                Complimentary Application
              </span>
            </div>
            <div className='flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20'>
              <div className='w-8 h-8 bg-primary-light rounded-full flex items-center justify-center'>
                <svg
                  className='w-5 h-5 text-primary'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <span className='font-semibold text-lg'>
                Professional Networking
              </span>
            </div>
            <div className='flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20'>
              <div className='w-8 h-8 bg-primary-light rounded-full flex items-center justify-center'>
                <svg
                  className='w-5 h-5 text-primary'
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
              <span className='font-semibold text-lg'>
                Business Recognition
              </span>
            </div>
          </div>

          {/* Primary CTA */}
          <div className='space-y-6'>
            <a
              href='https://forms.office.com/r/ez5w9LPJ4g?origin=lprLink'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block bg-white hover:bg-gray-50 text-primary font-bold py-6 px-16 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-professional-lg text-xl'
            >
              Apply for Recognition
            </a>
            <p className='text-lg text-white/80'>
              Questions? Contact us at{' '}
              <a
                href='mailto:solutions@cfopro.io'
                className='text-primary-light underline font-semibold'
              >
                solutions@cfopro.io
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
