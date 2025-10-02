import React from 'react';
import { Link } from 'react-router-dom';
import viteLogo from '../../assets/vite.svg';

const Header = () => {
  return (
    <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', background: '#f5f5f5' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={viteLogo} alt="Vite Logo" style={{ height: '40px', marginRight: '1rem' }} />
        <h2 style={{ margin: 0 }}>React Malar</h2>
      </div>
      <nav>
        <Link to="/" style={{ margin: '0 1rem', textDecoration: 'none', color: '#333' }}>Home</Link>
        <Link to="/about" style={{ margin: '0 1rem', textDecoration: 'none', color: '#333' }}>About Us</Link>
        <Link to="/service" style={{ margin: '0 1rem', textDecoration: 'none', color: '#333' }}>Service</Link>
        <Link to="/contact" style={{ margin: '0 1rem', textDecoration: 'none', color: '#333' }}>Contact Us</Link>
      </nav>
    </header>
  );
};

export default Header;
