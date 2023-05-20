import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './navbar';
import Home from './home';
import About from './About';
import Experience from './Experience';
import Portfolio from './Portfolio';
import Contact from './Contact';

const App = () => {
  return (
    <Router>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/experience" component={Experience} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </Router>
);
};
    <div style={{ display: 'flex', height: '100vh' }}>
      <div
        style={{
          flex: 1,
          backgroundColor: '#f2f2f2',
          overflow: 'hidden',
        }}
      >
       
        <header style={{ border: '1px solid black', padding: '50px', marginTop: '80px' }}>
          
          <h1>Sophie McNally</h1>
          <h2>Front-End Web Developer</h2>
          <p>I am a newly graduated bootcamp student looking for a junior or internship role</p>
        </header>
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
        </div>
      </div>
    </div>



export default App;
