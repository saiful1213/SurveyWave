import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ManageSurvey = () => {
   const axiosSecure = useAxiosSecure();

   const { data: surveys = [] } = useQuery({
      queryKey: ["survey"],
      queryFn: async () => {
         const result = await axiosSecure.get('/surveys');
         return result.data;
      }
   })

   return (
      <div className="mt-6">
         <h1 className="text-3xl font-bold text-center">Survey Management</h1>
         <h1 className="text-2xl font-semibold  my-3">Total Surveys: {surveys.length}</h1>
         <div className="overflow-x-auto mt-8">
            <table className="table">
               <thead>
                  <tr>
                     <th>SL.</th>
                     <th>Survey Title</th>
                     <th>Survey Status</th>
                     <th>Total Voted</th>
                  </tr>
               </thead>
               <tbody>
                  {
                     surveys.map((survey, idx) =>
                        <tr className="bg-base-200" key={survey._id}>
                           <th>{idx + 1}</th>
                           <td>{survey?.title}</td>
                           <td><button>Published</button></td>
                           <td>{survey?.total_voted}</td>
                        </tr>
                     )
                  }
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default ManageSurvey;