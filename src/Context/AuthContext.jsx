import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContexts = createContext(null);

// eslint-disable-next-line react/prop-types
const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      }
    });
  }, []);

  const signUpWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (fullName, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: fullName,
      photoURL: photoURL,
    });
  };

  const signUserOut = () => {
    return signOut(auth);
  };

  const value = {
    user,
    setUser,
    signUpWithEmail,
    signInWithEmail,
    signUserOut,
    updateUserProfile,
    loading,
    setLoading,
  };

  return (
    <AuthContexts.Provider value={value}>{children}</AuthContexts.Provider>
  );
};

export default AuthContext;
