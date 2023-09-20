import { useState, useEffect } from "react";
import useGlobalState from "hooks/useGlobalState";
import { getPublishableKey, createPaymentIntent } from "api";
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from "components/CheckoutForm/CheckoutForm";
import CheckoutFormConsultation from "components/CheckoutForm/CheckoutFormConsultation"; 
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
    
    appointmentInfo.address = '155 Loretta Ave N, Ottawa, ON K1Y 3E5';

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

            const clientSecret = await createPaymentIntent(service, email);
            setClientSecret(clientSecret);
        })();
    }, [email, service]);

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