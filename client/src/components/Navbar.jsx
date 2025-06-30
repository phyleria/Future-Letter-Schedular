import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <Link to="/"
          className="text-xl font-medium"
          style={{ color: '#147DEB' }}
        >
          FutureLetter
        </Link>
        <div className="flex space-x-6">
          <Link
            to="/"
            className={`hover:opacity-80 transition-colors`}
            style={{
              color: location.pathname === '/' ? '#147DEB' : '#147DEB'
            }}
          >
            Home
          </Link>
          <Link
            to="/write"
            className={`hover:opacity-80 transition-colors`}
            style={{
              color: location.pathname === '/write' ? '#147DEB' : '#147DEB'
            }}
          >
            Write
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;