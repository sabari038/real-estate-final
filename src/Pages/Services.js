import React from 'react'
import './HomePage.css';
import s1 from '../Images/service-1.png';
import s2 from '../Images/service-2.png';
import s3 from '../Images/service-3.png';
const Services = () => {
  return (
    <div><section className="service" id="service">
    <div className="container">
      <p className="section-subtitle">Our Services</p>
      <h2 className="h2 section-title">Our Main Focus</h2>
      <ul className="service-list">
        <li>
          <div className="service-card">
            <div className="card-icon">
              <img src={s1} alt="Service icon" />
            </div>
            <h3 className="h3 card-title">
              <a href="#">Buy a home</a>
            </h3>
            <p className="card-text">
              over 1 million+ homes for sale available on the website, we
              can match you with a house you will want to call home.
            </p>
            <a href="#" className="card-link">
              <span>Find A Home</span>
              <ion-icon name="arrow-forward-outline" />
            </a>
          </div>
        </li>
        <li>
          <div className="service-card">
            <div className="card-icon">
              <img src={s2} alt="Service icon" />
            </div>
            <h3 className="h3 card-title">
              <a href="#">Rent a home</a>
            </h3>
            <p className="card-text">
              over 1 million+ homes for sale available on the website, we
              can match you with a house you will want to call home.
            </p>
            <a href="#" className="card-link">
              <span>Find A Home</span>
              <ion-icon name="arrow-forward-outline" />
            </a>
          </div>
        </li>
        <li>
          <div className="service-card">
            <div className="card-icon">
              <img src={s3} alt="Service icon" />
            </div>
            <h3 className="h3 card-title">
              <a href="#">Sell a home</a>
            </h3>
            <p className="card-text">
              over 1 million+ homes for sale available on the website, we
              can match you with a house you will want to call home.
            </p>
            <a href="#" className="card-link">
              <span>Find A Home</span>
              <ion-icon name="arrow-forward-outline" />
            </a>
          </div>
        </li>
      </ul>
    </div>
  </section></div>
  )
}

export default Services