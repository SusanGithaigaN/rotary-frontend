import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

const Rotary = () => {
  return (
    <div>
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
