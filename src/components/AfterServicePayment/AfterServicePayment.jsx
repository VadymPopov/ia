import { useState, useEffect } from 'react';
import useGlobalState from 'hooks/useGlobalState';
import { getPublishableKey, createPaymentIntentAfterService } from 'api';
import { Elements } from '@stripe/react-stripe-js';
import AfterServiceCheckoutForm from 'components/AfterServiceCheckoutForm/AfterServiceCheckoutForm';
import Skeleton from '../Skeleton';
import { loadStripe } from '@stripe/stripe-js';
import { useNavigate } from 'react-router-dom';

const AfterServicePayment = () => {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState(null);
  const { paymentInfo } = useGlobalState();
  const email = paymentInfo?.email;
  const total = paymentInfo?.total;
  const navigate = useNavigate();

  useEffect(() => {
    if (!total && !email) {
      navigate('/payment/client-info');
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
      if (!total) {
        return;
      }

      const clientSecret = await createPaymentIntentAfterService(email, total);
      setClientSecret(clientSecret);
    })();
  }, [email, total]);

  if (!stripePromise || !clientSecret) {
    return <Skeleton />;
  } else {
    return (
      <Elements stripe={stripePromise} options={{ clientSecret }}>
        <AfterServiceCheckoutForm />
      </Elements>
    );
  }
};

export default AfterServicePayment;
