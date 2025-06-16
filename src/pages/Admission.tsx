import React, { useState } from 'react';
import { BookOpen, Calendar, FileCheck, Award, User, Mail, Phone, GraduationCap, Send, CheckCircle, AlertCircle } from 'lucide-react';

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    program: '',
    motivation: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const programNames = {
    'dsit': 'Diploma in Sensory Integration Therapy (DSIT)',
    'dabt': 'Diploma in Applied Behavior Therapy (DABT)',
    'slpa': 'Diploma in Speech & Language Pathology Assistant (SLPA)',
    'mbi': 'Diploma in Mindfulness-Based Interventions (MBI)',
    'brain-gym': 'Diploma in Brain Gym & Neuro-Movement Training'
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const programFullName = programNames[formData.program] || formData.program;
    
    const emailBody = `
NEW ADMISSION APPLICATION
═══════════════════════════════════════

👤 APPLICANT INFORMATION
▪ Name: ${formData.firstName} ${formData.lastName}
▪ Email: ${formData.email}
▪ Phone: ${formData.phone}

🎓 PROGRAM DETAILS
▪ Selected Program: ${programFullName}

💭 MOTIVATION
${formData.motivation}

═══════════════════════════════════════
Application submitted on: ${new Date().toLocaleString()}
    `.trim();

    const formSubmissionData = new FormData();
    formSubmissionData.append('message', emailBody);
    formSubmissionData.append('_subject', `🎓 New Admission Application - ${formData.firstName} ${formData.lastName}`);
    formSubmissionData.append('_replyto', formData.email);

    try {
      const response = await fetch('https://formspree.io/f/mgvykldp', {
        method: 'POST',
        body: formSubmissionData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          program: '',
          motivation: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gradient-to-br from-slate-800 via-teal-900 to-emerald-900 rounded-2xl p-8 shadow-2xl border border-cyan-400/20">
      {submitStatus === 'success' && (
        <div className="mb-6 bg-gradient-to-r from-emerald-900/40 to-green-900/40 border border-emerald-400/30 rounded-lg p-4 flex items-center">
          <CheckCircle className="w-5 h-5 text-emerald-400 mr-3" />
          <span className="text-emerald-100">Application submitted successfully! We will contact you soon.</span>
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="mb-6 bg-gradient-to-r from-red-900/40 to-rose-900/40 border border-red-400/30 rounded-lg p-4 flex items-center">
          <AlertCircle className="w-5 h-5 text-red-400 mr-3" />
          <span className="text-red-100">Error submitting application. Please try again.</span>
        </div>
      )}

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-cyan-100 text-sm font-medium mb-2">
              <User className="inline w-4 h-4 mr-2" />
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-700/50 border border-teal-400/30 rounded-lg text-white placeholder-cyan-300/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
              placeholder="Enter your first name"
              required
            />
          </div>
          <div>
            <label className="block text-cyan-100 text-sm font-medium mb-2">
              <User className="inline w-4 h-4 mr-2" />
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-700/50 border border-teal-400/30 rounded-lg text-white placeholder-cyan-300/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
              placeholder="Enter your last name"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-cyan-100 text-sm font-medium mb-2">
              <Mail className="inline w-4 h-4 mr-2" />
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-700/50 border border-teal-400/30 rounded-lg text-white placeholder-cyan-300/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
              placeholder="your.email@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-cyan-100 text-sm font-medium mb-2">
              <Phone className="inline w-4 h-4 mr-2" />
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-700/50 border border-teal-400/30 rounded-lg text-white placeholder-cyan-300/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
              placeholder="+1 (555) 123-4567"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-cyan-100 text-sm font-medium mb-2">
            <GraduationCap className="inline w-4 h-4 mr-2" />
            Program of Interest
          </label>
          <select
            name="program"
            value={formData.program}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-700/50 border border-teal-400/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
            required
          >
            <option value="">Select a program</option>
            <option value="dsit">Diploma in Sensory Integration Therapy (DSIT)</option>
            <option value="dabt">Diploma in Applied Behavior Therapy (DABT)</option>
            <option value="slpa">Diploma in Speech & Language Pathology Assistant (SLPA)</option>
            <option value="mbi">Diploma in Mindfulness-Based Interventions (MBI)</option>
            <option value="brain-gym">Diploma in Brain Gym & Neuro-Movement Training</option>
          </select>
        </div>

        <div>
          <label className="block text-cyan-100 text-sm font-medium mb-2">
            Why are you interested in this program?
          </label>
          <textarea
            name="motivation"
            value={formData.motivation}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-3 bg-slate-700/50 border border-teal-400/30 rounded-lg text-white placeholder-cyan-300/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 resize-none"
            placeholder="Tell us about your motivation and career goals..."
            required
          />
        </div>

        <div
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 hover:from-cyan-600 hover:via-teal-600 hover:to-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center group cursor-pointer"
          style={{ opacity: isSubmitting ? 0.5 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Submitting...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
              Submit Application
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const Admission = () => {
  const eligibilityCriteria = [
    { program: 'Diploma in Sensory Integration Therapy (DSIT)', criteria: '12th-grade graduates (Bio Science) or equivalent. Background in psychology, special education, or allied health preferred.' },
    { program: 'Diploma in Applied Behavior Therapy (DABT)', criteria: '12th-grade graduates (Bio Science stream) or equivalent. Background in psychology, special education, or allied health preferred.' },
    { program: 'Diploma in Speech & Language Pathology Assistant (SLPA)', criteria: '12th-grade graduates (Bio Science stream) or equivalent. Background in psychology, special education, or allied health preferred.' },
    { program: 'Diploma in Mindfulness-Based Interventions (MBI)', criteria: '12th-grade graduates (Bio Science stream) or equivalent. Background in psychology, special education, or allied health preferred.' },
    { program: 'Diploma in Brain Gym & Neuro-Movement Training', criteria: '12th-grade graduates (Bio Science stream) or equivalent. Background in psychology, special education, or allied health preferred.' }
  ];
  
  const steps = [
    { id: 1, icon: <FileCheck className="w-8 h-8 text-cyan-400" />, title: 'Fill the online form', description: 'Complete our online application form with your personal and academic details' },
    { id: 2, icon: <FileCheck className="w-8 h-8 text-cyan-400" />, title: 'Upload documents', description: 'Submit required documents including academic transcripts and identification' },
    { id: 3, icon: <BookOpen className="w-8 h-8 text-cyan-400" />, title: 'Interview', description: 'Appear for interview (online/offline) with our admissions team' },
    { id: 4, icon: <Calendar className="w-8 h-8 text-cyan-400" />, title: 'Confirm admission', description: 'Complete enrollment process and begin your educational journey' }
  ];
  
  const importantDates = [
    { event: 'Application Opens', date: 'June 20, 2025' },
    { event: 'Early Application Deadline', date: 'August 30, 2025' },
    { event: 'Regular Application Deadline', date: 'August 20, 2025' },
    { event: 'Late Application Deadline', date: 'September 5, 2025' },
    { event: 'Orientation Week', date: 'August 20-27, 2025' },
    { event: 'Classes Begin', date: 'September 10, 2025' }
  ];

  return (
    <div className="pt-20 bg-slate-900">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-blue-900 via-teal-800 to-emerald-900 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/60 via-teal-800/40 to-emerald-900/60">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.2),transparent_50%)]"></div>
        </div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="mb-6">
            <div className="inline-block p-4 rounded-full bg-gradient-to-br from-cyan-400/20 to-teal-500/20 border border-cyan-400/30">
              <GraduationCap className="w-12 h-12 text-cyan-300" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-teal-200 to-emerald-300 bg-clip-text text-transparent">
            Apply for Admission
          </h1>
          <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
            Take the first step towards your career in specialized healthcare with our peacock-inspired educational excellence
          </p>
        </div>
      </div>
      
      {/* Admission Process */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text mb-6">
              How to Apply
            </h2>
            <p className="text-cyan-100 text-lg">
              Our streamlined application process makes it easy to start your educational journey with us.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={step.id} className="group relative">
                  <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl shadow-2xl border border-teal-400/20 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/20 hover:shadow-2xl">
                    <div className="bg-gradient-to-br from-cyan-500/20 to-teal-500/20 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto border border-cyan-400/30">
                      {step.icon}
                    </div>
                    <div className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                      {step.id}
                    </div>
                    <h3 className="text-xl font-bold text-cyan-100 mb-3">{step.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-400 transform -translate-y-1/2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Eligibility Criteria */}
      <section className="py-20 bg-gradient-to-br from-teal-900/20 to-emerald-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text mb-12 text-center">
              Elegance in Eligibility
            </h2>
            
            <div className="flex flex-col lg:flex-row gap-12 mb-16">
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-cyan-400/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-teal-500/20"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="Diverse students studying together" 
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl shadow-2xl border border-teal-400/20 h-fit">
                  <h3 className="text-2xl font-bold text-cyan-100 mb-6 flex items-center">
                    <div className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-teal-500 rounded-full mr-4"></div>
                    General Requirements
                  </h3>
                  <ul className="space-y-4">
                    {['12th-grade graduates (Bio Science stream) or equivalent', 'Candidates with background in psychology, special education, or allied health preferred', 'Passion for helping others and interest in healthcare professions'].map((req, idx) => (
                      <li key={idx} className="flex items-start group">
                        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-cyan-400 to-teal-500 flex-shrink-0 mr-4 mt-1 flex items-center justify-center">
                          <div className="h-2 w-2 rounded-full bg-white"></div>
                        </div>
                        <span className="text-slate-200 group-hover:text-cyan-100 transition-colors duration-300">
                          {req}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl shadow-2xl overflow-hidden border border-teal-400/20">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-blue-900 via-teal-800 to-emerald-900">
                      <th className="py-4 px-6 text-left text-cyan-100 font-bold text-lg">Program</th>
                      <th className="py-4 px-6 text-left text-cyan-100 font-bold text-lg">Minimum Qualifications</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-teal-400/20">
                    {eligibilityCriteria.map((item, index) => (
                      <tr key={index} className={`hover:bg-gradient-to-r hover:from-cyan-900/20 hover:to-teal-900/20 transition-all duration-300 ${
                        index % 2 === 0 ? 'bg-slate-800/50' : 'bg-slate-700/50'
                      }`}>
                        <td className="py-4 px-6 text-cyan-200 font-medium">{item.program}</td>
                        <td className="py-4 px-6 text-slate-300">{item.criteria}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Scholarships Section */}
      <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-cyan-400/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-teal-500/20"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="Student receiving scholarship" 
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text mb-8">
                  Scholarships & Financial Aid
                </h2>
                <div className="bg-gradient-to-br from-teal-900/40 to-emerald-900/40 rounded-2xl p-8 border border-teal-400/20">
                  {[
                    { title: 'Need-Based Scholarships', desc: 'Available for students demonstrating financial need. Requires submission of financial documents.' },
                    { title: 'Merit-Based Scholarships', desc: 'Awarded to outstanding applicants based on academic performance and interview results.' }
                  ].map((scholarship, idx) => (
                    <div key={idx} className={`flex items-start group ${idx > 0 ? 'mt-6' : ''}`}>
                      <div className="bg-gradient-to-br from-cyan-500/20 to-teal-500/20 p-3 rounded-xl mr-6 border border-cyan-400/30">
                        <Award className="w-8 h-8 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-cyan-100 mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                          {scholarship.title}
                        </h3>
                        <p className="text-slate-300 leading-relaxed">
                          {scholarship.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 bg-gradient-to-r from-yellow-900/40 to-amber-900/40 border-l-4 border-yellow-500 p-6 rounded-r-2xl">
                  <p className="text-amber-100 leading-relaxed">
                    Early applicants receive priority consideration for scholarships. Contact our financial aid office for more information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Important Dates */}
      <section className="py-20 bg-gradient-to-br from-teal-900/20 to-emerald-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text mb-12 text-center">
              Important Dates
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {importantDates.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6 flex justify-between items-center shadow-2xl border border-teal-400/20 group hover:scale-105 transition-all duration-300 hover:shadow-cyan-500/20">
                  <span className="font-bold text-cyan-100 text-lg group-hover:text-cyan-300 transition-colors duration-300">
                    {item.event}
                  </span>
                  <span className="bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 rounded-full text-white text-sm font-bold shadow-lg">
                    {item.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Application Form */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text mb-6">
                Online Application
              </h2>
              <p className="text-cyan-100 text-lg max-w-2xl mx-auto">
                Ready to begin your journey? Complete our online application form to start the admission process with peacock-like grace and elegance.
              </p>
            </div>
            <AdmissionForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admission;