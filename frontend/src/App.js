import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Cart from './components/Cart';

function App() {
  return (
    <Router>
      <div style={{ fontFamily: 'Arial, sans-serif' }}>
        {/* Navigation Bar */}
        <nav style={{ padding: '20px', backgroundColor: '#333', color: 'white', display: 'flex', justifyContent: 'space-between' }}>
          <h2 style={{ margin: 0 }}>🍬 Sweet Shop</h2>
          <div>
            <Link to="/" style={{ color: 'white', marginRight: '15px', textDecoration: 'none' }}>Menu</Link>
            <Link to="/login" style={{ color: 'white', marginRight: '15px', textDecoration: 'none' }}>Login</Link>
            <Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>Register</Link>
            <Link to="/cart" style={{ color: 'white', textDecoration: 'none' }}>Cart 🛒</Link>
          </div>
        </nav>

        {/* Page Content Switcher */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;