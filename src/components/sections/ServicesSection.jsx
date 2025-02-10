import React from 'react';
import { Monitor, Smartphone, BarChart, Code } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Monitor className="w-12 h-12 text-primary" />,
      title: 'Web Design',
      description: 'Create stunning, responsive websites that drive results',
    },
    {
      icon: <Smartphone className="w-12 h-12 text-primary" />,
      title: 'Digital Marketing',
      description: 'Boost your online presence and reach target audience',
    },
    {
      icon: <BarChart className="w-12 h-12 text-primary" />,
      title: 'Business Analysis',
      description: 'Data-driven insights to grow your business',
    },
    {
      icon: <Code className="w-12 h-12 text-primary" />,
      title: 'Software Services',
      description: 'Custom software solutions for your unique needs',
    },
  ];

  return (
    <section className="py-16 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            We Provide Exclusive Services For Your Business
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our comprehensive range of services is designed to help your business
            thrive in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button className="text-primary hover:text-primary-dark font-medium flex items-center">
                Learn More 
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;