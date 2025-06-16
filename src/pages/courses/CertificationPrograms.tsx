import React from 'react';
import { Clock, Award, BookOpen, Briefcase, CheckCircle, Users, Target, Star, Zap, Brain, Heart, Mic, Gamepad2, Laptop } from 'lucide-react';
import { Link } from 'react-router-dom';

const CertificationPrograms = () => {
  const FeatureCard = ({ icon: Icon, title, description, gradient = "from-cyan-50 to-teal-50" }) => (
    <div className={`bg-gradient-to-br ${gradient} rounded-lg shadow-lg p-6 border border-cyan-200 hover:shadow-xl transition-all duration-300 hover:scale-105 transform`}>
      <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full flex items-center justify-center mb-4">
        <Icon size={24} className="text-white" />
      </div>
      <h3 className="text-lg font-semibold text-emerald-900 mb-2">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );

  const CertificationCard = ({ program, duration, gradient, borderColor, iconColor }) => (
    <div className={`bg-gradient-to-br ${gradient} rounded-xl shadow-lg p-6 border-2 ${borderColor} hover:shadow-2xl transition-all duration-300 hover:scale-105 transform group`}>
      <div className={`w-16 h-16 bg-gradient-to-br ${iconColor} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        {program.icon}
      </div>
      <h3 className="text-xl font-bold text-emerald-900 mb-3">{program.name}</h3>
      <div className="flex items-center mb-4">
        <Clock size={18} className="text-teal-600 mr-2" />
        <span className="text-emerald-800 font-medium">{duration}</span>
      </div>
      <p className="text-slate-700 mb-4 leading-relaxed">{program.description}</p>
      
      <div className="mb-4">
        <h4 className="font-semibold text-teal-800 mb-2">Key Learning Areas:</h4>
        <ul className="space-y-1">
          {program.keyAreas.map((area, idx) => (
            <li key={idx} className="flex items-start text-sm">
              <CheckCircle size={16} className="text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-slate-600">{area}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold text-teal-800 mb-2">Career Opportunities:</h4>
        <div className="flex flex-wrap gap-2">
          {program.careers.map((career, idx) => (
            <span key={idx} className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded-full text-xs font-medium">
              {career}
            </span>
          ))}
        </div>
      </div>

      <a
        href="/admission"
        className="block w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-medium text-center py-3 px-6 rounded-lg transition duration-300 shadow-md transform hover:scale-105"
      >
        Apply Now
      </a>
    </div>
  );

  const sixMonthPrograms = [
    {
      name: "Sensory Integration Therapy",
      icon: <Brain size={28} className="text-white" />,
      description: "Master the art of sensory integration therapy to help children with sensory processing disorders develop better responses to sensory stimuli and improve their daily functioning.",
      keyAreas: [
        "Sensory processing theory and neurological foundations",
        "Assessment tools for sensory integration disorders",
        "Therapeutic activities and equipment usage",
        "Environmental modifications and adaptations",
        "Parent and caregiver training strategies"
      ],
      careers: ["Sensory Integration Therapist", "Occupational Therapy Assistant", "Special Education Support", "Early Intervention Specialist"]
    },
    {
      name: "Applied Behaviour Analysis (ABA)",
      icon: <Target size={28} className="text-white" />,
      description: "Develop expertise in evidence-based ABA techniques to create meaningful behavioral changes in individuals with autism spectrum disorders and other developmental conditions.",
      keyAreas: [
        "Principles of behavior analysis and learning theory",
        "Functional behavior assessment methodologies",
        "Behavior intervention plan development",
        "Data collection and progress monitoring",
        "Ethical considerations in ABA practice"
      ],
      careers: ["ABA Therapist", "Behavior Analyst", "Autism Support Specialist", "Behavioral Consultant"]
    },
    {
      name: "Mindfulness & Emotional Regulation",
      icon: <Heart size={28} className="text-white" />,
      description: "Learn to teach mindfulness techniques and emotional regulation strategies to help children and adolescents manage stress, anxiety, and emotional challenges effectively.",
      keyAreas: [
        "Mindfulness practices for children and teens",
        "Emotional regulation techniques and strategies",
        "Stress management and coping skills",
        "Trauma-informed mindfulness approaches",
        "Group facilitation and individual counseling skills"
      ],
      careers: ["Mindfulness Instructor", "Emotional Regulation Coach", "School Counselor", "Mental Health Support Worker"]
    },
    {
      name: "Brain Gym & Motor Coordination Therapy",
      icon: <Zap size={28} className="text-white" />,
      description: "Specialize in Brain Gym exercises and motor coordination therapy to enhance cognitive function, physical coordination, and learning readiness in children with developmental delays.",
      keyAreas: [
        "Brain Gym methodology and scientific principles",
        "Motor development assessment and planning",
        "Coordination exercises and movement therapy",
        "Integration of physical and cognitive activities",
        "Adaptation techniques for different ability levels"
      ],
      careers: ["Movement Therapist", "Physical Development Coordinator", "Learning Support Specialist", "Pediatric Fitness Instructor"]
    },
    {
      name: "Speech & Language Therapy",
      icon: <Mic size={28} className="text-white" />,
      description: "Gain comprehensive skills in speech and language therapy to support individuals with communication disorders, language delays, and speech impairments across all age groups.",
      keyAreas: [
        "Speech and language development milestones",
        "Assessment tools for communication disorders",
        "Articulation and phonological therapy techniques",
        "Language intervention strategies",
        "Augmentative and alternative communication (AAC)"
      ],
      careers: ["Speech Therapy Assistant", "Communication Aide", "Language Development Specialist", "AAC Consultant"]
    },
    {
      name: "Neurodevelopmental Rehabilitation",
      icon: <Brain size={28} className="text-white" />,
      description: "Develop specialized skills in neurodevelopmental rehabilitation to support individuals with neurological conditions, brain injuries, and developmental disorders in achieving optimal function.",
      keyAreas: [
        "Neuroplasticity and brain development principles",
        "Assessment of neurodevelopmental conditions",
        "Rehabilitation techniques and interventions",
        "Family-centered care approaches",
        "Interdisciplinary team collaboration"
      ],
      careers: ["Neurorehabilitation Specialist", "Developmental Therapist", "Brain Injury Support Worker", "Pediatric Rehabilitation Aide"]
    },
    {
      name: "Assistive Technology & Adaptive Therapy",
      icon: <Laptop size={28} className="text-white" />,
      description: "Master the use of assistive technology and adaptive therapy techniques to enhance independence and quality of life for individuals with disabilities and special needs.",
      keyAreas: [
        "Assistive technology assessment and selection",
        "Adaptive equipment and environmental modifications",
        "Technology training for users and families",
        "Accessibility standards and universal design",
        "Funding and resource acquisition strategies"
      ],
      careers: ["Assistive Technology Specialist", "Adaptive Equipment Consultant", "Accessibility Coordinator", "Independent Living Specialist"]
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: "Professional Recognition",
      description: "Gain industry-recognized certifications that enhance your professional credibility and career prospects in the special needs and therapy sectors."
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Learn from experienced practitioners and certified professionals who bring real-world expertise and current best practices to your learning experience."
    },
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "Access carefully designed curricula that combine theoretical knowledge with practical skills, ensuring you're ready for professional practice."
    },
    {
      icon: Briefcase,
      title: "Hands-On Experience",
      description: "Participate in practical workshops, case studies, and supervised practice sessions that prepare you for real-world therapeutic interventions."
    },
    {
      icon: Target,
      title: "Flexible Learning Options",
      description: "Choose from various program durations and formats to fit your schedule and learning preferences, from intensive workshops to comprehensive courses."
    },
    {
      icon: CheckCircle,
      title: "Continuing Education Credits",
      description: "Earn continuing education credits that contribute to your professional development and maintain your certification status in related fields."
    }
  ];

  return (
    <>
      {/* Hero Banner */}
      <section 
        className="pt-24 pb-16 relative flex items-center min-h-[500px]"
        style={{ 
          background: "linear-gradient(135deg, rgba(21, 94, 117, 0.95) 0%, rgba(6, 78, 59, 0.95) 30%, rgba(5, 46, 22, 0.95) 60%, rgba(30, 64, 175, 0.95) 100%), url('https://images.pexels.com/photos/8083597/pexels-photo-8083597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-teal-800/20 to-emerald-900/20"></div>

<div className="container mx-auto px-4 z-10 pt-20 md:pt-32">
  <div className="max-w-5xl">
    <div className="flex items-center mb-4">
      <Star className="text-cyan-300 mr-2" size={24} />
      <span className="text-cyan-300 font-medium text-lg">Professional Development</span>
    </div>
    <h1 className="text-5xl md:text-6xl font-bold text-white mt-2 mb-6 leading-tight">
      Certification Programs in 
      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300">
        Special Needs Therapy
      </span>
    </h1>
    <p className="text-xl text-cyan-100 mb-8 max-w-4xl leading-relaxed">
      Transform your career with our comprehensive certification programs designed to equip you with specialized skills in sensory integration, behavior analysis, speech therapy, and more. Join thousands of professionals making a difference in the lives of children and families.
    </p>
    <div className="flex flex-wrap gap-4">
      <a
        href="/admission"
        className="bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 text-white font-medium py-4 px-8 rounded-lg transition duration-300 shadow-lg transform hover:scale-105"
      >
        Start Your Journey
      </a>
      {/* <button className="bg-transparent hover:bg-white/10 text-white border-2 border-cyan-300 font-medium py-4 px-8 rounded-lg transition duration-300 backdrop-blur-sm">
        Download Program Guide
      </button> */}
    </div>
  </div>
</div>

      </section>

      {/* Program Benefits */}
      <section className="py-16 bg-gradient-to-br from-white via-cyan-50/50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-emerald-900 mb-4">Why Choose Our Certification Programs?</h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Our programs are designed by experts and recognized by industry professionals, ensuring you receive the highest quality education and training.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <FeatureCard 
                key={idx}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                gradient={idx % 2 === 0 ? "from-cyan-50 to-teal-50" : "from-teal-50 to-emerald-50"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6-Month Certification Programs */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-emerald-900 mb-4">6-Month Certification Programs</h2>
            <p className="text-xl text-slate-700 max-w-4xl mx-auto">
              Comprehensive programs that provide in-depth knowledge and extensive practical experience to prepare you for professional practice in specialized therapy fields.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sixMonthPrograms.map((program, idx) => (
              <CertificationCard 
                key={idx}
                program={program}
                duration="6 Months"
                gradient={idx % 3 === 0 ? "from-cyan-50 to-teal-100" : idx % 3 === 1 ? "from-teal-50 to-emerald-100" : "from-blue-50 to-cyan-100"}
                borderColor={idx % 3 === 0 ? "border-cyan-300" : idx % 3 === 1 ? "border-teal-300" : "border-blue-300"}
                iconColor={idx % 3 === 0 ? "from-cyan-500 to-teal-600" : idx % 3 === 1 ? "from-teal-500 to-emerald-600" : "from-blue-500 to-cyan-600"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* One-Week Programs */}
      <section className="py-16 bg-gradient-to-br from-white to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-emerald-900 mb-4">One-Week Intensive Programs</h2>
            <p className="text-xl text-slate-700 max-w-4xl mx-auto">
              Fast-track your learning with our intensive one-week programs, perfect for busy professionals seeking to add specialized skills to their practice.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sixMonthPrograms.map((program, idx) => (
              <div key={idx} className="bg-gradient-to-br from-white to-cyan-50 rounded-lg shadow-lg p-6 border border-teal-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full flex items-center justify-center mb-4">
                  {program.icon}
                </div>
                <h3 className="text-lg font-bold text-emerald-900 mb-2">{program.name}</h3>
                <div className="flex items-center mb-3">
                  <Clock size={16} className="text-teal-600 mr-2" />
                  <span className="text-emerald-800 font-medium text-sm">1 Week Intensive</span>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                  Intensive introduction to {program.name.toLowerCase()} fundamentals with hands-on practice and certification.
                </p>
                <a
                  href="/admission"
                  className="block w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-medium text-center py-2 px-4 rounded-lg transition duration-300 text-sm"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two-Day Programs */}
      <section className="py-16 bg-gradient-to-br from-cyan-50 to-teal-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-emerald-900 mb-4">Two-Day Workshop Programs</h2>
            <p className="text-xl text-slate-700 max-w-4xl mx-auto">
              Quick introduction workshops perfect for professionals looking to explore new areas or gain foundational knowledge in specialized therapy techniques.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sixMonthPrograms.map((program, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-lg p-5 border-2 border-cyan-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full flex items-center justify-center mb-3">
                  {React.cloneElement(program.icon, { size: 20 })}
                </div>
                <h3 className="text-base font-bold text-emerald-900 mb-2">{program.name}</h3>
                <div className="flex items-center mb-3">
                  <Clock size={14} className="text-teal-600 mr-2" />
                  <span className="text-emerald-800 font-medium text-xs">2 Days</span>
                </div>
                <p className="text-slate-600 text-xs mb-4">
                  Foundation workshop covering key concepts and basic techniques.
                </p>
                <a
                  href="/admission"
                  className="block w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-medium text-center py-2 px-3 rounded-md transition duration-300 text-xs"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-16 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-emerald-900 mb-12 text-center">Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                initials: "AS",
                name: "Anjali Sharma", 
                role: "Sensory Integration Therapist",
                program: "Sensory Integration Therapy Certification",
                testimonial: "The comprehensive curriculum and hands-on training prepared me perfectly for my role. I now confidently work with children with sensory processing challenges and have seen remarkable improvements in their daily functioning."
              },
              {
                initials: "RK",
                name: "Rajesh Kumar",
                role: "ABA Therapist", 
                program: "Applied Behaviour Analysis Certification",
                testimonial: "The ABA certification program was incredibly thorough. The evidence-based approaches I learned have transformed my practice, and I've been able to help numerous families see positive behavioral changes in their children."
              },
              {
                initials: "PM",
                name: "Priya Menon",
                role: "Speech Language Pathologist",
                program: "Speech & Language Therapy Certification", 
                testimonial: "This program enhanced my existing skills and introduced me to new therapeutic techniques. The practical components were especially valuable, and I immediately applied what I learned in my clinical practice."
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg border border-cyan-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-900">{testimonial.name}</h4>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                    <p className="text-xs text-teal-600 font-medium">{testimonial.program}</p>
                  </div>
                </div>
                <p className="text-slate-700 italic leading-relaxed">{testimonial.testimonial}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-900 via-teal-800 to-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-teal-500/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl mb-8 max-w-4xl mx-auto text-cyan-100 leading-relaxed">
            Join thousands of professionals who have advanced their careers through our specialized certification programs. Whether you're just starting or looking to add new skills, we have the perfect program for you.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
                                        to="/admission"
                                        className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-medium py-4 px-8 rounded-xl transition duration-300 shadow-2xl transform hover:scale-105 hover:shadow-cyan-500/25"
                                      >
                                        Apply Now
                                      </Link>
                                    <Link
                                        to="/contact"
                                        className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-medium py-4 px-8 rounded-xl transition duration-300 shadow-2xl transform hover:scale-105 hover:shadow-cyan-500/25"
                                      >
                                        Contact Admissions
                                      </Link>
          </div>
          <div className="mt-8 text-cyan-200">
            <p className="text-sm">🎓 Over 100+ professionals certified • 📞 Free career guidance available</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CertificationPrograms;