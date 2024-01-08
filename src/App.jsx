import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import Cart from './Pages/Cart';

export default function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path='/cart' element={<Cart/>}/>  
          
        </Routes>
      </div>
    </div>
  );
}
