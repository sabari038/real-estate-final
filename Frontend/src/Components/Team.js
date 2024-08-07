import React from 'react'
import './HomePage.css';

const Team = () => {
  return (
    <div><section className="service" id="Team">
    <div className="container">
      <p className="section-subtitle">The Crew</p>
      <h2 className="h2 section-title">Team EstateHub</h2>
      <ul className="service-list">
        <li>
          <div className="service-card">
            <div className="card-icon">
              <img src='/Assets/Images/tharun.png' alt="Service icon" />
            </div>
            <h3 className="h3 card-title">
              <a href="#">Tharunsabari P</a>
            </h3>
          </div>
        </li>
        <li>
          <div className="service-card">
            <div className="card-icon">
              <img src='/Assets/Images/sabari.png'alt="Service icon" />
            </div>
            <h3 className="h3 card-title">
              <a href="#">Sabari N</a>
            </h3>
          </div>
        </li>
        <li>
          <div className="service-card">
            <div className="card-icon">
              <img src='/Assets/Images/Shashvanth.webp' alt="Service icon" />
            </div>
            <h3 className="h3 card-title">
              <a href="#">Shashvanth T</a>
            </h3>
            
          </div>
        </li>
      </ul>
    </div>
  </section></div>
  )
}

export default Team;