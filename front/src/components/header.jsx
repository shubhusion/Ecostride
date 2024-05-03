// Header.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUsers, faBullseye, faLightbulb, faShoppingCart, faSearch, faEarth } from '@fortawesome/free-solid-svg-icons';
import './header.css';

const Header = () => {
  const headerOptions = [
    { icon: faUsers, title: 'Community' },
    { icon: faBullseye, title: 'Goals' },
    { icon: faLightbulb, title: 'Feedback' },
    { icon: faShoppingCart, title: 'Cart' },
    { icon: faUser, title: 'Profile' }
  ];

  return (
    <div>
      <header className="header">
        <div className="header-container">
          <div className="header-logo">
            <img src="./images/logo.png" alt="Logo" />
          </div>
          <div className="header-search">
            <input type="text" placeholder="Search here..." />
            <div className="header-icon">
              <FontAwesomeIcon icon={faSearch} size="lg" />
            </div>
          </div>
          <div className="header-options">
            {headerOptions.map((option, index) => (
              <div key={index} className="header-option">
                <FontAwesomeIcon icon={option.icon} size="lg" />
                <span>{option.title}</span>
              </div>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
