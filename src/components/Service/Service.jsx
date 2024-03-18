import React, { useState } from 'react';
import Button from 'components/Button/Button';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  ServiceContainer,
  ServiceItem,
  FlexContainer,
  Price,
  Time,
} from './Service.styled';
import { SubTitle } from 'components/CommonStyles';
import useGlobalState from 'hooks/useGlobalState';

export default function Service() {
  const location = useLocation();
  const [selectedService, setSelectedService] = useState(
    location.state || null
  );
  const navigate = useNavigate();
  const { setService } = useGlobalState();

  const handleServiceClick = value => {
    if (selectedService === value) {
      setSelectedService(null);
    } else {
      setSelectedService(value);
    }
  };

  const onBtnClick = () => {
    if (!selectedService) {
      return;
    }

    setService(selectedService);
    navigate('/booking/client-info');
  };

  return (
    <ServiceContainer>
      <SubTitle>Choose a service:</SubTitle>
      <FlexContainer>
        <ServiceItem
          onClick={() => handleServiceClick('small-tattoo')}
          active={selectedService === 'small-tattoo' ? 'small-tattoo' : null}
        >
          <p>Small Tattoo</p>
          <Time>60 min</Time>
          <p>
            Deposit: <Price>CA$100</Price>
          </p>
        </ServiceItem>
        <ServiceItem
          onClick={() => handleServiceClick('large-tattoo')}
          active={selectedService === 'large-tattoo' ? 'large-tattoo' : null}
        >
          <p>Large Tattoo</p>
          <Time>120 min</Time>
          <p>
            Deposit: <Price>CA$120</Price>
          </p>
        </ServiceItem>
        <ServiceItem
          onClick={() => handleServiceClick('permanent')}
          active={selectedService === 'permanent' ? 'permanent' : null}
        >
          <p>Permanent Makeup</p>
          <Time>60 min</Time>
          <p>
            Deposit: <Price>CA$100</Price>
          </p>
        </ServiceItem>
        <ServiceItem
          onClick={() => handleServiceClick('touch-up')}
          active={selectedService === 'touch-up' ? 'touch-up' : null}
        >
          <p>Touch-up</p>
          <Time>30 min</Time>
          <p>
            Deposit: <Price>CA$20</Price>
          </p>
        </ServiceItem>
      </FlexContainer>
      <Button
        onClick={onBtnClick}
        style={{
          opacity: selectedService ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
        }}
      >
        Next
      </Button>
    </ServiceContainer>
  );
}
