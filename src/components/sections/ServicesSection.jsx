import React, { useState } from 'react';
import { Monitor, Sparkles, BarChart, Settings, ArrowRight, X, ChevronRight, Code, Database, Server, Smartphone, Cloud, ShieldCheck, PieChart, TrendingUp, Share, Mail, Globe, Target } from 'lucide-react';

// Service Card Component
const ServiceCard = ({ icon: Icon, title, description, onClick }) => (
  <div className="bg-white rounded-[32px] p-10 group transition-all duration-500 hover:translate-y-[-8px]">
    {/* Icon Container */}
    <div className="bg-teal-100/50 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 
                    group-hover:bg-teal-600 transition-all duration-500">
      <Icon className="w-10 h-10 text-teal-600 group-hover:text-white transition-all duration-500" />
    </div>

    {/* Content */}
    <h3 className="text-[22px] font-bold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed mb-8">
      {description}
    </p>

    {/* Read More Button */}
    <button 
      onClick={onClick}
      className="inline-flex items-center text-teal-600 font-semibold text-[15px] group/btn"
    >
      READ MORE
      <span className="ml-2 transform translate-x-0 group-hover/btn:translate-x-2 transition-transform duration-300">
        <ArrowRight className="w-5 h-5" />
      </span>
    </button>
  </div>
);

// Progress Circle Component
const ProgressCircle = ({ percentage, title, subtitle }) => (
  <div className="relative">
    <div className="flex items-center">
      {/* Progress Circle */}
      <div className="relative">
        <svg className="w-32 h-32 transform -rotate-90">
          <circle 
            cx="64" 
            cy="64" 
            r="54" 
            stroke="currentColor" 
            strokeWidth="6" 
            fill="none" 
            className="text-gray-800"
          />
          <circle 
            cx="64" 
            cy="64" 
            r="54" 
            stroke="currentColor" 
            strokeWidth="6" 
            fill="none" 
            strokeDasharray={339.292}
            strokeDashoffset={339.292 * (1 - percentage/100)}
            className="text-teal-600 transition-[stroke-dashoffset] duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-white">{percentage}%</span>
        </div>
      </div>
      
      {/* Title and Subtitle */}
      <div className="ml-6">
        <h4 className="text-xl font-semibold text-white mb-1">{title}</h4>
        <p className="text-gray-400">{subtitle}</p>
      </div>
    </div>
  </div>
);

