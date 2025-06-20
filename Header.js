// components/Header.js
import React, { useState } from 'react';
import '../App.css';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
    { name: 'Projects', href: '#projects' },
  ];

  const filteredLinks = navLinks.filter(link =>
    link.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">My Portfolio</div>

        <input
          type="text"
          placeholder="Search section..."
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <nav className="nav">
          {(searchTerm ? filteredLinks : navLinks).map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
