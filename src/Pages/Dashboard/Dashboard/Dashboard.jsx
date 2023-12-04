import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../../Hooks/useAdmin";

const Dashboard = () => {
   const [isAdmin] = useAdmin();

   return (
      <div>
         <div className="lg:flex lg:gap-10 ">
            <div className="flex lg:flex-col justify-between lg:w-[300px] gap-1 lg:sticky top-0 lg:h-full bg-green-100 lg:min-h-screen p-4">
               <ul className="gap-1 flex lg:flex-col">
                  {
                     isAdmin ?
                        <>
                           <li className="font-semibold w-full">
                              <Link to="/dashboard/manageSurvey">
                                 <button className="w-full btn btn-secondary mb-2">Manage Survey</button>
                              </Link>
                           </li>
                           <li className="font-semibold w-full">
                              <Link to="/dashboard/manageUsers">
                                 <button className="w-full btn btn-secondary">Manage Users</button>
                              </Link>
                           </li>
                        </>
                        : <>
                           <li className="font-semibold w-full">
                              <Link to="/dashboard/userHome"><button className="w-full btn btn-secondary">User Profile</button></Link>
                           </li>
                        </>
                  }
               </ul>
               {/* shared links */}
               <div className="flex lg:flex-col gap-1">
                  {/* <div className="divider"></div> */}
                  <Link to='/'><button className="w-full btn btn-success mb-2">Home</button></Link>
                  <Link to='/surveys'><button className="w-full btn btn-success mb-2">Surveys</button></Link>
                  <Link to='/pricing'><button className="w-full btn btn-success">Pricing</button></Link>
               </div>
            </div>
            <div className="flex-1">
               <Outlet></Outlet>
            </div>
         </div>
      </div>
   );
};

export default Dashboard;