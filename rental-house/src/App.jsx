import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LanguageSwitcher from './components/LanguageSwitcher';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Listings from './pages/Listings';
import Contact from './pages/Contact';
import './App.css';


const App = () => {
  return (
    <Router>
      <div id="app">
        <Navbar />
       
        <div className="main-content">
          <Sidebar />
          <LanguageSwitcher />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/listings" element={<Listings />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
