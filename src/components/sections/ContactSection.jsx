import React, { useState, useEffect } from 'react';
import { ArrowRight, Phone, Mail, MapPin, CheckCircle, AlertTriangle, Loader } from 'lucide-react';

const ContactCard = ({ icon: Icon, title, info, action, link }) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-teal-600/5 to-purple-600/5 rounded-3xl blur-xl 
                    group-hover:blur-2xl transition-all duration-500"></div>
    <div className="relative bg-white/50 backdrop-blur-xl rounded-3xl p-8 border border-white/20
                    hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
      <div className="w-16 h-16 bg-teal-600/10 rounded-2xl flex items-center justify-center mb-6
                    group-hover:bg-teal-600 transition-colors duration-500">
        <Icon className="w-8 h-8 text-teal-600 group-hover:text-white transition-colors duration-500" />
      </div>
      
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{info}</p>
      
      <a href={link} className="flex items-center text-teal-600 font-medium group/btn">
        {action}
        <ArrowRight className="ml-2 w-5 h-5 transform group-hover/btn:translate-x-2 transition-transform duration-300" />
      </a>
    </div>
  </div>
);

const InputField = ({ 
  label, 
  type = "text", 
  placeholder, 
  name, 
  value, 
  onChange, 
  required = false,
  error = ""
}) => (
  <div className="relative">
    <label className="text-sm font-medium text-gray-700 mb-2 block">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className={`w-full px-6 py-4 bg-white/50 backdrop-blur-xl rounded-xl border ${error ? 'border-red-500' : 'border-gray-200'}
               focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 outline-none transition-all
               placeholder:text-gray-400`}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

const TextareaField = ({ 
  label, 
  placeholder, 
  name, 
  value, 
  onChange, 
  required = false, 
  rows = 4,
  error = ""
}) => (
  <div className="relative">
    <label className="text-sm font-medium text-gray-700 mb-2 block">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      rows={rows}
      className={`w-full px-6 py-4 bg-white/50 backdrop-blur-xl rounded-xl border ${error ? 'border-red-500' : 'border-gray-200'}
               focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 outline-none transition-all
               placeholder:text-gray-400 resize-none`}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

// Anti-bot challenge component
const ChallengeQuestion = ({ value, onChange, error }) => {
  // Simple math challenge
  const [challenge, setChallenge] = useState({ num1: 0, num2: 0, answer: 0 });
  
  useEffect(() => {
    // Generate two random numbers between 1 and 10
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setChallenge({ 
      num1, 
      num2, 
      answer: num1 + num2 
    });
  }, []);

  return (
    <div className="relative">
      <label className="text-sm font-medium text-gray-700 mb-2 block">
        Human Verification <span className="text-red-500">*</span>
      </label>
      <div className="mb-2 text-sm text-gray-600">
        Please solve this simple math problem to verify you're human: What is {challenge.num1} + {challenge.num2}?
      </div>
      <input
        type="number"
        value={value}
        onChange={onChange}
        placeholder="Enter the answer"
        required
        className={`w-full px-6 py-4 bg-white/50 backdrop-blur-xl rounded-xl border ${error ? 'border-red-500' : 'border-gray-200'}
                 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 outline-none transition-all
                 placeholder:text-gray-400`}
        data-expected={challenge.answer}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

// Hidden honeypot field to catch bots
const HoneypotField = ({ value, onChange }) => (
  <div className="opacity-0 absolute top-0 left-0 h-0 w-0 -z-10 overflow-hidden">
    <label>
      <span>If you're human, don't fill this out</span>
      <input 
        type="text" 
        name="website" 
        value={value}
        onChange={onChange}
        tabIndex="-1"
        autoComplete="off"
      />
    </label>
  </div>
);

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Number",
      info: "+254705706442",
      action: "Call Now",
      link: "tel:+254705706442"
    },
    {
      icon: Mail,
      title: "Email Address",
      info: "info@softan.tech",
      action: "Mail Now",
      link: "mailto:info@softan.tech"
    },
    {
      icon: MapPin,
      title: "Office Address",
      info: "10th Floor, Mercure, Upperhill, Nairobi",
      action: "Get Directions",
      link: "https://maps.google.com/?q=Mercure+Upperhill+Nairobi"
    }
  ];

  // Form state
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    challenge: '',
    honeypot: '',
    submitting: false,
    submitted: false,
    error: false,
    errors: {}
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
      errors: {
        ...formState.errors,
        [name]: '' // Clear error when field changes
      }
    });
  };

  // Validate email format
  const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  // Validate phone number (basic validation)
  const isValidPhone = (phone) => {
    const re = /^\+?[0-9\s\-\(\)]{7,20}$/;
    return re.test(String(phone));
  };

  // Form validation
  const validateForm = () => {
    const errors = {};
    
    if (!formState.firstName.trim()) {
      errors.firstName = 'First name is required';
    }
    
    if (!formState.lastName.trim()) {
      errors.lastName = 'Last name is required';
    }
    
    if (!formState.email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(formState.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (formState.phone && !isValidPhone(formState.phone)) {
      errors.phone = 'Please enter a valid phone number';
    }
    
    if (!formState.message.trim()) {
      errors.message = 'Message is required';
    }
    
    // Check challenge answer
    const expectedAnswer = document.querySelector('input[type="number"]').getAttribute('data-expected');
    if (formState.challenge !== expectedAnswer) {
      errors.challenge = 'Incorrect answer, please try again';
    }
    
    return errors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // If the honeypot field is filled, silently "submit" the form (bot detected)
    if (formState.honeypot) {
      setFormState({
        ...formState,
        submitted: true,
        submitting: false
      });
      return;
    }
    
    // Validate form
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setFormState({
        ...formState,
        errors: formErrors
      });
      return;
    }
    
    // Set submitting state
    setFormState({
      ...formState,
      submitting: true,
      error: false
    });
    
    try {
      // Simulate API call (replace with your actual form submission)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Form submission successful
      setFormState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        challenge: '',
        honeypot: '',
        submitting: false,
        submitted: true,
        error: false,
        errors: {}
      });
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setFormState(prevState => ({
          ...prevState,
          submitted: false
        }));
      }, 5000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      setFormState({
        ...formState,
        submitting: false,
        error: true
      });
    }
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-50 rounded-full blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
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
                <span className="text-teal-600">With Us</span>
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
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600/5 to-purple-600/5 rounded-[40px] blur-3xl"></div>
            <div className="relative bg-white/50 backdrop-blur-xl rounded-[40px] p-8 lg:p-12 border border-white/20">
              {/* Form Image */}
              <div className="w-full h-48 mb-8 rounded-2xl overflow-hidden">
                <img
                  src="/assets/images/Rectangle 12.png"
                  alt="Contact"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Form Success Message */}
              {formState.submitted && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8 flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-green-800 mb-1">Thank you for contacting us!</h3>
                    <p className="text-green-700">Your message has been sent successfully. We'll get back to you shortly.</p>
                  </div>
                </div>
              )}

              {/* Form Error Message */}
              {formState.error && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8 flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-red-800 mb-1">Something went wrong</h3>
                    <p className="text-red-700">We couldn't send your message. Please try again later or contact us directly.</p>
                  </div>
                </div>
              )}

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field to catch bots */}
                <HoneypotField
                  value={formState.honeypot}
                  onChange={handleChange}
                />

                <div className="grid grid-cols-2 gap-6">
                  <InputField 
                    label="First Name" 
                    placeholder="John" 
                    name="firstName"
                    value={formState.firstName}
                    onChange={handleChange}
                    required
                    error={formState.errors.firstName}
                  />
                  <InputField 
                    label="Last Name" 
                    placeholder="Doe" 
                    name="lastName"
                    value={formState.lastName}
                    onChange={handleChange}
                    required
                    error={formState.errors.lastName}
                  />
                </div>
                
                <InputField 
                  label="Email" 
                  type="email" 
                  placeholder="john@example.com" 
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  error={formState.errors.email}
                />
                
                <InputField 
                  label="Phone" 
                  type="tel" 
                  placeholder="+254 7XX XXX XXX" 
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  error={formState.errors.phone}
                />
                
                <TextareaField
                  label="Message"
                  placeholder="Write your message..."
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  error={formState.errors.message}
                />
                
                <ChallengeQuestion
                  value={formState.challenge}
                  onChange={(e) => handleChange({ target: { name: 'challenge', value: e.target.value } })}
                  error={formState.errors.challenge}
                />
                
                <button 
                  type="submit"
                  disabled={formState.submitting}
                  className="w-full bg-teal-600 text-white px-8 py-4 rounded-xl hover:bg-teal-700 
                           transition-colors flex items-center justify-center group disabled:bg-teal-400"
                >
                  {formState.submitting ? (
                    <>
                      <Loader className="w-5 h-5 mr-2 animate-spin" />
                      SENDING...
                    </>
                  ) : (
                    <>
                      CONTACT US
                      <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
                    </>
                  )}
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