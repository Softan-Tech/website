import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import ServicesSection from './components/sections/ServicesSection';
import ExperienceSection from './components/sections/ExperienceSection';
import TeamSection from './components/sections/TeamSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import NewsletterSection from './components/sections/NewsletterSection';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <ExperienceSection />
        <TeamSection />
        <TestimonialsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;