import React from 'react';

const Process: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Submit Application',
      description:
        'Complete our streamlined application form in just 5 minutes. Tell us about your business growth, community impact, and unique achievements.',
      duration: '5 min',
      color: 'from-primary to-primary-light',
    },
    {
      number: '02',
      title: 'Application Review',
      description:
        'Our expert panel of business leaders and entrepreneurs carefully evaluates each application against our recognition criteria.',
      duration: '7-10 days',
      color: 'from-primary-light to-white',
    },
    {
      number: '03',
      title: 'Interview Process',
      description:
        'Selected candidates participate in a brief virtual interview to discuss their business journey and future growth plans.',
      duration: '30 min',
      color: 'from-gray to-primary',
    },
    {
      number: '04',
      title: 'Award Notification',
      description:
        'Recipients are notified and invited to join our exclusive network of Central Florida Rising Businesses with full recognition benefits.',
      duration: 'Immediate',
      color: 'from-primary to-gray',
    },
  ];

  return (
    <section className='py-24 lg:py-32 bg-gradient-subtle relative overflow-hidden'>
      {/* Background Image */}
      <div
        className='absolute inset-0 opacity-10'
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>

      {/* Background Elements */}
      <div className='absolute inset-0 z-10'>
        <div className='absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl'></div>
        <div className='absolute bottom-20 right-1/4 w-80 h-80 bg-primary-light/5 rounded-full blur-3xl'></div>
      </div>

      {/* Grid Pattern */}
      <div className='absolute inset-0 opacity-[0.02] z-10'>
        <div
          className='h-full w-full'
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23000000' fill-opacity='1'%3e%3cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`,
          }}
        ></div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20'>
        {/* Section Header */}
        <div className='text-center mb-20'>
          <div className='inline-flex items-center gap-3 bg-primary/10 text-primary px-6 py-3 rounded-full mb-6 border border-primary/20'>
            <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
              <path
                fillRule='evenodd'
                d='M10 2L3 7v11a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V7l-7-5z'
                clipRule='evenodd'
              />
            </svg>
            <span className='font-bold text-sm uppercase tracking-wider'>
              Application Process
            </span>
          </div>
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight'>
            Four Simple Steps to
            <span className='block bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent'>
              Business Recognition
            </span>
          </h2>
          <p className='text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed'>
            Our streamlined process is designed to be fast, fair, and focused on
            celebrating your business achievements.
          </p>
        </div>

        {/* Process Steps */}
        <div className='space-y-16'>
          {steps.map((step, index) => (
            <div key={index} className='relative'>
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className='absolute left-1/2 -bottom-16 w-px h-16 bg-gradient-to-b from-primary/30 to-transparent transform -translate-x-1/2 hidden lg:block'></div>
              )}

              <div
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-cols-2' : ''
                }`}
              >
                {/* Content */}
                <div
                  className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                >
                  <div className='flex items-center gap-4 mb-6'>
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center shadow-modern transform rotate-3 hover:rotate-0 transition-transform duration-300`}
                    >
                      <span className='text-2xl font-black text-white'>
                        {step.number}
                      </span>
                    </div>
                    <div className='bg-primary-light/10 text-primary px-4 py-2 rounded-full border border-primary-light/20'>
                      <span className='font-bold text-sm'>{step.duration}</span>
                    </div>
                  </div>

                  <h3 className='text-3xl md:text-4xl font-black text-gray-900 leading-tight'>
                    {step.title}
                  </h3>

                  <p className='text-lg md:text-xl text-gray-600 leading-relaxed'>
                    {step.description}
                  </p>

                  {index === 0 && (
                    <div className='pt-4'>
                      <a
                        href='https://forms.office.com/r/ez5w9LPJ4g?origin=lprLink'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center gap-3 bg-primary hover:bg-primary-light text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-modern group'
                      >
                        <span>Start Your Application</span>
                        <svg
                          className='w-5 h-5 transform group-hover:translate-x-1 transition-transform'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M13 7l5 5m0 0l-5 5m5-5H6'
                          />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>

                {/* Visual Element */}
                <div
                  className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                >
                  <div
                    className={`w-full h-80 bg-gradient-to-br ${step.color} rounded-3xl shadow-modern-lg relative overflow-hidden group`}
                  >
                    {/* Abstract Pattern */}
                    <div className='absolute inset-0 opacity-20'>
                      <div className='absolute top-8 left-8 w-16 h-16 border-2 border-white rounded-full'></div>
                      <div className='absolute top-16 right-12 w-12 h-12 border-2 border-white rounded-full'></div>
                      <div className='absolute bottom-12 left-16 w-8 h-8 border-2 border-white rounded-full'></div>
                      <div className='absolute bottom-8 right-8 w-20 h-20 border-2 border-white rounded-full'></div>
                    </div>

                    {/* Center Icon */}
                    <div className='absolute inset-0 flex items-center justify-center'>
                      <div className='w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300'>
                        {index === 0 && (
                          <svg
                            className='w-12 h-12 text-white'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                            />
                          </svg>
                        )}
                        {index === 1 && (
                          <svg
                            className='w-12 h-12 text-white'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4'
                            />
                          </svg>
                        )}
                        {index === 2 && (
                          <svg
                            className='w-12 h-12 text-white'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'
                            />
                          </svg>
                        )}
                        {index === 3 && (
                          <svg
                            className='w-12 h-12 text-white'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className='text-center mt-20 pt-12 border-t border-gray-200'>
          <div className='bg-white rounded-3xl shadow-modern-lg p-12 max-w-4xl mx-auto border border-gray-100'>
            <h3 className='text-3xl md:text-4xl font-black text-gray-900 mb-4'>
              Ready to Get Started?
            </h3>
            <p className='text-xl text-gray-600 mb-8'>
              Join Central Florida's most distinguished business network today.
            </p>
            <a
              href='https://forms.office.com/r/ez5w9LPJ4g?origin=lprLink'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-3 bg-gradient-modern text-white font-bold py-5 px-12 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-modern-lg group text-lg'
            >
              <span>Begin Application Process</span>
              <svg
                className='w-6 h-6 transform group-hover:translate-x-1 transition-transform'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M13 7l5 5m0 0l-5 5m5-5H6'
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
