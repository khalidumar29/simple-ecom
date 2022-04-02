import './Header.css';
import React from 'react';
import logo from '../../images/Logo.svg';

const Header = () => {
  return (
    <div className="header">
      <nav>
        <a href="home">
          <img src={logo} alt="" />
        </a>
        <div className="nav-link">
          <a href="/home">Shop</a>
          <a href="/oreders">Orders</a>
          <a href="/inventory">Inventor</a>
          <a href="/about">About</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
