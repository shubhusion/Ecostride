import React from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Calendar from './components/Calendar';
import Water from './components/water';
import Waste from './components/Waste';


function App() {
  return (
    <>
    { <div className="app-container">
      <Home />
    </div> }
    <div className="app">
      <Water />
    </div>
    <div className='App'>
      <Waste />
    </div>
    </>
  );
}

export default App;
