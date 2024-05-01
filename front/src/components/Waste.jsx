import React, { useState } from 'react';
import './Waste.css';

const FoodWasteTracker = () => {
  const [wasteData, setWasteData] = useState({
    freshProduce: 0,
    leftovers: 0,
    expiredSpoiledFood: 0,
    unusableParts: 0,
    cookingWaste: 0,
    packagedFood: 0,
    unusedIngredients: 0,
    beverages: 0,
    expiredCondiments: 0,
    plateWaste: 0,
  });

  const [wasteReductionData, setWasteReductionData] = useState({
    freshProduce: 0,
    leftovers: 0,
    expiredSpoiledFood: 0,
    unusableParts: 0,
    cookingWaste: 0,
    packagedFood: 0,
    unusedIngredients: 0,
    beverages: 0,
    expiredCondiments: 0,
    plateWaste: 0,
  });

  const [totalWaste, setTotalWaste] = useState(0);
  const [totalWasteReduction, setTotalWasteReduction] = useState(0);
  const [reductionPercentage, setReductionPercentage] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setWasteData({ ...wasteData, [name]: parseFloat(value) });
  };

  const handleReductionInputChange = (e) => {
    const { name, value } = e.target;
    setWasteReductionData({ ...wasteReductionData, [name]: parseFloat(value) });
  };

  const calculateTotalWaste = () => {
    const total = Object.values(wasteData).reduce((acc, curr) => acc + curr, 0);
    setTotalWaste(total);
  };

  const calculateTotalWasteReduction = () => {
    const totalReduction = Object.values(wasteReductionData).reduce((acc, curr) => acc + curr, 0);
    setTotalWasteReduction(totalReduction);
  };

  const calculateReductionPercentage = () => {
    if (totalWaste !== 0) {
      const percentage = (totalWasteReduction / totalWaste) * 100;
      setReductionPercentage(percentage.toFixed(2));
    } else {
      setReductionPercentage(0);
    }
  };

  return (
    <div className="food-waste-tracker">
      <h2>Food Waste Tracker</h2>
      {/* Input fields for waste quantities */}
      <div className="waste-categories">
        {/* Input fields for waste quantities */}
        {Object.keys(wasteData).map((category) => (
          <div key={category} className="waste-category">
            <label>{category}:</label>
            <input type="number" name={category} value={wasteData[category]} onChange={handleInputChange} />
          </div>
        ))}
      </div>

      {/* Input fields for waste reduction */}
      <div className="waste-reduction-categories">
        {Object.keys(wasteReductionData).map((category) => (
          <div key={category} className="waste-reduction-category">
            <label>Reduce {category}:</label>
            <input type="number" name={category} value={wasteReductionData[category]} onChange={handleReductionInputChange} />
          </div>
        ))}
      </div>

      <div className="action-buttons">
        <button onClick={calculateTotalWaste}>Calculate Total Waste</button>
        <button onClick={calculateTotalWasteReduction}>Calculate Total Waste Reduction</button>
        <button onClick={calculateReductionPercentage}>Calculate Reduction Percentage</button>
      </div>

      {/* Display total waste, total waste reduction, and reduction percentage */}
      <div className="total-waste">
        <p>Total Waste: {totalWaste}</p>
      </div>
      <div className="total-waste-reduction">
        <p>Total Waste Reduction: {totalWasteReduction}</p>
      </div>
      <div className="reduction-percentage">
        <p>Reduction Percentage: {reductionPercentage}%</p>
      </div>
    </div>
  );
};

export default FoodWasteTracker;
