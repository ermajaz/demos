import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Brands from './components/Brands';
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import Term_Condition from './components/Term_Condition'
import Return_Exchange from './components/Return_Exchange'
import Shipping_delivery from './components/Shipping_delivery'
import Policy from './components/Policy'
import FrameSet from './components/FrameSet'
import Cockpit from './components/Cockpit'
import Suspension from './components/Suspension'
import WheelSet from './components/WheelSet'
import DriveTrain from './components/DriveTrain'
import BrackSet from './components/BrackSet'
import Navigation from "./components/Navigation/Navigation";
function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Navigation/>
      <Routes>
        {/* Define your routes using Route elements */}
        <Route exact path="/aboutUs" element={<AboutUs/>} />
        <Route exact path="/contactUs" element={<ContactUs/>} />
        <Route exact path="/term_condition" element={<Term_Condition/>} />
        <Route exact path="/return_exchange" element={<Return_Exchange/>} />
        <Route exact path="/shipping_delivery" element={<Shipping_delivery/>} />
        <Route exact path="/policy" element={<Policy/>} />
        <Route exact path="/frameSet" element={<FrameSet/>} />
        <Route exact path="/suspension" element={<Suspension/>} />
        <Route exact path="/driveTrain" element={<DriveTrain/>} />
        <Route exact path="/wheelSet" element={<WheelSet/>} />
        <Route exact path="/cockpit" element={<Cockpit/>} />
        <Route exact path="/brackSet" element={<BrackSet/>} />
        {/* Add more routes as needed */}
      </Routes>
      <Brands/>
      <Footer />
    </div>
  </Router>
  );
}

export default App;


