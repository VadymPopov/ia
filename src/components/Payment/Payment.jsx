import { useState, useEffect } from 'react';
import useGlobalState from 'hooks/useGlobalState';
import { getPublishableKey, createPaymentIntent } from 'api';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from 'components/CheckoutForm/CheckoutForm';
import Skeleton from '../Skeleton';
import { loadStripe } from '@stripe/stripe-js';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState(null);
  const { appointmentInfo } = useGlobalState();
  const service = appointmentInfo?.service;
  const email = appointmentInfo?.email;
  const navigate = useNavigate();

  const checkDay = () => {
    const ottawaDateRange = [23, 24, 25, 26, 27];
    const torontoDateRange = [
      3, 4, 6, 7, 11, 12, 13, 14, 17, 18, 19, 20, 21, 29, 30,
    ];
    const day = Number(appointmentInfo?.date.split('.')[1]);
    const month = Number(appointmentInfo?.date.split('.')[0]);
    if (ottawaDateRange.includes(day) && month === 4) {
      return '155 Loretta Ave N, Ottawa, ON K1Y 3E5';
    }

    if (torontoDateRange.includes(day) && month === 4) {
      return '378 Yonge Street, 2nd floor. Toronto, Ontario. M5B 1S6';
    }

    return '434 College St, Toronto, ON M5T 1S9';
  };

  useEffect(() => {
    if (!service) {
      navigate('/booking/service');
    }

    if (appointmentInfo) {
      appointmentInfo.address = checkDay();
    }
  });

  useEffect(() => {
    (async () => {
      const publishableKey = await getPublishableKey();
      setStripePromise(loadStripe(publishableKey));
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (!service) {
        return;
      }

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

export default Payment;
