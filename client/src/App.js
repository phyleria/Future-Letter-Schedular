import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import WriteLetter from './components/WriteLetter';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/write" element={<WriteLetter />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
