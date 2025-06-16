import React from 'react';
import { 
  Wifi, 
  BookOpen, 
  Coffee, 
  Home, 
  Activity, 
  Monitor, 
  Briefcase,
  Users,
  Book,
  HeartPulse
} from 'lucide-react';

const CampusFacilities: React.FC = () => {
  const facilities = [
    {
      title: "Therapy Labs & Simulation Clinics",
      icon: <Activity className="w-8 h-8 text-blue-600" />,
      description: "Our state-of-the-art therapy labs provide students with hands-on training in real-world clinical settings. The simulation clinics feature advanced equipment for occupational therapy, speech therapy, and behavioral interventions.",
      features: [
        "Fully equipped pediatric therapy lab",
        "Adult rehabilitation simulation center",
        "One-way observation mirrors for training",
        "Video recording for session analysis",
        "Mock home environment for ADL training"
      ],
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Multisensory Equipment Rooms",
      icon: <HeartPulse className="w-8 h-8 text-blue-600" />,
      description: "Specialized sensory integration rooms designed to provide therapeutic experiences for various sensory needs. These spaces are used for both student training and client therapy sessions.",
      features: [
        "Snoezelen multi-sensory environment",
        "Vestibular and proprioceptive equipment",
        "Tactile exploration walls",
        "Auditory integration systems",
        "Visual stimulation tools"
      ],
      image: "https://plus.unsplash.com/premium_photo-1744497629260-3745b03f74c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bXVsdGlzZW5zb3J5JTIwZXF1aXBtZW50c3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "Library with Digital Resources",
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      description: "Our comprehensive library offers extensive collections of print and digital resources specializing in therapy, psychology, and special education.",
      features: [
        "10,000+ physical volumes",
        "Access to 25+ academic databases",
        "Quiet study zones and group collaboration spaces",
        "24/7 online resource access",
        "Thesis and dissertation archives"
      ],
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Wi-Fi Enabled Smart Classrooms",
      icon: <Wifi className="w-8 h-8 text-blue-600" />,
      description: "Modern, technology-enhanced learning spaces designed to facilitate interactive education and collaborative learning.",
      features: [
        "High-speed campus-wide Wi-Fi",
        "Interactive smart boards",
        "Audio-visual recording capabilities",
        "Flexible seating arrangements",
        "Video conferencing equipment"
      ],
      image: "https://images.unsplash.com/photo-1645725677294-ed0843b97d5c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2lmaXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "Placement and Internship Cell",
      icon: <Briefcase className="w-8 h-8 text-blue-600" />,
      description: "Dedicated career support center connecting students with practicum sites, internships, and employment opportunities.",
      features: [
        "Industry partnership with 100+ organizations",
        "Resume building workshops",
        "Mock interview sessions",
        "Career counseling services",
        "Annual campus recruitment drive"
      ],
      image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Cafeteria & Student Lounge",
      icon: <Coffee className="w-8 h-8 text-blue-600" />,
      description: "Vibrant social spaces offering nutritious meals and comfortable areas for relaxation and student interaction.",
      features: [
        "Healthy meal options available",
        "24/7 beverage station",
        "Outdoor seating area",
        "Game and recreation zone",
        "Event and performance space"
      ],
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Hostel Accommodation",
      icon: <Home className="w-8 h-8 text-blue-600" />,
      description: "Safe and comfortable residential facilities designed to create a supportive living-learning environment.",
      features: [
        "Separate wings for male and female students",
        "Single and shared room options",
        "24/7 security and CCTV monitoring",
        "Common kitchen facilities",
        "Laundry and housekeeping services"
      ],
      image: "https://images.unsplash.com/photo-1580216643062-cf460548a66a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  const stats = [
    { value: "5+", label: "Therapy Labs" },
    { value: "2,500+", label: "Library Resources" },
    { value: "100%", label: "Wi-Fi Coverage" },
    { value: "20+", label: "Industry Partners" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative bg-blue-800 text-white py-24 px-4">
        <div className="absolute inset-0 bg-black opacity-50">
          <img 
            src="https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" 
            alt="Campus aerial view" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Campus & Facilities</h1>
          <p className="text-xl text-blue-100">
            A world-class learning environment designed to foster excellence in therapeutic education
          </p>
        </div>
      </div>

      {/* Campus Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1576495199011-eb94736d05d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Campus building" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Our Campus</h2>
              <p className="text-gray-700 mb-6 text-lg">
                Nestled in a calm and focused learning environment, our campus is thoughtfully developed to support therapeutic education through a blend of modern design and functional spaces. As a growing institution, we provide the essential facilities needed to deliver quality theoretical instruction and practical training that reflect real-world scenarios.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-blue-50 p-4 rounded-lg text-center">
                    <p className="text-3xl font-bold text-blue-800">{stat.value}</p>
                    <p className="text-gray-700">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Facilities</h2>
            <p className="text-xl text-gray-700">
              Designed to support every aspect of your educational journey
            </p>
          </div>

          <div className="space-y-20">
            {facilities.map((facility, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="md:w-1/2">
                  <img 
                    src={facility.image} 
                    alt={facility.title} 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
                <div className="md:w-1/2">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      {facility.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{facility.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-4">{facility.description}</p>
                  <ul className="space-y-2">
                    {facility.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-blue-100 flex-shrink-0 mr-2 mt-0.5 flex items-center justify-center">
                          <div className="h-2.5 w-2.5 rounded-full bg-blue-600"></div>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      {/* <section className="py-20 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Experience Our Campus Virtually</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Can't visit in person? Take our 360° virtual tour to explore our facilities from anywhere in the world.
          </p>
          <button className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
            Launch Virtual Tour
          </button>
        </div>
      </section> */}

      {/* Location Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Location</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <div className="bg-gray-200 rounded-lg overflow-hidden h-64 md:h-full">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.9828918455987!2d80.20060147470934!3d13.100270287227064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526565df512807%3A0xce1e37d7d6b81572!2sAADHIRAA%20PAEDIATRIC%20THERAPY%20SERVICES%2F%20occupational%20Therapy%20%2F%20speech%20therapy%20%2F%20special%20eduction!5e0!3m2!1sen!2sin!4v1749729145027!5m2!1sen!2sin"  
                    width="100%" 
                    height="100%" 
                    style={{border:0}}
                    allowFullScreen
                    loading="lazy"
                    title="Campus Location"
                  ></iframe>
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Address</h3>
                <p className="text-gray-700 mb-6">
                  NO 90, 15TH BLOCK, 13th St, Thiru Nagar,<br />
                  Villivakkam, Chennai, Tamil Nadu 600049<br />
                  
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Transportation</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-blue-100 flex-shrink-0 mr-2 mt-0.5 flex items-center justify-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-blue-600"></div>
                    </div>
                    <span className="text-gray-700">Metro:Anna Nagar Metro (Line 3, Exit B)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-blue-100 flex-shrink-0 mr-2 mt-0.5 flex items-center justify-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-blue-600"></div>
                    </div>
                    <span className="text-gray-700">Bus Routes: 47A,48,20 (Stop: Villivakkam Bus Stand)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-blue-100 flex-shrink-0 mr-2 mt-0.5 flex items-center justify-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-blue-600"></div>
                    </div>
                    <span className="text-gray-700">On-campus parking available for visitors</span>
                  </li>
                </ul>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-300">
                  {/* Download Campus Map */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CampusFacilities;