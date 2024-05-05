import React, { useState } from 'react';
import './ewaste.css';
import Header from './header';
import Footer from './footer';
import Company from './company';
import Addop from './addop';

const EWaste = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantities, setQuantities] = useState({});
  const initialQuantities = {};

  const rates = {
    "Laptop": 100,
    "Smartphone": 50,
    "Tablet": 40,
    "Printer": 70,
    "Monitor": 80,
    "Keyboard": 20,
    "Mouse": 15,
    "Desktop Computer": 90,
    "Digital Camera": 30,
    "Television": 120,
    "DVD Player": 35,
    "VCR Player": 25,
    "Audio Equipment": 45,
    "Gaming Console": 60,
    "External Hard Drive": 55,
    "Router": 40,
    "Modem": 30,
    "Landline Phone": 20,
    "Portable Music Player": 25,
    "E-reader": 30,
  };

  // Initialize quantities state
  Object.keys(rates).forEach(item => {
    initialQuantities[item] = 1; // Default quantity is 1 for each item
  });
  useState(() => setQuantities(initialQuantities));

  const handleClick = (item) => {
    setSelectedItem(item);
    // You can add logic here to inform the user about the amount they will get for their selected item
  };

  const handleAddToCart = (item) => {
    // Add logic to add the selected item and quantity to the cart
    // For example:
    // addToCart(item, quantities[item]);
    console.log(`Added ${quantities[item]} ${item}(s) to cart.`);
  };

  const handleIncrement = (item) => {
    setQuantities({ ...quantities, [item]: quantities[item] + 1 });
  };

  const handleDecrement = (item) => {
    if (quantities[item] > 1) {
      setQuantities({ ...quantities, [item]: quantities[item] - 1 });
    }
  };

  return (
    <>
      <Header />
      <Addop />
      <Company />
      <div className="ewaste-container">
        <h2>Choose your electronic waste:</h2>
        <div className="item-list">
          {Object.keys(rates).map((item, index) => (
            <div key={index} className="item" onClick={() => handleClick(item)}>
              <h3>{item}</h3>
              <p>Rate: ${rates[item]}</p>
              <div className="quantity-controls">
                <button onClick={() => handleDecrement(item)}>-</button>
                <span>{quantities[item]}</span>
                <button onClick={() => handleIncrement(item)}>+</button>
              </div>
              <button className="add-to-cart" onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EWaste;
