import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import ServicesSection from './components/sections/ServicesSection';
import TeamSection from './components/sections/TeamSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import AboutUsSection from './components/sections/AboutUs';
import WorkProcessSection from './components/sections/WorkProcessSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ContactSection from './components/sections/ContactSection';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutUsSection/>
        <ServicesSection />
        <ProjectsSection />
        <WorkProcessSection/>
        <TeamSection />
        <ContactSection/>
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;