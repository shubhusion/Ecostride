import React, { useState } from 'react';
import './sustain.css';
import Header from './header';
import Footer from './footer';
import Addop from './addop';
import Company from './company';

const Sustain = () => {
  const [activeTab, setActiveTab] = useState('All');

  const products = [
    { productId: 1, name: 'T-Shirt', description: 'Cotton T-Shirt', price: 20, categoryId: 'Recycled Active Wear', imageUrl: 'https://example.com/tshirt.jpg', inStock: true },
    { productId: 2, name: 'Sweatshirt', description: 'Hooded Sweatshirt', price: 30, categoryId: 'Recycled Active Wear', imageUrl: 'https://example.com/sweatshirt.jpg', inStock: true },
    { productId: 3, name: 'Jeans', description: 'Denim Jeans', price: 25, categoryId: 'Recycled Active Wear', imageUrl: 'https://example.com/jeans.jpg', inStock: true },
    { productId: 4, name: 'Sneakers', description: 'Canvas Sneakers', price: 40, categoryId: 'Recycled Active Wear', imageUrl: 'https://example.com/sneakers.jpg', inStock: true },
    { productId: 5, name: 'Blouse', description: 'Silk Blouse', price: 35, categoryId: 'Recycled Active Wear', imageUrl: 'https://example.com/blouse.jpg', inStock: true },
    { productId: 6, name: 'Leggings', description: 'Printed Leggings', price: 45, categoryId: 'Recycled Active Wear', imageUrl: 'https://example.com/leggings.jpg', inStock: true },
    { productId: 7, name: 'Dress', description: 'Party Dress', price: 50, categoryId: 'Recycled Active Wear', imageUrl: 'https://example.com/dress.jpg', inStock: true },
    { productId: 8, name: 'Socks', description: 'Cotton Socks', price: 15, categoryId: 'Recycled Active Wear', imageUrl: 'https://example.com/socks.jpg', inStock: true },
    { productId: 9, name: 'Jacket', description: 'Leather Jacket', price: 60, categoryId: 'Recycled Active Wear', imageUrl: 'https://example.com/jacket.jpg', inStock: true },
    { productId: 10, name: 'Scarf', description: 'Wool Scarf', price: 25, categoryId: 'Recycled Active Wear', imageUrl: 'https://example.com/scarf.jpg', inStock: true },
    { productId: 11, name: 'Yoga Pants', description: 'Stretchy Yoga Pants', price: 30, categoryId: 'Recycled Active Wear', imageUrl: 'https://example.com/yogapants.jpg', inStock: true },
    { productId: 12, name: 'Running Shoes', description: 'Lightweight Running Shoes', price: 70, categoryId: 'Recycled Active Wear', imageUrl: 'https://example.com/runningshoes.jpg', inStock: true },
    { productId: 13, name: 'Sports Bra', description: 'Moisture-Wicking Sports Bra', price: 40, categoryId: 'Recycled Active Wear', imageUrl: 'https://example.com/sportsbra.jpg', inStock: true },
    { productId: 14, name: 'Baseball Cap', description: 'Adjustable Baseball Cap', price: 20, categoryId: 'Recycled Active Wear', imageUrl: 'https://example.com/baseballcap.jpg', inStock: true },
    { productId: 15, name: 'Backpack', description: 'Water-Resistant Backpack', price: 50, categoryId: 'Recycled Active Wear', imageUrl: 'https://example.com/backpack.jpg', inStock: true },
    { productId: 16, name: 'Yoga Mat', description: 'Eco-Friendly Yoga Mat', price: 35, categoryId: 'Recycled Active Wear', imageUrl: 'https://example.com/yogamat.jpg', inStock: true },
    { productId: 17, name: 'Hiking Boots', description: 'Waterproof Hiking Boots', price: 80, categoryId: 'Recycled Active Wear', imageUrl: 'https://example.com/hikingboots.jpg', inStock: true },
    { productId: 18, name: 'Water Bottle', description: 'Stainless Steel Water Bottle', price: 15, categoryId: 'Recycled Active Wear', imageUrl: 'https://example.com/waterbottle.jpg', inStock: true },
    { productId: 19, name: 'Cycling Shorts', description: 'Padded Cycling Shorts', price: 45, categoryId: 'Recycled Active Wear', imageUrl: 'https://example.com/cyclingshorts.jpg', inStock: true },
    { productId: 20, name: 'Gym Gloves', description: 'Non-Slip Gym Gloves', price: 25, categoryId: 'Recycled Active Wear', imageUrl: 'https://example.com/gymgloves.jpg', inStock: true },
    { productId: 21, name: 'Hairband Set', description: 'Set of Elastic Hairbands', price: 10, categoryId: 'Recycled Active Wear', imageUrl: 'https://example.com/hairbands.jpg', inStock: true },
    { productId: 22, name: 'Dumbbell Set', description: 'Adjustable Dumbbell Set', price: 90, categoryId: 'Recycled Active Wear', imageUrl: 'https://example.com/dumbbells.jpg', inStock: true },
    { productId: 23, name: 'Swimsuit', description: 'One-Piece Swimsuit', price: 55, categoryId: 'Recycled Active Wear', imageUrl: 'https://example.com/swimsuit.jpg', inStock: true },
    { productId: 24, name: 'Running Shorts', description: 'Quick-Dry Running Shorts', price: 30, categoryId: 'Recycled Active Wear', imageUrl: 'https://example.com/running.jpg', inStock: true },
    { productId: 25, name: 'Athletic Headband', description: 'Sweat-Wicking Headband', price: 12, categoryId: 'Recycled Active Wear', imageUrl: 'https://example.com/headband.jpg', inStock: true },
    { productId: 26, name: 'Hiking Backpack', description: 'Durable Hiking Backpack', price: 70, categoryId: 'Recycled Active Wear', imageUrl: 'https://example.com/hikingbackpack.jpg', inStock: true },
    { productId: 27, name: 'Gym Towel', description: 'Microfiber Gym Towel', price: 18, categoryId: 'Recycled Active Wear', imageUrl: 'https://example.com/gymtowel.jpg', inStock: true },
    { productId: 28, name: 'Weightlifting Belt', description: 'Heavy-Duty Weightlifting Belt', price: 40, categoryId: 'Recycled Active Wear', imageUrl: 'https://example.com/weightliftingbelt.jpg', inStock: true },
    { productId: 29, name: 'Tennis Racket', description: 'Carbon Fiber Tennis Racket', price: 80, categoryId: 'Recycled Active Wear', imageUrl: 'https://example.com/tennisracket.jpg', inStock: true },
    { productId: 30, name: 'Compression Socks', description: 'Graduated Compression Socks', price: 25, categoryId: 'Recycled Active Wear', imageUrl: 'https://example.com/compressionsocks.jpg', inStock: true },
    // Recycled Plastic
  { productId: 31, name: 'Recycled Plastic Bottle', description: 'Eco-Friendly Water Bottle', price: 10, categoryId: 'Recycled Plastic', imageUrl: 'https://example.com/plasticbottle.jpg', inStock: true },
  { productId: 32, name: 'Recycled Plastic Chair', description: 'Outdoor Chair made from Recycled Plastic', price: 30, categoryId: 'Recycled Plastic', imageUrl: 'https://example.com/plasticchair.jpg', inStock: true },
  { productId: 33, name: 'Recycled Plastic Bag', description: 'Reusable Shopping Bag made from Recycled Plastic', price: 5, categoryId: 'Recycled Plastic', imageUrl: 'https://example.com/plasticbag.jpg', inStock: true },
  { productId: 34, name: 'Recycled Plastic Phone Case', description: 'Protective Phone Case made from Recycled Plastic', price: 15, categoryId: 'Recycled Plastic', imageUrl: 'https://example.com/phonecase.jpg', inStock: true },
  { productId: 35, name: 'Recycled Plastic Desk Organizer', description: 'Desk Organizer made from Recycled Plastic', price: 20, categoryId: 'Recycled Plastic', imageUrl: 'https://example.com/deskorganizer.jpg', inStock: true },
  { productId: 36, name: 'Recycled Plastic Sunglasses', description: 'Sunglasses made from Recycled Plastic', price: 25, categoryId: 'Recycled Plastic', imageUrl: 'https://example.com/sunglasses.jpg', inStock: true },
  { productId: 37, name: 'Recycled Plastic Toothbrush', description: 'Eco-Friendly Toothbrush made from Recycled Plastic', price: 8, categoryId: 'Recycled Plastic', imageUrl: 'https://example.com/toothbrush.jpg', inStock: true },
  { productId: 38, name: 'Recycled Plastic Laptop Stand', description: 'Adjustable Laptop Stand made from Recycled Plastic', price: 35, categoryId: 'Recycled Plastic', imageUrl: 'https://example.com/laptopstand.jpg', inStock: true },
  { productId: 39, name: 'Recycled Plastic Plant Pot', description: 'Planter Pot made from Recycled Plastic', price: 12, categoryId: 'Recycled Plastic', imageUrl: 'https://example.com/plantpot.jpg', inStock: true },
  { productId: 40, name: 'Recycled Plastic Bookshelf', description: 'Bookshelf made from Recycled Plastic', price: 40, categoryId: 'Recycled Plastic', imageUrl: 'https://example.com/bookshelf.jpg', inStock: true },

  // Wooden Products
  { productId: 41, name: 'Wooden Cutting Board', description: 'Durable Cutting Board made from Sustainable Wood', price: 18, categoryId: 'Wooden Products', imageUrl: 'https://example.com/cuttingboard.jpg', inStock: true },
  { productId: 42, name: 'Wooden Salad Bowl', description: 'Handcrafted Salad Bowl made from Sustainable Wood', price: 25, categoryId: 'Wooden Products', imageUrl: 'https://example.com/saladbowl.jpg', inStock: true },
  { productId: 43, name: 'Wooden Spoon Set', description: 'Set of Kitchen Spoons made from Sustainable Wood', price: 15, categoryId: 'Wooden Products', imageUrl: 'https://example.com/woodenspoons.jpg', inStock: true },
  { productId: 44, name: 'Wooden Desk Organizer', description: 'Desk Organizer made from Reclaimed Wood', price: 30, categoryId: 'Wooden Products', imageUrl: 'https://example.com/deskorganizer.jpg', inStock: true },
  { productId: 45, name: 'Wooden Photo Frame', description: 'Rustic Photo Frame made from Reclaimed Wood', price: 12, categoryId: 'Wooden Products', imageUrl: 'https://example.com/photoframe.jpg', inStock: true },
  { productId: 46, name: 'Wooden Serving Tray', description: 'Elegant Serving Tray made from Sustainable Wood', price: 20, categoryId: 'Wooden Products', imageUrl: 'https://example.com/servingtray.jpg', inStock: true },
  { productId: 47, name: 'Wooden Wine Rack', description: 'Handcrafted Wine Rack made from Reclaimed Wood', price: 35, categoryId: 'Wooden Products', imageUrl: 'https://example.com/win erack.jpg', inStock: true },
  { productId: 48, name: 'Wooden Coasters Set', description: 'Set of Coasters made from Sustainable Wood', price: 8, categoryId: 'Wooden Products', imageUrl: 'https://example.com/woodencoasters.jpg', inStock: true },
  { productId: 49, name: 'Wooden Desk Lamp', description: 'Vintage Desk Lamp made from Reclaimed Wood', price: 45, categoryId: 'Wooden Products', imageUrl: 'https://example.com/desklamp.jpg', inStock: true },
  { productId: 50, name: 'Wooden Wall Clock', description: 'Modern Wall Clock made from Sustainable Wood', price: 30, categoryId: 'Wooden Products', imageUrl: 'https://example.com/wallclock.jpg', inStock: true },

  // Farming
  { productId: 51, name: 'Organic Seeds Pack', description: 'Pack of Organic Seeds for Home Gardening', price: 10, categoryId: 'Farming', imageUrl: 'https://example.com/organicseeds.jpg', inStock: true },
  { productId: 52, name: 'Gardening Tools Set', description: 'Set of Essential Gardening Tools', price: 25, categoryId: 'Farming', imageUrl: 'https://example.com/gardeningtools.jpg', inStock: true },
  { productId: 53, name: 'Compost Bin', description: 'Compact Compost Bin for Kitchen Waste', price: 30, categoryId: 'Farming', imageUrl: 'https://example.com/compostbin.jpg', inStock: true },
  { productId: 54, name: 'Plant Watering Can', description: 'Stylish Watering Can for Indoor Plants', price: 15, categoryId: 'Farming', imageUrl: 'https://example.com/wateringcan.jpg', inStock: true },
  { productId: 55, name: 'Fruit Tree Sapling', description: 'Young Sapling of a Fruit Tree for Home Orchard', price: 20, categoryId: 'Farming', imageUrl: 'https://example.com/fruittreesapling.jpg', inStock: true },
  { productId: 56, name: 'Vegetable Garden Kit', description: 'Kit for Growing Fresh Vegetables at Home', price: 35, categoryId: 'Farming', imageUrl: 'https://example.com/vegetablegarden.jpg', inStock: true },
  { productId: 57, name: 'Herb Planter Box', description: 'Planter Box for Growing Fresh Herbs Indoors', price: 18, categoryId: 'Farming', imageUrl: 'https://example.com/herbplanter.jpg', inStock: true },
  { productId: 58, name: 'Portable Greenhouse', description: 'Mini Greenhouse for Protecting Plants', price: 40, categoryId: 'Farming', imageUrl: 'https://example.com/greenhouse.jpg', inStock: true },
  { productId: 59, name: 'Garden Soil Mix', description: 'Nutrient-Rich Soil Mix for Healthy Plants', price: 12, categoryId: 'Farming', imageUrl: 'https://example.com/soilmix.jpg', inStock: true },
  { productId: 60, name: 'Automatic Plant Waterer', description: 'Device for Automatic Watering of Plants', price: 25, categoryId: 'Farming', imageUrl: 'https://example.com/plantwaterer.jpg', inStock: true },

  // Stasher Bags
  { productId: 61, name: 'Reusable Sandwich Bag', description: 'Eco-Friendly Sandwich Bag for On-the-go Meals', price: 8, categoryId: 'Stasher Bags', imageUrl: 'https://example.com/sandwichbag.jpg', inStock: true },
  { productId: 62, name: 'Silicone Food Storage Bag', description: 'Versatile Food Storage Bag for Fridge and Freezer', price: 12, categoryId: 'Stasher Bags', imageUrl: 'https://example.com/foodstoragebag.jpg', inStock: true },
  { productId: 63, name: 'Ziplock Stand-Up Bag', description: 'Reusable Stand-Up Bag for Snacks and Dry Goods', price: 10, categoryId: 'Stasher Bags', imageUrl: 'https://example.com/standupbag.jpg', inStock: true },
  { productId: 64, name: 'Silicone Sous Vide Bag', description: 'Heat-Resistant Bag for Sous Vide Cooking', price: 15, categoryId: 'Stasher Bags', imageUrl: 'https://example.com/sousvidebag.jpg', inStock: true },
  { productId: 65, name: 'Mesh Produce Bags Set', description: 'Set of Reusable Bags for Fruits and Vegetables', price: 10, categoryId: 'Stasher Bags', imageUrl: 'https://example.com/producebags.jpg', inStock: true },
  { productId: 66, name: 'Reusable Snack Bag', description: 'Eco-Friendly Bag for Snacks and Lunches', price: 8, categoryId: 'Stasher Bags', imageUrl: 'https://example.com/snackbag.jpg', inStock: true },
  { productId: 67, name: 'Silicone Zipper Pouch', description: 'Zipper Pouch made from Food-Grade Silicone', price: 10, categoryId: 'Stasher Bags', imageUrl: 'https://example.com/zipperpouch.jpg', inStock: true },
  { productId: 68, name: 'Reusable Grocery Bag', description: 'Durable Bag for Grocery Shopping Trips', price: 10, categoryId: 'Stasher Bags', imageUrl: 'https://example.com/grocerybag.jpg', inStock: true },
  { productId: 69, name: 'Beeswax Food Wrap', description: 'Eco-Friendly Alternative to Plastic Wrap', price: 12, categoryId: 'Stasher Bags', imageUrl: 'https://example.com/beeswaxwrap.jpg', inStock: true },
  { productId: 70, name: 'Mesh Storage Bag', description: 'Breathable Bag for Storing Produce', price: 8, categoryId: 'Stasher Bags', imageUrl: 'https://example.com/meshbag.jpg', inStock: true },

  // Fruits
  { productId: 71, name: 'Apple', description: 'Fresh Organic Apple', price: 1, categoryId: 'Fruits', imageUrl: 'https://example.com/apple.jpg', inStock: true },
  { productId: 72, name: 'Banana', description: 'Ripe Banana', price: 0.5, categoryId: 'Fruits', imageUrl: 'https://example.com/banana.jpg', inStock: true },
  { productId: 73, name: 'Orange', description: 'Juicy Orange', price: 0.75, categoryId: 'Fruits', imageUrl: 'https://example.com/orange.jpg', inStock: true },
  { productId: 74, name: 'Grapes', description: 'Sweet Grapes', price: 2, categoryId: 'Fruits', imageUrl: 'https://example.com/grapes.jpg', inStock: true },
  { productId: 75, name: 'Strawberry', description: 'Fresh Strawberry', price: 0.25, categoryId: 'Fruits', imageUrl: 'https://example.com/strawberry.jpg', inStock: true },
  { productId: 76, name: 'Watermelon', description: 'Ripe Watermelon', price: 5, categoryId: 'Fruits', imageUrl: 'https://example.com/watermelon.jpg', inStock: true },
  { productId: 77, name: 'Pineapple', description: 'Sweet Pineapple', price: 3, categoryId: 'Fruits', imageUrl: 'https://example.com/pineapple.jpg', inStock: true },
  { productId: 78, name: 'Mango', description: 'Ripe Mango', price: 2.5, categoryId: 'Fruits', imageUrl: 'https://example.com/mango.jpg', inStock: true },
  { productId: 79, name: 'Peach', description: 'Juicy Peach', price: 1.5, categoryId: 'Fruits', imageUrl: 'https://example.com/peach.jpg', inStock: true },
  { productId: 80, name: 'Kiwi', description: 'Fresh Kiwi Fruit', price: 1.25, categoryId: 'Fruits', imageUrl: 'https://example.com/kiwi.jpg', inStock: true },

  // Vegetables
  { productId: 81, name: 'Carrot', description: 'Organic Carrot', price: 0.5, categoryId: 'Veggies', imageUrl: 'https://example.com/carrot.jpg', inStock: true },
  { productId: 82, name: 'Broccoli', description: 'Fresh Broccoli', price: 1, categoryId: 'Veggies', imageUrl: 'https://example.com/broccoli.jpg', inStock: true },
  { productId: 83, name: 'Tomato', description: 'Ripe Tomato', price: 0.75, categoryId: 'Veggies', imageUrl: 'https://example.com/tomato.jpg', inStock: true },
  { productId: 84, name: 'Spinach', description: 'Organic Spinach', price: 1.25, categoryId: 'Veggies', imageUrl: 'https://example.com/spinach.jpg', inStock: true },
  { productId: 85, name: 'Bell Pepper', description: 'Fresh Bell Pepper', price: 1, categoryId: 'Veggies', imageUrl: 'https://example.com/bellpepper.jpg', inStock: true },
  { productId: 86, name: 'Cucumber', description: 'English Cucumber', price: 0.75, categoryId: 'Veggies', imageUrl: 'https://example.com/cucumber.jpg', inStock: true },
  { productId: 87, name: 'Lettuce', description: 'Crisp Lettuce', price: 1.5, categoryId: 'Veggies', imageUrl: 'https://example.com/lettuce.jpg', inStock: true },
  { productId: 88, name: 'Onion', description: 'Yellow Onion', price: 0.5, categoryId: 'Veggies', imageUrl: 'https://example.com/onion.jpg', inStock: true },
  { productId: 89, name: 'Potato', description: 'Organic Potato', price: 0.75, categoryId: 'Veggies', imageUrl: 'https://example.com/potato.jpg', inStock: true },
  { productId: 90, name: 'Zucchini', description: 'Fresh Zucchini', price: 1, categoryId: 'Veggies', imageUrl: 'https://example.com/zucchini.jpg', inStock: true }

  ];
  

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    // Add logic to filter and display products based on the selected tab
  };

  // Function to filter products based on category
  const filteredProducts = activeTab === 'All' ? products : products.filter(product => product.categoryId === activeTab);

  return (
    <>
    <Header />
    <Addop />
    <Company />
    <div className="sustain-container">
      <div className="tab-container">
        <button
          className={activeTab === 'All' ? 'active' : ''}
          onClick={() => handleTabClick('All')}
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
          className={activeTab === 'Farming' ? 'active' : ''}
          onClick={() => handleTabClick('Farming')}
        >
          Farming
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
          Veggies
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

export default Sustain;
