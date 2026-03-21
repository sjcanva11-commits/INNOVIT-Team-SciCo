// src/pages/LoginPage.js
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/LoginPage.css';
import { LoadingPage } from './LoadingPage'; // 👈 Import LoadingPage
import loginImage from '../assets/HomePage/loginpage.png';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [pageLoading, setPageLoading] = useState(true); // 👈 Add page loading state

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'buyer'
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState('');

  // 👇 Add this useEffect to handle the initial page loading
  useEffect(() => {
    // Simulate loading time (checking auth, loading assets, etc.)
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 1500); // Show loading for 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);
    setServerError('');

    const result = await login(formData.email, formData.password, formData.role);

    if (result.success) {
      // Show loading screen before redirect
      setPageLoading(true);
      
      // Simulate slight delay for smooth transition
      setTimeout(() => {
        switch(formData.role) {
          case 'buyer':
            navigate('/trade');
            break;
          case 'artisan':
            navigate('/artisan-dashboard');
            break;
          case 'ngo':
            navigate('/ngo-dashboard');
            break;
          default:
            navigate('/');
        }
      }, 1500);
    } else {
      setServerError(result.error);
      setLoading(false);
    }
  };

  // 👇 Show loading page while pageLoading is true
  if (pageLoading) {
    return <LoadingPage message="Preparing your cultural experience..." />;
  }

  return (
    <div className="login-page">
      <div className="login-image-side">
        <img src={loginImage} alt="DigiVirasat Heritage" className="login-image" />
      </div>

      <div className="login-form-side">
        <div className="login-form-container">
          <h1 className="login-title">DigiVirasat</h1>
          <p className="login-subtitle">Rooted in Culture, Built on Code</p>

          {serverError && (
            <div className="server-error">{serverError}</div>
          )}

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
                disabled={loading}
                placeholder="Enter your email"
              />
              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? 'error' : ''}
                disabled={loading}
                placeholder="Enter your password"
              />
              {errors.password && (
                <span className="error-message">{errors.password}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="role">Login as</label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                disabled={loading}
              >
                <option value="buyer">Buyer</option>
                <option value="artisan">Artisan</option>
                <option value="ngo">NGO</option>
              </select>
            </div>

            <button type="submit" className="login-submit-btn" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>

            <p className="signup-link">
              Don't have an account? <Link to="/signup">Sign up here</Link>
            </p>
          </form>
              {/* // Add this after the form, before the terms */}
<div 
  className="demo-credentials"
  style={{
    marginTop: '24px',
    padding: '20px',
    background: 'linear-gradient(to right, #f8f9fa, #e9ecef)',
    borderRadius: '16px',
    textAlign: 'center',
    border: '1px solid #dee2e6',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
  }}
>
  <p style={{
    fontSize: '14px',
    color: '#495057',
    marginBottom: '12px',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px'
  }}>
    <span style={{ fontSize: '16px' }}>📋</span>
    Demo Credentials
    <span style={{ fontSize: '16px' }}>🔐</span>
  </p>
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '12px',
    fontSize: '12px',
    fontFamily: 'monospace'
  }}>
    <div style={{
      background: '#fff',
      padding: '10px',
      borderRadius: '8px',
      borderLeft: '3px solid #4CAF50',
      color: '#2c3e50'
    }}>
      <strong style={{ color: '#4CAF50' }}>🛍️ Buyer:</strong> buyer@digivirasat.com / buyer123
    </div>
    <div style={{
      background: '#fff',
      padding: '10px',
      borderRadius: '8px',
      borderLeft: '3px solid #FF9800',
      color: '#2c3e50'
    }}>
      <strong style={{ color: '#FF9800' }}>🎨 Artisan:</strong> artisan@digivirasat.com / artisan123
    </div>
    <div style={{
      background: '#fff',
      padding: '10px',
      borderRadius: '8px',
      borderLeft: '3px solid #2196F3',
      color: '#2c3e50'
    }}>
      <strong style={{ color: '#2196F3' }}>🌱 NGO:</strong> ngo@digivirasat.com / ngo123
    </div>
  </div>
</div>
          <p className="terms">
            By continuing, you agree to DigiVirasat's{' '}
            <a href="/terms">Terms of Service</a> and{' '}
            <a href="/privacy">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;