import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Features from './pages/Features';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/features" element={<Features />} />
        </Routes>
    </div>
  );
}

export default App;
