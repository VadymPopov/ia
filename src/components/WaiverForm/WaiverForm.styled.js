import { Field,Form } from 'formik';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { colors } from '../theme';

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
`;

export const Input = styled(Field)`
  font-size: 20px;
  padding: 10px 15px;
  border: 2px solid ${colors.textColorDarkBg};
  border-radius: 10px;
  outline: none;

  &:focus {
    border-color: ${colors.accentColor};
    /* box-shadow: ${colors.accentColor} 0px 0px 5px 2px; */
  }

  &:hover {
    border-color: ${colors.accentColor};
  }
`;

export const CustomDatePicker = styled(DatePicker)`
background-color: #f0f0f0;
font-size: 20px;
padding: 10px 15px;
border: 2px solid ${colors.textColorDarkBg};
  border-radius: 10px;
  outline: none;
`;

export const ErrorText = styled.p`
  margin-top: 5px;
  font-size: 14px;
  color: red;
`;


export const Button = styled.button`
  padding: 8px 14px;
  font-size: 20px;
  border-radius: 6px;
  border: none;
  color: ${({theme}) => theme.body};
  background-color:  ${({theme}) => theme.main};
  cursor: pointer;

  :hover {
    background-color:  ${({theme}) => theme.hover};
    box-shadow:  ${({theme}) => theme.shadow} 0px 0px 5px 2px;
  }
`;

export const ButtonText = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5px;
`;



export const ClientInfo = styled.div`
 
`;

export const Title = styled.h3`
  margin-bottom: 20px;
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.16;
  letter-spacing: .05em;
  color: ${colors.mainDarkColor};
  text-align: start;
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
  letter-spacing: .02em;
  color: ${colors.mainDarkColor};
  text-align: justify;
`;


export const FlexContainer = styled.div`
 display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 1.67;
  letter-spacing: .02em;
  color: ${colors.mainDarkColor};
  text-align: justify;
`;