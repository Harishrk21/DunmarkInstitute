import React from 'react';
import { GraduationCap, Mail, Phone, Award, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

const Faculty: React.FC = () => {
  return (
    <div className="pt-24 bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900">
      {/* Hero Section with Peacock Gradient */}
      <section className="relative bg-gradient-to-r from-blue-900 via-teal-800 to-emerald-800 text-white py-20 overflow-hidden">
        {/* Peacock Feather Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-radial from-cyan-400 to-transparent rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-24 h-24 bg-gradient-radial from-emerald-400 to-transparent rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-gradient-radial from-blue-400 to-transparent rounded-full animate-pulse delay-700"></div>
          <div className="absolute bottom-32 right-1/3 w-20 h-20 bg-gradient-radial from-teal-400 to-transparent rounded-full animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-blue-300 to-emerald-300 bg-clip-text text-transparent">
              Our Distinguished Faculty
            </h1>
            <p className="text-2xl text-cyan-100 font-light">
              Meet our team of experienced healthcare professionals and educators
            </p>
            <div className="mt-6 w-32 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Department Heads with Peacock Styling */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-blue-950 relative">
        {/* Floating Peacock Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full opacity-20 animate-float"></div>
          <div className="absolute bottom-40 right-20 w-12 h-12 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full opacity-20 animate-float delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent mb-4">
              Heads of Departments
            </h2>
            <div className="w-48 h-1 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* HOD 1 */}
            <div className="group bg-gradient-to-br from-slate-800/80 via-blue-900/60 to-teal-900/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-500 hover:scale-105 hover:shadow-cyan-500/20">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Dr. Sarah Johnson"
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-cyan-300 mb-2">Dr. Sarah Johnson</h3>
                <p className="text-teal-200 mb-2 font-medium">HOD - Department of Sensory Therapy</p>
                <p className="text-slate-300 text-sm mb-6">Ph.D. in Occupational Therapy, 15+ years experience</p>
                
                {/* Contact Info */}
                <div className="space-y-3 mb-6">
                  <a href="mailto:sarah.j@dunmark.edu" className="flex items-center text-slate-300 hover:text-cyan-300 transition-colors">
                    <Mail size={18} className="mr-3 text-cyan-400" />
                    sarah.j@dunmark.edu
                  </a>
                  <a href="tel:+1234567890" className="flex items-center text-slate-300 hover:text-cyan-300 transition-colors">
                    <Phone size={18} className="mr-3 text-cyan-400" />
                    +1 (234) 567-890
                  </a>
                </div>
                
                {/* Social Media Icons */}
                <div className="flex space-x-4">
                  <a href="#" className="p-2 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-full hover:from-cyan-500 hover:to-teal-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/50">
                    <Instagram size={18} className="text-white" />
                  </a>
                  <a href="#" className="p-2 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50">
                    <Facebook size={18} className="text-white" />
                  </a>
                  <a href="#" className="p-2 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/50">
                    <Linkedin size={18} className="text-white" />
                  </a>
                  <a href="#" className="p-2 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-full hover:from-teal-500 hover:to-cyan-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-teal-500/50">
                    <Twitter size={18} className="text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* HOD 2 */}
            <div className="group bg-gradient-to-br from-slate-800/80 via-blue-900/60 to-teal-900/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-500 hover:scale-105 hover:shadow-cyan-500/20">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Dr. Michael Chen"
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-cyan-300 mb-2">Dr. Michael Chen</h3>
                <p className="text-teal-200 mb-2 font-medium">HOD - Department of Behavior Sciences</p>
                <p className="text-slate-300 text-sm mb-6">Ph.D. in Clinical Psychology, 12+ years experience</p>
                
                <div className="space-y-3 mb-6">
                  <a href="mailto:michael.c@dunmark.edu" className="flex items-center text-slate-300 hover:text-cyan-300 transition-colors">
                    <Mail size={18} className="mr-3 text-cyan-400" />
                    michael.c@dunmark.edu
                  </a>
                  <a href="tel:+1234567891" className="flex items-center text-slate-300 hover:text-cyan-300 transition-colors">
                    <Phone size={18} className="mr-3 text-cyan-400" />
                    +1 (234) 567-891
                  </a>
                </div>
                
                <div className="flex space-x-4">
                  <a href="#" className="p-2 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-full hover:from-cyan-500 hover:to-teal-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/50">
                    <Instagram size={18} className="text-white" />
                  </a>
                  <a href="#" className="p-2 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50">
                    <Facebook size={18} className="text-white" />
                  </a>
                  <a href="#" className="p-2 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/50">
                    <Linkedin size={18} className="text-white" />
                  </a>
                  <a href="#" className="p-2 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-full hover:from-teal-500 hover:to-cyan-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-teal-500/50">
                    <Twitter size={18} className="text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* HOD 3 */}
            <div className="group bg-gradient-to-br from-slate-800/80 via-blue-900/60 to-teal-900/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-500 hover:scale-105 hover:shadow-cyan-500/20">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Dr. Emily Rodriguez"
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-cyan-300 mb-2">Dr. Emily Rodriguez</h3>
                <p className="text-teal-200 mb-2 font-medium">HOD - Department of Communication Disorders</p>
                <p className="text-slate-300 text-sm mb-6">Ph.D. in Speech Pathology, 10+ years experience</p>
                
                <div className="space-y-3 mb-6">
                  <a href="mailto:emily.r@dunmark.edu" className="flex items-center text-slate-300 hover:text-cyan-300 transition-colors">
                    <Mail size={18} className="mr-3 text-cyan-400" />
                    emily.r@dunmark.edu
                  </a>
                  <a href="tel:+1234567892" className="flex items-center text-slate-300 hover:text-cyan-300 transition-colors">
                    <Phone size={18} className="mr-3 text-cyan-400" />
                    +1 (234) 567-892
                  </a>
                </div>
                
                <div className="flex space-x-4">
                  <a href="#" className="p-2 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-full hover:from-cyan-500 hover:to-teal-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/50">
                    <Instagram size={18} className="text-white" />
                  </a>
                  <a href="#" className="p-2 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50">
                    <Facebook size={18} className="text-white" />
                  </a>
                  <a href="#" className="p-2 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/50">
                    <Linkedin size={18} className="text-white" />
                  </a>
                  <a href="#" className="p-2 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-full hover:from-teal-500 hover:to-cyan-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-teal-500/50">
                    <Twitter size={18} className="text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Members by Department */}
      <section className="py-20 bg-gradient-to-b from-blue-950 to-slate-900 relative overflow-hidden">
        {/* Peacock Feather Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-cyan-400 via-teal-400 to-transparent rounded-full"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-radial from-emerald-400 via-blue-400 to-transparent rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent mb-4">
              Faculty Members
            </h2>
            <div className="w-48 h-1 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 mx-auto rounded-full"></div>
          </div>
          
          {/* Sensory Therapy Department */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-teal-300 mb-12 text-center">Department of Sensory Therapy</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Faculty Member 1 */}
              <div className="bg-gradient-to-br from-slate-800/70 via-blue-900/50 to-teal-900/70 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105">
                <div className="flex items-start mb-6">
                  <img 
                    src="https://images.pexels.com/photos/5407214/pexels-photo-5407214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Dr. Lisa Wong"
                    className="w-24 h-24 rounded-full object-cover mr-6 border-2 border-cyan-400/50"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-cyan-300 mb-1">Dr. Lisa Wong</h4>
                    <p className="text-teal-200 font-medium">Senior Therapist</p>
                    <p className="text-slate-300 text-sm mt-2">Specialization in Pediatric Sensory Integration</p>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <a href="#" className="p-2 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-full hover:from-cyan-500 hover:to-teal-500 transition-all duration-300 hover:scale-110">
                    <Instagram size={16} className="text-white" />
                  </a>
                  <a href="#" className="p-2 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 hover:scale-110">
                    <Facebook size={16} className="text-white" />
                  </a>
                  <a href="#" className="p-2 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 hover:scale-110">
                    <Linkedin size={16} className="text-white" />
                  </a>
                  <a href="#" className="p-2 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-full hover:from-teal-500 hover:to-cyan-500 transition-all duration-300 hover:scale-110">
                    <Twitter size={16} className="text-white" />
                  </a>
                </div>
              </div>

              {/* Faculty Member 2 */}
              <div className="bg-gradient-to-br from-slate-800/70 via-blue-900/50 to-teal-900/70 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105">
                <div className="flex items-start mb-6">
                  <img 
                    src="https://images.pexels.com/photos/5215021/pexels-photo-5215021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Dr. James Wilson"
                    className="w-24 h-24 rounded-full object-cover mr-6 border-2 border-cyan-400/50"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-cyan-300 mb-1">Dr. James Wilson</h4>
                    <p className="text-teal-200 font-medium">Clinical Instructor</p>
                    <p className="text-slate-300 text-sm mt-2">Expert in Sensory Assessment Techniques</p>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <a href="#" className="p-2 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-full hover:from-cyan-500 hover:to-teal-500 transition-all duration-300 hover:scale-110">
                    <Instagram size={16} className="text-white" />
                  </a>
                  <a href="#" className="p-2 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 hover:scale-110">
                    <Facebook size={16} className="text-white" />
                  </a>
                  <a href="#" className="p-2 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 hover:scale-110">
                    <Linkedin size={16} className="text-white" />
                  </a>
                  <a href="#" className="p-2 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-full hover:from-teal-500 hover:to-cyan-500 transition-all duration-300 hover:scale-110">
                    <Twitter size={16} className="text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Behavior Sciences Department */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-teal-300 mb-12 text-center">Department of Behavior Sciences</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Faculty Member 1 */}
              <div className="bg-gradient-to-br from-slate-800/70 via-blue-900/50 to-teal-900/70 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105">
                <div className="flex items-start mb-6">
                  <img 
                    src="https://images.pexels.com/photos/5215090/pexels-photo-5215090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Dr. Rachel Green"
                    className="w-24 h-24 rounded-full object-cover mr-6 border-2 border-cyan-400/50"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-cyan-300 mb-1">Dr. Rachel Green</h4>
                    <p className="text-teal-200 font-medium">Behavioral Specialist</p>
                    <p className="text-slate-300 text-sm mt-2">ABA Therapy Expert</p>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <a href="#" className="p-2 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-full hover:from-cyan-500 hover:to-teal-500 transition-all duration-300 hover:scale-110">
                    <Instagram size={16} className="text-white" />
                  </a>
                  <a href="#" className="p-2 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 hover:scale-110">
                    <Facebook size={16} className="text-white" />
                  </a>
                  <a href="#" className="p-2 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 hover:scale-110">
                    <Linkedin size={16} className="text-white" />
                  </a>
                  <a href="#" className="p-2 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-full hover:from-teal-500 hover:to-cyan-500 transition-all duration-300 hover:scale-110">
                    <Twitter size={16} className="text-white" />
                  </a>
                </div>
              </div>

              {/* Faculty Member 2 */}
              <div className="bg-gradient-to-br from-slate-800/70 via-blue-900/50 to-teal-900/70 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105">
                <div className="flex items-start mb-6">
                  <img 
                    src="https://images.pexels.com/photos/5407237/pexels-photo-5407237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Dr. David Kim"
                    className="w-24 h-24 rounded-full object-cover mr-6 border-2 border-cyan-400/50"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-cyan-300 mb-1">Dr. David Kim</h4>
                    <p className="text-teal-200 font-medium">Research Coordinator</p>
                    <p className="text-slate-300 text-sm mt-2">Behavioral Intervention Specialist</p>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <a href="#" className="p-2 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-full hover:from-cyan-500 hover:to-teal-500 transition-all duration-300 hover:scale-110">
                    <Instagram size={16} className="text-white" />
                  </a>
                  <a href="#" className="p-2 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 hover:scale-110">
                    <Facebook size={16} className="text-white" />
                  </a>
                  <a href="#" className="p-2 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 hover:scale-110">
                    <Linkedin size={16} className="text-white" />
                  </a>
                  <a href="#" className="p-2 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-full hover:from-teal-500 hover:to-cyan-500 transition-all duration-300 hover:scale-110">
                    <Twitter size={16} className="text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Achievements with Peacock Theme */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-blue-950 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent mb-4">
              Faculty Achievements
            </h2>
            <div className="w-48 h-1 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="group bg-gradient-to-br from-slate-800/60 via-blue-900/40 to-teal-900/60 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-500 hover:scale-105 hover:shadow-cyan-500/20">
              <div className="bg-gradient-to-br from-cyan-500 to-teal-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-cyan-300 mb-4">Research Publications</h3>
              <p className="text-slate-300 leading-relaxed">Over 50 research papers published in international journals by our faculty members</p>
            </div>
            
            <div className="group bg-gradient-to-br from-slate-800/60 via-blue-900/40 to-teal-900/60 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-500 hover:scale-105 hover:shadow-emerald-500/20">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-cyan-300 mb-4">Advanced Certifications</h3>
              <p className="text-slate-300 leading-relaxed">100% of our faculty holds advanced certifications in their respective fields</p>
            </div>
            
            <div className="group bg-gradient-to-br from-slate-800/60 via-blue-900/40 to-teal-900/60 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-500 hover:scale-105 hover:shadow-teal-500/20">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-cyan-300 mb-4">Industry Recognition</h3>
              <p className="text-slate-300 leading-relaxed">Multiple faculty members serve on national healthcare advisory boards</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Add custom styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
};

export default Faculty;