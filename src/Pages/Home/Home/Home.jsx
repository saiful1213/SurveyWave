import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
   return (
      <div>
         <Helmet><title>SurveyWave | Home</title></Helmet>
         <Banner></Banner>
         <Testimonial></Testimonial>
      </div>
   );
};

export default Home;