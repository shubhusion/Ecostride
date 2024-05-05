import React, { useState } from 'react';
import './iron.css';
import Header from './header';
import Footer from './footer';
import Company from './company';
import Addop from './addop';

const Iron = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantities, setQuantities] = useState({});
  const initialQuantities = {};

  const rates = {
    "Iron Nails": 3,
    "Iron Bolts": 5,
    "Iron Pipes": 8,
    "Iron Bars": 10,
    "Iron Sheets": 12,
    "Iron Rods": 6,
    "Iron Plates": 4,
    "Iron Wires": 7,
    "Iron Scraps": 9,
    "Iron Ingots": 20,
    "Iron Beams": 25,
    "Iron Rails": 15,
    "Iron Chains": 18,
    "Iron Hinges": 22,
    "Iron Rivets": 30,
    "Iron Fasteners": 35,
    "Iron Shackles": 40,
    "Iron Anchors": 45,
    "Iron Fittings": 50,
    "Iron Gratings": 55,
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
      <div className="iron-container">
        <h2>Choose your iron waste products:</h2>
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

export default Iron;
