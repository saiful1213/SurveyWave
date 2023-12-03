import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { MdOutlineReport } from "react-icons/md";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const SurveyDetails = () => {
   // const axiosPublic = useAxiosPublic();
   const axiosSecure = useAxiosSecure();
   const { id } = useParams()

   const { data: details = {} } = useQuery({
      queryKey: ["details"],
      queryFn: async () => {
         const result = await axiosSecure(`/surveys/details/${id}`);
         return result.data
      }
   })
   const { title, total_voted, description, survey_category_img } = details;

   return (
      <div className="mt-28">
         <div className="max-w-4xl mx-auto rounded-lg border p-4 shadow-xl">
            <img src={survey_category_img} className="w-full rounded-lg" />
            <h1 className="text-4xl font-bold mt-5">{title} Details</h1>
            <p className="mt-4">{description}</p>
            <p className="text-2xl font-bold mt-3">Total Vote: {total_voted}</p>
            <div className="flex justify-between mt-3">
               <p className="text-2xl font-bold flex items-center gap-3">Like: <AiOutlineLike /></p>
               <p className="text-2xl font-bold flex items-center gap-3">Dislike: <AiOutlineDislike /></p>
               <p className="text-2xl font-bold flex items-center gap-3">Report: <MdOutlineReport /></p>
            </div>
            <div className="mt-6">
               <label htmlFor="comment" className="font-bold text-2xl">Add Comment: </label>
               <textarea name="comment" cols="30" rows="3" className="w-full mt-2 border resize-none p-4 rounded-xl border-black"></textarea>
               <button className="btn btn-primary" disabled>Post Comment</button>
            </div>
         </div>
      </div>
   );
};

export default SurveyDetails;