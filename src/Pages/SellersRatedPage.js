import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faHandshake, faMapMarkedAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import './HomePage.css';

const SellersRatedPage = () => {
  return (
    <div className="sellers-rated-container">
      <h1>How are <span className="highlight">sellers rated</span></h1>
      <p className="subtitle">We pick the best sellers for you who are best in class in various aspects</p>
      <div className="features">
        <div className="feature-card">
          <FontAwesomeIcon icon={faBolt} className="icon" />
          <h3>High Response Rate</h3>
          <p>We pick sellers for you who give you priority. Over 90% of our top sellers respond to enquiries within the first 24 hours!</p>
        </div>
        <div className="feature-card">
          <FontAwesomeIcon icon={faHandshake} className="icon" />
          <h3>Deals Closed</h3>
          <p>We choose sellers who have previously closed deals with similar requirements as you have. They'll understand your needs better.</p>
        </div>
        <div className="feature-card">
          <FontAwesomeIcon icon={faMapMarkedAlt} className="icon" />
          <h3>Wide Coverage</h3>
          <p>Sellers with a wide variety of properties are more likely to satisfy your demands. More the options, better is your decision.</p>
        </div>
        <div className="feature-card">
          <FontAwesomeIcon icon={faStar} className="icon" />
          <h3>Rated & Reviewed</h3>
          <p>Testimonials from genuine buyers are the best way to judge a seller. Better the ratings, better will be your experience.</p>
        </div>
      </div>
    </div>
  );
};

export default SellersRatedPage;
