// home.jsx or app.jsx
import React from 'react';
import Calendar from './Calendar';
import ActionSections from './Action';
import Market from './market';
import Footer from './footer';
import Header from './header';
import './home.css'; 
import Banner from './banner';
import Company from './company';
import Addop from './addop';
import Marketplace from './marketplace';
import { Link } from 'react-router-dom';
import './market.css';

const categories = [
  'Sustainable Products',
  'Left Clothes',
  'Remaining Food Stock',
  'E-Waste',
  'Plastic',
  'Lead and Glass',
  'Aluminium and Tin',
  'Iron',
  'Biodegradable Waste',
];

const Home = () => {
  return (
    <>
      <Header />
      <Addop />      
      <Banner />
      <Company />
      <div className="main-container">
        <div className="content-container">
          <div className="sections-container">
            <ActionSections />
            <Calendar />
          </div>
        </div>
      </div>
      <Marketplace />
      <div className="market-container">
        {categories.map((category, index) => (
          <div key={index} className="market-card">
            <Link to={`/category/${category}`} className="category-link" target='_blank' style={{ textDecoration: 'none' }}>
                <h3>{category}</h3>
            </Link>
          </div>
        ))}
      </div>
      
      <Footer />
    </>
  );
};

export default Home;
