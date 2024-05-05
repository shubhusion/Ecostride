import React, { useState } from 'react';
import axios from 'axios';
import './login.css'; // Import the CSS file for styling

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true); // State to track whether login or signup is active
  const [error, setError] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleToggle = () => {
    setIsLogin(!isLogin); // Toggle between login and signup
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', { email, password });
      const { token } = response.data;
      localStorage.setItem('token', token); // Store token in localStorage
      onLogin(email);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const handleSignup = async () => {
    try {
      await axios.post('http://localhost:5000/api/users/register', { email, password, name: 'John Doe' });
      // Automatically log in user after registration
      await handleLogin();
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className={`login-container ${isLogin ? 'login-active' : 'signup-active'}`}>
      <div className="login-toggle">
        <button className={`toggle-button ${isLogin ? 'active' : ''}`} onClick={() => setIsLogin(true)}>Login</button>
        <button className={`toggle-button ${!isLogin ? 'active' : ''}`} onClick={() => setIsLogin(false)}>Signup</button>
      </div>
      <div className="form-container">
        {isLogin ? (
          <>
            <h2>Login</h2>
            <div className="email-login">
              <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
              <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
              <button onClick={handleLogin}>Login</button>
            </div>
          </>
        ) : (
          <>
            <h2>Signup</h2>
            <div className="email-login">
              <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
              <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
              <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
              <button onClick={handleSignup}>Signup</button>
            </div>
          </>
        )}
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default Login;
