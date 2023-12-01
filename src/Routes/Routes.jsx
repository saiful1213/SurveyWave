import { createBrowserRouter } from "react-router-dom";
import Roots from "./Roots/Roots";
import Home from "../Pages/Home/Home/Home";

const Routes = createBrowserRouter([
   {
      path: '/',
      element: <Roots></Roots>,
      children: [
         {
            path: '/',
            element: <Home></Home>
         }
      ]
   }
])

export default Routes;