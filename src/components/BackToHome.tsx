import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const BackToHome: React.FC = () => {
  return (
    <Link 
      to="/"
      className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
      aria-label="Back to Home"
    >
      <Home className="w-6 h-6" />
    </Link>
  );
};

export default BackToHome;