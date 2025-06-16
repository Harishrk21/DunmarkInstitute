import React from 'react';
import { Clock, Award, BookOpen, Briefcase, CheckCircle, Users, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const CourseNeurodevelopmental = () => {
  const courseDetails = [
    { icon: Clock, label: "Duration", value: "24 Months" },
    { icon: Award, label: "Qualification", value: "12th Graduates(Bio-Science Stream)" },
    { icon: BookOpen, label: "Mode", value: "Full-time / Part-time" },
    { icon: Users, label: "Class Size", value: "Max 20 Students" },
    { icon: Briefcase, label: "Internship", value: "Clinical placement (4 months)" }
  ];

  const skills = [
    "Early intervention assessment and therapy planning",
    "Neurodevelopmental treatment techniques (NDT/Bobath)",
    "Sensory integration therapy methods",
    "Family-centered care and parent training",
    "Assistive technology and adaptive equipment usage"
  ];

  const careerPaths = [
    { title: "Pediatric Hospitals", desc: "Early intervention and rehabilitation for children with developmental delays" },
    { title: "Special Education Centers", desc: "Therapeutic support for children with learning and developmental challenges" },
    { title: "Rehabilitation Clinics", desc: "Specialized therapy for neurological conditions in pediatric populations" },
    { title: "Community Health", desc: "Outreach programs for developmental screening and intervention" },
    { title: "Private Practice", desc: "Independent therapy services for neurodevelopmental conditions" }
  ];

  const modules = [
    {
      semester: "Phase 1 (Months 1-6)",
      courses: [
        { title: "Neurodevelopmental Foundations", topics: ["Brain development", "Neuroplasticity", "Motor control", "Sensory systems"] },
        { title: "Assessment Methods", topics: ["Developmental screening", "Standardized tests", "Observation skills", "Report writing"] },
        { title: "Therapeutic Approaches", topics: ["NDT principles", "Sensory integration", "Motor learning", "Play therapy"] }
      ]
    },
    {
      semester: "Phase 2 (Months 7-12)",
      courses: [
        { title: "Clinical Applications", topics: ["Cerebral palsy", "Autism spectrum", "ADHD management", "Learning disabilities"] },
        { title: "Family Systems", topics: ["Parent counseling", "Sibling support", "Educational advocacy", "Transition planning"] },
        { title: "Supervised Practice", topics: ["Clinical rotations", "Case studies", "Professional skills", "Ethical practice"] }
      ]
    }
  ];

  const testimonials = [
    { name: "Priya Nair", role: "Pediatric Therapist", text: "This program equipped me with cutting-edge techniques to help children reach their full potential. The clinical exposure was invaluable." },
    { name: "Rahul Kumar", role: "Early Intervention Specialist", text: "The comprehensive curriculum and expert faculty transformed my understanding of neurodevelopmental therapy. Highly recommended!" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-teal-800 to-emerald-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-teal-500/30 animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl text-white">
            {/* <span className="text-cyan-300 font-medium text-lg">🦚 Our Courses</span> */}
            <h1 className="text-5xl md:text-6xl font-bold mt-2 mb-6 bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent">
              Diploma in Neurodevelopmental Rehabilitation
            </h1>
            <p className="text-xl text-cyan-100 mb-8 max-w-3xl leading-relaxed">
              Specialized training in evidence-based therapeutic interventions for children with neurodevelopmental conditions and developmental delays.
            </p>
             <Link
                to="/admission"
                className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-medium py-4 px-8 rounded-xl transition duration-300 shadow-2xl transform hover:scale-105 hover:shadow-cyan-500/25"
              >
                Apply Now
              </Link>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 bg-gradient-to-r from-slate-900/90 to-blue-900/90 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 text-white">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent mb-6">
                About the Course
              </h2>
              <p className="text-cyan-100 mb-6 leading-relaxed text-lg">
                This comprehensive program combines neuroscience, developmental psychology, and therapeutic techniques to prepare specialists in pediatric neurodevelopmental rehabilitation and early intervention services.
              </p>
              
              <h3 className="text-2xl font-semibold text-teal-300 mb-4">🌟 Key Skills You Will Gain</h3>
              <div className="space-y-3">
                {skills.map((skill, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle className="text-cyan-400 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-cyan-100">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-800/40 to-blue-900/40 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/20 shadow-2xl">
              <h3 className="text-2xl font-semibold text-cyan-300 mb-6">Course Details</h3>
              <div className="space-y-4">
                {courseDetails.map(({ icon: Icon, label, value }, i) => (
                  <div key={i} className="flex items-center text-white">
                    <Icon className="text-cyan-400 mr-3" size={20} />
                    <div>
                      <span className="block text-cyan-200 text-sm">{label}</span>
                      <span className="font-medium">{value}</span>
                    </div>
                  </div>
                ))}
              </div><br/>
            <Link
                to="/admission"
                className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-medium py-4 px-8 rounded-xl transition duration-300 shadow-2xl transform hover:scale-105 hover:shadow-cyan-500/25"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Career Scope */}
      <section className="py-16 bg-gradient-to-br from-emerald-900/90 to-teal-900/90">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent mb-8">
            Career Scope 🚀
          </h2>
          <p className="text-cyan-100 mb-12 max-w-4xl mx-auto text-center text-lg">
            Growing demand for neurodevelopmental specialists creates diverse opportunities in healthcare, education, and community service sectors.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {careerPaths.map((career, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-800/40 to-teal-800/40 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-300/40 transition-all duration-300 transform hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full flex items-center justify-center mb-4">
                  <Activity className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-cyan-300 mb-2">{career.title}</h3>
                <p className="text-cyan-100">{career.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-teal-300 mb-6">🎯 Specialized Roles</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {["NDT Therapist", "Sensory Specialist", "Early Interventionist", "Developmental Consultant", "Pediatric Coordinator"].map((role, i) => (
                <div key={i} className="bg-gradient-to-r from-cyan-500/20 to-teal-500/20 backdrop-blur-sm p-4 rounded-lg border border-cyan-400/30">
                  <span className="font-medium text-cyan-200">{role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 bg-gradient-to-r from-blue-900/90 to-slate-900/90">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent mb-12">
            Curriculum Overview 📚
          </h2>
          
          {modules.map((phase, phaseIndex) => (
            <div key={phaseIndex} className="mb-12">
              <h3 className="text-2xl font-semibold text-teal-300 mb-6">{phase.semester}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {phase.courses.map((course, i) => (
                  <div key={i} className="bg-gradient-to-br from-teal-800/30 to-blue-800/30 backdrop-blur-sm rounded-xl border border-cyan-400/20 overflow-hidden hover:border-cyan-300/40 transition-all duration-300">
                    <div className="bg-gradient-to-r from-cyan-500/30 to-teal-500/30 px-6 py-4 border-b border-cyan-400/20">
                      <h4 className="font-semibold text-cyan-300">{course.title}</h4>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-2">
                        {course.topics.map((topic, j) => (
                          <li key={j} className="text-cyan-100 flex items-center">
                            <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-br from-teal-900/90 to-emerald-900/90">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent mb-12">
            What Our Alumni Say 💬
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-800/40 to-teal-800/40 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20 shadow-2xl">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-teal-500 flex items-center justify-center text-white font-bold text-xl mr-4">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-300 text-lg">{testimonial.name}</h4>
                    <p className="text-cyan-200 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-cyan-100 italic leading-relaxed">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-teal-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-teal-500/30 animate-pulse"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">Become a Neurodevelopmental Specialist 🧠</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Join our next cohort and make a meaningful difference in children's lives through evidence-based therapeutic interventions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
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
        </div>
      </section>
    </div>
  );
};

export default CourseNeurodevelopmental;