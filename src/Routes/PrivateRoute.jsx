/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children }) => {
   const { loading, user } = useAuth();
   const location = useLocation();

   if (loading) {
      return <p className="mt-28 text-center text-2xl ">Loading....</p>
   }

   if (user) {
      return children
   }

   return <Navigate to="/login" state={{ from: location }} replace={true}></Navigate>
};

export default PrivateRoute;