import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

const Experience = () => {
  return (
    <div>
      <h3 style={{ marginBottom: '25px', marginTop: '10px' }}>Education</h3>
      <div className="education-item">
        <div className="date">Sept 2010 - June 2013</div>
        <div className="description">
          <h3>Nottingham Trent University</h3>
          <p>2:1 - BA (Hons) Marketing, Design & Communication</p>
        </div>
      </div>
      <div className="education-item">
        <div className="date">Feb 2023 - June 2023</div>
        <div className="description">
          <h3>University of Birmingham</h3>
          <p>Front-End Web Development Bootcamp</p>
        </div>
      </div>

      <h3 style={{ marginBottom: '25px' }}>Experience</h3>
      <div className="experience-item">
        <div className="date">March 2016 - Present</div>
        <div className="description">
          <h3>HM Revenue & Customs</h3>
          <p>
            In my role as a member of the User Experience team in commercial 
            building design projects, I actively contribute to enhancing the 
            user experience of office buildings. I am responsible for gathering 
            and analyzing valuable user feedback data, gaining deep insights 
            into the needs and preferences of occupants. With a strong focus on 
            inclusivity, I ensure that the buildings are designed to accommodate 
            and embrace diversities. By incorporating universal design principles 
            and considering the unique requirements of various individuals, I 
            collaborate with cross-functional teams to refine and improve the 
            design of office spaces.
          </p>
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '25px' }}>Full CV</h3>
        <p>
          For my complete work history and qualifications, please refer to my{' '}
          <a href={require('../../assets/CV - Sophie McNally.docx.pdf')} target="_blank" rel="noopener noreferrer">Full CV</a>

        </p>
      </div>
    </div>
  );
};

export default Experience;
