import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { colors } from '../../utils/theme';
import { Form } from 'formik';

import { PaymentElement } from '@stripe/react-stripe-js';

export const FormWrapper = styled(Form)`
  text-align: center;
  margin-bottom: 20px;
`;

export const FieldSet = styled.fieldset`
  margin: 20px 0;
  border-radius: 20px;
  border: 2px solid ${colors.textColorDarkBg};
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 1024px) {
    display: block;
  }
`;

export const CustomDatePicker = styled(DatePicker)`
  background-color: #f0f0f0;
  font-size: 20px;
  padding: 10px 15px;
  border: 2px solid ${colors.textColorDarkBg};
  border-radius: 10px;
  outline: none;
  min-width: 430px;
`;

export const SlotBtn = styled.button`
  padding: 12px 25px;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.33;
  width: 90px;
  border: 1px solid ${colors.accentColor};
  border-radius: 15px;
  background: ${props =>
    props.active ? `${colors.accentColor}` : `${colors.cardColor}`};
  transition: background-color 250ms linear;
  cursor: pointer;
  color: ${colors.mainLightColor};

  &:hover {
    background-color: ${colors.accentColor};
    box-shadow: ${colors.cardColor} 0px 0px 5px 2px;
    color: ${colors.mainLightColor};
  }

  &:disabled {
    background: ${colors.backgroundColor};
    box-shadow: none;
    color: ${colors.textColorDarkBg};
    cursor: not-allowed;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  width: 400px;
  grid-template-columns: 90px 90px 90px 90px;
  gap: 13px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    width: auto;
    grid-template-columns: 90px 90px 90px;
  }

  @media (max-width: 400px) {
    width: auto;
    grid-template-columns: 90px 90px;
  }
`;

export const FlexCentered = styled.div`
  @media (max-width: 480px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ServiceContainer = styled.div`
  height: 100%;
  margin-left: 24px;
  margin-top: 30px;
  overflow: hidden;
  padding: 40px 32px;
  position: sticky;
  top: 125px;
  width: 410px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: baseline; */
  border: 1px solid ${colors.textColorDarkBg};
  box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 12px;
  border-radius: 12px;
  background: ${colors.backgroundColor};

  @media (max-width: 1023px) {
    width: auto;
    margin-left: 0;
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
