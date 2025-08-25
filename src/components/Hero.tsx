import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className='relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden'>
      {/* Professional Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute inset-0' style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Subtle Geometric Elements */}
      <div className='absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob'></div>
      <div className='absolute top-0 right-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000'></div>
      <div className='absolute -bottom-8 left-20 w-96 h-96 bg-slate-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000'></div>

      <div className='relative z-10 w-full'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            
            {/* Professional Status Badge */}
            <div className='inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-200 text-slate-700 px-6 py-3 rounded-full mb-12 shadow-sm'>
              <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></div>
              <span className='font-medium text-sm tracking-wide'>
                Applications Open for 2025
              </span>
            </div>

            {/* Main Headline with Professional Typography */}
            <div className='mb-12'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 leading-tight tracking-tight'>
                Central Florida
                <span className='block text-blue-600 mt-2'>Business Awards</span>
                <span className='block text-3xl md:text-4xl lg:text-5xl text-slate-600 font-light mt-3'>
                  2025
                </span>
              </h1>
            </div>

            {/* Professional Subheadline */}
            <div className='max-w-4xl mx-auto mb-16'>
              <p className='text-xl md:text-2xl text-slate-700 leading-relaxed font-light'>
                Join Central Florida's premier business recognition program and exclusive networking community. 
                Connect with innovative entrepreneurs, build strategic partnerships, and position your company 
                as a leader in the local business ecosystem.
              </p>
            </div>

            {/* Professional Value Propositions */}
            <div className='flex flex-col sm:flex-row justify-center items-center gap-6 mb-16'>
              <div className='flex items-center gap-3 bg-white/70 backdrop-blur-sm px-6 py-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300'>
                <div className='w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center'>
                  <svg className='w-5 h-5 text-blue-600' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                  </svg>
                </div>
                <span className='font-semibold text-slate-800'>Free Application</span>
              </div>
              
              <div className='flex items-center gap-3 bg-white/70 backdrop-blur-sm px-6 py-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300'>
                <div className='w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center'>
                  <svg className='w-5 h-5 text-indigo-600' fill='currentColor' viewBox='0 0 20 20'>
                    <path d='M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z' />
                  </svg>
                </div>
                <span className='font-semibold text-slate-800'>Networking Community</span>
              </div>
              
              <div className='flex items-center gap-3 bg-white/70 backdrop-blur-sm px-6 py-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300'>
                <div className='w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center'>
                  <svg className='w-5 h-5 text-green-600' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                  </svg>
                </div>
                <span className='font-semibold text-slate-800'>Digital Recognition</span>
              </div>
            </div>

            {/* Professional Benefits Section */}
            <div className='grid md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto'>
              <div className='bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300'>
                <div className='w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6'>
                  <svg className='w-6 h-6 text-blue-600' fill='currentColor' viewBox='0 0 20 20'>
                    <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                    <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold mb-4 text-slate-900'>Social Media Amplification</h3>
                <p className='text-slate-600 leading-relaxed'>
                  Your company will be featured on LinkedIn, Instagram, and our website, 
                  generating viral content you can share across your own networks.
                </p>
              </div>
              
              <div className='bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300'>
                <div className='w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6'>
                  <svg className='w-6 h-6 text-indigo-600' fill='currentColor' viewBox='0 0 20 20'>
                    <path d='M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z' />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold mb-4 text-slate-900'>Strategic Connections</h3>
                <p className='text-slate-600 leading-relaxed'>
                  Connect with other innovative entrepreneurs in Central Florida and 
                  build relationships that can become business opportunities.
                </p>
              </div>
              
              <div className='bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300'>
                <div className='w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6'>
                  <svg className='w-6 h-6 text-green-600' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                  </svg>
                </div>
                <h3 className='text-xl font-semibold mb-4 text-slate-900'>Local Positioning</h3>
                <p className='text-slate-600 leading-relaxed'>
                  Position your company as a leader in the local business community 
                  and gain credibility with potential clients and partners.
                </p>
              </div>
            </div>

            {/* Professional Eligibility Criteria */}
            <div className='bg-white/90 backdrop-blur-sm p-10 rounded-3xl border border-slate-200 shadow-lg mb-12 max-w-5xl mx-auto'>
              <h3 className='text-3xl font-bold mb-8 text-center text-slate-900'>
                Does Your Company Qualify?
              </h3>
              <div className='grid md:grid-cols-2 gap-12'>
                <div className='text-left'>
                  <h4 className='font-semibold text-xl mb-6 text-slate-900 flex items-center gap-3'>
                    <div className='w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center'>
                      <svg className='w-4 h-4 text-blue-600' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                      </svg>
                    </div>
                    Requirements
                  </h4>
                  <ul className='space-y-4 text-slate-700'>
                    <li className='flex items-start gap-4'>
                      <div className='w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0'></div>
                      <span className='leading-relaxed'>Small and mid-sized businesses (1-500 employees)</span>
                    </li>
                    <li className='flex items-start gap-4'>
                      <div className='w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0'></div>
                      <span className='leading-relaxed'>Located in Orlando / Central Florida</span>
                    </li>
                    <li className='flex items-start gap-4'>
                      <div className='w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0'></div>
                      <span className='leading-relaxed'>Any industry</span>
                    </li>
                  </ul>
                </div>
                
                <div className='text-left'>
                  <h4 className='font-semibold text-xl mb-6 text-slate-900 flex items-center gap-3'>
                    <div className='w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center'>
                      <svg className='w-4 h-4 text-indigo-600' fill='currentColor' viewBox='0 0 20 20'>
                        <path d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                      </svg>
                    </div>
                    Selection Criteria
                  </h4>
                  <ul className='space-y-4 text-slate-700'>
                    <li className='flex items-start gap-4'>
                      <div className='w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0'></div>
                      <span className='leading-relaxed'>Innovation and growth</span>
                    </li>
                    <li className='flex items-start gap-4'>
                      <div className='w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0'></div>
                      <span className='leading-relaxed'>Culture and engagement</span>
                    </li>
                    <li className='flex items-start gap-4'>
                      <div className='w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0'></div>
                      <span className='leading-relaxed'>Solid financial practices</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Professional CTA Section */}
            <div className='space-y-8'>
              <a
                href='https://forms.office.com/r/ez5w9LPJ4g?origin=lprLink'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-6 px-12 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xl'
              >
                Apply Now
              </a>
              <p className='text-lg text-slate-600'>
                Questions? Contact us at{' '}
                <a
                  href='mailto:solutions@cfopro.io'
                  className='text-blue-600 hover:text-blue-700 underline font-medium transition-colors duration-200'
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

export default Hero;
