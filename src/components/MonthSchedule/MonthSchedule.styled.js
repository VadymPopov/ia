import styled from 'styled-components';
import { colors } from '../../utils/theme';

export const MonthPicker = styled.select`
  background-color: ${colors.cardColor};
  color: ${colors.mainLightColor};
  font-size: 20px;
  padding: 10px 15px;
  border: 2px solid ${colors.textColorDarkBg};
  border-radius: 10px;
  outline: none;
  min-width: 300px;
  cursor: pointer;
  margin-bottom: 20px;
  margin-top: 10px;

  @media (max-width: 480px) {
    min-width: 200px;
    text-align: center;
  }
`;
