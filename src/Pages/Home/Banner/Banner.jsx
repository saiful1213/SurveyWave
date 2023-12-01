
const Banner = () => {
   return (
      <div className="bg-bgImgGradient py-3 xl:h-[calc(100vh-65px)] bg-center bg-cover mt-16">
         <div className="w-full md:w-2/3 lg:w-1/2 py-12 md:py-0 px-8 flex flex-col justify-center h-full pl-3">
            <h1 className="text-white text-5xl md:text-6xl font-bold">Shape the Future: Your Voice Matters!</h1>
            <p className="text-slate-200 mt-5">Welcome to SurveyWave, where opinions transform into insights. Join our community of thought leaders and make a difference by sharing your perspectives. Take a moment to contribute to meaningful surveys that drive change and innovation. Your feedback is the key to unlocking a better tomorrow. Start shaping the future today!</p>
            <button className="btn w-40 mt-5 btn-success">Explore More</button>
         </div>
      </div>
   );
};

export default Banner;