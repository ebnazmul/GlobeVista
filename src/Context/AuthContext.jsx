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
import axios from "axios";

export const AuthContexts = createContext(null);
const googleProvaider = new GoogleAuthProvider()

// eslint-disable-next-line react/prop-types
const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userInstantUpdate, setUserInstantUpdate] = useState(false);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [postUpdate, setPostUpdate] = useState(true)

  useEffect(() => {
    axios
      .get("https://assignment10-eta.vercel.app/allposts")
      .then((res) => {
        // console.log(res);
        setPosts(res.data);
      })
      .catch(() => toast.error("Something went wrong"));
  }, [postUpdate]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      }else{
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
    .catch(() => toast.error("Something went wrong"))
  }

  const updateUserProfile = (fullName, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: fullName,
      photoURL: photoURL,
    });
  };

  const signUserOut = () => {
    signOut(auth)
    .then(()=>{
      toast.success("Sign Out Successfully")
      setUser(null)
    })
    .catch(()=>toast.error("Something went wrong"))
  };

  const value = {
    posts,
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
    signInWithGoogle,
    postUpdate,
    setPostUpdate
  };

  return (
    <AuthContexts.Provider value={value}>{children}</AuthContexts.Provider>
  );
};

export default AuthContext;
