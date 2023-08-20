import { useState, useEffect } from "react";

import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from "components/CheckoutForm/CheckoutForm";
import {loadStripe} from '@stripe/stripe-js';

const Payment = () => {
    // const [stripePromise, setStripePromise] = useState(null);
    // const [stripePromise, setStripePromise] = useState(loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY));
    // const [clientSecret, setClientSecret] =useState(process.env.REACT_APP_STRIPE_SECRET_KEY);

    const [stripePromise, setStripePromise] = useState(loadStripe('pk_test_51NeNIjD1QNt2vG2tueFSLovWnf5nr4nINMwwgvuGbqX2RlN76oTmVFcZFStj5tzq8wWOjmQkoChsY21y0GMfxruR00Ea8cCTmn'));
    const [clientSecret, setClientSecret] =useState('sk_test_51NeNIjD1QNt2vG2t2h4PIJ0C1dTrHVapZzyvRGLYU81laCzfDD1OFoHjAyNWrhkKHULKgFT3rN6oL7CljTNJ0ADH00CLj43LxV');

    // useEffect (()=>{
    //     fetch('./config').then(async(r)=>{
    //         const {publishableKey} = await r.json();
    //         setStripePromise(loadStripe(publishableKey))
    //     });
    // }, []);

    // useEffect (()=>{
    //     fetch('./create-payment-intent', {
    //         method: 'POST',
    //         body: JSON.stringify({})
    //     }).then(async(r)=>{
    //         const {clientSecret} = await r.json();
    //         setClientSecret(clientSecret)
    //     })
    // }, []);



    return (
        <>
        {/* {stripePromise && clientSecret && ( 
        <Elements stripe={stripePromise} options={{clientSecret}}>
            <CheckoutForm/>
        </Elements>)
        } */}
        </>
    );
};

export default  Payment;