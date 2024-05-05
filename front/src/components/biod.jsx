import React, { useState } from 'react';
import './biod.css';
import Header from './header';
import Footer from './footer';
import Company from './company';
import Addop from './addop';

const Biod = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantities, setQuantities] = useState({});
  const initialQuantities = {};

  const rates = {
    "Fruit Peels": 3,
    "Vegetable Waste": 2,
    "Tea Bags": 1,
    "Coffee Grounds": 4,
    "Paper Waste": 5,
    "Cardboard": 4,
    "Grass Clippings": 2,
    "Leaves": 3,
    "Flower Waste": 2,
    "Eggshells": 1,
    "Wood Scraps": 6,
    "Sawdust": 3,
    "Cotton Cloth": 4,
    "Jute Bags": 5,
    "Coconut Husk": 2,
    "Bamboo Leaves": 3,
    "Corn Husk": 2,
    "Rice Husk": 3,
    "Pine Needles": 2,
    "Straw": 3,
  };

  // Initialize quantities state
  Object.keys(rates).forEach(item => {
    initialQuantities[item] = 1; // Default quantity is 1 kg for each item
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
    console.log(`Added ${quantities[item]} kg of ${item} to cart.`);
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
      <div className="biod-container">
        <h2>Choose your biodegradable waste:</h2>
        <div className="item-list">
          {Object.keys(rates).map((item, index) => (
            <div key={index} className="item" onClick={() => handleClick(item)}>
              <h3>{item}</h3>
              <p>Rate: ${rates[item]} per kg</p>
              <div className="quantity-controls">
                <button onClick={() => handleDecrement(item)}>-</button>
                <span>{quantities[item]} kg</span>
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

export default Biod;
