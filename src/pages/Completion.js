import { Title, Text } from 'components/CommonStyles';
import { Icon, Container, BackBtn } from './Completion.styled';

import { MdOutlineArrowBackIos } from 'react-icons/md';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Succeeded() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <Container>
      <BackBtn onClick={handleClick}>
        <MdOutlineArrowBackIos />
        Back
      </BackBtn>
      <Title>
        {location?.state?.booking
          ? 'Your appointment was successfully booked!'
          : 'Your payment was successfully made! '}
        <Icon />
      </Title>
      <Text>
        {location?.state?.booking
          ? "Thank you for choosing my services. I look forward to our meeting! You will receive a booking confirmation by email. If you have any questions or need to make changes, please don't hesitate to contact me."
          : "Thank you for entrusting me with your vision. You will receive a payment confirmation by email. Looking forward to our next session,  where we'll bring your vision to life once more!"}
      </Text>
    </Container>
  );
}
