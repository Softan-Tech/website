import React, { useState } from 'react';
import { Monitor, Server, Database, Settings, Cloud, Lightbulb, ShieldCheck, Users, Layers, Star } from 'lucide-react';

const techStack = [
  {
    icon: Monitor,
    title: 'Frontend',
    description: 'Modern frontend technologies for responsive, fast, and accessible user interfaces.',
    tools: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'Vite'],
  },
  {
    icon: Server,
    title: 'Backend',
    description: 'Robust server-side technologies powering APIs and business logic.',
    tools: ['Node.js', 'Express.js', 'NestJS', 'GraphQL', 'REST APIs'],
  },
  {
    icon: Database,
    title: 'Databases',
    description: 'Efficient and secure data storage and retrieval solutions.',
    tools: ['PostgreSQL', 'MongoDB', 'Firebase', 'Redis', 'Supabase'],
  },
  {
    icon: Settings,
    title: 'DevOps & CI/CD',
    description: 'Automation, deployment, and system operations for reliable delivery.',
    tools: ['Docker', 'GitHub Actions', 'Jenkins', 'PM2', 'Linux CLI'],
  },
  {
    icon: Cloud,
    title: 'Cloud & Infrastructure',
    description: 'Scalable cloud platforms and infrastructure management.',
    tools: ['AWS', 'GCP', 'Firebase Hosting', 'Vercel', 'Netlify'],
  },
];

const values = [
  { icon: Lightbulb, title: "Innovation", desc: "Embrace cutting-edge tech for real impact." },
  { icon: ShieldCheck, title: "Integrity", desc: "Honesty and transparency in every engagement." },
  { icon: Users, title: "Customer-Centricity", desc: "Tailored, results-driven client focus." },
  { icon: Layers, title: "Collaboration", desc: "Work closely with partners to build solutions." },
  { icon: Star, title: "Excellence", desc: "Deliver high-quality software and service." }
];
const AboutUs = () => {
  const [isAllTechnologyStackModalOpen, setIsAllTechnologyStackModalOpen] = useState(false);

  const openAllTechnologyStack = () => {
    setIsAllTechnologyStackModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeAllTechnologyStack = () => {
    setIsAllTechnologyStackModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Image Column */}
            <div className="lg:pl-8 relative">
              <div className="relative aspect-[4/3] md:aspect-auto">
                <img
                  src="/assets/images/about-us-left.png"
                  alt="Team collaboration"
                  className="w-full h-full object-cover rounded-[40px] overflow-hidden"
                />
              </div>
            </div>

            {/* Right Content Column */}
            <div className="lg:pr-8 lg:max-w-[650px]">
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-[#2B004D] text-lg">About SOFTAN TECH Solutions Limited</h3>
              </div>

              <h2 className="text-5xl lg:text-[56px] font-bold mb-8 leading-tight">
                We Are Increasing Business Success With{' '}
                <span className="text-teal-600">Technology</span>
              </h2>

              <p className="text-lg text-gray-600 mb-8 max-w-xl">
                At Softan Tech, we design future-ready solutions that automate processes, unlock insights, and fuel sustainable growth across Africa and beyond.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                  <h3 className="text-2xl font-bold text-[#2B004D] mb-2">Our Mission</h3>
                  <p className="text-gray-600">Empower businesses with scalable digital systems that streamline operations and enhance productivity.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                  <h3 className="text-2xl font-bold text-[#2B004D] mb-2">Our Vision</h3>
                  <p className="text-gray-600">To be the go-to technology partner for innovation and digital transformation in Africa and beyond.</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-[#2B004D] mb-4">Core Values</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {values.map((val, i) => (
                  <div key={i} className="p-6 bg-teal-50 rounded-xl hover:bg-white transition shadow">
                    <val.icon className="text-teal-600 mb-4 w-8 h-8" />
                    <h4 className="text-lg font-semibold mb-2">{val.title}</h4>
                    <p className="text-gray-600 text-sm">{val.desc}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-6 mb-16 p-10" >
              <a href="https://www.linkedin.com/in/handel-dan-bb51a6128/" target='_blank'><button className="bg-teal-600 text-white px-10 py-4 rounded-lg hover:bg-teal-700 transition-colors text-sm font-medium">
                  FOUNDER
                </button></a>
                <button
                  className="bg-teal-600 text-white px-10 py-4 rounded-lg hover:bg-teal-700 transition-colors text-sm font-medium"
                  onClick={openAllTechnologyStack}
                >
                  TECHNOLOGY INDEX
                </button>
              </div>

              {/* <div className="bg-gray-100 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 sm:gap-8">
                <div className="w-full sm:w-36 relative">
                  <img
                    src="/assets/images/dan.png"
                    alt="Founder"
                    className="w-full h-[240px] sm:w-36 sm:h-36 rounded-xl object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold mb-1">Handel Dan</h3>
                  <p className="text-sm text-gray-500 mb-4">Founder & CEO</p>
                  <blockquote className="italic text-gray-700 border-l-4 border-teal-600 pl-4">
                    “At Softan Tech, we don’t just build software—we create digital ecosystems that
                    empower businesses to scale, innovate, and succeed.”
                  </blockquote>
                </div> 
              </div>*/}
            </div>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {isAllTechnologyStackModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl p-6 shadow-lg relative">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl"
              onClick={closeAllTechnologyStack}
            >
              ✕
            </button>
            <h2 className="text-3xl font-bold mb-6 text-center text-teal-600">Technology Stack</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techStack.map((stack, index) => (
                <div key={index} className="border rounded-xl p-4 shadow hover:shadow-lg transition">
                  <stack.icon className="h-8 w-8 text-teal-600 mb-3" />
                  <h3 className="text-xl font-semibold mb-2">{stack.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{stack.description}</p>
                  <ul className="list-disc list-inside text-gray-800 text-sm space-y-1">
                    {stack.tools.map((tool, i) => (
                      <li key={i}>{tool}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutUs;
