import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const TeamSection = () => {
  const team = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      image: '/api/placeholder/300/300',
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
      },
    },
    {
      name: 'Sarah Johnson',
      role: 'Lead Designer',
      image: '/api/placeholder/300/300',
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
      },
    },
    {
      name: 'Michael Brown',
      role: 'Senior Developer',
      image: '/api/placeholder/300/300',
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
      },
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See Our Skilled Expert Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet our talented team of professionals who make it all happen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img 
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <div className="flex space-x-4">
                  <a href={member.social.facebook} className="text-gray-400 hover:text-primary">
                    <Facebook size={20} />
                  </a>
                  <a href={member.social.twitter} className="text-gray-400 hover:text-primary">
                    <Twitter size={20} />
                  </a>
                  <a href={member.social.linkedin} className="text-gray-400 hover:text-primary">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;