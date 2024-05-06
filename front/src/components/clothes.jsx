import React, { useState, useEffect } from 'react';
import './clothes.css';
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
            All Clothes
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
            Aged Clothes
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
                <button onClick={() => addToCart(product)}>Add to Cart</button>
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
