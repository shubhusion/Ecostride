import React, { useState } from 'react';
import './clothes.css';
import Header from './header';
import Footer from './footer';
import Company from './company';
import Addop from './addop';

const Clothes = () => {
  const [activeTab, setActiveTab] = useState('All');
  
  const products = [
    { productId: 1, name: 'T-Shirt', description: 'Cotton T-Shirt', price: 20, categoryId: 'Men', imageUrl: 'https://example.com/tshirt.jpg', inStock: true },
    { productId: 2, name: 'Jeans', description: 'Denim Jeans', price: 30, categoryId: 'Men', imageUrl: 'https://example.com/jeans.jpg', inStock: true },
    { productId: 3, name: 'Dress Shirt', description: 'Formal Dress Shirt', price: 25, categoryId: 'Men', imageUrl: 'https://example.com/shirt.jpg', inStock: true },
    { productId: 4, name: 'Dress Shoes', description: 'Leather Dress Shoes', price: 50, categoryId: 'Men', imageUrl: 'https://example.com/shoes.jpg', inStock: true },
    { productId: 5, name: 'Blouse', description: 'Silk Blouse', price: 35, categoryId: 'Women', imageUrl: 'https://example.com/blouse.jpg', inStock: true },
    { productId: 6, name: 'Skirt', description: 'A-line Skirt', price: 40, categoryId: 'Women', imageUrl: 'https://example.com/skirt.jpg', inStock: true },
    { productId: 7, name: 'High Heels', description: 'Stiletto High Heels', price: 45, categoryId: 'Women', imageUrl: 'https://example.com/heels.jpg', inStock: true },
    { productId: 8, name: 'Sweatshirt', description: 'Hooded Sweatshirt', price: 30, categoryId: 'Women', imageUrl: 'https://example.com/sweatshirt.jpg', inStock: true },
    { productId: 9, name: 'T-Shirt', description: 'Cotton T-Shirt', price: 20, categoryId: 'Boys', imageUrl: 'https://example.com/boystshirt.jpg', inStock: true },
    { productId: 10, name: 'Shorts', description: 'Cargo Shorts', price: 25, categoryId: 'Boys', imageUrl: 'https://example.com/boysshorts.jpg', inStock: true },
    { productId: 11, name: 'Sneakers', description: 'Canvas Sneakers', price: 30, categoryId: 'Boys', imageUrl: 'https://example.com/boyssneakers.jpg', inStock: true },
    { productId: 12, name: 'Dress', description: 'Party Dress', price: 40, categoryId: 'Girls', imageUrl: 'https://example.com/girlsdress.jpg', inStock: true },
    { productId: 13, name: 'Leggings', description: 'Printed Leggings', price: 20, categoryId: 'Girls', imageUrl: 'https://example.com/girlsleggings.jpg', inStock: true },
    { productId: 14, name: 'Sandals', description: 'Summer Sandals', price: 25, categoryId: 'Girls', imageUrl: 'https://example.com/girlssandals.jpg', inStock: true },
    { productId: 15, name: 'Trousers', description: 'Formal Trousers', price: 35, categoryId: 'Aged', imageUrl: 'https://example.com/agedtrousers.jpg', inStock: true },
    { productId: 16, name: 'Cardigan', description: 'Knit Cardigan', price: 30, categoryId: 'Aged', imageUrl: 'https://example.com/agedcardigan.jpg', inStock: true },
    { productId: 17, name: 'Slippers', description: 'House Slippers', price: 15, categoryId: 'Aged', imageUrl: 'https://example.com/agedslippers.jpg', inStock: true },
    { productId: 18, name: 'Jacket', description: 'Leather Jacket', price: 60, categoryId: 'Men', imageUrl: 'https://example.com/jacket.jpg', inStock: true },
    { productId: 19, name: 'Scarf', description: 'Wool Scarf', price: 25, categoryId: 'Women', imageUrl: 'https://example.com/scarf.jpg', inStock: true },
    { productId: 20, name: 'Hat', description: 'Fedora Hat', price: 20, categoryId: 'All', imageUrl: 'https://example.com/hat.jpg', inStock: true },
  ];
  
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    // Add logic to filter and display products based on the selected tab
  };

  // Function to filter products based on category
  const filteredProducts = activeTab === 'All' ? products : products.filter(product => product.categoryId === activeTab);

  return (
    <>
    <Header/>
    <Addop />
    <Company />
    <div className="clothes-container">
      <div className="tab-container">
        <button
          className={activeTab === 'All' ? 'active' : ''}
          onClick={() => handleTabClick('All')}
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
        {filteredProducts.map(product => (
          <div key={product.productId} className="product-item">
            <img src={product.imageUrl} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>${product.price}</p>
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
