import { useState } from 'react';
import { useStripe, useElements } from '@stripe/react-stripe-js';
import useGlobalState from 'hooks/useGlobalState';
import { useNavigate } from 'react-router';
import { paymentConfirmation } from 'api';
import Loader from 'components/BtnLoader';
import Button from 'components/Button';
import {
  FormWrapper,
  ServiceContainer,
  ServiceTitle,
  ServiceDivider,
  ServiceText,
  PriceContainer,
  PaymentContainer,
  PaymentDivider,
  PaymentElements,
  ErrorMessage,
} from '../CheckoutForm/CheckoutForm.styled';
import { Container } from '../WaiverForm/WaiverForm.styled';
import { BtnContainer } from '../LoginForm/LoginForm.styled';

const AfterServiceCheckoutForm = () => {
  const { paymentInfo } = useGlobalState();
  const subtotal = paymentInfo?.amount;
  const tip = paymentInfo?.tip;
  const taxes = paymentInfo?.taxes;
  const total = paymentInfo?.total;

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    setIsProcessing(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}`,
      },
      redirect: 'if_required',
    });

    if (
      (error && error.type === 'card_error') ||
      (error && error.type === 'validation_error')
    ) {
      setMessage(error.message);
    } else if (paymentIntent && paymentIntent.status === 'succeeded') {
      await paymentConfirmation(paymentInfo);
      navigate('/payment-succeeded');
    } else {
      setMessage('Unexpected state');
    }

    setIsProcessing(false);
  };

  return (
    <FormWrapper id="payment-form" onSubmit={handleSubmit}>
      <ServiceContainer>
        <ServiceDivider>
          <ServiceTitle>Your order</ServiceTitle>
          <ServiceText>Tattoo service payment</ServiceText>
        </ServiceDivider>

        <PaymentContainer>
          <ServiceTitle>Price breakdown</ServiceTitle>
          <PaymentDivider>
            <PriceContainer>
              <ServiceText>Subtotal</ServiceText>
              <ServiceText>CA${subtotal}</ServiceText>
            </PriceContainer>
            <PriceContainer>
              <ServiceText>Tips</ServiceText>
              <ServiceText>CA${tip}</ServiceText>
            </PriceContainer>
            <PriceContainer>
              <ServiceText>Taxes & Fees</ServiceText>
              <ServiceText>CA${taxes}</ServiceText>
            </PriceContainer>
          </PaymentDivider>
          <PriceContainer>
            <ServiceTitle>Total</ServiceTitle>
            <p>CA${total}</p>
          </PriceContainer>
        </PaymentContainer>
        <Container>
          <PaymentElements />
          <Button type="submit" disabled={isProcessing || !stripe || !elements}>
            {isProcessing ? (
              <BtnContainer>
                Processing
                <Loader />
              </BtnContainer>
            ) : (
              'Pay now'
            )}
          </Button>
          {message && (
            <ErrorMessage id="payment-message">{message}</ErrorMessage>
          )}
        </Container>
      </ServiceContainer>
    </FormWrapper>
  );
};

export default AfterServiceCheckoutForm;
