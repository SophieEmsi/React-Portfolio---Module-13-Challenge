import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './Components/Pages/navbar'; 
import Home from './Components/Pages/home';
import About from './Components/Pages/about';
import Experience from './Components/Pages/experience';
import Portfolio from './Components/Pages/portfolio';
import Contact from './Components/Pages/contact';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div style={{ display: 'flex', height: '100vh' }}>
        <div
          style={{
            flex: 1,
            backgroundColor: '#f2f2f2',
            overflow: 'hidden',
          }}
        >
          {/* Content for the static column (left side) */}
          <header style={{ border: '1px solid black', padding: '50px', marginTop: '80px' }}>
            <h1>Sophie McNally</h1>
            <h2>Front-End Web Developer</h2>
            <p>I am a newly graduated bootcamp student looking for a junior or internship role</p>
          </header>
          <Nav defaultActiveKey="/" className="flex-column">
            <Nav.Link as={Link} to="/" eventKey="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" eventKey="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/experience" eventKey="/experience">Experience</Nav.Link>
            <Nav.Link as={Link} to="/portfolio" eventKey="/portfolio">Portfolio</Nav.Link>
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
            {/* Content for the scrollable column (right side) */}
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