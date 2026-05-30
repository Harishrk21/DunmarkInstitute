import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Award } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [courseDropdownOpen, setCourseDropdownOpen] = useState(false);
  const [academicDropdownOpen, setAcademicDropdownOpen] = useState(false);
  const [communityDropdownOpen, setCommunityDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleCourseDropdown = () => {
    setCourseDropdownOpen(!courseDropdownOpen);
  };

  const toggleAcademicDropdown = () => {
    setAcademicDropdownOpen(!academicDropdownOpen);
  };

  const toggleCommunityDropdown = () => {
    setCommunityDropdownOpen(!communityDropdownOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setCourseDropdownOpen(false);
    setAcademicDropdownOpen(false);
    setCommunityDropdownOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-950/85 backdrop-blur-lg border-b border-white/5 shadow-xl shadow-black/20 py-2' 
        : 'bg-slate-950/40 backdrop-blur-md border-b border-white/5 py-3'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center lg:grid lg:grid-cols-12 lg:gap-4 lg:items-center">
          
          {/* Logo & Branding - Left column */}
          <div className="lg:col-span-3 flex justify-start z-50">
            <Link to="/" className="flex items-center group">
              <div className="transform group-hover:scale-105 transition-all duration-300 flex items-center justify-start bg-white/5 p-1.5 rounded-xl border border-white/10 backdrop-blur-sm shadow-md">
                <Logo />
              </div>
              <div className="ml-3">
                <h1 className="text-sm xl:text-base font-extrabold leading-tight text-white tracking-wide group-hover:text-cyan-300 transition-colors duration-300">
                  DUNMARK
                </h1>
                <p className="text-[9px] xl:text-[10px] font-medium text-cyan-400/90 tracking-widest uppercase">
                  Medical Science
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Mathematically Centered */}
          <nav className="hidden lg:flex lg:col-span-6 justify-center items-center">
            <ul className="flex space-x-1 xl:space-x-2 items-center">
              {/* Home */}
              <li>
                <Link
                  to="/"
                  className={`text-xs xl:text-sm font-semibold transition-all duration-200 px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 ${
                    location.pathname === '/' 
                      ? 'text-cyan-400 bg-white/5' 
                      : 'text-slate-300'
                  }`}
                >
                  Home
                </Link>
              </li>

              {/* About */}
              <li>
                <Link
                  to="/about"
                  className={`text-xs xl:text-sm font-semibold transition-all duration-200 px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 ${
                    location.pathname === '/about' 
                      ? 'text-cyan-400 bg-white/5' 
                      : 'text-slate-300'
                  }`}
                >
                  About
                </Link>
              </li>

              {/* Courses Dropdown */}
              <li className="relative group">
                <button
                  className={`flex items-center text-xs xl:text-sm font-semibold transition-all duration-200 px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 focus:outline-none ${
                    location.pathname.includes('/courses') 
                      ? 'text-cyan-400 bg-white/5' 
                      : 'text-slate-300'
                  }`}
                >
                  Courses
                  <ChevronDown 
                    size={14} 
                    className="ml-1 transition-transform duration-300 group-hover:rotate-180 text-slate-400" 
                  />
                </button>
                <div className="absolute left-0 mt-1 w-64 bg-slate-950/95 backdrop-blur-2xl rounded-xl shadow-2xl shadow-black/60 py-2 z-50 border border-white/10 hidden group-hover:block transition-all duration-300">
                  <div className="space-y-0.5 px-1.5">
                    <Link 
                      to="/courses" 
                      className="block px-3 py-2 text-xs xl:text-sm font-medium text-slate-300 hover:text-cyan-300 hover:bg-white/5 rounded-lg transition-all duration-200"
                    >
                      All Courses
                    </Link>
                    <div className="h-px bg-white/5 my-1 mx-2"></div>
                    <Link 
                      to="/courses/sensory-integration" 
                      className="block px-3 py-2 text-xs xl:text-sm text-slate-400 hover:text-cyan-300 hover:bg-white/5 rounded-lg transition-all duration-200"
                    >
                      Sensory Integration Therapy
                    </Link>
                    <Link 
                      to="/courses/applied-behavior" 
                      className="block px-3 py-2 text-xs xl:text-sm text-slate-400 hover:text-cyan-300 hover:bg-white/5 rounded-lg transition-all duration-200"
                    >
                      Applied Behavior Therapy
                    </Link>
                    <Link 
                      to="/courses/speech-language" 
                      className="block px-3 py-2 text-xs xl:text-sm text-slate-400 hover:text-cyan-300 hover:bg-white/5 rounded-lg transition-all duration-200"
                    >
                      Speech & Language Pathology
                    </Link>
                    <Link 
                      to="/courses/mindfulness" 
                      className="block px-3 py-2 text-xs xl:text-sm text-slate-400 hover:text-cyan-300 hover:bg-white/5 rounded-lg transition-all duration-200"
                    >
                      Mindfulness-Based Interventions
                    </Link>
                    <Link 
                      to="/courses/brain-gym" 
                      className="block px-3 py-2 text-xs xl:text-sm text-slate-400 hover:text-cyan-300 hover:bg-white/5 rounded-lg transition-all duration-200"
                    >
                      Brain Gym & Neuro-Movement
                    </Link>
                    <Link 
                      to="/courses/Neuro-developmental" 
                      className="block px-3 py-2 text-xs xl:text-sm text-slate-400 hover:text-cyan-300 hover:bg-white/5 rounded-lg transition-all duration-200"
                    >
                      Neurodevelopmental Rehab
                    </Link>
                    <Link 
                      to="/courses/assistive tech" 
                      className="block px-3 py-2 text-xs xl:text-sm text-slate-400 hover:text-cyan-300 hover:bg-white/5 rounded-lg transition-all duration-200"
                    >
                      Assistive Technology
                    </Link>
                  </div>
                </div>
              </li>

              {/* Academic Dropdown */}
              <li className="relative group">
                <button
                  className={`flex items-center text-xs xl:text-sm font-semibold transition-all duration-200 px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 focus:outline-none ${
                    location.pathname === '/departments' || location.pathname === '/placements' || location.pathname === '/certification'
                      ? 'text-cyan-400 bg-white/5' 
                      : 'text-slate-300'
                  }`}
                >
                  Academics
                  <ChevronDown 
                    size={14} 
                    className="ml-1 transition-transform duration-300 group-hover:rotate-180 text-slate-400" 
                  />
                </button>
                <div className="absolute left-0 mt-1 w-56 bg-slate-950/95 backdrop-blur-2xl rounded-xl shadow-2xl shadow-black/60 py-2 z-50 border border-white/10 hidden group-hover:block transition-all duration-300">
                  <div className="space-y-0.5 px-1.5">
                    <Link 
                      to="/departments" 
                      className="block px-3 py-2 text-xs xl:text-sm text-slate-300 hover:text-cyan-300 hover:bg-white/5 rounded-lg transition-all duration-200"
                    >
                      Departments
                    </Link>
                    <Link 
                      to="/placements" 
                      className="block px-3 py-2 text-xs xl:text-sm text-slate-300 hover:text-cyan-300 hover:bg-white/5 rounded-lg transition-all duration-200"
                    >
                      Placement Cell
                    </Link>
                    <Link 
                      to="/certification" 
                      className="block px-3 py-2 text-xs xl:text-sm text-slate-300 hover:text-cyan-300 hover:bg-white/5 rounded-lg transition-all duration-200"
                    >
                      Other Programs
                    </Link>
                  </div>
                </div>
              </li>

              {/* Campus Dropdown */}
              <li className="relative group">
                <button
                  className={`flex items-center text-xs xl:text-sm font-semibold transition-all duration-200 px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 focus:outline-none ${
                    location.pathname === '/clinical-partners' || location.pathname === '/campus' || location.pathname === '/gallery' || location.pathname === '/blog'
                      ? 'text-cyan-400 bg-white/5' 
                      : 'text-slate-300'
                  }`}
                >
                  Campus
                  <ChevronDown 
                    size={14} 
                    className="ml-1 transition-transform duration-300 group-hover:rotate-180 text-slate-400" 
                  />
                </button>
                <div className="absolute left-0 mt-1 w-56 bg-slate-950/95 backdrop-blur-2xl rounded-xl shadow-2xl shadow-black/60 py-2 z-50 border border-white/10 hidden group-hover:block transition-all duration-300">
                  <div className="space-y-0.5 px-1.5">
                    <Link 
                      to="/campus" 
                      className="block px-3 py-2 text-xs xl:text-sm text-slate-300 hover:text-cyan-300 hover:bg-white/5 rounded-lg transition-all duration-200"
                    >
                      Campus Facilities
                    </Link>
                    <Link 
                      to="/clinical-partners" 
                      className="block px-3 py-2 text-xs xl:text-sm text-slate-300 hover:text-cyan-300 hover:bg-white/5 rounded-lg transition-all duration-200"
                    >
                      Associate Partners
                    </Link>
                    <Link 
                      to="/gallery" 
                      className="block px-3 py-2 text-xs xl:text-sm text-slate-300 hover:text-cyan-300 hover:bg-white/5 rounded-lg transition-all duration-200"
                    >
                      Gallery
                    </Link>
                    <Link 
                      to="/blog" 
                      className="block px-3 py-2 text-xs xl:text-sm text-slate-300 hover:text-cyan-300 hover:bg-white/5 rounded-lg transition-all duration-200"
                    >
                      Blog
                    </Link>
                  </div>
                </div>
              </li>

              {/* Contact */}
              <li>
                <Link
                  to="/contact"
                  className={`text-xs xl:text-sm font-semibold transition-all duration-200 px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 ${
                    location.pathname === '/contact' 
                      ? 'text-cyan-400 bg-white/5' 
                      : 'text-slate-300'
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Action Column - Right column */}
          <div className="lg:col-span-3 flex justify-end items-center z-50 space-x-4">
            {/* Desktop CTA Button */}
            <Link 
              to="/admission" 
              className="hidden lg:inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-bold text-xs xl:text-sm px-5 py-2.5 rounded-full shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20 hover:scale-[1.03] transition-all duration-300"
            >
              <Award size={14} className="mr-1.5" />
              Apply Now
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button 
              className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-200 focus:outline-none" 
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isOpen ? 
                <X size={20} className="text-cyan-300" /> : 
                <Menu size={20} className="text-cyan-300" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-slate-950/95 backdrop-blur-2xl shadow-2xl border-t border-white/5 max-h-[85vh] overflow-y-auto mt-2">
          <ul className="relative px-4 py-6 space-y-2.5 z-10">
            {/* Home */}
            <li>
              <Link 
                to="/" 
                className="block text-slate-200 hover:text-cyan-300 py-2.5 px-4 rounded-xl hover:bg-white/5 transition-all duration-200 font-semibold"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>

            {/* About */}
            <li>
              <Link 
                to="/about" 
                className="block text-slate-200 hover:text-cyan-300 py-2.5 px-4 rounded-xl hover:bg-white/5 transition-all duration-200 font-semibold"
                onClick={closeMenu}
              >
                About Us
              </Link>
            </li>

            {/* Courses Accordion */}
            <li>
              <button 
                className="flex items-center justify-between w-full text-slate-200 hover:text-cyan-300 py-2.5 px-4 rounded-xl hover:bg-white/5 transition-all duration-200 font-semibold focus:outline-none" 
                onClick={toggleCourseDropdown}
              >
                <span>Courses</span>
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-300 ${courseDropdownOpen ? 'rotate-180 text-cyan-300' : 'text-slate-400'}`} 
                />
              </button>
              {courseDropdownOpen && (
                <div className="pl-4 mt-1.5 space-y-1 border-l-2 border-cyan-500/30 ml-4">
                  <Link 
                    to="/courses" 
                    className="block text-sm text-slate-300 hover:text-cyan-300 py-2 px-3 rounded-lg hover:bg-white/5 transition-all duration-200"
                    onClick={closeMenu}
                  >
                    All Courses
                  </Link>
                  <Link 
                    to="/courses/sensory-integration" 
                    className="block text-sm text-slate-400 hover:text-cyan-300 py-2 px-3 rounded-lg hover:bg-white/5 transition-all duration-200"
                    onClick={closeMenu}
                  >
                    Sensory Integration Therapy
                  </Link>
                  <Link 
                    to="/courses/applied-behavior" 
                    className="block text-sm text-slate-400 hover:text-cyan-300 py-2 px-3 rounded-lg hover:bg-white/5 transition-all duration-200"
                    onClick={closeMenu}
                  >
                    Applied Behavior Therapy
                  </Link>
                  <Link 
                    to="/courses/speech-language" 
                    className="block text-sm text-slate-400 hover:text-cyan-300 py-2 px-3 rounded-lg hover:bg-white/5 transition-all duration-200"
                    onClick={closeMenu}
                  >
                    Speech & Language Pathology
                  </Link>
                  <Link 
                    to="/courses/mindfulness" 
                    className="block text-sm text-slate-400 hover:text-cyan-300 py-2 px-3 rounded-lg hover:bg-white/5 transition-all duration-200"
                    onClick={closeMenu}
                  >
                    Mindfulness-Based Interventions
                  </Link>
                  <Link 
                    to="/courses/brain-gym" 
                    className="block text-sm text-slate-400 hover:text-cyan-300 py-2 px-3 rounded-lg hover:bg-white/5 transition-all duration-200"
                    onClick={closeMenu}
                  >
                    Brain Gym & Neuro-Movement
                  </Link>
                  <Link 
                    to="/courses/Neuro-developmental" 
                    className="block text-sm text-slate-400 hover:text-cyan-300 py-2 px-3 rounded-lg hover:bg-white/5 transition-all duration-200"
                    onClick={closeMenu}
                  >
                    Neurodevelopmental Rehab
                  </Link>
                  <Link 
                    to="/courses/assistive tech" 
                    className="block text-sm text-slate-400 hover:text-cyan-300 py-2 px-3 rounded-lg hover:bg-white/5 transition-all duration-200"
                    onClick={closeMenu}
                  >
                    Assistive Technology
                  </Link>
                </div>
              )}
            </li>

            {/* Academics Accordion */}
            <li>
              <button 
                className="flex items-center justify-between w-full text-slate-200 hover:text-cyan-300 py-2.5 px-4 rounded-xl hover:bg-white/5 transition-all duration-200 font-semibold focus:outline-none" 
                onClick={toggleAcademicDropdown}
              >
                <span>Academics</span>
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-300 ${academicDropdownOpen ? 'rotate-180 text-cyan-300' : 'text-slate-400'}`} 
                />
              </button>
              {academicDropdownOpen && (
                <div className="pl-4 mt-1.5 space-y-1 border-l-2 border-cyan-500/30 ml-4">
                  <Link 
                    to="/departments" 
                    className="block text-sm text-slate-300 hover:text-cyan-300 py-2 px-3 rounded-lg hover:bg-white/5 transition-all duration-200"
                    onClick={closeMenu}
                  >
                    Departments
                  </Link>
                  <Link 
                    to="/placements" 
                    className="block text-sm text-slate-300 hover:text-cyan-300 py-2 px-3 rounded-lg hover:bg-white/5 transition-all duration-200"
                    onClick={closeMenu}
                  >
                    Placement Cell
                  </Link>
                  <Link 
                    to="/certification" 
                    className="block text-sm text-slate-300 hover:text-cyan-300 py-2 px-3 rounded-lg hover:bg-white/5 transition-all duration-200"
                    onClick={closeMenu}
                  >
                    Other Programs
                  </Link>
                </div>
              )}
            </li>

            {/* Campus Accordion */}
            <li>
              <button 
                className="flex items-center justify-between w-full text-slate-200 hover:text-cyan-300 py-2.5 px-4 rounded-xl hover:bg-white/5 transition-all duration-200 font-semibold focus:outline-none" 
                onClick={toggleCommunityDropdown}
              >
                <span>Campus</span>
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-300 ${communityDropdownOpen ? 'rotate-180 text-cyan-300' : 'text-slate-400'}`} 
                />
              </button>
              {communityDropdownOpen && (
                <div className="pl-4 mt-1.5 space-y-1 border-l-2 border-cyan-500/30 ml-4">
                  <Link 
                    to="/campus" 
                    className="block text-sm text-slate-300 hover:text-cyan-300 py-2 px-3 rounded-lg hover:bg-white/5 transition-all duration-200"
                    onClick={closeMenu}
                  >
                    Campus Facilities
                  </Link>
                  <Link 
                    to="/clinical-partners" 
                    className="block text-sm text-slate-300 hover:text-cyan-300 py-2 px-3 rounded-lg hover:bg-white/5 transition-all duration-200"
                    onClick={closeMenu}
                  >
                    Associate Partners
                  </Link>
                  <Link 
                    to="/gallery" 
                    className="block text-sm text-slate-300 hover:text-cyan-300 py-2 px-3 rounded-lg hover:bg-white/5 transition-all duration-200"
                    onClick={closeMenu}
                  >
                    Gallery
                  </Link>
                  <Link 
                    to="/blog" 
                    className="block text-sm text-slate-300 hover:text-cyan-300 py-2 px-3 rounded-lg hover:bg-white/5 transition-all duration-200"
                    onClick={closeMenu}
                  >
                    Blog
                  </Link>
                </div>
              )}
            </li>

            {/* Contact */}
            <li>
              <Link 
                to="/contact" 
                className="block text-slate-200 hover:text-cyan-300 py-2.5 px-4 rounded-xl hover:bg-white/5 transition-all duration-200 font-semibold"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>

            {/* Mobile CTA */}
            <li className="pt-4">
              <Link 
                to="/admission" 
                className="flex items-center justify-center bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-bold py-3 px-4 rounded-xl shadow-lg transition-all duration-200 text-center"
                onClick={closeMenu}
              >
                <Award size={16} className="mr-1.5" />
                Apply Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;