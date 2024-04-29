import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  GithubAuthProvider
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import toast from "react-hot-toast";
import axios from "axios";

export const AuthContexts = createContext(null);
const googleProvaider = new GoogleAuthProvider()
const githubProvaider = new GithubAuthProvider()

// eslint-disable-next-line react/prop-types
const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userInstantUpdate, setUserInstantUpdate] = useState(false);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [postUpdate, setPostUpdate] = useState(true)


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

  useEffect(() => {
    axios
      .get("https://glovevista-server.vercel.app/allposts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch(() => toast.error("Something went wrong"));
  }, [postUpdate]);


  const signUpWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvaider)
  }
  const signInWithGithub = () => {
    return signInWithPopup(auth, githubProvaider)
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
    setPosts,
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
    signInWithGithub,
    postUpdate,
    setPostUpdate
  };

  return (
    <AuthContexts.Provider value={value}>{children}</AuthContexts.Provider>
  );
};

export default AuthContext;
