// Header.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUsers, faBullseye, faLightbulb, faShoppingCart, faSearch, faEarth } from '@fortawesome/free-solid-svg-icons';
import './header.css';

const Header = () => {
  const headerOptions = [
    { icon: faUser, title: 'Profile' },
    { icon: faUsers, title: 'Community' },
    { icon: faBullseye, title: 'Goals' },
    { icon: faLightbulb, title: 'Feedback' },
    { icon: faShoppingCart, title: 'Cart' },
  ];

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <img src="./images/logo.png">
          </img>
        </div>
        <div className="header-search">
          <input type="text" placeholder="Search..." />
        </div>
        <div classname="header-icon">
           <FontAwesomeIcon icon={faSearch} />
        </div>
        <div className="header-options">
          {headerOptions.map((option, index) => (
            <div key={index} className="header-option">
              <FontAwesomeIcon icon={option.icon} />
              <span>{option.title}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
