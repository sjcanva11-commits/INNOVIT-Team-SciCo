// // src/pages/LoginPage.js
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../styles/LoginPage.css';

// const LoginPage = () => {
//   const navigate = useNavigate();

//   const handleGoogleLogin = () => {
//     // Add your Google authentication logic here
//     console.log('Google login clicked');
//     // After successful login, navigate to marketplace
//     // navigate('/marketplace');
//   };

//   const handleMicrosoftLogin = () => {
//     // Add your Microsoft authentication logic here
//     console.log('Microsoft login clicked');
//     // After successful login, navigate to marketplace
//     // navigate('/marketplace');
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         <h1 className="login-brand">DigiVirasat</h1>
//         <p className="login-tagline">Rooted in Culture, Built on Code</p>
        
//         <div className="login-divider">
//           <span>Join 7M+ Artisans — Direct-to-Consumer Marketplace</span>
//         </div>

//         <button className="login-btn google-btn" onClick={handleGoogleLogin}>
//           <svg className="btn-icon" viewBox="0 0 24 24" width="20" height="20">
//             <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
//             <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
//             <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
//             <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
//           </svg>
//           <span>Continue with Google</span>
//         </button>

//         <button className="login-btn microsoft-btn" onClick={handleMicrosoftLogin}>
//           <svg className="btn-icon" viewBox="0 0 24 24" width="20" height="20">
//             <rect x="2" y="2" width="10" height="10" fill="#F25022"/>
//             <rect x="12" y="2" width="10" height="10" fill="#7FBA00"/>
//             <rect x="2" y="12" width="10" height="10" fill="#00A4EF"/>
//             <rect x="12" y="12" width="10" height="10" fill="#FFB900"/>
//           </svg>
//           <span>Continue with Microsoft</span>
//         </button>

//         <p className="login-terms">
//           By continuing, you agree to DigiVirasat's{' '}
//           <a href="/terms">Terms of Service</a> and{' '}
//           <a href="/privacy">Privacy Policy</a>.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

// src/pages/LoginPage.js
// src/pages/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css';
import loginImage from '../assets/HomePage/loginpage.png'; // 👈 Your image import

const LoginPage = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = (role) => {
    console.log(`Google login clicked for role: ${role}`);
    // Add your Google authentication logic here
    // After successful login, navigate based on role
    // navigate('/marketplace');
  };

  const handleMicrosoftLogin = () => {
    console.log('Microsoft login clicked');
    // Add your Microsoft authentication logic here
    // navigate('/marketplace');
  };

  return (
    <div className="login-page">
      {/* Left Side - Your Image */}
      <div className="login-image-side">
        <img 
          src={loginImage} 
          alt="DigiVirasat Heritage"
          className="login-image"
        />
      </div>

      {/* Right Side - Login Form */}
      <div className="login-form-side">
        <div className="login-form-container">
          <h1 className="login-title">DigiVirasat</h1>
          <p className="login-subtitle">Rooted in Culture, Built on Code</p>
          
          <p className="login-cta">
            Join 7M+ Artisans — Direct-to-Consumer Marketplace
          </p>

          {/* Three Google Login Buttons */}
          <button className="google-btn" onClick={() => handleGoogleLogin('buyer')}>
            <svg className="google-icon" viewBox="0 0 24 24" width="20" height="20">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span>Continue with Google (Buyers)</span>
          </button>

          <button className="google-btn" onClick={() => handleGoogleLogin('artisan')}>
            <svg className="google-icon" viewBox="0 0 24 24" width="20" height="20">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span>Continue with Google (Artisan)</span>
          </button>

          <button className="google-btn" onClick={() => handleGoogleLogin('ngo')}>
            <svg className="google-icon" viewBox="0 0 24 24" width="20" height="20">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span>Continue with Google (NGO)</span>
          </button>

          <div className="divider">
            <span>or</span>
          </div>

          <button className="microsoft-btn" onClick={handleMicrosoftLogin}>
            <svg className="microsoft-icon" viewBox="0 0 24 24" width="20" height="20">
              <rect x="2" y="2" width="10" height="10" fill="#F25022"/>
              <rect x="12" y="2" width="10" height="10" fill="#7FBA00"/>
              <rect x="2" y="12" width="10" height="10" fill="#00A4EF"/>
              <rect x="12" y="12" width="10" height="10" fill="#FFB900"/>
            </svg>
            <span>Continue with Microsoft</span>
          </button>

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