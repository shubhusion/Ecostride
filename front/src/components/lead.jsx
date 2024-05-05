import React, { useState } from 'react';
import './lead.css';
import Header from './header';
import Footer from './footer';
import Company from './company';
import Addop from './addop';

const Lead = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantities, setQuantities] = useState({});
  const initialQuantities = {};

  const rates = {
    "Lead Battery": 10,
    "Glass Bottle": 5,
    "Lead-acid Battery": 20,
    "Glass Jar": 4,
    "Lead Sheet": 15,
    "Glass Cup": 3,
    "Lead Pipe": 25,
    "Glass Plate": 6,
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
      <div className="lead-container">
        <h2>Choose your lead and glass waste:</h2>
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

export default Lead;
