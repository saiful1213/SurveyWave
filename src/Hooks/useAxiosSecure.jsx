import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
   baseURL: 'https://survey-wave-server-nine.vercel.app'
})
const useAxiosSecure = () => {
   const navigate = useNavigate();
   const { handleLogOut } = useAuth();

   axiosSecure.interceptors.request.use(function (config) {
      const token = localStorage.getItem('access-token')
      config.headers.authorization = `Bearer ${token}`;
      return config;
   }, function (error) {
      return Promise.reject(error);
   });


   axiosSecure.interceptors.response.use(function (response) {
      return response;
   }, async (error) => {
      const status = error.response.status;
      if (status === 401) {
         await handleLogOut();
         navigate('/login');
      }
      return Promise.reject(error);
   })

   return axiosSecure;
};

export default useAxiosSecure;