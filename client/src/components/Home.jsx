import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl font-light text-gray-900 mb-6">
          Write to your future self
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Send yourself a message to read later. 
          What would you like to tell your future self?
        </p>
        <button
          onClick={() => navigate('/write')}
          className="text-white px-8 py-3 rounded transition-colors hover:opacity-90"
          style={{ backgroundColor: '#EB8214' }}        >
          Write a letter
        </button>
      </div>
    </div>
  );
};

export default Home;