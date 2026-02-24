import {
  ArrowRight,
  Award,
  Briefcase,
  CheckCircle,
  ChevronRight,
  ExternalLink,
  Images,
  MousePointerClick,
  Users,
  X,
} from 'lucide-react';
import { useState } from 'react';

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity"
        onClick={onClose}
      />

      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl max-h-[90vh] overflow-y-auto z-50 px-4">
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="h-56 relative">
            <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-3xl font-bold text-white">{project.title}</h3>
              <p className="text-white/85 mt-1">{project.category}</p>
            </div>

            <button
              onClick={onClose}
              className="absolute top-6 left-6 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-teal-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-8 lg:p-10">
            <p className="text-xl text-gray-600 mb-6">{project.fullDescription}</p>

            <h4 className="text-xl font-bold mb-4">Project Highlights</h4>
            <ul className="space-y-3 mb-8">
              {project.highlights.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {project.notableClients?.length ? (
              <>
                <h4 className="text-xl font-bold mb-4">Notable Organizations</h4>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.notableClients.map((client, index) => (
                    <span key={index} className="text-sm px-3 py-1.5 rounded-full bg-gray-100 text-gray-700">
                      {client}
                    </span>
                  ))}
                </div>
              </>
            ) : null}

            <h4 className="text-xl font-bold mb-4">Project Gallery ({project.images.length})</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {project.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${project.title} preview ${index + 1}`}
                  className="w-full h-48 object-cover rounded-xl"
                />
              ))}
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-teal-100 p-6 rounded-xl flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <h4 className="text-xl font-bold">Explore this project</h4>
                <p className="text-gray-600">Open the live site or documentation.</p>
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors flex items-center gap-2"
              >
                Visit Project
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ProjectCard = ({ project, onClick }) => {
  const coverImage = project.images[0];

  return (
    <article className="group relative bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-600/90 to-teal-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

      <div className="relative">
        <img src={coverImage} alt={`${project.title} preview`} className="w-full h-64 object-cover" />
        <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/70 text-white text-xs rounded-full backdrop-blur-sm z-20">
          {project.images.length} image{project.images.length > 1 ? 's' : ''}
        </div>
        <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-500 z-20">
          <Images className="w-6 h-6 text-teal-600" />
        </div>
      </div>

      <div className="p-8 relative z-20">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-xl font-bold group-hover:text-white transition-colors duration-500">{project.title}</h3>
          <span className="text-xs px-3 py-1 rounded-full bg-teal-50 text-teal-700 group-hover:bg-white/20 group-hover:text-white transition-colors duration-500 whitespace-nowrap">
            {project.category}
          </span>
        </div>

        <p className="text-gray-600 group-hover:text-gray-300 transition-colors duration-500">{project.description}</p>

        <button
          onClick={onClick}
          className="mt-6 flex items-center text-teal-600 font-medium group-hover:text-white transition-colors duration-500"
        >
          View Case Study
          <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
        </button>
      </div>
    </article>
  );
};

const StatCard = ({ icon: Icon, number, label }) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-800 blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 rounded-[32px]" />
    <div className="relative bg-white/80 backdrop-blur-xl rounded-[32px] p-8 border border-white/20 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
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
  const [activeProject, setActiveProject] = useState(null);

  const portfolioProjects = [
    {
      title: 'Meskith Creations',
      category: 'Brand & Web Experience',
      url: 'https://meskith.com/',
      description:
        'A design and build agency platform with AI-forward positioning focused on decentralizing branding and digital storytelling.',
      fullDescription:
        'Meskith Creations is a design and build agency experience that communicates premium service delivery while positioning AI as an enabler for decentralized branding workflows.',
      highlights: ['Agency Website', 'Brand-led UX', 'AI-forward Positioning'],
      images: ['/assets/images/m1.png', '/assets/images/m2.png'],
    },
    {
      title: 'Schoolbooks Accounting',
      category: 'EdTech & Operations Platform',
      url: 'https://www.schoolbooks.ke/',
      description:
        'A unified accounting, management, and school operations platform with AI-enabled workflows that simplify daily use.',
      fullDescription:
        'Schoolbooks Accounting brings core school functions into one platform—accounting, management operations, and reporting—while AI features reduce process friction for teams.',
      highlights: ['Unified School Operations', 'Accounting Workflows', 'AI-enabled Platform'],
      images: ['/assets/images/s1.png', '/assets/images/s2.png', '/assets/images/s3.png', '/assets/images/s4.png', '/assets/images/s5.png'],
    },
    {
      title: 'TaxManager Integration Middleware',
      category: 'Enterprise Integration',
      url: 'https://ke.docs.digitax.tech/docs/digitax-sage-online-plugin',
      description:
        'Middleware connecting Sage and Odoo to eTIMS through Digitax for compliant invoice generation across multiple businesses.',
      fullDescription:
        'TaxManager is an integration middleware layer that bridges ERP/accounting systems (Sage and Odoo) with eTIMS through Digitax, enabling compliant and dependable tax invoice workflows.',
      highlights: ['Sage + Odoo + eTIMS', '15+ Businesses Connected', 'Compliance Automation'],
      notableClients: [
        'Gravity Solutions',
        'Ngong Veg Limited',
        'Lepic School',
        'Lewa Conservancy',
        'Sotick Highlands',
        'Madison Insurance Group Limited',
        'CDSC',
        'DXC Technology',
      ],
      images: ['/assets/images/t1.png', '/assets/images/t2.png'],
    },
    {
      title: 'CDSC Platform Touchpoint',
      category: 'Enterprise Client Portfolio',
      url: 'https://www.cdsckenya.com/',
      description:
        'Enterprise delivery touchpoint represented in our integration portfolio, including collaborations around compliance-ready workflows.',
      fullDescription:
        'CDSC is part of our broader enterprise rollout footprint where robust integration architecture and dependable implementation quality were required to support institutional use cases.',
      highlights: ['Enterprise Stakeholder Environment', 'Compliance-linked Delivery', 'High-reliability Context'],
      images: ['/assets/images/r1.png', '/assets/images/r2.png', '/assets/images/r3.png', '/assets/images/r4.png'],
    },
  ];

  const stats = [
    { icon: Briefcase, number: '4', label: 'Featured Portfolio Projects' },
    { icon: CheckCircle, number: '15+', label: 'Businesses Connected' },
    { icon: Users, number: '8+', label: 'Notable Client Organizations' },
    { icon: Award, number: '10+', label: 'Years Combined Expertise' },
    { icon: MousePointerClick, number: '100%', label: 'Data-driven Project Galleries' },
  ];

  const openModal = (project) => {
    setActiveProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-72 h-72 bg-teal-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1600px] mx-auto px-8 lg:px-16 relative">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-gray-500 uppercase tracking-wider">PORTFOLIO</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Selected <span className="text-teal-600">Project Work</span>
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            A focused showcase of client projects and integrations delivered across brand, platform, and enterprise compliance contexts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {portfolioProjects.map((project, index) => (
            <ProjectCard key={index} project={project} onClick={() => openModal(project)} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>

      <ProjectModal isOpen={activeProject !== null} onClose={closeModal} project={activeProject} />
    </section>
  );
};

export default ProjectsSection;
