import { useState } from "react";
import {useStripe, useElements} from '@stripe/react-stripe-js';
import { format } from 'date-fns';
import { bookAppointment } from "api";
import { switchName, calculatePrice } from "utils/helpers";

import  Button  from "components/Button";
import { FormWrapper, ServiceContainer, ServiceTitle, ServiceDivider, ServiceText, PriceContainer, PaymentContainer, PaymentDivider, PaymentElements, ErrorMessage } from "./CheckoutForm.styled";
import { Container } from "../WaiverForm/WaiverForm.styled";


const CheckoutForm = ({appointmentInfo})=>{
    const [message , setMessage] = useState(null);
    const [isProcessing, setIsProcessing] =useState(false);
    const selectedService = appointmentInfo.service;
    const selectedSlot = appointmentInfo.slot;
    const selectedDate = appointmentInfo.date;
    const stripe = useStripe();
    const elements = useElements();

    const price = calculatePrice(selectedService) || 0;
    const tax = Number((price*0.13).toFixed(2)) || 0;
    const totalPrice = price + tax;
    const procedureName = switchName(selectedService)

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!stripe || !elements) {
          return;
        }
        setIsProcessing(true);

      
        const {error, paymentIntent} = await stripe.confirmPayment({
            elements, 
            confirmParams: {
                return_url: `${window.location.origin}/booking/payment`,
            },
            redirect: 'if_required'
        })

        if((error && error.type === "card_error") || (error && error.type === "validation_error")) {
              setMessage(error.message);
        } else if (paymentIntent && paymentIntent.status === 'succeeded') {
              setMessage('Payment status ' + paymentIntent.status);
              await bookAppointment(appointmentInfo);
        } else {
              setMessage('Unexpected state');
          }
        
      setIsProcessing(false);
    };

  
  return (
    <FormWrapper id="payment-form" onSubmit={handleSubmit}>
        <ServiceContainer>  
            <ServiceDivider>
              <ServiceTitle>Service Details</ServiceTitle>
              <ServiceText>{procedureName} Appointment Deposit</ServiceText>
              <ServiceText>{selectedSlot && format(new Date(selectedDate), 'MMMM dd, yyyy')} {selectedSlot && <span>at {selectedSlot}</span>}</ServiceText>
            </ServiceDivider>

           <PaymentContainer>
              <ServiceTitle>Payment Details</ServiceTitle>
              <PaymentDivider>
              <PriceContainer>
                <ServiceText>Subtotal</ServiceText>
                <ServiceText>CA${price}</ServiceText>
              </PriceContainer>
              <PriceContainer>
                <ServiceText>Tax</ServiceText>
                <ServiceText>CA${tax}</ServiceText>
              </PriceContainer>
              </PaymentDivider>
              <PriceContainer>
                <ServiceTitle>Total</ServiceTitle>
                <p>CA${totalPrice}</p>
              </PriceContainer>
            </PaymentContainer>
            <Container>
              <PaymentElements/>
                  <Button type="submit" disabled={isProcessing || !stripe || !elements }>
                    <span id="button-text">
                      {isProcessing ? 'Processing...' : 'Pay now'}
                    </span>
                  </Button> 
                  {message && <ErrorMessage id="payment-message">{message}</ErrorMessage>}
            </Container>
          </ServiceContainer>
      </FormWrapper>
    )
};

export default  CheckoutForm;