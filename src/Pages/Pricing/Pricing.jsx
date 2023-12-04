import { Link } from "react-router-dom";

const Pricing = () => {
   return (
      <div className="mt-28">
         <div className="card mx-auto w-96 bg-base-100 shadow-xl">
            <div className="p-4 border rounded-lg">
               <div className="bg-green-400 p-4 rounded-lg">
                  <button className="bg-yellow-300 w-28 p-2 rounded-lg">Most Popular</button>
                  <p className="text-2xl text-center mb-3">Pro</p>
                  <h2 className="font-bold text-center text-2xl">$ <span className="text-4xl">99</span> USD/month</h2>
                  <p className="text-center my-3 font-semibold">Billed $1188 Annually</p>
                  <div className="card-actions justify-center">
                     <Link to="/payment"><button className="btn btn-outline">Buy Now</button></Link>
                  </div>
               </div>
               <h3 className="text-xl font-bold my-4">All Pro features and:</h3>
               <ul className="list-disc list-inside">
                  <li>More question types, including Image Choice</li>
                  <li>Hide irrelevant questions and question skip logic</li>
                  <li>Advanced skip logic</li>
                  <li>Create quiz with automatic scoring</li>
                  <li>Copy survey projects</li>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Pricing;