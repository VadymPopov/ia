import styled from 'styled-components';
import { Form } from 'formik';
import { colors } from '../../utils/theme';

export const FormWrapper = styled(Form)`
  text-align: center;
`;

export const ImgPreview = styled.img`
  width: 200px;
  margin: 10px auto;
  border: 1px solid rgba(255, 108, 0, 1);
  border-radius: 10px;
`;

export const FileInput = styled.input`
  margin: 0 auto;
  padding: 10px 15px;
  font-size: 16px;
  border: 2px solid ${colors.textColorDarkBg};
  border-radius: 10px;
  outline: none;

  &:focus,
  &:hover {
    border-color: ${colors.accentColor};
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
