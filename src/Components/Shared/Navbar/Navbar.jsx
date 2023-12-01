import { Link, NavLink } from "react-router-dom"

const Navbar = () => {

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

   return (
      <div className="navbar bg-gray-300 fixed z-10 max-w-7xl mx-auto top-0" id="navbar" style={{transition: 'top 0.3s'}}>
         <div className="navbar-start">
            <div className="dropdown">
               <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
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
            <a className="btn">Login</a>
         </div>
      </div>
   );
};

export default Navbar;