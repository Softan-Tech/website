import React, { useRef, useEffect, useState } from 'react';
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
    <div className="relative overflow-hidden rounded-3xl w-64 h-80 mx-auto">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-teal-900/90 
                    opacity-0 group-hover:opacity-100 transition-all duration-500 z-10"></div>
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
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
        {socials.some(s => s.name === 'email') && (
          <a 
            href={`mailto:${socials.find(s => s.name === 'email')?.url.replace('mailto:', '')}`}
            className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center
                    hover:bg-white group transition-colors duration-300"
          >
            <Mail className="w-5 h-5 text-white group-hover:text-teal-600" />
          </a>
        )}
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
      image: '/assets/images/dan.png',
      name: 'Dan',
      role: 'Lead Developer',
      socials: [
        { name: 'linkedin', icon: Linkedin, url: 'https://www.linkedin.com/in/handel-dan-bb51a6128/' },
        { name: 'twitter', icon: Twitter, url: 'https://twitter.com/dan_dev' },
        { name: 'github', icon: Github, url: 'https://github.com/dan-dev' },
        { name: 'email', icon: Mail, url: 'mailto:dan@softan.tech' }
      ]
    },
    {
      image: '/assets/images/Rectangle 9.png',
      name: 'Vivian Kaino',
      role: 'UI/UX Designer',
      socials: [
        { name: 'linkedin', icon: Linkedin, url: 'https://linkedin.com/in/vivian-kaino' }
      ]
    },
    {
      image: '/assets/images/Rectangle 10.png',
      name: 'Stacy Jennifer',
      role: 'Project Manager',
      socials: [
        { name: 'linkedin', icon: Linkedin, url: 'https://linkedin.com/in/stacy-jennifer' }
      ]
    },
    {
      image: '/assets/images/Pius.png',
      name: 'Pius Mionki',
      role: 'DevOps Engineer',
      socials: [
        { name: 'linkedin', icon: Linkedin, url: 'https://www.linkedin.com/in/pius-mionki-a76164297/' }
      ]
    },
    {
      image: '/assets/images/Cedo.png',
      name: 'Cedrouseroll Omondi',
      role: 'Software Engineer',
      socials: [
        { name: 'linkedin', icon: Linkedin, url: 'https://www.linkedin.com/in/cedrouseroll-omondi-44b119252/' }
      ]
    },
    {
      image: '/assets/images/KenKithinji.png',
      name: 'Ken Kithinji',
      role: 'Senior Network and Systems Engineer',
      socials: [
        { name: 'linkedin', icon: Linkedin, url: 'https://www.linkedin.com/in/ken-kithinji-4159b4134/' }
      ]
    },
    {
      image: '/assets/images/EvansKibet.png',
      name: 'Evans Kibet',
      role: 'AI Engineer',
      socials: [
        { name: 'linkedin', icon: Linkedin, url: 'https://www.linkedin.com/in/e-kibet/' }
      ]
    },
    {
      image: '/assets/images/AnthonyOtieno.png',
      name: 'Anthony Odhiambo',
      role: 'Senior Data Scientist',
      socials: [
        { name: 'linkedin', icon: Linkedin, url: 'https://www.linkedin.com/in/anthony-odhiambo-566851137/' }
      ]
    }
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4;
  const intervalRef = useRef();

  const next = () => setStartIndex((prev) => (prev + 1) % team.length);
  const prev = () => setStartIndex((prev) => (prev - 1 + team.length) % team.length);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % team.length);
    }, 4000);
    return () => clearInterval(intervalRef.current);
  }, [team.length]);

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

        {/* Team Carousel */}
        <div className="relative">
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-teal-100 rounded-full p-2 shadow"
            aria-label="Previous team members"
          >
            <ArrowRight className="w-6 h-6 rotate-180 text-teal-600" />
          </button>
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${startIndex * (100 / visibleCount)}%)` }}>
              {team.concat(team.slice(0, visibleCount)).map((member, idx) => (
                idx < team.length + visibleCount && (
                  <div key={idx} className="min-w-[250px] max-w-[300px] flex-shrink-0 px-3">
                    <TeamMemberCard {...member} />
                  </div>
                )
              ))}
              <div className="min-w-[250px] max-w-[300px] flex-shrink-0 px-3">
                <JoinTeamCard />
              </div>
            </div>
          </div>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-teal-100 rounded-full p-2 shadow"
            aria-label="Next team members"
          >
            <ArrowRight className="w-6 h-6 text-teal-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;