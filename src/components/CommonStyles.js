import styled from 'styled-components';
import { colors } from './theme';

export const Title = styled.h2`
    margin-bottom: 20px;
    font-family: "Raleway", sans-serif;
    font-weight: 700;
    font-size: 42px;
    line-height: 1.16;
    letter-spacing: .05em;
    color: ${colors.mainDarkColor};

  @media (min-width: 480px) and (max-width: 1024px) {
    font-weight: 600;
    font-size: 36px;
    margin-bottom: 10px;
  }
  
  @media screen and (max-width: 479px) {
    font-weight: 600;
    font-size: 28px;
    margin-bottom: 10px;
  }
`;

export const Text = styled.p`
    margin-bottom: ${props => props.main ? "20px":"0"};
    font-size: 18px;
    line-height: 1.67;
    letter-spacing: .02em;
    color: ${props => props.primary ? `${colors.textColor}`:`${colors.mainDarkColor}`};
    text-align: justify;
    text-indent: 30px;

    @media (min-width: 480px) and (max-width: 1024px) {
    text-indent: 20px;
  }
  
    @media screen and (max-width: 479px) {
    margin-bottom: 10px;
    text-indent: 10px;
  }
`;

export const Section = styled.section`
    padding: 30px 20px;
    background-color:${props => props.primary ? `${colors.backgroundColor}`:`${colors.mainLightColor}`}; 
`;

export const Suptitle = styled.p`
    display: flex;
    align-items: center;
    margin: 20px 0;
    font-size: 11px;
    font-weight: 600;
    line-height: 1.3636363636;
    text-transform: uppercase;
    color: ${props => props.primary ? `${colors.mainDarkColor}`:`${colors.textColorDarkBg}`};

    &::before {
    content: "";
    display: block;
    margin-right: 20px;
    width: 60px;
    height: 1px;
    background-color:  ${props => props.primary ? '#303030':'rgba(157, 164, 189, 0.6)'};
    }
`;

export const Container = styled.div`
    display: flex;
`;

