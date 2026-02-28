// // // // import React, { useEffect } from "react";
// // // // import { Routes, Route } from "react-router-dom";
// // // // import Home from "./pages/Home";
// // // // import IndiaMap from "./pages/IndiaMap";

// // // // // STATES

// // // // import { Ecommerce } from "./pages/Ecommerce";
// // // // import CulturePage from "./pages/Culture";
// // // // import { OutroTransition } from "./components/Transition";
// // // // import { TradePage } from "./pages/NewEcommerce";
// // // // import AddDataComponent from "./pages/AddData";
// // // // // import NavB from "./components/NavB";

// // // // import AOS from 'aos';
// // // // import 'aos/dist/aos.css';

// // // // import StatePage from "./pages/StatePage";
// // // // import { TradePage2 } from "./pages/EcommercePage2";

// // // // const App = () => {
// // // //   useEffect(() => {
// // // //     AOS.init();
// // // //   }, []);

// // // //   return (
// // // //     <Routes>
// // // //       <Route path="/trans" element={<OutroTransition />} />

// // // //       <Route exact path="/" index element={<Home />} />
// // // //       <Route path="/india" element={<IndiaMap />} />
// // // //       {/* <Route path="/trade" element={<Ecommerce />} /> */}
// // // //       <Route path="/trade" element={<TradePage />} />
// // // //       <Route path="/trade/more" element={<TradePage2 />} />

// // // //       {/* <Route path="/culture" element={<CulturePage />} /> */}

// // // //       <Route path="/addData" element={<AddDataComponent />} />
// // // //       {/* <Route path="/navb" element={<NavB />} /> */}

// // // //       <Route path={"/state/:stateName"} element={<StatePage />} />
// // // //       {/* Mapping states for code clarity */}
// // // //     </Routes>
// // // //   );
// // // // };

// // // // export default App;
// // // import React, { useEffect } from "react";
// // // import { Routes, Route } from "react-router-dom";
// // // import Home from "./pages/Home";
// // // import IndiaMap from "./pages/IndiaMap";
// // // import LoginPage from "./pages/LoginPage"; // 👈 Import LoginPage

// // // // STATES
// // // import { Ecommerce } from "./pages/Ecommerce";
// // // import CulturePage from "./pages/Culture";
// // // import { OutroTransition } from "./components/Transition";
// // // import { TradePage } from "./pages/NewEcommerce";
// // // import AddDataComponent from "./pages/AddData";
// // // // import NavB from "./components/NavB";

// // // import AOS from 'aos';
// // // import 'aos/dist/aos.css';

// // // import StatePage from "./pages/StatePage";
// // // import { TradePage2 } from "./pages/EcommercePage2";

// // // const App = () => {
// // //   useEffect(() => {
// // //     AOS.init();
// // //   }, []);

// // //   return (
// // //     <Routes>
// // //       <Route path="/trans" element={<OutroTransition />} />

// // //       <Route exact path="/" index element={<Home />} />
// // //       <Route path="/india" element={<IndiaMap />} />
// // //       <Route path="/login" element={<LoginPage />} /> {/* 👈 NEW LOGIN ROUTE */}
      
// // //       {/* <Route path="/trade" element={<Ecommerce />} /> */}
// // //       <Route path="/trade" element={<TradePage />} />
// // //       <Route path="/trade/more" element={<TradePage2 />} />

// // //       {/* <Route path="/culture" element={<CulturePage />} /> */}

// // //       <Route path="/addData" element={<AddDataComponent />} />
// // //       {/* <Route path="/navb" element={<NavB />} /> */}

// // //       <Route path={"/state/:stateName"} element={<StatePage />} />
// // //       {/* Mapping states for code clarity */}
// // //     </Routes>
// // //   );
// // // };

// // // export default App;
// // // src/App.js
// // import React, { useEffect } from "react";
// // import { Routes, Route } from "react-router-dom";
// // import { AuthProvider } from "./context/AuthContext"; // 👈 Import AuthProvider
// // import ProtectedRoute from "./components/ProtectedRoute"; // 👈 Import ProtectedRoute
// // import Home from "./pages/Home";
// // import IndiaMap from "./pages/IndiaMap";
// // import LoginPage from "./pages/LoginPage";
// // import SignUpPage from "./pages/SignUpPage"; // 👈 Import SignUpPage (you'll create this next)
// // import ArtisanDashboard from "./pages/ArtisanDashboard";

