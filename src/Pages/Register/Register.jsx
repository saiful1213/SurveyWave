import { Link, useNavigate } from "react-router-dom";
import RegisterImg from "../../assets/registerImg.avif";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import axios from "axios";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Register = () => {
   const { createUser, googleSignin, updateUserProfile } = useAuth();
   const navigate = useNavigate();
   const axiosPublic = useAxiosPublic();

   const handleRegister = async event => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      const image = form.image.files[0];
      const formData = new FormData();
      formData.append('image', image);

      if (password.length < 6) {
         return toast.error('password must be 6 charecter or more')
      }

      const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_HOSTING_API_KEY}`, formData)

      createUser(email, password)
         .then(() => {
            updateUserProfile(name, data.data.display_url)
               .then(() => {
                  const userInfo = { name, email };
                  axiosPublic.post('/users', userInfo)
                     .then(() => {
                        toast.success('account created successfully')
                        navigate('/')
                     })

               })
         })
         .catch((error) => {
            toast.error(error.message);
         })
   }


   const handleGoogleSignIn = () => {
      googleSignin()
         .then(result => {
            console.log(result.user)
            const userInfo = { name: result?.user?.displayName, email: result?.user?.email };
            axiosPublic.post('/users', userInfo)
               .then((res) => {
                  console.log(res.data)
                  toast.success('account created successfully')
                  navigate('/')
               })
         })
         .catch(err => {
            console.log(err.message)
         })
   }

   return (
      <section className="bg-gray-50 dark:bg-gray-900 flex items-center">
         <div className="w-1/2">
            <img src={RegisterImg} alt="RegisterImg" />
         </div>
         <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 w-1/2">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
               <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                     Create an account
                  </h1>

                  <form className="space-y-4 md:space-y-6" onSubmit={handleRegister}>

                     <div>
                        <label name="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input type="text" name="name" placeholder="Your Name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                     </div>

                     <div>
                        <label name="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                     </div>

                     <div>
                        <label name="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" name="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                     </div>

                     <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" name="file_input">Upload Image</label>
                        <input className="block w-full text-sm p-2.5 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" type="file" name="image" required />
                     </div>

                     <button type="submit" className="w-full text-white btn btn-success hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                     <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Already have an account? <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                     </p>
                  </form>
                  <button className="btn btn-ghost btn-active w-full" onClick={handleGoogleSignIn}>
                     <FcGoogle className="text-2xl" />
                     Register with Google
                  </button>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Register;