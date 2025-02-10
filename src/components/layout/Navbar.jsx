import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/utils/constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-primary">
              Softan
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-primary font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors">
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 text-gray-600 hover:text-primary font-medium"
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors mt-4">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;