// // // STATES
// // import { Ecommerce } from "./pages/Ecommerce";
// // import CulturePage from "./pages/Culture";
// // import { OutroTransition } from "./components/Transition";
// // import { TradePage } from "./pages/NewEcommerce";
// // import AddDataComponent from "./pages/AddData";

// // import AOS from 'aos';
// // import 'aos/dist/aos.css';

// // import StatePage from "./pages/StatePage";
// // import { TradePage2 } from "./pages/EcommercePage2";

// // const App = () => {
// //   useEffect(() => {
// //     AOS.init();
// //   }, []);

// //   return (
// //     <AuthProvider> {/* 👈 Wrap everything with AuthProvider */}
// //       <Routes>
// //         {/* Public Routes */}
// //         <Route path="/trans" element={<OutroTransition />} />
// //         <Route exact path="/" index element={<Home />} />
// //         <Route path="/india" element={<IndiaMap />} />
// //         <Route path="/login" element={<LoginPage />} />
// //         <Route path="/signup" element={<SignUpPage />} /> {/* 👈 Add signup route */}
        
// //         {/* Protected Routes - Require Authentication */}
// //         <Route path="/trade" element={
// //           <ProtectedRoute allowedRoles={['buyer', 'artisan', 'ngo']}>
// //             <TradePage />
// //           </ProtectedRoute>
// //         } />
        
// //         <Route path="/trade/more" element={
// //           <ProtectedRoute allowedRoles={['buyer', 'artisan', 'ngo']}>
// //             <TradePage2 />
// //           </ProtectedRoute>
// //         } />

// //         <Route path="/addData" element={
// //           <ProtectedRoute allowedRoles={['artisan', 'ngo']}> {/* Only artisans and NGOs can add data */}
// //             <AddDataComponent />
// //           </ProtectedRoute>
// //         } />

// //         <Route path="/state/:stateName" element={
// //           <ProtectedRoute allowedRoles={['buyer', 'artisan', 'ngo']}>
// //             <StatePage />
// //           </ProtectedRoute>
// //         } />

// //         {/* Optional: Add role-specific dashboard routes */}
// //         <Route path="/artisan-dashboard" element={
// //           <ProtectedRoute allowedRoles={['artisan']}>
// //             <div>Artisan Dashboard (Coming Soon)</div>
// //           </ProtectedRoute>
// //         } />

// //         <Route path="/ngo-dashboard" element={
// //           <ProtectedRoute allowedRoles={['ngo']}>
// //             <div>NGO Dashboard (Coming Soon)</div>
// //           </ProtectedRoute>
// //         } />

// //         {/* Commented out routes - keep as is */}
// //         {/* <Route path="/culture" element={<CulturePage />} /> */}
// //         {/* <Route path="/navb" element={<NavB />} /> */}
// //       </Routes>
// //     </AuthProvider>
// //   );
// // };

// // export default App;

// // src/App.js
// import React, { useEffect } from "react";
// import { Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./context/AuthContext";
// import ProtectedRoute from "./components/ProtectedRoute";
// import Home from "./pages/Home";
// import IndiaMap from "./pages/IndiaMap";
// import LoginPage from "./pages/LoginPage";
// import SignUpPage from "./pages/SignUpPage";
// import ArtisanDashboard from "./pages/ArtisanDashboard";
// import NGODashboard from "./pages/NGODashboard"; // 👈 IMPORT THE NGO DASHBOARD

// // STATES
// import { Ecommerce } from "./pages/Ecommerce";
// import CulturePage from "./pages/Culture";
// import { OutroTransition } from "./components/Transition";
// import { TradePage } from "./pages/NewEcommerce";
// import AddDataComponent from "./pages/AddData";

// import AOS from 'aos';
// import 'aos/dist/aos.css';

// import StatePage from "./pages/StatePage";
// import { TradePage2 } from "./pages/EcommercePage2";

// const App = () => {
//   useEffect(() => {
//     AOS.init();
//   }, []);

//   return (
//     <AuthProvider>
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/trans" element={<OutroTransition />} />
//         <Route exact path="/" index element={<Home />} />
//         <Route path="/india" element={<IndiaMap />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/signup" element={<SignUpPage />} />
        
