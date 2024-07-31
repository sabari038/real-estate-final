import React from 'react'
import './HomePage.css';
const Amenities = () => {
  return (
    <div>
    <section className="features">
        <div className="container">
          <p className="section-subtitle" id='Amenities'>Our Amenities</p>
          <h2 className="h2 section-title">Building Amenities</h2>
          <ul className="features-list">
            <li>
              <a href="#" className="features-card">
                <div className="card-icon">
                  <ion-icon name="car-sport-outline" />
                </div>
                <h3 className="card-title">Parking Space</h3>
                
              </a>
            </li>
            <li>
              <a href="#" className="features-card">
                <div className="card-icon">
                  <ion-icon name="water-outline" />
                </div>
                <h3 className="card-title">Swimming Pool</h3>
                
              </a>
            </li>
            <li>
              <a href="#" className="features-card">
                <div className="card-icon">
                  <ion-icon name="shield-checkmark-outline" />
                </div>
                <h3 className="card-title">Private Security</h3>
                  
              </a>
            </li>
            <li>
              <a href="#" className="features-card">
                <div className="card-icon">
                  <ion-icon name="fitness-outline" />
                </div>
                <h3 className="card-title">Medical Center</h3>
                  
              </a>
            </li>
            <li>
              <a href="#" className="features-card">
                <div className="card-icon">
                  <ion-icon name="library-outline" />
                </div>
                <h3 className="card-title">Library Area</h3>
                  
              </a>
            </li>
            <li>
              <a href="#" className="features-card">
                <div className="card-icon">
                  <ion-icon name="bed-outline" />
                </div>
                <h3 className="card-title">King Size Beds</h3>
                  
              </a>
            </li>
            <li>
              <a href="#" className="features-card">
                <div className="card-icon">
                  <ion-icon name="home-outline" />
                </div>
                <h3 className="card-title">Smart Homes</h3>
                  
              </a>
            </li>
            <li>
              <a href="#" className="features-card">
                <div className="card-icon">
                  <ion-icon name="football-outline" />
                </div>
                <h3 className="card-title">Kid’s Playland</h3>
                  
              </a>
            </li>
          </ul>
        </div>
      </section></div>
  )
}

export default Amenities