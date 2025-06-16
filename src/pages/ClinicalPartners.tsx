import React, { useState } from 'react';
import { 
  HeartPulse,
  Users,
  Globe,
  Smartphone,
  Home,
  Shield,
  Handshake,
  Star,
  ChevronRight,
  Award,
  Target,
  Briefcase,
  Heart
} from 'lucide-react';

interface PartnerCategoryProps {
  category: string;
  icon: React.ElementType;
  description: string;
  partners: string[];
  image: string;
  gradient: string;
  index: number;
}

const PartnerCategory: React.FC<PartnerCategoryProps> = ({
  category, icon: Icon, description, partners, image, gradient, index
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-3 ${
        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
      } flex flex-col md:flex-row`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 ${gradient} opacity-95`}></div>
      
      {/* Shimmer Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
      
      {/* Image Section */}
      <div className="md:w-1/2 relative overflow-hidden">
        <img 
          src={image} 
          alt={category} 
          className={`w-full h-64 md:h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
      </div>

      {/* Content Section */}
      <div className="md:w-1/2 relative p-8 text-white flex flex-col justify-center">
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-4">
            <Icon size={32} className="text-white" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold leading-tight">{category}</h3>
        </div>

        <p className="text-white/90 text-lg leading-relaxed mb-6">{description}</p>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <h4 className="font-bold text-cyan-200 mb-4 flex items-center">
            <Star size={20} className="mr-2" />
            Featured Partners
          </h4>
          <div className="space-y-3">
            {partners.map((partner, i) => (
              <div key={i} className="flex items-center group/item">
                <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full mr-3 group-hover/item:scale-125 transition-transform duration-300"></div>
                <span className="text-white/90 group-hover/item:text-white transition-colors duration-300">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialCard: React.FC<{
  quote: string;
  name: string;
  title: string;
  image: string;
  gradient: string;
}> = ({ quote, name, title, image, gradient }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      <div className={`absolute inset-0 ${gradient} opacity-90`}></div>
      
      {/* Shimmer Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
      
      <div className="relative p-8 text-white">
        <div className="flex items-center mb-6">
          <img 
            src={image} 
            alt={name} 
            className="w-16 h-16 rounded-full object-cover border-4 border-white/30 mr-4"
          />
          <div>
            <h4 className="text-xl font-bold">{name}</h4>
            <p className="text-cyan-200 font-medium">{title}</p>
          </div>
        </div>
        <p className="text-white/90 text-lg italic leading-relaxed">"{quote}"</p>
      </div>
    </div>
  );
};

const ClinicalPartners: React.FC = () => {
  const partners: (Omit<PartnerCategoryProps, 'index'> & { index?: number })[] = [
    {
      category: "Leading Paediatric Clinics",
      icon: HeartPulse,
      description: "We collaborate with top pediatric clinics across the country to provide our students with hands-on training and our graduates with exceptional career opportunities.",
      partners: [
        "Little Stars Pediatric Care",
        "Child Wellness Specialists",
        "Pediatric Therapy Network",
        "Tender Care Children's Clinic"
      ],
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      gradient: "bg-gradient-to-br from-blue-900 via-teal-800 to-cyan-700"
    },
    {
      category: "Autism Centers",
      icon: Users,
      description: "Our partnerships with specialized autism centers ensure our curriculum remains at the forefront of autism intervention techniques and therapies.",
      partners: [
        "Spectrum Hope Center",
        "Autism Care Alliance",
        "Neurodiversity Foundation",
        "Bright Horizons Autism Services"
      ],
      image: "https://plus.unsplash.com/premium_photo-1726783399356-56e462125e52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXV0aXNtJTIwY2VudHJlc3xlbnwwfHwwfHx8MA%3D%3D",
      gradient: "bg-gradient-to-br from-teal-900 via-emerald-800 to-cyan-700"
    },
    {
      category: "Government Child Development Units",
      icon: Shield,
      description: "We work closely with government health departments to improve child development services and implement nationwide early intervention programs.",
      partners: [
        "National Child Health Mission",
        "State Early Intervention Centers",
        "Public Health Department CDUs",
        "Anganwadi Training Programs"
      ],
      image: "https://plus.unsplash.com/premium_photo-1664910687621-05c21e977bd0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
      gradient: "bg-gradient-to-br from-emerald-900 via-teal-800 to-blue-700"
    },
    {
      category: "Teletherapy Platforms",
      icon: Smartphone,
      description: "Partnering with digital health platforms to prepare students for the future of remote therapy services and expand access to care.",
      partners: [
        "TheraConnect",
        "SpeakEasy Teletherapy",
        "Mindful Kids Online",
        "Virtual Pediatric Therapy Network"
      ],
      image: "https://images.unsplash.com/photo-1705056509101-8187ecd5db3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGVsZXRoZXJhcHl8ZW58MHx8MHx8fDA%3D",
      gradient: "bg-gradient-to-br from-cyan-900 via-blue-800 to-teal-700"
    },
    {
      category: "NGO Projects in Rural & Urban India",
      icon: Globe,
      description: "Collaborating with NGOs to bring therapeutic services to underserved communities while providing our students with diverse clinical experiences.",
      partners: [
        "Rural Child Health Initiative",
        "Urban Slum Therapy Project",
        "Special Needs Foundation India",
        "Therapy Without Borders"
      ],
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      gradient: "bg-gradient-to-br from-blue-900 via-cyan-800 to-emerald-700"
    }
  ];

  const benefits = [
    {
      title: "Clinical Placements",
      description: "Guaranteed internship opportunities at our partner facilities",
      icon: Target
    },
    {
      title: "Curriculum Input",
      description: "Partner feedback ensures our training meets real-world needs",
      icon: Award
    },
    {
      title: "Employment Pathways",
      description: "Preferred hiring for our graduates at partner organizations",
      icon: Briefcase
    },
    {
      title: "Community Impact",
      description: "Collaborative projects that serve underserved populations",
      icon: Heart
    }
  ];

  const testimonials = [
    {
      quote: "Dunmark graduates bring exceptional clinical skills and compassionate care to our pediatric practice.",
      name: "Dr. Priya Sharma",
      title: "Director, Little Stars Pediatric Care",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      gradient: "bg-gradient-to-br from-blue-900 to-teal-700"
    },
    {
      quote: "Our collaboration has significantly improved the quality of autism services in our region.",
      name: "Rahul Mehta",
      title: "CEO, Spectrum Hope Center",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      gradient: "bg-gradient-to-br from-teal-900 to-emerald-700"
    },
    {
      quote: "The student interns from Dunmark have been instrumental in expanding our rural outreach programs.",
      name: "Anjali Patel",
      title: "Program Director, Special Needs Foundation",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      gradient: "bg-gradient-to-br from-emerald-900 to-cyan-700"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-teal-800/90 to-emerald-900/90"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-cyan-400/30 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-radial from-teal-400/30 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-radial from-emerald-400/30 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative container mx-auto px-6 py-24">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full mb-8 shadow-2xl">
              <Handshake size={40} className="text-white" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent">
                Clinical
              </span>
              <br />
              <span className="text-white">Partners</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-cyan-200/90 max-w-4xl mx-auto leading-relaxed mb-12">
              Building bridges between education and practice to serve communities better
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <span className="text-cyan-300 font-semibold">10+ Partner Organizations</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <span className="text-teal-300 font-semibold">National Network</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <span className="text-emerald-300 font-semibold">Community Impact</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Collaborations Section */}
      <div className="relative py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Partners meeting" 
                className="rounded-3xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent rounded-3xl"></div>
            </div>
            
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                <span className="bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent">
                  Strategic
                </span>
                <br />
                <span className="text-white">Collaborations</span>
              </h2>
              
              <p className="text-cyan-200/90 text-lg leading-relaxed mb-8">
                At Dunmark Institute, we believe in the power of partnerships to transform healthcare education and service delivery. Our network of clinical partners represents the finest institutions across pediatric care, autism intervention, and community health initiatives.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full flex items-center justify-center mr-3">
                        <benefit.icon size={20} className="text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-white">{benefit.title}</h3>
                    </div>
                    <p className="text-cyan-200/80 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partner Categories */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                Our Partner Network
              </span>
            </h2>
            <p className="text-xl text-cyan-200/90 max-w-3xl mx-auto">
              Collaborating with leaders across multiple sectors of pediatric and therapeutic care
            </p>
          </div>

          <div className="space-y-16">
            {partners.map((partner, index) => (
              <PartnerCategory key={index} {...partner} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      {/* <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent">
                What Our Partners Say
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div> */}

      {/* CTA Section */}
      {/* <div className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-teal-800/90 to-emerald-900/90"></div>
        <div className="relative container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            <span className="bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
              Become a Clinical Partner
            </span>
          </h2>
          <p className="text-xl text-cyan-200/90 mb-12 max-w-3xl mx-auto">
            Join our network of healthcare providers and educational collaborators to shape the future of therapeutic services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="group bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-bold py-4 px-8 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
              Partner With Us
              <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold py-4 px-8 rounded-full hover:bg-white/20 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ClinicalPartners;