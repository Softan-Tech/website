import React from 'react';
import { Linkedin, Twitter, Mail, Plus, Instagram, Github, Users, ArrowRight } from 'lucide-react';

const SocialLink = ({ icon: Icon, href, ariaLabel }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    aria-label={ariaLabel}
    className="w-10 h-10 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center
              hover:bg-white hover:text-teal-600 transition-colors duration-300"
  >
    <Icon className="w-5 h-5 text-white group-hover:text-teal-600" />
  </a>
);

const TeamMemberCard = ({ image, name, role, socials }) => (
  <div className="group relative">
    {/* Image Container */}
    <div className="relative overflow-hidden rounded-3xl">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-teal-900/90 
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
          {socials.map((social, index) => (
            <SocialLink 
              key={index}
              icon={social.icon}
              href={social.url}
              ariaLabel={`${name}'s ${social.name}`}
            />
          ))}
        </div>
        
        <a 
          href={`mailto:${socials.find(s => s.name === 'email')?.url.replace('mailto:', '')}`}
          className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center
                  hover:bg-white group transition-colors duration-300"
        >
          <Mail className="w-5 h-5 text-white group-hover:text-teal-600" />
        </a>
      </div>
    </div>

    {/* Info */}
    <div className="mt-6 text-center">
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-teal-600">{role}</p>
    </div>
  </div>
);

const JoinTeamCard = () => (
  <div className="group relative">
    {/* Card Container */}
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-50 to-teal-100 aspect-[3/4] flex flex-col items-center justify-center p-8 hover:shadow-xl transition-all duration-500 border-2 border-dashed border-teal-300">
      <div className="absolute inset-0 bg-teal-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
      
      {/* Icon */}
      <div className="w-24 h-24 bg-teal-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
        <Users className="w-12 h-12 text-teal-600" />
      </div>
      
      {/* Text Content */}
      <h3 className="text-xl font-bold mb-3 text-gray-900">This Could Be You</h3>
      <p className="text-gray-600 text-center mb-6">Join our team of talented professionals</p>
      
      {/* Button */}
      <a 
        href="#contact" 
        className="flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors group-hover:scale-105 duration-300"
      >
        Apply Now
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  </div>
);

const TeamSection = () => {
  const team = [
    {
      image: '/src/assets/images/Rectangle 7.png',
      name: 'Dan',
      role: 'Lead Developer',
      socials: [
        { name: 'linkedin', icon: Linkedin, url: 'https://linkedin.com/in/dan-developer' },
        { name: 'twitter', icon: Twitter, url: 'https://twitter.com/dan_dev' },
        { name: 'github', icon: Github, url: 'https://github.com/dan-dev' },
        { name: 'email', icon: Mail, url: 'mailto:dan@softan.tech' }
      ]
    },
    {
      image: '/src/assets/images/Rectangle 9.png',
      name: 'Stacy',
      role: 'UI/UX Designer',
      socials: [
        { name: 'linkedin', icon: Linkedin, url: 'https://linkedin.com/in/stacy-designer' },
        { name: 'instagram', icon: Instagram, url: 'https://instagram.com/stacy.designs' },
        { name: 'twitter', icon: Twitter, url: 'https://twitter.com/stacy_designs' },
        { name: 'email', icon: Mail, url: 'mailto:stacy@softan.tech' }
      ]
    },
    {
      image: '/src/assets/images/Rectangle 10.png',
      name: 'Jennifer',
      role: 'Project Manager',
      socials: [
        { name: 'linkedin', icon: Linkedin, url: 'https://linkedin.com/in/jennifer-pm' },
        { name: 'twitter', icon: Twitter, url: 'https://twitter.com/jennifer_pm' },
        { name: 'instagram', icon: Instagram, url: 'https://instagram.com/jennifer.pm' },
        { name: 'email', icon: Mail, url: 'mailto:jennifer@softan.tech' }
      ]
    }
  ];

  return (
    <section id="team" className="relative py-32 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-50 rounded-full blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-50 rounded-full blur-3xl opacity-50 transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-[1600px] mx-auto px-8 lg:px-16 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-gray-500 uppercase tracking-wider">GREAT TEAM</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            See Our Skilled Expert <span className="text-teal-600">Team</span>
          </h2>
          
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Our talented team brings together expertise in development, design, and project management 
            to deliver exceptional results for our clients.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {team.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
          <JoinTeamCard />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;