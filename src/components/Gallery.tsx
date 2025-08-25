import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    {
      url: 'https://picsum.photos/600/400?random=5',
      alt: 'Business professional',
      fallback:
        'https://via.placeholder.com/600x400/1976BB/FFFFFF?text=Business+Professional',
    },
    {
      url: 'https://picsum.photos/600/400?random=6',
      alt: 'Business team',
      fallback:
        'https://via.placeholder.com/600x400/77D4FC/FFFFFF?text=Business+Team',
    },
    {
      url: 'https://picsum.photos/600/400?random=7',
      alt: 'Office meeting',
      fallback:
        'https://via.placeholder.com/600x400/677889/FFFFFF?text=Office+Meeting',
    },
    {
      url: 'https://picsum.photos/600/400?random=8',
      alt: 'Business handshake',
      fallback:
        'https://via.placeholder.com/600x400/1976BB/FFFFFF?text=Business+Partnership',
    },
    {
      url: 'https://picsum.photos/600/400?random=9',
      alt: 'Team collaboration',
      fallback:
        'https://via.placeholder.com/600x400/77D4FC/FFFFFF?text=Team+Collaboration',
    },
    {
      url: 'https://picsum.photos/600/400?random=10',
      alt: 'Modern office',
      fallback:
        'https://via.placeholder.com/600x400/677889/FFFFFF?text=Modern+Office',
    },
  ];

  return (
    <section className='py-16 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray mb-6'>
            Central Florida Business Community
          </h2>
          <p className='text-xl text-gray/80 max-w-3xl mx-auto'>
            Join a thriving network of innovative businesses and entrepreneurial
            leaders making their mark across Central Florida.
          </p>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6'>
          {images.map((image, index) => (
            <div
              key={index}
              className='relative group overflow-hidden rounded-2xl shadow-professional hover:shadow-professional-lg transition-all duration-300'
            >
              <img
                src={image.url}
                alt={image.alt}
                className='w-full h-48 md:h-64 object-cover transition-transform duration-300 group-hover:scale-105'
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = image.fallback;
                }}
              />
              <div className='absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            </div>
          ))}
        </div>

        <div className='text-center mt-12'>
          <p className='text-gray/70 text-lg'>
            Be part of Central Florida's most distinguished business recognition
            program
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
