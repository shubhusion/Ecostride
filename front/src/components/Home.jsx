import React from 'react';
import Calendar from './Calendar';
import ActionSections from './Action';
import './home.css';

function Home() {
  return (
    <div className="home-container">
    <h1>EcoStride : Sustainability Living Tracker</h1>
      <div className="sections-container">
        <ActionSections />
        <Calendar />
      </div>
    </div>
  );
}

export default Home;
