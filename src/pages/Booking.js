import BookingForm from "components/BookingForm/BookingForm";
import { Text, Title, Section } from "components/CommonStyles";


import { useState, useEffect } from "react";
import { getPublishableKey, createPaymentIntent } from "api";
import { Elements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

export default function Booking() {
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
    <Section>
        <Title>Booking process</Title>
        <Text>To schedule an appointment, complete your information, pick your preferred service and starting time, and proceed to secure your booking with a deposit. Please be aware that the total service cost will be determined based on your specific requirements. The online payment serves as a non-refundable deposit, covering preparatory expenses for your appointment. This deposit ensures that costs are covered in case of a cancellation. For Small Tattoo and Permanent services, a deposit of CA$100 is required. For Large Tattoo services, the deposit amount is CA$120. All deposits will be deducted from the final cost of the service. A minimum of one week's notice is necessary to cancel or reschedule a tattoo or cosmetic appointment; otherwise, a new deposit might be required.</Text>
        {stripePromise && clientSecret && ( 
        <Elements stripe={stripePromise} options={{clientSecret}}>
           <BookingForm/>
        </Elements>)
        }
        {/* <BookingForm/> */}
    </Section>
    );
}
