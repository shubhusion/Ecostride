import React, { useState } from 'react';

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
    <div>
      <h2>Water Footprint Calculator</h2>

      {/* Bathing */}
      <div>
        <h3>Bathing</h3>
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

      {/* Cooking */}
      <div>
        <h3>Cooking</h3>
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

      {/* Laundry */}
      <div>
        <h3>Laundry</h3>
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

      {/* Dishwashing */}
      <div>
        <h3>Dishwashing</h3>
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

      {/* Flushing */}
      <div>
        <h3>Flushing</h3>
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

      {/* Gardening */}
      <div>
        <h3>Gardening</h3>
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

      <button onClick={handleCalculate}>Calculate</button>

      {showOutput && (
        <>
          <h3>Results</h3>
          <p>Total Water Usage: {totalUsage} liters</p>
          <p>Total Saved Water: {totalSavedWater} liters</p>

          {totalUsage < 100 ? (
            <p>Your water footprint is low. Keep up the good work!</p>
          ) : totalUsage < 200 ? (
            <p>Your water footprint is average.</p>
          ) : (
            <p>Your water footprint is high. Consider reducing water usage.</p>
          )}

          <h4>Suggestions:</h4>
          <ul>
            {suggestions.map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
export default Water;