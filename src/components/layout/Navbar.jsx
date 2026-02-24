import React, { useState, useEffect } from 'react';
import { Menu, X, Search, ShoppingCart, ChevronDown } from 'lucide-react';
import { scrollToSection } from '../../utils/scrollUtils';
import logoImage from '/assets/images/Frame 113-Photoroom.png';

const Logo = () => (
  <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('home')}>
    <img src={logoImage} alt="SOFTAN TECH Logo" className="h-10" />
    <span className="text-xl font-bold text-teal-700">SOFTAN TECH</span>
  </div>
);

const NavItem = ({ name, href, hasDropdown, onClick }) => (
  <div className="relative group">
    <a 
      href={href}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className={`flex items-center text-sm font-medium px-3 py-2 transition-colors ${NavItem.isActive ? 'text-teal-700' : 'text-gray-700 hover:text-teal-600'}`}
    >
      {name}
      {hasDropdown && <ChevronDown className="ml-1 w-4 h-4" />}
      {NavItem.isActive && (
        <span className="absolute left-0 right-0 bottom-0 h-1 bg-teal-600 rounded-t-md"></span>
      )}
    </a>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const menuItems = [
    { name: 'HOME', hasDropdown: false, href: '#home', section: 'home' },
    { name: 'ABOUT US', hasDropdown: false, href: '#about', section: 'about' },
    { name: 'SERVICES', hasDropdown: false, href: '#services', section: 'services' },
    { name: 'PROJECTS', hasDropdown: false, href: '#projects', section: 'projects' },
    { name: 'THE PROCESS', hasDropdown: false, href: '#process', section: 'process' },
    { name: 'TEAM', hasDropdown: false, href: '#team', section: 'team' },
    { name: 'TESTIMONIALS', hasDropdown: false, href: '#testimonials', section: 'testimonials' },
    { name: 'CONTACT US', hasDropdown: false, href: '#contact', section: 'contact' },
  ];

  // Handle scroll and update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => item.section);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section) => {
    scrollToSection(section);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-white/80 backdrop-blur-md"></div>
      <nav className="relative mx-auto max-w-[1800px] px-6">
        <div className="flex items-center justify-between h-20">
          <Logo />
          {/* Centered Navigation */}
          <div className="hidden lg:flex flex-1 justify-center">
            <div className="flex items-center space-x-3">
              {menuItems.map((item) => (
                <NavItem 
                  key={item.name}
                  {...item}
                  onClick={() => handleNavClick(item.section)}
                  isActive={activeSection === item.section}
                />
              ))}
            </div>
          </div>
          {/* Right Side Items */}
          <div className="hidden lg:flex items-center gap-6">
            <button className="text-gray-700 hover:text-teal-600 transition-colors" style={{display: "none"}}>
              <Search className="w-5 h-5" />
            </button>
            <div className="relative" style={{display: "none"}}>
              <ShoppingCart className="w-5 h-5 text-gray-700 hover:text-teal-600 transition-colors" />
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-teal-600 text-white text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </div>
            <button 
              onClick={() => handleNavClick('contact')}
              className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              <span className="text-sm font-medium">MAKE APPOINTMENT</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <button className="text-gray-700 hover:text-teal-600 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <div className="relative">
              <ShoppingCart className="w-5 h-5 text-gray-700 hover:text-teal-600 transition-colors" />
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-teal-600 text-white text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-teal-600 transition-colors p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-100">
            <div className="px-4 py-3 space-y-3">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.section);
                  }}
                  className={`flex items-center justify-between text-gray-700 hover:text-teal-600 transition-colors py-2 ${activeSection === item.section ? 'border-b-2 border-teal-600' : ''}`}
                >
                  <span className="text-sm font-medium">{item.name}</span>
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </a>
              ))}
              <button 
                onClick={() => handleNavClick('contact')}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium px-6 py-3 rounded-lg transition-colors mt-4"
              >
                MAKE APPOINTMENT
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;