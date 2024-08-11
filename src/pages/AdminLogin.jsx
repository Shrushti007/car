
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import "../styles/admin-login.css";

export const AdminLogin = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/register'); 
  };



  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showRegister, setShowRegister] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem('users')) || []
  );

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      console.log('Login successful');
      // You can redirect to a dashboard or home page here
    } else {
      console.log('Invalid email or password');
    }
    setEmail('');
    setPassword('');
  };


  const handleForgotPassword = (e) => {
    e.preventDefault();
    const user = users.find((user) => user.email === email);
    if (user) {
      console.log('Password sent to your email');
      // You can send a password reset email here
    } else {
      console.log('User not found');
    }
    setEmail('');
  };

  return (
    <div className="Admin-container">
      <h2>
        AdminLogin</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="login-links">
        <p>
          Don't have an account?{' '}
          <button onClick={handleRegister}>Register</button>
        </p>
        <p>
          Forgot password?{' '}
          <span onClick={() => setShowForgotPassword(true)}>Forgot Password</span>
        </p>
      </div>
      {showRegister && (
        <div className="register-form">
          <h2>Register</h2>
          <form onSubmit={handleRegister}>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Register</button>
          </form>
        </div>
      )}
      {showForgotPassword && (
        <div className="forgot-password-form">
          <h2>Forgot Password</h2>
          <form onSubmit={handleForgotPassword}>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit">Send Reset Link</button>
          </form>
        </div>
      )}
    </div>
  )
}
