import React, { useState } from 'react';
import './EnergyWaste.css';

const EnergyWasteTracker = () => {
  const [wasteData, setWasteData] = useState({
    electricity: 0,
    heating: 0,
    cooling: 0,
    appliances: 0,
    lighting: 0,
  });

  const [totalWaste, setTotalWaste] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setWasteData({ ...wasteData, [name]: parseFloat(value) });
  };

  const calculateTotalWaste = () => {
    const total = Object.values(wasteData).reduce((acc, curr) => acc + curr, 0);
    setTotalWaste(total);
  };

  return (
    <div className="energy-waste-tracker">
      <h2>Energy Waste Tracker</h2>
      <div className="waste-categories">
        {Object.keys(wasteData).map((category) => (
          <div key={category} className="waste-category">
            <label>{category.charAt(0).toUpperCase() + category.slice(1)}:</label>
            <input type="number" name={category} value={wasteData[category]} onChange={handleInputChange} />
          </div>
        ))}
      </div>
      <button onClick={calculateTotalWaste}>Calculate Total Waste</button>
      <div className="total-waste">
        <p>Total Energy Waste: {totalWaste} kWh</p>
      </div>
    </div>
  );
};

export default EnergyWasteTracker;
