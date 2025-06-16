import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Users, Brain, Lightbulb, Activity, Award, Target, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom'

interface ProgramProps {
  title: string;
  subtitle: string;
  about: string;
  skills: string[];
  careers: string[];
  icon: React.ElementType;
  gradient: string;
}

const ProgramCard: React.FC<ProgramProps> = ({ 
  title, subtitle, about, skills, careers, icon: Icon, gradient 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      {/* Gradient Background */}
      <div className={`absolute inset-0 ${gradient} opacity-90`}></div>
      
      {/* Shimmer Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
      
      <div className="relative p-8 text-white">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Icon size={32} className="text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 leading-tight">{title}</h3>
              <p className="text-cyan-200 font-medium">{subtitle}</p>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="mb-6">
          <p className="text-white/90 leading-relaxed">{about}</p>
        </div>

        {/* Expandable Content */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 hover:bg-white/20 transition-all duration-300"
        >
          <span className="font-semibold">View Skills & Career Opportunities</span>
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>

        {/* Expanded Content */}
        <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-96 mt-6' : 'max-h-0'}`}>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Skills Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Target size={20} className="mr-2 text-cyan-300" />
                <h4 className="text-lg font-semibold">Skills You Will Gain</h4>
              </div>
              <ul className="space-y-2">
                {skills.map((skill, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-white/90 text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Career Opportunities */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Briefcase size={20} className="mr-2 text-emerald-300" />
                <h4 className="text-lg font-semibold">Career Opportunities</h4>
              </div>
              <ul className="space-y-2">
                {careers.map((career, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-white/90 text-sm">{career}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Departments: React.FC = () => {
  const programs: ProgramProps[] = [
    {
      title: "Diploma in Sensory Integration Therapy",
      subtitle: "DSIT",
      about: "Based on Dr. A. Jean Ayres' theories, this course offers strong foundations in neurophysiology, sensory assessment, and therapeutic intervention.",
      skills: [
        "SI tools usage (e.g., SIPT, Sensory Profiles)",
        "Designing sensory diets",
        "Equipment-based therapy techniques",
        "Behaviour management in sensory disorders"
      ],
      careers: [
        "Paediatric Therapy Centers",
        "Autism Clinics",
        "Early Intervention Programs",
        "Special Schools",
        "Independent Sensory Therapy Practice"
      ],
      icon: Brain,
      gradient: "bg-gradient-to-br from-blue-900 via-teal-800 to-cyan-700"
    },
    {
      title: "Diploma in Applied Behaviour Therapy",
      subtitle: "DABT",
      about: "A behavioural science program focusing on Autism, ADHD, and Emotional Behavioural Disorders, rooted in ABA principles.",
      skills: [
        "Behaviour analysis & FBA",
        "Designing BIPs",
        "Classroom behaviour management",
        "Parent and teacher training"
      ],
      careers: [
        "ABA Clinics",
        "Inclusive Schools",
        "Child Development Units",
        "NGOs",
        "Behavioural Support Centers"
      ],
      icon: Users,
      gradient: "bg-gradient-to-br from-teal-900 via-emerald-800 to-cyan-700"
    },
    {
      title: "Diploma in Speech & Language Pathology Assistant",
      subtitle: "SLPA",
      about: "Supports the work of certified speech therapists through hands-on training in therapy planning and AAC tools.",
      skills: [
        "Speech/language screening techniques",
        "Voice modulation and fluency support",
        "AAC implementation",
        "Basic sign language"
      ],
      careers: [
        "Speech Therapy Clinics",
        "Neurodevelopmental Centers",
        "Special Schools",
        "Online Tele practice Services"
      ],
      icon: BookOpen,
      gradient: "bg-gradient-to-br from-emerald-900 via-teal-800 to-blue-700"
    },
    {
      title: "Diploma in Mindfulness-Based Interventions",
      subtitle: "MBI",
      about: "Evidence-based practices including MBSR and MBCT are taught for emotional and cognitive well-being in educational and therapeutic settings.",
      skills: [
        "Mindfulness session planning",
        "Meditation, visualization, breathing guidance",
        "Emotional regulation tools",
        "Stress reduction strategies"
      ],
      careers: [
        "School Counselling",
        "Mental Health NGOs",
        "Yoga & Wellness Centers",
        "Corporate Wellness Programs"
      ],
      icon: Lightbulb,
      gradient: "bg-gradient-to-br from-cyan-900 via-blue-800 to-teal-700"
    },
    {
      title: "Diploma in Brain Gym & Neuro-Movement Training",
      subtitle: "Brain Gym®",
      about: "Combines Brain Gym® and Neuromotor strategies for improved learning, behaviour, and motor coordination.",
      skills: [
        "Brain Gym® techniques",
        "Movement routines for classrooms",
        "Sensory-motor integration",
        "Play-based neuro-therapy"
      ],
      careers: [
        "Special Education Units",
        "Paediatric Rehab Clinics",
        "Learning Disability Support",
        "Adult Workplace Wellness Programs"
      ],
      icon: Activity,
      gradient: "bg-gradient-to-br from-blue-900 via-cyan-800 to-emerald-700"
    },
    {
  title: "Diploma in Neurodevelopmental Rehabilitation",
  subtitle: "Neuro Rehab",
  about: "Focuses on assessment and intervention techniques to support individuals with neurodevelopmental disorders through evidence-based therapies.",
  skills: [
    "Neurodevelopmental assessment",
    "Early intervention strategies",
    "Therapeutic handling techniques",
    "Multisensory stimulation methods"
  ],
  careers: [
    "Neuro Rehab Centers",
    "Early Intervention Clinics",
    "Special Schools",
    "Occupational Therapy Practices"
  ],
  icon: Activity,
  gradient: "bg-gradient-to-br from-blue-900 via-cyan-800 to-emerald-700"
},
{
  title: "Diploma in Assistive Technology & Adaptive Therapy",
  subtitle: "Tech & Therapy",
  about: "Equips professionals with skills to use technology and adaptive tools to enhance functional abilities and independence for individuals with disabilities.",
  skills: [
    "Assistive device selection & training",
    "Adaptive therapy techniques",
    "Communication aids & AAC tools",
    "Tech-based intervention planning"
  ],
  careers: [
    "Assistive Tech Labs",
    "Rehab Centers",
    "Inclusive Classrooms",
    "Speech & Occupational Therapy Clinics"
  ],
  icon: Activity,
  gradient: "bg-gradient-to-br from-blue-900 via-cyan-800 to-emerald-700"
}

  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900">
      {/* Hero Section with Peacock Feather Pattern */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-teal-800/80 to-emerald-900/80"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-cyan-400/30 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-radial from-teal-400/30 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-radial from-emerald-400/30 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative container mx-auto px-6 py-24 pt-32">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full mb-8 shadow-2xl">
              <Award size={40} className="text-white" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent">
                Specialized Diploma
              </span>
              <br />
              <span className="text-white">Programs</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-cyan-200/90 max-w-4xl mx-auto leading-relaxed">
              Transform your career with our comprehensive specialized therapy programs, 
              designed to create experts in cutting-edge therapeutic interventions
            </p>
            
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <span className="text-cyan-300 font-semibold">7 Specialized Programs</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <span className="text-teal-300 font-semibold">Expert Faculty</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <span className="text-emerald-300 font-semibold">Industry-Ready Skills</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Grid */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid gap-8 lg:gap-12">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-teal-800/90 to-emerald-900/90"></div>
        <div className="relative container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-cyan-200 mb-8 max-w-2xl mx-auto">
            Join our specialized programs and become a certified expert in therapeutic interventions
          </p>
          <Link
              to="/admission"
              className="bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 text-white font-medium py-3 px-6 rounded-md transition duration-300 shadow-lg transform hover:scale-105"
            >
              Explore Admission Process
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Departments;