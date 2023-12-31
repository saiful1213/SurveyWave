/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();

const AuthProviders = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);
   const axiosPublic = useAxiosPublic();

   // sign up with email and password
   const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   }

   // update user profile
   const updateUserProfile = (name, image) => {
      setLoading(true);
      return updateProfile(auth.currentUser, {
         displayName: name, photoURL: image
      })
   }

   // login with email and password
   const login = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   }

   // sign in with google
   const googleSignin = () => {
      setLoading(true);
      return signInWithPopup(auth, provider);
   }

   // logOut
   const handleLogOut = () => {
      setLoading(true);
      return signOut(auth)
   }

   // get current user
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currenUser) => {
         if (currenUser) {
            const userInfo = { email: currenUser.email };
            axiosPublic.post('/jwt', userInfo)
               .then((res) => {
                  if (res.data.token) {
                     localStorage.setItem('access-token', res.data.token)
                     setLoading(false);
                  }
               })
         }
         else {
            localStorage.removeItem('access-token');
            setLoading(false);
         }
         setUser(currenUser);
      })
      return () => {
         return unsubscribe();
      }
   }, [])

   const authInfo = { user, loading, createUser, updateUserProfile, login, googleSignin, handleLogOut };
   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProviders;