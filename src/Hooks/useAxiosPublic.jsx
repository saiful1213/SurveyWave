import axios from "axios";

const axiosPublic = axios.create({
   baseURL: 'https://survey-wave-server-nine.vercel.app',
});

const useAxiosPublic = () => {
   return axiosPublic
};

export default useAxiosPublic;