import React, { useState } from 'react';
import './food.css';
import Header from './header';
import Footer from './footer';
import Company from './company';
import Addop from './addop';

const Food = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [cart, setCart] = useState([]);
  
  const products = [
    // Pulses
    { productId: 1, name: 'Lentils', description: 'Red Lentils', price: 5, categoryId: 'Pulses', imageUrl: 'https://example.com/lentils.jpg', inStock: true },
    { productId: 2, name: 'Chickpeas', description: 'Dried Chickpeas', price: 4, categoryId: 'Pulses', imageUrl: 'https://example.com/chickpeas.jpg', inStock: true },
    { productId: 3, name: 'Black Beans', description: 'Canned Black Beans', price: 3, categoryId: 'Pulses', imageUrl: 'https://example.com/blackbeans.jpg', inStock: true },
  
    // Breads
    { productId: 4, name: 'White Bread', description: 'Sliced White Bread', price: 2, categoryId: 'Breads', imageUrl: 'https://example.com/whitebread.jpg', inStock: true },
    { productId: 5, name: 'Whole Wheat Bread', description: 'Whole Wheat Loaf', price: 3, categoryId: 'Breads', imageUrl: 'https://example.com/wholewheatbread.jpg', inStock: true },
    { productId: 6, name: 'Bagels', description: 'Plain Bagels', price: 1.5, categoryId: 'Breads', imageUrl: 'https://example.com/bagels.jpg', inStock: true },
  
    // Vegetables
    { productId: 7, name: 'Tomatoes', description: 'Fresh Tomatoes', price: 1, categoryId: 'Vegetables', imageUrl: 'https://example.com/tomatoes.jpg', inStock: true },
    { productId: 8, name: 'Spinach', description: 'Fresh Spinach Leaves', price: 2, categoryId: 'Vegetables', imageUrl: 'https://example.com/spinach.jpg', inStock: true },
    { productId: 9, name: 'Carrots', description: 'Bag of Carrots', price: 1.5, categoryId: 'Vegetables', imageUrl: 'https://example.com/carrots.jpg', inStock: true },
  
    // Non-Veg
    { productId: 10, name: 'Chicken Breast', description: 'Boneless Chicken Breast', price: 5, categoryId: 'Non-Veg', imageUrl: 'https://example.com/chickenbreast.jpg', inStock: true },
    { productId: 11, name: 'Salmon Fillet', description: 'Fresh Salmon Fillet', price: 8, categoryId: 'Non-Veg', imageUrl: 'https://example.com/salmon.jpg', inStock: true },
    { productId: 12, name: 'Ground Beef', description: 'Lean Ground Beef', price: 6, categoryId: 'Non-Veg', imageUrl: 'https://example.com/beef.jpg', inStock: true },
  
    // Main Course
    { productId: 13, name: 'Spaghetti', description: 'Italian Pasta Spaghetti', price: 2, categoryId: 'Main Course', imageUrl: 'https://example.com/spaghetti.jpg', inStock: true },
    { productId: 14, name: 'Rice', description: 'Long Grain Rice', price: 1.5, categoryId: 'Main Course', imageUrl: 'https://example.com/rice.jpg', inStock: true },
    { productId: 15, name: 'Quinoa', description: 'Organic Quinoa', price: 3, categoryId: 'Main Course', imageUrl: 'https://example.com/quinoa.jpg', inStock: true },
  
    // Chinese
    { productId: 16, name: 'Egg Fried Rice', description: 'Classic Egg Fried Rice', price: 4, categoryId: 'Chinese', imageUrl: 'https://example.com/eggfriedrice.jpg', inStock: true },
    { productId: 17, name: 'Sweet and Sour Chicken', description: 'Tangy Sweet and Sour Chicken', price: 6, categoryId: 'Chinese', imageUrl: 'https://example.com/sweetandsourchicken.jpg', inStock: true },
    { productId: 18, name: 'Spring Rolls', description: 'Crispy Vegetable Spring Rolls', price: 3.5, categoryId: 'Chinese', imageUrl: 'https://example.com/springrolls.jpg', inStock: true },
  
    // South Indian
    { productId: 19, name: 'Dosa', description: 'Crispy South Indian Dosa', price: 3, categoryId: 'South Indian', imageUrl: 'https://example.com/dosa.jpg', inStock: true },
    { productId: 20, name: 'Idli', description: 'Steamed South Indian Idli', price: 2.5, categoryId: 'South Indian', imageUrl: 'https://example.com/idli.jpg', inStock: true },
    { productId: 21, name: 'Sambhar', description: 'Traditional South Indian Sambhar', price: 2, categoryId: 'South Indian', imageUrl: 'https://example.com/sambhar.jpg', inStock: true },
  
    // Snacks
    { productId: 22, name: 'Potato Chips', description: 'Classic Potato Chips', price: 1.5, categoryId: 'Snacks', imageUrl: 'https://example.com/potatochips.jpg', inStock: true },
    { productId: 23, name: 'Popcorn', description: 'Buttered Popcorn', price: 2, categoryId: 'Snacks', imageUrl: 'https://example.com/popcorn.jpg', inStock: true },
    { productId: 24, name: 'Pretzels', description: 'Salted Pretzels', price: 1.8, categoryId: 'Snacks', imageUrl: 'https://example.com/pretzels.jpg', inStock: true },
  ];
  
  
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    // Add logic to filter and display products based on the selected tab
  };

  // Function to filter products based on category
  const filteredProducts = activeTab === 'All' ? products : products.filter(product => product.categoryId === activeTab);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <>
    <Header/>
    <Addop />
    <Company />
    <div className="food-container">
      <div className="tab-container">
        <button
          className={activeTab === 'All' ? 'active' : ''}
          onClick={() => handleTabClick('All')}
        >
          All Food
        </button>
        <button
          className={activeTab === 'Pulses' ? 'active' : ''}
          onClick={() => handleTabClick('Pulses')}
        >
          Pulses
        </button>
        <button
          className={activeTab === 'Breads' ? 'active' : ''}
          onClick={() => handleTabClick('Breads')}
        >
          Breads
        </button>
        <button
          className={activeTab === 'Vegetables' ? 'active' : ''}
          onClick={() => handleTabClick('Vegetables')}
        >
          Vegetables
        </button>
        <button
          className={activeTab === 'Non-Veg' ? 'active' : ''}
          onClick={() => handleTabClick('Non-Veg')}
        >
          Non-Veg
        </button>
        <button
          className={activeTab === 'Main Course' ? 'active' : ''}
          onClick={() => handleTabClick('Main Course')}
        >
          Main Course
        </button>
        <button
          className={activeTab === 'Chinese' ? 'active' : ''}
          onClick={() => handleTabClick('Chinese')}
        >
          Chinese
        </button>
        <button
          className={activeTab === 'South Indian' ? 'active' : ''}
          onClick={() => handleTabClick('South Indian')}
        >
          South Indian
        </button>
        <button
          className={activeTab === 'Snacks' ? 'active' : ''}
          onClick={() => handleTabClick('Snacks')}
        >
          Snacks
        </button>
      </div>
      <div className="product-container">
          {filteredProducts.map(product => (
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

export default Food;
