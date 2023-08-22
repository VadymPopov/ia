import styled from 'styled-components';
import background from '../images/hero-bg.jpg';
import { colors } from 'components/theme';

export const MainTitle = styled.h1`
    font-size: 72px;
    font-weight: 700;
    font-family: "Raleway", sans-serif;
    line-height: 1.1805555556;
    letter-spacing: .05em;
    margin-bottom: 20px;
    color: ${colors.mainLightColor};

`;

export const HeroDescription = styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 1.6666666667;
    width: 300px;
    color: ${colors.textColorDarkBg};
`;

export const HeroSection = styled.section`
    padding: 190px 20px;
    background-color: ${colors.cardColor};;
    overflow: hidden;
    position: relative;

&::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1200px;
  height: 680px; 
  background: url(${background}) center center/cover no-repeat;
  animation: rotateImage 20s linear infinite;
  transform: translate(-50%, -50%);

  @keyframes rotateImage {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg); 
  }
    }
  }
`;


export const HeroContainer = styled.div`
    position: relative;
    z-index: 50;
`;


export const List = styled.ul`
    display: flex;
`;

export const Item = styled.li`
    margin-right: 30px;
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 480px;
    text-align: left;
`;