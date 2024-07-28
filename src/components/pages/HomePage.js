import React from 'react';
import './HomePage.css';
import logo from '../images/Estate-Hub.png';

const HomePage = () => {
    return (
        <div className="homepage">
            <nav className="navbar">
                <div className="navbar-left">
                    <div className="logo"><img src={logo} alt="Logo" /></div>
                    <ul className="nav-links">
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </div>
                <div className="navbar-right">
                    <a href="#seller-link" className="auth-link">Are you a Seller? Click here!</a>
                </div>
            </nav>
            <header className="hero">
                <div className="hero-content">
                    <h1>Welcome to EstateHub</h1>
                    <p>Your dream home is just a click away</p>
                    <br/>
                    <a href="#explore" className="hero-button">Explore Now</a>
                </div>
            </header>
        </div>
    );
}

export default HomePage;
