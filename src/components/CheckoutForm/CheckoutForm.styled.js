import styled from 'styled-components';
import { colors } from '../../utils/theme';

import { PaymentElement } from '@stripe/react-stripe-js';

export const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
`;

export const ServiceContainer = styled.div`
  width: 410px;
  padding: 10px 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${colors.textColorDarkBg};
  box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 12px;
  border-radius: 12px;
  background: ${colors.backgroundColor};

  @media (max-width: 1023px) {
    width: auto;
  }
`;

export const ServiceTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.5px;
  margin-bottom: 18px;
`;

export const ServiceText = styled.p`
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.5px;
  margin-bottom: 16px;
`;

export const ServiceDivider = styled.div`
  width: 100%;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin: 16px 0;
`;

export const PaymentDivider = styled.div`
  width: 100%;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: column;
  margin: 16px 0;
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PaymentContainer = styled.div`
  width: 100%;
  text-align: start;
`;

export const PaymentElements = styled(PaymentElement)`
  margin-bottom: 20px;
`;

export const ErrorMessage = styled.div`
  margin-top: 20px;
  color: red;
  text-align: center;
  font-weight: 600;
`;
