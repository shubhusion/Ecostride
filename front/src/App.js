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
        <Route path="/energy-saved" element={<Energy />} />
        <Route path="/energy-saved" element={<Energy />} />
        <Route path="/energy-saved" element={<Energy />} />
        <Route path="/energy-saved" element={<Energy />} />
      </Routes>
    </Router>
  );
}

export default App;
