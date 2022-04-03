import './Header.css';
import React from 'react';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <nav>
        <Link to="/home">
          <img src={logo} alt="" />
        </Link>
        <div className="nav-link">
          <Link to="/home">Shop</Link>
          <Link to="/oreders">Orders</Link>
          <Link to="/inventory">Inventor</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
