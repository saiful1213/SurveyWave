import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/loginImg.jpg"
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Login = () => {
   const { login, googleSignin } = useAuth();
   const navigate = useNavigate();
   const location = useLocation();
   const axiosPublic = useAxiosPublic();

   const from = location?.state?.from?.pathname || "/";

   const handleLogin = e => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password)
      login(email, password)
         .then(result => {
            console.log(result);
            toast.success('Login Succssfully')
            navigate(from)
         })
         .catch(error => {
            toast.error(error.message)
            console.log(error);
         })
   }

   const handleGoogleSignIn = () => {
      googleSignin()
         .then(res => {
            console.log(res);
            const userInfo = { name: res?.user?.displayName, email: res?.user?.email };
            axiosPublic.post('/users', userInfo)
               .then((res) => {
                  console.log(res.data)
                  navigate(from);
                  toast.success('login successfully')
               })
         })
         .catch(error => {
            console.log(error);
            toast.error(error.message);
         })
   }

   return (
      <section className="bg-gray-50 dark:bg-gray-900 flex flex-row-reverse">
         <div className="w-1/2">
            <img src={loginImg} alt="loginImg" />
         </div>
         <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 w-1/2">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
               <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                     Sign in to your account
                  </h1>
                  <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>

                     <div>
                        <label name="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                     </div>

                     <div>
                        <label name="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" name="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                     </div>

                     <button type="submit" className="w-full btn btn-success text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>

                     <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Don’t have an account yet? <Link to="/register" href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                     </p>

                  </form>

                  <button className="btn btn-ghost btn-active w-full" onClick={handleGoogleSignIn}>
                     <FcGoogle className="text-2xl" />
                     Login with Google
                  </button>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Login;