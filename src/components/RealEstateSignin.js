import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';
import './RealEstateSignin.css';
import signin from '../images/signin-image.jpg';

const RealEstateSignin = ({ toggleSignup }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const user = await response.json();
                console.log('User logged in:', user);
                // Handle successful login
            } else {
                setError('Invalid email or password');
            }
        } catch (error) {
            console.error('Error during login:', error);
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <section className="signup">
            <div className="container">
                <div className="signup-content">
                    <div className="signup-image">
                        <figure><img src={signin} alt="sign up" /></figure>
                        <a href="#" onClick={() => {
                            toggleSignup();
                            setError(null); // Reset error state
                        }} className="signup-image-link">Create an account</a>
                    </div>
                    <div className="signup-form">
                        <h2 className="form-title">Sign in</h2>
                        <form onSubmit={handleSubmit} className="register-form" id="register-form">
                            <div className="form-group">
                                <FontAwesomeIcon icon={faUser} className="fa" />
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Your Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <FontAwesomeIcon icon={faLock} className="fa" />
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                                <label htmlFor="remember-me" className="label-agree-term"><span><span></span></span>Remember me</label>
                            </div>
                            {error && <div className="form-error">{error}</div>}
                            <div className="form-group form-button">
                                <input type="submit" name="signin" id="signin" className="form-submit" value="Log in" />
                            </div>
                            <div className="social-login">
                                <p>Or login with</p>
                                <a href="#" className="social-link"><FontAwesomeIcon icon={faFacebook} /></a>
                                <a href="#" className="social-link"><FontAwesomeIcon icon={faTwitter} /></a>
                                <a href="#" className="social-link"><FontAwesomeIcon icon={faGoogle} /></a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RealEstateSignin;
