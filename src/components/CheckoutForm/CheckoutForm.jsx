import { useState } from "react";
import {useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';

const CheckoutForm = (props)=>{
    const [message , setMessage] = useState(null);
    const [isProcessing, setIsProcessing] =useState(false);
    const stripe = useStripe();
    const  elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if(!stripe || !elements) {
        //     return;
        // }
        // setIsProcessing(true);

        // const {error, paymentIntent} = await stripe.confirmPayment({
        //     elements, 
        //     confirmParams: {
        //         return_url: `${window.location.origin}/completion`
        //     },
        //     redirect: 'if_required'
        // })

        // if(error.type === "card_error" || error.type === "validation_error") {
        //     setMessage(error.message);
        // } else if (paymentIntent && paymentIntent.status === 'succeeded') {
        //     setMessage('Payment status' + paymentIntent.status);
        // } else {
        //     setMessage('Unexpected state');
        // }
        // setIsProcessing(false);
    }

    return (
        <form id="payment-form" onSubmit={handleSubmit}>
            <PaymentElement/>
            <button id="submit" disabled={isProcessing || !stripe || !elements}>
                <span id="button-text">
                    {isProcessing ? 'Processing...' : 'Pay now'}
                </span>
            </button>
             {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
     
        </form>

    )
};

export default  CheckoutForm;