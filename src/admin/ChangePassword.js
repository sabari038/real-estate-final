import React, { useState } from 'react';
import './ChangePassword.css';

const ChangePassword = () => {
  const [form, setForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.currentPassword) newErrors.currentPassword = 'Current password is required';
    if (!form.newPassword) newErrors.newPassword = 'New password is required';
    if (!form.confirmNewPassword) newErrors.confirmNewPassword = 'Please confirm your new password';
    if (form.newPassword !== form.confirmNewPassword) newErrors.confirmNewPassword = 'Passwords do not match';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Add password change logic here (e.g., API call)
    setMessage('Password changed successfully');
    setForm({ currentPassword: '', newPassword: '', confirmNewPassword: '' });
    setErrors({});
  };

  return (
    <div className="change-password-container">
      <h1 className='ChangePassword-h1'>Change Password</h1>
      <form className="change-password-form" onSubmit={handleSubmit}>
        <div className="ChangePassword-form-group">
          <label htmlFor="currentPassword">Current Password</label>
          <input
            type="password"
            id="currentPassword"
            name="currentPassword"
            value={form.currentPassword}
            onChange={handleChange}
          />
          {errors.currentPassword && <span className="ChangePassword-error">{errors.currentPassword}</span>}
        </div>
        <div className="ChangePassword-form-group">
          <label htmlFor="newPassword">New Password</label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={form.newPassword}
            onChange={handleChange}
          />
          {errors.newPassword && <span className="ChangePassword-error">{errors.newPassword}</span>}
        </div>
        <div className="ChangePassword-form-group">
          <label htmlFor="confirmNewPassword">Confirm New Password</label>
          <input
            type="password"
            id="confirmNewPassword"
            name="confirmNewPassword"
            value={form.confirmNewPassword}
            onChange={handleChange}
          />
          {errors.confirmNewPassword && <span className="ChangePassword-error">{errors.confirmNewPassword}</span>}
        </div>
        <div className="ChangePassword-form-actions">
          <button type="submit">Change Password</button>
        </div>
        {message && <div className="ChangePassword-message">{message}</div>}
      </form>
    </div>
  );
};

export default ChangePassword;
