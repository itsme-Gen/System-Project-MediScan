import React, { useState } from 'react';
import { Stethoscope, Mail, Lock, User } from 'lucide-react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', { email, password });
  };

  return (
    <div className="login-container">
      <div className="login-content">
        {/* Logo and Header */}
        <div className="header-section">
          <div className="logo">
            <Stethoscope size={32} color="white" />
          </div>
          <h1 className="app-title">MediScan</h1>
          <p className="app-subtitle">Medical Record Verification System</p>
        </div>

        {/* Login Card */}
        <div className="login-card">
          <div className="card-header">
            <Stethoscope size={20} className="card-icon" />
            <h2 className="card-title">Access MediScan</h2>
          </div>
          <p className="card-subtitle">Sign in to your account or create a new one</p>

          {/* Tab Navigation */}
          <div className="tab-navigation">
            <button
              className="tab-button active"
            >
              <User size={16} />
              Sign In
            </button>
            <button
              className="tab-button"
            >
              <User size={16} />
              Create Account
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <div className="input-wrapper">
                <Mail size={16} className="input-icon" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="form-input"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <div className="input-wrapper">
                <Lock size={16} className="input-icon" />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="form-input"
                  required
                />
              </div>
            </div>

            <button type="submit" className="submit-button">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;