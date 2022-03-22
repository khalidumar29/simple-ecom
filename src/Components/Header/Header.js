import './Header.css';
import React from 'react';
import logo from '../../images/Logo.svg';

const Header = () => {
  return (
    <div className="header">
      <nav>
        <a href="#">
          <img src={logo} alt="" />
        </a>
        <div className="nav-link">
          <a href="#">Order</a>
          <a href="#">Order Review</a>
          <a href="#">Manage Inventor</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
