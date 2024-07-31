import React, { useState } from 'react';
import './Agents.css';

const Agents = () => {
  const [agents, setAgents] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '098-765-4321' },
  ]);

  const [newAgent, setNewAgent] = useState({ name: '', email: '', phone: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAgent((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddAgent = () => {
    setAgents((prev) => [...prev, { id: agents.length + 1, ...newAgent }]);
    setNewAgent({ name: '', email: '', phone: '' });
  };

  return (
    <div className="agent-container">
      <h1 className="agent-header">Agents</h1>
      <div className="agent-list">
        <h2 className="agent-list-header">View Agents</h2>
        <ul className="agent-list-ul">
          {agents.map((agent) => (
            <li key={agent.id} className="agent-list-item">
              <p className="agent-list-item-name">Name: {agent.name}</p>
              <p className="agent-list-item-email">Email: {agent.email}</p>
              <p className="agent-list-item-phone">Phone: {agent.phone}</p>
            </li>
          ))}
        </ul>
      </div>
      
    </div>
  );
};

export default Agents;
