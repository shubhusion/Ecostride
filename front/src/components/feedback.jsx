// feedback.jsx
import React, { useState } from 'react';
import './feedback.css';
import Header from './header';
import Addop from './addop';
import Company from './company';
import Footer from './footer';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showOutput, setShowOutput] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    window.location.href = `mailto:adityaryk123@gmail.com?subject=Feedback&body=From: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    setShowOutput(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
    <Header />
    <Addop />
    <Company />
    <div className="feedback-container">
      <h2 className="feedback-title">Send Feedback</h2>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name" className="feedback-label">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className="feedback-input" required />
        </div>
        <div className="input-group">
          <label htmlFor="email" className="feedback-label">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="feedback-input" required />
        </div>
        <div className="input-group">
          <label htmlFor="message" className="feedback-label">Message:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} className="feedback-input" required></textarea>
        </div>
        <button type="submit" className="feedback-button">Send Feedback</button>
      </form>
      {showOutput && (
        <div className="output-feedback">
          <p>Thank you for your valuable feedback!</p>
        </div>
      )}
    </div>
    <Footer />
    </>
  );
};

export default Feedback;
