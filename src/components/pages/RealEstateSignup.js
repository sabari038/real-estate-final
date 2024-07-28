import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import './RealEstateSignup.css';
import signup from '../images/signup-image.jpg';

const RealEstateSignup = ({ toggleSignin }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== rePassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/api/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password, name }),
            });

            if (response.ok) {
                const user = await response.json();
                console.log('User registered:', user);
                // Handle successful registration
            } else {
                setError('Registration failed');
            }
        } catch (error) {
            console.error('Error during registration:', error);
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div className="container">
            <div className="signup-content">
                <div className="signup-form">
                    <h2 className="form-title">Sign up</h2>
                    <form onSubmit={handleSubmit} className="register-form" id="register-form">
                        <div className="form-group">
                            <FontAwesomeIcon icon={faUser} className="fa" />
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <FontAwesomeIcon icon={faEnvelope} className="fa" />
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
                                name="pass"
                                id="pass"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <FontAwesomeIcon icon={faLock} className="fa" />
                            <input
                                type="password"
                                name="re_pass"
                                id="re_pass"
                                placeholder="Repeat your password"
                                value={rePassword}
                                onChange={(e) => setRePassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="checkbox"
                                name="agree-term"
                                id="agree-term"
                                className="agree-term"
                                required
                            />
                            <label htmlFor="agree-term" className="label-agree-term">
                                <span />I agree to all statements in 
                                <a href="#" className="term-service"><span />Terms of service</a>
                            </label>
                        </div>
                        {error && <div className="form-error">{error}</div>}
                        <div className="form-group form-button">
                            <input type="submit" name="signup" id="signup" className="form-submit" value="Register" />
                        </div>
                    </form>
                </div>
                <div className="signup-image">
                    <figure><img src={signup} alt="sign up" /></figure>
                    <a href="#" onClick={() => {
                        toggleSignin();
                        setError(null); // Reset error state
                    }} className="signup-image-link">I am already a member</a>
                </div>
            </div>
        </div>
    );
}

export default RealEstateSignup;
