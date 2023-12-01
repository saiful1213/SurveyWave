import { createBrowserRouter } from "react-router-dom";
import Roots from "../Roots/Roots";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Error/Error";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";

const Routes = createBrowserRouter([
   {
      path: '/',
      element: <Roots></Roots>,
      errorElement: <Error></Error>,
      children: [
         {
            path: '/',
            element: <Home></Home>
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
   }
])

export default Routes;