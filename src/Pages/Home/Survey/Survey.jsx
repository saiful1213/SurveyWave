import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";

const Survey = () => {
   const axiosPublic = useAxiosPublic();

   const { data: surveys = [] } = useQuery({
      queryKey: ["survey"],
      queryFn: async () => {
         const result = await axiosPublic.get('/surveys');
         return result.data;
      }
   })

   const sortedData = surveys.sort((a, b) => b.total_voted - a.total_voted);

   return (
      <div className="my-28 px-4 xl:px-0" id="servey">
         <h1 className="text-4xl font-bold text-center">Our Most Voted Serveys</h1>
         <p className="w-full md:w-3/4 lg:w-2/4 text-center mx-auto mt-4 ">Hire the right candidates for the task, test employees knowledge, and understand comprehension levels with the help of our powerful assessment software designed for all industries.</p>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
            {
               sortedData.slice(0, 6).map(item => {
                  const { _id, title, short_desc, survey_category_img, total_voted } = item;

                  return (
                     <div key={_id} className="rounded-2xl shadow-xl border">
                        <div className="overflow-hidden">
                           <img src={survey_category_img} className="h-56 w-full transition duration-300 ease-in-out hover:scale-110" />
                        </div>
                        <div className="p-2">
                           <h2 className="text-2xl font-bold mt-4">{title}</h2>
                           <p className="mt-3">{short_desc}</p>
                           <p className="text-xl font-bold mt-3">Total Vote: {total_voted}</p>
                        </div>
                        <Link to={`/surveyDetails/${_id}`}><button className="btn btn-success w-full my-3">Survey Details</button></Link>
                     </div>)
               })
            }
         </div>
      </div>
   );
};

export default Survey;