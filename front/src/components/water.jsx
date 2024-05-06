import React, { useState } from 'react';
import './water.css'; // Import the CSS file
import Header from './header';
import Addop from './addop';
import Company from './company';
import Footer from './footer';

const Water = () => {
  const [waterUsage, setWaterUsage] = useState({
    bathing: { usage: '', savedWater: '' },
    cooking: { usage: '', savedWater: '' },
    laundry: { usage: '', savedWater: '' },
    dishwashing: { usage: '', savedWater: '' },
    flushing: { usage: '', savedWater: '' },
    gardening: { usage: '', savedWater: '' },
  });

  const [showOutput, setShowOutput] = useState(false);

  const handleWaterUsageChange = (option, value) => {
    setWaterUsage((prevState) => ({
      ...prevState,
      [option]: {
        ...prevState[option],
        usage: value,
      },
    }));
  };

  const handleSavedWaterChange = (option, value) => {
    setWaterUsage((prevState) => ({
      ...prevState,
      [option]: {
        ...prevState[option],
        savedWater: value,
      },
    }));
  };

  const calculateWaterFootprint = () => {
    let totalUsage = 0;
    let totalSavedWater = 0;

    for (const option in waterUsage) {
      totalUsage += parseFloat(waterUsage[option].usage) || 0;
      totalSavedWater += parseFloat(waterUsage[option].savedWater) || 0;
    }

    return { totalUsage, totalSavedWater };
  };

  const { totalUsage, totalSavedWater } = showOutput ? calculateWaterFootprint() : { totalUsage: 0, totalSavedWater: 0 };

  const suggestWaterSavingTips = () => {
    const suggestions = [];

    if (parseFloat(waterUsage.bathing.usage) > 50) {
      suggestions.push('Take shorter showers to reduce water usage.');
    }

    if (parseFloat(waterUsage.cooking.usage) > 20) {
      suggestions.push('Use only the necessary amount of water for cooking.');
    }

    if (parseFloat(waterUsage.laundry.usage) > 30) {
      suggestions.push('Wash full loads of laundry to save water.');
    }

    if (parseFloat(waterUsage.dishwashing.usage) > 20) {
      suggestions.push('Use a sink or basin instead of running water for dishwashing.');
    }

    if (parseFloat(waterUsage.flushing.usage) > 10) {
      suggestions.push('Consider installing a low-flow toilet or using a toilet tank bank.');
    }

    if (parseFloat(waterUsage.gardening.usage) > 50) {
      suggestions.push('Water your garden in the early morning or evening to reduce evaporation.');
    }

    return suggestions;
  };

  const suggestions = showOutput ? suggestWaterSavingTips() : [];

  const handleCalculate = () => {
    setShowOutput(true);
  };

  return (
    <>
    <Header />
    <Addop />
    <Company />
    <div className="water-container"> {/* Add water-container class */}
      <h2 className='water-title'>Water Footprint Calculator</h2>

      <form className='water-form'>
      {/* Bathing */}
      {/* Add water-input-row class */}
        <div className="water-item">
          <h3>Bathing</h3>
          <div className='water-input-row'>
          <label>
            Water Usage (liters):
            <input
              type="number"
              value={waterUsage.bathing.usage}
              onChange={(e) => handleWaterUsageChange('bathing', e.target.value)}
            />
          </label>
          <label>
            Saved Water (liters):
            <input
              type="number"
              value={waterUsage.bathing.savedWater}
              onChange={(e) => handleSavedWaterChange('bathing', e.target.value)}
            />
          </label>
          </div>
        </div>

        {/* Cooking */}
        <div className="water-item"> {/* Add water-input class */}
          <h3>Cooking</h3>
          <div className='water-input-row'>
          <label>
            Water Usage (liters):
            <input
              type="number"
              value={waterUsage.cooking.usage}
              onChange={(e) => handleWaterUsageChange('cooking', e.target.value)}
            />
          </label>
          <label>
            Saved Water (liters):
            <input
              type="number"
              value={waterUsage.cooking.savedWater}
              onChange={(e) => handleSavedWaterChange('cooking', e.target.value)}
            />
          </label>
          </div>
        </div>
      

      {/* Laundry */}
      <div className="water-item"> 
      <div>
        <h3>Laundry</h3>
        <div className='water-input-row'>
        <label>
          Water Usage (liters):
          <input
            type="number"
            value={waterUsage.laundry.usage}
            onChange={(e) => handleWaterUsageChange('laundry', e.target.value)}
          />
        </label>
        <label>
          Saved Water (liters):
          <input
            type="number"
            value={waterUsage.laundry.savedWater}
            onChange={(e) => handleSavedWaterChange('laundry', e.target.value)}
          />
        </label>
        </div>
      </div>
      </div>

      {/* Dishwashing */}
      <div className="water-item"> 
      <div>
        <h3>Dishwashing</h3>
        <div className='water-input-row'>
        <label>
          Water Usage (liters):
          <input
            type="number"
            value={waterUsage.dishwashing.usage}
            onChange={(e) => handleWaterUsageChange('dishwashing', e.target.value)}
          />
        </label>
        <label>
          Saved Water (liters):
          <input
            type="number"
            value={waterUsage.dishwashing.savedWater}
            onChange={(e) => handleSavedWaterChange('dishwashing', e.target.value)}
          />
        </label>
        </div>
      </div>
      </div>

      {/* Flushing */}
      <div className="water-item"> 
      <div>
        <h3>Flushing</h3>
        <div className='water-input-row'>
        <label>
          Water Usage (liters):
          <input
            type="number"
            value={waterUsage.flushing.usage}
            onChange={(e) => handleWaterUsageChange('flushing', e.target.value)}
          />
        </label>
        <label>
          Saved Water (liters):
          <input
            type="number"
            value={waterUsage.flushing.savedWater}
            onChange={(e) => handleSavedWaterChange('flushing', e.target.value)}
          />
        </label>
      </div>
      </div>
      </div>

       

      {/* Gardening */}
      <div className="water-item"> 
      <div>
        <h3>Gardening</h3>
        <div className='water-input-row'>
        <label>
          Water Usage (liters):
          <input
            type="number"
            value={waterUsage.gardening.usage}
            onChange={(e) => handleWaterUsageChange('gardening', e.target.value)}
          />
        </label>
        <label>
          Saved Water (liters):
          <input
            type="number"
            value={waterUsage.gardening.savedWater}
            onChange={(e) => handleSavedWaterChange('gardening', e.target.value)}
          />
        </label>
        </div>
      </div>
      </div>
      </form>
      <button onClick={handleCalculate}>Calculate</button>

      {showOutput && (
        <div className="output-container">
          <h3 className="output-title">Results</h3>
          <p className="output-text">Total Water Usage: {totalUsage} liters</p>
          <p className="output-text">Total Saved Water: {totalSavedWater} liters</p>

          {totalUsage < 100 ? (
            <p className="output-text low-consumption">Your water footprint is low. Keep up the good work!</p>
          ) : totalUsage < 200 ? (
            <p className="output-text">Your water footprint is average.</p>
          ) : (
            <p className="output-text high-consumption">Your water footprint is high. Consider reducing water usage.</p>
          )}

          <h4 className="output-subtitle">Suggestions:</h4>
          <ul className="output-list">
            {suggestions.map((suggestion, index) => (
              <li key={index} className="output-list-item">{suggestion}</li>
            ))}
          </ul>
        </div>
      )}

    </div>
    <Footer />
    </>
  );
};

export default Water;
