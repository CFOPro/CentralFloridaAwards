import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-custom text-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Stand Out in Orlando's Most Exclusive
            <span className="block text-primary-light">Business Spotlight</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Join successful entrepreneurs who have multiplied their connections and business opportunities through our recognition program.
          </p>
          
          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-10 text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-light" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">150+ Recognized Companies</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-light" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">500+ Connections Generated</span>
            </div>
          </div>
          
          {/* Primary CTA */}
          <div className="space-y-4">
            <button className="bg-white hover:bg-gray-50 text-primary font-semibold py-5 px-12 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg">
              Request Free Recognition
            </button>
            <p className="text-sm text-white/70">
              Limited spots available • No cost to apply
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
