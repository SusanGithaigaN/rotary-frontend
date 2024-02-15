import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar/Navbar';

const Rotary = () => {
  return (
    <div>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  )
}

function App() {
  return (
    <div className="app">
      <Router>
        <Rotary />
      </Router>
    </div>
  )
}

export default App;
