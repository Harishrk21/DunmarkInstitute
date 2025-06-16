import React, { useState } from 'react';
import { Eye, Filter, X } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    // Classroom Teaching
    {
      id: 1,
      src: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Interactive Classroom Session',
      category: 'Classroom Teaching'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/5427673/pexels-photo-5427673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Occupational Therapy Lecture',
      category: 'Classroom Teaching'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/5428003/pexels-photo-5428003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Psychology Classroom Discussion',
      category: 'Classroom Teaching'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Anatomy and Physiology Class',
      category: 'Classroom Teaching'
    },

    // Therapy Sessions
    {
      id: 5,
      src: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Pediatric Occupational Therapy',
      category: 'Therapy Sessions'
    },
    {
      id: 6,
      src: 'https://media.istockphoto.com/id/1398180813/photo/little-girl-on-a-video-call-with-her-teacher-using-a-laptop-young-female-teacher-doing-a.webp?a=1&b=1&s=612x612&w=0&k=20&c=2sOUBQA1-nv9IbOcEAp4aCXk3251vPDPtitOyWpng-w=',
      alt: 'Speech Therapy Session',
      category: 'Therapy Sessions'
    },
    {
      id: 7,
      src: 'https://media.istockphoto.com/id/1152836721/photo/smiling-woman-during-consultation-with-life-coach.webp?a=1&b=1&s=612x612&w=0&k=20&c=G5RFRshg47RW62XnRN-l5G5g24hERZT4c9LcWipwgao=',
      alt: 'Individual Therapy Session',
      category: 'Therapy Sessions'
    },
    {
      id: 8,
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR5R9avKpUf0SvlfqZw0Swjyt-J5r9FlZYRw&s',
      alt: 'Behavioral Therapy Practice',
      category: 'Therapy Sessions'
    },

    // Student Events
    {
      id: 9,
      src: 'https://news.subharti.org/wp-content/uploads/2022/07/news-templete-11.jpg',
      alt: 'Student Workshop Event',
      category: 'Student Events'
    },
    {
      id: 10,
      src: 'https://ww1.prweb.com/prfiles/2017/03/15/14154576/Adam%20and%20largar%20audience%2060.jpg',
      alt: 'Annual Student Conference',
      category: 'Student Events'
    },
    {
      id: 11,
      src: 'https://mobility-india.org/wp-content/uploads/2024/03/Photo-15-1024x622.webp',
      alt: 'Graduation Ceremony',
      category: 'Student Events'
    },
    {
      id: 12,
      src: 'https://chhs.unh.edu/sites/default/files/styles/max_width_480px/public/blog/thumbs/2022/csd-ot-blog.png?itok=I6AcIjCX',
      alt: 'Student Project Presentation',
      category: 'Student Events'
    },

    // Clinical Labs
    {
      id: 13,
      src: 'data:image/jpeg;base64,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',
      alt: 'Modern Clinical Laboratory',
      category: 'Clinical Labs'
    },
    {
      id: 14,
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlh5-cEIZxDdmugdVB1B9r9bVaSuDk1sSZ5A&s',
      alt: 'Sensory Integration Lab',
      category: 'Clinical Labs'
    },
    {
      id: 15,
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTytEDFv32N1O2vpaQRnaBjnzD048-0tT5EHw&s',
      alt: 'Rehabilitation Equipment Lab',
      category: 'Clinical Labs'
    },
    {
      id: 16,
      src: 'https://images.pexels.com/photos/3259624/pexels-photo-3259624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Assessment and Evaluation Lab',
      category: 'Clinical Labs'
    },

    // Campus Environment
    {
      id: 17,
      src: 'https://plus.unsplash.com/premium_photo-1724026586430-c26dd10098fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRoZXJhcHklMjBjYW1wdXN8ZW58MHx8MHx8fDA%3D',
      alt: 'Main Campus Building',
      category: 'Campus Environment'
    },
    {
      id: 18,
      src: 'https://images.unsplash.com/photo-1623156167557-281309073eef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FtcHVzJTIwbGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D',
      alt: 'Campus Library',
      category: 'Campus Environment'
    },
    {
      id: 19,
      src: 'https://media.istockphoto.com/id/1456729829/photo/young-friends-taking-a-break-between-college-classes.webp?a=1&b=1&s=612x612&w=0&k=20&c=DCeiuiOWcPEYiNFc9qIBvUzytCx1jxdAlVS9ap1W-Ns=',
      alt: 'Academic Building Exterior',
      category: 'Campus Environment'
    },
    {
      id: 20,
      src: 'https://plus.unsplash.com/premium_photo-1663047405531-3454f1c4d566?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3V0ZG9vciUyMGNhbXB1cyUyMGdhcmRlbnxlbnwwfHwwfHx8MA%3D%3D',
      alt: 'Outdoor Campus Gardens',
      category: 'Campus Environment'
    }
  ];

  const categories = ['All', 'Classroom Teaching', 'Therapy Sessions', 'Student Events', 'Clinical Labs', 'Campus Environment'];

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-emerald-50">
      {/* Header with Peacock Gradient */}
      <div className="bg-gradient-to-r from-blue-900 via-teal-800 to-emerald-900 text-white py-24 pt-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-teal-500/10 to-emerald-400/10"></div>
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <div className="flex items-center justify-center mb-6">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-200 to-emerald-200 bg-clip-text text-transparent">
              Gallery
            </h1>
          </div>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
             Explore the vibrant tapestry of life at Dunmark Institute through our visual journey - 
            from dynamic classrooms to cutting-edge therapy sessions
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="py-12 bg-gradient-to-r from-white to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <Filter className="w-6 h-6 text-teal-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-800">Filter by Category</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border-2 border-teal-200 hover:border-teal-400 hover:bg-teal-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              {selectedCategory === 'All' ? 'Complete Visual Journey' : selectedCategory}
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the excellence and innovation that defines our institute through these carefully captured moments
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer bg-gradient-to-br from-white to-cyan-50"
                onClick={() => openModal(image)}
              >
                <div className="aspect-w-4 aspect-h-3 relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-gradient-to-r from-cyan-400 to-teal-500 p-3 rounded-full shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      {/* <Eye className="w-6 h-6 text-white" /> */}
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800 mb-2 group-hover:text-teal-700 transition-colors duration-300">
                    {image.alt}
                  </h4>
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-teal-100 to-emerald-100 text-teal-700 text-sm rounded-full font-medium">
                    {image.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div className="max-w-4xl max-h-full relative">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-cyan-400 transition-colors duration-300"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white text-xl font-semibold mb-2">{selectedImage.alt}</h3>
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-400/80 to-teal-500/80 text-white text-sm rounded-full">
                {selectedImage.category}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;