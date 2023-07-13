import styled from 'styled-components';
import { colors } from 'components/theme';

export const Item = styled.li`
   display: flex;
   margin-bottom: 30px;
   padding: 20px;
   
   &:nth-of-type(2n){
    background-color: ${colors.backgroundColor};
   }
`;

export const Image = styled.img`
   border-radius: 5px;
   max-width: 320px;
`;

export const Card = styled.div`
  border: 2px solid ${colors.accentColor};
  border-radius: 5px;
  padding: 10px;
  margin-right: 50px;
  background-color: ${colors.cardColor};
  color: ${colors.mainLightColor};
`;

export const Description = styled.div`
    font-size: 18px;
    font-weight: 400;
    letter-spacing: .02em;
    line-height: 1.3;
    color: ${colors.mainLightColor};
    margin-top: 16px;
    padding: 10px;
    text-align: start;
`;

export const CardTitle = styled.p`
    font-size: 24px;
    font-weight: 600;
    color: ${colors.textColorDarkBg};
    margin-bottom: 10px;
    text-align: center;
`;

export const CardFooter = styled.div`
   text-align: center;
`;