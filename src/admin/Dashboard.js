import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './Dashboard.css';

// Register Chart.js components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const propertiesData = {
    labels: ['Apartments', 'Offices', 'Houses', 'Retails'],
    datasets: [
      {
        label: 'Properties by Category',
        data: [2, 2, 3, 2],
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
          <h2>9</h2>
          <p>All Properties</p>
        </div>
        <div className="card agents-card">
          <h2>4</h2>
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
