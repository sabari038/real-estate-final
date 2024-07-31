import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './AdminComponent.css';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Messages from './Messages';
import MyListing from './MyListing';
import Listing from './Listing';
import Agents from './Agents';
import ChangePassword from './ChangePassword';
import Logout from './Logout';
import AddListing from './AddListing';
import AddAgent from './AddAgent';
import agent from './Agent.jpg';

const AdminComponent = () => {
  return (
    <div className="admin-container">
      <div className="sidebar">
        <div className="profile-section">
          <img src={agent} alt="Profile" className="profile-image" />
          <h2 className="profile-name">Agent Sins<span className="role">(Admin)</span></h2>
        </div>
        <nav className="menu">
          <Link to="dashboard">Dashboard</Link>
          <Link to="profile">My Profile</Link>
          <Link to="messages">Messages</Link>
          <Link to="my-listing">My Listing</Link>
          <div className="dropdown">
            <button className="dropdown-button">Listing</button>
            <div className="dropdown-content">
              <Link to="listing">View Listings</Link>
              <Link to="add-listing">Add Listing</Link>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropdown-button">Seller</button>
            <div className="dropdown-content">
              <Link to="agents">View Seller</Link>
              <Link to="add-agent">add Seller</Link>
            </div>
          </div>
          <Link to="change-password">Change Password</Link>
          <Link to="logout">Logout</Link>
        </nav>
      </div>
      <div className="content">
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="messages" element={<Messages />} />
          <Route path="my-listing" element={<MyListing />} />
          <Route path="listing" element={<Listing />} />
          <Route path="add-listing" element={<AddListing />} />
          <Route path="agents" element={<Agents />} />
          <Route path="add-agent" element={<AddAgent />} />
          <Route path="change-password" element={<ChangePassword />} />
          <Route path="logout" element={<Logout />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminComponent;
