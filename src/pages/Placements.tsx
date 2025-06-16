import React from 'react';
import { Building2, Briefcase, Trophy, Users, Star, Heart, Globe, GraduationCap } from 'lucide-react';

const Placements = () => {
  return (
    <div className="pt-24 bg-gradient-to-br from-blue-900 via-teal-800 to-emerald-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-teal-700 to-cyan-600 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800/20 via-teal-600/20 to-cyan-500/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-200 to-teal-100 bg-clip-text text-transparent">
            Placements
          </h1>
          <p className="text-xl text-cyan-100 max-w-2xl">
            Building careers in healthcare through strong industry partnerships and innovative internship programs
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-teal-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
      </section>

      {/* Placement Statistics */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-900 to-teal-700 bg-clip-text mb-12 text-center">
            Placement Highlights
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 via-teal-50 to-cyan-50 p-6 rounded-xl shadow-lg border border-teal-100 hover:shadow-xl transition-all duration-300">
              <Briefcase className="text-teal-600 mx-auto mb-4" size={32} />
              <h3 className="text-2xl font-bold text-blue-900 mb-2">85%</h3>
              <p className="text-slate-600">Placement Rate</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 via-teal-50 to-cyan-50 p-6 rounded-xl shadow-lg border border-teal-100 hover:shadow-xl transition-all duration-300">
              <Building2 className="text-teal-600 mx-auto mb-4" size={32} />
              <h3 className="text-2xl font-bold text-blue-900 mb-2">20+</h3>
              <p className="text-slate-600">Partner Organizations</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 via-teal-50 to-cyan-50 p-6 rounded-xl shadow-lg border border-teal-100 hover:shadow-xl transition-all duration-300">
              <Trophy className="text-teal-600 mx-auto mb-4" size={32} />
              <h3 className="text-2xl font-bold text-blue-900 mb-2">4.5 LPA</h3>
              <p className="text-slate-600">Average Package</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 via-teal-50 to-cyan-50 p-6 rounded-xl shadow-lg border border-teal-100 hover:shadow-xl transition-all duration-300">
              <Users className="text-teal-600 mx-auto mb-4" size={32} />
              <h3 className="text-2xl font-bold text-blue-900 mb-2">100+</h3>
              <p className="text-slate-600">Alumni Network</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dunmark Advantage */}
      <section className="py-16 bg-gradient-to-r from-teal-900 via-blue-900 to-emerald-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-200 to-teal-100 bg-clip-text text-transparent">
            The Dunmark Advantage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-teal-800/50 to-blue-800/50 p-6 rounded-xl backdrop-blur-sm border border-teal-400/20">
              <GraduationCap className="text-cyan-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3 text-cyan-200">Stipend-Based Internships</h3>
              <p className="text-cyan-100">Outstanding second-year students receive paid internships with our partner clinics, gaining real-world experience while earning.</p>
            </div>
            <div className="bg-gradient-to-br from-teal-800/50 to-blue-800/50 p-6 rounded-xl backdrop-blur-sm border border-teal-400/20">
              <Heart className="text-cyan-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3 text-cyan-200">Direct Hiring Program</h3>
              <p className="text-cyan-100">Dunmark directly hires exceptional graduates with strong clinical knowledge and therapeutic skills for our expanding network.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recruiting Partners */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-900 to-teal-700 bg-clip-text mb-12 text-center">
            Our Recruiting Partners
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* <div className="bg-gradient-to-br from-white to-cyan-50 p-6 rounded-xl shadow-lg border border-cyan-100 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Leading Paediatric Clinics</h3>
              <ul className="space-y-3">
                <li className="flex items-center"><Building2 className="text-teal-600 mr-2" size={20} /><span className="text-slate-700">Apollo Children's Hospital</span></li>
                <li className="flex items-center"><Building2 className="text-teal-600 mr-2" size={20} /><span className="text-slate-700">Rainbow Children's Hospital</span></li>
                <li className="flex items-center"><Building2 className="text-teal-600 mr-2" size={20} /><span className="text-slate-700">Fortis Pediatric Wing</span></li>
              </ul>
            </div> */}
            
            <div className="bg-gradient-to-br from-white to-cyan-50 p-6 rounded-xl shadow-lg border border-cyan-100 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Autism Centers</h3>
              <ul className="space-y-3">
                <li className="flex items-center"><Building2 className="text-teal-600 mr-2" size={20} /><span className="text-slate-700">Action for Autism</span></li>
                <li className="flex items-center"><Building2 className="text-teal-600 mr-2" size={20} /><span className="text-slate-700">Autism Society of India</span></li>
                <li className="flex items-center"><Building2 className="text-teal-600 mr-2" size={20} /><span className="text-slate-700">Early Intervention Center</span></li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-white to-cyan-50 p-6 rounded-xl shadow-lg border border-cyan-100 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Government Child Development</h3>
              <ul className="space-y-3">
                <li className="flex items-center"><Building2 className="text-teal-600 mr-2" size={20} /><span className="text-slate-700">ICDS Programs</span></li>
                <li className="flex items-center"><Building2 className="text-teal-600 mr-2" size={20} /><span className="text-slate-700">District Early Intervention</span></li>
                <li className="flex items-center"><Building2 className="text-teal-600 mr-2" size={20} /><span className="text-slate-700">Rehabilitation Councils</span></li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-white to-cyan-50 p-6 rounded-xl shadow-lg border border-cyan-100 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Teletherapy Platforms</h3>
              <ul className="space-y-3">
                <li className="flex items-center"><Globe className="text-teal-600 mr-2" size={20} /><span className="text-slate-700">XceptionalLEARNING</span></li>
                <li className="flex items-center"><Globe className="text-teal-600 mr-2" size={20} /><span className="text-slate-700">Telepractice Solutions</span></li>
                <li className="flex items-center"><Globe className="text-teal-600 mr-2" size={20} /><span className="text-slate-700">Virtual Therapy Hub</span></li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-white to-cyan-50 p-6 rounded-xl shadow-lg border border-cyan-100 hover:shadow-xl transition-all duration-300 md:col-span-2">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">NGO Projects - Rural & Urban India</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-3">
                  <li className="flex items-center"><Heart className="text-teal-600 mr-2" size={20} /><span className="text-slate-700">Asha for Education</span></li>
                  <li className="flex items-center"><Heart className="text-teal-600 mr-2" size={20} /><span className="text-slate-700">Bal Udan Society</span></li>
                  <li className="flex items-center"><Heart className="text-teal-600 mr-2" size={20} /><span className="text-slate-700">Rural Health Mission</span></li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-center"><Heart className="text-teal-600 mr-2" size={20} /><span className="text-slate-700">Pratham Education Foundation</span></li>
                  <li className="flex items-center"><Heart className="text-teal-600 mr-2" size={20} /><span className="text-slate-700">Save the Children India</span></li>
                  <li className="flex items-center"><Heart className="text-teal-600 mr-2" size={20} /><span className="text-slate-700">Community Outreach Programs</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      {/* <section className="py-16 bg-gradient-to-br from-white to-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-900 to-teal-700 bg-clip-text mb-12 text-center">
            Alumni Success Stories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-xl shadow-lg border border-teal-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <img src="https://images.pexels.com/photos/5407237/pexels-photo-5407237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Priya Sharma" className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-teal-200" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-900">Philo Rabinson</h3>
                  <p className="text-slate-600">Batch of 2023</p>
                </div>
              </div>
              <p className="text-slate-700 mb-4">"The practical training prepared me perfectly for my role as a therapist. The internship program gave me confidence."</p>
              <div className="flex items-center text-teal-600"><Star size={16} className="mr-1" /><span>Pediatric Therapist</span></div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-xl shadow-lg border border-teal-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <img src="https://images.pexels.com/photos/5407237/pexels-photo-5407237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Rahul Mehta" className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-teal-200" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-900">Subhashini</h3>
                  <p className="text-slate-600">Batch of 2022</p>
                </div>
              </div>
              <p className="text-slate-700 mb-4">"The specialized training helped me establish my practice. Dunmark's network support was invaluable."</p>
              <div className="flex items-center text-teal-600"><Star size={16} className="mr-1" /><span>Private Practice Owner</span></div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-xl shadow-lg border border-teal-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <img src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Sarah Thomas" className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-teal-200" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-900">Priya</h3>
                  <p className="text-slate-600">Batch of 2023</p>
                </div>
              </div>
              <p className="text-slate-700 mb-4">"The teletherapy training opened new career paths. I now work with children across India remotely."</p>
              <div className="flex items-center text-teal-600"><Star size={16} className="mr-1" /><span>Teletherapy Specialist</span></div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Placement Process */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-900 to-teal-700 bg-clip-text mb-12 text-center">
            Our Placement Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: '1', title: 'Pre-Placement Training', desc: 'Resume building, interview preparation, and soft skills development' },
              { num: '2', title: 'Campus Interviews', desc: 'On-campus recruitment drives with leading healthcare organizations' },
              { num: '3', title: 'Technical Assessment', desc: 'Practical skills evaluation and domain knowledge testing' },
              { num: '4', title: 'Final Selection', desc: 'Offer letter distribution and onboarding support' }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-teal-50 p-6 rounded-xl shadow-lg border border-teal-100 text-center hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white font-bold text-xl">{item.num}</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Placements;