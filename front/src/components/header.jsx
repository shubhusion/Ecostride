// Header.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUsers, faBullseye, faLightbulb, faShoppingCart, faSearch, faEarth } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  const headerOptions = [
    { icon: faShoppingCart, title: 'Sell Cart', path: '/sell' },
    { icon: faBullseye, title: 'Goals', path: '/goals' },
    { icon: faLightbulb, title: 'Feedback', path: '/feedback' },
    { icon: faShoppingCart, title: 'Buy Cart', path: '/cart' },
    { icon: faUser, title: 'Profile', path: '/profile' }
  ];

  return (
    <div>
      <header className="header">
        <div className="header-container">
          <div className="header-logo">
            <img src="/images/logo.png" alt="Logo" />
          </div>
          <div className="header-search">
            <input type="text" placeholder="Search here..." />
            <div className="header-icon">
              <FontAwesomeIcon icon={faSearch} size="lg" />
            </div>
          </div>
          <div className="header-options">
            {headerOptions.map((option, index) => (
              <Link key={index} to={option.path} target='_blank' style={{ textDecoration: 'none' }}>
              <div className="header-option">
                <FontAwesomeIcon icon={option.icon} size="lg" />
                <span>{option.title}</span>
              </div>
              </Link>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
