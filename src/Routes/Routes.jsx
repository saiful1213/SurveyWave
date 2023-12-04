import { createBrowserRouter } from "react-router-dom";
import Roots from "../Roots/Roots";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Error/Error";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Surveys from "../Pages/Surveys/Surveys";
import SurveyDetails from "../Pages/SurveyDetails/SurveyDetails";
import Pricing from "../Pages/Pricing/Pricing";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "../Routes/PrivateRoute"
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import ManageSurvey from "../Pages/Dashboard/ManageSurvey/ManageSurvey";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AdminRoute from "./AdminRoute";
import DashboardHome from "../Pages/Dashboard/DashboardHome/DashboardHome";
import Payment from "../Pages/Dashboard/Payment/Payment";


const Routes = createBrowserRouter([
   {
      path: '/',
      element: <Roots></Roots>,
      errorElement: <Error></Error>,
      children: [
         {
            path: '/',
            element: <Home></Home>
         },
         {
            path: '/surveys',
            element: <Surveys></Surveys>
         },
         {
            path: '/surveyDetails/:id',
            element: <SurveyDetails></SurveyDetails>,
         },
         {
            path: '/pricing',
            element: <Pricing></Pricing>
         },
         {
            path: '/payment',
            element: <Payment></Payment>
         }
      ]
   },
   {
      path: '/register',
      element: <Register></Register>
   },
   {
      path: '/login',
      element: <Login></Login>
   },
   {
      path: '/dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
         {
            path: '/dashboard',
            element: <DashboardHome></DashboardHome>
         },
         {
            path: 'userHome',
            element: <UserHome></UserHome>
         },

         // admin route
         {
            path: 'manageSurvey',
            element: <AdminRoute><ManageSurvey></ManageSurvey></AdminRoute>
         },
         {
            path: 'manageUsers',
            element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
         }
      ]
   }
])

export default Routes;