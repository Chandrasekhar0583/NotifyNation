import React, { useState } from "react";
import axios from 'axios';
import './SigninPage.css';
import { Link, useNavigate } from "react-router-dom";

const Login = ({ update }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND}/login`, { email, password })
            .then(res => {
                // console.log(res.data)
                const n = res.data
                update(n)
                setError('');
                navigate('/Notification/latestnotification');
            }).catch(err => {
                console.log(err);
                setError('Invalid email or password');
            })
    }

    return (
        <div className="Main-container">
            <div className="box">
                <form onSubmit={handleLogin}>
                    <h2>Login</h2>
                    <div className="input-itm">
                        <label>Email</label>
                        <input type="email" placeholder="Enter your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required />
                    </div>
                    <div className="input-itm">
                        <label>Password</label>
                        <input type="password" placeholder="Enter your Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required />
                    </div>
                    {error && <p className="error">{error}</p>}
                    <button type="submit" className="submit-btn">Login</button>
                </form>
                <p className="toggle-text">
                    Don't have an account? <span><Link to="/">Sign Up</Link></span>
                </p>
            </div>
        </div>
    );
};

export default Login;
