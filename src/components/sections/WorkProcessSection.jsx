import React from 'react';
import { FileText, BarChart2, Monitor, Users } from 'lucide-react';

const ProcessCard = ({ number, icon: Icon, title, description, isLast }) => (
  <div className="relative group">
    {/* Connector Line */}
    {!isLast && (
      <div className="hidden lg:block absolute top-20 left-full w-full h-[2px] bg-gradient-to-r from-indigo-600/20 to-indigo-600/0 z-0">
        <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-indigo-600 rounded-full transform -translate-x-1/2 -translate-y-1/2
                     group-hover:scale-150 transition-transform duration-500"></div>
      </div>
    )}

    {/* Card Content */}
    <div className="relative bg-white rounded-[32px] p-8 z-10 group-hover:shadow-2xl transition-all duration-500
                    border border-indigo-50 hover:-translate-y-2">
      {/* Number Badge */}
      <div className="absolute -top-6 left-8">
        <div className="relative">
          <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl
                        transform group-hover:rotate-12 transition-transform duration-500">
            {number}
          </div>
          <div className="absolute inset-0 bg-indigo-600 rounded-2xl blur opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
        </div>
      </div>

      {/* Icon */}
      <div className="mb-6 mt-4">
        <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center
                      group-hover:bg-indigo-600 transition-colors duration-500">
          <Icon className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors duration-500" />
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

const WorkProcessSection = () => {
  const processes = [
    {
      number: '01',
      icon: FileText,
      title: 'Select a project',
      description: 'Energistically harness ubiquitous imperative without state of the art collaboration.'
    },
    {
      number: '02',
      icon: BarChart2,
      title: 'Project analysis',
      description: 'Energistically harness ubiquitous imperative without state of the art collaboration.'
    },
    {
      number: '03',
      icon: Monitor,
      title: 'Plan Execute',
      description: 'Energistically harness ubiquitous imperative without state of the art collaboration.'
    },
    {
      number: '04',
      icon: Users,
      title: 'Deliver Result',
      description: 'Energistically harness ubiquitous imperative without state of the art collaboration.'
    }
  ];

  return (
    <section id="process" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[1600px] mx-auto px-8 lg:px-16 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">

            <span className="text-gray-500 uppercase tracking-wider">WORK PROCESS</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How To Work <span className="text-indigo-600">It!</span>
          </h2>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {processes.map((process, index) => (
            <ProcessCard 
              key={index} 
              {...process} 
              isLast={index === processes.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcessSection;