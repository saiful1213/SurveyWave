/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";

const AdminRoute = ({children}) => {
   const [isAdmin, isLoading] = useAdmin();
   const {user, loading} = useAuth();

   const location = useLocation();

   if (loading || isLoading) {
      return <p className="mt-28 text-center text-2xl ">Loading....</p>
   }

   if (user && isAdmin) {
      return children
   }

   return <Navigate to="/login" state={{ from: location }} replace={true}></Navigate>
};

export default AdminRoute;