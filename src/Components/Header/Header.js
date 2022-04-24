import './Header.css';
import React from 'react';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../Firebase/firebase.init';

const Header = () => {
  const [user] = useAuthState(auth);
  const logOut = () => {
    signOut(auth);
  };
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
          {user ? (
            <button
              style={{
                background: 'none',
                border: 'none',
                color: '#fff',
                fontSize: '17px',
                marginLeft: '25px',
              }}
              onClick={logOut}
            >
              Sign Out
            </button>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
