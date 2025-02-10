import React from 'react';
import { Mail } from 'lucide-react';

const NewsletterSection = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Subscribe To Our Newsletter
          </h2>
          <p className="mb-8">
            Stay updated with our latest news, updates, and insights
          </p>
          <form className="flex flex-col md:flex-row gap-4 justify-center">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
            </div>
            <button className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;