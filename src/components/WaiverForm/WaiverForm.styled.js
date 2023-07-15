import { Field,Form } from 'formik';
import styled from 'styled-components';

export const FormWrapper = styled(Form)`
  text-align: center;
  margin-bottom: 20px;
`;

export const InputContainer = styled.div`
  margin-bottom: 20px;
`;

export const Input = styled(Field)`
  font-size: 20px;
  padding: 10px 15px;
  border: 2px solid ${({theme}) => theme.hover};
  border-radius: 10px;
  outline: none;

  :focus {
    border-color: #fff;
    box-shadow: ${({theme}) => theme.shadow} 0px 0px 5px 2px;
  }
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
