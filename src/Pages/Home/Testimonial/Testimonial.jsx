import { useEffect, useState } from "react";

const Testimonial = () => {
   const [testimonials, setTestimonials] = useState([]);

   useEffect(() => {
      fetch('/testimonial.json')
         .then(res => res.json())
         .then(data => setTestimonials(data))
   }, [])

   return (
      <div className="mt-28 px-4 xl:px-0">
         <h1 className="text-4xl font-bold text-center mb-3">Hear what our</h1>
         <h1 className="text-3xl font-semibold text-center">happy customers are saying</h1>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
            {
               testimonials.map(testimonial => {
                  const { id, heading, description, customer_img, customer_name, customer_designation } = testimonial;
                  return (
                     <div key={id} className="rounded-3xl shadow-xl border flex flex-col hover:scale-105 duration-200 transition ease-in-out">
                        <h2 className="p-4 text-2xl font-bold">{heading}</h2>
                        <p className="p-4 text-slate-500 flex-1">{description}</p>
                        <div className="text-center bg-green-400 mt-4 rounded-b-3xl">
                           <img src={customer_img} className="w-24 mx-auto relative -top-6" />
                           <h3 className="text-xl font-bold">{customer_name}</h3>
                           <p className="w-2/3 mx-auto my-2">{customer_designation}</p>
                        </div>
                     </div>
                  )
               })
            }
         </div>
      </div>
   );
};

export default Testimonial;