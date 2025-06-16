import React from 'react';
import { Clock, Award, BookOpen, Briefcase, CheckCircle, Users, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';


const CourseBrainGym: React.FC = () => {
  return (
    <>
      {/* Hero Banner */}
      <section 
        className="pt-24 pb-16 bg-cover bg-center relative flex items-center overflow-hidden"
        style={{ 
          background: "linear-gradient(135deg, #0c4a6e 0%, #134e4a 25%, #064e3b 50%, #0f766e 75%, #0891b2 100%), url('https://plus.unsplash.com/premium_photo-1665990292585-6a39c5229bc8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGhlcmFweXxlbnwwfHwwfHx8MA%3D%3D')",
          minHeight: '500px' 
        }}
      >
        {/* Animated peacock feather pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-cyan-400 to-teal-600 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-emerald-400 to-blue-600 rounded-full blur-lg animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-full blur-2xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-4xl">
            {/* <span className="text-cyan-300 font-medium text-lg tracking-wide">Our Premium Courses</span> */}
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-200 via-teal-300 to-emerald-300 bg-clip-text text-transparent mt-2 mb-6 leading-tight">
              Diploma in Brain Gym & Neuro-Movement Training<br></br>
            </h1><br/>
            <p className="text-xl text-cyan-100 mb-8 max-w-3xl leading-relaxed">
              A specialized program equipping professionals with movement-based learning techniques to enhance cognitive function, focus, and physical coordination through the grace and precision of neuro-movement mastery.
            </p>
            <div className="flex flex-wrap gap-4">
  <Link
    to="/admission"
    className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-medium py-4 px-8 rounded-xl transition duration-300 shadow-2xl transform hover:scale-105 hover:shadow-cyan-500/25"
  >
    Apply Now
  </Link>
  {/* <a 
    href="#curriculum" 
    className="bg-gradient-to-r from-transparent to-transparent hover:from-cyan-900/30 hover:to-teal-900/30 text-cyan-200 border-2 border-cyan-400 font-medium py-4 px-8 rounded-xl transition duration-300 backdrop-blur-sm"
  >
    View Curriculum
  </a> */}
</div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-2/3">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-900 to-teal-800 bg-clip-text text-transparent mb-8">About the Course</h2>
              <div className="space-y-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  This diploma trains students in Brain Gym® movements and Neuro-motor activities aimed at improving concentration, coordination, memory, and emotional control in children and adults. It integrates knowledge of movement-based learning and sensory-motor development for educational and clinical contexts.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  The program explores the relationship between physical movement, cognitive development, and learning, providing students with a comprehensive toolkit of exercises and interventions that can be applied in various settings. Students will learn how specific movements can enhance brain function and help individuals overcome learning and developmental challenges.
                </p>
              </div>
              
              <div className="mt-10">
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-teal-800 to-cyan-700 bg-clip-text text-transparent mb-6">Key Skills You Will Master</h3>
                <div className="space-y-4">
                  {[
                    "Brain Gym® 26 basic and advanced movement techniques",
                    "Neuromotor exercises for sensory regulation and motor planning", 
                    "Designing classroom and clinic-based movement routines",
                    "Early childhood movement assessment and intervention",
                    "Use of props, tactile tools, and movement games"
                  ].map((skill, index) => (
                    <div key={index} className="flex items-start group">
                      <div className="w-6 h-6 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0 shadow-lg group-hover:shadow-teal-300/50 transition-all duration-300">
                        <CheckCircle size={16} className="text-white" />
                      </div>
                      <span className="text-gray-700 text-lg">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="md:w-1/3">
              <div className="bg-gradient-to-br from-blue-900 via-teal-800 to-emerald-900 rounded-2xl p-8 sticky top-24 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-teal-400/10 rounded-2xl"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold text-cyan-100 mb-6">Course Details</h3>
                  <div className="space-y-6">
                    {[
                      { icon: Clock, label: "Duration", value: "24 Months" },
                      { icon: Award, label: "Qualification", value: "Postgraduate Diploma" },
                      { icon: BookOpen, label: "Mode of Study", value: "Full-time / Part-time" },
                      { icon: Users, label: "Class Size", value: "Maximum 25 Students" },
                      { icon: Briefcase, label: "Internship", value: "Included (3 months)" }
                    ].map(({ icon: Icon, label, value }, index) => (
                      <div key={index} className="flex items-center group">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:shadow-cyan-400/50 transition-all duration-300">
                          <Icon size={20} className="text-blue-900" />
                        </div>
                        <div>
                          <span className="text-cyan-300 block text-sm">{label}</span>
                          <span className="font-medium text-white">{value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 space-y-3">
                    <Link
  to="/admission"
  className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-blue-900 font-bold py-4 px-10 rounded-xl transition duration-300 shadow-2xl transform hover:scale-105 hover:shadow-cyan-400/30"
>
  Apply Now
</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Scope */}
      <section className="py-16 bg-gradient-to-br from-blue-900 via-teal-900 to-emerald-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-cyan-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent mb-8">Career Scope</h2>
          <p className="text-cyan-100 text-lg mb-12 max-w-4xl leading-relaxed">
            Neuro-movement therapists are increasingly in demand across educational, clinical, and wellness settings. Graduates of this program can pursue diverse career opportunities utilizing movement-based learning approaches.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Special Schools and Learning Disability Units",
                description: "Implement movement-based programs to support students with learning disabilities, ADHD, and developmental coordination disorders."
              },
              {
                title: "Autism and ADHD Therapy Centers", 
                description: "Provide specialized neuro-movement therapy for children with attention, focus, and sensory processing challenges."
              },
              {
                title: "Pediatric Rehab Hospitals",
                description: "Work as part of multidisciplinary teams to support children's recovery and development through structured movement activities."
              },
              {
                title: "Play and Activity-Based Therapy Programs",
                description: "Develop and lead specialized programs that utilize movement to enhance cognitive development and learning."
              },
              {
                title: "Corporate wellness workshops for adults",
                description: "Provide movement-based stress reduction and cognitive enhancement programs for professional settings."
              }
            ].map((career, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/40 to-slate-700/40 backdrop-blur-sm rounded-2xl p-8 group hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 border border-cyan-400/20">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-cyan-400/50 transition-all duration-300 transform group-hover:scale-110">
                  <Brain size={28} className="text-blue-900" />
                </div>
                <h3 className="text-xl font-semibold text-cyan-200 mb-4">{career.title}</h3>
                <p className="text-cyan-100/80 leading-relaxed">{career.description}</p>
              </div>
            ))}
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-cyan-300 mb-8">Special Roles You Can Pursue</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                "Certified Brain Gym Trainer",
                "Learning Support Specialist", 
                "Neuro-Movement Coach",
                "Early Childhood Movement Therapist",
                "Special Needs Sports Activity Instructor"
              ].map((role, index) => (
                <div key={index} className="bg-gradient-to-br from-cyan-500/20 to-teal-500/20 backdrop-blur-sm p-6 rounded-xl text-center border border-cyan-400/30 hover:border-cyan-300/50 transition-all duration-300 group">
                  <span className="block font-medium text-cyan-200 group-hover:text-cyan-100 transition-colors duration-300">{role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="py-16 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-900 to-teal-800 bg-clip-text text-transparent mb-12 text-center">Curriculum Overview</h2>
          
          <div className="space-y-12">
            {/* Semester 1 */}
            <div>
              <h3 className="text-3xl font-semibold bg-gradient-to-r from-teal-700 to-cyan-600 bg-clip-text text-transparent mb-8">Semester 1</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Module 1: Fundamentals of Brain Gym® and Educational Kinesiology",
                    topics: [
                      "History and philosophy of Brain Gym® and Educational Kinesiology",
                      "The brain-body connection and neuroplasticity", 
                      "Introduction to the Brain Gym® 26 movements",
                      "PACE (Positive, Active, Clear, and Energetic) protocol"
                    ]
                  },
                  {
                    title: "Module 2: Neurodevelopmental Theory and Movement",
                    topics: [
                      "Developmental movement patterns and reflexes",
                      "Midline crossing and hemispheric integration",
                      "Vestibular system and balance",
                      "Visual-motor coordination and its impact on learning"
                    ]
                  },
                  {
                    title: "Module 3: Assessment and Observation Skills", 
                    topics: [
                      "Movement observation and analysis",
                      "Identifying physical indicators of learning challenges",
                      "Postural assessment and body awareness",
                      "Screening tools for neuromotor development"
                    ]
                  }
                ].map((module, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-teal-200/50 hover:shadow-2xl hover:shadow-teal-300/20 transition-all duration-300">
                    <div className="bg-gradient-to-r from-teal-600 to-cyan-600 px-8 py-4">
                      <h4 className="font-bold text-white text-lg">{module.title}</h4>
                    </div>
                    <div className="p-8">
                      <ul className="space-y-3">
                        {module.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                            <span className="text-gray-700 text-lg">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Semester 2 */}
            <div>
              <h3 className="text-3xl font-semibold bg-gradient-to-r from-cyan-700 to-emerald-600 bg-clip-text text-transparent mb-8">Semester 2</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Module 4: Advanced Movement Techniques",
                    topics: [
                      "Targeted movements for specific learning challenges",
                      "Rhythmic movement training",
                      "Primitive reflex integration exercises", 
                      "Sensory-motor integration activities"
                    ]
                  },
                  {
                    title: "Module 5: Applications for Special Populations",
                    topics: [
                      "Movement programs for ADHD and attention challenges",
                      "Autism spectrum disorders and sensory-motor needs",
                      "Dyslexia, dysgraphia, and learning disabilities",
                      "Developmental coordination disorder interventions"
                    ]
                  },
                  {
                    title: "Module 6: Program Design and Implementation",
                    topics: [
                      "Creating movement curricula for different settings",
                      "Classroom-based movement breaks and integration strategies",
                      "Individual intervention planning",
                      "Equipment and space considerations"
                    ]
                  },
                  {
                    title: "Module 7: Clinical Practicum",
                    topics: [
                      "Supervised practical experience in educational and clinical settings",
                      "Case studies and program implementation",
                      "Documentation and progress monitoring",
                      "Professional development and ethical practice"
                    ]
                  }
                ].map((module, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-cyan-200/50 hover:shadow-2xl hover:shadow-cyan-300/20 transition-all duration-300">
                    <div className="bg-gradient-to-r from-cyan-600 to-emerald-600 px-8 py-4">
                      <h4 className="font-bold text-white text-lg">{module.title}</h4>
                    </div>
                    <div className="p-8">
                      <ul className="space-y-3">
                        {module.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                            <span className="text-gray-700 text-lg">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-16 bg-gradient-to-br from-cyan-50 to-teal-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-900 to-teal-800 bg-clip-text text-transparent mb-12 text-center">What Our Alumni Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                name: "Rajesh Joshi",
                role: "Learning Support Coordinator, Inclusive Education Center",
                initials: "RJ",
                testimonial: "The Brain Gym diploma transformed my approach to supporting students with learning difficulties. I've seen remarkable improvements in attention, reading skills, and coordination among children who previously struggled in traditional learning environments."
              },
              {
                name: "Sunita Kaur", 
                role: "Founder, Movement Matters Therapy Center",
                initials: "SK",
                testimonial: "This program gave me the knowledge and confidence to establish my own therapy center focusing on neuro-movement approaches. The practical skills and theoretical foundation have been invaluable in helping children and adults overcome movement and learning challenges."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-teal-200/50 hover:shadow-cyan-300/30 transition-all duration-300 group">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-white font-bold text-xl mr-6 shadow-lg group-hover:shadow-teal-400/50 transition-all duration-300">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-blue-900">{testimonial.name}</h4>
                    <p className="text-teal-700 text-sm font-medium">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic text-lg leading-relaxed">
                  "{testimonial.testimonial}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-900 via-teal-800 to-emerald-900 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-400/10 to-teal-400/10"></div>
          <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent mb-8">
            Become a Certified Neuro-Movement Specialist
          </h2>
          <p className="text-xl text-cyan-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join our upcoming batch and learn how movement-based approaches can transform learning and development through the elegance and precision of neuro-movement mastery.
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
    </>
  );
};

export default CourseBrainGym;