// Individual Service Modal Component
const ServiceDetailModal = ({ isOpen, onClose, service }) => {
  if (!isOpen || !service) return null;

  // Default values for missing data
  const defaultFeatures = [
    'Professional consultation',
    'Custom solution development',
    'Quality assurance testing',
    'Performance optimization',
    'Dedicated support',
    'Regular updates and maintenance'
  ];
  
  const defaultProcess = [
    'Initial Consultation',
    'Requirements Analysis', 
    'Solution Design',
    'Implementation',
    'Quality Assurance',
    'Delivery & Support'
  ];

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl max-h-[90vh] overflow-y-auto z-50">
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-teal-600 to-teal-800 p-8">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">{service.title}</h3>
              </div>
              <button 
                onClick={onClose}
                className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white hover:text-teal-600 transition-colors text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-8 lg:p-10">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-6">
                {service.fullDescription || service.description}
              </p>
              
              {/* Features */}
              <h4 className="text-xl font-bold mb-4">Key Features</h4>
              {(service.features && service.features.length > 0) ? (
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <ChevronRight className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="space-y-3 mb-8">
                  {defaultFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <ChevronRight className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
              
              {/* Process Steps */}
              <h4 className="text-xl font-bold mb-4">Our Process</h4>
              {(service.process && service.process.length > 0) ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {service.process.map((step, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-xl">
                      <div className="font-medium flex items-center gap-2">
                        <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-bold text-sm flex-shrink-0">
                          {index + 1}
                        </div>
                        <span>{step}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {defaultProcess.map((step, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-xl">
                      <div className="font-medium flex items-center gap-2">
                        <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-bold text-sm flex-shrink-0">
                          {index + 1}
                        </div>
                        <span>{step}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {/* CTA */}
              <div className="bg-gradient-to-r from-teal-50 to-teal-100 p-6 rounded-xl flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                  <h4 className="text-xl font-bold">Ready to get started?</h4>
                  <p className="text-gray-600">Let us help you elevate your business with our professional {service.title} services.</p>
                </div>
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    onClose();
                    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                  }}
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

// All Services Modal Component
const AllServicesModal = ({ isOpen, onClose, allServices, onServiceSelect }) => {
  if (!isOpen) return null;

  // Group services by category
  const softwareServices = allServices.filter(service => service.category === 'software');
  const marketingServices = allServices.filter(service => service.category === 'marketing');

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl max-h-[90vh] overflow-y-auto z-50">
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-teal-600 to-teal-800 p-8">
            <div className="flex items-start justify-between">
              <h3 className="text-3xl font-bold text-white">Our Complete Services</h3>
              <button 
                onClick={onClose}
                className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white hover:text-teal-600 transition-colors text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-8 lg:p-10">
            <div className="mb-8">
              <h4 className="text-2xl font-bold mb-6 flex items-center">
                <Code className="w-6 h-6 mr-2 text-teal-600" />
                Software Development Services
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {softwareServices.map((service, index) => (
                  <button 
                    key={index}
                    onClick={() => {
                      onServiceSelect(service);
                      onClose();
                    }}
                    className="bg-gray-50 hover:bg-teal-50 rounded-xl p-6 text-left transition-colors group"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center group-hover:bg-teal-600 transition-colors">
                        <service.icon className="w-5 h-5 text-teal-600 group-hover:text-white transition-colors" />
                      </div>
                      <h5 className="font-bold">{service.title}</h5>
                    </div>
                    <p className="text-gray-600 text-sm">{service.shortDescription}</p>
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-2xl font-bold mb-6 flex items-center">
                <TrendingUp className="w-6 h-6 mr-2 text-teal-600" />
                Digital Marketing Services
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {marketingServices.map((service, index) => (
                  <button 
                    key={index}
                    onClick={() => {
                      onServiceSelect(service);
                      onClose();
                    }}
                    className="bg-gray-50 hover:bg-teal-50 rounded-xl p-6 text-left transition-colors group"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center group-hover:bg-teal-600 transition-colors">
                        <service.icon className="w-5 h-5 text-teal-600 group-hover:text-white transition-colors" />
                      </div>
                      <h5 className="font-bold">{service.title}</h5>
                    </div>
                    <p className="text-gray-600 text-sm">{service.shortDescription}</p>
                  </button>
                ))}
              </div>
            </div>
            
            {/* CTA */}
            <div className="mt-12 bg-gradient-to-r from-teal-50 to-teal-100 p-6 rounded-xl flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <h4 className="text-xl font-bold">Looking for a custom solution?</h4>
                <p className="text-gray-600">Our team of experts can create tailored solutions for your specific business needs.</p>
              </div>
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }}
                className="whitespace-nowrap px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors flex items-center gap-2"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Main ServicesSection Component
const ServicesSection = () => {
  const [isAllServicesModalOpen, setIsAllServicesModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  
  // Featured services (displayed in the main grid)
  const featuredServices = [
    {
      icon: Monitor,
      title: 'UI/UX Design',
      description: 'We create intuitive, engaging user interfaces that enhance user experience and drive conversions, focusing on both aesthetics and functionality.',
      category: 'software'
    },
    {
      icon: Sparkles,
      title: 'Digital Marketing',
      description: 'Boost your online presence with data-driven digital marketing strategies that increase brand awareness, drive traffic, and generate leads.',
      category: 'marketing'
    },
    {
      icon: BarChart,
      title: 'Business Analysis',
      description: 'Our business analysts identify opportunities for improvement, optimize processes, and help implement strategic changes to drive growth.',
      category: 'software'
    },
    {
      icon: Settings,
      title: 'Software Services',
      description: 'Custom software solutions tailored to your unique business needs, built with scalable architecture and modern technologies.',
      category: 'software'
    },
  ];
  
  // All services (featured + additional services)
  const allServices = [
    ...featuredServices,
    // Software Development Services
    {
      icon: Code,
      title: 'Web Development',
      shortDescription: 'Custom websites built with modern frameworks and responsive design.',
      fullDescription: 'We build responsive, SEO-friendly websites that load quickly and provide exceptional user experiences across all devices. Our web development team specializes in modern frameworks and technologies to create scalable and maintainable solutions.',
      features: [
        'Custom website development',
        'Progressive Web Applications (PWAs)',
        'E-commerce solutions',
        'Content Management Systems',
        'API integration',
        'Performance optimization'
      ],
      process: [
        'Requirements Analysis', 
        'Design & Prototyping', 
        'Development', 
        'Testing', 
        'Deployment', 
        'Maintenance'
      ],
      category: 'software'
    },
    {
      icon: Database,
      title: 'Database Solutions',
      shortDescription: 'Robust database design, migration, and optimization services.',
      fullDescription: 'Our database experts design and implement efficient, secure, and scalable database solutions tailored to your business requirements. We help you manage and make sense of your data to drive informed decision-making.',
      features: [
        'Database design and architecture',
        'Data migration and integration',
        'Performance tuning and optimization',
        'Database security implementation',
        'Backup and recovery solutions',
        'Data warehousing'
      ],
      process: [
        'Requirements Analysis', 
        'Database Design', 
        'Implementation', 
        'Data Migration', 
        'Testing', 
        'Monitoring & Maintenance'
      ],
      category: 'software'
    },
    {
      icon: Server,
      title: 'Backend Development',
      shortDescription: 'Scalable server-side applications and API development.',
      fullDescription: 'We build robust backend systems that power your digital products with reliability and efficiency. Our backend development services focus on creating secure, scalable, and high-performing server-side applications.',
      features: [
        'API development and integration',
        'Microservices architecture',
        'Authentication and authorization systems',
        'Payment gateway integration',
        'Server-side logic implementation',
        'Database integration'
      ],
      process: [
        'Architecture Planning', 
        'API Design', 
        'Core Development', 
        'Integration', 
        'Testing', 
        'Deployment'
      ],
      category: 'software'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      shortDescription: 'Native and cross-platform mobile applications.',
      fullDescription: 'We develop native and cross-platform mobile applications that deliver exceptional user experiences. Our mobile solutions are built with performance, security, and scalability in mind to ensure your app stands out in the marketplace.',
      features: [
        'iOS and Android app development',
        'Cross-platform solutions',
        'App store optimization',
        'Offline functionality',
        'Push notifications',
        'Third-party integrations'
      ],
      process: [
        'Concept & Planning', 
        'UI/UX Design', 
        'Development', 
        'Testing', 
        'Deployment', 
        'Updates & Support'
      ],
      category: 'software'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      shortDescription: 'Cloud migration, infrastructure setup, and management.',
      fullDescription: 'Our cloud solutions help businesses leverage the power of cloud computing for improved scalability, reduced costs, and enhanced security. We assist with migration, setup, and ongoing management of cloud infrastructure.',
      features: [
        'Cloud migration strategies',
        'Infrastructure as Code (IaC)',
        'Serverless architecture',
        'Containerization with Docker and Kubernetes',
        'CI/CD pipeline implementation',
        'Cloud security and compliance'
      ],
      process: [
        'Assessment', 
        'Strategy Development', 
        'Migration Planning', 
        'Implementation', 
        'Testing', 
        'Monitoring'
      ],
      category: 'software'
    },
    {
      icon: ShieldCheck,
      title: 'Cybersecurity',
      shortDescription: 'Comprehensive security assessments and solutions.',
      fullDescription: 'We provide robust cybersecurity solutions to protect your business from evolving threats. Our comprehensive approach includes security assessments, implementation of security controls, and ongoing monitoring to safeguard your digital assets.',
      features: [
        'Security assessments and audits',
        'Penetration testing',
        'Security architecture design',
        'Compliance with regulations (GDPR, HIPAA, etc.)',
        'Incident response planning',
        'Security awareness training'
      ],
      process: [
        'Security Assessment', 
        'Risk Analysis', 
        'Security Design', 
        'Implementation', 
        'Testing', 
        'Ongoing Monitoring'
      ],
      category: 'software'
    },
    
    // Digital Marketing Services
    {
      icon: PieChart,
      title: 'SEO & Content Marketing',
      shortDescription: 'Improve visibility and traffic with SEO and content strategies.',
      fullDescription: 'Our SEO and content marketing services help improve your website\'s visibility in search engine results, drive targeted organic traffic, and build thought leadership in your industry. We develop data-driven strategies tailored to your business goals.',
      features: [
        'Keyword research and strategy',
        'On-page and technical SEO',
        'Content strategy and creation',
        'Link building',
        'Local SEO optimization',
        'Performance tracking and reporting'
      ],
      process: [
        'Audit & Analysis', 
        'Strategy Development', 
        'Implementation', 
        'Content Creation', 
        'Optimization', 
        'Monitoring & Reporting'
      ],
      category: 'marketing'
    },
    {
      icon: TrendingUp,
      title: 'PPC Advertising',
      shortDescription: 'Results-driven paid advertising across multiple platforms.',
      fullDescription: 'Our PPC (Pay-Per-Click) advertising services deliver targeted traffic and leads through strategic ad campaigns. We focus on maximizing ROI by creating, managing, and optimizing paid campaigns across search engines and social media platforms.',
      features: [
        'Google Ads management',
        'Social media advertising',
        'Display and remarketing campaigns',
        'Ad copywriting and design',
        'Landing page optimization',
        'Conversion tracking and analytics'
      ],
      process: [
        'Account Setup', 
        'Keyword Research', 
        'Campaign Structure', 
        'Ad Creation', 
        'Optimization', 
        'Performance Analysis'
      ],
      category: 'marketing'
    },
    {
      icon: Share,
      title: 'Social Media Marketing',
      shortDescription: 'Build brand awareness and engagement through social channels.',
      fullDescription: 'We help businesses build and maintain a strong social media presence to increase brand awareness, engage with your audience, and drive website traffic. Our social media marketing strategies are tailored to your target audience and business objectives.',
      features: [
        'Social media strategy development',
        'Content creation and curation',
        'Community management',
        'Influencer marketing',
        'Social media advertising',
        'Performance analytics and reporting'
      ],
      process: [
        'Social Audit', 
        'Strategy Development', 
        'Content Planning', 
        'Implementation', 
        'Community Management', 
        'Performance Analysis'
      ],
      category: 'marketing'
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      shortDescription: 'Targeted email campaigns that convert leads into customers.',
      fullDescription: 'Our email marketing services help you build meaningful relationships with your audience through targeted, personalized email campaigns. We focus on delivering the right message to the right people at the right time to maximize conversions.',
      features: [
        'Email strategy development',
        'Campaign design and creation',
        'List segmentation and management',
        'Automation workflows',
        'A/B testing',
        'Performance analytics'
      ],
      process: [
        'Audience Analysis', 
        'Strategy Development', 
        'Template Design', 
        'Content Creation', 
        'Campaign Execution', 
        'Performance Analysis'
      ],
      category: 'marketing'
    },
    {
      icon: Globe,
      title: 'Content Creation',
      shortDescription: 'High-quality, engaging content that drives results.',
      fullDescription: 'Our content creation services provide high-quality, engaging content that resonates with your target audience and drives measurable results. We develop content strategies aligned with your business goals and create content that builds brand authority.',
      features: [
        'Content strategy development',
        'Blog posts and articles',
        'Whitepapers and ebooks',
        'Case studies',
        'Video and infographic content',
        'Content distribution'
      ],
      process: [
        'Audience Research', 
        'Strategy Development', 
        'Content Planning', 
        'Creation', 
        'Editing & Review', 
        'Publication & Distribution'
      ],
      category: 'marketing'
    },
    {
      icon: Target,
      title: 'Conversion Rate Optimization',
      shortDescription: 'Improve website conversion rates through data-driven strategies.',
      fullDescription: 'Our Conversion Rate Optimization (CRO) services help you turn more visitors into customers by improving your website\'s user experience and conversion paths. We use data-driven strategies to identify and fix conversion bottlenecks.',
      features: [
        'User behavior analysis',
        'A/B and multivariate testing',
        'Landing page optimization',
        'Checkout process optimization',
        'Form optimization',
        'Call-to-action enhancement'
      ],
      process: [
        'Data Analysis', 
        'Hypothesis Development', 
        'Test Planning', 
        'Implementation', 
        'Results Analysis', 
        'Iteration'
      ],
      category: 'marketing'
    }
  ];

  
  const completeServices = featuredServices.map(service => {
    // Find a matching service with more details in allServices
    // Remove the "s !== service" condition that was causing the problem
    const detailedService = allServices.find(
      s => s.title === service.title && (s.features || s.process)
    );
    
    // Default values for features and process
    const defaultFeatures = [
      'Professional consultation',
      'Custom solution development',
      'Quality assurance testing',
      'Performance optimization',
      'Dedicated support',
      'Regular updates and maintenance'
    ];
    
    const defaultProcess = [
      'Initial Consultation',
      'Requirements Analysis', 
      'Solution Design',
      'Implementation',
      'Quality Assurance',
      'Delivery & Support'
    ];
    
    if (detailedService) {
      // If found, use detailed service data
      return {
        ...service,
        fullDescription: detailedService.fullDescription || service.description,
        features: detailedService.features || defaultFeatures,
        process: detailedService.process || defaultProcess
      };
    } else {
      // Otherwise, create a complete service with default values
      return {
        ...service,
        fullDescription: service.description,
        features: defaultFeatures,
        process: defaultProcess
      };
    }
  });
  // Handle opening the service detail modal
  const openServiceDetail = (service) => {
    // Find the complete service data
    const fullService = allServices.find(s => s.title === service.title);
    setSelectedService(fullService || service);
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
  };

  // Handle closing modals
  const closeModal = () => {
    setSelectedService(null);
    setIsAllServicesModalOpen(false);
    // Restore scrolling
    document.body.style.overflow = 'auto';
  };

  // Open all services modal
  const openAllServicesModal = () => {
    setIsAllServicesModalOpen(true);
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
  };
  
  return (
    <section id="services" className="relative">
      {/* Main Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/src/assets/images/Programming background with person working with codes on computer.png"
          alt="Programming"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#080B14]/95"></div>
      </div>

      {/* Content Container */}
      <div className="relative max-w-[1600px] mx-auto px-8 lg:px-16 pt-32 pb-20">
        {/* Services Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-20">
          <div>
            {/* Logo & Title */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-gray-400 text-sm tracking-wider">OUR SERVICES</span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold text-white max-w-3xl leading-tight">
              We Provide Exclusive Services For{' '}
              <span className="text-teal-600">Your Business</span>
            </h2>
          </div>

          <button 
            onClick={openAllServicesModal}
            className="mt-8 lg:mt-0 px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-xl transition-colors 
                     flex items-center gap-2 font-medium"
          >
            VIEW ALL SERVICES
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {completeServices.map((service, index) => (
            <ServiceCard 
              key={index} 
              {...service} 
              onClick={() => openServiceDetail(service)}
            />
          ))}
        </div>

        {/* Bottom Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* Why Choose Us */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-gray-400 text-sm tracking-wider">WHY CHOOSE US</span>
            </div>

            <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
              More Than 5+ Year Experience<br />
              We Provide <span className="text-teal-600">IT Services</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-2xl">
              Synergistically incentivize effective imperative through fully researched 
              intellectual capital. Appropriately fashion client-based.
            </p>

            {/* Progress Indicators */}
            <div className="space-y-8 mb-12">
              <ProgressCircle 
                percentage={90} 
                title="Business Growth" 
                subtitle="Efficiently transition top-line ideas before market."
              />
              <ProgressCircle 
                percentage={95} 
                title="Quality Products" 
                subtitle="Efficiently transition top-line ideas before market."
              />
            </div>

            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-xl transition-colors gap-2 font-medium"
            >
              LEARN MORE
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Right Image Section */}
          <div className="relative">
            <img
              src="/src/assets/images/Vector.png"
              alt="Team collaboration"
              className="w-full rounded-[40px] relative z-10"
            />
            
            {/* Active Clients Badge */}
            <div className="absolute top-1/2 -left-16 transform -translate-y-1/2 bg-teal-600 text-white 
                          w-40 h-40 rounded-full flex flex-col items-center justify-center z-20">
              <span className="text-4xl font-bold">2K+</span>
              <span className="text-sm font-medium mt-1">Active Clients</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Service Detail Modal */}
      <ServiceDetailModal 
        isOpen={selectedService !== null}
        onClose={closeModal}
        service={selectedService}
      />
      
      {/* All Services Modal */}
      <AllServicesModal 
        isOpen={isAllServicesModalOpen}
        onClose={closeModal}
        allServices={allServices}
        onServiceSelect={openServiceDetail}
      />
    </section>
  );
};

export default ServicesSection;