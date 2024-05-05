import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Switch from 'react-switch';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Calendar from './components/Calendar';
import Water from './components/water';
import Waste from './components/Waste';
import Carb from './components/Carb';
import SignIn from './components/signin';
import Energy from './components/energy';
import Login from './components/login';
import Clothes from './components/clothes';
import Sustain from './components/sustain';
import Food from './components/food';
import Ewaste from './components/ewaste';
import Plastic from './components/plastic';
import Lead from './components/lead';
import Tin from './components/tin';
import Iron from './components/iron';
import Biod from './components/biod';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact render={() => (
          <div className="app-container">
            <Home />
          </div>
        )} />
        <Route path="/carbon-footprint" element={<Carb />}/>
        <Route path="/energy-saved" element={<Energy />} />
        <Route path="/waste-reduction-progress" element={<Waste />} />
        <Route path="/sustainable-shopping" element={<Login />} />
        <Route path="/water-conservation" element={<Water />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/category/Sustainable Products" element={<Sustain />} />
        <Route path="/category/Left Clothes" element={<Clothes />} />
        <Route path="/category/Remaining Food Stock" element={<Food />} />
        <Route path="/category/E-Waste" element={<Ewaste />} />
        <Route path="/category/Plastic" element={<Plastic />} />
        <Route path="/category/Lead and Glass" element={<Lead />} />
        <Route path="/category/Aluminium and Tin" element={<Tin />} />
        <Route path="/category/Iron" element={<Iron />} />
        <Route path="/category/Biodegradable Waste" element={<Biod />} />
      </Routes>
    </Router>
  );
}

export default App;
