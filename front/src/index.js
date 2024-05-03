import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import App from './App'; 
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './components/firebaseConfig'; // Import your Firebase configuration

const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
);
