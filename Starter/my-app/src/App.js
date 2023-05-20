import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import Home from './components/pages/home';
import About from './components/pages/about';
import Experience from './components/pages/experience';
import Portfolio from './components/pages/portfolio';
import Contact from './components/pages/contact';

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex', height: '100vh' }}>
        <div
          style={{
            flex: 1,
            backgroundColor: '#f2f2f2',
            overflow: 'hidden',
            paddingTop: '80px',
          }}
        >
          <header style={{ border: '1px solid black', padding: '50px' }}>
            <h1>Sophie McNally</h1>
            <h2>Front-End Web Developer</h2>
            <p>I am a newly graduated bootcamp student looking for a junior or internship role</p>
          </header>
          <Nav defaultActiveKey="/" className="flex-column">
       
            <Nav.Link as={Link} to="/about" eventKey="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/experience" eventKey="/experience">Experience</Nav.Link>
            <Nav.Link as={Link} to="/portfolio" eventKey="/portfolio">Portfolio</Nav.Link>
            <Nav.Link as={Link} to="/contacr" eventKey="/portfolio">Contact</Nav.Link>
          </Nav>
        </div>
        <div
          style={{
            flex: 1,
            backgroundColor: '#fff',
            overflowY: 'scroll',
          }}
        >
          <div style={{ padding: '15px' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
