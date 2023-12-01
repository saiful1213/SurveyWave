import { Link, NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import useAuth from "../../../Hooks/useAuth";
import userPlaceholder from "../../../assets/userPlaceholder.jpg"
import { toast } from "react-toastify";

const Navbar = () => {
   const { user, handleLogOut } = useAuth();
   console.log(user)

   const navLinks = <>
      <li className="font-semibold"><NavLink to="/" className={({ isActive }) => isActive ? "bg-green-400" : ""}>Home</NavLink></li>
      <li className="font-semibold"><NavLink to="/surveys" className={({ isActive }) => isActive ? "bg-green-400" : ""}>Surveys</NavLink></li>
      <li className="font-semibold"><NavLink to="/pricing" className={({ isActive }) => isActive ? "bg-green-400" : ""}>Pricing</NavLink></li>
   </>

   //  When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar
   let prevScrollpos = window.scrollY;
   window.onscroll = function () {
      const currentScrollPos = window.scrollY;
      if (prevScrollpos > currentScrollPos) {
         document.getElementById("navbar").style.top = "0";
      } else {
         document.getElementById("navbar").style.top = "-70px";
      }
      prevScrollpos = currentScrollPos;
   }

   const signOut = () =>{
      handleLogOut()
      toast.success('Logout Success')
   }

   return (
      <div className="navbar bg-gray-300 fixed z-10 max-w-7xl mx-auto top-0" id="navbar" style={{ transition: 'top 0.3s' }}>
         <div className="navbar-start">
            <div className="dropdown">
               <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <IoMenu className="text-3xl" />
               </div>
               <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  {navLinks}
               </ul>
            </div>
            <Link className="btn btn-ghost text-xl" to="/">SurveyWave</Link>
         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
               {navLinks}
            </ul>
         </div>
         <div className="navbar-end">
            {
               user ?
                  <div className="dropdown dropdown-end">
                     <div className="avatar" tabIndex={0}>
                        <div className="w-12 rounded-full">
                           <img src={user?.photoURL || userPlaceholder} />
                        </div>
                     </div>
                     <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li className="my-3 font-bold text-xl">{user?.displayName}</li>
                        <li><button className="btn btn-success font-bold text-xl" onClick={signOut}>Log Out</button></li>
                     </ul>
                  </div>
                  : <Link to="/login" className="btn btn-success">Login</Link>
            }
         </div>
      </div>
   );
};

export default Navbar;