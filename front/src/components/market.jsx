// Market.jsx
import React from 'react';
import './market.css'; // Add this import for market styling
import Marketplace from './marketplace';

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
          <h3>{category}</h3>
          {/* Add content and styling for this card */}
        </div>
      ))}
    </div>
    </>
  );
};

export default Market;
