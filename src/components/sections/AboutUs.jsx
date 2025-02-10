import React from 'react';

const AboutUs = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Image Column - Made larger */}
          <div className="lg:pl-8">
            <img
              src="/src/assets/images/about-us-left.png"
              alt="Team collaboration"
              className="w-full rounded-[40px] overflow-hidden"
            />
          </div>

          {/* Right Content Column - More space on right */}
          <div className="lg:pr-8 lg:max-w-[650px]">
            {/* Company Logo and Name */}
            <div className="flex items-center gap-3 mb-6">
    
              <h3 className="text-[#2B004D] text-lg">About SOFTAN TECH Solutions Limited</h3>
            </div>

            {/* Main Heading - Increased size and spacing */}
            <h2 className="text-5xl lg:text-[56px] font-bold mb-8 leading-tight">
              We Are Increasing Business Success With{' '}
              <span className="text-indigo-600">Technology</span>
            </h2>

            {/* Description - Added max-width for better readability */}
            <p className="text-gray-600 text-lg mb-10 max-w-2xl">
              Synergistically incentivize effective imperative through fully researched
              intellectual capital. Appropriately fashion client-based.
            </p>

            {/* Action Buttons - Added more space */}
            <div className="flex flex-wrap gap-6 mb-16">
              <button className="bg-indigo-600 text-white px-10 py-4 rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium">
                FOUNDER
              </button>
              <button className="bg-[#1B2437] text-white px-10 py-4 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
                TECHNOLOGY INDEX
              </button>
            </div>

            {/* Founder Card - Made larger with more padding */}
            <div className="bg-gray-100 rounded-2xl p-8 flex gap-8">
              <img
                src="/src/assets/images/founder.png"
                alt="Founder"
                className="w-36 h-36 rounded-xl object-cover"
              />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">
                  The Number One Software Company
                </h3>
                <p className="text-gray-600 mb-6">
                  Synergistically incentivize effective imperative through fully researched
                  intellectual capital. Appropriately fashion client-based.
                </p>
                <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium">
                  VIEW MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;