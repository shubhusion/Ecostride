import React, { useState } from 'react';
import './cartSell.css';
import Header from './header';
import Footer from './footer';
import Company from './company';
import Addop from './addop';

const CartSell = () => {
  const [cart, setCart] = useState([
    { id: 1, name: 'Glass Bottle', price: 5, quantity: 3, image: 'glass-bottle.jpg' },
    { id: 2, name: 'Lead Pipe', price: 8, quantity: 2, image: 'lead-pipe.jpg' },
    // Add more products with their details including images
  ]);
  const [pickupMessage, setPickupMessage] = useState('');

  // Function to calculate total price for selling products
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Function to handle increasing quantity
  const handleIncreaseQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity++;
    setCart(updatedCart);
  };

  // Function to handle decreasing quantity or remove product from cart if quantity is 0
  const handleDecreaseQuantity = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity--;
    } else if (updatedCart[index].quantity === 1) {
      updatedCart.splice(index, 1); // Remove the product from the cart array
    }
    setCart(updatedCart);
  };

  // Function to call rider for pickup
  const callRider = () => {
    // Placeholder logic for calling rider
    setPickupMessage('Rider called for pickup !!');
  };

  return (
    <>
      <Header />
      <Addop />
      <Company/>
      <div className="cart-container">
        <h2>Your Selling Cart</h2>
        <div className="product-list">
          {cart.map((product, index) => (
            <div key={index} className="product-item">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <p>{product.name}</p>
                <p>Price: ${product.price}</p>
                <div className="quantity-controls">
                  <button onClick={() => handleDecreaseQuantity(index)}>-</button>
                  <span>{product.quantity}</span>
                  <button onClick={() => handleIncreaseQuantity(index)}>+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="total-price">
          <p>Total Price: ${calculateTotalPrice()}</p>
          <button onClick={callRider}>Call Rider Now</button>
          {pickupMessage && <p>{pickupMessage}</p>}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartSell;
