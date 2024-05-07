import React, { useState, useEffect } from 'react';
import './clothes.css'; // Importing CSS as before
import Header from './header';
import Footer from './footer';
import Company from './company';
import Addop from './addop';
import axios from 'axios';

const Clothes = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log("Fetching products...");
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/product/');
      console.log("Products fetched successfully:", response.data);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleTabClick = async (categoryName) => {
    console.log("Tab clicked:", categoryName);
    setActiveTab(categoryName);
    try {
      const response = await axios.get(`http://localhost:5000/api/product/find/${categoryName}`);
      console.log(`Products filtered by ${categoryName} fetched successfully:`, response.data);
      setProducts(response.data);
    } catch (error) {
      console.error('Error filtering products by category:', error);
    }
  };

  const addToCart = async (product) => {
    try {
      const response = await axios.post('http://localhost:5000/api/buycart/', {
        productId: product.productId,
        quantity: 1  // Set quantity to 1 when adding to cart
      });
      console.log("Product added to cart:", response.data);
      setCart([...cart, { ...product, quantity: 1 }]);
      const updatedProducts = products.map((p) => {
        if (p.productId === product.productId) {
          return { ...p, addedToCart: true, quantity: 1 }; // Ensure quantity is set
        }
        return p;
      });
      setProducts(updatedProducts);
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };
  
  const incrementQuantity = (productId) => {
    const updatedProducts = products.map((product) => {
      if (product.productId === productId) {
        return { ...product, quantity: (product.quantity || 0) + 1 }; // Ensure quantity is valid
      }
      return product;
    });
    setProducts(updatedProducts);
  };
  
  const decrementQuantity = (productId) => {
    const updatedProducts = products.map((product) => {
      if (product.productId === productId && product.quantity > 1) {
        return { ...product, quantity: (product.quantity || 0) - 1 }; // Ensure quantity is valid
      }
      return product;
    });
    setProducts(updatedProducts);
  };
  

  console.log("Rendering...");
  return (
    <>
      <Header />
      <Addop />
      <Company />
      <div className="clothes-container">
        <div className="tab-container">
          <button
            className={activeTab === 'All' ? 'active' : ''}
            onClick={() => fetchProducts()}
          >
            All
          </button>
          <button
            className={activeTab === 'Men' ? 'active' : ''}
            onClick={() => handleTabClick('Men')}
          >
            Men
          </button>
          <button
            className={activeTab === 'Women' ? 'active' : ''}
            onClick={() => handleTabClick('Women')}
          >
            Women
          </button>
          <button
            className={activeTab === 'Boys' ? 'active' : ''}
            onClick={() => handleTabClick('Boys')}
          >
            Boys
          </button>
          <button
            className={activeTab === 'Girls' ? 'active' : ''}
            onClick={() => handleTabClick('Girls')}
          >
            Girls
          </button>
          <button
            className={activeTab === 'Aged' ? 'active' : ''}
            onClick={() => handleTabClick('Aged')}
          >
            Old Age
          </button>
        </div>
        <div className="product-container">
          {products.map((product) => (
            <div key={product.productId} className="product-item">
              <img src={product.imageUrl} alt={product.name} />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <div className="quantity-controls">
                  <button className="quantity-btn" onClick={() => decrementQuantity(product.productId)}>-</button>
                  <span className="quantity">{product.quantity}</span>
                  <button className="quantity-btn" onClick={() => incrementQuantity(product.productId)}>+</button>
                </div>
                {product.addedToCart ? (
                  <button className="add-to-cart added-to-cart">Item Added</button>
                ) : (
                  <button className="add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Clothes;
