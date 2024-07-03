// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold"><Link to="/">Kumuang Properties</Link></h1>
        <nav>
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/properties" className="mr-4">Properties</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
