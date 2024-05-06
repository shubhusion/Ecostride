import React from 'react';
import { Link } from 'react-router-dom';
import './addop.css';

const Addop = () => {
  const additionalOptions = [
    { name: 'Home', path: '/' },
    { name: 'Shopping Products', path: '/category/Sustainable Products' },
    { name: 'Carbon Footprint Calculator', path: '/carbon-footprint' },
    { name: 'Waste Disposal', path: '/market' },
    { name: 'Energy Calculator', path: '/energy-saved' },
    { name: 'Sale', path: '/market' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <div className="additional-options">
      {additionalOptions.map((option, index) => (
        <Link key={index} to={option.path} className="additional-option" target='_blank' style={{ textDecoration: 'none', color:'black'}}>
          {option.name}
        </Link>
      ))}
    </div>
  );
};

export default Addop;
