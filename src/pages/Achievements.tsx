import React from 'react';
import { Award, Calendar, Trophy, Star } from 'lucide-react';

const Achievements: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Achievements</h1>
          <p className="text-xl text-blue-100">
            Celebrating excellence in healthcare education and professional development
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-800 mb-12 text-center">Milestones & Recognition</h2>
          
          <div className="space-y-8">
            {/* 2024 */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-1/4">
                <div className="bg-blue-600 text-white p-4 rounded-lg text-center">
                  <Calendar className="mx-auto mb-2" />
                  <h3 className="text-xl font-semibold">2024</h3>
                </div>
              </div>
              <div className="md:w-3/4 space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <Trophy className="text-blue-600 mb-2" />
                  <h4 className="text-lg font-semibold text-blue-800">NABH Accreditation Achievement</h4>
                  <p className="text-gray-600">Received prestigious NABH accreditation for maintaining highest standards in healthcare education.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <Star className="text-blue-600 mb-2" />
                  <h4 className="text-lg font-semibold text-blue-800">100% Placement Record</h4>
                  <p className="text-gray-600">Achieved complete placement for all graduating students across various healthcare institutions.</p>
                </div>
              </div>
            </div>

            {/* 2023 */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-1/4">
                <div className="bg-blue-600 text-white p-4 rounded-lg text-center">
                  <Calendar className="mx-auto mb-2" />
                  <h3 className="text-xl font-semibold">2023</h3>
                </div>
              </div>
              <div className="md:w-3/4 space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <Award className="text-blue-600 mb-2" />
                  <h4 className="text-lg font-semibold text-blue-800">Best Healthcare Education Institute Award</h4>
                  <p className="text-gray-600">Recognized as the leading institute for specialized healthcare education by the Healthcare Education Council.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <Star className="text-blue-600 mb-2" />
                  <h4 className="text-lg font-semibold text-blue-800">Research Excellence</h4>
                  <p className="text-gray-600">Published 15 research papers in international journals on various therapeutic approaches.</p>
                </div>
              </div>
            </div>

            {/* 2022 */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-1/4">
                <div className="bg-blue-600 text-white p-4 rounded-lg text-center">
                  <Calendar className="mx-auto mb-2" />
                  <h3 className="text-xl font-semibold">2022</h3>
                </div>
              </div>
              <div className="md:w-3/4 space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <Trophy className="text-blue-600 mb-2" />
                  <h4 className="text-lg font-semibold text-blue-800">International Collaboration</h4>
                  <p className="text-gray-600">Established partnerships with leading international institutes for student exchange programs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Certifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-800 mb-12 text-center">Awards & Certifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <Award className="text-blue-600 mb-4 mx-auto" size={48} />
              <h3 className="text-xl font-semibold text-blue-800 mb-2 text-center">ISO 9001:2015 Certification</h3>
              <p className="text-gray-600 text-center">For maintaining international standards in educational services</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <Trophy className="text-blue-600 mb-4 mx-auto" size={48} />
              <h3 className="text-xl font-semibold text-blue-800 mb-2 text-center">Excellence in Healthcare Education</h3>
              <p className="text-gray-600 text-center">Awarded by the National Health Education Council</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <Star className="text-blue-600 mb-4 mx-auto" size={48} />
              <h3 className="text-xl font-semibold text-blue-800 mb-2 text-center">5-Star Rating</h3>
              <p className="text-gray-600 text-center">By the Healthcare Education Accreditation Board</p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-800 mb-12 text-center">Student Achievements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Research Publications</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Star className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-medium">Innovation in Sensory Integration Therapy</p>
                    <p className="text-gray-600">Published in International Journal of Therapy Sciences</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Star className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-medium">Modern Approaches in Behavioral Therapy</p>
                    <p className="text-gray-600">Featured in Healthcare Innovation Quarterly</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Competition Winners</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Trophy className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-medium">National Healthcare Innovation Challenge 2023</p>
                    <p className="text-gray-600">First Prize in Therapy Innovation Category</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Trophy className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-medium">International Therapy Conference 2023</p>
                    <p className="text-gray-600">Best Research Presentation Award</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Achievements;