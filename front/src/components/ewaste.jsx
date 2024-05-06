import React, { useState, useEffect } from 'react';
import './plastic.css';
import Header from './header';
import Footer from './footer';
import Company from './company';
import Addop from './addop';
import axios from 'axios'; // Import Axios for making HTTP requests

const Plastic = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantities, setQuantities] = useState({});
  const [products, setProducts] = useState([]); // State to store fetched products
  const [cart, setCart] = useState([]);
  // Fetch products by category name from the server
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/product/find/ewaste'); // Assuming your API endpoint is '/api/products/:categoryName'
        console.log('Fetched products:', response.data);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
        // Handle error, e.g., show a message to the user
      }
    };

    fetchProducts();
  }, []); // Empty dependency array to run the effect only once on component mount

  // Initialize quantities state based on fetched products
  useEffect(() => {
    const initialQuantities = {};
    products.forEach(product => {
      initialQuantities[product.name] = 1; // Default quantity is 1 for each product
    });
    console.log('Initialized quantities:', initialQuantities);
    setQuantities(initialQuantities);
  }, [products]); // Run this effect whenever products state changes

  const handleClick = (item) => {
    setSelectedItem(item);
    // You can add logic here to inform the user about the amount they will get for their selected item
  };

  const handleAddToCart = (product) => {
    const cartItem = {
      productId: product.productId, // Use product.productId instead of product.id
      quantity: quantities[product.name],
    };
    console.log(cartItem)
    setCart(prevCart => [...prevCart, cartItem]);
  
    // Make the POST API call to send the cart data to the server
    axios.post('http://localhost:5000/api/cart/', cartItem)
      .then(response => {
        console.log('Cart item added:', response.data);
        // Handle successful response if needed
      })
      .catch(error => {
        console.error('Error adding cart item:', error);
        // Handle error if needed
      });
  };
  const handleIncrement = (item) => {
    setQuantities({ ...quantities, [item]: quantities[item] + 1 });
    console.log(`Incremented quantity of ${item} to ${quantities[item] + 1}`);
  };

  const handleDecrement = (item) => {
    if (quantities[item] > 1) {
      setQuantities({ ...quantities, [item]: quantities[item] - 1 });
      console.log(`Decremented quantity of ${item} to ${quantities[item] - 1}`);
    }
  };

  return (
    <>
      <Header />
      <Addop />
      <Company />
      <div className="plastic-container">
        <h2>Choose your ewaste:</h2>
        <div className="item-list">
          {products.map((product, index) => (
            <div key={index} className="item" onClick={() => handleClick(product.name)}>
              <h3>{product.name}</h3>
              <p>Rate: ${product.price}</p> {/* Using price from the fetched product */}
              <div className="quantity-controls">
                <button onClick={() => handleDecrement(product.name)}>-</button>
                <span>{quantities[product.name]}</span>
                <button onClick={() => handleIncrement(product.name)}>+</button>
              </div>
              <button className="add-to-cart" onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Plastic;
