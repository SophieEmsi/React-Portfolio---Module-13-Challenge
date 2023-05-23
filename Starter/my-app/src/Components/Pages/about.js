import React from 'react';

import '../../App.css';

import aboutImage from '../../assets/Photo.jpg';

const About = () => {
  return (
    <div>
      <h3 style={{ marginBottom: '25px' }}>About Me</h3>
      <div className="about-container">
        <p>
          As a recent graduate in Front-End web development, I am excited to kickstart 
          my new career and contribute my skills and creativity to the world of digital 
          experiences. 
        </p>
        <p>
          With a solid foundation in HTML, CSS, and JavaScript, I have 
          hands-on experience building responsive and user-friendly websites using Bootstrap, 
          JQuery, Node.js & React. My goal is to transform design concepts into visually 
          appealing web applications that engage users and leave a lasting impression.
        </p>
        <p>
          Through collaborative group projects during my studies, I've refined my teamwork 
          and communication skills, thriving in fast-paced environments without compromising quality.
          In addition to my technical skills, I bring creativity and problem-solving abilities to 
          my work. I enjoy brainstorming innovative ideas and finding solutions to development challenges. 
        </p>
        <p>
          In my spare time, I enjoy spending time outdoors walking with my dog or creating unique crafts 
          with my tufting gun. Please feel free to reach out to start a conversation or discuss my portfolio.
        </p>
        <img src={aboutImage} alt="About Me" style={{ width: '50%', marginTop: '20px' }} />
      </div>
    </div>
  );
};

export default About;