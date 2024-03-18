import { Field, Form } from 'formik';
import styled from 'styled-components';
import { colors } from '../../utils/theme';
import { MdLogin } from 'react-icons/md';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const FormWrapper = styled(Form)`
  text-align: center;
`;

export const InputContainer = styled.div`
  margin-bottom: 20px;
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

  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 767px) {
    display: block;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginIcon = styled(MdLogin)`
  width: 20px;
  height: 20px;
  margin-left: 5px;
  padding: 2.5px;
`;
