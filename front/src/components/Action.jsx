import React from 'react';
import { Link } from 'react-router-dom';
import './action.css';

function ActionSections() {
  return (
    <div className="action-sections-container">
      <div className='action-title'>
         Take Your Actions
      </div>
      <Link to="/carbon-footprint" style={{ textDecoration: 'none' }}>
        <div className="action-section">
          <h3>Carbon Footprint Calculator</h3>
          </div>
      </Link>
      <Link to="/energy-saved" style={{ textDecoration: 'none' }}>
        <div className="action-section">
          <h3>Energy Saved</h3>
          </div>
      </Link>
      <Link to="/waste-reduction-progress" style={{ textDecoration: 'none' }}>
        <div className="action-section">
          <h3>Waste Reduction Progress</h3>
            </div>
      </Link>
      <Link to="/sustainable-shopping" style={{ textDecoration: 'none' }}>
        <div className="action-section">
          <h3>Sustainable Shopping</h3>
        </div>
      </Link>
      
      <Link to="/water-conservation" style={{ textDecoration: 'none' }}>
        <div className="action-section">
          <h3>Water Conservation</h3>
          </div>
      </Link>
    </div>
  );
}

export default ActionSections;