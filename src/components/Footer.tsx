import React from 'react';

const Footer: React.FC = () => {
  return (
              <footer className='bg-slate-50 text-slate-800 py-16 border-t border-slate-200'>
       <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
         <div className='grid md:grid-cols-4 gap-12'>
           {/* Company Info */}
           <div className='md:col-span-2'>
                          <div className='flex items-center mb-6'>
                <div className='w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mr-4 shadow-sm'>
                  <svg
                    className='w-6 h-6 text-white'
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
                <div>
                  <h3 className='text-2xl font-bold text-slate-900'>
                    Central Florida
                  </h3>
                                    <p className='text-sm text-slate-600 font-medium'>
                     Business Awards
                   </p>
                </div>
              </div>
                          <p className='text-slate-600 mb-8 max-w-md leading-relaxed'>
                Recognizing and celebrating the most innovative and
                fastest-growing businesses in Central Florida. Building a
                community of excellence and collaboration.
              </p>
                                                   <div className='flex space-x-4'>
                <a
                  href='#'
                  className='text-slate-600 hover:text-blue-600 transition-colors duration-200 p-2 hover:bg-white rounded-lg'
                >
                  <span className='sr-only'>LinkedIn</span>
                  <svg
                    className='h-6 w-6'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                  </svg>
                </a>
                <a
                  href='#'
                  className='text-slate-600 hover:text-blue-600 transition-colors duration-200 p-2 hover:bg-white rounded-lg'
                >
                  <span className='sr-only'>Twitter</span>
                  <svg
                    className='h-6 w-6'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' />
                  </svg>
                </a>
              </div>
          </div>

                     {/* Quick Links */}
           <div>
             <h4 className='text-lg font-semibold mb-6 text-slate-900'>Quick Links</h4>
                          <ul className='space-y-4'>
                <li>
                  <a
                    href='#benefits'
                    className='text-slate-600 hover:text-blue-600 transition-colors duration-200 hover:underline'
                  >
                    Why Apply
                  </a>
                </li>
                <li>
                  <a
                    href='#criteria'
                    className='text-slate-600 hover:text-blue-600 transition-colors duration-200 hover:underline'
                  >
                    Criteria
                  </a>
                </li>
                <li>
                  <a
                    href='#process'
                    className='text-slate-600 hover:text-blue-600 transition-colors duration-200 hover:underline'
                  >
                    Application Process
                  </a>
                </li>
                <li>
                  <a
                    href='https://forms.office.com/r/ez5w9LPJ4g?origin=lprLink'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-slate-600 hover:text-blue-600 transition-colors duration-200 hover:underline'
                  >
                    Apply Now
                  </a>
                </li>
              </ul>
          </div>

                     {/* Contact Info */}
           <div>
             <h4 className='text-lg font-semibold mb-6 text-slate-900'>Contact</h4>
                                                    <div className='space-y-4 text-slate-600'>
                 <p>Central Florida</p>
                                   <p>
                    <a href='mailto:solutions@cfopro.io' className='hover:text-blue-600 transition-colors duration-200 hover:underline'>
                      solutions@cfopro.io
                    </a>
                  </p>
                 <p>For inquiries about the program</p>
               </div>
          </div>
        </div>

                                   <div className='border-t border-slate-200 mt-12 pt-8 text-center'>
            <p className='text-slate-500 text-sm'>
              © 2025 Central Florida Business Awards. All rights
              reserved.
            </p>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
