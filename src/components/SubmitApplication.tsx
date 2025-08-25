import React from 'react';

const SubmitApplication: React.FC = () => {
  return (
    <section className='py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute top-20 right-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl'></div>
      <div className='absolute bottom-20 left-20 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl'></div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='text-center max-w-4xl mx-auto'>
                                <div className='mb-16'>
                        <h2 className='text-4xl md:text-5xl font-bold text-slate-900 mb-6'>
                          Submit Your Application
                        </h2>
                        <p className='text-xl text-slate-600 leading-relaxed'>
                          Ready to join Central Florida's most distinguished business
                          community? Submit your application today and take the first step
                          toward recognition and growth.
                        </p>
                      </div>

          <div className='grid md:grid-cols-3 gap-8 mb-16'>
            <div className='bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-slate-200 hover:shadow-xl transition-all duration-300'>
              <div className='w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6'>
                <svg className='w-8 h-8 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
              </div>
                                        <h3 className='text-xl font-bold text-slate-900 mb-4 text-center'>
                            Quick 5-Minute Process
                          </h3>
                          <p className='text-slate-600 text-center leading-relaxed'>
                            Simple online form with straightforward questions about your company
                          </p>
            </div>

            <div className='bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-slate-200 hover:shadow-xl transition-all duration-300'>
              <div className='w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6'>
                <svg className='w-8 h-8 text-green-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1' />
                </svg>
              </div>
              <h3 className='text-xl font-bold text-slate-900 mb-4 text-center'>
                No Application Fee
              </h3>
              <p className='text-slate-600 text-center leading-relaxed'>
                Completely free to apply - no hidden costs or charges
              </p>
            </div>

            <div className='bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-slate-200 hover:shadow-xl transition-all duration-300'>
              <div className='w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-6'>
                <svg className='w-8 h-8 text-indigo-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                </svg>
              </div>
              <h3 className='text-xl font-bold text-slate-900 mb-4 text-center'>
                Instant Confirmation
              </h3>
              <p className='text-slate-600 text-center leading-relaxed'>
                Immediate email confirmation with next steps
              </p>
            </div>
          </div>

          <div className='bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-12 border border-slate-200'>
            <h3 className='text-3xl font-bold text-slate-900 mb-6'>
              Ready to Get Started?
            </h3>
            <p className='text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed'>
              Join our exclusive network of distinguished businesses and access unique
              networking, visibility, and business growth opportunities.
            </p>
            <div className='flex flex-col sm:flex-row gap-6 justify-center items-center'>
              <a
                href='https://forms.office.com/r/ez5w9LPJ4g?origin=lprLink'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-12 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg'
              >
                Start Application →
              </a>
              <a
                href='mailto:solutions@cfopro.io'
                className='inline-block text-blue-600 hover:text-blue-700 font-semibold text-lg border-b-2 border-blue-300 hover:border-blue-600 transition-colors duration-300'
              >
                Questions? Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubmitApplication;
