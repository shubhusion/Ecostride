import React, { useState } from 'react';
import './Waste.css'; // Import CSS for styling

const WasteReduction = () => {
  // State variables to store form data
  const [auditData, setAuditData] = useState({
    wasteType: '',
    quantity: 0,
    date: ''
  });

  const [recyclingData, setRecyclingData] = useState({
    materialType: '',
    quantity: 0,
    date: ''
  });

  const [compostingData, setCompostingData] = useState({
    compostType: '',
    quantity: 0,
    date: ''
  });

  const [foodWasteData, setFoodWasteData] = useState({
    foodType: '',
    quantity: 0,
    date: ''
  });

  // Function to handle submitting waste audit data
  const submitAuditData = () => {
    console.log('Waste audit data submitted:', auditData);
    // Logic to submit audit data
  };

  // Function to handle submitting recycling data
  const submitRecyclingData = () => {
    console.log('Recycling data submitted:', recyclingData);
    // Logic to submit recycling data
  };

  // Function to handle submitting composting data
  const submitCompostingData = () => {
    console.log('Composting data submitted:', compostingData);
    // Logic to submit composting data
  };

  // Function to handle submitting food waste reduction data
  const submitFoodWasteData = () => {
    console.log('Food waste reduction data submitted:', foodWasteData);
    // Logic to submit food waste reduction data
  };

  return (
    <div className="waste-reduction-container">
      <h2>Waste Reduction</h2>
      <div className="waste-section">
        <h3>Waste Audit</h3>
        <form onSubmit={(e) => { e.preventDefault(); submitAuditData(); }}>
          <label>Waste Type:</label>
          <input type="text" value={auditData.wasteType} onChange={(e) => setAuditData({ ...auditData, wasteType: e.target.value })} />
          <label>Quantity:</label>
          <input type="number" value={auditData.quantity} onChange={(e) => setAuditData({ ...auditData, quantity: parseInt(e.target.value) })} />
          <label>Date:</label>
          <input type="date" value={auditData.date} onChange={(e) => setAuditData({ ...auditData, date: e.target.value })} />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="waste-section">
        <h3>Recycling Programs</h3>
        <form onSubmit={(e) => { e.preventDefault(); submitRecyclingData(); }}>
          <label>Material Type:</label>
          <input type="text" value={recyclingData.materialType} onChange={(e) => setRecyclingData({ ...recyclingData, materialType: e.target.value })} />
          <label>Quantity:</label>
          <input type="number" value={recyclingData.quantity} onChange={(e) => setRecyclingData({ ...recyclingData, quantity: parseInt(e.target.value) })} />
          <label>Date:</label>
          <input type="date" value={recyclingData.date} onChange={(e) => setRecyclingData({ ...recyclingData, date: e.target.value })} />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="waste-section">
        <h3>Composting</h3>
        <form onSubmit={(e) => { e.preventDefault(); submitCompostingData(); }}>
          <label>Compost Type:</label>
          <input type="text" value={compostingData.compostType} onChange={(e) => setCompostingData({ ...compostingData, compostType: e.target.value })} />
          <label>Quantity:</label>
          <input type="number" value={compostingData.quantity} onChange={(e) => setCompostingData({ ...compostingData, quantity: parseInt(e.target.value) })} />
          <label>Date:</label>
          <input type="date" value={compostingData.date} onChange={(e) => setCompostingData({ ...compostingData, date: e.target.value })} />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="waste-section">
        <h3>Food Waste Reduction</h3>
        <form onSubmit={(e) => { e.preventDefault(); submitFoodWasteData(); }}>
          <label>Food Type:</label>
          <input type="text" value={foodWasteData.foodType} onChange={(e) => setFoodWasteData({ ...foodWasteData, foodType: e.target.value })} />
          <label>Quantity:</label>
          <input type="number" value={foodWasteData.quantity} onChange={(e) => setFoodWasteData({ ...foodWasteData, quantity: parseInt(e.target.value) })} />
          <label>Date:</label>
          <input type="date" value={foodWasteData.date} onChange={(e) => setFoodWasteData({ ...foodWasteData, date: e.target.value })} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default WasteReduction;
