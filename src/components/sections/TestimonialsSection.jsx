import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Robert Johnson',
      role: 'CEO, Tech Corp',
      image: '/api/placeholder/100/100',
      text: 'Working with Softan has been an incredible experience. Their team delivered beyond our expectations.',
      rating: 5,
    },
    {
      name: 'Emily Davis',
      role: 'Marketing Director',
      image: '/api/placeholder/100/100',
      text: 'The digital marketing solutions provided by Softan helped us achieve remarkable growth.',
      rating: 5,
    },
    {
      name: 'David Wilson',
      role: 'Startup Founder',
      image: '/api/placeholder/100/100',
      text: 'Their expertise in web development and design helped us launch our product successfully.',
      rating: 5,
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Happy Clients Say About Us?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear what our clients have to say
            about their experience working with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">{testimonial.text}</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;