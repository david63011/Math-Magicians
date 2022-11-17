import './App.css';
import './navbar.css';

import Quote from './pages/Quote';
import React from 'react';
import Calculator from './components/Calculator';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
