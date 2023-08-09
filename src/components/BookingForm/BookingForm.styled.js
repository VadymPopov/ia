import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { colors } from '../theme';
import { Form } from 'formik';

export const FormWrapper = styled(Form)`
  text-align: center;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
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
  border: 1px solid ${colors.accentColor};;
  border-radius: 15px;
  background:  ${props => (props.active ? `${colors.accentColor}` : `${colors.cardColor}`)};
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
    cursor: not-allowed;
  }
`;

export  const GridContainer = styled.div`
  display: grid;
  width: 400px;
  grid-template-columns: 90px 90px 90px 90px;
  gap: 13px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ServiceContainer = styled.div`
  height: 100%;
  margin-left: 24px;
  overflow: hidden;
  padding: 40px 32px;
  position: sticky;
  top: 125px;
  width: 410px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${colors.textColorDarkBg};
  box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 12px;
  border-radius: 12px;
  background: ${colors.backgroundColor};
`