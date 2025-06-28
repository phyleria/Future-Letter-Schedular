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
          What would you want to remember?
        </p>
        <button
          onClick={() => navigate('/write')}
          className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition-colors"
        >
          Write a letter
        </button>
      </div>
    </div>
  );
};

export default Home;