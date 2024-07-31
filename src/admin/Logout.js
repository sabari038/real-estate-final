import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Logout.css';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add logic to clear user session or tokens here
    // For example, localStorage.clear() if tokens are stored in localStorage
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="logout-container">
      <h1 className="logout-h1">Logout</h1>
      <p className="logout-p">You have been logged out successfully. Thank you for using our service!</p>
      <button  className="logout-button" onClick={handleLogout}>Go to Login</button>
    </div>
  );
};

export default Logout;
