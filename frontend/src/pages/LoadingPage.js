// // import "../styles/LoadingPage.css"
// // import { useEffect } from "react";

// // export const LoadingPage = ({percentage}) => {
  
// //   return (
// //     <div id="loading-wrapper">
// //       <div id="loading-text">LOADING <div key={percentage}> {percentage} </div></div>
// //       <div id="loading-content"></div>
// //     </div>
// //   );
// // };
// // src/pages/LoadingPage.js
// import React, { useEffect, useState } from 'react';
// import '../styles/LoadingPage.css';

// export const LoadingPage = ({ onLoadingComplete }) => {
//   const [fadeOut, setFadeOut] = useState(false);

//   useEffect(() => {
//     // Show loading screen, then fade out smoothly
//     const timer = setTimeout(() => {
//       setFadeOut(true);
      
//       // After fade completes (0.8s), remove loading screen
//       setTimeout(() => {
//         if (onLoadingComplete) onLoadingComplete();
//       }, 750);
//     }, 500); // Show for .5 seconds

//     return () => clearTimeout(timer);
//   }, [onLoadingComplete]);

//   return (
//     <div className={`sarvam-loading ${fadeOut ? 'fade-out' : ''}`}>
//       <div className="loading-content">
//         <h1 className="loading-brand">DigiVirasat</h1>
//         <p className="loading-tagline">Rooted in Culture, Built on Code</p>
//       </div>
//     </div>
//   );
// };
// src/pages/LoadingPage.js
import React, { useEffect, useState } from 'react';
import '../styles/LoadingPage.css';

export const LoadingPage = ({ onLoadingComplete }) => {  // 👈 Add 'export' keyword
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      
      setTimeout(() => {
        if (onLoadingComplete) onLoadingComplete();
      }, 750);
    }, 1000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div className={`sarvam-loading ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loading-content">
        <h1 className="loading-brand">DigiVirasat</h1>
        <p className="loading-tagline">Rooted in Culture, Built on Code</p>
      </div>
    </div>
  );
};