// Header.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUsers, faBullseye, faLightbulb, faShoppingCart, faSearch, faEarth, faBook } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [cartDropdownOpen, setCartDropdownOpen] = useState(false);

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
    if (cartDropdownOpen) {
      setCartDropdownOpen(false);
    }
  };

  const toggleCartDropdown = () => {
    setCartDropdownOpen(!cartDropdownOpen);
    if (profileDropdownOpen) {
      setProfileDropdownOpen(false);
    }
  };

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
            <Link to="/training" className="header-option" target='_blank'  style={{ textDecoration: 'none' }}>
              <FontAwesomeIcon icon={faBook} size="lg" />
              <span>Training</span>
            </Link>
            <Link to="/goals" className="header-option" target='_blank'  style={{ textDecoration: 'none' }}>
              <FontAwesomeIcon icon={faBullseye} size="lg" />
              <span>Goals</span>
            </Link>
            <Link to="/feedback" className="header-option" target='_blank'  style={{ textDecoration: 'none' }}>
              <FontAwesomeIcon icon={faLightbulb} size="lg" />
              <span>Feedback</span>
            </Link>
            
            <div className="header-option" onClick={toggleCartDropdown}>
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />
              <span>Cart</span>
              {cartDropdownOpen && (
                <div className="dropdown-content">
                  <Link to="/cart" target='_blank'  style={{ textDecoration: 'none' }}>Buy Cart</Link>
                  <Link to="/sell" target='_blank'  style={{ textDecoration: 'none' }}>Sell Cart</Link>
                </div>
              )}
            </div>

            <div className="header-option" onClick={toggleProfileDropdown}>
              <FontAwesomeIcon icon={faUser} size="lg" />
              <span>Profile</span>
              {profileDropdownOpen && (
                <div className="dropdown-content">
                  <Link to="/login" target='_blank'  style={{ textDecoration: 'none' }}>User Login</Link>
                  <Link to="/admin" target='_blank'  style={{ textDecoration: 'none' }}>Admin Login</Link>
                  <Link to="/profile" target='_blank'  style={{ textDecoration: 'none' }}>User Dashboard</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
