import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [profile, setProfile] = useState({
    firstName: 'Maxine',
    lastName: 'Johnson',
    email: 'maxine.johnson@example.com',
    phone: '123-456-7890',
    address: '123 Main St, Nairobi, Kenya',
    role: 'Admin',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Save profile changes to the server or state management here
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Optionally, revert changes by resetting state to original profile
  };

  return (
    <div className="profwhole">
      <div className="profile-container">
        <h1>My Profile</h1>
        <form className="profile-form">
          <div className="profile-form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={profile.firstName}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="profile-form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={profile.lastName}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="profile-form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="profile-form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="profile-form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={profile.address}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="profile-form-group">
            <label htmlFor="role">Role</label>
            <input
              type="text"
              id="role"
              name="role"
              value={profile.role}
              onChange={handleChange}
              disabled
            />
          </div>
          <div className="profile-form-actions">
            {isEditing ? (
              <>
                <button type="button" onClick={handleSave}>
                  Save
                </button>
                <button type="button" onClick={handleCancel}>
                  Cancel
                </button>
              </>
            ) : (
              <button type="button" onClick={handleEdit}>
                Edit
              </button>
            )}
          </div>
        </form>
      </div>
    </div >
  );
};

export default Profile;
