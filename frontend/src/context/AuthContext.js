// src/context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  // Initialize auth
  const auth = getAuth();

  // Sign up function
  async function signup(email, password, userData) {
    try {
      // Create user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Prepare user profile for Firestore
      const userProfile = {
        uid: user.uid,
        email: user.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        fullName: `${userData.firstName} ${userData.lastName}`,
        dateOfBirth: userData.dateOfBirth,
        role: userData.role,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      
      // Store in Firestore based on role
      await setDoc(doc(db, `${userData.role}s`, user.uid), userProfile);
      
      return { success: true, user: userProfile };
    } catch (error) {
      console.error('Signup error:', error);
      let errorMessage = 'Failed to create account';
      if (error.code === 'auth/email-already-in-use') {
        errorMessage = 'Email already in use';
      } else if (error.code === 'auth/weak-password') {
        errorMessage = 'Password should be at least 6 characters';
      }
      return { success: false, error: errorMessage };
    }
  }

  // Login function
  async function login(email, password, role) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Get user data from Firestore to verify role
      const userDoc = await getDoc(doc(db, `${role}s`, user.uid));
      
      if (!userDoc.exists()) {
        await signOut(auth);
        return { success: false, error: 'Role mismatch. Please check your login type.' };
      }
      
      const userData = userDoc.data();
      
      // Update last login
      await setDoc(doc(db, `${role}s`, user.uid), {
        lastLogin: new Date().toISOString()
      }, { merge: true });
      
      return { success: true, user: userData };
    } catch (error) {
      console.error('Login error:', error);
      let errorMessage = 'Invalid email or password';
      if (error.code === 'auth/user-not-found') {
        errorMessage = 'No account found with this email';
      } else if (error.code === 'auth/wrong-password') {
        errorMessage = 'Incorrect password';
      }
      return { success: false, error: errorMessage };
    }
  }

  // Logout function
  function logout() {
    return signOut(auth);
  }

  // Listen to auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Try to find user in different role collections
        const roles = ['buyer', 'artisan', 'ngo'];
        let foundRole = null;
        let userData = null;
        
        for (const role of roles) {
          const userDoc = await getDoc(doc(db, `${role}s`, user.uid));
          if (userDoc.exists()) {
            foundRole = role;
            userData = userDoc.data();
            break;
          }
        }
        
        setCurrentUser({ ...user, ...userData });
        setUserRole(foundRole);
      } else {
        setCurrentUser(null);
        setUserRole(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

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
      {!loading && children}
    </AuthContext.Provider>
  );
}