import React from 'react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: (
        <svg
          className='w-8 h-8'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
          />
        </svg>
      ),
      title: 'Exclusive Networking Network',
      description:
        'Connect with innovative entrepreneurs and established leaders in Central Florida. Build strategic alliances and expand your professional circle.',
    },
    {
      icon: (
        <svg
          className='w-8 h-8'
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
      ),
      title: 'Professional Recognition',
      description:
        'Display your official badge on your website, marketing materials, and social media to enhance credibility and attract quality clients.',
    },
    {
      icon: (
        <svg
          className='w-8 h-8'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z'
          />
        </svg>
      ),
      title: 'Media Exposure',
      description:
        'Benefit from press releases, social media features, and promotional opportunities that showcase your business achievements.',
    },
    {
      icon: (
        <svg
          className='w-8 h-8'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1'
          />
        </svg>
      ),
      title: 'Referral Opportunities',
      description:
        'Access our referral network where participants recommend each other, creating new business opportunities.',
    },
    {
      icon: (
        <svg
          className='w-8 h-8'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M13 10V3L4 14h7v7l9-11h-7z'
          />
        </svg>
      ),
      title: 'Growth Resources',
      description:
        'Access exclusive workshops, business development tools, and mentorship opportunities to accelerate your company growth.',
    },
    {
      icon: (
        <svg
          className='w-8 h-8'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6'
          />
        </svg>
      ),
      title: 'Digital Certificate',
      description:
        'Receive a professional digital certificate suitable for framing and display in your office, demonstrating your commitment to business excellence.',
    },
  ];

  return (
    <section
      id='benefits'
      className='py-24 bg-gray-50 relative overflow-hidden'
    >
      {/* Professional Background Images */}
      <div className='absolute top-0 right-0 w-1/3 h-96 opacity-10'>
        <div
          className='w-full h-full rounded-l-3xl'
          style={{
            backgroundImage: 'url(https://picsum.photos/800/600?random=3)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      </div>
      <div className='absolute bottom-0 left-0 w-1/4 h-64 opacity-10'>
        <div
          className='w-full h-full rounded-r-3xl'
          style={{
            backgroundImage: 'url(https://picsum.photos/600/400?random=4)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='text-center mb-20'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray mb-6'>
            Why Apply?
          </h2>
          <p className='text-xl text-gray/80 max-w-3xl mx-auto leading-relaxed'>
            Join Central Florida's most prestigious business recognition program
            and unlock exclusive benefits for your growing company.
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className='bg-white rounded-2xl shadow-professional p-8 border border-gray/20 text-center hover:shadow-professional-lg transition-all duration-300 hover:-translate-y-1'
            >
              <div className='text-primary mb-6 flex justify-center p-4 bg-primary/10 rounded-xl mx-auto w-fit'>
                {benefit.icon}
              </div>
              <h3 className='text-xl font-bold text-gray mb-4'>
                {benefit.title}
              </h3>
              <p className='text-gray/70 leading-relaxed text-base'>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
