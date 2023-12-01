import { Link } from "react-router-dom";


const Error = () => {
   return (
      <div className="flex h-screen items-center">
         <img src="https://i.ibb.co/SBYYGC3/errImg.gif" alt="Error image" />
         <div className="text-center">
            <h1 className="text-3xl font-semibold mb-5">Oops! Something went wrong</h1>
            <Link to={-1}><button className="btn btn-error">Go Back</button></Link>
         </div>
      </div>
   );
};

export default Error;