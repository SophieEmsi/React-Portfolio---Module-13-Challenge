
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

import About from './components/pages/about';
import Experience from './components/pages/experience';
import Portfolio from './components/pages/portfolio';
import Contact from './components/pages/contact';

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex', height: '100vh' }}>
        {/* Left Side */}
        <div
          style={{
            flex: 0.75,
            width: '300px',
            backgroundColor: '#1e1e1e',
            overflow: 'hidden',
            paddingTop: '80px',
            borderRight: '1px solid black',
            padding: '50px',
          }}
        >
          <header style={{ marginBottom: '80px', marginTop: '50px' }}>
            <h1>Sophie McNally</h1>
            <h2>Front-End Web Developer</h2>
            <p>I am a newly graduated bootcamp student looking for a junior or internship role</p>
          </header>
          <Nav defaultActiveKey="/" className="flex-column">

            <Nav.Link as={Link} to="/about" eventKey="/about" className="nav-link" style={{ marginBottom: '10px' }}>About</Nav.Link>
            <Nav.Link as={Link} to="/experience" eventKey="/experience" className="nav-link" style={{ marginBottom: '10px' }}>Experience</Nav.Link>
            <Nav.Link as={Link} to="/portfolio" eventKey="/portfolio" className="nav-link" style={{ marginBottom: '10px' }}>Portfolio</Nav.Link>
            <Nav.Link as={Link} to="/contact" eventKey="/contact" className="nav-link" style={{ marginBottom: '10px' }}>Contact</Nav.Link>
          </Nav>
        </div>
        {/* Right Side */}
        <div
          style={{
            flex: 1,
            backgroundColor: '#fff',
            overflowY: 'scroll',
            padding: '50px',
            marginBottom: '80px',
            marginTop: '50px',
          }}
        >
          <Routes>
          
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
