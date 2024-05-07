// about.jsx
import React from 'react';
import './about.css';
import Header from './header';
import Addop from './addop';
import Company from './company';
import Footer from './footer';

const About = () => {
  return (
    <>
    <Header />
    <Addop />
    <Company />
    <div className="about-container">
      <div className="developers-container">
      <h2 className="about-title">Developers</h2>
        <div className="developer-card">
          <div className="developer-info">
            <h3>Aditya Kumar</h3>
            <p>Contact: <span className="contact-info">123-456-7890</span></p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-github"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="far fa-envelope"></i></a>
            </div>
          </div>
        </div>
        
        <div className="developer-card">
          <div className="developer-info">
            <h3>Shubham Sharma</h3>
            <p>Contact: <span className="contact-info">123-456-7890</span></p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-github"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="far fa-envelope"></i></a>
            </div>
          </div>
        </div>
        
        <div className="developer-card">
          <div className="developer-info">
            <h3>Stuti Gupta</h3>
            <p>Contact: <span className="contact-info">123-456-7890</span></p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-github"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="far fa-envelope"></i></a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="about-content">
        <h2 className="about-title">About Our Project</h2>
        <p>
        <h3>Introduction</h3>
        EcoStrive is an innovative platform dedicated to fostering sustainable living practices and promoting eco-friendly consumer choices. At its core, EcoStrive serves as both a comprehensive sustainability tracker and a vibrant marketplace for environmentally-conscious products. By seamlessly integrating data tracking, educational resources, and a marketplace, EcoStrive empowers users to make informed decisions that benefit both the planet and their personal well-being.
        </p>
        <p>
        <h3>Tracking Sustainability</h3>
        The sustainability tracker aspect of EcoStrive provides users with intuitive tools to monitor and analyze their environmental footprint across various aspects of daily life. From energy consumption and water usage to transportation habits and waste management, EcoStrive offers detailed insights into individual contributions to sustainability. Through user-friendly interfaces and customizable tracking options, users can easily identify areas for improvement and set achievable goals for reducing their ecological impact.
        </p>
        <p>
        <h3>Educational Resources</h3>
        In addition to tracking tools, EcoStrive offers a wealth of educational resources to empower users with knowledge and actionable strategies for sustainable living. Engaging articles, informative guides, and interactive tutorials cover a wide range of topics, from eco-friendly home practices and sustainable fashion to renewable energy and conservation efforts. By fostering a deeper understanding of environmental issues and solutions, EcoStrive equips users with the knowledge they need to make meaningful changes in their lifestyles.
        </p>
        <p>
        <h3>Marketplace for Sustainable Products</h3>
        The marketplace aspect of EcoStrive serves as a curated platform for discovering and purchasing eco-friendly products from trusted brands and vendors. From organic food and cruelty-free cosmetics to energy-efficient appliances and eco-conscious fashion, EcoStrive offers a diverse selection of sustainable alternatives to conventional consumer goods. By connecting users with ethical and environmentally-responsible products, EcoStrive promotes conscious consumption and supports businesses that prioritize sustainability.
        </p>
        <p>
        <h3>Our Mission</h3>
        At EcoStrive, our mission is to empower individuals and communities to lead more sustainable lifestyles and contribute to a healthier planet for future generations. By providing accessible tools, resources, and a supportive community, we aim to inspire positive change and foster a global movement towards sustainability. Together, we can strive for a more equitable, resilient, and environmentally-conscious world. Join us on the journey towards a greener future with EcoStrive.
        </p>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default About;
