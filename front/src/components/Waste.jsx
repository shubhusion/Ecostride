import React, { useState } from 'react';
import './Waste.css';
import Header from './header';
import Addop from './addop';
import Company from './company';
import Footer from './footer';


const Waste = () => {
  const [wasteData, setWasteData] = useState({
    'Compost Your Food Scrap': { action: false },
    'Recycled Waste': { action: false },
    'Reduced the use of Paper Bags': { action: false },
    'Bough Goods in Bulk': { action: false },
    'Reduced Food Wastage': { action: false },
    'Donated Clothes': { action: false },
    'No Plastic Bottles': { action: false },
    'Avoided Plastic Wrappers': { action: false },
    'Use Digital Instead Of Print': { action: false },
  });

  const [showOutput, setShowOutput] = useState(false);

  const handleActionChange = (parameter, value) => {
    setWasteData((prevData) => ({
      ...prevData,
      [parameter]: {
        action: value,
      },
    }));
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    setShowOutput(true);
  };

  const calculateTotalImpact = () => {
    let totalImpact = 0;
    for (const parameter in wasteData) {
      if (wasteData[parameter].action) {
        totalImpact += 1;
      }
    }
    return totalImpact;
  };

  const calculateCoinsEarned = (totalImpact) => {
    // Coins earned calculation logic based on total impact
    return totalImpact * 2; // Arbitrary calculation for demonstration purposes
  };

  const totalImpact = calculateTotalImpact();
  const coinsEarned = calculateCoinsEarned(totalImpact);

  const suggestions = [
    'Keep up the good work! Every action you take to reduce waste makes a difference.',
    'Consider sharing your waste reduction efforts with friends and family to inspire others.',
    'Explore more ways to reduce waste in your daily life, such as using reusable products and supporting eco-friendly brands.',
    'Try to involve your community in waste reduction activities by organizing clean-up events or awareness campaigns.',
    'Educate yourself further on environmental issues and the impact of waste on ecosystems to become a more informed advocate for sustainability.',
    'Celebrate your achievements in waste reduction, no matter how small. Every effort counts!',
    'Reuse items whenever possible to extend their lifespan and reduce the need for new products.',
    'Support local businesses and farmers markets to reduce packaging waste and transportation emissions.',
    'Get creative with upcycling projects to give new life to old or discarded items.',
  ];

  const appreciationMessages = [
    "Congratulations! You're doing an excellent job in reducing waste and making a positive impact on the environment.",
    'Great job on taking steps to reduce waste! Your efforts contribute to a cleaner and healthier planet.',
    'Well done! Your commitment to waste reduction is inspiring. Keep up the fantastic work!',
    'Thank you for being a responsible citizen and making conscious choices to minimize waste. Your actions make a difference!',
  ];

  // Randomly select an appreciation message
  const randomAppreciation = appreciationMessages[Math.floor(Math.random() * appreciationMessages.length)];

  // Randomly select 3 suggestions
  const randomSuggestions = Array.from({ length: 3 }, () => suggestions[Math.floor(Math.random() * suggestions.length)]);

  return (
    <>
    <Header />
    <Addop />
    <Company />
    <div className="waste-container">
      <h2 className="waste-title">Waste Reduction Calculator</h2>
      <form className="waste-form" onSubmit={handleCalculate}>
        {Object.keys(wasteData).map((parameter, index) => (
          <div className="waste-item" key={index}>
            <h3>{parameter}</h3>
            <label>
              {parameter.replace(/([a-z])([A-Z])/g, '$1 $2')} today?
              <input
                className="waste-checkbox"
                type="checkbox"
                checked={wasteData[parameter].action}
                onChange={(e) => handleActionChange(parameter, e.target.checked)}
              />
            </label>
          </div>
        ))}
        <button className="waste-calculate-button" type="submit">Calculate</button>
      </form>

      {showOutput && (
        <div className="waste-output-container">
          <h3 className="waste-output-title">Results</h3>
          <p className="waste-output-text">Total Impact: {totalImpact}</p>
          <p className="waste-output-text">Coins Earned: {coinsEarned}</p>
          <p className="waste-output-appreciation">{randomAppreciation}</p>
          <h4 className="waste-output-subtitle">Random Suggestions:</h4>
          <ul className="waste-output-list">
            {randomSuggestions.map((suggestion, index) => (
              <li className="waste-output-list-item" key={index}>{suggestion}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
    <Footer />
    </>
  );
};

export default Waste;
