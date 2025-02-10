import React from 'react';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const ContactCard = ({ icon: Icon, title, info, action }) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 to-purple-600/5 rounded-3xl blur-xl 
                    group-hover:blur-2xl transition-all duration-500"></div>
    <div className="relative bg-white/50 backdrop-blur-xl rounded-3xl p-8 border border-white/20
                    hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
      <div className="w-16 h-16 bg-indigo-600/10 rounded-2xl flex items-center justify-center mb-6
                    group-hover:bg-indigo-600 transition-colors duration-500">
        <Icon className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors duration-500" />
      </div>
      
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{info}</p>
      
      <button className="flex items-center text-indigo-600 font-medium group/btn">
        {action}
        <ArrowRight className="ml-2 w-5 h-5 transform group-hover/btn:translate-x-2 transition-transform duration-300" />
      </button>
    </div>
  </div>
);

const InputField = ({ label, type = "text", placeholder }) => (
  <div className="relative">
    <label className="text-sm font-medium text-gray-700 mb-2 block">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full px-6 py-4 bg-white/50 backdrop-blur-xl rounded-xl border border-gray-200
               focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 outline-none transition-all
               placeholder:text-gray-400"
    />
  </div>
);

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Number",
      info: "+1 (234) 567-8901",
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Address",
      info: "contact@softan.com",
      action: "Mail Now"
    },
    {
      icon: MapPin,
      title: "Office Address",
      info: "123 Business Avenue, Tech City, 12345",
      action: "Get Directions"
    }
  ];

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-50 rounded-full blur-3xl opacity-50 transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-[1600px] mx-auto px-8 lg:px-16 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Section Header */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">

                <span className="text-gray-500 uppercase tracking-wider">GET CONSULTATION</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Let's Talk About Business Solutions{' '}
                <span className="text-indigo-600">With Us</span>
              </h2>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <ContactCard key={index} {...info} />
              ))}
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 to-purple-600/5 rounded-[40px] blur-3xl"></div>
            <div className="relative bg-white/50 backdrop-blur-xl rounded-[40px] p-8 lg:p-12 border border-white/20">
              {/* Form Image */}
              <div className="w-full h-48 mb-8 rounded-2xl overflow-hidden">
                <img
                  src="/src/assets/images/Rectangle 12.png"
                  alt="Contact"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Contact Form */}
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <InputField label="First Name" placeholder="John" />
                  <InputField label="Last Name" placeholder="Doe" />
                </div>
                <InputField label="Email" type="email" placeholder="john@example.com" />
                <InputField label="Phone" type="tel" placeholder="+1 (234) 567-8901" />
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Write your message..."
                    className="w-full px-6 py-4 bg-white/50 backdrop-blur-xl rounded-xl border border-gray-200
                             focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 outline-none transition-all
                             placeholder:text-gray-400 resize-none"
                  ></textarea>
                </div>
                <button className="w-full bg-indigo-600 text-white px-8 py-4 rounded-xl hover:bg-indigo-700 
                                 transition-colors flex items-center justify-center group">
                  CONTACT US
                  <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;