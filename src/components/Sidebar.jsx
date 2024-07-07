import React from 'react';
import '../css/Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/listings">Listings</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
