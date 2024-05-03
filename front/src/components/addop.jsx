import React from 'react';
import './addop.css'

const Addop = () =>{
const additionalOptions = [
    'Home',
    'Shopping Products',
    'Carbon Footprint Calculator',
    'Waste Disposal',
    'Energy Calculator',
    'Sale',
    'Contact'
  ];

  return(
   
   <div className="additional-options">
        {additionalOptions.map((option, index) => (
          <div key={index} className="additional-option">
            {option}
          </div>
        ))}
    </div>


   ) };

export default Addop;