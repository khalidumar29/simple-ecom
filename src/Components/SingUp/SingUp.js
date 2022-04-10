import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import './SingUp.css';
const SingIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  if (user) {
    navigate('/home');
  }
  const handleCreateUser = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Your two password didn't match");
      return;
    } else if (password.length < 6) {
      setError('your password is too short');
      return;
    }
    createUserWithEmailAndPassword(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
      })
      .cath((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  /** event handler */
  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordBlur = (e) => {
    setConfirmPassword(e.target.value);
  };
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Sing Up</h2>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmailBlur}
              name="email"
              type="email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePasswordBlur}
              name="password"
              type="password"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              onBlur={handleConfirmPasswordBlur}
              name="confirm-password"
              type="password"
            />
            <p style={{ color: 'red' }}>{error}</p>
          </div>
          <input
            className="form-submit"
            type="submit"
            value="SignUp"
            required
          />
          <p>
            Already have an account?
            <Link className="form-link" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SingIn;
