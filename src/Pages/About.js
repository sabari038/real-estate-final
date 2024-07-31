import React from 'react'
import './HomePage.css'
import about1 from '../Images/about-banner-1.png';
import about2 from '../Images/about-banner-2.jpg';
const About = () => {
  return (
    <div>
    <section className="about" id="about">
        <div className="container">
          <figure className="about-banner">
            <img
              src={about1}
              alt="House interior"
            />
            <img
              src={about2}
              alt="House interior"
              className="abs-img"
            />
          </figure>
          <div className="about-content">
            <p className="section-subtitle">About Us</p>
            <h2 className="h2 section-title">
              The Leading Real Estate Rental Marketplace.
            </h2>
            <p className="about-text">
              Over 39,000 people work for us in more than 70 countries all over
              the This breadth of global coverage, combined with specialist
              services
            </p>
            <ul className="about-list">
              <li className="about-item">
                <div className="about-item-icon">
                  <ion-icon name="home-outline" />
                </div>
                <p className="about-item-text">Smart Home Design</p>
              </li>
              <li className="about-item">
                <div className="about-item-icon">
                  <ion-icon name="leaf-outline" />
                </div>
                <p className="about-item-text">Beautiful Scene Around</p>
              </li>
              <li className="about-item">
                <div className="about-item-icon">
                  <ion-icon name="wine-outline" />
                </div>
                <p className="about-item-text">Exceptional Lifestyle</p>
              </li>
              <li className="about-item">
                <div className="about-item-icon">
                  <ion-icon name="shield-checkmark-outline" />
                </div>
                <p className="about-item-text">Complete 24/7 Security</p>
              </li>
            </ul>
            <a href="#service" className="btn">
              Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About