import React, { useState } from 'react';
import './AddAgent.css';

const AddAgent = () => {
  const [agentData, setAgentData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAgentData({
      ...agentData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to add agent
    console.log('Agent Data:', agentData);
  };

  return (
    <div className="add-agent-container">
      <h1 className="add-agent-h1">Add Seller</h1>
      <form className="add-agent-form" onSubmit={handleSubmit}>
        <label className="add-agent-label">
          Name:
          <input className="add-agent-input" type="text" name="name" value={agentData.name} onChange={handleChange} required />
        </label>
        <label className="add-agent-label">
          Email:
          <input className="add-agent-input" type="email" name="email" value={agentData.email} onChange={handleChange} required />
        </label>
        <label className="add-agent-label">
          Phone:
          <input className="add-agent-input" type="text" name="phone" value={agentData.phone} onChange={handleChange} required />
        </label>
        <button  className="add-agent-button" type="submit">Add Seller</button>
      </form>
    </div>
  );
};

export default AddAgent;
