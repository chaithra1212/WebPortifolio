// src/components/Home.js
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import avatar1 from '../assets/images/avatar1.png';

const Home = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi There,<br />I'm <span className="highlight">M Chaithra</span></h1>
          <p>I am Into Web Development!</p>
          <button className="about-btn">About Me</button>

          <div className="social-icons">
            <a href="https://github.com/chaithra1212" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/chaithra22/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src={avatar1} alt="Avatar" />
        </div>
      </div>
    </section>
  );
};

export default Home;
