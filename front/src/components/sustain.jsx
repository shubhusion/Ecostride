import React, { useState, useEffect } from 'react';
import './sustain.css';
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

  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
    const updatedProducts = products.map((p) => {
      if (p.productId === product.productId) {
        return { ...p, addedToCart: true };
      }
      return p;
    });
    setProducts(updatedProducts);
  };

  console.log("Rendering...");
  return (
    <>
      <Header />
      <Addop />
      <Company />
      <div className="sustain-container">
        <div className="tab-container">
          <button
            className={activeTab === 'All' ? 'active' : ''}
            onClick={() => fetchProducts()}
          >
            All
          </button>
          <button
            className={activeTab === 'Recycled Active Wear' ? 'active' : ''}
            onClick={() => handleTabClick('Recycled Active Wear')}
          >
            Recycled Active Wear
          </button>
          <button
            className={activeTab === 'Recycled Plastic' ? 'active' : ''}
            onClick={() => handleTabClick('Recycled Plastic')}
          >
            Recycled Plastic
          </button>
          <button
            className={activeTab === 'Wooden Products' ? 'active' : ''}
            onClick={() => handleTabClick('Wooden Products')}
          >
            Wooden Products
          </button>
          <button
            className={activeTab === 'Stasher Bags' ? 'active' : ''}
            onClick={() => handleTabClick('Stasher Bags')}
          >
            Stasher Bags
          </button>
          <button
            className={activeTab === 'Fruits' ? 'active' : ''}
            onClick={() => handleTabClick('Fruits')}
          >
            Fruits
          </button>
          <button
            className={activeTab === 'Veggies' ? 'active' : ''}
            onClick={() => handleTabClick('Veggies')}
          >
            Vegetables
          </button>
          <button
            className={activeTab === 'Farming' ? 'active' : ''}
            onClick={() => handleTabClick('Farming')}
          >
            Farming
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
