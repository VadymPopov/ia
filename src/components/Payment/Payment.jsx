// import { useState, useEffect } from "react";

// import { getPublishableKey, createPaymentIntent } from "api";
// import { Elements } from '@stripe/react-stripe-js';
// import CheckoutForm from "components/CheckoutForm/CheckoutForm";
// import {loadStripe} from '@stripe/stripe-js';

// const Payment = () => {
//     const [stripePromise, setStripePromise] = useState(null);
//     const [clientSecret, setClientSecret] =useState(null);

//     useEffect (()=>{
//         (async()=>{
//             const publishableKey = await getPublishableKey();
//             setStripePromise(loadStripe(publishableKey))
//         })();
//     }, []);

    
//     useEffect (()=>{
//         (async()=>{
//             const clientSecret = await  createPaymentIntent();
//             setClientSecret(clientSecret);
//         })();
//     }, []);

//     return (
//         <>
//         {stripePromise && clientSecret && ( 
//         <Elements stripe={stripePromise} options={{clientSecret}}>
//             <CheckoutForm/>
//         </Elements>)
//         }
//         </>
//     );
// };

// export default  Payment;



import { useState, useEffect } from "react";
import { PaymentElement } from '@stripe/react-stripe-js';

import { getPublishableKey, createPaymentIntent } from "api";
import { Elements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const Payment = () => {
    const [stripePromise, setStripePromise] = useState(null);
    const [clientSecret, setClientSecret] =useState(null);

    useEffect (()=>{
        (async()=>{
            const publishableKey = await getPublishableKey();
            setStripePromise(loadStripe(publishableKey))
        })();
    }, []);

    
    useEffect (()=>{
        (async()=>{
            const clientSecret = await  createPaymentIntent();
            setClientSecret(clientSecret);
        })();
    }, []);

    return (
        <>
        {stripePromise && clientSecret && ( 
        <Elements stripe={stripePromise} options={{clientSecret}}>
            <PaymentElement/>
        </Elements>)
        }
        </>
    );
};

export default  Payment;