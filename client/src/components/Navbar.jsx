import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-medium text-gray-900">
          FutureLetter
        </Link>
        <div className="flex space-x-8">
          <Link 
            to="/" 
            className={`${location.pathname === '/' ? 'text-gray-900' : 'text-gray-500'} hover:text-gray-900 transition-colors`}
          >
            Home
          </Link>
          <Link 
            to="/write" 
            className={`${location.pathname === '/write' ? 'text-gray-900' : 'text-gray-500'} hover:text-gray-900 transition-colors`}
          >
            Write
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;