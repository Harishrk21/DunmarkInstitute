import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Award, Users, BookOpen, Heart, Shield } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-br from-blue-900 via-teal-800 to-emerald-900 text-white pt-20 pb-8 overflow-hidden">
      {/* Animated Peacock Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 blur-xl animate-pulse"></div>
        <div className="absolute top-32 right-20 w-24 h-24 rounded-full bg-gradient-to-br from-teal-400 to-emerald-600 blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-cyan-600 blur-lg animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 blur-xl animate-pulse delay-500"></div>
        
        {/* Floating Peacock Eye Patterns */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 blur-lg animate-float opacity-20`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${5 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Top Section with Enhanced Branding */}
        <div className="text-center mb-16">
          <div className="flex flex-col items-center mb-8">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-full border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                  <Heart size={32} className="text-white" />
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-teal-300 bg-clip-text text-transparent mb-2">
                DUNMARK INSTITUTE
              </h3>
              <p className="text-lg text-cyan-100 font-light tracking-wide">OF MEDICAL SCIENCE</p>
              <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto mt-4 rounded-full"></div>
            </div>
          </div>
          <p className="text-cyan-100 text-lg max-w-2xl mx-auto leading-relaxed">
            Empowering healthcare professionals through quality education and practical training since 2020. 
            Where excellence meets compassion in every learning journey.
          </p>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur opacity-15 group-hover:opacity-25 transition duration-500"></div>
            <div className="relative bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mr-3">
                  <Heart size={16} className="text-white" />
                </div>
                About Us
              </h4>
              <p className="mb-6 text-cyan-100 leading-relaxed">
                Pioneering specialized healthcare education with innovative programs, hands-on training, and a commitment to developing compassionate professionals.
              </p>
              
              {/* Enhanced Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-300">5+</div>
                  <div className="text-xs text-cyan-100">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-300">100+</div>
                  <div className="text-xs text-cyan-100">Graduates</div>
                </div>
              </div>

              {/* Social Media with Enhanced Design */}
              <div className="flex space-x-4">
                <a href="#" className="group/social relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-0 group-hover/social:opacity-30 transition duration-300"></div>
                  <div className="relative w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition duration-300">
                    <Facebook size={18} className="text-white" />
                  </div>
                </a>
                <a href="#" className="group/social relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full blur opacity-0 group-hover/social:opacity-30 transition duration-300"></div>
                  <div className="relative w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center hover:scale-110 transition duration-300">
                    <Instagram size={18} className="text-white" />
                  </div>
                </a>
                <a href="#" className="group/social relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-teal-500 rounded-full blur opacity-0 group-hover/social:opacity-30 transition duration-300"></div>
                  <div className="relative w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-600 rounded-full flex items-center justify-center hover:scale-110 transition duration-300">
                    <Linkedin size={18} className="text-white" />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-2xl blur opacity-15 group-hover:opacity-25 transition duration-500"></div>
            <div className="relative bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-full flex items-center justify-center mr-3">
                  <BookOpen size={16} className="text-white" />
                </div>
                Quick Links
              </h4>
              <div className="w-16 h-0.5 bg-gradient-to-r from-teal-400 to-emerald-400 mb-6 rounded-full"></div>
              <ul className="space-y-3">
                {[
                  { to: "/", label: "Home" },
                  { to: "/about", label: "About Us" },
                  { to: "/courses", label: "Courses" },
                   { to: "/campus ", label: "Campus" },
                  { to: "/gallery", label: "Gallery" },
                  { to: "/certification", label: "Certification Courses" },
                  { to: "/departments", label: "Departments" },
                  { to: "/admission", label: "Admission" },
                  { to: "/contact", label: "Contact" }

                ].map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.to} 
                      className="text-cyan-100 hover:text-white transition duration-300 flex items-center group/link"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full mr-3 group-hover/link:scale-125 transition duration-300"></div>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Our Courses */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl blur opacity-15 group-hover:opacity-25 transition duration-500"></div>
            <div className="relative bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mr-3">
                  <Award size={16} className="text-white" />
                </div>
                Our Courses
              </h4>
              <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 mb-6 rounded-full"></div>
              <ul className="space-y-3">
                {[
                  { to: "/courses/sensory-integration", label: "Sensory Integration Therapy" },
                  { to: "/courses/applied-behavior", label: "Applied Behavior Therapy" },
                  { to: "/courses/speech-language", label: "Speech & Language Pathology" },
                  { to: "/courses/mindfulness", label: "Mindfulness-Based Interventions" },
                  { to: "/courses/brain-gym", label: "Brain Gym & Neuro-Movement" },
                  { to: "/courses/occupational-therapy", label: "Occupational Therapy" },
                  { to: "/courses/neuro-developmental", label: "Neurodevelopmental Rehabilitation" },
                  { to: "/courses/assistive tech", label: "Assistive Technology and Adaptive Therapy" }


                ].map((course, index) => (
                  <li key={index}>
                    <a 
                      href={course.to} 
                      className="text-cyan-100 hover:text-white transition duration-300 flex items-start group/link text-sm"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-3 mt-1.5 group-hover/link:scale-125 transition duration-300 flex-shrink-0"></div>
                      {course.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl blur opacity-15 group-hover:opacity-25 transition duration-500"></div>
            <div className="relative bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mr-3">
                  <Phone size={16} className="text-white" />
                </div>
                Contact Info
              </h4>
              <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 mb-6 rounded-full"></div>
              <ul className="space-y-4">
                <li className="flex items-start group/contact">
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/contact:scale-110 transition duration-300">
                    <MapPin size={14} className="text-white" />
                  </div>
                  <span className="text-cyan-100 text-sm leading-relaxed">
                    1NO 90, 15TH BLOCK, 13th St, Thiru Nagar, <br />
                    Villivakkam, Chennai, Tamil Nadu 600049
                  </span>
                </li>
                <li className="flex items-center group/contact">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 group-hover/contact:scale-110 transition duration-300">
                    <Phone size={14} className="text-white" />
                  </div>
                  <a href="tel:+18001234567" className="hover:text-white transition text-cyan-100 text-sm">
                    +91 82489 99216 <br/>
                    +91 80731 78006
                  </a>
                </li>
                <li className="flex items-center group/contact">
                  <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 group-hover/contact:scale-110 transition duration-300">
                    <Mail size={14} className="text-white" />
                  </div>
                  <a href="mailto:info@dunmark.edu" className="hover:text-white transition text-cyan-100 text-sm">
                    info@dunmarkedu.com
                  </a>
                </li>
              </ul>

              {/* Office Hours */}
              <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
                <h5 className="text-sm font-semibold text-white mb-2">Office Hours</h5>
                <p className="text-xs text-cyan-100">Mon - Fri: 9:00 AM - 6:00 PM</p>
                <p className="text-xs text-cyan-100">Sat: 9:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="relative mt-16 pt-8">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-cyan-100 text-sm">
                © {new Date().getFullYear()} Dunmark Institute of Medical Science. All rights reserved.
              </p>
              <p className="text-xs text-cyan-200 mt-1">
                Affiliated by Central Government of India 
              </p>
            </div>
            
            {/* <div className="flex flex-wrap justify-center lg:justify-end gap-6 text-sm">
              {[
                "Privacy Policy",
                "Terms of Service", 
                "Anti-Ragging Cell",
                "Grievance Portal",
                "Alumni Portal",
                "Student Login"
              ].map((link, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-cyan-100 hover:text-white transition duration-300 relative group"
                >
                  {link}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-400 group-hover:w-full transition-all duration-300"></div>
                </a>
              ))}
            </div> */}
          </div>

          {/* Accreditation Badges */}
          <div className="flex justify-center items-center space-x-8 mt-8 pt-6">
            <div className="text-center group">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition duration-300">
                <Shield size={20} className="text-white" />
              </div>
              <div className="text-xs text-cyan-200">Government</div>
              <div className="text-xs text-cyan-200">Affiliated</div>
            </div>
            {/* <div className="text-center group">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition duration-300">
                <Award size={20} className="text-white" />
              </div>
              <div className="text-xs text-cyan-200">NAAC</div>
              <div className="text-xs text-cyan-200">Accredited</div>
            </div> */}
            <div className="text-center group">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition duration-300">
                <Users size={20} className="text-white" />
              </div>
              <div className="text-xs text-cyan-200">Industry</div>
              <div className="text-xs text-cyan-200">Partners</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;