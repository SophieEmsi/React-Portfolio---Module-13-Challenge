import React from 'react';
import '../../App.css';
import myImage1 from '../../assets/Project 1.png';
import myImage2 from '../../assets/Project 2.png';
import myImage3 from '../../assets/Project 3.png';
import myImage4 from '../../assets/Project 4.png';
import myImage5 from '../../assets/Project 5.png';
import myImage6 from '../../assets/Project 6.png';

const Portfolio = () => {
  const projects = [
    {
      id: 6,
      title: 'Edamam API Recipe Website',
      image: myImage6,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      url: 'https://sophieemsi.github.io/Edamam-Recipe-Website-Group-1/',
      url2: 'https://github.com/SophieEmsi/Edamam-Recipe-Website-Group-1'
    },
    {
      id: 1,
      title: 'Team Profile Generator',
      image: myImage1,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      url: 'https://sophieemsi.github.io/Team-Profile-Generator---Module-12-Challenge/',
      url2: 'https://github.com/SophieEmsi/Team-Profile-Generator---Module-12-Challenge'
    },
    {
      id: 1,
      title: 'README Generator',
      image: myImage2,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      url: 'https://github.com/SophieEmsi/README-Generator---Module-11-Challenge/blob/main/README.md',
      url2: 'https://github.com/SophieEmsi/README-Generator---Module-11-Challenge'
    },
    {
      id: 1,
      title: 'Weather Dashboard',
      image: myImage3,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      url: 'https://sophieemsi.github.io/Weather-Dashboard---Module-8-Challenge/',
      url2: 'https://github.com/SophieEmsi/Weather-Dashboard---Module-8-Challenge'

    },
    {
      id: 1,
      title: 'Work Day Scheduler',
      image: myImage4,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      url: 'https://sophieemsi.github.io/Work-Day-Scheduler---Week-7-Challenge/',
      url2: 'https://github.com/SophieEmsi/Work-Day-Scheduler---Week-7-Challenge'
    },
    {
      id: 1,
      title: 'Code Quiz',
      image: myImage5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      url: 'https://sophieemsi.github.io/Code-Quiz---Module-6-Challenge/',
      url2: 'https://github.com/SophieEmsi/Code-Quiz---Module-6-Challenge'
    },
  ];

  return (
    <div className="portfolio-container">
      <h3 className="portfolio-heading">Portfolio</h3>
      {projects.map((project, index) => (
        <div key={project.id} className="portfolio-item">
          <div className="thumbnail-container">
            <img src={project.image} alt={project.title} className="portfolio-thumbnail" />
          </div>
          <div className="portfolio-description">
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <div className="portfolio-links">
              <a href={project.url} target="_blank" rel="noopener noreferrer">View Project</a>
              <a href={project.url2} target="_blank" rel="noopener noreferrer">View Repo</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;