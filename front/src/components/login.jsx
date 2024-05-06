import React, { useState } from 'react';
import axios from 'axios';
import './login.css';
import Header from './header';
import Addop from './addop';
import Company from './company';
import Footer from './footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    // Basic email validation regex
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    // Simple password length validation
    return password.length >= 6;
  };

  const validateForm = () => {
    const newErrors = {};

    if (!validateEmail(email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!validatePassword(password)) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    if (!isLogin && password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!isLogin && name.trim() === '') {
      newErrors.name = 'Name is required';
    }

    setErrors(newErrors);

    // If there are no errors, return true; otherwise, return false
    return Object.keys(newErrors).length === 0;
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const handleLoginSuccess = (email) => {
    console.log('Logged in successfully as', email);
    // You can add more logic here, such as redirecting to another page
  };

  const handleLogin = async () => {
    if (!validateForm()) {
      return;
    }
    try {
      console.log('Logging in...');
      const response = await axios.post('http://localhost:5000/api/users/login', { email, password });
      const { token } = response.data;
      console.log(token);
      localStorage.setItem('token', token);
      onLogin(email);
    } catch (error) {
      setErrors({ login: error.response?.data?.message || 'An unknown error occurred' });
      console.error('Login Error:', error);
      setTimeout(() => {
        setErrors({});
      }, 5000); // Error disappears after 5 seconds
    }
  };

  const handleSignup = async () => {
    if (!validateForm()) {
      return;
    }
    try {
      console.log('Signing up...');
      const response = await axios.post('http://localhost:5000/api/users/register', { email, password, name });
      await handleLogin();
    } catch (error) {
      setErrors({ signup: error.response?.data?.message || 'An unknown error occurred' });
      console.error('Signup Error:', error);
      setTimeout(() => {
        setErrors({});
      }, 5000); // Error disappears after 5 seconds
    }
  };

  const onLogin = (email) => {
    handleLoginSuccess(email);
    // Add any additional logic you want to execute on login here
  };

  return (
    <>
    <Header />
    <Addop />
    <Company />
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
              {errors.email && <p className="error">{errors.email}</p>}
              <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
              {errors.password && <p className="error">{errors.password}</p>}
              <button onClick={handleLogin}>Login</button>
              {errors.login && <p className="error">{errors.login}</p>}
            </div>
          </>
        ) : (
          <>
            <h2>Signup</h2>
            <div className="email-login">
              <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
              {errors.email && <p className="error">{errors.email}</p>}
              <input type="text" placeholder="Name" value={name} onChange={handleNameChange} />
              {errors.name && <p className="error">{errors.name}</p>}
              <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
              {errors.password && <p className="error">{errors.password}</p>}
              <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
              {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
              <button onClick={handleSignup}>Signup</button>
              {errors.signup && <p className="error">{errors.signup}</p>}
            </div>
          </>
        )}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Login;
