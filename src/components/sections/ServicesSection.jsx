import React from 'react';
import { Monitor, Sparkles, BarChart, Settings, ArrowRight } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white rounded-[32px] p-10 group transition-all duration-500 hover:translate-y-[-8px]">
    {/* Icon Container */}
    <div className="bg-indigo-100/50 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 
                    group-hover:bg-indigo-600 transition-all duration-500">
      <Icon className="w-10 h-10 text-indigo-600 group-hover:text-white transition-all duration-500" />
    </div>

    {/* Content */}
    <h3 className="text-[22px] font-bold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed mb-8">
      {description}
    </p>

    {/* Read More Button */}
    <button className="inline-flex items-center text-indigo-600 font-semibold text-[15px] group/btn">
      READ MORE
      <span className="ml-2 transform translate-x-0 group-hover/btn:translate-x-2 transition-transform duration-300">
        <ArrowRight className="w-5 h-5" />
      </span>
    </button>
  </div>
);

const ProgressCircle = ({ percentage, title, subtitle }) => (
  <div className="relative">
    <div className="flex items-center">
      {/* Progress Circle */}
      <div className="relative">
        <svg className="w-32 h-32 transform -rotate-90">
          <circle 
            cx="64" 
            cy="64" 
            r="54" 
            stroke="currentColor" 
            strokeWidth="6" 
            fill="none" 
            className="text-gray-800"
          />
          <circle 
            cx="64" 
            cy="64" 
            r="54" 
            stroke="currentColor" 
            strokeWidth="6" 
            fill="none" 
            strokeDasharray={339.292}
            strokeDashoffset={339.292 * (1 - percentage/100)}
            className="text-indigo-600 transition-[stroke-dashoffset] duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-white">{percentage}%</span>
        </div>
      </div>
      
      {/* Title and Subtitle */}
      <div className="ml-6">
        <h4 className="text-xl font-semibold text-white mb-1">{title}</h4>
        <p className="text-gray-400">{subtitle}</p>
      </div>
    </div>
  </div>
);

const ServicesSection = () => {
  const services = [
    {
      icon: Monitor,
      title: 'UI/UX Design',
      description: 'Energistically harness ubiquitous imperative without state of the art collaboration and idea-sharing. Monotonectally parallel task cross-unit experience.',
    },
    {
      icon: Sparkles,
      title: 'Digital Marketing',
      description: 'Energistically harness ubiquitous imperative without state of the art collaboration and idea-sharing. Monotonectally parallel task cross-unit experience.',
    },
    {
      icon: BarChart,
      title: 'Business Analysis',
      description: 'Energistically harness ubiquitous imperative without state of the art collaboration and idea-sharing. Monotonectally parallel task cross-unit experience.',
    },
    {
      icon: Settings,
      title: 'Software Services',
      description: 'Energistically harness ubiquitous imperative without state of the art collaboration and idea-sharing. Monotonectally parallel task cross-unit experience.',
    },
  ];

  return (
    <section  id="services" className="relative">
      {/* Main Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/src/assets/images/Programming background with person working with codes on computer.png"
          alt="Programming"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#080B14]/95"></div>
      </div>

      {/* Content Container */}
      <div className="relative max-w-[1600px] mx-auto px-8 lg:px-16 pt-32 pb-20">
        {/* Services Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-20">
          <div>
            {/* Logo & Title */}
            <div className="flex items-center gap-3 mb-6">

              <span className="text-gray-400 text-sm tracking-wider">LATEST PROJECT</span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold text-white max-w-3xl leading-tight">
              We Provide Exclusive Services For{' '}
              <span className="text-indigo-600">Your Business</span>
            </h2>
          </div>

          <button className="mt-8 lg:mt-0 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition-colors 
                           flex items-center gap-2 font-medium">
            VIEW ALL SERVICES
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* Bottom Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* Why Choose Us */}
            <div className="flex items-center gap-3 mb-6">

              <span className="text-gray-400 text-sm tracking-wider">WHY CHOOSE US</span>
            </div>

            <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
              More Than 5+ Year Experience<br />
              We Provide <span className="text-indigo-600">IT Services</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-2xl">
              Synergistically incentivize effective imperative through fully researched 
              intellectual capital. Appropriately fashion client-based.
            </p>

            {/* Progress Indicators */}
            <div className="space-y-8 mb-12">
              <ProgressCircle 
                percentage={90} 
                title="Business Growth" 
                subtitle="Efficiently transition top-line ideas before market."
              />
              <ProgressCircle 
                percentage={95} 
                title="Quality Products" 
                subtitle="Efficiently transition top-line ideas before market."
              />
            </div>

            <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition-colors 
                             flex items-center gap-2 font-medium">
              LEARN MORE
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right Image Section */}
          <div className="relative">
            <img
              src="/src/assets/images/Vector.png"
              alt="Team collaboration"
              className="w-full rounded-[40px] relative z-10"
            />
            
            {/* Active Clients Badge */}
            <div className="absolute top-1/2 -left-16 transform -translate-y-1/2 bg-indigo-600 text-white 
                          w-40 h-40 rounded-full flex flex-col items-center justify-center z-20">
              <span className="text-4xl font-bold">2K+</span>
              <span className="text-sm font-medium mt-1">Active Clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;