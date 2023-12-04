import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_Pk);

const Payment = () => {
   return (
      <div className="mt-24 min-h-[40vh]">
         <Elements stripe={stripePromise}>
            <CheckoutForm></CheckoutForm>
         </Elements>
      </div>
   );
};

export default Payment;