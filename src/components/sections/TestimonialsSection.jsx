import React, { useState } from 'react';
import { Star, ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const TestimonialCard = ({ image, review, name, role, company, rating }) => (
  <div className="relative">
    {/* Background Blur */}
    <div className="absolute inset-0 bg-gradient-to-r from-teal-600/5 to-purple-600/5 rounded-[40px] blur-3xl"></div>
    
    {/* Card Content */}
    <div className="relative bg-white/50 backdrop-blur-xl rounded-[40px] p-8 lg:p-12 overflow-hidden">
      {/* Large Quote Icon */}
      <div className="absolute top-8 right-8 text-teal-600/10">
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
          <p className="text-gray-600">
            {role} at {
              company === 'Gravity Solutions' ? (
                <a href="https://gravitysolutions.net/" target="_blank" rel="noopener noreferrer" className="text-teal-700 underline hover:text-teal-500">{company}</a>
              ) : company === 'Mirai Space Africa' ? (
                <a href="https://miraispace.africa/" target="_blank" rel="noopener noreferrer" className="text-teal-700 underline hover:text-teal-500">{company}</a>
              ) : company === "Noir d'Or Consultancy" ? (
                <a href="https://www.noirdorconsultancy.com/" target="_blank" rel="noopener noreferrer" className="text-teal-700 underline hover:text-teal-500">{company}</a>
              ) : company === 'Taimba' ? (
                <a href="https://taimba.co.ke/" target="_blank" rel="noopener noreferrer" className="text-teal-700 underline hover:text-teal-500">{company}</a>
              ) : company
            }
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-teal-600/5 rounded-full blur-2xl"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/5 rounded-full blur-2xl"></div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
          {
            image: '/assets/images/Rectangle 10.png',
            review:
              "Softan Tech designed and implemented our entire office network at Mirai Space Africa, ensuring secure and efficient connectivity. Their ongoing support keeps our websites and email systems running smoothly, allowing our team to focus on what matters most.",
            name: 'Janet Keru',
            role: 'CEO',
            company: 'Mirai Space Africa',
            rating: 5
          },
          {
            image: '/assets/images/ErickAmoloImage.jpeg',
            review:
              "Softan Tech made our KRA eTIMS integrations seamless. Their expertise helped us connect over 30 businesses, making invoice stamping and compliance effortless. We now save time, avoid errors, and focus on growing our business.",
            name: 'Eric Amolo',
            role: 'Product Consultant',
            company: 'Gravity Solutions',
            rating: 5
          },
          {
            image: '/assets/images/LucyNjonga.png',
            review:
              "Softan Tech built our website from end to end, handling everything from design to SEO. Their expertise brought our vision to life and helped us reach more clients online. I highly recommend their team!",
            name: 'Lucy Njonga',
            role: 'Founder',
            company: "Noir d'Or Consultancy",
            rating: 5
          },
          {
            image: '/assets/images/Dominique.png',
            review:
              "Softan Tech built our Delivery Management System from design to delivery. Their team was professional, responsive, and delivered a solution that transformed our operations.",
            name: 'Dominique Kavuisya',
            role: 'CEO and Co-Founder',
            company: 'Taimba',
            rating: 5
          }
  ];
  

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="relative py-32 overflow-hidden bg-gradient-to-b from-gray-50/50 to-white">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-gray-500 uppercase tracking-wider">CUSTOMER FEEDBACK</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What happy clients say<br />
            <span className="text-teal-600">About Us?</span>
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
                className="w-12 h-12 rounded-full border-2 border-teal-600 flex items-center justify-center
                         text-teal-600 hover:bg-teal-600 hover:text-white transition-colors duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border-2 border-teal-600 flex items-center justify-center
                         text-teal-600 hover:bg-teal-600 hover:text-white transition-colors duration-300"
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