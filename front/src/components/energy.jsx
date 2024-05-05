import React, { useState } from 'react';

const Energy = () => {
  const [energyUsage, setEnergyUsage] = useState({
    refrigerator: { usage: '', savedEnergy: '' },
    television: { usage: '', savedEnergy: '' },
    microwave: { usage: '', savedEnergy: '' },
    airConditioner: { usage: '', savedEnergy: '' },
    washingMachine: { usage: '', savedEnergy: '' },
    electricHeater: { usage: '', savedEnergy: '' },
    vehicleDistance: { usage: '', savedEnergy: '' },
    dishwasher: { usage: '', savedEnergy: '' },
    computer: { usage: '', savedEnergy: '' },
    electricStove: { usage: '', savedEnergy: '' },
    sharedVehicleUsage: { usage: '', savedEnergy: '' }, // New state for shared vehicle usage
  });

  const [showOutput, setShowOutput] = useState(false);
  const [totalEnergyConsumption, setTotalEnergyConsumption] = useState(0);
  const [consumptionRange, setConsumptionRange] = useState('');
  const [consumptionChange, setConsumptionChange] = useState(0);

  const handleEnergyUsageChange = (option, value) => {
    setEnergyUsage((prevState) => ({
      ...prevState,
      [option]: {
        ...prevState[option],
        usage: value,
      },
    }));
  };

  const handleSavedEnergyChange = (option, value) => {
    setEnergyUsage((prevState) => ({
      ...prevState,
      [option]: {
        ...prevState[option],
        savedEnergy: value,
      },
    }));
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    const averageWatts = {
      refrigerator: 200, // Assuming 200W average refrigerator
      television: 100, // Assuming 100W average television
      microwave: 1200, // Assuming 1200W average microwave
      airConditioner: 1500, // Assuming 1500W average air conditioner
      washingMachine: 800, // Assuming 800W average washing machine
      electricHeater: 2000, // Assuming 2000W average electric heater
      dishwasher: 900, // Assuming 900W average dishwasher
      computer: 150, // Assuming 150W average computer
      electricStove: 1500, // Assuming 1500W average electric stove
    };

    let totalUsage = 0;
    let totalSavedEnergy = 0;

    for (const option in energyUsage) {
      const usage = parseFloat(energyUsage[option].usage) || 0;
      const savedEnergy = parseFloat(energyUsage[option].savedEnergy) || 0;

      switch (option) {
        case 'refrigerator':
        case 'television':
        case 'microwave':
        case 'airConditioner':
        case 'washingMachine':
        case 'electricHeater':
        case 'dishwasher':
        case 'computer':
        case 'electricStove':
          totalUsage += usage * averageWatts[option];
          totalSavedEnergy += savedEnergy * averageWatts[option];
          break;
        case 'vehicleDistance':
        case 'sharedVehicleUsage':
          totalUsage += usage * 0.2; // Assuming 0.2 kWh per km for vehicle
          totalSavedEnergy += savedEnergy * 0.2;
          break;
        default:
          break;
      }
    }

    setTotalEnergyConsumption(totalUsage);

    // Calculate consumption change
    const averageConsumption = Object.values(averageWatts).reduce((acc, val) => acc + val, 0);
    const percentageChange = ((totalUsage - averageConsumption) / averageConsumption) * 100;
    setConsumptionChange(percentageChange);

    // Determine consumption range
    if (percentageChange < -10) {
      setConsumptionRange('Low');
    } else if (percentageChange > 10) {
      setConsumptionRange('High');
    } else {
      setConsumptionRange('Average');
    }

    setShowOutput(true);
  };

  const suggestEnergySavingTips = () => {
    const suggestions = [];

    if (parseFloat(energyUsage.refrigerator.usage) > 8) {
      suggestions.push('Consider replacing your refrigerator with a more energy-efficient model.');
    }

    if (parseFloat(energyUsage.television.usage) > 4) {
      suggestions.push('Turn off your television when not in use to save energy.');
    }

    if (parseFloat(energyUsage.airConditioner.usage) > 6) {
      suggestions.push('Use air conditioning wisely and set the temperature higher to save energy.');
    }

    if (parseFloat(energyUsage.vehicleDistance.usage) > 50) {
      suggestions.push('Consider using public transportation or carpooling to reduce vehicle energy consumption.');
    }

    // Add more suggestions based on different criteria

    return suggestions;
  };

  const suggestions = showOutput ? suggestEnergySavingTips() : [];

  return (
    <div>
      <h2>Energy Consumption Calculator</h2>
      <form onSubmit={handleCalculate}>
        {/* Refrigerator */}
        <div>
          <h3>Refrigerator</h3>
          <label>
            Hours per Day:
            <input
              type="number"
              value={energyUsage.refrigerator.usage}
              onChange={(e) => handleEnergyUsageChange('refrigerator', e.target.value)}
            />
          </label>
          <label>
            Saved Energy (kWh):
            <input
              type="number"
              value={energyUsage.refrigerator.savedEnergy}
              onChange={(e) => handleSavedEnergyChange('refrigerator', e.target.value)}
            />
          </label>
        </div>

        {/* Television */}
        <div>
          <h3>Television</h3>
          <label>
            Hours per Day:
            <input
              type="number"
              value={energyUsage.television.usage}
              onChange={(e) => handleEnergyUsageChange('television', e.target.value)}
            />
          </label>
          <label>
            Saved Energy (kWh):
            <input
              type="number"
              value={energyUsage.television.savedEnergy}
              onChange={(e) => handleSavedEnergyChange('television', e.target.value)}
            />
          </label>
        </div>

        {/* Microwave */}
        <div>
          <h3>Microwave</h3>
          <label>
            Usage per Day:
            <input
              type="number"
              value={energyUsage.microwave.usage}
              onChange={(e) => handleEnergyUsageChange('microwave', e.target.value)}
            />
          </label>
          <label>
            Saved Energy (kWh):
            <input
              type="number"
              value={energyUsage.microwave.savedEnergy}
              onChange={(e) => handleSavedEnergyChange('microwave', e.target.value)}
            />
          </label>
        </div>

        {/* Air Conditioner */}
        <div>
          <h3>Air Conditioner</h3>
          <label>
            Hours per Day:
            <input
              type="number"
              value={energyUsage.airConditioner.usage}
              onChange={(e) => handleEnergyUsageChange('airConditioner', e.target.value)}
            />
          </label>
          <label>
            Saved Energy (kWh):
            <input
              type="number"
              value={energyUsage.airConditioner.savedEnergy}
              onChange={(e) => handleSavedEnergyChange('airConditioner', e.target.value)}
            />
          </label>
        </div>

        {/* Washing Machine */}
        <div>
          <h3>Washing Machine</h3>
          <label>
            Usage per Day:
            <input
              type="number"
              value={energyUsage.washingMachine.usage}
              onChange={(e) => handleEnergyUsageChange('washingMachine', e.target.value)}
            />
          </label>
          <label>
            Saved Energy (kWh):
            <input
              type="number"
              value={energyUsage.washingMachine.savedEnergy}
              onChange={(e) => handleSavedEnergyChange('washingMachine', e.target.value)}
            />
          </label>
        </div>

        {/* Electric Heater */}
        <div>
          <h3>Electric Heater</h3>
          <label>
            Hours per Day:
            <input
              type="number"
              value={energyUsage.electricHeater.usage}
              onChange={(e) => handleEnergyUsageChange('electricHeater', e.target.value)}
            />
          </label>
          <label>
            Saved Energy (kWh):
            <input
              type="number"
              value={energyUsage.electricHeater.savedEnergy}
              onChange={(e) => handleSavedEnergyChange('electricHeater', e.target.value)}
            />
          </label>
        </div>

        {/* Vehicle Distance */}
        <div>
          <h3>Vehicle Distance</h3>
          <label>
            Distance per Day (in km):
            <input
              type="number"
              value={energyUsage.vehicleDistance.usage}
              onChange={(e) => handleEnergyUsageChange('vehicleDistance', e.target.value)}
            />
          </label>
          <label>
            Saved Energy (kWh):
            <input
              type="number"
              value={energyUsage.vehicleDistance.savedEnergy}
              onChange={(e) => handleSavedEnergyChange('vehicleDistance', e.target.value)}
            />
          </label>
        </div>

        {/* Dishwasher */}
        <div>
          <h3>Dishwasher</h3>
          <label>
            Usage per Day:
            <input
              type="number"
              value={energyUsage.dishwasher.usage}
              onChange={(e) => handleEnergyUsageChange('dishwasher', e.target.value)}
            />
          </label>
          <label>
            Saved Energy (kWh):
            <input
              type="number"
              value={energyUsage.dishwasher.savedEnergy}
              onChange={(e) => handleSavedEnergyChange('dishwasher', e.target.value)}
            />
          </label>
        </div>

        {/* Computer */}
        <div>
          <h3>Computer</h3>
          <label>
            Hours per Day:
            <input
              type="number"
              value={energyUsage.computer.usage}
              onChange={(e) => handleEnergyUsageChange('computer', e.target.value)}
            />
          </label>
          <label>
            Saved Energy (kWh):
            <input
              type="number"
              value={energyUsage.computer.savedEnergy}
              onChange={(e) => handleSavedEnergyChange('computer', e.target.value)}
            />
          </label>
        </div>

        {/* Electric Stove */}
        <div>
          <h3>Electric Stove</h3>
          <label>
            Usage per Day:
            <input
              type="number"
              value={energyUsage.electricStove.usage}
              onChange={(e) => handleEnergyUsageChange('electricStove', e.target.value)}
            />
          </label>
          <label>
            Saved Energy (kWh):
            <input
              type="number"
              value={energyUsage.electricStove.savedEnergy}
              onChange={(e) => handleSavedEnergyChange('electricStove', e.target.value)}
            />
          </label>
        </div>

        {/* Shared Vehicle Usage */}
        <div>
          <h3>Shared Vehicle Usage</h3>
          <label>
            Distance per Day (in km):
            <input
              type="number"
              value={energyUsage.sharedVehicleUsage.usage}
              onChange={(e) => handleEnergyUsageChange('sharedVehicleUsage', e.target.value)}
            />
          </label>
          <label>
            Saved Energy (kWh):
            <input
              type="number"
              value={energyUsage.sharedVehicleUsage.savedEnergy}
              onChange={(e) => handleSavedEnergyChange('sharedVehicleUsage', e.target.value)}
            />
          </label>
        </div>

        <button type="submit">Calculate</button>
      </form>

      {showOutput && (
        <>
          <h3>Results</h3>
          <p>Total Energy Consumption: {totalEnergyConsumption.toFixed(2)} kWh</p>
          <p>Consumption Range: {consumptionRange}</p>
          <p>Percentage Change from Average Consumption: {consumptionChange.toFixed(2)}%</p>

          {consumptionRange === 'High' && (
            <p>Your energy consumption is high. Consider reducing usage or switching to more energy-efficient appliances.</p>
          )}
          {consumptionRange === 'Low' && <p>Congratulations! Your energy consumption is below average. Keep up the good work!</p>}

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
};

export default Energy;
