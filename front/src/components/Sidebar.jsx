// sidebar.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUsers, faBullseye, faLightbulb, faShoppingCart, faGlobe, faEarth } from '@fortawesome/free-solid-svg-icons';
import './sidebar.css';

const Sidebar = () => {
  const sidebarOptions = [
    { icon: faUser, title: 'Profile' },
    { icon: faUsers, title: 'Community' },
    { icon: faBullseye, title: 'Goals' },
    { icon: faLightbulb, title: 'Feedback' },
    { icon: faShoppingCart, title: 'Cart' },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <FontAwesomeIcon icon={faEarth} size="2x" />
      </div>
      <div className="sidebar-options">
        {sidebarOptions.map((option, index) => (
          <div key={index} className="sidebar-option">
            <FontAwesomeIcon icon={option.icon} />
            <span>{option.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
