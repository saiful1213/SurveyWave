import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Testimonial from "../Testimonial/Testimonial";
import Accordian from "../Accordian/Accordian";
import Survey from "../Survey/Survey";

const Home = () => {
   return (
      <div>
         <Helmet><title>SurveyWave | Home</title></Helmet>
         <Banner></Banner>
         <Survey></Survey>
         <Testimonial></Testimonial>
         <Accordian></Accordian>
      </div>
   );
};

export default Home;