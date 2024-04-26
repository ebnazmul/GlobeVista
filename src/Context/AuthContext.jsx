import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  GoogleAuthProvider
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import toast from "react-hot-toast";

export const AuthContexts = createContext(null);
const googleProvaider = new GoogleAuthProvider()

// eslint-disable-next-line react/prop-types
const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userInstantUpdate, setUserInstantUpdate] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      }
    });
  }, [userInstantUpdate]);

  const signUpWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvaider)
    .then(() => {
        toast.success("Successfully Logged!")
        setUserInstantUpdate(!userInstantUpdate)
    })
    .catch(err => console.log(err))
  }

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
    userInstantUpdate,
    setUserInstantUpdate,
    signInWithGoogle
  };

  return (
    <AuthContexts.Provider value={value}>{children}</AuthContexts.Provider>
  );
};

export default AuthContext;
