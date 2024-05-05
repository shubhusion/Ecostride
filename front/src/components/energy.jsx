import React, { useState } from 'react';

const Energy = () => {
  const [refrigeratorHours, setRefrigeratorHours] = useState('');
  const [televisionHours, setTelevisionHours] = useState('');
  const [microwaveUsage, setMicrowaveUsage] = useState('');
  const [airConditionerHours, setAirConditionerHours] = useState('');
  const [washingMachineUsage, setWashingMachineUsage] = useState('');
  const [electricHeaterHours, setElectricHeaterHours] = useState('');
  const [vehicleDistance, setVehicleDistance] = useState('');
  const [dishwasherUsage, setDishwasherUsage] = useState('');
  const [computerHours, setComputerHours] = useState('');
  const [electricStoveUsage, setElectricStoveUsage] = useState('');
  const [sharedVehicleUsage, setSharedVehicleUsage] = useState(''); // New state for shared vehicle usage
  const [totalEnergyConsumption, setTotalEnergyConsumption] = useState(0);
  const [consumptionRange, setConsumptionRange] = useState('');
  const [consumptionChange, setConsumptionChange] = useState(0);

  const handleSubmit = (e) => {
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

    const totalRefrigeratorEnergy = refrigeratorHours * averageWatts.refrigerator;
    const totalTelevisionEnergy = televisionHours * averageWatts.television;
    const totalMicrowaveEnergy = microwaveUsage * averageWatts.microwave;
    const totalAirConditionerEnergy = airConditionerHours * averageWatts.airConditioner;
    const totalWashingMachineEnergy = washingMachineUsage * averageWatts.washingMachine;
    const totalElectricHeaterEnergy = electricHeaterHours * averageWatts.electricHeater;
    const totalDishwasherEnergy = dishwasherUsage * averageWatts.dishwasher;
    const totalComputerEnergy = computerHours * averageWatts.computer;
    const totalElectricStoveEnergy = electricStoveUsage * averageWatts.electricStove;
    const totalSharedVehicleEnergy = vehicleDistance * 0.2; // Assuming 0.2 kWh per km for shared vehicle

    const totalEnergy = totalRefrigeratorEnergy + totalTelevisionEnergy + totalMicrowaveEnergy
                      + totalAirConditionerEnergy + totalWashingMachineEnergy + totalElectricHeaterEnergy
                      + totalDishwasherEnergy + totalComputerEnergy + totalElectricStoveEnergy
                      + totalSharedVehicleEnergy;

    setTotalEnergyConsumption(totalEnergy);

    // Calculate consumption change
    const averageConsumption = Object.values(averageWatts).reduce((acc, val) => acc + val, 0);
    const percentageChange = ((totalEnergy - averageConsumption) / averageConsumption) * 100;
    setConsumptionChange(percentageChange);

    // Determine consumption range
    if (percentageChange < -10) {
      setConsumptionRange('Low');
    } else if (percentageChange > 10) {
      setConsumptionRange('High');
    } else {
      setConsumptionRange('Average');
    }
  };

  return (
    <div>
      <h2>Energy Consumption Calculator</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Refrigerator Hours per Day:</label>
          <input type="number" value={refrigeratorHours} onChange={(e) => setRefrigeratorHours(e.target.value)} />
        </div>
        <div>
          <label>Television Hours per Day:</label>
          <input type="number" value={televisionHours} onChange={(e) => setTelevisionHours(e.target.value)} />
        </div>
        <div>
          <label>Microwave Usage per Day:</label>
          <input type="number" value={microwaveUsage} onChange={(e) => setMicrowaveUsage(e.target.value)} />
        </div>
        <div>
          <label>Air Conditioner Hours per Day:</label>
          <input type="number" value={airConditionerHours} onChange={(e) => setAirConditionerHours(e.target.value)} />
        </div>
        <div>
          <label>Washing Machine Usage per Day:</label>
          <input type="number" value={washingMachineUsage} onChange={(e) => setWashingMachineUsage(e.target.value)} />
        </div>
        <div>
          <label>Electric Heater Hours per Day:</label>
          <input type="number" value={electricHeaterHours} onChange={(e) => setElectricHeaterHours(e.target.value)} />
        </div>
        <div>
          <label>Vehicle Distance per Day (in km):</label>
          <input type="number" value={vehicleDistance} onChange={(e) => setVehicleDistance(e.target.value)} />
        </div>
        <div>
          <label>Dishwasher Usage per Day:</label>
          <input type="number" value={dishwasherUsage} onChange={(e) => setDishwasherUsage(e.target.value)} />
        </div>
        <div>
          <label>Computer Hours per Day:</label>
          <input type="number" value={computerHours} onChange={(e) => setComputerHours(e.target.value)} />
        </div>
        <div>
          <label>Electric Stove Usage per Day:</label>
          <input type="number" value={electricStoveUsage} onChange={(e) => setElectricStoveUsage(e.target.value)} />
        </div>
        <div>
          <label>Shared Vehicle Distance per Day (in km):</label>
          <input type="number" value={sharedVehicleUsage} onChange={(e) => setSharedVehicleUsage(e.target.value)} />
        </div>
        <button type="submit">Calculate Total Energy Consumption</button>
      </form>
      {totalEnergyConsumption > 0 && (
        <div>
          <p>Total Energy Consumption: {totalEnergyConsumption.toFixed(2)} kWh</p>
          <p>Consumption Range: {consumptionRange}</p>
          <p>Percentage Change from Average Consumption: {consumptionChange.toFixed(2)}%</p>
          {consumptionRange === 'High' && <p>Your energy consumption is high. Consider reducing usage or switching to more energy-efficient appliances.</p>}
          {consumptionRange === 'Low' && <p>Congratulations! Your energy consumption is below average. Keep up the good work!</p>}
        </div>
      )}
    </div>
  );
};

export default Energy;
