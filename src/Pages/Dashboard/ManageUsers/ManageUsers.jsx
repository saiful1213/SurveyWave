import { toast } from "react-toastify";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const ManageUsers = () => {
   const axiosSecure = useAxiosSecure();

   const { data: users = [], isLoading, refetch } = useQuery({
      queryKey: ["users"],
      queryFn: async () => {
         const res = await axiosSecure.get('/users')
         return res.data;
      }
   })


   if (isLoading) {
      return <p className="text-center mt-20 text-2xl">Loading...</p>
   }

   // make admin
   const handleMakeAdmin = async (user) => {
      Swal.fire({
         title: "Are you sure?",
         text: "You want to admin this user",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, Make admin!"
      }).then(async (result) => {
         if (result.isConfirmed) {
            const result = await axiosSecure.patch(`/users/admin/${user._id}`)
            if (result.data.modifiedCount > 0) {
               toast.success(`${user?.name} is now admin`)
               refetch();
            }
         }
      });

   }


   return (
      <div className="mt-6">
         <h1 className="text-3xl font-bold text-center">User Management</h1>
         <div className="flex justify-between">
            <h1 className="text-2xl font-semibold  my-3">Total Users: {users.length}</h1>
            <div>
               <select className="select select-bordered w-full max-w-xs">
                  <option disabled selected>Filter By</option>
                  <option>Admin</option>
                  <option>User</option>
                  <option>Pro User</option>
                  <option>Surveyor</option>
               </select>
            </div>
         </div>
         <div className="overflow-x-auto mt-8">
            <table className="table">
               <thead>
                  <tr>
                     <th>SL.</th>
                     <th>Name</th>
                     <th>Email</th>
                     <th>Role</th>
                  </tr>
               </thead>
               <tbody>
                  {
                     users.map((user, idx) =>
                        <tr className="bg-base-200" key={user._id}>
                           <th>{idx + 1}</th>
                           <td>{user?.name}</td>
                           <td>{user?.email}</td>
                           <td>
                              {user?.role === 'admin' ?
                                 <button className="btn btn-ghost btn-sm btn-active">Admin</button> :
                                 <button className="btn btn-ghost btn-sm btn-active" onClick={() => handleMakeAdmin(user)}>User</button>}
                           </td>
                        </tr>
                     )
                  }
               </tbody>
            </table>
         </div>
      </div >
   );
};

export default ManageUsers;