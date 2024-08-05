import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './Dashboard.css';

// Register Chart.js components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [properties, setProperties] = useState([]);
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    // Fetch properties data from the backend
    axios.get('http://localhost:8080/api/properties')
      .then(response => {
        setProperties(response.data);
        console.log('Properties:', response.data); // Debugging output
      })
      .catch(error => {
        console.error('Error fetching properties:', error);
      });

    // Fetch agents data from the backend
    axios.get('http://localhost:8080/api/users/all')
      .then(response => {
        setAgents(response.data);
        console.log('Agents:', response.data); // Debugging output
      })
      .catch(error => {
        console.error('Error fetching agents:', error);
      });
  }, []);

  // Process properties data for the chart
  const categories = ['Apartment', 'Villa', 'House', 'Flat']; // Ensure these match property types exactly
  const propertiesByCategory = categories.map(category => 
    properties.filter(property => property.propertyType === category).length
  );

  console.log('Properties By Category:', propertiesByCategory); // Debugging output

  const propertiesData = {
    labels: categories,
    datasets: [
      {
        label: 'Properties by Category',
        data: propertiesByCategory,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
      }
    ]
  };

  const propertiesOptions = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <div className="dashboard-container">
      <div className="summary-cards">
        <div className="card properties-card">
          <h2>{properties.length}</h2>
          <p>All Properties</p>
        </div>
        <div className="card agents-card">
          <h2>{agents.length}</h2>
          <p>All Agents</p>
        </div>
      </div>
      <div className="chart-container">
        <h3>Properties By Category</h3>
        <Bar data={propertiesData} options={propertiesOptions} />
      </div>
    </div>
  );
};

export default Dashboard;
