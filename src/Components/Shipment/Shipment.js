import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
const Shimpment = () => {
  const [email, setEmail] = useState('');
  const [name /*setName*/] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [error /*setError*/] = useState('');
  const [user] = useAuthState(auth);

  const handleCreateUser = (e) => {
    e.preventDefault();
    return;
  };
  /** event handler */
  const handleNameBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleadressBlur = (e) => {
    setAddress(e.target.value);
  };
  const handlephoneBlur = (e) => {
    setPhone(e.target.value);
    console.log(email, name, phone, address);
  };
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Shipping Information</h2>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="name">Your Name</label>
            <input onBlur={handleNameBlur} name="name" type="text" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmailBlur}
              name="email"
              type="email"
              value={user.email}
              readOnly
            />
          </div>
          <div className="input-group">
            <label htmlFor="adress">Adress</label>
            <input
              onBlur={handleadressBlur}
              name="adress"
              type="adress"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-adress">Phone Number</label>
            <input
              onBlur={handlephoneBlur}
              name="confirm-adress"
              type="adress"
              required
            />
            <p style={{ color: 'red' }}>{error}</p>
          </div>
          <input
            className="form-submit"
            type="submit"
            value="Submit"
            required
          />
        </form>
      </div>
    </div>
  );
};

export default Shimpment;
