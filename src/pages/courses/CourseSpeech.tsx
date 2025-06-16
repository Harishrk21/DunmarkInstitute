import React from 'react';
import { Clock, Award, BookOpen, Briefcase, CheckCircle, Users, MessagesSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const CourseSpeech = () => {
  const courseDetails = [
    { icon: Clock, label: "Duration", value: "24 Months" },
    { icon: Award, label: "Qualification", value: "12th grade Graduates(Science)" },
    { icon: BookOpen, label: "Mode of Study", value: "Full-time / Part-time" },
    { icon: Users, label: "Class Size", value: "Maximum 25 Students" },
    { icon: Briefcase, label: "Internship", value: "Included (3 months)" }
  ];

  const skills = [
    "Knowledge of speech, language, and audiology fundamentals",
    "Ability to conduct screenings for articulation, fluency, and voice issues",
    "Therapy assistance in voice modulation, stammering, and developmental delays",
    "AAC device usage and sign language basics",
    "Parent and community awareness session facilitation"
  ];

  const careerOpportunities = [
    { title: "Multispecialty hospitals with rehab departments", desc: "Assist speech-language pathologists in assessing and treating patients with communication disorders." },
    { title: "Early intervention and neurodevelopmental clinics", desc: "Support speech therapy services for children with developmental delays and autism spectrum disorders." },
    { title: "Autism therapy centers", desc: "Assist in implementing communication intervention programs for children with autism spectrum disorders." },
    { title: "Special schools for hearing and speech-impaired children", desc: "Support speech therapy programs in educational settings specialized for children with communication disorders." },
    { title: "Teletherapy platforms and online speech support services", desc: "Assist in providing speech therapy services through telehealth platforms." }
  ];

  const specialRoles = [
    "Speech-Language Pathology Assistant",
    "Communication Development Coach", 
    "AAC Support Specialist",
    "Speech Therapy Program Coordinator",
    "Clinical Data & Progress Report Assistant"
  ];

  const curriculum = [
    {
      semester: "Semester 1",
      modules: [
        { title: "Foundations of Speech and Language Development", topics: ["Normal speech and language development", "Anatomical and physiological bases", "Phonetics and phonology", "Basic linguistics"] },
        { title: "Introduction to Communication Disorders", topics: ["Speech sound disorders", "Language disorders", "Fluency disorders", "Voice disorders"] },
        { title: "Clinical Processes and Documentation", topics: ["Role of SLPAs", "Ethical considerations", "Documentation", "Screening procedures"] }
      ]
    },
    {
      semester: "Semester 2", 
      modules: [
        { title: "Therapy Implementation Techniques", topics: ["Articulation therapy", "Language intervention", "Voice therapy", "Fluency enhancement"] },
        { title: "Augmentative and Alternative Communication", topics: ["AAC systems", "Low-tech and high-tech devices", "Implementation training", "Basic sign language"] },
        { title: "Special Populations", topics: ["Autism spectrum disorders", "Hearing impairment support", "Neurogenic disorders", "Intellectual disabilities"] },
        { title: "Clinical Practicum", topics: ["Supervised experience", "Treatment implementation", "Data collection", "Professional development"] }
      ]
    }
  ];

  const testimonials = [
    { name: "Nisha Patel", role: "SLPA at Children's Communication Clinic", initials: "NP", text: "The SLPA diploma program gave me the perfect foundation to start my career in speech therapy. The hands-on clinical experience was invaluable." },
    { name: "Vikram Tiwari", role: "AAC Specialist, Inclusive Communication Center", initials: "VT", text: "This program opened doors to a specialized career in augmentative communication. The curriculum's focus on both theoretical knowledge and practical skills prepared me well." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-teal-800 to-emerald-900">
      {/* Hero Banner */}
      <section className="pt-24 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-teal-500/30 to-blue-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl text-white">
            {/* <span className="text-cyan-300 font-medium text-lg">✨ Our Courses</span> */}
            <h1 className="text-5xl md:text-6xl font-bold mt-2 mb-6 bg-gradient-to-r from-cyan-200 to-teal-200 bg-clip-text text-transparent">
              Diploma in Speech & Language Pathology Assistant (SLPA)
            </h1>
            <p className="text-xl text-cyan-100 mb-8 max-w-3xl leading-relaxed">
              A comprehensive program designed to prepare skilled assistants for certified speech-language pathologists, addressing the growing need for communication disorder specialists.
            </p>
            <div className="flex flex-wrap gap-4">
  <Link
    to="/admission"
    className="bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105"
  >
    Apply Now 🚀
  </Link>

  {/* <a
    href="#curriculum"
    className="bg-transparent hover:bg-white/10 text-white border border-cyan-300 font-medium py-3 px-6 rounded-md transition duration-300 hover:border-cyan-200"
  >
    View Curriculum
  </a> */}
</div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-900 to-teal-700 bg-clip-text text-transparent mb-8">About the Course</h2>
              <div className="prose text-gray-700 space-y-6">
                <p className="leading-relaxed text-lg">
                  Designed to address the shortage of qualified speech professionals, this diploma prepares students to assist certified speech-language pathologists in managing communication disorders. It includes training in basic assessment techniques, therapy implementation for speech, language, and voice disorders, and augmentative & alternative communication (AAC) support.
                </p>
                <p className="leading-relaxed text-lg">
                  The program combines theoretical knowledge with practical skills development, enabling graduates to work effectively as part of a speech therapy team. Students will learn about various communication disorders across the lifespan and gain experience in implementing treatment protocols under supervision.
                </p>
              </div>
              
              <div className="mt-10">
                <h3 className="text-2xl font-semibold text-blue-900 mb-6">🎯 Key Skills You Will Gain</h3>
                <div className="grid gap-4">
                  {skills.map((skill, i) => (
                    <div key={i} className="flex items-start bg-gradient-to-r from-cyan-50 to-teal-50 p-4 rounded-lg border-l-4 border-cyan-500">
                      <CheckCircle size={20} className="text-cyan-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/3">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-xl border border-cyan-200 sticky top-24">
                <h3 className="text-2xl font-semibold text-blue-900 mb-6">📋 Course Details</h3>
                <div className="space-y-6">
                  {courseDetails.map(({ icon: Icon, label, value }, i) => (
                    <div key={i} className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-full flex items-center justify-center mr-4">
                        <Icon size={18} className="text-white" />
                      </div>
                      <div>
                        <div className="text-gray-600 text-sm">{label}</div>
                        <div className="font-semibold text-blue-900">{value}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 space-y-3">
                  <Link
                    to="/admission"
                    className="block w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-medium text-center py-3 px-6 rounded-md transition duration-300 shadow-md transform hover:scale-105"
                  >
                    Apply Now
                  </Link>
                  {/* <button className="w-full text-cyan-600 hover:bg-cyan-50 border border-cyan-300 font-medium py-3 px-6 rounded-full transition-all duration-300">
                    Download Brochure
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Scope */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-900 to-teal-700 bg-clip-text text-transparent mb-8">🚀 Career Scope</h2>
          <p className="text-gray-700 mb-12 max-w-4xl text-lg leading-relaxed">
            Speech and communication professionals are increasingly vital in various healthcare and educational settings. The demand for qualified personnel in this field continues to grow, creating excellent opportunities for graduates.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {careerOpportunities.map((career, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-cyan-100 hover:border-cyan-300">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-full flex items-center justify-center mb-4">
                  <MessagesSquare size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-3">{career.title}</h3>
                <p className="text-gray-600 leading-relaxed">{career.desc}</p>
              </div>
            ))}
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-blue-900 mb-6">💼 Special Roles You Can Pursue</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {specialRoles.map((role, i) => (
                <div key={i} className="bg-gradient-to-r from-cyan-100 to-teal-100 p-4 rounded-xl text-center border border-cyan-200 hover:shadow-md transition-all duration-300">
                  <span className="font-medium text-blue-800">{role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-900 to-teal-700 bg-clip-text text-transparent mb-12">📚 Curriculum Overview</h2>
          
          <div className="space-y-12">
            {curriculum.map((sem, i) => (
              <div key={i}>
                <h3 className="text-2xl font-semibold text-cyan-700 mb-6">{sem.semester}</h3>
                <div className="grid gap-6">
                  {sem.modules.map((module, j) => (
                    <div key={j} className="border border-cyan-200 rounded-2xl overflow-hidden shadow-lg">
                      <div className="bg-gradient-to-r from-cyan-500 to-teal-600 px-6 py-4">
                        <h4 className="font-semibold text-white">{module.title}</h4>
                      </div>
                      <div className="p-6 bg-gradient-to-br from-cyan-50 to-white">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {module.topics.map((topic, k) => (
                            <div key={k} className="flex items-center">
                              <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                              <span className="text-gray-700">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-16 bg-gradient-to-br from-cyan-50 to-teal-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-900 to-teal-700 bg-clip-text text-transparent mb-12">💬 What Our Alumni Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-xl border border-cyan-200">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic leading-relaxed">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-900 via-teal-800 to-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-teal-500/20 to-blue-600/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">🌟 Launch Your Career in Speech and Language Support</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto text-cyan-100 leading-relaxed">
            Join our upcoming batch and gain the skills needed to make a difference in the lives of individuals with communication disorders.
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
        </div>
      </section>
    </div>
  );
};

export default CourseSpeech;