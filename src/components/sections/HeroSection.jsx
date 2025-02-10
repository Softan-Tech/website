import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Make The Easiest Solution For You
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              We help businesses succeed with technology by providing innovative solutions
              and expert services.
            </p>
            <div className="flex space-x-4">
              <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors flex items-center">
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </button>
              <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/api/placeholder/600/500"
              alt="Hero illustration"
              className="w-full rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                  10+
                </div>
                <div>
                  <p className="font-semibold">Years of</p>
                  <p className="text-primary">Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;