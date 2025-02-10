import React, { useState } from 'react';
import { Menu, X, Search, ShoppingCart, ChevronDown } from 'lucide-react';

const Logo = () => (
  <div className="flex items-center gap-3">

    <span className="text-xl font-bold text-[#2B004D]">SOFTAN TECH</span>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'HOME', hasDropdown: true },
    { name: 'ABOUT US', hasDropdown: false },
    { name: 'SERVICES', hasDropdown: true },
    { name: 'PAGES', hasDropdown: true },
    { name: 'BLOG', hasDropdown: true },
    { name: 'CONTACT US', hasDropdown: false },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Background with glass effect */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-md"></div>
      
      <nav className="relative mx-auto max-w-[1400px] px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                <a 
                  href="#" 
                  className="flex items-center text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors"
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown className="ml-1 w-4 h-4" />
                  )}
                </a>
              </div>
            ))}
          </div>

          {/* Right Side Items */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Search */}
            <button className="text-gray-700 hover:text-indigo-600 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            
            {/* Cart */}
            <div className="relative">
              <ShoppingCart className="w-5 h-5 text-gray-700 hover:text-indigo-600 transition-colors" />
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-indigo-600 text-white text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </div>
            
            {/* Appointment Button */}
            <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition-colors">
              <span className="text-sm font-medium">MAKE APPOINTMENT</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <button className="text-gray-700 hover:text-indigo-600 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            
            <div className="relative">
              <ShoppingCart className="w-5 h-5 text-gray-700 hover:text-indigo-600 transition-colors" />
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-indigo-600 text-white text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </div>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-indigo-600 transition-colors p-2"
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
                  href="#"
                  className="flex items-center justify-between text-gray-700 hover:text-indigo-600 transition-colors py-2"
                >
                  <span className="text-sm font-medium">{item.name}</span>
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </a>
              ))}
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-6 py-3 rounded-lg transition-colors mt-4">
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