import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const useAuth = () => {
   const authInfo = useContext(AuthContext);
   return authInfo 
};
// user, loading, createUser, updateUserProfile, login, googleSignin, handleLogOut 
export default useAuth;