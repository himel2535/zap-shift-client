import React from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();

  // ---create---
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // ---signIn---
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // ---google signIn---
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // ---Sign Out---
  const LogOut = () => {
    return signOut(auth);
  };

  const authInfo = {
    registerUser,
    signInUser,
    signInWithGoogle,
  };

  return <AuthContext value={authInfo}> {children}</AuthContext>;
};

export default AuthProvider;
