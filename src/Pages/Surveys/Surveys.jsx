import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";

const Surveys = () => {
   const axiosPublic = useAxiosPublic();
   const { data: surveys = [] } = useQuery({
      queryKey: ["surveys"],
      queryFn: async () => {
         const result = await (axiosPublic.get('/surveys'));
         return result.data;
      }
   })

   return (
      <div className=" mt-28">

         <div className="flex">
            <h1 className="text-4xl font-bold lg:text-right flex-1 mr-8 lg:mr-36">All Of Our Surveys</h1>
            <select className="select select-bordered max-w-xs w-full ml-auto">
               <option disabled selected>Filter by Vote</option>
               <option value="asc">Asc to Dsc</option>
               <option value="dsc">Dsc to Asc</option>
            </select>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
            {
               surveys.map(survey => {
                  const { _id, title, short_desc, total_voted, survey_category_img } = survey;

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
                     </div>
                  )
               })
            }
         </div>
      </div>
   );
};

export default Surveys;