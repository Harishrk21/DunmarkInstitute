import React from 'react';
import { CheckCircle, Award, BookOpen, UserPlus, Building2, HeartPulse, Phone, MapPin, Star, Sparkles, Eye } from 'lucide-react';

// Mock Link component for demonstration
const Link = ({ to, children, className, ...props }) => (
  <a href={to} className={className} {...props}>
    {children}
  </a>
);

const Home: React.FC = () => {
  const features = [
    { icon: Award, text: "7 Specialized Programs", color: "text-teal-600" },
    { icon: Sparkles, text: "Student-Founded Initiative", color: "text-emerald-600" },
    { icon: Building2, text: "Ultra-Modern Facilities", color: "text-cyan-600" },
    { icon: HeartPulse, text: "Industry Partnerships", color: "text-teal-600" }
  ];

  const whyChooseUs = [
    {
      icon: BookOpen,
      title: "Innovative Curriculum",
      description: "Our newly designed curriculum combines the latest healthcare knowledge with practical skills, developed by students and faculty together.",
      gradient: "from-cyan-500 to-teal-500"
    },
    {
      icon: Award,
      title: "Seven Specialized Diplomas",
      description: "Choose from our Seven carefully selected diploma programs, each focusing on high-demand areas of healthcare.",
      gradient: "from-teal-500 to-emerald-500"
    },
    {
      icon: UserPlus,
      title: "Faculty-Student Collaboration",
      description: "Experience collaborative learning, where student voices harmonize with faculty expertise.",
      gradient: "from-emerald-500 to-cyan-500"
    },
    {
      icon: Building2,
      title: "Pristine New Facilities",
      description: "Train with the latest equipment in our purpose-built campus designed specifically for healthcare education.",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: HeartPulse,
      title: "Clinical Partnerships",
      description: "Gain experience in real healthcare settings through our expanding network of clinical partners.",
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      icon: Star,
      title: "Career-Focused Excellence",
      description: "Our programs are designed with direct input from healthcare employers to ensure job-ready graduates.",
      gradient: "from-emerald-500 to-teal-500"
    }
  ];

  const programs = [
    {
      title: "Sensory Integration Therapy",
      image: "data:image/jpeg;base64,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",
      description: "Master the art of sensory harmony — help individuals process the world's beautiful complexity.",
      link: "/courses/sensory-integration",
      gradient: "from-cyan-500 to-teal-500"
    },
    {
      title: "Applied Behavior Therapy",
      image: "https://thumbs.dreamstime.com/b/colorful-text-applied-behavior-analysis-colorful-text-applied-behavior-analysis-blue-background-ai-generated-354757350.jpg",
      description: "Shape behaviors with precision and grace of a master artist painting with light.",
      link: "/courses/applied-behavior",
      gradient: "from-teal-500 to-emerald-500"
    },
    {
      title: "Speech & Language Pathology",
      image: "https://orangecoastcollege.edu/academics/career-advantage/program-areas/images/speech-language-pathology1.jpg",
      description: "Unlock the beauty of communication — give voice to those who need to be heard.",
      link: "/courses/speech-language",
      gradient: "from-emerald-500 to-cyan-500"
    }
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="pt-24 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-emerald-800 to-blue-900"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-600/20 via-teal-500/10 to-emerald-400/20"></div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-teal-400 to-emerald-400"></div>
          <div className="absolute top-1/3 right-20 w-24 h-24 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400"></div>
          <div className="absolute bottom-1/3 right-1/3 w-28 h-28 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-teal-200 to-emerald-200 mb-8 leading-relaxed">
            Empowering Healthcare Excellence
          </h1>
          
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto mb-6 rounded-full"></div>
          
          <p className="text-lg md:text-xl text-teal-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            DUNMARK Institute of Medical Sciences — Where Innovation Meets Excellence in Therapy, Rehabilitation, and Neurodevelopmental Sciences
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4">
            <Link 
              to="/admission" 
              className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-lg transform hover:scale-105 flex items-center"
            >
              <Star className="mr-2" size={20} />
              Apply Now
            </Link>
            <Link 
              to="/courses" 
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-cyan-300 font-bold py-3 px-6 rounded-full transition-all duration-300 flex items-center"
            >
              <BookOpen className="mr-2" size={20} />
              Explore Programs
            </Link>
            <Link 
              to="/campus" 
              className="bg-transparent hover:bg-teal-500/20 text-cyan-200 border-2 border-teal-300 font-bold py-3 px-6 rounded-full transition-all duration-300 backdrop-blur-sm flex items-center"
            >
              <MapPin size={20} className="mr-2" />
              Visit Campus
            </Link>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-gradient-to-r from-teal-800 via-emerald-700 to-cyan-800 text-white py-3 overflow-hidden border-y-2 border-cyan-400/30">
        <div className="animate-marquee whitespace-nowrap">
          <span className="mx-8">✦ Inaugural 2025 Academic Year - Admissions Open</span>
          <span className="mx-8">✦ 5 Specialized Diploma Programs</span>
          <span className="mx-8">✦ Exclusive Scholarships for Pioneer Students</span>
          <span className="mx-8">✦ State-of-the-Art Modern Campus</span>
        </div>
      </div>

      {/* Affiliation Section */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-teal-50">
        <div className="container mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Award className="text-white" size={40} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-800 to-teal-700 bg-clip-text text-transparent mb-4">
            Affiliated by Central Government of India
          </h3>
          <p className="text-gray-700 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Our programs are recognized and approved by relevant government bodies, ensuring high standards 
            of education and professional credibility for our graduates.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gradient-to-b from-teal-50 to-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Dunmark Institute Campus" 
                  className="rounded-2xl shadow-xl w-full h-auto"
                />
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-700 to-emerald-700 bg-clip-text text-transparent mb-4">
                About Our Institute
              </h2>
              
              <div className="w-24 h-2 bg-gradient-to-r from-cyan-500 to-emerald-500 mb-6 rounded-full"></div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                Dunmark Institute of Medical Science is an innovative educational initiative founded in 2025 by passionate students and experienced faculty members. 
                Our vision is to create a new standard in healthcare education.
              </p>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                We offer seven specialized diploma programs designed to meet the growing demands of the healthcare sector 
                with personalized attention and mentorship.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {features.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-teal-100 to-emerald-100 rounded-full flex items-center justify-center mr-3">
                      <item.icon size={18} className={item.color} />
                    </div>
                    <span className="text-gray-700 text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
              
              <Link 
                to="/about" 
                className="inline-flex items-center text-teal-600 hover:text-teal-800 font-bold"
              >
                Discover Our Story 
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-700 to-emerald-700 bg-clip-text text-transparent mb-4">
              Why Choose Dunmark Institute
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fresh perspectives in healthcare education with innovative approaches and modern facilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((card, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                <div className={`w-12 h-12 bg-gradient-to-r ${card.gradient} rounded-full flex items-center justify-center mb-4`}>
                  <card.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-16 bg-gradient-to-b from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent mb-4">
              Our Diploma Programs
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Seven specialized programs, each designed for excellence in healthcare education.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={program.image}
                    alt={program.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${program.gradient} opacity-20`}></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">
                    Diploma in {program.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{program.description}</p>
                  <Link 
                    to={program.link}
                    className="inline-flex items-center text-teal-600 hover:text-teal-800 font-bold text-sm"
                  >
                    Explore Program 
                    <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link 
              to="/courses" 
              className="inline-flex items-center bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg transform hover:scale-105"
            >
              <Eye className="mr-2" size={20} />
              View All 7 Programs
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-800 via-emerald-700 to-cyan-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-64 h-64 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full -top-20 -left-20"></div>
          <div className="absolute w-80 h-80 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full -bottom-20 -right-20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-200 to-emerald-200 bg-clip-text text-transparent">
              Join Our Inaugural Class of 2025
            </h2>
            
            <div className="w-32 h-2 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto mb-8 rounded-full"></div>
            
            <p className="text-lg md:text-xl text-teal-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Be part of our founding community and help create the future of healthcare education.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4">
              <Link 
                to="/admission" 
                className="bg-white hover:bg-gray-100 text-teal-700 font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg transform hover:scale-105 flex items-center"
              >
                <Star className="mr-2" size={20} />
                Apply Now
              </Link>
              <Link 
                to="/campus" 
                className="bg-transparent hover:bg-teal-600/30 text-white border-2 border-cyan-300 font-bold py-3 px-8 rounded-full transition-all duration-300 backdrop-blur-sm flex items-center"
              >
                <MapPin className="mr-2" size={20} />
                Visit Campus
              </Link>
              <Link 
                to="/contact" 
                className="bg-emerald-500/20 hover:bg-emerald-500/40 text-white border-2 border-emerald-300 font-bold py-3 px-8 rounded-full transition-all duration-300 backdrop-blur-sm flex items-center"
              >
                <Phone className="mr-2" size={20} />
                Speak to Counsellors
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
};

export default Home;