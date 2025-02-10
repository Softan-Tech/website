import React from 'react';
import { CheckCircle } from 'lucide-react';

const ExperienceSection = () => {
  const stats = [
    { number: '98%', label: 'Project Success' },
    { number: '10+', label: 'Years Experience' },
    { number: '250+', label: 'Happy Clients' },
  ];

  const benefits = [
    'Expert team of developers and designers',
    'Proven track record of successful projects',
    'Cutting-edge technology solutions',
    'Dedicated support and maintenance',
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              More Than 10 Year Experience We Provide IT Services
            </h2>
            
            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-primary w-6 h-6" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img 
              src="/api/placeholder/600/400"
              alt="Experience showcase"
              className="w-full rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-8 -right-8 bg-primary text-white p-6 rounded-lg">
              <div className="text-4xl font-bold mb-2">10+</div>
              <div>Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;