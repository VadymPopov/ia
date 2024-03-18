import styled from 'styled-components';
import { colors } from '../../utils/theme';

export const ServiceContainer = styled.div`
  justify-content: center;
  text-align: center;
`;

export const ServiceItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: self-end;
  justify-content: space-between;

  padding: 16px 20px;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.33;
  height: 130px;
  width: 150px;
  border: 1px solid ${colors.accentColor};
  border-radius: 15px;
  background: ${props =>
    props.active ? `${colors.cardColor}` : `${colors.mainLightColor}`};
  transition: background-color 250ms linear;
  cursor: pointer;
  color: ${props =>
    props.active ? `${colors.mainLightColor}` : `${colors.cardColor}`};

  &:not(:last-of-type) {
    margin-right: 20px;
  }

  @media (max-width: 480px) {
    padding: 8px 10px;
    font-weight: 600;
    font-size: 12px;
    line-height: 1.33;
    height: 130px;
    width: 120px;

    &:nth-child(n) {
      margin-right: 0;
    }
  }

  @media (min-width: 900px) {
    &:hover {
      background-color: ${colors.accentColor};
      box-shadow: ${colors.cardColor} 0px 0px 5px 2px;
      color: ${colors.mainLightColor};
    }
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 200px 200px;
    gap: 20px;
    margin: 0 auto;
    margin-bottom: 20px;
    justify-content: center;
  }

  @media (max-width: 480px) {
    display: grid;
    grid-template-columns: 140px 140px;
    gap: 20px;
    margin: 0 auto;
    margin-bottom: 20px;
    justify-content: center;
  }
`;

export const Price = styled.span`
  display: inline-block;
  margin-top: 50px;
  padding: 5px;
  border-radius: 5px;
  color: ${colors.mainDarkColor};
  background-color: ${colors.backgroundColor};
`;

export const Time = styled.p`
  color: ${colors.textColorDarkBg};
  font-size: 12px;
`;

export const NameContainer = styled.div`
  margin-bottom: 5px;
`;
