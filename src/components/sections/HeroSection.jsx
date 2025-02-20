import React from 'react';
import { Play, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,#f3f4f6_25%,transparent_25%,transparent_75%,#f3f4f6_75%,#f3f4f6),linear-gradient(45deg,#f3f4f6_25%,transparent_25%,transparent_75%,#f3f4f6_75%,#f3f4f6)] bg-[length:60px_60px] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image for mobile */}
          <div className="absolute inset-0 lg:hidden">
            <div className="w-full h-full opacity-10">
              <img 
                src="/src/assets/images/image 1.png"
                alt="Background illustration"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Left Content */}
          <div className="relative z-10">
            <div className="inline-block px-4 py-2 bg-teal-100 rounded-full mb-6">
              <span className="text-teal-600 font-medium">BEST TECH SERVICE</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
              Make The Easiest Solution For You
            </h1>
            
            <p className="text-gray-600 text-lg mb-8 max-w-xl">
              Energistically harness ubiquitous imperative without state of the art collaboration and idea-sharing. Monotonectally parallel task cross-unit experience and front-end.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#about" 
                className="px-8 py-4 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all flex items-center group shadow-lg hover:shadow-teal-500/50"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>ABOUT US</span>
                <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              
              <button style={{display: "none"}} className="px-6 py-4 flex items-center space-x-3 text-gray-700 hover:text-teal-600 transition-colors group">
                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg group-hover:shadow-teal-500/30 transition-all">
                  <Play className="w-5 h-5 fill-current" />
                </div>
                <span className="font-medium">Watch Our Story</span>
              </button>
            </div>
          </div>

          {/* Right Content - Hidden on mobile */}
          <div className="relative hidden lg:block">
            <div className="relative z-10">
              <img 
                src="/src/assets/images/image 1.png"
                alt="Team collaboration illustration"
                className="w-full h-auto rounded-lg"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-100 rounded-full opacity-50 blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-100 rounded-full opacity-50 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;