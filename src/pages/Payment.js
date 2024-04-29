import { Text, Title, Section } from 'components/CommonStyles';
import { Outlet } from 'react-router-dom';
import useGlobalState from 'hooks/useGlobalState';
import { ArrowIcon, Button, FlexContainer } from './Booking.styled';
import { useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function Payment() {
  const location = useLocation();
  const currentPathname = location.pathname;
  const navigate = useNavigate();
  const { paymentInfo } = useGlobalState();

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Settle your remaining balance effortlessly with our secure payment page. Confirm your details, make your payment, and you're good to go. Thank you for choosing Alina Ivenko!"
        />
        <meta property="og:title" content="Tattoo Booking" />
        <meta
          property="og:description"
          content="Settle your remaining balance effortlessly with our secure payment page. Confirm your details, make your payment, and you're good to go. Thank you for choosing Alina Ivenko!"
        />
        <title>Tattoo Payment</title>
      </Helmet>

      <Section>
        <Title>Payment process</Title>
        <Text>
          To complete your payment for the service, please fill out your
          information and specify the amount you intend to pay. In the next
          step, you have the option to include a tip. Review the total service
          cost, which includes any applicable convenience fees based on the
          service cost, taxes, and the added tip. Once reviewed, proceed to
          securely submit your payment. Thank you for choosing me to be your
          tattoo artist.
        </Text>

        <FlexContainer>
          <Button
            onClick={() => navigate('/payment/client-info')}
            active={currentPathname === '/payment/client-info' ? 'active' : ''}
          >
            Client
          </Button>
          <ArrowIcon />
          <Button
            onClick={() => navigate('/payment/tip-amount')}
            active={currentPathname === '/payment/tip-amount' ? 'active' : ''}
            disabled={!paymentInfo?.amount}
          >
            Tip
          </Button>
          <ArrowIcon />
          <Button
            onClick={() => navigate('/payment/confirmation')}
            active={currentPathname === '/payment/confirmation' ? 'active' : ''}
            disabled={!paymentInfo?.total}
          >
            Payment
          </Button>
        </FlexContainer>
        <Outlet />
      </Section>
    </>
  );
}
