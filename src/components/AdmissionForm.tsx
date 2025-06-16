import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  course: string;
  education: string;
  dob: string;
  gender: string;
  address: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const AdmissionForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    course: '',
    education: '',
    dob: '',
    gender: '',
    address: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const courses = [
    { value: '', text: 'Select Course' },
    { value: 'dsit', text: 'Diploma in Sensory Integration Therapy (DSIT)' },
    { value: 'dabt', text: 'Diploma in Applied Behavior Therapy (DABT)' },
    { value: 'slpa', text: 'Diploma in Speech & Language Pathology Assistant (SLPA)' },
    { value: 'mbi', text: 'Diploma in Mindfulness-Based Interventions (MBI)' },
    { value: 'bgnt', text: 'Diploma in Brain Gym & Neuro-Movement Training' },
  ];

  const educationLevels = [
    { value: '', text: 'Select Education Level' },
    { value: 'high_school', text: 'High School' },
    { value: 'bachelors', text: 'Bachelor\'s Degree' },
    { value: 'masters', text: 'Master\'s Degree' },
    { value: 'phd', text: 'Ph.D.' },
    { value: 'others', text: 'Others' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is being typed in
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
      newErrors.phone = 'Phone number must be 10 digits';
    }
    
    if (!formData.course) {
      newErrors.course = 'Please select a course';
    }
    
    if (!formData.education) {
      newErrors.education = 'Education level is required';
    }
    
    if (!formData.dob) {
      newErrors.dob = 'Date of birth is required';
    }
    
    if (!formData.gender) {
      newErrors.gender = 'Please select gender';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setLoading(true);
      
      // Simulate form submission with a timeout
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          course: '',
          education: '',
          dob: '',
          gender: '',
          address: '',
          message: '',
        });
      }, 2000);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Application Submitted!</h3>
        <p className="text-gray-700 mb-6">
          Thank you for your interest in Dunmark Institute. Your application has been successfully submitted. Our admissions team will contact you within 2-3 business days.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 lg:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Full Name*
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter your full name"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
            Phone Number*
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter your phone number"
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="dob" className="block text-gray-700 font-medium mb-2">
            Date of Birth*
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.dob ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.dob && <p className="text-red-500 text-sm mt-1">{errors.dob}</p>}
        </div>

        <div>
          <label htmlFor="course" className="block text-gray-700 font-medium mb-2">
            Course of Interest*
          </label>
          <select
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.course ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            {courses.map(course => (
              <option key={course.value} value={course.value}>
                {course.text}
              </option>
            ))}
          </select>
          {errors.course && <p className="text-red-500 text-sm mt-1">{errors.course}</p>}
        </div>

        <div>
          <label htmlFor="education" className="block text-gray-700 font-medium mb-2">
            Highest Education*
          </label>
          <select
            id="education"
            name="education"
            value={formData.education}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.education ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            {educationLevels.map(level => (
              <option key={level.value} value={level.value}>
                {level.text}
              </option>
            ))}
          </select>
          {errors.education && <p className="text-red-500 text-sm mt-1">{errors.education}</p>}
        </div>

        <div>
          <label htmlFor="gender" className="block text-gray-700 font-medium mb-2">
            Gender*
          </label>
          <div className="flex space-x-4 mt-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleChange}
                className="form-radio h-4 w-4 text-blue-600"
              />
              <span className="ml-2 text-gray-700">Male</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleChange}
                className="form-radio h-4 w-4 text-blue-600"
              />
              <span className="ml-2 text-gray-700">Female</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="gender"
                value="other"
                checked={formData.gender === 'other'}
                onChange={handleChange}
                className="form-radio h-4 w-4 text-blue-600"
              />
              <span className="ml-2 text-gray-700">Other</span>
            </label>
          </div>
          {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
        </div>

        <div className="md:col-span-2">
          <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your address"
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
            Why are you interested in this course?
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Tell us a bit about your interest in this program..."
          ></textarea>
        </div>
      </div>

      <div className="mt-8">
        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-blue-600 text-white py-3 rounded-lg font-semibold ${
            loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700'
          } transition-colors`}
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : (
            'Submit Application'
          )}
        </button>
      </div>

      <p className="text-gray-600 text-sm mt-4 text-center">
        By submitting this form, you agree to our Terms of Service and Privacy Policy.
      </p>
    </form>
  );
};

export default AdmissionForm;