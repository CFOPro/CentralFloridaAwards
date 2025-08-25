import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className='py-24 lg:py-32 bg-gradient-primary relative overflow-hidden'>
      {/* Professional Background Image */}
      <div
        className='absolute inset-0 z-0'
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920&h=1080&auto=format&fit=crop&ixlib=rb-4.0.3)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='absolute inset-0 bg-primary/90'></div>
      </div>

      {/* Professional Background Elements */}
      <div className='absolute inset-0 z-10'>
        <div className='absolute top-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl'></div>
        <div className='absolute bottom-20 right-20 w-80 h-80 bg-primary-light/10 rounded-full blur-3xl'></div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20'>
        <div className='text-center'>
          {/* Professional Badge */}
          <div className='inline-flex items-center gap-3 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl mb-10 backdrop-blur-sm'>
            <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                clipRule='evenodd'
              />
            </svg>
            <span className='font-semibold text-lg'>
              Join Central Florida's Business Community
            </span>
          </div>

          {/* Main Headline */}
          <h2 className='text-5xl md:text-6xl font-bold leading-tight mb-8 text-white tracking-tight'>
            Ready to Connect with
            <span className='block text-primary-light'>Central Florida's</span>
            <span className='block text-4xl md:text-5xl'>
              Business Leaders?
            </span>
          </h2>

          {/* Professional Copy */}
          <div className='max-w-5xl mx-auto mb-16 space-y-6'>
            <p className='text-xl md:text-2xl text-white/95 leading-relaxed'>
              Apply for recognition and join our professional network of
              distinguished businesses committed to growth, innovation, and
              community impact in Central Florida.
            </p>

            <div className='grid md:grid-cols-3 gap-6 mt-12'>
              <div className='bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6'>
                <div className='text-3xl font-bold text-primary-light mb-2'>
                  300+
                </div>
                <div className='text-white/90 font-semibold'>
                  Network Members
                </div>
                <div className='text-sm text-white/70 mt-1'>
                  Growing community
                </div>
              </div>
              <div className='bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6'>
                <div className='text-3xl font-bold text-primary-light mb-2'>
                  100%
                </div>
                <div className='text-white/90 font-semibold'>Complimentary</div>
                <div className='text-sm text-white/70 mt-1'>
                  No application fees
                </div>
              </div>
              <div className='bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6'>
                <div className='text-3xl font-bold text-primary-light mb-2'>
                  5min
                </div>
                <div className='text-white/90 font-semibold'>Application</div>
                <div className='text-sm text-white/70 mt-1'>
                  Quick and simple
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Overview */}
          <div className='bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-12 mb-16 max-w-6xl mx-auto'>
            <h3 className='text-3xl font-bold text-white mb-8'>
              What Our Network Offers:
            </h3>
            <div className='grid md:grid-cols-2 gap-8 text-left'>
              <div className='space-y-4'>
                <div className='flex items-start gap-4'>
                  <div className='w-6 h-6 bg-primary-light rounded-full flex-shrink-0 mt-1 flex items-center justify-center'>
                    <svg
                      className='w-4 h-4 text-primary'
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
                    <div className='text-white font-semibold text-lg'>
                      Professional Recognition
                    </div>
                    <div className='text-white/70'>
                      Official award badge and digital certificate
                    </div>
                  </div>
                </div>
                <div className='flex items-start gap-4'>
                  <div className='w-6 h-6 bg-primary-light rounded-full flex-shrink-0 mt-1 flex items-center justify-center'>
                    <svg
                      className='w-4 h-4 text-primary'
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
                    <div className='text-white font-semibold text-lg'>
                      Business Networking
                    </div>
                    <div className='text-white/70'>
                      Connect with industry leaders and peers
                    </div>
                  </div>
                </div>
                <div className='flex items-start gap-4'>
                  <div className='w-6 h-6 bg-primary-light rounded-full flex-shrink-0 mt-1 flex items-center justify-center'>
                    <svg
                      className='w-4 h-4 text-primary'
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
                    <div className='text-white font-semibold text-lg'>
                      Media Coverage
                    </div>
                    <div className='text-white/70'>
                      Press releases and promotional opportunities
                    </div>
                  </div>
                </div>
              </div>
              <div className='space-y-4'>
                <div className='flex items-start gap-4'>
                  <div className='w-6 h-6 bg-primary-light rounded-full flex-shrink-0 mt-1 flex items-center justify-center'>
                    <svg
                      className='w-4 h-4 text-primary'
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
                    <div className='text-white font-semibold text-lg'>
                      Referral Network
                    </div>
                    <div className='text-white/70'>
                      Business referrals from trusted partners
                    </div>
                  </div>
                </div>
                <div className='flex items-start gap-4'>
                  <div className='w-6 h-6 bg-primary-light rounded-full flex-shrink-0 mt-1 flex items-center justify-center'>
                    <svg
                      className='w-4 h-4 text-primary'
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
                    <div className='text-white font-semibold text-lg'>
                      Growth Resources
                    </div>
                    <div className='text-white/70'>
                      Access to business development tools
                    </div>
                  </div>
                </div>
                <div className='flex items-start gap-4'>
                  <div className='w-6 h-6 bg-primary-light rounded-full flex-shrink-0 mt-1 flex items-center justify-center'>
                    <svg
                      className='w-4 h-4 text-primary'
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
                    <div className='text-white font-semibold text-lg'>
                      Community Impact
                    </div>
                    <div className='text-white/70'>
                      Showcase your community contributions
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional CTA */}
          <div className='space-y-8'>
            <a
              href='https://forms.office.com/r/ez5w9LPJ4g?origin=lprLink'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block bg-white hover:bg-gray-50 text-primary font-bold py-6 px-16 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-professional-lg text-2xl'
            >
              Apply for Recognition
            </a>

            <div className='space-y-4'>
              <p className='text-xl text-white/90'>
                Join Central Florida's distinguished business community
              </p>
              <div className='flex flex-col sm:flex-row justify-center items-center gap-6 text-white/80'>
                <div className='flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/20'>
                  <svg
                    className='w-5 h-5 text-primary-light'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span className='font-semibold'>No Application Fee</span>
                </div>
                <div className='flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/20'>
                  <svg
                    className='w-5 h-5 text-primary-light'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span className='font-semibold'>Quick Application</span>
                </div>
                <div className='flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/20'>
                  <svg
                    className='w-5 h-5 text-primary-light'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span className='font-semibold'>Professional Network</span>
                </div>
              </div>
              <p className='text-lg text-white/80 mt-6'>
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
      </div>
    </section>
  );
};

export default CTA;
