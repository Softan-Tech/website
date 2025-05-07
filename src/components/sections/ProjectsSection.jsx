import React, { useState } from 'react';
import { Code, MonitorSmartphone, Search, ArrowRight, Users, Award, CheckCircle, MousePointerClick, X, ChevronRight } from 'lucide-react';

// Modal component for service details
const ServiceModal = ({ isOpen, onClose, service }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl max-h-[90vh] overflow-y-auto z-50">
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header Image */}
          <div className="h-56 relative">
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 to-transparent"></div>
            
            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-3xl font-bold text-white">{service.title}</h3>
            </div>
            
            {/* Icon */}
            <div className="absolute top-6 right-6 w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
              <service.icon className="w-8 h-8 text-teal-600" />
            </div>
            
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 left-6 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-teal-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Content */}
          <div className="p-8 lg:p-10">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-6">
                {service.fullDescription}
              </p>
              
              {/* Features */}
              <h4 className="text-xl font-bold mb-4">Key Features</h4>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* Benefits */}
              <h4 className="text-xl font-bold mb-4">Benefits</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-xl">
                    <div className="font-medium">{benefit}</div>
                  </div>
                ))}
              </div>
              
              {/* Process */}
              <h4 className="text-xl font-bold mb-4">Our Process</h4>
              <ol className="space-y-4 mb-8">
                {service.process.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-bold">{step.title}</div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
              
              {/* CTA */}
              <div className="bg-gradient-to-r from-teal-50 to-teal-100 p-6 rounded-xl flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                  <h4 className="text-xl font-bold">Ready to get started?</h4>
                  <p className="text-gray-600">Let's discuss how our {service.title} services can help your business.</p>
                </div>
                <a 
                  href="#contact" 
                  onClick={onClose}
                  className="whitespace-nowrap px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors flex items-center gap-2"
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ProjectCard = ({ service, onClick }) => {
  const { icon: Icon, title, description, image } = service;
  
  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-600/90 to-teal-900/90 opacity-0 
                    group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
      
      <div className="relative">
        <img src={image} alt={title} className="w-full h-64 object-cover" />
        <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-2xl flex items-center justify-center
                      shadow-lg transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <Icon className="w-6 h-6 text-teal-600" />
        </div>
      </div>
      
      <div className="p-8 relative z-20">
        <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors duration-500">{title}</h3>
        <p className="text-gray-600 group-hover:text-gray-300 transition-colors duration-500">{description}</p>
        
        <button 
          onClick={onClick}
          className="mt-6 flex items-center text-teal-600 font-medium group-hover:text-white transition-colors duration-500"
        >
          View Details
          <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
};

const StatCard = ({ icon: Icon, number, label }) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-800 blur-2xl opacity-20 
                    group-hover:opacity-30 transition-opacity duration-500 rounded-[32px]"></div>
    <div className="relative bg-white/80 backdrop-blur-xl rounded-[32px] p-8 border border-white/20
                    hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
      <div className="flex items-center gap-6">
        <div className="w-16 h-16 bg-teal-600/10 rounded-2xl flex items-center justify-center">
          <Icon className="w-8 h-8 text-teal-600" />
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
  const [activeService, setActiveService] = useState(null);
  
  // Comprehensive service information
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'We build responsive, scalable and high-performance web applications tailored to your business needs.',
      image: '/src/assets/images/web-dev.png',
      fullDescription: 'Our web development services deliver custom, responsive, and high-performing web applications that drive business growth. We combine cutting-edge technologies with best practices to create solutions that not only meet but exceed your expectations.',
      features: [
        'Custom website and web application development',
        'Frontend development with React, Vue.js, or Angular',
        'Backend development with Node.js, PHP, Python, or .NET',
        'E-commerce solutions with integrated payment gateways',
        'Content Management Systems (CMS) implementation',
        'Progressive Web Apps (PWA) development'
      ],
      benefits: [
        'Improved online presence',
        'Enhanced user experience',
        'Increased conversion rates',
        'Better performance and loading times',
        'Mobile-friendly responsive design',
        'Scalable architecture for future growth'
      ],
      process: [
        {
          title: 'Discovery & Planning',
          description: 'We start by understanding your business goals, target audience, and specific requirements.'
        },
        {
          title: 'Design & Prototyping',
          description: 'Our UI/UX designers create wireframes and prototypes to visualize the project before development.'
        },
        {
          title: 'Development',
          description: 'Our developers build your website or application using the most appropriate technologies.'
        },
        {
          title: 'Testing & Quality Assurance',
          description: 'We rigorously test all aspects to ensure functionality, performance, and security.'
        },
        {
          title: 'Deployment & Launch',
          description: 'We handle the deployment process and ensure a smooth launch.'
        },
        {
          title: 'Ongoing Support & Maintenance',
          description: 'We provide continuous support and updates to keep your website secure and performing optimally.'
        }
      ]
    },
    {
      icon: MonitorSmartphone,
      title: 'UI/UX Design',
      description: 'We create intuitive, engaging user interfaces and experiences that delight your customers and drive conversions.',
      image: '/src/assets/images/web-design.png',
      fullDescription: 'Our UI/UX design services focus on creating intuitive, visually appealing interfaces that enhance user engagement and satisfaction. We combine aesthetics with functionality to deliver designs that not only look great but also provide seamless user experiences.',
      features: [
        'User research and persona development',
        'Information architecture and user flows',
        'Wireframing and prototyping',
        'Visual design and branding',
        'Interaction design',
        'Usability testing and iteration'
      ],
      benefits: [
        'Increased user satisfaction',
        'Higher engagement rates',
        'Reduced bounce rates',
        'Improved conversion rates',
        'Stronger brand identity',
        'Competitive advantage'
      ],
      process: [
        {
          title: 'Research & Discovery',
          description: 'We conduct user research, analyze competitors, and gather requirements to inform our design strategy.'
        },
        {
          title: 'User Flows & Information Architecture',
          description: 'We create logical user flows and organize content to ensure intuitive navigation.'
        },
        {
          title: 'Wireframing',
          description: 'We develop low-fidelity wireframes to establish layout and functionality before adding visual details.'
        },
        {
          title: 'UI Design',
          description: 'We create high-fidelity designs with attention to color, typography, and visual hierarchy.'
        },
        {
          title: 'Prototyping & Testing',
          description: 'We build interactive prototypes and conduct usability testing to validate our design decisions.'
        },
        {
          title: 'Design Handoff',
          description: 'We prepare design assets and documentation for seamless handoff to the development team.'
        }
      ]
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'We improve your website\'s visibility in search engines, driving more organic traffic and qualified leads.',
      image: '/src/assets/images/seo.png',
      fullDescription: 'Our SEO optimization services are designed to improve your website\'s visibility in search engine results pages (SERPs), increase organic traffic, and drive high-quality leads to your business. We implement data-driven strategies that deliver measurable results.',
      features: [
        'Comprehensive SEO audit and analysis',
        'Keyword research and strategy',
        'On-page SEO optimization',
        'Technical SEO improvements',
        'Content strategy and optimization',
        'Link building and off-page SEO',
        'Local SEO for businesses targeting local customers'
      ],
      benefits: [
        'Increased organic traffic',
        'Higher search engine rankings',
        'Improved website authority',
        'Better user experience',
        'Higher conversion rates',
        'Long-term sustainable results'
      ],
      process: [
        {
          title: 'Comprehensive Audit',
          description: 'We analyze your current SEO performance, identify issues, and opportunities for improvement.'
        },
        {
          title: 'Keyword Research',
          description: 'We identify high-value keywords that your target audience is searching for.'
        },
        {
          title: 'On-page Optimization',
          description: 'We optimize page titles, meta descriptions, headings, content, and internal linking.'
        },
        {
          title: 'Technical SEO',
          description: 'We improve site speed, mobile-friendliness, site architecture, and fix technical issues.'
        },
        {
          title: 'Content Strategy',
          description: 'We develop and implement a content strategy to target keywords and provide value to users.'
        },
        {
          title: 'Monitoring & Reporting',
          description: 'We continuously monitor performance and provide regular reports with actionable insights.'
        }
      ]
    }
  ];

  const stats = [
    { icon: MousePointerClick, number: '500+', label: 'Finished Projects' },
    { icon: Users, number: '2K+', label: 'Happy Clients' },
    { icon: Award, number: '10+', label: 'Honorable Awards' },
    { icon: CheckCircle, number: '15+', label: 'Skilled Experts' }
  ];

  const openModal = (service) => {
    setActiveService(service);
    // Prevent background scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveService(null);
    // Restore scrolling when modal is closed
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-72 h-72 bg-teal-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[1600px] mx-auto px-8 lg:px-16 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-gray-500 uppercase tracking-wider">SERVICES</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Premium <span className="text-teal-600">Services</span>
          </h2>
          
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            We offer comprehensive digital solutions tailored to your business needs. 
            Our services are designed to help you achieve your goals and stay ahead in the digital landscape.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <ProjectCard 
              key={index} 
              service={service} 
              onClick={() => openModal(service)}
            />
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
      
      {/* Service Modal */}
      <ServiceModal 
        isOpen={activeService !== null}
        onClose={closeModal}
        service={activeService}
      />
    </section>
  );
};

export default ProjectsSection;