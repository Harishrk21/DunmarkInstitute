import React from 'react';
import { Clock, Award, BookOpen, Briefcase, CheckCircle, Users, Activity, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const CourseAssistiveTech = () => {
  const courseDetails = [
    { icon: Clock, label: "Duration", value: "24 Months" },
    { icon: Award, label: "Qualification", value: "12th grade Graduates(Bio-Science Stream)" },
    { icon: BookOpen, label: "Mode", value: "Full-time / Part-time" },
    { icon: Users, label: "Class Size", value: "Max 20 Students" },
    { icon: Briefcase, label: "Internship", value: "Included (4 months)" }
  ];

  const skills = [
    "Assessment and prescription of assistive devices",
    "Adaptive technology integration and customization",
    "Client training and support for independence",
    "Environmental modification and accessibility planning",
    "Outcome measurement and progress tracking"
  ];

  const careerPaths = [
    { title: "Rehabilitation Centers", desc: "Device assessment and training for physical disabilities" },
    { title: "Special Education", desc: "Learning support technology for students with disabilities" },
    { title: "Healthcare Facilities", desc: "Post-injury adaptation and independence training" },
    { title: "Community Services", desc: "Home accessibility and daily living support" },
    { title: "Technology Companies", desc: "Product development and user experience consulting" }
  ];

  const modules = [
    {
      semester: "Semester 1",
      courses: [
        { title: "Foundations of Assistive Tech", topics: ["Disability models", "AT principles", "Legal frameworks", "Ethics"] },
        { title: "Assessment Methods", topics: ["Functional evaluation", "Needs analysis", "Device selection", "Matching process"] },
        { title: "Mobility & Positioning", topics: ["Wheelchairs", "Seating systems", "Transfers", "Positioning aids"] }
      ]
    },
    {
      semester: "Semester 2",
      courses: [
        { title: "Communication Technology", topics: ["AAC devices", "Speech software", "Eye-gaze systems", "Switch access"] },
        { title: "Computer Access", topics: ["Alternative keyboards", "Screen readers", "Voice recognition", "Mobile apps"] },
        { title: "Environmental Control", topics: ["Smart home tech", "Remote controls", "Sensor systems", "IoT integration"] },
        { title: "Clinical Practicum", topics: ["Client assessment", "Device trials", "Training delivery", "Outcome evaluation"] }
      ]
    }
  ];

  const testimonials = [
    { name: "Priya Nair", role: "AT Specialist", text: "This program equipped me with practical skills to make real differences in clients' lives. The hands-on training with latest technology was exceptional." },
    { name: "Rahul Kumar", role: "Rehabilitation Technologist", text: "From assessment to implementation, I learned comprehensive AT services. Now I help individuals achieve independence through technology." }
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
              Diploma in Assistive Technology & Adaptive Therapy
            </h1>
            <p className="text-xl text-cyan-100 mb-8 max-w-3xl leading-relaxed">
              Comprehensive training in assistive technology assessment, implementation, and support for individuals with disabilities to achieve maximum independence.
            </p>
            <div className="flex gap-4">
              <Link
                to="/admission"
                className="bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 text-white font-bold py-4 px-8 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Apply Now ✨
              </Link>
            </div>
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
                This program combines technology expertise with therapeutic knowledge to train professionals in selecting, configuring, and supporting assistive technology solutions that enhance quality of life for people with disabilities.
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
              </div>
              <div className="mt-8">
                <Link
                  to="/admission"
                  className="w-full block text-center bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-blue-900 font-bold py-4 px-10 rounded-xl transition duration-300 shadow-2xl transform hover:scale-105 hover:shadow-cyan-400/30"
                >
                  Apply Now
                </Link>
              </div>
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
            Growing demand for AT professionals across healthcare, education, and technology sectors creating diverse career opportunities.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {careerPaths.map((career, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-800/40 to-teal-800/40 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-300/40 transition-all duration-300 transform hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full flex items-center justify-center mb-4">
                  <Cpu className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-cyan-300 mb-2">{career.title}</h3>
                <p className="text-cyan-100">{career.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-teal-300 mb-6">🎯 Special Roles</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {["AT Consultant", "Device Trainer", "Accessibility Specialist", "Tech Coordinator", "Product Specialist"].map((role, i) => (
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
          
          {modules.map((semester, semIndex) => (
            <div key={semIndex} className="mb-12">
              <h3 className="text-2xl font-semibold text-teal-300 mb-6">{semester.semester}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {semester.courses.map((course, i) => (
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
      {/* <section className="py-16 bg-gradient-to-br from-teal-900/90 to-emerald-900/90">
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
      </section> */}

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-teal-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-teal-500/30 animate-pulse"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">Become an Assistive Technology Professional 🔧</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Applications are now open for our upcoming batch. Join the field that's transforming lives through innovative technology solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/admission"
              className="bg-white hover:bg-gray-100 text-teal-700 font-bold py-4 px-8 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Apply Now 🚀
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-4 px-8 rounded-lg transition-all duration-300"
            >
              Contact Admissions 📞
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseAssistiveTech;