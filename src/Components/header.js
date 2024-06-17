// Header.js

import React from 'react';
import '../css/header.css'; 

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><a href="www.google.com" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="www.google.com" className="nav-link">Pratice</a></li>
          <li className="nav-item"><a href="www.google.com" className="nav-link">Profile</a></li>
          <li className="nav-item"><a href="www.google.com" className="nav-link">Contact me</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
