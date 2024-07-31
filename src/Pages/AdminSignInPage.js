import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminSignInPage.css';
import img from '../Images/AdminSignIn.png';

const AdminSignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === 'admin@skcet.ac.in' && password === 'admin') {
      // Redirect to admin dashboard
      navigate('/admin-dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className='AdminSignInPage'>
    <div className="ad-container">
      <div className="ad-signin-form">
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />

          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <br/>
          
          {error && <p className="error">{error}</p>}

          <button type="submit">Sign In</button>
        </form>
      </div>
      <div className="image-section">
        <img src={img} alt="Sign In" />
      </div>
    </div>
    </div>
  );
};

export default AdminSignInPage;
