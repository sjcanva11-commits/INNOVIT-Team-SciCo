// // src/context/AuthContext.js
// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { 
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   onAuthStateChanged
// } from 'firebase/auth';
// import { doc, setDoc, getDoc } from 'firebase/firestore';
// import { db } from '../firebase/config';

// const AuthContext = createContext();

// export function useAuth() {
//   return useContext(AuthContext);
// }

// export function AuthProvider({ children }) {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [userRole, setUserRole] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Initialize auth
//   const auth = getAuth();

//   // Sign up function
//   async function signup(email, password, userData) {
//     try {
//       // Create user in Firebase Authentication
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;
      
//       // Prepare user profile for Firestore
//       const userProfile = {
//         uid: user.uid,
//         email: user.email,
//         firstName: userData.firstName,
//         lastName: userData.lastName,
//         fullName: `${userData.firstName} ${userData.lastName}`,
//         dateOfBirth: userData.dateOfBirth,
//         role: userData.role,
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString()
//       };
      
//       // Store in Firestore based on role
//       await setDoc(doc(db, `${userData.role}s`, user.uid), userProfile);
      
//       return { success: true, user: userProfile };
//     } catch (error) {
//       console.error('Signup error:', error);
//       let errorMessage = 'Failed to create account';
//       if (error.code === 'auth/email-already-in-use') {
//         errorMessage = 'Email already in use';
//       } else if (error.code === 'auth/weak-password') {
//         errorMessage = 'Password should be at least 6 characters';
//       }
//       return { success: false, error: errorMessage };
//     }
//   }

//   // Login function
//   async function login(email, password, role) {
//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;
      
//       // Get user data from Firestore to verify role
//       const userDoc = await getDoc(doc(db, `${role}s`, user.uid));
      
//       if (!userDoc.exists()) {
//         await signOut(auth);
//         return { success: false, error: 'Role mismatch. Please check your login type.' };
//       }
      
//       const userData = userDoc.data();
      
//       // Update last login
//       await setDoc(doc(db, `${role}s`, user.uid), {
//         lastLogin: new Date().toISOString()
//       }, { merge: true });
      
//       return { success: true, user: userData };
//     } catch (error) {
//       console.error('Login error:', error);
//       let errorMessage = 'Invalid email or password';
//       if (error.code === 'auth/user-not-found') {
//         errorMessage = 'No account found with this email';
//       } else if (error.code === 'auth/wrong-password') {
//         errorMessage = 'Incorrect password';
//       }
//       return { success: false, error: errorMessage };
//     }
//   }

//   // Logout function
//   function logout() {
//     return signOut(auth);
//   }

//   // Listen to auth state changes
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (user) => {
//       if (user) {
//         // Try to find user in different role collections
//         const roles = ['buyer', 'artisan', 'ngo'];
//         let foundRole = null;
//         let userData = null;
        
//         for (const role of roles) {
//           const userDoc = await getDoc(doc(db, `${role}s`, user.uid));
//           if (userDoc.exists()) {
//             foundRole = role;
//             userData = userDoc.data();
//             break;
//           }
//         }
        
//         setCurrentUser({ ...user, ...userData });
//         setUserRole(foundRole);
//       } else {
//         setCurrentUser(null);
//         setUserRole(null);
//       }
//       setLoading(false);
//     });

//     return unsubscribe;
//   }, []);

//   const value = {
//     currentUser,
//     userRole,
//     signup,
//     login,
//     logout,
//     loading
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// }
// src/context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(false);

  // Load saved user from localStorage on app start
  useEffect(() => {
    const savedUser = localStorage.getItem('digivirasat_user');
    if (savedUser) {
      const user = JSON.parse(savedUser);
      setCurrentUser(user);
      setUserRole(user.role);
    }
    setLoading(false);
  }, []);

  // Mock users database (pre-filled for demo)
  const mockUsers = [
    {
      email: 'buyer@digivirasat.com',
      password: 'buyer123',
      firstName: 'Raj',
      lastName: 'Sharma',
      role: 'buyer',
      uid: 'buyer_001',
      createdAt: new Date().toISOString()
    },
    {
      email: 'artisan@digivirasat.com',
      password: 'artisan123',
      firstName: 'Priya',
      lastName: 'Verma',
      role: 'artisan',
      uid: 'artisan_001',
      createdAt: new Date().toISOString()
    },
    {
      email: 'ngo@digivirasat.com',
      password: 'ngo123',
      firstName: 'Amit',
      lastName: 'Singh',
      role: 'ngo',
      uid: 'ngo_001',
      createdAt: new Date().toISOString()
    }
  ];

  // Sign up function
  async function signup(email, password, userData) {
    try {
      // Check if user already exists
      const existingUser = mockUsers.find(u => u.email === email);
      if (existingUser) {
        return { success: false, error: 'Email already registered' };
      }

      // Create mock user
      const mockUser = {
        uid: 'user_' + Date.now(),
        email: email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        fullName: `${userData.firstName} ${userData.lastName}`,
        dateOfBirth: userData.dateOfBirth,
        role: userData.role,
        createdAt: new Date().toISOString()
      };
      
      // Save to localStorage
      localStorage.setItem('digivirasat_user', JSON.stringify(mockUser));
      setCurrentUser(mockUser);
      setUserRole(mockUser.role);
      
      return { success: true, user: mockUser };
    } catch (error) {
      console.error('Signup error:', error);
      return { success: false, error: 'Failed to create account' };
    }
  }

  // Login function with prefilled credentials
  async function login(email, password, role) {
    try {
      // First check mock users
      const mockUser = mockUsers.find(u => u.email === email && u.password === password);
      
      if (mockUser) {
        // Verify role matches
        if (mockUser.role !== role) {
          return { success: false, error: `No ${role} account found. Please check your login type.` };
        }
        
        // Save to localStorage
        localStorage.setItem('digivirasat_user', JSON.stringify(mockUser));
        setCurrentUser(mockUser);
        setUserRole(mockUser.role);
        
        return { success: true, user: mockUser };
      }
      
      // Check if user exists in localStorage (from signup)
      const savedUser = localStorage.getItem('digivirasat_user');
      if (savedUser) {
        const user = JSON.parse(savedUser);
        
        // Verify role matches
        if (user.role !== role) {
          return { success: false, error: `No ${role} account found. Please check your login type.` };
        }
        
        // Verify email and password (simple check for demo)
        if (user.email !== email) {
          return { success: false, error: 'Invalid email or password' };
        }
        
        if (password !== 'password123' && !mockUsers.find(u => u.email === email)) {
          // For demo, accept any password for signed up users
          // In real scenario, you'd verify properly
        }
        
        // Update last login
        user.lastLogin = new Date().toISOString();
        localStorage.setItem('digivirasat_user', JSON.stringify(user));
        setCurrentUser(user);
        setUserRole(user.role);
        
        return { success: true, user: user };
      }
      
      return { success: false, error: 'Invalid email or password. Try: buyer@digivirasat.com / buyer123' };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: 'Invalid email or password' };
    }
  }

  // Logout function
  function logout() {
    localStorage.removeItem('digivirasat_user');
    setCurrentUser(null);
    setUserRole(null);
    return Promise.resolve();
  }

  const value = {
    currentUser,
    userRole,
    signup,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}