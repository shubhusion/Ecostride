// Market.jsx
import React from 'react';
import './market.css'; // Add this import for market styling

const categories = [
  'E-Waste',
  'Plastic',
  'Lead and Glass',
  'Aluminium and Tin',
  'Iron',
  'Biodegradable Waste',
  'Remaining Food Stock',
  'Left Clothes',
  'Sustainable Products',
  // Add more categories as needed
];

const Market = () => {
  return (
    <div className="market-container">
      {categories.map((category, index) => (
        <div key={index} className="market-card">
          <h3>{category}</h3>
          {/* Add content and styling for this card */}
        </div>
      ))}
    </div>
  );
};

export default Market;
