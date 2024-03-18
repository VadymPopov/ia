import { Field, Form } from 'formik';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { colors } from '../../utils/theme';

export const FormWrapper = styled(Form)`
  text-align: center;
  margin-bottom: 20px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  &:first-child {
    margin-right: 20px;
  }

  @media (max-width: 767px) {
    margin-bottom: 20px;
    text-align: start;
    font-size: 18px;

    &:first-child {
      margin-right: 0;
    }
  }
`;

export const Input = styled(Field)`
  font-size: 20px;
  padding: 10px 15px;
  border: 2px solid ${colors.textColorDarkBg};
  border-radius: 10px;
  outline: none;

  &:focus,
  &:hover {
    border-color: ${colors.accentColor};
  }

  &[type='checkbox'] {
    width: 20px;
    height: 20px;
    margin-right: 20px;
  }

  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

export const StyledSelect = styled.select`
  font-size: 20px;
  padding: 10px 15px;
  border: 2px solid ${colors.textColorDarkBg};
  border-radius: 10px;
  outline: none;
  width: 100%;

  &:focus,
  &:hover {
    border-color: ${colors.accentColor};
  }

  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

export const CustomDatePicker = styled(DatePicker)`
  background-color: #f0f0f0;
  font-size: 20px;
  padding: 10px 15px;
  border: 2px solid ${colors.textColorDarkBg};
  border-radius: 10px;
  outline: none;

  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

export const ErrorText = styled.p`
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 14px;
  color: red;
`;

export const Button = styled.button`
  padding: 8px 14px;
  font-size: 20px;
  border-radius: 6px;
  border: none;
  color: ${({ theme }) => theme.body};
  background-color: ${({ theme }) => theme.main};
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.hover};
    box-shadow: ${({ theme }) => theme.shadow} 0px 0px 5px 2px;
  }
`;

export const ButtonText = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5px;
`;

export const Title = styled.h3`
  margin: 20px 0;
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.16;
  letter-spacing: 0.05em;
  color: ${colors.mainDarkColor};
  text-align: start;

  @media (max-width: 767px) {
    margin: 10px 0;
  }
`;

export const InputLabel = styled.label`
  text-align: start;
  margin-bottom: 5px;
  font-size: 16px;
`;

export const CheckboxLabel = styled.label`
  margin-bottom: 5px;
  font-size: 18px;
  line-height: 1.67;
  letter-spacing: 0.02em;
  color: ${colors.mainDarkColor};
  text-align: justify;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 767px) {
    display: block;
  }
`;

export const Text = styled.p`
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 1.67;
  letter-spacing: 0.02em;
  color: ${colors.mainDarkColor};
  text-align: justify;
`;

export const Container = styled.div`
  margin-top: 20px;
`;

export const ModalFormText = styled.p`
  margin: 10px;
  font-size: 18px;
  line-height: 1.67;
  letter-spacing: 0.02em;
  color: ${colors.mainDarkColor};
  text-align: justify;

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.33;
  padding: 6px 10px;
  color: ${colors.mainLightColor};
  transition: background-color 250ms linear;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 25px;
  border: 1px solid ${colors.accentColor};
  background-color: ${colors.accentColor};
  z-index: 1000;

  &:hover,
  &:focus {
    border: 1px solid ${colors.textColorDarkBg};
    background-color: ${colors.backgroundColor};
    color: ${colors.accentColor};
  }
`;

export const SubmitBtn = styled.button`
  font-size: 12px;
  font-weight: 600;
  line-height: 1.33;
  padding: 8px 16px;
  color: ${colors.cardColor};
  transition: background-color 250ms linear;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 25px;
  border: 1px solid ${colors.accentColor};
  background-color: ${colors.mainLightColor};

  &:hover,
  &:focus {
    background-color: ${colors.accentColor};
    color: ${colors.mainLightColor};
    box-shadow: black 0px 0px 5px 2px;
  }

  &:disabled {
    background-color: rgba(255, 108, 0, 1);
    box-shadow: none;
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

export const ModalFlex = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: center;
  z-index: 999;
  background-color: ${colors.mainLightColor};
  box-shadow: black 0px 0px 5px 2px;

  @media (max-width: 767px) {
    display: block;
    text-align: center;
    padding: 5px;
  }
`;

export const Legend = styled.legend`
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.16;
  letter-spacing: 0.05em;
  color: ${colors.mainDarkColor};
  text-align: start;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const FieldSet = styled.fieldset`
  margin: 20px 0;
  border-radius: 20px;
  border: 2px solid ${colors.textColorDarkBg};
`;

export const ErrorMain = styled.p`
  margin-top: 5px;
  font-size: 18px;
  color: red;
`;

export const HintText = styled.p`
  margin: 10px 0;
  font-size: 18px;
`;
