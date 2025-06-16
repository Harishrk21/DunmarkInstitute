import React from 'react';
import { Clock, Award, BookOpen, Briefcase, CheckCircle, Users, Brain } from 'lucide-react';
import { Link } from 'react-router-dom'
const CourseSensory = () => {
  const skills = [
    "Neurophysiological understanding of sensory systems",
    "Proficiency in using standard SI assessment tools (SIPT, Sensory Profiles)",
    "Practical competence in therapeutic play and equipment-based sensory modulation",
    "Designing sensory diets for home, school, and clinic use",
    "Handling sensory-related behavioral issues and meltdowns"
  ];

  const courseDetails = [
    { icon: Clock, label: "Duration", value: "24 Months" },
    { icon: Award, label: "Qualification", value: "12th grade Graduates(Science)" },
    { icon: BookOpen, label: "Mode of Study", value: "Full-time / Part-time" },
    { icon: Users, label: "Class Size", value: "Maximum 25 Students" },
    { icon: Briefcase, label: "Internship", value: "Included (3 months)" }
  ];

  const careerOpportunities = [
    { title: "Pediatric therapy and rehabilitation centers", desc: "Work alongside multidisciplinary teams to provide comprehensive care for children with developmental challenges." },
    { title: "Early intervention units in hospitals", desc: "Provide sensory assessments and interventions for infants and young children with developmental concerns." },
    { title: "Schools offering inclusive education", desc: "Support students with sensory needs in mainstream and special education environments." },
    { title: "Autism and neurodevelopmental therapy clinics", desc: "Specialize in working with individuals on the autism spectrum who experience sensory processing challenges." },
    { title: "NGO-led community intervention projects", desc: "Bring sensory integration expertise to underserved communities through outreach programs." },
    { title: "Private practice as a sensory therapy consultant", desc: "Establish your own practice offering specialized sensory integration assessment and intervention services." }
  ];

  const specialRoles = [
    "Sensory Integration Therapist", "Sensory Lab Coordinator", "Sensory Diet Planner for schools", 
    "Parent Training Specialist", "Early Intervention Program Coordinator"
  ];

  const semester1Modules = [
    {
      title: "Foundations of Sensory Integration Theory",
      topics: ["Historical development of sensory integration theory", "Neuroanatomy and neurophysiology of sensory systems", "Sensory processing patterns and their impact on function", "Current research and evidence base"]
    },
    {
      title: "Assessment in Sensory Integration", 
      topics: ["Standardized assessment tools (SIPT, Sensory Profile, SPM)", "Clinical observation and interviewing techniques", "Interpretation of assessment results", "Report writing and documentation"]
    },
    {
      title: "Sensory Systems and Their Dysfunction",
      topics: ["Tactile, proprioceptive, and vestibular systems", "Visual, auditory, gustatory, and olfactory systems", "Modulation disorders and discrimination disorders", "Praxis and motor planning challenges"]
    }
  ];

  const semester2Modules = [
    {
      title: "Intervention Strategies",
      topics: ["Equipment-based sensory interventions", "Design and implementation of sensory diets", "Therapeutic activities for different sensory systems", "Play-based intervention approaches"]
    },
    {
      title: "Clinical Applications",
      topics: ["SI for Autism Spectrum Disorders", "SI for ADHD and learning disabilities", "SI for developmental coordination disorder", "SI for behavioral and emotional regulation"]
    },
    {
      title: "Professional Practice",
      topics: ["Ethical considerations in sensory integration practice", "Collaboration with families and other professionals", "Environmental modifications for home and school", "Parent and teacher education"]
    },
    {
      title: "Clinical Internship",
      topics: ["Supervised practical experience in clinical settings", "Case management and documentation", "Professional development and reflective practice", "Final case study and presentation"]
    }
  ];

  const testimonials = [
    { name: "Anjali Singh", role: "Senior Therapist, Mumbai Children's Hospital", initials: "AS", quote: "The DSIT program transformed my approach to pediatric therapy. The practical skills I gained allowed me to make a significant difference in the lives of children with sensory processing challenges. The faculty expertise and hands-on training were exceptional." },
    { name: "Rahul Kumar", role: "Founder, Sensory Solutions Clinic, Delhi", initials: "RK", quote: "After completing the Sensory Integration Therapy diploma, I was able to establish my own specialized clinic. The comprehensive curriculum and clinical internship prepared me for real-world challenges and gave me the confidence to work independently as a specialist." }
  ];

  return (
    <>
      {/* Hero Banner with Peacock Gradient */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-900 via-teal-800 to-emerald-900 relative flex items-center min-h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-teal-500/30 to-blue-600/20 animate-pulse"></div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl">
            <span className="text-cyan-300 font-medium text-lg">Our Courses</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6 bg-gradient-to-r from-cyan-200 to-teal-200 bg-clip-text text-transparent">
              Diploma in Sensory Integration Therapy (DSIT)
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl">
              An intensive diploma program focused on equipping healthcare professionals with specialized skills to assess and manage sensory processing disorders.
            </p>
            <div className="flex flex-wrap gap-4">
  <Link
    to="/admission"
    className="bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 text-white font-medium py-3 px-6 rounded-md transition duration-300 shadow-lg transform hover:scale-105"
  >
    Apply Now
  </Link>
  <a
    href="#curriculum"
    className="bg-transparent hover:bg-white/10 text-white border border-cyan-300 font-medium py-3 px-6 rounded-md transition duration-300 hover:border-cyan-200"
  >
    View Curriculum
  </a>
</div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-12 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-800 to-blue-900 bg-clip-text text-transparent mb-6">About the Course</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                This comprehensive program equips students with the theoretical knowledge and clinical skills to assess and manage sensory integration challenges in children and adults. Based on the principles of A. Jean Ayres, this diploma prepares graduates to identify sensory processing issues affecting learning, behavior, emotional regulation, and motor performance.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The curriculum covers neurophysiological foundations, assessment techniques, therapeutic interventions, and clinical decision-making. Students will learn to design and implement effective sensory integration treatment plans for diverse populations, including individuals with autism spectrum disorders, ADHD, developmental delays, and learning disabilities.
              </p>
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-teal-800 mb-4">Key Skills You Will Gain</h3>
                <ul className="space-y-3">
                  {skills.map((skill, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle size={20} className="text-cyan-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200 rounded-lg p-6 sticky top-24 shadow-lg">
                <h3 className="text-xl font-semibold text-teal-800 mb-4">Course Details</h3>
                <div className="space-y-4">
                  {courseDetails.map(({ icon: Icon, label, value }, index) => (
                    <div key={index} className="flex items-center">
                      <Icon size={20} className="text-cyan-600 mr-3 flex-shrink-0" />
                      <div>
                        <span className="text-gray-700 block">{label}</span>
                        <span className="font-medium text-teal-800">{value}</span>
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
                  {/* <a href="#download-brochure" className="block w-full text-teal-600 hover:bg-teal-50 border border-teal-600 font-medium text-center py-3 px-6 rounded-md transition duration-300">
                    Download Brochure
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Scope */}
      <section className="py-12 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-800 to-teal-800 bg-clip-text text-transparent mb-8">Career Scope</h2>
          <p className="text-gray-700 mb-8 max-w-4xl">
            Graduates of this program are in growing demand due to the increasing incidence of Autism Spectrum Disorders, ADHD, sensory processing issues, and developmental delays. The specialized skills gained through this program open doors to numerous professional opportunities.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {careerOpportunities.map((career, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-teal-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-full flex items-center justify-center mb-4">
                  <Brain size={24} className="text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-teal-800 mb-2">{career.title}</h3>
                <p className="text-gray-600">{career.desc}</p>
              </div>
            ))}
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-emerald-800 mb-4">Special Roles You Can Pursue</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {specialRoles.map((role, index) => (
                <div key={index} className="bg-gradient-to-br from-teal-100 to-cyan-100 p-4 rounded-lg text-center border border-teal-200 hover:shadow-md transition-all duration-300">
                  <span className="block font-medium text-teal-700">{role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="py-12 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-800 to-teal-800 bg-clip-text text-transparent mb-8">Curriculum Overview</h2>
          
          {[
            { title: "Semester 1", modules: semester1Modules },
            { title: "Semester 2", modules: semester2Modules }
          ].map((semester, semIndex) => (
            <div key={semIndex} className={semIndex === 0 ? "mb-10" : ""}>
              <h3 className="text-xl font-semibold text-teal-700 mb-4">{semester.title}</h3>
              <div className="space-y-4">
                {semester.modules.map((module, modIndex) => (
                  <div key={modIndex} className="border border-teal-200 rounded-lg overflow-hidden shadow-sm bg-white/80 backdrop-blur-sm">
                    <div className="bg-gradient-to-r from-teal-100 to-cyan-100 px-4 py-3 border-b border-teal-200">
                      <h4 className="font-medium text-teal-800">Module {semIndex === 0 ? modIndex + 1 : modIndex + 4}: {module.title}</h4>
                    </div>
                    <div className="p-4">
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        {module.topics.map((topic, topicIndex) => (
                          <li key={topicIndex}>{topic}</li>
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
      {/* <section className="py-12 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-800 to-blue-800 bg-clip-text text-transparent mb-8 text-center">What Our Alumni Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-cyan-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-200 to-teal-200 flex items-center justify-center text-teal-700 font-bold text-lg mr-4">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-semibold text-teal-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-12 bg-gradient-to-br from-blue-900 via-teal-800 to-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-teal-500/20 to-blue-600/10 animate-pulse"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-200 to-teal-200 bg-clip-text text-transparent">Ready to Become a Sensory Integration Specialist?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90">
            Applications are now open for our upcoming batch. Limited seats are available.
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
    </>
  );
};

export default CourseSensory;