import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Switch from 'react-switch';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Calendar from './components/Calendar';
import Water from './components/water';
import Waste from './components/Waste';
import Carb from './components/Carb';
import SignIn from './components/signin'; // assuming your component name is SignIn

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact render={() => (
          <div className="app-container">
            <Home />
          </div>
        )} />
        <Route path="/carbon-footprint" element={<Carb />} />
        {/* <Route path="/energy-saved" component={EnergySaved} /> */}
        <Route path="/waste-reduction-progress" element={<Waste />} />
        {/* <Route path="/sustainable-shopping" component={SustainableShopping} /> */}
        <Route path="/water-conservation" element={<Water />} />
        <Route path="/signin" element={<SignIn />} /> {/* Route for SignIn */}
      </Routes>
    </Router>
  );
}

export default App;
