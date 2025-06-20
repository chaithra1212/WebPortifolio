// src/components/Projects.js

import React from 'react';
import '../App.css';
const Projects = () => {
  const projectList = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website built using React and CSS.",
      link: "https://yourportfolio.com"
    },
    {
      title: "To-Do App",
      description: "A basic to-do list app with React hooks.",
      link: "https://github.com/yourusername/todo-app"
    },
    {
      title: "Weather App",
      description: "A weather forecast app using OpenWeather API and React.",
      link: "https://github.com/yourusername/weather-app"
    }
  ];

  return (
    <section id="projects" style={styles.section}>
      <h2 style={styles.heading}>My Projects</h2>
      <div style={styles.projectGrid}>
        {projectList.map((project, index) => (
          <div key={index} style={styles.projectCard}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '100px 20px',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  heading: {
    fontSize: '32px',
    marginBottom: '40px',
  },
  projectGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '30px',
  },
  projectCard: {
    width: '300px',
    padding: '20px',
    backgroundColor: '#f1f1f1',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    textAlign: 'left',
  },
};

export default Projects;
