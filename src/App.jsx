import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar/Navbar';
import User from './components/User/User';
import Events from './components/User/Events';
// import Demo from './components/User/Demo';

const Rotary = () => {
  return (
    <div>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/user' element={<User />} />
        <Route path='/events' element={<Events />} />
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
