import React, { useState, useEffect } from 'react';
import './banner.css';

const Banner = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  const banners = [
    { id: 1, imageUrl: './images/banner1.jpg' },
    { id: 2, imageUrl: './images/banner2.jpg' },
    { id: 3, imageUrl: './images/banner3.jpg' },
    { id: 4, imageUrl: './images/banner4.jpg' },
    { id: 5, imageUrl: './images/banner5.jpg' }
  ];

  useEffect(() => {
    const interval = setInterval(goToNextBanner, 3000); // Change banner every 5 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentBannerIndex]); // Depend on currentBannerIndex to restart the interval when the index changes

  const goToPreviousBanner = () => {
    const newIndex = currentBannerIndex === 0 ? banners.length - 1 : currentBannerIndex - 1;
    setCurrentBannerIndex(newIndex);
  };

  const goToNextBanner = () => {
    const newIndex = currentBannerIndex === banners.length - 1 ? 0 : currentBannerIndex + 1;
    setCurrentBannerIndex(newIndex);
  };

  return (
    <div className="banner">
      <button className="carousel-btn prev-btn" onClick={goToPreviousBanner}>{'<'}</button>
      <img src={banners[currentBannerIndex].imageUrl} alt={`banner${currentBannerIndex + 1}`} className="banner-image" />
      <button className="carousel-btn next-btn" onClick={goToNextBanner}>{'>'}</button>
    </div>
  );
};

export default Banner;