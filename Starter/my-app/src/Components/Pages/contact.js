import React, { useState } from 'react';
import { Email, GitHub, LinkedIn } from '@mui/icons-material';
import { Form, Button } from 'react-bootstrap';
import '../../App.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({
      name: '',
      email: '',
      message: ''
    });

    setShowAlert(true);
  };

  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Me</h2>
      <div className="contact-icons">
        <a href="mailto:soph_mcnally@msn.com">
          <Email sx={{ fontSize: 50 }} className="icon" />
        </a>
        <a href="https://github.com/SophieEmsi">
          <GitHub sx={{ fontSize: 50 }} className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/your-linkedin-username">
          <LinkedIn sx={{ fontSize: 50 }} className="icon" />
        </a>
      </div>
      <p className="contact-description">
        If you would like to discuss any of my projects or job opportunities, feel free to reach out to me via email,
        GitHub, or LinkedIn.
      </p>

      <Form onSubmit={handleSubmit} className="contact-form">
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      {showAlert && (
        <div className="alert alert-success mt-3">
          Thank you for your message! I will get back to you soon.
        </div>
      )}
    </div>
  );
};

export default Contact;
