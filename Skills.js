// components/Skills.js
import React from 'react';
import {
  FaReact,
  FaJsSquare,
  FaCss3Alt,
  FaHtml5,
  FaJava,
} from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';
import { DiGoogleAnalytics } from 'react-icons/di';

const Skills = () => {
  const skills = [
    { name: 'React', icon: <FaReact color="#61DBFB" /> },
    { name: 'JavaScript', icon: <FaJsSquare color="#F7DF1E" /> },
    { name: 'CSS', icon: <FaCss3Alt color="#264de4" /> },
    { name: 'HTML', icon: <FaHtml5 color="#e34c26" /> },
    { name: 'Java', icon: <FaJava color="#f89820" /> },
    { name: 'SQL', icon: <SiMysql color="#00758f" /> },
    { name: 'DSA', icon: <DiGoogleAnalytics color="#673ab7" /> },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
