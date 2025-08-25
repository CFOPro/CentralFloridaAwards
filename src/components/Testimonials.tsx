import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechFlow Solutions',
      role: 'CEO',
      content:
        "Since joining the Spotlight program, we've seen a 40% increase in qualified leads and secured three major partnerships. The networking opportunities are invaluable.",
      image: '👩‍💼',
    },
    {
      name: 'Michael Chen',
      company: 'Orlando Consulting Group',
      role: 'Managing Partner',
      content:
        'The credibility boost from being recognized in this exclusive program has opened doors we never thought possible. Our client base has expanded significantly.',
      image: '👨‍💼',
    },
    {
      name: 'Emily Rodriguez',
      company: 'Innovate Marketing',
      role: 'Founder',
      content:
        "The connections we've made through this program have been game-changing. We've doubled our revenue in just 6 months thanks to the new business relationships.",
      image: '👩‍💻',
    },
  ];

  return (
    <section id='testimonials' className='py-24 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-20'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
            Success Stories from Our Members
          </h2>
          <p className='text-xl text-[--color-gray-custom] max-w-3xl mx-auto leading-relaxed'>
            Hear from business leaders who have transformed their growth through
            our recognition program.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className='bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
            >
              <div className='flex items-center mb-6'>
                <div className='text-5xl mr-4'>{testimonial.image}</div>
                <div>
                  <h4 className='font-bold text-gray-900 text-lg'>
                    {testimonial.name}
                  </h4>
                  <p className='text-[--color-primary] font-semibold'>
                    {testimonial.company}
                  </p>
                  <p className='text-sm text-[--color-gray-custom]'>
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <blockquote className='text-[--color-gray-custom] leading-relaxed italic text-base'>
                "{testimonial.content}"
              </blockquote>
            </div>
          ))}
        </div>

        <div className='text-center mt-16'>
          <div className='inline-flex items-center gap-3 bg-[--color-primary]/10 text-[--color-primary] px-8 py-4 rounded-full'>
            <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20'>
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                clipRule='evenodd'
              />
            </svg>
            <span className='font-bold text-lg'>
              Join 150+ successful businesses
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
