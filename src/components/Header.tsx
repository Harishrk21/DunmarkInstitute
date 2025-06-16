import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [courseDropdownOpen, setCourseDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleCourseDropdown = () => {
    setCourseDropdownOpen(!courseDropdownOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setCourseDropdownOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setCourseDropdownOpen(false);
  }, [location]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-gradient-to-r from-blue-900 via-teal-800 to-emerald-900 shadow-xl shadow-cyan-500/20' 
        : 'bg-gradient-to-r from-blue-900/95 via-teal-800/95 to-emerald-900/95 backdrop-blur-sm'
    }`}>
      {/* Iridescent overlay for shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-teal-300/10 to-blue-400/10 animate-pulse"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          {/* Logo - Left aligned */}
          <Link to="/" className="flex items-center group">
            <div className="transform group-hover:scale-105 transition-transform duration-300 flex items-center justify-start">
              <Logo />
            </div>
            <div className="ml-2">
              <h1 className="text-base font-bold leading-tight text-cyan-100 md:text-lg group-hover:text-cyan-200 transition-colors duration-300">
                DUNMARK INSTITUTE
              </h1>
              <p className="text-xs text-teal-300 group-hover:text-teal-200 transition-colors duration-300">
                OF MEDICAL SCIENCES
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex justify-center flex-1">
            <ul className="flex space-x-6 items-center">
              {/* Home */}
              <li>
                <Link
                  to="/"
                  className={`relative text-sm font-medium transition-all duration-300 hover:text-cyan-300 transform hover:-translate-y-0.5 ${
                    location.pathname === '/' 
                      ? 'text-cyan-200 after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-cyan-400 after:to-teal-400' 
                      : 'text-teal-100'
                  }`}
                >
                  Home
                </Link>
              </li>

              {/* Courses Dropdown */}
              <li className="relative">
                <button
                  className={`flex items-center text-sm font-medium transition-all duration-300 hover:text-cyan-300 transform hover:-translate-y-0.5 ${
                    location.pathname.includes('/courses') 
                      ? 'text-cyan-200 after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-cyan-400 after:to-teal-400' 
                      : 'text-teal-100'
                  }`}
                  onClick={toggleCourseDropdown}
                >
                  Courses
                  <ChevronDown 
                    size={16} 
                    className={`ml-1 transition-transform duration-300 ${courseDropdownOpen ? 'rotate-180' : ''}`} 
                  />
                </button>
                {courseDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-64 bg-gradient-to-br from-blue-900 via-teal-900 to-emerald-900 rounded-lg shadow-xl shadow-cyan-500/20 py-2 z-10 border border-cyan-500/20 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-teal-300/5 to-blue-400/5 rounded-lg"></div>
                    <div className="relative space-y-1">
                      <Link 
                        to="/courses" 
                        className="block px-4 py-2 text-sm text-teal-100 hover:text-cyan-200 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-teal-500/10 transition-all duration-300"
                      >
                        All Courses
                      </Link>
                      <Link 
                        to="/courses/sensory-integration" 
                        className="block px-4 py-2 text-sm text-teal-100 hover:text-cyan-200 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-teal-500/10 transition-all duration-300"
                      >
                        Sensory Integration Therapy
                      </Link>
                      <Link 
                        to="/courses/applied-behavior" 
                        className="block px-4 py-2 text-sm text-teal-100 hover:text-cyan-200 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-teal-500/10 transition-all duration-300"
                      >
                        Applied Behavior Therapy
                      </Link>
                      <Link 
                        to="/courses/speech-language" 
                        className="block px-4 py-2 text-sm text-teal-100 hover:text-cyan-200 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-teal-500/10 transition-all duration-300"
                      >
                        Speech & Language Pathology
                      </Link>
                      <Link 
                        to="/courses/mindfulness" 
                        className="block px-4 py-2 text-sm text-teal-100 hover:text-cyan-200 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-teal-500/10 transition-all duration-300"
                      >
                        Mindfulness-Based Interventions
                      </Link>
                      <Link 
                        to="/courses/brain-gym" 
                        className="block px-4 py-2 text-sm text-teal-100 hover:text-cyan-200 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-teal-500/10 transition-all duration-300"
                      >
                        Brain Gym & Neuro-Movement
                      </Link>
                       <Link 
                    to="/courses/Neuro-developmental" 
                    className="block text-sm text-teal-200 hover:text-cyan-300 py-1.5 px-3 rounded-md hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-teal-500/10 transition-all duration-300"
                    onClick={closeMenu}
                  >
                    Neurodevelopmental Rehabilitation
                  </Link>
                  <Link 
                    to="/courses/assistive tech" 
                    className="block text-sm text-teal-200 hover:text-cyan-300 py-1.5 px-3 rounded-md hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-teal-500/10 transition-all duration-300"
                    onClick={closeMenu}
                  >
                    Assistive Technology & Adaptive Therapy
                  </Link>
                    </div>
                  </div>
                )}
              </li>

              {/* Remaining links */}
              {[
                { to: '/departments', label: 'Departments' },
                { to: '/certification', label: 'Other Programs' },
                { to: '/clinical-partners', label: 'Associate Partners' },
                { to: '/placements', label: 'Placements' },
                { to: '/gallery', label: 'Gallery' },
                { to: '/blog', label: 'Blog' },
                { to: '/admission', label: 'Admission' },
                { to: '/contact', label: 'Contact' },
              ].map(({ to, label }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className={`relative text-sm font-medium transition-all duration-300 hover:text-cyan-300 transform hover:-translate-y-0.5 ${
                      location.pathname === to 
                        ? 'text-cyan-200 after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-cyan-400 after:to-teal-400' 
                        : 'text-teal-100'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-cyan-500/20 transition-all duration-300 transform hover:scale-105 z-50" 
            onClick={toggleMenu}
          >
            {isOpen ? 
              <X size={24} className="text-cyan-100" /> : 
              <Menu size={24} className="text-cyan-100" />
            }
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-br from-blue-900 via-teal-900 to-emerald-900 shadow-xl shadow-cyan-500/20 border-t border-cyan-500/20">
          {/* Mobile shimmer overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-teal-300/5 to-blue-400/5"></div>
          
          {/* Close button for mobile menu */}
          <div className="relative px-4 pt-2 pb-1 flex justify-end">
            <button 
              className="p-2 rounded-lg hover:bg-cyan-500/20 transition-all duration-300 transform hover:scale-105" 
              onClick={closeMenu}
            >
              <X size={20} className="text-cyan-100" />
            </button>
          </div>
          
          <ul className="relative px-4 pb-4 space-y-2">
            <li>
              <Link 
                to="/" 
                className="block text-teal-100 hover:text-cyan-200 py-2 px-3 rounded-lg hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-teal-500/10 transition-all duration-300"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <button 
                className="flex items-center justify-between w-full text-teal-100 hover:text-cyan-200 py-2 px-3 rounded-lg hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-teal-500/10 transition-all duration-300" 
                onClick={toggleCourseDropdown}
              >
                Courses
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-300 ${courseDropdownOpen ? 'rotate-180' : ''}`} 
                />
              </button>
              {courseDropdownOpen && (
                <div className="pl-6 mt-2 space-y-1">
                  <Link 
                    to="/courses" 
                    className="block text-sm text-teal-200 hover:text-cyan-300 py-1.5 px-3 rounded-md hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-teal-500/10 transition-all duration-300"
                    onClick={closeMenu}
                  >
                    All Courses
                  </Link>
                  <Link 
                    to="/courses/sensory-integration" 
                    className="block text-sm text-teal-200 hover:text-cyan-300 py-1.5 px-3 rounded-md hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-teal-500/10 transition-all duration-300"
                    onClick={closeMenu}
                  >
                    Sensory Integration Therapy
                  </Link>
                  <Link 
                    to="/courses/applied-behavior" 
                    className="block text-sm text-teal-200 hover:text-cyan-300 py-1.5 px-3 rounded-md hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-teal-500/10 transition-all duration-300"
                    onClick={closeMenu}
                  >
                    Applied Behavior Therapy
                  </Link>
                  <Link 
                    to="/courses/speech-language" 
                    className="block text-sm text-teal-200 hover:text-cyan-300 py-1.5 px-3 rounded-md hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-teal-500/10 transition-all duration-300"
                    onClick={closeMenu}
                  >
                    Speech & Language Pathology
                  </Link>
                  <Link 
                    to="/courses/mindfulness" 
                    className="block text-sm text-teal-200 hover:text-cyan-300 py-1.5 px-3 rounded-md hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-teal-500/10 transition-all duration-300"
                    onClick={closeMenu}
                  >
                    Mindfulness-Based Interventions
                  </Link>
                  <Link 
                    to="/courses/brain-gym" 
                    className="block text-sm text-teal-200 hover:text-cyan-300 py-1.5 px-3 rounded-md hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-teal-500/10 transition-all duration-300"
                    onClick={closeMenu}
                  >
                    Brain Gym & Neuro-Movement
                  </Link>
                  <Link 
                    to="/courses/Neuro-developmental" 
                    className="block text-sm text-teal-200 hover:text-cyan-300 py-1.5 px-3 rounded-md hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-teal-500/10 transition-all duration-300"
                    onClick={closeMenu}
                  >
                    Neurodevelopmental Rehabilitation
                  </Link>
                  <Link 
                    to="/courses/assistive tech" 
                    className="block text-sm text-teal-200 hover:text-cyan-300 py-1.5 px-3 rounded-md hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-teal-500/10 transition-all duration-300"
                    onClick={closeMenu}
                  >
                    Assistive Technology & Adaptive Therapy
                  </Link>
                </div>
              )}
            </li>
            {[
              { path: 'departments', label: 'Departments' },
              { path: 'certification', label: 'Other Programs' },
              { path: 'clinical-partners', label: 'Associate Partners' },
              { path: 'placements', label: 'Placements' },
              { path: 'gallery', label: 'Gallery' },
              { path: 'blog', label: 'Blog' },
              { path: 'admission', label: 'Admission' },
              { path: 'contact', label: 'Contact' },
            ].map(({ path, label }) => (
              <li key={path}>
                <Link 
                  to={`/${path}`} 
                  className="block text-teal-100 hover:text-cyan-200 py-2 px-3 rounded-lg hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-teal-500/10 transition-all duration-300"
                  onClick={closeMenu}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;