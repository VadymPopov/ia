import { useState, useEffect } from "react";
import useGlobalState from "hooks/useGlobalState";
import { getPublishableKey, createPaymentIntent } from "api";
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from "components/CheckoutForm/CheckoutForm";
import Skeleton from '../Skeleton';
import {loadStripe} from '@stripe/stripe-js';
import { useNavigate } from "react-router-dom";

    const Payment = () => {
    const [stripePromise, setStripePromise] = useState(null);
    const [clientSecret, setClientSecret] = useState(null);
    const {appointmentInfo} = useGlobalState();
    const service = appointmentInfo?.service;
    const email = appointmentInfo?.email;
    const navigate = useNavigate();
    
    useEffect (()=>{
        if(!service) {
            navigate('/booking/service')
        }

        if(appointmentInfo){
            appointmentInfo.address = '380 Bathurst St, Toronto, ON M5T 2S6';
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

            if(!service){
                return
            };

            const clientSecret = await createPaymentIntent(service, email);
            setClientSecret(clientSecret);
        })();
    }, [email, service]);

    if (!stripePromise || !clientSecret) {
        return <Skeleton />;
    } else {
        return (
            <Elements stripe={stripePromise} options={{ clientSecret }}>
                <CheckoutForm appointmentInfo={appointmentInfo} />
            </Elements>
        );
    }
};

export default  Payment;