import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
   const stripe = useStripe();
   const elements = useElements();
   const axiosSecure = useAxiosSecure();
   const [clientSecret, setClientSecret] = useState("");
   const { user } = useAuth();
   const [transactionId, setTransactionId] = useState('');
   const navigate = useNavigate();


   useEffect(() => {
      axiosSecure.post(`/create-payment-intent`, { price: 99 })
         .then(res => {
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret);
         })
   }, [axiosSecure])


   const handleFormSubmit = async e => {
      e.preventDefault();

      if (!stripe || !elements) {
         return;
      }

      const card = elements.getElement(CardElement);

      if (card == null) {
         return;
      }

      const { error, paymentMethod } = await stripe.createPaymentMethod({
         type: 'card',
         card,
      });

      if (error) {
         console.log('[error]', error);
         toast.error(error?.message)
      } else {
         console.log('[PaymentMethod]', paymentMethod);
      }

      // payment confirm
      const { paymentIntent, error: confirmErr } = await stripe.confirmCardPayment(clientSecret, {
         payment_method: {
            card: card,
            billing_details: {
               name: user?.displayName || 'anonymous',
               email: user?.email || 'anonymous',
            },
         },
      });

      if (confirmErr) {
         console.log('confirmErr')
      }
      else {
         console.log('paymentIntent', paymentIntent)
         if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id)
            toast.success('payment successfull. You are now a pro user');
            navigate('/');
         }
      }
   }


   return (
      <div className="mt-32 w-1/2 mx-auto">
         <form onSubmit={handleFormSubmit}>
            <CardElement
               options={{
                  style: {
                     base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                           color: '#aab7c4',
                        },
                     },
                     invalid: {
                        color: '#9e2146',
                     },
                  },
               }}
            />
            <button type="submit" disabled={!stripe || !clientSecret} className="btn btn-primary btn-sm mt-12">
               Pay
            </button>
         </form>
         {transactionId && <p className="text-green-500 text-lg mt-3">Your Transaction Id is: {transactionId}</p>}
      </div>
   );
};

export default CheckoutForm;