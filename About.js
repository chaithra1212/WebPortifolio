// components/About.js
import React from 'react';
import '../App.css'; // Ensure styles are applied here

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <p>
            Hello! I'm <strong>M Chaithra</strong>, a passionate and creative web developer with a strong foundation in front-end technologies. I enjoy building responsive and user-friendly websites that provide a great user experience.
          </p>
          <p>
            I’m currently expanding my skills in full-stack development, focusing on frameworks like React, Node.js, and databases like MySQL and MongoDB. My goal is to solve real-world problems with clean, efficient, and scalable code.
          </p>
          <p>
            When I'm not coding, you’ll find me exploring design trends, watching tech talks, or sketching UI ideas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
