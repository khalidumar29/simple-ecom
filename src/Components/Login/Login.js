import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Login</h2>
        <form>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input name="email" type="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input name="password" type="password" required />
          </div>
          <input className="form-submit" type="submit" value="Login" />
        </form>
        <p>
          New to ema-jhon?
          <Link className="form-link" to="/singup">
            Creat an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
