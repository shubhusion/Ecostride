import React from 'react';
import { Link } from 'react-router-dom';
import './action.css';

function ActionSections() {
  return (
    <div className="action-sections-container">
      <h2>Take Your Actions</h2>
      <Link to="/carbon-footprint">
        <div className="action-section">
          <h3>Carbon Footprint Calculator</h3>
          </div>
      </Link>
      <Link to="/energy-saved">
        <div className="action-section">
          <h3>Energy Saved</h3>
          </div>
      </Link>
      <Link to="/waste-reduction-progress">
        <div className="action-section">
          <h3>Waste Reduction Progress</h3>
            </div>
      </Link>
      <Link to="/sustainable-shopping">
        <div className="action-section">
          <h3>Sustainable Shopping</h3>
        </div>
      </Link>
      
      <Link to="/water-conservation">
        <div className="action-section">
          <h3>Water Conservation</h3>
          </div>
      </Link>
    </div>
  );
}

export default ActionSections;