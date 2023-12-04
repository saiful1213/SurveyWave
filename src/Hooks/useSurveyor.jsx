// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "./useAxiosSecure";
// import useAuth from "./useAuth";

// const useSurveyor = () => {
//    const axiosSecure = useAxiosSecure();
//    const { user } = useAuth();

//    const { data: isSurveyor } = useQuery({
//       queryKey: ["isSurveor",],
//       queryFn: async () => {
//          const res = await axiosSecure.get(`/users/surveyor/${user.email}`)
//          console.log(res.data)
//          return res.data
//       }
//    })
//    return [isSurveyor]
// };

// export default useSurveyor;