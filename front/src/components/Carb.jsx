import React, { useState } from 'react';
import './carbon.css';
import Header from './header';
import Company from './company';
import Addop from './addop';
import Footer from './footer';

function Carb() {
  const [formData, setFormData] = useState({});
  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/calculate-carbon-footprint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const resultData = await response.json();
      setResult(resultData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <Header />
      <Addop />
      <Company />
      <div className="carb-container">
        <div className="carb-title">Carbon Footprint Calculator</div>
        <form className="carb-form" onSubmit={handleSubmit}>
          <label htmlFor="electricBill">Monthly Electric Bill (kWh): </label>
          <input type="number" id="electricBill" name="electricBill" onChange={handleInputChange} /><br />

          <label htmlFor="gasBill">Monthly Gas Bill: </label>
          <input type="number" id="gasBill" name="gasBill" onChange={handleInputChange} /><br />

          <label htmlFor="oilBill">Monthly Oil Bill: </label>
          <input type="number" id="oilBill" name="oilBill" onChange={handleInputChange} /><br />

          <label htmlFor="carMileage">Total Yearly Mileage on Your Car: </label>
          <input type="number" id="carMileage" name="carMileage" onChange={handleInputChange} /><br />

          <label htmlFor="shortFlights">Number of Flights (4 hours or less): </label>
          <input type="number" id="shortFlights" name="shortFlights" onChange={handleInputChange} /><br />

          <label htmlFor="longFlights">Number of Flights (4 hours or more): </label>
          <input type="number" id="longFlights" name="longFlights" onChange={handleInputChange} /><br />

          <label htmlFor="recycleNewspaper">Do NOT Recycle Newspaper (Add 184): </label>
          <input
            type="checkbox"
            id="recycleNewspaper"
            name="recycleNewspaper"
            onChange={(e) => handleInputChange({ ...e, target: { ...e.target, value: e.target.checked } })}
          />
          <br />

          <label htmlFor="recycleAluminum">Do NOT Recycle Aluminum and Tin (Add 166): </label>
          <input
            type="checkbox"
            id="recycleAluminum"
            name="recycleAluminum"
            onChange={(e) => handleInputChange({ ...e, target: { ...e.target, value: e.target.checked } })}
          />
          <br />

          <input type="submit" value="Calculate" />
        </form>
        {result && (
          <div className="carb-output">
            <p>Your Total Carbon Footprint: {result.totalFootprint.toFixed(2)} pounds per year</p>
            <p>Category: {result.category}</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Carb;
