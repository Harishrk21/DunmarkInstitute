import React from 'react';
import { Calendar, Clock, ExternalLink, Users, BookOpen, Award, Globe, Heart } from 'lucide-react';

const Blog = () => {
  const newsEvents = [
    {
      id: 1,
      title: "Annual Neuro-Developmental Conference 2025",
      category: "Conference",
      date: "March 15-17, 2025",
      image: "https://images.pexels.com/photos/7713181/pexels-photo-7713181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      excerpt: "Join leading experts in neuro-developmental therapy for three days of cutting-edge research presentations and workshops.",
      link: "https://www.ndta.org/site/Annual-Conference-2025",
      icon: BookOpen
    },
    {
      id: 2,
      title: "Summer Internship Drive 2025",
      category: "Internship",
      date: "April 10, 2025",
      image: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      excerpt: "Premium healthcare organizations recruiting Dunmark students for paid internships with specialized training programs.",
      link: "https://g.co/kgs/1FXpokc",
      icon: Users
    },
    {
      id: 3,
      title: "Guest Lecture by Dr. Temple Grandin",
      category: "Expert Talk",
      date: "February 28, 2025",
      image: "https://images.pexels.com/photos/8199177/pexels-photo-8199177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      excerpt: "World-renowned autism advocate shares insights on innovative therapeutic approaches and sensory integration techniques.",
      link: "https://www.kean.edu/news/distinguished-lecturer-temple-grandin-phd-shares-insight-educating-students-autism-kean",
      icon: Award
    },
    {
      id: 4,
      title: "World Autism Awareness Day Celebration",
      category: "Awareness",
      date: "April 2, 2025",
      image: "https://images.pexels.com/photos/8612992/pexels-photo-8612992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      excerpt: "Community outreach program featuring student-led workshops, parent counseling sessions, and autism awareness campaigns.",
      link: "https://www.un.org/en/observances/autism-day",
      icon: Heart
    },
    {
      id: 5,
      title: "Student Research Presentation Day",
      category: "Research",
      date: "March 25, 2025",
      image: "https://images.pexels.com/photos/7713179/pexels-photo-7713179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      excerpt: "Final year students present groundbreaking research on pediatric therapy techniques and intervention strategies.",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10680406/",
      icon: BookOpen
    },
    {
      id: 6,
      title: "International Teletherapy Summit",
      category: "Technology",
      date: "May 8-9, 2025",
      image: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      excerpt: "Exploring the future of remote therapy delivery and digital intervention tools for special needs children.",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7829321/",
      icon: Globe
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Breaking Barriers: Early Intervention Success Stories",
      author: "Dr. Sarah Mitchell",
      date: "January 20, 2025",
      readTime: "8 min read",
      image: "https://images.pexels.com/photos/8613317/pexels-photo-8613317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      excerpt: "Discover how early intervention programs are transforming lives and creating new possibilities for children with developmental challenges.",
      link: "https://exceptionalshell.com/2024/04/09/autismearlyinterventionservices/"
    },
    {
      id: 2,
      title: "The Science Behind Sensory Integration Therapy",
      author: "Prof. Michael Chen",
      date: "January 15, 2025",
      readTime: "12 min read",
      image: "https://images.pexels.com/photos/8613074/pexels-photo-8613074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      excerpt: "An in-depth look at how sensory integration therapy works and its proven effectiveness in treating sensory processing disorders.",
      link: "https://www.frontiersin.org/journals/integrative-neuroscience/articles/10.3389/fnint.2020.556660/full"
    },
    {
      id: 3,
      title: "Digital Tools Revolutionizing Autism Therapy",
      author: "Dr. Priya Patel",
      date: "January 10, 2025",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/8613318/pexels-photo-8613318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      excerpt: "How technology is enhancing traditional therapy methods and making interventions more accessible and effective.",
      link: "https://www.magnetaba.com/blog/using-technology-in-autism-therapy-97a2e#:~:text=Technology%2Dbased%20interventions%20have%20proven,including%20empathy%20and%20emotion%20recognition."
    }
  ];

  return (
    <div className="pt-24 bg-gradient-to-br from-blue-900 via-teal-800 to-emerald-900 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-teal-700 to-cyan-600 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800/20 via-teal-600/20 to-cyan-500/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-200 to-teal-100 bg-clip-text text-transparent">
            News & Articles
          </h1>
          <p className="text-xl text-cyan-100 max-w-2xl">
            Stay updated with the latest developments in neuro-developmental therapy, research insights, and Dunmark Institute events
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-teal-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
      </section>

      {/* Featured News & Events */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-900 to-teal-700 bg-clip-text mb-12 text-center">
            Upcoming Events & News
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsEvents.map((event) => {
              const IconComponent = event.icon;
              return (
                <div key={event.id} className="bg-gradient-to-br from-white to-cyan-50 rounded-xl shadow-lg border border-cyan-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative overflow-hidden">
                    <img src={event.image} alt={event.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {event.category}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-slate-600 mb-3">
                      <Calendar size={16} className="mr-2 text-teal-600" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-blue-900 mb-3 group-hover:text-teal-700 transition-colors">
                      {event.title}
                    </h3>
                    
                    <p className="text-slate-700 mb-4 text-sm leading-relaxed">
                      {event.excerpt}
                    </p>
                    
                    <a href={event.link} target="_blank" rel="noopener noreferrer" 
                       className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold group-hover:translate-x-1 transition-all duration-200">
                      <IconComponent size={16} className="mr-2" />
                      Learn More
                      <ExternalLink size={14} className="ml-2" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-16 bg-gradient-to-br from-white to-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-900 to-teal-700 bg-clip-text mb-12 text-center">
            Featured Articles
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl shadow-lg border border-teal-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-slate-600 mb-3">
                    <span className="font-medium text-teal-700">{post.author}</span>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-blue-900 mb-3 group-hover:text-teal-700 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-700 mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">{post.date}</span>
                    <a href={post.link} target="_blank" rel="noopener noreferrer" 
                       className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold text-sm group-hover:translate-x-1 transition-all duration-200">
                      Read Article
                      <ExternalLink size={14} className="ml-1" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-teal-900 via-blue-900 to-emerald-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-200 to-teal-100 bg-clip-text text-transparent">
            Stay Updated
          </h2>
          <p className="text-cyan-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest updates on research, events, and opportunities in neuro-developmental therapy
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <button className="bg-gradient-to-r from-teal-500 to-cyan-500 px-6 py-3 rounded-lg font-semibold hover:from-teal-600 hover:to-cyan-600 transition-all duration-200 shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;