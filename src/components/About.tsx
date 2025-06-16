import React from 'react';
import { Award, BookOpen, Users, Briefcase, Building2, GraduationCap, HeartPulse, ShieldCheck } from 'lucide-react';
// import {  Mail, Phone, Award, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';
import AravindImg from '../assets/aravind1.jpg'

const About: React.FC = () => {
  const whyChooseData = [
    { icon: BookOpen, title: "Industry-Relevant Curriculum", description: "Curriculum designed with industry experts, updated regularly for current healthcare needs.", gradient: "from-cyan-500 to-blue-600" },
    { icon: Users, title: "Expert Faculty & Mentors", description: "Learn from experienced professionals with extensive clinical and academic backgrounds.", gradient: "from-teal-500 to-cyan-600" },
    { icon: Briefcase, title: "Hands-on Clinical Training", description: "Extensive practical exposure through simulation labs and clinical partnerships.", gradient: "from-blue-500 to-teal-600" },
    { icon: Award, title: "Internship & Placement Support", description: "Dedicated placement cell ensuring career guidance and job opportunities.", gradient: "from-emerald-500 to-teal-600" },
    { icon: Building2, title: "Multi-Specialty Learning", description: "Access to diverse clinical settings for comprehensive learning experience.", gradient: "from-cyan-500 to-emerald-600" },
    { icon: GraduationCap, title: "Government Affiliation", description: "Central Government affiliated, ensuring recognized qualifications.", gradient: "from-blue-500 to-cyan-600" }
  ];

  const facilities = [
    { image: "https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg", title: "Therapy Labs & Simulation Clinics", description: "State-of-the-art facilities for practical training" },
    { image: "https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg", title: "Library with Digital Resources", description: "Extensive collection of books, journals, and online resources" },
    { image: "https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg", title: "Wi-Fi Enabled Smart Classrooms", description: "Modern learning environments with latest technology" }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-teal-800 to-emerald-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/45842/clinic-medical-health-medicine-45842.jpeg')] bg-cover bg-center opacity-20"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(4)].map((_, i) => (
            <div key={i} className={`absolute w-${24 + i * 4} h-${24 + i * 4} rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 blur-xl animate-pulse`}
                 style={{ top: `${20 + i * 20}%`, left: `${10 + i * 25}%`, animationDelay: `${i * 500}ms` }}></div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-blue-300 to-teal-300 bg-clip-text text-transparent leading-tight">
              About DUNMARK
            </h1>
            <p className="text-xl md:text-3xl text-cyan-100 mb-8 font-light">Excellence in Healthcare Education Since 2020</p>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mb-8 rounded-full"></div>
            <p className="text-lg max-w-2xl text-blue-100 leading-relaxed">
              Pioneering specialized healthcare education with innovative programs and hands-on training, where brilliance meets compassion in every learning experience.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-cyan-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                <img src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg" alt="Dunmark Institute" 
                     className="relative rounded-2xl shadow-2xl w-full h-auto transform group-hover:scale-105 transition duration-500" />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-800 to-teal-700 bg-clip-text text-transparent mb-8">Our Journey</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mb-8 rounded-full"></div>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                Founded in 2012, Dunmark Institute of Medical Science has established itself as a premier institution for specialized healthcare education. Our mission is to develop skilled healthcare professionals through comprehensive diploma programs that combine theoretical knowledge with practical training.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                With state-of-the-art facilities, experienced faculty, and industry partnerships, we prepare our students to meet the growing demands of the healthcare sector.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: ShieldCheck, text: "5+ Years Experience", gradient: "from-cyan-500 to-blue-600" },
                  { icon: GraduationCap, text: "100+ Graduates", gradient: "from-teal-500 to-emerald-600" },
                  { icon: Building2, text: "Modern Campus", gradient: "from-blue-500 to-cyan-600" },
                  { icon: HeartPulse, text: "Clinical Partnerships", gradient: "from-emerald-500 to-teal-600" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center p-4 bg-white/70 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                    <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center mr-4`}>
                      <item.icon className="text-white" size={20} />
                    </div>
                    <span className="text-gray-700 font-semibold">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-teal-800 to-emerald-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 blur-lg animate-float"
                 style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animationDelay: `${i * 0.5}s`, animationDuration: `${4 + Math.random() * 2}s` }}></div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Core Values</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto mb-8 rounded-full"></div>
            <p className="text-cyan-100 max-w-3xl mx-auto text-lg">
              Guiding principles that shape our educational approach and institutional culture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {[
              { icon: Award, title: "Our Vision", description: "To be India's leading institute in allied health sciences, promoting excellence in therapy education, innovation in clinical practices, and compassionate service to the community.", gradient: "from-cyan-500 to-blue-600" },
              { icon: HeartPulse, title: "Our Mission", description: "To train competent, ethical, and compassionate professionals in the fields of sensory integration, behavioural science, neurodevelopment, and communication therapies.", gradient: "from-teal-500 to-emerald-600" }
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className={`absolute -inset-2 bg-gradient-to-r ${item.gradient.replace('to-', 'to-').replace('from-', 'from-')} rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500`}></div>
                <div className="relative bg-white/95 backdrop-blur-sm p-10 rounded-2xl shadow-2xl border border-white/20 hover:transform hover:scale-105 transition duration-500">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center mb-6 mx-auto`}>
                    <item.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-800 to-teal-700 bg-clip-text text-transparent mb-6 text-center">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-center">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose DUNMARK */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-cyan-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-800 to-teal-700 bg-clip-text text-transparent mb-6">Why Choose DUNMARK?</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto mb-8 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseData.map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
                <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-500 border border-white/50 group-hover:transform group-hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center mb-6 group-hover:rotate-12 transition duration-500`}>
                    <item.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-800 to-teal-700 bg-clip-text text-transparent mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Leadership Team - Dr. Aravind Only */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-teal-800 to-emerald-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 blur-xl animate-pulse"></div>
          <div className="absolute bottom-32 right-32 w-24 h-24 rounded-full bg-gradient-to-br from-teal-400 to-emerald-600 blur-lg animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Leadership</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto mb-8 rounded-full"></div>
            <p className="text-cyan-100 max-w-3xl mx-auto text-lg">
              Visionary leadership dedicated to transforming healthcare education with expertise and innovation
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/20 group-hover:transform group-hover:scale-105 transition duration-500">
                
                <div className="flex flex-col lg:flex-row">
                  {/* Image Section - Optimized for 710x824 dimensions */}
                  <div className="lg:w-2/5 relative overflow-hidden">
                    <div className="aspect-[710/824] lg:h-full relative">
                      <img 
                        src={AravindImg} 
                        alt="Dr. AK Aravind - CEO"
                        className="w-full h-full object-cover object-center transform group-hover:scale-105 transition duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/20"></div>
                      <div className="absolute bottom-6 left-6 lg:bottom-auto lg:top-6">
                        <h3 className="text-2xl font-bold text-white mb-2">Dr. AK Aravind</h3>
                        <p className="text-teal-200 font-medium">Chief Executive Officer</p>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="lg:w-3/5 p-8 lg:p-12">
                    <h4 className="text-2xl font-semibold bg-gradient-to-r from-blue-800 to-teal-700 bg-clip-text text-transparent mb-6">
                      Distinguished Healthcare Leader
                    </h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Dr. AK Aravind brings exceptional expertise as an Occupational Therapist, Mindfulness Trainer, and Brain Gym certified instructor. With a Bachelor's degree in Occupational Therapy from TN Dr. M.G.R Medical University (2020), he combines clinical excellence with educational innovation.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      His specialized training in sensory integration, neurodevelopmental therapy, and behavioral interventions has positioned him as a thought leader in pediatric rehabilitation.
                    </p>
                    
                    <div className="mb-8">
                      <h5 className="font-semibold text-gray-800 mb-4">Key Expertise:</h5>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        {["Sensory Integration", "Brain Gym Training", "Mindfulness Therapy", "Pediatric Care"].map((skill, idx) => (
                          <div key={idx} className="flex items-center text-gray-600">
                            <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full mr-3"></div>
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-4">
                      {/* <a href="#" className="p-2 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-full hover:from-cyan-500 hover:to-teal-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/50">
                    <Instagram size={18} className="text-white" /></a */}
                      {[
                        
                        { href: "https://www.linkedin.com/pub/dir/Dr.ak/Aravind", icon: Users },
                        { href: "https://www.facebook.com/aravind.bot.7/", icon: BookOpen },
                        { href: "https://akaravind369.blogspot.com/p/dr-ak-aravind.html", icon: Award }
                      ].map((link, idx) => (
                        <a key={idx} href={link.href} target="_blank" rel="noopener noreferrer" 
                           className={`w-12 h-12 bg-gradient-to-br ${idx === 0 ? 'from-blue-500 to-cyan-600' : idx === 1 ? 'from-cyan-500 to-teal-600' : 'from-teal-500 to-emerald-600'} rounded-full flex items-center justify-center hover:scale-110 transition duration-300`}>
                          <link.icon className="text-white" size={18} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus & Facilities */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-cyan-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-800 to-teal-700 bg-clip-text text-transparent mb-6">Our Campus & Facilities</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto mb-8 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {facilities.map((facility, index) => (
              <div key={index} className="relative overflow-hidden rounded-2xl group h-80">
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative h-full overflow-hidden rounded-2xl">
                  <img src={facility.image} alt={facility.title} className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">{facility.title}</h3>
                      <p className="text-cyan-100 text-sm leading-relaxed">{facility.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {[
              { title: "Student Amenities", items: ["Cafeteria with healthy food options", "Student lounge and recreation areas", "Separate hostel facilities for boys and girls", "24/7 security and medical support"], gradient: "from-cyan-400 to-blue-500" },
              { title: "Academic Support", items: ["Dedicated placement and internship cell", "Career counseling services", "Research support facilities", "Student mentorship program"], gradient: "from-teal-400 to-emerald-500" }
            ].map((section, index) => (
              <div key={index} className="relative group">
                <div className={`absolute -inset-2 bg-gradient-to-r ${section.gradient} rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500`}></div>
                <div className="relative bg-white/95 backdrop-blur-sm p-10 rounded-2xl shadow-2xl border border-white/20">
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-800 to-teal-700 bg-clip-text text-transparent mb-8">{section.title}</h3>
                  <div className="space-y-6">
                    {section.items.map((item, idx) => (
                      <div key={idx} className="flex items-center text-gray-700">
                        <div className={`w-3 h-3 bg-gradient-to-r ${index === 0 ? 'from-cyan-500 to-teal-500' : 'from-teal-500 to-emerald-500'} rounded-full mr-4 flex-shrink-0`}></div>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliations & Recognitions */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-teal-800 to-emerald-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-teal-400 to-emerald-600 blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Affiliations & Recognitions</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto mb-8 rounded-full"></div>
          </div>
          
          <div className="relative group max-w-6xl mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
            <div className="relative bg-white/90 backdrop-blur-sm p-12 rounded-3xl shadow-2xl border border-white/50">
              <div className="text-center mb-12">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition duration-500">
                  <Award className="text-white" size={48} />
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-800 to-teal-700 bg-clip-text text-transparent mb-6">
                  Affiliated by Central Government of India
                </h3>
                <p className="text-gray-700 max-w-4xl mx-auto mb-12 text-lg leading-relaxed">
                  Our programs are recognized and approved by relevant government bodies, ensuring high standards of education and professional credibility for our graduates.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: Award, title: "Quality Education", description: "Meets national education standards", gradient: "from-cyan-500 to-blue-600" },
                  { icon: GraduationCap, title: "Recognized Diplomas", description: "Nationally accepted qualifications", gradient: "from-teal-500 to-emerald-600" },
                  { icon: Users, title: "Industry Partners", description: "Strong professional network", gradient: "from-blue-500 to-teal-600" }
                ].map((item, index) => (
                  <div key={index} className="text-center group/item">
                    <div className={`w-20 h-20 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center mx-auto mb-6 group-hover/item:scale-110 transition duration-500`}>
                      <item.icon className="text-white" size={32} />
                    </div>
                    <h4 className="font-bold bg-gradient-to-r from-blue-800 to-teal-700 bg-clip-text text-transparent mb-3 text-lg">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default About;