//         {/* Protected Routes - Require Authentication */}
//         <Route path="/trade" element={
//           <ProtectedRoute allowedRoles={['buyer', 'artisan', 'ngo']}>
//             <TradePage />
//           </ProtectedRoute>
//         } />
        
//         <Route path="/trade/more" element={
//           <ProtectedRoute allowedRoles={['buyer', 'artisan', 'ngo']}>
//             <TradePage2 />
//           </ProtectedRoute>
//         } />

//         <Route path="/addData" element={
//           <ProtectedRoute allowedRoles={['artisan', 'ngo']}>
//             <AddDataComponent />
//           </ProtectedRoute>
//         } />

//         <Route path="/state/:stateName" element={
//           <ProtectedRoute allowedRoles={['buyer', 'artisan', 'ngo']}>
//             <StatePage />
//           </ProtectedRoute>
//         } />

//         {/* Artisan Dashboard - Only accessible by artisans */}
//         <Route path="/artisan-dashboard" element={
//           <ProtectedRoute allowedRoles={['artisan']}>
//             <ArtisanDashboard />
//           </ProtectedRoute>
//         } />

//         {/* NGO Dashboard - Only accessible by NGOs */}
//         <Route path="/ngo-dashboard" element={
//           <ProtectedRoute allowedRoles={['ngo']}>
//             <NGODashboard />
//           </ProtectedRoute>
//         } />

//         {/* Commented out routes - keep as is */}
//         {/* <Route path="/culture" element={<CulturePage />} /> */}
//         {/* <Route path="/navb" element={<NavB />} /> */}
//       </Routes>
//     </AuthProvider>
//   );
// };

// export default App;
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import IndiaMap from "./pages/IndiaMap";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ArtisanDashboard from "./pages/ArtisanDashboard";
import NGODashboard from "./pages/NGODashboard";
import ArtisansList from "./pages/ArtisansList"; 

// STATES
import { Ecommerce } from "./pages/Ecommerce";
import CulturePage from "./pages/Culture";
import { OutroTransition } from "./components/Transition";
import { TradePage } from "./pages/NewEcommerce";
import AddDataComponent from "./pages/AddData";

import AOS from 'aos';
import 'aos/dist/aos.css';

import StatePage from "./pages/StatePage";
import { TradePage2 } from "./pages/EcommercePage2";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <AuthProvider>
      <Routes>
        {/* Public Routes */}
        <Route path="/trans" element={<OutroTransition />} />
        <Route exact path="/" index element={<Home />} />
        <Route path="/india" element={<IndiaMap />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        
        {/* Artisans List - Public Route (can be viewed by anyone) */}
        <Route path="/artisans" element={<ArtisansList />} />
        
        {/* Protected Routes - Require Authentication */}
        <Route path="/trade" element={
          <ProtectedRoute allowedRoles={['buyer', 'artisan', 'ngo']}>
            <TradePage />
          </ProtectedRoute>
        } />
        
        <Route path="/trade/more" element={
          <ProtectedRoute allowedRoles={['buyer', 'artisan', 'ngo']}>
            <TradePage2 />
          </ProtectedRoute>
        } />

        <Route path="/addData" element={
          <ProtectedRoute allowedRoles={['artisan', 'ngo']}>
            <AddDataComponent />
          </ProtectedRoute>
        } />

        <Route path="/state/:stateName" element={
          <ProtectedRoute allowedRoles={['buyer', 'artisan', 'ngo']}>
            <StatePage />
          </ProtectedRoute>
        } />

        {/* Artisan Dashboard - Only accessible by artisans */}
        <Route path="/artisan-dashboard" element={
          <ProtectedRoute allowedRoles={['artisan']}>
            <ArtisanDashboard />
          </ProtectedRoute>
        } />

        {/* NGO Dashboard - Only accessible by NGOs */}
        <Route path="/ngo-dashboard" element={
          <ProtectedRoute allowedRoles={['ngo']}>
            <NGODashboard />
          </ProtectedRoute>
        } />

        {/* Commented out routes - keep as is */}
        {/* <Route path="/culture" element={<CulturePage />} /> */}
        {/* <Route path="/navb" element={<NavB />} /> */}
      </Routes>
    </AuthProvider>
  );
};

export default App;