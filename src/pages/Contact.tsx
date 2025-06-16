import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Calendar, User, Send } from 'lucide-react';
import { Link } from 'react-router-dom';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/mgvykldp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="text-6xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-teal-700 mb-2">Thank You!</h3>
        <p className="text-slate-600">Your message has been sent successfully. We'll get back to you soon!</p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="mt-4 text-teal-600 hover:text-teal-700 underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-teal-200 rounded-lg focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-300 bg-gradient-to-r from-cyan-50/50 to-teal-50/50"
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-teal-200 rounded-lg focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-300 bg-gradient-to-r from-cyan-50/50 to-teal-50/50"
            placeholder="Enter your email"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-teal-200 rounded-lg focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-300 bg-gradient-to-r from-cyan-50/50 to-teal-50/50"
            placeholder="Enter your phone number"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-teal-200 rounded-lg focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-300 bg-gradient-to-r from-cyan-50/50 to-teal-50/50"
          >
            <option value="">Select a subject</option>
            <option value="admissions">Admissions Inquiry</option>
            <option value="programs">Program Information</option>
            <option value="financial">Financial Aid</option>
            <option value="campus-tour">Campus Tour</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 border-2 border-teal-200 rounded-lg focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-300 resize-vertical bg-gradient-to-r from-cyan-50/50 to-teal-50/50"
          placeholder="Tell us how we can help you..."
        />
      </div>
      
      <button
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-teal-600 via-cyan-600 to-emerald-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-teal-700 hover:via-cyan-700 hover:to-emerald-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Send size={20} className="mr-2 group-hover:translate-x-1 transition-transform" />
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </div>
  );
};

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-white" />,
      title: 'Address',
      details: ['No.90,15TH BLOCK, 13TH STREET', 'THIRU NAGAR,VILLIVAKKAM', 'CHENNAI -600049'],
      bgGradient: 'from-teal-700 via-cyan-700 to-blue-700'
    },
    {
      icon: <Phone className="w-6 h-6 text-white" />,
      title: 'Phone',
      details: ['Admissions: +91 82489 99216', 'Academic Office: +91 80731 78006'],
      bgGradient: 'from-emerald-700 via-teal-700 to-cyan-700'
    },
    {
      icon: <Mail className="w-6 h-6 text-white" />,
      title: 'Email',
      details: ['info@dunmark.edu', 'contact@dunmark.edu', 'principal@dunmark.edu','aravind@dunmarkedu.com'],
      bgGradient: 'from-cyan-700 via-teal-700 to-blue-700'
    },
    {
      icon: <Clock className="w-6 h-6 text-white" />,
      title: 'Office Hours',
      details: ['Monday-Friday: 9:00 AM - 5:00 PM', 'Saturday: 9:00 AM - 1:00 PM', 'Sunday: Closed'],
      bgGradient: 'from-blue-700 via-cyan-700 to-teal-700'
    }
  ];

  const FloatingElements = () => (
    <div className="absolute top-0 left-0 w-full h-full opacity-20">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-cyan-300/30 to-teal-300/30 animate-pulse"
          style={{
            width: Math.random() * 60 + 10 + 'px',
            height: Math.random() * 60 + 10 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            animationDelay: Math.random() * 8 + 's',
            animationDuration: (Math.random() * 15 + 15) + 's'
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="pt-20 relative">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none bg-gradient-to-br from-teal-900 via-cyan-900 to-blue-900" />

      {/* Hero Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-teal-800 to-emerald-900 text-white py-24 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-teal-400/30 to-emerald-400/20" />
        <FloatingElements />
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-300 via-teal-200 to-emerald-300 bg-clip-text text-transparent">
            Connect With Us
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto mb-6 rounded-full" />
          <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
            We're here to help! Reach out to our team for inquiries, assistance, or to schedule a campus visit.
          </p>
        </div>
      </div>
      
      {/* Contact Cards */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-cyan-50/30 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactInfo.map((item, index) => (
              <div 
                key={index} 
                className={`bg-gradient-to-br ${item.bgGradient} p-6 rounded-xl shadow-xl text-white transform hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl hover:scale-105 relative overflow-hidden group`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="mb-4 flex justify-center relative z-10">
                  <div className="p-4 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 group-hover:bg-white/30 transition-all duration-300">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center relative z-10">{item.title}</h3>
                <ul className="space-y-2 relative z-10">
                  {item.details.map((detail, i) => (
                    <li key={i} className="text-cyan-100 text-center text-sm">{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Form and Map Section */}
      <section className="py-16 bg-gradient-to-br from-cyan-50/50 to-teal-50/50 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-teal-200/50">
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center">
                    <User className="mr-3 text-teal-600" size={28} />
                    <span className="bg-gradient-to-r from-teal-700 to-cyan-700 bg-clip-text text-transparent">
                      Send Us a Message
                    </span>
                  </h2>
                  <ContactForm />
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-teal-200/50">
                <div className="p-6">
                  <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center">
                    <MapPin className="mr-3 text-teal-600" size={28} />
                    <span className="bg-gradient-to-r from-teal-700 to-cyan-700 bg-clip-text text-transparent">
                      Our Location
                    </span>
                  </h2>
                  <div className="relative h-96 rounded-xl overflow-hidden border-2 border-teal-200 shadow-lg">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.9828918455987!2d80.20060147470934!3d13.100270287227064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526565df512807%3A0xce1e37d7d6b81572!2sAADHIRAA%20PAEDIATRIC%20THERAPY%20SERVICES%2F%20occupational%20Therapy%20%2F%20speech%20therapy%20%2F%20special%20eduction!5e0!3m2!1sen!2sin!4v1749729145027!5m2!1sen!2sin" 
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      title="Location map"
                    />
                  </div>
                  <div className="mt-6 bg-gradient-to-r from-teal-50 to-cyan-50 p-4 rounded-lg border border-teal-200">
                    <h4 className="font-semibold text-teal-800 mb-2">Directions</h4>
                    <p className="text-slate-700">Our campus is located next to Anna Nagar with easy access to public transportation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Visit Campus CTA */}
      <section className="relative py-20 bg-gradient-to-br from-teal-900 via-cyan-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 via-teal-400/20 to-cyan-400/10" />
        <FloatingElements />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-200 via-teal-100 to-emerald-200 bg-clip-text text-transparent">
            Experience Our Campus
          </h2>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto mb-8">
            Schedule a personalized tour to explore our facilities, meet faculty, and discover how Dunmark can help you achieve your career goals.
          </p>
          <Link
                                     to="/campus"
                                     className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-medium py-4 px-8 rounded-xl transition duration-300 shadow-2xl transform hover:scale-105 hover:shadow-cyan-500/25"
                                   >
                                    Visit our Campus
                                   </Link>
        </div>
      </section>
    </div>
  );
};

export default Contact;