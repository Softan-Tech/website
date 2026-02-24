import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Send, ChevronRight, Mail, Phone, MapPin } from 'lucide-react';
import { scrollToSection } from '../../utils/scrollUtils';

const SocialIcon = ({ icon: Icon, href, delay }) => (
  <a 
    href={href}
    className="group relative"
    style={{ animationDelay: delay }}
  >
    <div className="absolute inset-0 bg-teal-600 rounded-lg blur-lg opacity-20 
                    group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="relative w-12 h-12 flex items-center justify-center bg-[#0F1629] 
                    border border-teal-500/20 rounded-lg overflow-hidden group-hover:-translate-y-1 
                    transition-all duration-300">
      <div className="absolute inset-0 bg-teal-600 translate-y-full group-hover:translate-y-0 
                    transition-transform duration-500"></div>
      <Icon className="w-5 h-5 text-gray-400 group-hover:text-white relative z-10 transition-colors duration-300" />
    </div>
  </a>
);

const FooterLink = ({ children, section, delay = "0s" }) => (
  <div className="relative overflow-hidden" style={{ animationDelay: delay }}>
    <a 
      href={`#${section}`}
      onClick={(e) => {
        e.preventDefault();
        if (section) scrollToSection(section);
      }} 
      className="group flex items-center py-2 transform hover:-translate-x-2 transition-transform duration-300"
    >
      <div className="w-8">
        <div className="w-2 h-2 bg-teal-600 rounded-full opacity-0 group-hover:opacity-100 
                      transform translate-x-4 group-hover:translate-x-0 transition-all duration-300"></div>
      </div>
      <span className="text-gray-400 group-hover:text-white transition-colors duration-300">{children}</span>
    </a>
  </div>
);

const FooterSection = ({ title, children, className = "" }) => (
  <div className={className}>
    <div className="relative mb-8 overflow-hidden">
      <div className="flex items-center gap-4">
        <div className="w-2 h-8 bg-teal-600 rounded-full"></div>
        <h3 className="text-xl font-bold text-white tracking-wide">{title}</h3>
      </div>
    </div>
    {children}
  </div>
);

const ContactInfo = ({ icon: Icon, text, href }) => (
  <div className="flex items-start gap-4 mb-4">
    <div className="w-10 h-10 bg-teal-600/10 rounded-lg flex items-center justify-center mt-1">
      <Icon className="w-5 h-5 text-teal-500" />
    </div>
    <div>
      {href ? (
        <a href={href} className="text-gray-400 hover:text-teal-400 transition-colors duration-300">{text}</a>
      ) : (
        <p className="text-gray-400">{text}</p>
      )}
    </div>
  </div>
);

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-full bg-[#0B0F1E] p-8 rounded-2xl border border-teal-500/10">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <div className="absolute top-0 left-0 w-32 h-32 bg-teal-600/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-teal-600/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Content */}
      <div className="relative">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-gray-400 text-sm tracking-wider">NEWSLETTER</span>
        </div>

        <h4 className="text-2xl font-bold text-white mb-4">New Subscriptions</h4>
        <p className="text-gray-400 mb-6">Get Latest Deals from Walker's inbox % Subscribe Now</p>

        {/* Subscribe Form */}
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="w-full px-6 py-4 bg-[#080B14] rounded-xl text-white placeholder:text-gray-500 
                     border border-teal-500/20 focus:outline-none focus:border-teal-600 
                     transition-all duration-300"
          />
          <button 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 group"
          >
            <div className="relative w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center 
                          overflow-hidden transition-transform duration-300 hover:scale-110">
              <Send className={`w-5 h-5 text-white transform transition-transform duration-500 
                            ${isHovered ? '-translate-x-12' : 'translate-x-0'}`} />
              <Send className={`w-5 h-5 text-white absolute transform transition-transform duration-500 
                            ${isHovered ? 'translate-x-0' : 'translate-x-12'}`} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const aboutLinks = [
    { name: 'About Us', section: 'about' },
    { name: 'Team', section: 'team' },
    { name: 'Projects', section: 'projects' },
    { name: 'Contact Us', section: 'contact' }
  ];

  const serviceLinks = [
    { name: 'Managed IT Infrastructure', section: 'services' },
    { name: 'Software Services', section: 'services' },
    { name: 'Digital Marketing', section: 'services' },
    { name: 'Business Analysis', section: 'services' },
    { name: 'Cloud Services', section: 'services' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: '#' },
  ];

  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative bg-[#080B14] pt-24">
      {/* Top Banner */}
      <div className="absolute top-0 left-0 right-0 h-48">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full blur-3xl"></div>
          <div className="absolute top-0 right-1/3 w-48 h-48 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-[1800px] px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-16">
          {/* About Company */}
          <div className="lg:col-span-2">
            <FooterSection title="ABOUT COMPANY">
              <p className="text-gray-400 mb-8 leading-relaxed">
                A professional transparent ROI through low-risk high-yield imperatives.
                Progressively create empowered. Cost effective users via team driven.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((item, index) => (
                  <SocialIcon 
                    key={index} 
                    icon={item.icon} 
                    href={item.href} 
                    delay={`${index * 100}ms`}
                  />
                ))}
              </div>
            </FooterSection>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-2">
            <FooterSection title="CONTACT INFO">
              <div className="space-y-1">
                <ContactInfo 
                  icon={Phone} 
                  text="+254705706442" 
                  href="tel:+254705706442" 
                />
                <ContactInfo 
                  icon={Mail} 
                  text="info@softan.tech" 
                  href="mailto:info@softan.tech" 
                />
                <ContactInfo 
                  icon={MapPin} 
                  text="10th Floor, Mercure, Upperhill, Nairobi" 
                />
              </div>
            </FooterSection>
          </div>

          {/* About Company Links */}
          <div className="lg:col-span-2">
            <FooterSection title="ABOUT COMPANY">
              <div className="space-y-2">
                {aboutLinks.map((link, index) => (
                  <FooterLink 
                    key={link.name} 
                    delay={`${index * 100}ms`}
                    section={link.section}
                  >
                    {link.name}
                  </FooterLink>
                ))}
              </div>
            </FooterSection>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <FooterSection title="SERVICES">
              <div className="space-y-2">
                {serviceLinks.map((link, index) => (
                  <FooterLink 
                    key={link.name} 
                    delay={`${index * 100}ms`}
                    section={link.section}
                  >
                    {link.name}
                  </FooterLink>
                ))}
              </div>
            </FooterSection>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <Newsletter />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-20 py-8 border-t border-gray-800/50">
          <div className="relative">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full blur-3xl transform -translate-y-1/2"></div>
              <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full blur-3xl transform -translate-y-1/2"></div>
            </div>
            <p className="text-center text-gray-400 relative">
              copyright © {currentYear} Softan. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;