import { useState, useEffect } from "react";

import { getPublishableKey, createPaymentIntent } from "api";
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from "components/CheckoutForm/CheckoutForm";
import CheckoutFormConsultation from "components/CheckoutForm/CheckoutFormConsultation"; 
import Skeleton from '../Skeleton';
import {loadStripe} from '@stripe/stripe-js';
import { useNavigate } from "react-router-dom";

const Payment = ({appointmentInfo}) => {
    const [stripePromise, setStripePromise] = useState(null);
    const [clientSecret, setClientSecret] = useState(null);
    const service = appointmentInfo?.service;
    const navigate = useNavigate();

    useEffect (()=>{
        if(!service) {
            navigate('/booking/service')
        }
    });

    useEffect (()=>{
        (async()=>{
            const publishableKey = await getPublishableKey();
            setStripePromise(loadStripe(publishableKey))
        })();
    }, []);
    
    useEffect (()=>{
        (async()=>{

            if(!service || service === 'consultation'){
                return
            };

            const clientSecret = await createPaymentIntent(service);
            setClientSecret(clientSecret);
        })();
    }, [service]);

    if ((!stripePromise || !clientSecret) && service !== 'consultation') {
        return <Skeleton />;
    } else if (service === 'consultation') {
        return <CheckoutFormConsultation appointmentInfo={appointmentInfo} />;
    } else {
        return (
            <Elements stripe={stripePromise} options={{ clientSecret }}>
                <CheckoutForm appointmentInfo={appointmentInfo} />
            </Elements>
        );
    }
};

export default  Payment;