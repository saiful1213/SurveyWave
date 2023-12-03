import useAuth from "../../../Hooks/useAuth";

const UserHome = () => {
   const {user} = useAuth();

   return (
      <div className="mt-20">
         <div className="w-1/2 mx-auto bg-green-300 p-6 text-center rounded-xl">
            <img src={user?.photoURL} className="rounded-full mx-auto"/>
            <h1 className="text-2xl font-semibold my-3">{user?.displayName}</h1>
            <p className="text-xl">{user?.email}</p>
         </div>
      </div>
   );
};

export default UserHome;