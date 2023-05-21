import React from 'react';
import '../../App.css';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      image: 'project1-thumbnail.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      url: 'https://project1-url.com'
    },
    {
      id: 2,
      title: 'Project 2',
      image: 'project2-thumbnail.jpg',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      url: 'https://project2-url.com'
    },
    // Add more projects as needed
  ];

  return (
    <div className="portfolio-container">
      <h3>Portfolio</h3>
      {projects.map((project) => (
        <div key={project.id} className="portfolio-item">
          <img src={project.image} alt={project.title} className="portfolio-thumbnail" />
          <div className="portfolio-description">
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
