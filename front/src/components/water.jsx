import React, { useState } from 'react';
import './water.css';


const WaterFootprintTracker = () => {
  const [waterUsage, setWaterUsage] = useState({
    drinking: 0,
    washing: 0,
    laundry: 0,
    cleaning: 0,
    other: 0
  });

  const [totalFootprint, setTotalFootprint] = useState(0);
  const [reductionPercentage, setReductionPercentage] = useState(0);
  const [conservationPercentage, setConservationPercentage] = useState(0);

  const calculateTotalFootprint = () => {
    const total = Object.values(waterUsage).reduce((acc, curr) => acc + curr, 0);
    setTotalFootprint(total);
  };

  const handleWaterUsageChange = (activity, amount) => {
    setWaterUsage(prevUsage => ({
      ...prevUsage,
      [activity]: amount
    }));
  };

  const calculateReduction = () => {
    // Calculate the total water usage before reduction
    const initialTotal = Object.values(waterUsage).reduce((acc, curr) => acc + curr, 0);

    // Assuming a 10% reduction in total water footprint
    const reducedTotal = initialTotal * 0.9;

    // Calculate the reduction percentage
    const reduction = initialTotal - reducedTotal;
    const reductionPercentage = (reduction / initialTotal) * 100;

    // Set the reduction percentage state
    setReductionPercentage(reductionPercentage);

    // Calculate the conservation percentage
    const conservationPercentage = 100 - reductionPercentage;
    setConservationPercentage(conservationPercentage);
  };

  return (
    <div className="water-footprint-tracker">
      <h2>Water Footprint Tracker</h2>
      <div className="activity">
        <label>Drinking:</label>
        <input type="number" value={waterUsage.drinking} onChange={(e) => handleWaterUsageChange('drinking', parseInt(e.target.value))} />
        liters per day
      </div>
      <div className="activity">
        <label>Washing:</label>
        <input type="number" value={waterUsage.washing} onChange={(e) => handleWaterUsageChange('washing', parseInt(e.target.value))} />
        liters per day
      </div>
      <div className="activity">
        <label>Laundry:</label>
        <input type="number" value={waterUsage.laundry} onChange={(e) => handleWaterUsageChange('laundry', parseInt(e.target.value))} />
        liters per day
      </div>
      <div className="activity">
        <label>Cleaning:</label>
        <input type="number" value={waterUsage.cleaning} onChange={(e) => handleWaterUsageChange('cleaning', parseInt(e.target.value))} />
        liters per day
      </div>
      <div className="activity">
        <label>Other:</label>
        <input type="number" value={waterUsage.other} onChange={(e) => handleWaterUsageChange('other', parseInt(e.target.value))} />
        liters per day
      </div>
      <button onClick={calculateTotalFootprint}>Calculate Total Footprint</button>
      {totalFootprint > 0 && <p>Total Water Footprint: {totalFootprint} liters per day</p>}
      <button onClick={calculateReduction}>Calculate Reduction</button>
      {reductionPercentage > 0 && <p>By implementing measures, you could reduce your water footprint by {reductionPercentage.toFixed(2)}%.</p>}
      {conservationPercentage > 0 && <p>You would conserve {conservationPercentage.toFixed(2)}% of water by implementing the measures.</p>}
    </div>
  );
};

export default WaterFootprintTracker;
