// Market.jsx
import React from 'react';
import './market.css'; // Add this import for market styling
import Marketplace from './marketplace';
import { Link } from 'react-router-dom'; 

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

const Market = () => {
  return (
    <>
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
    </>
  );
};

export default Market;
