import React from 'react';
import { Clock, Award, BookOpen, Briefcase, CheckCircle, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const CourseBehavior = () => {
  const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-lg shadow-lg p-6 border border-cyan-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
      <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full flex items-center justify-center mb-4">
        <Icon size={24} className="text-white" />
      </div>
      <h3 className="text-lg font-semibold text-emerald-900 mb-2">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );

  const ModuleCard = ({ title, items }) => (
    <div className="border border-teal-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="bg-gradient-to-r from-teal-500 to-cyan-400 px-4 py-3">
        <h4 className="font-medium text-white">{title}</h4>
      </div>
      <div className="p-4 bg-white">
        <ul className="list-disc list-inside space-y-2 text-slate-700">
          {items.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
      </div>
    </div>
  );

  const RoleCard = ({ role }) => (
    <div className="bg-gradient-to-br from-cyan-100 to-teal-100 p-4 rounded-lg text-center border border-cyan-300 hover:from-teal-100 hover:to-cyan-100 transition-colors">
      <span className="block font-medium text-emerald-800">{role}</span>
    </div>
  );

  return (
    <>
      {/* Hero Banner */}
      <section 
        className="pt-24 pb-16 relative flex items-center min-h-[400px]"
        style={{ 
          background: "linear-gradient(135deg, rgba(21, 94, 117, 0.9) 0%, rgba(6, 78, 59, 0.9) 50%, rgba(5, 46, 22, 0.9) 100%), url('https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl">
            <span className="text-cyan-300 font-medium">Our Courses</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">Diploma in Applied Behavior Therapy (DABT)</h1>
            <p className="text-xl text-cyan-100 mb-8 max-w-3xl">
              A specialized program focused on understanding and addressing behavior in children with Autism, ADHD, and other developmental disorders.
            </p>
           <div className="flex flex-wrap gap-4">
  <Link
    to="/admission"
    className="bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 text-white font-medium py-3 px-6 rounded-md transition duration-300 shadow-lg"
  >
    Apply Now
  </Link>
  {/* <a
    href="#curriculum"
    className="bg-transparent hover:bg-white/10 text-white border border-cyan-300 font-medium py-3 px-6 rounded-md transition duration-300"
  >
    View Curriculum
  </a> */}
</div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-12 bg-gradient-to-br from-white to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-emerald-900 mb-6">About the Course</h2>
              <p className="text-slate-700 mb-6 leading-relaxed">
                This specialized program focuses on understanding behavior in children with Autism, ADHD, Intellectual Disabilities, and Emotional & Behavioral Disorders. It introduces Applied Behavior Analysis (ABA) techniques and equips students to design individualized behavior intervention plans (BIPs), manage tantrums, aggression, and classroom disruptions.
              </p>
              <p className="text-slate-700 mb-6 leading-relaxed">
                The curriculum is designed to provide a solid foundation in behavioral principles while emphasizing practical applications in clinical and educational settings. Students will learn to conduct functional behavior assessments, implement evidence-based interventions, and evaluate outcomes through data-driven approaches.
              </p>
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-teal-800 mb-4">Key Skills You Will Gain</h3>
                <ul className="space-y-3">
                  {[
                    "Behavior observation and functional behavior assessment (FBA)",
                    "Data collection, behavior analysis, and plan documentation",
                    "Reinforcement strategy design and intervention implementation", 
                    "Parent, teacher, and caregiver counseling techniques",
                    "Ethical handling of sensitive behavioral cases"
                  ].map((skill, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle size={20} className="text-teal-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className="bg-gradient-to-br from-teal-50 to-cyan-100 rounded-lg p-6 sticky top-24 border border-teal-200 shadow-lg">
                <h3 className="text-xl font-semibold text-emerald-900 mb-4">Course Details</h3>
                <div className="space-y-4">
                  {[
                    { icon: Clock, label: "Duration", value: "24 Months" },
                    { icon: Award, label: "Qualification", value: "12th grade Graduates(Science)" },
                    { icon: BookOpen, label: "Mode of Study", value: "Full-time / Part-time" },
                    { icon: Users, label: "Class Size", value: "Maximum 25 Students" },
                    { icon: Briefcase, label: "Internship", value: "Included (3 months)" }
                  ].map(({ icon: Icon, label, value }, idx) => (
                    <div key={idx} className="flex items-center">
                      <Icon size={20} className="text-teal-600 mr-3 flex-shrink-0" />
                      <div>
                        <span className="text-slate-600 block">{label}</span>
                        <span className="font-medium text-emerald-800">{value}</span>
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
                  {/* <button className="block w-full text-teal-700 hover:bg-teal-50 border border-teal-600 font-medium text-center py-3 px-6 rounded-md transition duration-300">
                    Download Brochure
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Scope */}
      <section className="py-12 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-emerald-900 mb-8">Career Scope</h2>
          <p className="text-slate-700 mb-8 max-w-4xl">
            The surge in child mental health awareness and autism services has opened up significant career opportunities for behavior therapy specialists. Graduates of this program are equipped to work in various settings where behavioral intervention is needed.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <FeatureCard 
              icon={Target}
              title="ABA Therapy Centers"
              description="Implement behavior intervention programs for children with autism spectrum disorders."
            />
            <FeatureCard 
              icon={Target}
              title="Inclusive and Special Needs Schools"
              description="Support students with behavioral challenges in educational settings and develop behavior management plans."
            />
            <FeatureCard 
              icon={Target}
              title="Child Development Units in Hospitals"
              description="Work as part of multidisciplinary teams to address behavioral aspects of developmental disorders."
            />
            <FeatureCard 
              icon={Target}
              title="Shadow teaching for inclusive classrooms"
              description="Provide one-on-one behavioral support for children with special needs in mainstream educational settings."
            />
            <FeatureCard 
              icon={Target}
              title="NGO programs for community-based intervention"
              description="Develop and implement behavior support programs for underserved communities."
            />
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-teal-800 mb-4">Special Roles You Can Pursue</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Behavior Therapist/ABA Therapist",
                "Shadow Educator for Special Schools", 
                "Parent Skills Trainer",
                "Behavior Case Manager",
                "Classroom Behavior Support Assistant"
              ].map((role, idx) => <RoleCard key={idx} role={role} />)}
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-emerald-900 mb-8">Curriculum Overview</h2>
          
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-teal-700 mb-4">Semester 1</h3>
            <div className="space-y-4">
              <ModuleCard 
                title="Module 1: Foundations of Applied Behavior Analysis"
                items={[
                  "History and philosophy of behaviorism",
                  "Core principles of ABA", 
                  "Understanding behavior and environment relationships",
                  "Ethics in behavior intervention"
                ]}
              />
              <ModuleCard 
                title="Module 2: Behavioral Assessment"
                items={[
                  "Functional Behavior Assessment (FBA) methodologies",
                  "Direct observation techniques",
                  "Behavior rating scales and questionnaires", 
                  "Interpreting assessment data"
                ]}
              />
              <ModuleCard 
                title="Module 3: Neurodevelopmental Disorders and Behavior"
                items={[
                  "Autism Spectrum Disorders: characteristics and behavioral challenges",
                  "ADHD and executive function impacts on behavior",
                  "Intellectual disability and behavior management",
                  "Emotional and behavioral disorders in childhood"
                ]}
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-teal-700 mb-4">Semester 2</h3>
            <div className="space-y-4">
              <ModuleCard 
                title="Module 4: Behavior Intervention Strategies"
                items={[
                  "Reinforcement techniques and schedules",
                  "Prompting and fading procedures",
                  "Differential reinforcement strategies",
                  "Antecedent interventions and environmental modifications"
                ]}
              />
              <ModuleCard 
                title="Module 5: Behavior Reduction Techniques"
                items={[
                  "Functional communication training",
                  "Managing tantrum behaviors and aggression",
                  "Crisis prevention and intervention", 
                  "Ethical considerations in behavior reduction"
                ]}
              />
              <ModuleCard 
                title="Module 6: Skill Acquisition Programs"
                items={[
                  "Discrete trial training",
                  "Natural environment teaching",
                  "Social skills training for children with ASD",
                  "Self-management and independence skills"
                ]}
              />
              <ModuleCard 
                title="Module 7: Clinical Internship"
                items={[
                  "Supervised practical experience in behavior therapy settings",
                  "Design and implementation of behavior intervention plans",
                  "Data collection and progress monitoring",
                  "Case studies and professional development"
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-12 bg-gradient-to-br from-cyan-50 to-teal-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-emerald-900 mb-8 text-center">What Our Alumni Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                initials: "PG",
                name: "Priya Gupta", 
                role: "Lead Behavior Therapist, Autism Support Center",
                testimonial: "The DABT program gave me both the theoretical foundation and practical tools I needed to work effectively with children with autism. The hands-on approach to learning and extensive clinical exposure prepared me for real-world challenges in behavior management."
              },
              {
                initials: "SM",
                name: "Sanjay Mehta",
                role: "Special Education Coordinator, Inclusive Learning School", 
                testimonial: "As an educator, the behavior therapy diploma transformed my ability to support students with challenging behaviors. I now confidently develop and implement behavior intervention plans that make a real difference in the classroom environment."
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-lg border border-cyan-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-900">{testimonial.name}</h4>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-slate-700 italic">{testimonial.testimonial}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-12 bg-gradient-to-r from-blue-900 via-teal-800 to-emerald-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Become a Certified Behavior Therapy Specialist</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-cyan-100">
            Join our upcoming batch and gain the skills needed to make a difference in the lives of children with behavioral challenges.
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

export default CourseBehavior;