import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Agents.css';

const Agents = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/users/all')
      .then(response => {
        setAgents(response.data);
      })
      .catch(error => {
        console.error('Error fetching agents:', error);
      });
  }, []);

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
