import styled from 'styled-components';
import { colors } from '../../utils/theme';

export const OkButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 10px;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.33;
  text-transform: uppercase;
  border: 1px solid rgba(255, 108, 0, 1);
  border-radius: 15px;
  background: transparent;
  transition: background-color 250ms linear;
  cursor: pointer;
  color: '#000';

  &:hover {
    background-color: rgba(255, 108, 0, 1);
    box-shadow: black 0px 0px 5px 2px;
    color: '#fff';
  }

  &:disabled {
    background-color: rgba(255, 108, 0, 1);
    color: '#fff';
    box-shadow: none;
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

export const TipsItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 16px 20px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.33;
  height: 80px;
  width: 90px;
  border: 1px solid ${colors.accentColor};
  border-radius: 15px;
  background: ${props =>
    props.active ? `${colors.cardColor}` : `${colors.mainLightColor}`};
  transition: background-color 250ms linear;
  cursor: pointer;
  color: ${props =>
    props.active ? `${colors.mainLightColor}` : `${colors.cardColor}`};

  &:not(:last-of-type) {
    margin-right: 30px;
  }

  @media (max-width: 768px) {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.33;

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

export const TipsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 130px 130px 130px;
    gap: 30px;
    margin: 0 auto;
    margin-bottom: 20px;
    justify-content: center;
  }

  @media (max-width: 480px) {
    display: grid;
    grid-template-columns: 130px 130px;
    gap: 30px;
    margin: 0 auto;
    margin-bottom: 20px;
    justify-content: center;
  }
`;

export const Container = styled.div`
  justify-content: center;
  text-align: center;
`;

export const Price = styled.span`
  display: inline-block;
  font-size: 12px;
  padding: 5px;
  border-radius: 5px;
  color: ${colors.mainDarkColor};
  background-color: ${colors.backgroundColor};
`;

export const SummaryTable = styled.table`
  border-radius: 15px;
  border: 1px gray solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 780px;
  margin: 0 auto;
  padding: 16px 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Row = styled.tr`
  border: none;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const LastRow = styled.tr`
  border: none;
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const TableCell = styled.td`
  border: none;
`;
