import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook size={20} />, href: '#' },
    { icon: <Twitter size={20} />, href: '#' },
    { icon: <Instagram size={20} />, href: '#' },
    { icon: <Linkedin size={20} />, href: '#' },
  ];

  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Softan</h3>
            <p className="text-gray-300 mb-4">
              Leading IT solutions provider with over 10 years of experience in delivering
              innovative technology solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Services', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                'Web Development',
                'Mobile Apps',
                'Digital Marketing',
                'UI/UX Design',
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for updates and insights.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Softan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;