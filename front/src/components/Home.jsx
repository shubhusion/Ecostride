// home.jsx or app.jsx
import React from 'react';
import Calendar from './Calendar';
import ActionSections from './Action';
import Market from './market';
import Footer from './footer';
import Header from './header';
import './home.css'; 
import Banner from './banner';
import Company from './company';
import Addop from './addop';

const Home = () => {
  return (
    <>
      <Header />
      <Addop />      
      <Banner />
      <Company />
      <div className="main-container">
        <div className="content-container">
          <div className="sections-container">
            <ActionSections />
            <Calendar />
          </div>
        </div>
      </div>
      <Market />
      
      <Footer />
    </>
  );
};

export default Home;
