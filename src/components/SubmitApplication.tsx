import React from 'react';

const SubmitApplication: React.FC = () => {
  return (
    <section className='py-24 lg:py-32 bg-gradient-subtle relative overflow-hidden'>
      {/* Professional Background Images */}
      <div
        className='absolute top-0 left-0 w-full h-full opacity-5'
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1920&h=1080&auto=format&fit=crop&ixlib=rb-4.0.3)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>

      <div className='absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl'></div>
      <div className='absolute bottom-20 left-20 w-80 h-80 bg-primary-light/5 rounded-full blur-3xl'></div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* Left side - Content */}
          <div className='space-y-8'>
            <div>
              <h2 className='text-4xl md:text-5xl font-bold text-gray mb-6'>
                Submit Your Application
              </h2>
              <p className='text-xl text-gray/80 leading-relaxed mb-8'>
                Ready to join Central Florida's most distinguished business
                community? Submit your application today and take the first step
                toward recognition and growth.
              </p>
            </div>

            <div className='space-y-6'>
              <div className='flex items-start gap-4'>
                <div className='w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center flex-shrink-0 mt-1'>
                  <svg
                    className='w-5 h-5'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <div>
                  <h3 className='text-xl font-bold text-gray mb-2'>
                    Quick 5-Minute Process
                  </h3>
                  <p className='text-gray/70'>
                    Simple online form with straightforward questions about your
                    business
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center flex-shrink-0 mt-1'>
                  <svg
                    className='w-5 h-5'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <div>
                  <h3 className='text-xl font-bold text-gray mb-2'>
                    No Application Fee
                  </h3>
                  <p className='text-gray/70'>
                    Completely free to apply - no hidden costs or charges
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center flex-shrink-0 mt-1'>
                  <svg
                    className='w-5 h-5'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <div>
                  <h3 className='text-xl font-bold text-gray mb-2'>
                    Instant Confirmation
                  </h3>
                  <p className='text-gray/70'>
                    Immediate email confirmation with next steps
                  </p>
                </div>
              </div>
            </div>

            <div className='pt-6'>
              <a
                href='https://forms.office.com/r/ez5w9LPJ4g?origin=lprLink'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-block bg-primary hover:bg-primary/90 text-white font-bold py-4 px-12 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-professional text-lg mr-6'
              >
                Start Application →
              </a>
              <a
                href='mailto:solutions@cfopro.io'
                className='inline-block text-primary hover:text-primary/80 font-semibold text-lg border-b-2 border-primary/30 hover:border-primary transition-colors duration-300'
              >
                Questions? Contact Us
              </a>
            </div>
          </div>

          {/* Right side - Image Grid */}
          <div className='grid grid-cols-2 gap-6'>
            <div className='space-y-6'>
              <div className='relative group overflow-hidden rounded-2xl shadow-professional hover:shadow-professional-lg transition-all duration-300'>
                <img
                  src='https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=600&h=800&auto=format&fit=crop&ixlib=rb-4.0.3'
                  alt='Business application process'
                  className='w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105'
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src =
                      'https://via.placeholder.com/600x800/1976BB/FFFFFF?text=Business+Application';
                  }}
                />
                <div className='absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              </div>
              <div className='relative group overflow-hidden rounded-2xl shadow-professional hover:shadow-professional-lg transition-all duration-300'>
                <img
                  src='https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=600&h=600&auto=format&fit=crop&ixlib=rb-4.0.3'
                  alt='Professional networking'
                  className='w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105'
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src =
                      'https://via.placeholder.com/600x600/77D4FC/FFFFFF?text=Professional+Network';
                  }}
                />
                <div className='absolute inset-0 bg-gradient-to-t from-primary-light/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              </div>
            </div>
            <div className='space-y-6 pt-12'>
              <div className='relative group overflow-hidden rounded-2xl shadow-professional hover:shadow-professional-lg transition-all duration-300'>
                <img
                  src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&h=600&auto=format&fit=crop&ixlib=rb-4.0.3'
                  alt='Business recognition'
                  className='w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105'
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src =
                      'https://via.placeholder.com/600x600/677889/FFFFFF?text=Business+Recognition';
                  }}
                />
                <div className='absolute inset-0 bg-gradient-to-t from-gray/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              </div>
              <div className='relative group overflow-hidden rounded-2xl shadow-professional hover:shadow-professional-lg transition-all duration-300'>
                <img
                  src='https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&h=800&auto=format&fit=crop&ixlib=rb-4.0.3'
                  alt='Business growth'
                  className='w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105'
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src =
                      'https://via.placeholder.com/600x800/1976BB/FFFFFF?text=Business+Growth';
                  }}
                />
                <div className='absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubmitApplication;
