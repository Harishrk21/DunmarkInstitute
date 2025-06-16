import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseSensory from './pages/courses/CourseSensory';
import CourseBehavior from './pages/courses/CourseBehavior';
import CourseSpeech from './pages/courses/CourseSpeech';
import CourseMindfulness from './pages/courses/CourseMindfulness';
import CourseBrainGym from './pages/courses/CourseBrainGym';
import Departments from './pages/Departments';
import Achievements from './pages/Achievements';
// import Faculty from './pages/Faculty';
import Placements from './pages/Placements';
import Gallery from './pages/Gallery';
import Admission from './pages/Admission';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import About from './components/About';
import CampusFacilities from './pages/CampusFacilities';
import ClinicalPartners from './pages/ClinicalPartners';
import Blog from './pages/Blog';
import CertificationPrograms from './pages/courses/CertificationPrograms';
import CourseNeurodevelopmental from './pages/courses/CourseNeurodevelopmental';
import CourseAssistiveTech from './pages/courses/CourseAssistiveTech';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/sensory-integration" element={<CourseSensory />} />
            <Route path="/courses/applied-behavior" element={<CourseBehavior />} />
            <Route path="/courses/speech-language" element={<CourseSpeech />} />
            <Route path="/courses/mindfulness" element={<CourseMindfulness />} />
            <Route path="/courses/brain-gym" element={<CourseBrainGym />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/achievements" element={<Achievements />} />
            {/* <Route path="/faculty" element={<Faculty />} /> */}
            <Route path="/placements" element={<Placements />} />
            
            <Route path="/admission" element={<Admission />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/campus" element={<CampusFacilities />} />
            <Route path="/Clinical-Partners" element={<ClinicalPartners />} />
             <Route path="/Blog" element={<Blog />} />
               <Route path="/certification" element={<CertificationPrograms />} />
              <Route path="/courses/neuro-developmental" element={<CourseNeurodevelopmental />} />
              <Route path="/courses/assistive tech" element={<CourseAssistiveTech/>}/>
          </Routes>

        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;