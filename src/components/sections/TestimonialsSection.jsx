import React, { useState } from 'react';
import { Star, ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const TestimonialCard = ({ image, review, name, role, company, rating }) => (
  <div className="relative">
    {/* Background Blur */}
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 to-purple-600/5 rounded-[40px] blur-3xl"></div>
    
    {/* Card Content */}
    <div className="relative bg-white/50 backdrop-blur-xl rounded-[40px] p-8 lg:p-12 overflow-hidden">
      {/* Large Quote Icon */}
      <div className="absolute top-8 right-8 text-indigo-600/10">
        <Quote className="w-24 h-24" />
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-8">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
          />
        ))}
      </div>

      {/* Review */}
      <p className="text-gray-600 leading-relaxed mb-8 text-lg">{review}</p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-bold text-xl mb-1">{name}</h4>
          <p className="text-gray-600">{role} at {company}</p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-600/5 rounded-full blur-2xl"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/5 rounded-full blur-2xl"></div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      image: '/src/assets/images/Rectangle 10.png',
      review: 'Energistically harness ubiquitous imperative without state of the art collaboration and idea-sharing. Monotonectally parallel task cross-unit experience and front-end.',
      name: 'Sussan K',
      role: 'CEO',
      company: 'KOmola',
      rating: 5
    },
    {
      image: '/src/assets/images/Rectangle 7.png',
      review: 'Energistically harness ubiquitous imperative without state of the art collaboration and idea-sharing. Monotonectally parallel task cross-unit experience and front-end.',
      name: 'Handel Dan',
      role: 'CTO',
      company: 'Tech Corp',
      rating: 5
    },
    {
      image: '/src/assets/images/Rectangle 9.png',
      review: 'Energistically harness ubiquitous imperative without state of the art collaboration and idea-sharing. Monotonectally parallel task cross-unit experience and front-end.',
      name: 'Warren Keith',
      role: 'Director',
      company: 'Design Inc',
      rating: 5
    },
    {
      image: '/src/assets/images/Rectangle 7.png',
      review: 'Energistically harness ubiquitous imperative without state of the art collaboration and idea-sharing. Monotonectally parallel task cross-unit experience and front-end.',
      name: 'Handel Dan',
      role: 'CTO',
      company: 'Tech Corp',
      rating: 5
    },
    {
      image: '/src/assets/images/Rectangle 9.png',
      review: 'Energistically harness ubiquitous imperative without state of the art collaboration and idea-sharing. Monotonectally parallel task cross-unit experience and front-end.',
      name: 'Warren Keith',
      role: 'Director',
      company: 'Design Inc',
      rating: 5
    },
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-gray-50/50 to-white">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-gray-500 uppercase tracking-wider">CUSTOMER FEEDBACK</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What happy clients say<br />
            <span className="text-indigo-600">About Us?</span>
          </h2>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 overflow-hidden">
            {testimonials.map((testimonial, index) => {
              // Calculate three cards to show based on active slide
              const visibleIndexes = [
                activeSlide,
                (activeSlide + 1) % testimonials.length,
                (activeSlide + 2) % testimonials.length
              ];

              return (
                <div 
                  key={index}
                  className={`
                    transition-all duration-500 transform
                    ${visibleIndexes.includes(index) 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-95 absolute'
                    }
                  `}
                  style={{
                    position: visibleIndexes.includes(index) ? 'relative' : 'absolute'
                  }}
                >
                  <TestimonialCard {...testimonial} />
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          {testimonials.length > 3 && (
            <div className="flex justify-center gap-4 mt-12">
              <button 
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border-2 border-indigo-600 flex items-center justify-center
                         text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border-2 border-indigo-600 flex items-center justify-center
                         text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors duration-300"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;