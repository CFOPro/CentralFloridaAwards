import React from 'react';

const Criteria: React.FC = () => {
  const criteria = [
    {
      title: 'Location',
      description:
        'Business must be located in Central Florida (Orange, Seminole, Osceola, Lake, or Volusia County)',
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
            d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
          />
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
          />
        </svg>
      ),
    },
    {
      title: 'Business Age',
      description:
        'Established for at least 12 months with documented business operations and growth',
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
            d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      ),
    },
    {
      title: 'Growth Trajectory',
      description:
        'Demonstrable business growth in revenue, employees, or market presence over the past year',
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
            d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
          />
        </svg>
      ),
    },
    {
      title: 'Community Impact',
      description:
        'Active involvement in the local Central Florida business community or charitable initiatives',
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
            d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
          />
        </svg>
      ),
    },
    {
      title: 'Innovation',
      description:
        'Unique approach to business, innovative products/services, or creative problem-solving methods',
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
            d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
          />
        </svg>
      ),
    },
    {
      title: 'Professional Standing',
      description:
        'Good standing with relevant licensing boards, BBB, or industry organizations (if applicable)',
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
            d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      ),
    },
  ];

  return (
    <section id='criteria' className='py-24 bg-white relative overflow-hidden'>
      {/* Professional Background Images */}
      <div className='absolute top-0 left-0 w-1/4 h-80 opacity-10'>
        <div
          className='w-full h-full rounded-r-3xl'
          style={{
            backgroundImage: 'url(https://picsum.photos/600/800?random=12)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      </div>
      <div className='absolute bottom-0 right-0 w-1/3 h-64 opacity-10'>
        <div
          className='w-full h-full rounded-l-3xl'
          style={{
            backgroundImage: 'url(https://picsum.photos/800/400?random=13)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray mb-6'>
            Qualification Criteria
          </h2>
          <p className='text-xl text-gray/80 max-w-3xl mx-auto leading-relaxed'>
            To be eligible for the Central Florida Rising Businesses Awards,
            your company should meet the following criteria:
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
          {criteria.map((item, index) => (
            <div
              key={index}
              className='flex flex-col items-start p-8 bg-white rounded-xl border border-gray/20 hover:border-primary/30 transition-all duration-300 shadow-professional hover:shadow-professional-lg'
            >
              <div className='flex items-center mb-6'>
                <div className='text-primary mr-4 p-3 bg-primary/10 rounded-xl'>
                  {item.icon}
                </div>
                <h3 className='text-xl font-bold text-gray'>{item.title}</h3>
              </div>
              <p className='text-gray/80 leading-relaxed text-lg'>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className='bg-gradient-subtle rounded-2xl p-12 text-center border border-primary/20 shadow-professional relative overflow-hidden'>
          {/* Background accent */}
          <div className='absolute top-0 right-0 w-32 h-32 bg-primary-light/10 rounded-full blur-2xl'></div>
          <div className='absolute bottom-0 left-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl'></div>

          <div className='relative z-10'>
            <h3 className='text-3xl font-bold text-gray mb-6'>
              Don't Meet All Criteria? Apply Anyway!
            </h3>
            <p className='text-gray/80 mb-8 max-w-2xl mx-auto text-lg leading-relaxed'>
              We evaluate each application holistically. If your business shows
              exceptional promise or unique circumstances, we encourage you to
              apply and tell your story.
            </p>
            <a
              href='https://forms.office.com/r/ez5w9LPJ4g?origin=lprLink'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block bg-primary hover:bg-primary/90 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-professional text-lg'
            >
              Start Your Application →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Criteria;
