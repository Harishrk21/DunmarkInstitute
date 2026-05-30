import React from 'react';
import logo from '../assets/logo1.png';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center justify-start">
      <img
        src={logo}
        alt="Dunmark Institute of Medical Sciences Logo"
        className="h-20 w-auto"
      />
    </div>
  );
};

export default Logo;