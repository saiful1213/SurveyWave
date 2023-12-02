
const Accordian = () => {
   return (
      <div className="mt-28">
         <h1 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h1>
         <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" checked="checked" />
            <div className="collapse-title text-xl font-medium">
               Why should I use an online survey platform?
            </div>
            <div className="collapse-content">
               <p>Respondents can participate from anywhere, at any time, making it convenient for both survey creators and participants. Eliminate the need for paper, postage, and manual data entry, reducing costs associated with traditional survey methods. Receive instant feedback and access real-time data analysis, allowing for quick insights and timely decision-making.</p>
            </div>
         </div>
         <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
               Is SurveyWave great for small businesses?
            </div>
            <div className="collapse-content">
               <p>Absolutely! SurveyWave is an excellent choice for small businesses looking to gather valuable insights, streamline feedback, and enhance customer engagement. Its user-friendly interface, flexible survey customization options, and cost-effective plans make it accessible and practical for businesses of all sizes.</p>
            </div>
         </div>
         <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
               I am an individual, not a business. Can I still use SurveyWave?
            </div>
            <div className="collapse-content">
               <p>Absolutely! SurveyWave is designed to cater to both businesses and individuals. Whether you are conducting personal research, collecting feedback for personal projects, or simply looking to gather opinions, SurveyWave provides a user-friendly platform for individuals like you. Our versatile survey tools can be tailored to meet your specific needs. Feel free to sign up and start creating surveys to gather valuable insights.</p>
            </div>
         </div>
         <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
               How do I analyze open text responses?
            </div>
            <div className="collapse-content">
               <p>Open text response analysis involves examining and making sense of unstructured text data, often collected through surveys, feedback forms, or other means. The goal is to extract valuable insights, patterns, and sentiments from the provided text.</p>
            </div>
         </div>
         <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
               I don’t have a technical background. Will I be able to use SurveyWave easily?
            </div>
            <div className="collapse-content">
               <p>Absolutely! SurveyWave is designed with user-friendliness in mind. Its intuitive interface and user-friendly features make it accessible to users of all technical levels. You dont need to be a tech expert to create, distribute, and analyze surveys using SurveyWave. The platform provides step-by-step guidance, helpful tutorials, and a responsive support team to assist you at every stage. Whether you are a beginner or an experienced user, SurveyWave makes the survey process simple and efficient for everyone.</p>
            </div>
         </div>
         <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
            Can I use Sogolytics for free?
            </div>
            <div className="collapse-content">
               <p>If Sogolytics is a real service, I recommend checking their official website or contacting their support for the most accurate and up-to-date information regarding pricing, free plans, or any other FAQs. If the service has gained popularity or recognition after my last update, I might not have information about it.</p>
            </div>
         </div>
      </div>
   );
};

export default Accordian;