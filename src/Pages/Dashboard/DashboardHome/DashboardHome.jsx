import useAuth from "../../../Hooks/useAuth";

const DashboardHome = () => {
   const { user } = useAuth();

   return (
      <div className="mt-12">
         <h1 className="text-3xl font-bold">Welcome Mr. {user?.displayName} to Dashboard home</h1>
      </div>
   );
};

export default DashboardHome;