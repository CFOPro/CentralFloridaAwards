import React from 'react';

const Gallery: React.FC = () => {
  const communityStats = [
    {
      number: '500+',
      label: 'Connected Businesses',
      description: 'Network of small and mid-sized businesses in Central Florida'
    },
    {
      number: '50+',
      label: 'Industries Represented',
      description: 'From technology to professional services'
    },
    {
      number: '1000+',
      label: 'Connections Created',
      description: 'Strategic alliances and business opportunities'
    },
    {
      number: '95%',
      label: 'Satisfaction Rate',
      description: 'Participants who recommend the program'
    }
  ];

  const communityFeatures = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Networking Events',
      description: 'Monthly meetings with local entrepreneurs to create valuable connections'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Business Mentorship',
      description: 'Access to experienced advisors who share knowledge and strategies'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Growth Opportunities',
      description: 'Collaborative projects and referrals that drive business development'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
      title: 'Local Visibility',
      description: 'Featured presence in local media and community social networks'
    }
  ];

  return (
    <section className='py-24 bg-gradient-subtle relative overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0'>
        <div className='absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl'></div>
        <div className='absolute bottom-20 left-20 w-96 h-96 bg-primary-light/5 rounded-full blur-3xl'></div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray mb-6'>
            Central Florida Business Community
          </h2>
          <p className='text-xl text-gray/80 max-w-4xl mx-auto leading-relaxed'>
            Join a thriving network of innovative businesses and business leaders 
            who are making their mark in Central Florida. Build lasting relationships 
            and access unique growth opportunities.
          </p>
        </div>

        {/* Stats Section */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-16'>
          {communityStats.map((stat, index) => (
            <div key={index} className='text-center'>
              <div className='text-4xl md:text-5xl font-bold text-primary mb-2'>
                {stat.number}
              </div>
              <div className='text-lg font-semibold text-gray mb-2'>
                {stat.label}
              </div>
              <div className='text-sm text-gray/70'>
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {communityFeatures.map((feature, index) => (
            <div
              key={index}
              className='bg-white rounded-2xl shadow-professional p-8 border border-gray/10 hover:shadow-professional-lg transition-all duration-300 hover:-translate-y-1'
            >
              <div className='text-primary mb-6 flex justify-center p-4 bg-primary/10 rounded-xl mx-auto w-fit'>
                {feature.icon}
              </div>
              <h3 className='text-xl font-bold text-gray mb-4 text-center'>
                {feature.title}
              </h3>
              <p className='text-gray/70 leading-relaxed text-center'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className='text-center mt-16'>
          <div className='bg-white rounded-2xl shadow-professional p-8 border border-gray/10 max-w-3xl mx-auto'>
            <h3 className='text-2xl font-bold text-gray mb-4'>
              Ready to Join Our Community?
            </h3>
            <p className='text-gray/70 mb-6'>
              Be part of Central Florida's most distinguished business recognition program
            </p>
            <a
              href='https://forms.office.com/r/ez5w9LPJ4g?origin=lprLink'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-professional-lg'
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
