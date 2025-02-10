import React from 'react';
import { Linkedin, Twitter, Mail, Plus, Instagram } from 'lucide-react';

const TeamMemberCard = ({ image, name, role }) => (
  <div className="group relative">
    {/* Image Container */}
    <div className="relative overflow-hidden rounded-3xl">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-indigo-900/90 
                    opacity-0 group-hover:opacity-100 transition-all duration-500 z-10"></div>
      
      <img 
        src={image} 
        alt={name} 
        className="w-full aspect-[3/4] object-cover transform group-hover:scale-110 transition-transform duration-700"
      />

      {/* Social Links */}
      <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-center z-20 
                    translate-y-full group-hover:translate-y-0 transition-transform duration-500">
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center
                              hover:bg-white hover:text-indigo-600 transition-colors duration-300">
            <Linkedin style={{color: "white"}} className="w-5 h-5" />
          </a>
          <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center
                              hover:bg-white hover:text-indigo-600 transition-colors duration-300">
            <Twitter style={{color: "white"}}  className="w-5 h-5" />
          </a>
          <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center
                              hover:bg-white hover:text-indigo-600 transition-colors duration-300">
            <Instagram style={{color: "white"}}  className="w-5 h-5" />
          </a>
        </div>
        
        <button className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center
                         hover:bg-white hover:text-indigo-600 transition-colors duration-300">
          <Plus style={{color: "white"}}  className="w-5 h-5" />
        </button>
      </div>
    </div>

    {/* Info */}
    <div className="mt-6 text-center">
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-indigo-600">{role}</p>
    </div>
  </div>
);

const TeamSection = () => {
  const team = [
    {
      image: '/src/assets/images/Rectangle 7.png',
      name: 'Handel Dan',
      role: 'Project Manager'
    },
    {
      image: '/src/assets/images/Rectangle 9.png',
      name: 'Warren Keith',
      role: 'Product Manager'
    },
    {
      image: '/src/assets/images/Rectangle 10.png',
      name: 'Sussan K',
      role: 'Product Manager'
    }
  ];

  return (
    <section id="team" className="relative py-32 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-3xl opacity-50 transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-[1600px] mx-auto px-8 lg:px-16 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">

            <span className="text-gray-500 uppercase tracking-wider">GREAT TEAM</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            See Our Skilled Expert <span className="text-indigo-600">Team</span>
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <TeamMemberCard  key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;