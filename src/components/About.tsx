import React from 'react';
import { Award, BookOpen, Users, Briefcase, Building2, GraduationCap, HeartPulse, ShieldCheck, Star, MapPin } from 'lucide-react';
import AravindImg from '../assets/aravind1.jpg';

const About: React.FC = () => {
  const whyChooseData = [
    { icon: BookOpen,      title: "Industry-Relevant Curriculum",  description: "Curriculum designed with industry experts, updated regularly for current healthcare needs.",                           gradient: "from-cyan-500 to-blue-600" },
    { icon: Users,         title: "Expert Faculty & Mentors",       description: "Learn from experienced professionals with extensive clinical and academic backgrounds.",                              gradient: "from-teal-500 to-cyan-600" },
    { icon: Briefcase,     title: "Hands-on Clinical Training",     description: "Extensive practical exposure through simulation labs and clinical partnerships.",                                    gradient: "from-blue-500 to-teal-600" },
    { icon: Award,         title: "Internship & Placement Support", description: "Dedicated placement cell ensuring career guidance and job opportunities.",                                           gradient: "from-emerald-500 to-teal-600" },
    { icon: Building2,     title: "Multi-Specialty Learning",       description: "Access to diverse clinical settings for a comprehensive learning experience.",                                       gradient: "from-cyan-500 to-emerald-600" },
    { icon: GraduationCap, title: "Government Affiliation",         description: "Central Government affiliated, ensuring your qualifications are nationally recognised.",                             gradient: "from-blue-500 to-cyan-600" },
  ];

  const facilities = [
    { image: "https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg",   title: "Therapy Labs & Simulation Clinics", description: "State-of-the-art facilities for practical training" },
    { image: "https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg", title: "Library with Digital Resources",    description: "Extensive collection of books, journals, and online resources" },
    { image: "https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg",   title: "Wi-Fi Enabled Smart Classrooms",    description: "Modern learning environments with latest technology" },
  ];

  return (
    <div className="bg-slate-950 text-white pt-20">

      {/* ── Hero ── */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <img
          src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1400"
          alt="Dunmark Institute"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-slate-950/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950/90" />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(20,184,166,0.06) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="relative z-10 w-full pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto lg:mx-0 lg:ml-16">
            <div className="inline-flex items-center gap-2 bg-teal-500/15 border border-teal-500/30 rounded-full px-4 py-1.5 mb-5 backdrop-blur-sm">
              <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
              <span className="text-teal-300 text-xs sm:text-sm font-semibold tracking-wide">Dunmark Institute of Medical Sciences</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4">
              About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400">
                DUNMARK
              </span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              Pioneering specialized healthcare education with innovative programmes and hands-on training, where brilliance meets compassion.
            </p>
          </div>
        </div>
      </section>

      {/* ── Our Journey ── */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-teal-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Image */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500/30 to-teal-500/20 rounded-3xl blur-lg" />
              <img
                src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Dunmark Institute students"
                className="relative w-full h-[420px] object-cover rounded-2xl border border-white/10 shadow-2xl"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 bg-slate-900 border border-teal-500/30 rounded-2xl p-4 shadow-2xl backdrop-blur-sm">
                <p className="text-slate-400 text-xs mb-0.5">Established</p>
                <p className="text-2xl font-extrabold text-cyan-400">2025</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
                Our{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">Journey</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full mb-6" />
              <p className="text-slate-300 leading-relaxed mb-4">
                Dunmark Institute of Medical Sciences was founded with a singular vision — to raise the bar for allied healthcare education in India. Built by passionate clinicians and educators, we blend theoretical rigour with hands-on practice across seven specialised diploma programmes.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                With state-of-the-art facilities, experienced faculty, and growing industry partnerships, we prepare students to meet the evolving demands of the healthcare sector.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: ShieldCheck,   text: "Govt. Affiliated",      gradient: "from-cyan-500 to-blue-600" },
                  { icon: GraduationCap, text: "7 Diploma Programmes",  gradient: "from-teal-500 to-emerald-600" },
                  { icon: Building2,     text: "Modern Campus",         gradient: "from-blue-500 to-cyan-600" },
                  { icon: HeartPulse,    text: "Clinical Partnerships", gradient: "from-emerald-500 to-teal-600" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                    <div className={`w-10 h-10 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center shrink-0`}>
                      <item.icon size={18} className="text-white" />
                    </div>
                    <span className="text-slate-200 text-sm font-semibold">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(20,184,166,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Core Values</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Award,     title: "Our Vision",  description: "To be India's leading institute in allied health sciences, promoting excellence in therapy education, innovation in clinical practices, and compassionate service to the community.", gradient: "from-cyan-500 to-teal-500",    glow: "bg-cyan-500/10" },
              { icon: HeartPulse, title: "Our Mission", description: "To train competent, ethical, and compassionate professionals in the fields of sensory integration, behavioural science, neurodevelopment, and communication therapies.", gradient: "from-teal-500 to-emerald-500", glow: "bg-emerald-500/10" },
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div className={`absolute -inset-px bg-gradient-to-br ${item.gradient} rounded-2xl opacity-20 group-hover:opacity-30 transition duration-500 blur-sm`} />
                <div className="relative bg-slate-900 border border-white/10 rounded-2xl p-8 sm:p-10 h-full hover:border-white/20 transition-all duration-300">
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <item.icon size={26} className="text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Dunmark ── */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">
              Why Choose{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">DUNMARK?</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full mx-auto mt-4" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseData.map((item, i) => (
              <div key={i} className="group relative bg-slate-900 border border-white/10 rounded-2xl p-7 hover:border-teal-500/40 hover:bg-slate-800/80 transition-all duration-300">
                <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon size={22} className="text-white" />
                </div>
                <h3 className="text-white font-bold text-base mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Leadership ── */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/50" />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(20,184,166,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-teal-500/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Leadership</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full mx-auto mt-4 mb-4" />
            <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
              Visionary leadership dedicated to transforming healthcare education with expertise and innovation.
            </p>
          </div>

          <div className="relative group">
            <div className="absolute -inset-px bg-gradient-to-br from-teal-500/30 to-emerald-500/20 rounded-3xl blur-sm opacity-60 group-hover:opacity-80 transition duration-500" />
            <div className="relative bg-slate-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
              <div className="flex flex-col lg:flex-row">
                {/* Photo */}
                <div className="lg:w-2/5 relative overflow-hidden">
                  <img
                    src={AravindImg}
                    alt="Dr. AK Aravind"
                    className="w-full h-72 lg:h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-900/60" />
                  <div className="absolute bottom-5 left-5 lg:hidden">
                    <p className="text-white font-bold text-lg">Dr. AK Aravind</p>
                    <p className="text-teal-300 text-sm">Chief Executive Officer</p>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-3/5 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                  <div className="hidden lg:block mb-4">
                    <p className="text-teal-400 text-sm font-semibold tracking-wide uppercase mb-1">Chief Executive Officer</p>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Dr. AK Aravind</h3>
                  </div>
                  <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full mb-6" />
                  <p className="text-slate-300 leading-relaxed mb-4 text-sm sm:text-base">
                    Dr. AK Aravind brings exceptional expertise as an Occupational Therapist, Mindfulness Trainer, and Brain Gym certified instructor. With a Bachelor's degree in Occupational Therapy from TN Dr. M.G.R Medical University (2020), he combines clinical excellence with educational innovation.
                  </p>
                  <p className="text-slate-400 leading-relaxed mb-7 text-sm">
                    His specialised training in sensory integration, neurodevelopmental therapy, and behavioural interventions has positioned him as a thought leader in paediatric rehabilitation.
                  </p>

                  <div className="mb-7">
                    <p className="text-slate-300 font-semibold text-sm mb-3">Key Expertise</p>
                    <div className="grid grid-cols-2 gap-2">
                      {["Sensory Integration", "Brain Gym Training", "Mindfulness Therapy", "Pediatric Care"].map((skill, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-slate-400 text-sm">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full shrink-0" />
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    {[
                      { href: "https://www.linkedin.com/pub/dir/Dr.ak/Aravind", label: "in",  gradient: "from-blue-500 to-cyan-600" },
                      { href: "https://www.facebook.com/aravind.bot.7/",         label: "fb", gradient: "from-cyan-500 to-teal-600" },
                      { href: "https://akaravind369.blogspot.com/p/dr-ak-aravind.html", label: "blog", gradient: "from-teal-500 to-emerald-600" },
                    ].map((link, idx) => (
                      <a key={idx} href={link.href} target="_blank" rel="noopener noreferrer"
                        className={`w-10 h-10 bg-gradient-to-br ${link.gradient} rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 text-white text-xs font-bold shadow-lg`}>
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Campus & Facilities ── */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">
              Campus &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Facilities</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full mx-auto mt-4" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {facilities.map((f, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden h-72 border border-white/10">
                <img src={f.image} alt={f.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-bold text-base mb-1">{f.title}</h3>
                  <p className="text-teal-300 text-xs">{f.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Student Amenities",  items: ["Cafeteria with healthy food options", "Student lounge and recreation areas", "Separate hostel facilities for boys and girls", "24/7 security and medical support"], gradient: "from-cyan-500 to-teal-500" },
              { title: "Academic Support",   items: ["Dedicated placement and internship cell", "Career counseling services", "Research support facilities", "Student mentorship programme"], gradient: "from-teal-500 to-emerald-500" },
            ].map((sec, i) => (
              <div key={i} className="bg-slate-900 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
                <div className={`w-10 h-1 bg-gradient-to-r ${sec.gradient} rounded-full mb-5`} />
                <h3 className="text-white font-bold text-lg mb-6">{sec.title}</h3>
                <ul className="space-y-4">
                  {sec.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-400 text-sm">
                      <div className={`w-2 h-2 mt-1.5 bg-gradient-to-r ${sec.gradient} rounded-full shrink-0`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Affiliations ── */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/50" />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(20,184,166,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">
            Affiliations &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Recognitions</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full mx-auto mt-4 mb-12" />

          <div className="relative group mb-12">
            <div className="absolute -inset-px bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-3xl blur-sm" />
            <div className="relative bg-slate-900 border border-white/10 rounded-3xl p-10 sm:p-14">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-500/20">
                <Award size={30} className="text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Affiliated by Central Government of India</h3>
              <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base mb-10">
                Our programmes are recognised and approved by relevant government bodies, ensuring high standards of education and professional credibility for our graduates.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { icon: Award,         title: "Quality Education",   description: "Meets national education standards",  gradient: "from-cyan-500 to-blue-600" },
                  { icon: GraduationCap, title: "Recognised Diplomas", description: "Nationally accepted qualifications",  gradient: "from-teal-500 to-emerald-600" },
                  { icon: Users,         title: "Industry Partners",   description: "Strong professional network",          gradient: "from-blue-500 to-teal-600" },
                ].map((item, i) => (
                  <div key={i} className="group/card flex flex-col items-center bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-teal-500/30 transition-all duration-300">
                    <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-4 group-hover/card:scale-110 transition-transform duration-300 shadow-lg`}>
                      <item.icon size={22} className="text-white" />
                    </div>
                    <h4 className="text-white font-bold mb-2 text-sm">{item.title}</h4>
                    <p className="text-slate-500 text-xs text-center">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
