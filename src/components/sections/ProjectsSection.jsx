import React from 'react';
import { Code, MonitorSmartphone, Search, ArrowRight, Users, Award, CheckCircle, MousePointerClick } from 'lucide-react';

const ProjectCard = ({ icon: Icon, title, description, image }) => (
  <div className="group relative bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl">
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/90 to-indigo-900/90 opacity-0 
                    group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
    
    <div className="relative">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-2xl flex items-center justify-center
                      shadow-lg transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <Icon className="w-6 h-6 text-indigo-600" />
      </div>
    </div>
    
    <div className="p-8 relative z-20">
      <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors duration-500">{title}</h3>
      <p className="text-gray-600 group-hover:text-gray-300 transition-colors duration-500">{description}</p>
      
      <button className="mt-6 flex items-center text-indigo-600 font-medium group-hover:text-white transition-colors duration-500">
        View Details
        <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
      </button>
    </div>
  </div>
);

const StatCard = ({ icon: Icon, number, label }) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-800 blur-2xl opacity-20 
                    group-hover:opacity-30 transition-opacity duration-500 rounded-[32px]"></div>
    <div className="relative bg-white/80 backdrop-blur-xl rounded-[32px] p-8 border border-white/20
                    hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
      <div className="flex items-center gap-6">
        <div className="w-16 h-16 bg-indigo-600/10 rounded-2xl flex items-center justify-center">
          <Icon className="w-8 h-8 text-indigo-600" />
        </div>
        <div>
          <div className="text-3xl font-bold text-gray-900">{number}</div>
          <div className="text-gray-600">{label}</div>
        </div>
      </div>
    </div>
  </div>
);

const ProjectsSection = () => {
  const projects = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Energistically harness ubiquitous imperative without state of the art collaboration.',
      image: '/src/assets/images/web-dev.png'
    },
    {
      icon: MonitorSmartphone,
      title: 'Web Design',
      description: 'Energistically harness ubiquitous imperative without state of the art collaboration.',
      image: '/src/assets/images/web-design.png'
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Energistically harness ubiquitous imperative without state of the art collaboration.',
      image: '/src/assets/images/seo.png'
    }
  ];

  const stats = [
    { icon: MousePointerClick, number: '6+', label: 'Finished Projects' },
    { icon: Users, number: '4+', label: 'Happy Clients' },
    { icon: Award, number: '7+', label: 'Honorable Awards' },
    { icon: CheckCircle, number: '10+', label: 'Skilled Experts' }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[1600px] mx-auto px-8 lg:px-16 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">

            <span className="text-gray-500 uppercase tracking-wider">PROJECT</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Recent Latest <span className="text-indigo-600">Projects</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;