import React from 'react';
import './cartBuy.css';
import Header from './header';
import Footer from './footer';
import { useState } from 'react';
import Addop from './addop';
import Company from './company';
import {loadStripe} from '@stripe/stripe-js';
import { useNavigate } from "react-router-dom";
import { faCartPlus, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';


const CartBuy = () => {
    const [cart, setCart] = useState([
        { id: 1, name: 'T-Shirt', price: 20, quantity: 2, image: 'tshirt.jpg' },
        { id: 2, name: 'Jeans', price: 30, quantity: 1, image: 'jeans.jpg' },
        { id: 3, name: 'Sneakers', price: 50, quantity: 1, image: 'sneakers.jpg' },
        // Add more products with their details including images
    ]);
    console.log("Hello")
    console.log(process.env.REACT_APP_STRIPE_PUBLIC_KEY)

    // Function to calculate total price for buying products
    const calculateTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    // Function to handle increasing quantity
    const handleIncreaseQuantity = (index) => {
        const updatedCart = [...cart];
        updatedCart[index].quantity++;
        setCart(updatedCart);
    };

    // Function to handle decreasing quantity
    const handleDecreaseQuantity = (index) => {
        const updatedCart = [...cart];
        if (updatedCart[index].quantity > 1) {
            updatedCart[index].quantity--;
        }if (updatedCart[index].quantity <= 0) {
            updatedCart.splice(index, 1); // Remove the product from the cart array
        }
        setCart(updatedCart);
    };


    const handlePayment = async () => {
        const stripePromise = await loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
    
        const res = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/create-checkout-session`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(cart)
        });

        //if (res.status === 500) return;

        const data = await res.json();
        console.log(data);

        stripePromise.redirectToCheckout({ sessionId: data.id });
    };

    return (
        <>
            <Header />
            <Addop />
            <Company/>
            <div className="cart-container">
                <h2>Your Buy Cart</h2>
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
                    <button onClick={handlePayment}>Pay Now</button>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CartBuy;
