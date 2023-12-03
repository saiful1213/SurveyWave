import { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const ManageUsers = () => {
   const axiosSecure = useAxiosSecure();
   // const [obj, setObj] = useState({});

   const { data: users = [], isLoading } = useQuery({
      queryKey: ["users"],
      queryFn: async () => {
         const res = await axiosSecure.get('/users')
         return res.data;
      }
   })

   // users?.forEach(user => setObj(user));
   // console.log(obj)

   const [value, setValue] = useState(users?.map(user => user?.role || 'user'));

   if (isLoading) {
      return <p className="text-center mt-20 text-2xl">Loading...</p>
   }
   // make admin
   // const handleMakeAdmin = async (id) => {
   //    const result = await axiosSecure.patch(`/users/admin/${id}`)
   //    console.log(result.data);
   // }


   const handleSelectValue = async (e, id) => {
      setValue(e.target.value);
      const result = await axiosSecure.patch(`/users/setrole?role=${value}&id=${id}`)
      console.log(result.data);
   }

   console.log(value);

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
                              {/* {user?.role === 'admin' ?
                                 <button className="btn btn-ghost btn-sm btn-active">Admin</button> :
                                 <button className="btn btn-ghost btn-sm btn-active" onClick={() => handleMakeAdmin(user._id)}>User</button>} */}
                              <select defaultValue={value} className="select select-bordered w-1/2 max-w-xs" onChange={() => handleSelectValue(user._id)}>
                                 <option value={'user'}>user</option>
                                 <option value={'admin'}>Admin</option>
                                 <option value={'proUser'}>Pro User</option>
                                 <option value={'surveyor'}>Surveyor</option>
                              </select>
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