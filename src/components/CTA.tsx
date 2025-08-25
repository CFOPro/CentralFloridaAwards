import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="bg-gradient-custom text-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
          Don't miss your opportunity to join Orlando's most exclusive business recognition program. 
          Limited spots available for qualified companies.
        </p>
        
        <div className="space-y-8">
          <button className="bg-white hover:bg-gray-50 text-primary font-bold py-5 px-12 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg">
            Request Free Recognition Now
          </button>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-white/80">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-primary-light" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">No application fee</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/30"></div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-primary-light" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Quick approval process</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/30"></div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-primary-light" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Immediate benefits</span>
            </div>
          </div>
        </div>
        
        <div className="mt-12 p-6 bg-white/10 rounded-2xl">
          <p className="text-base text-white/80">
            <strong>Limited Time:</strong> Only accepting applications from qualified businesses in the Orlando area. 
            Apply today to secure your spot in our exclusive network.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
