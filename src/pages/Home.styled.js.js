import styled from 'styled-components';
import background from '../images/hero-bg.jpg';
import { colors } from 'utils/theme';

export const MainTitle = styled.h1`
  font-size: 72px;
  font-weight: 700;
  font-family: 'Raleway', sans-serif;
  line-height: 1.1805555556;
  letter-spacing: 0.05em;
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
  background-color: ${colors.cardColor};
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
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

  @media (min-width: 1024px) and (max-width: 1199px) {
    margin-bottom: 40px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    > :last-child {
      display: none;
    }
  }
  @media (max-width: 768px) {
    justify-content: space-evenly;
    > :last-child {
      margin-right: 0;
    }
  }
`;

export const Item = styled.li`
  margin-right: 30px;
`;

export const Description = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  text-align: left;
`;

export const Container = styled.div`
  display: flex;
  align-items: end;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const ToastContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

export const ToastSpan = styled.span`
  margin-bottom: 10px;
`;

export const Link = styled.a`
  text-decoration: underline;
  line-height: 1.67;
  letter-spacing: 0.02em;
  color: ${colors.textColor};
  text-align: justify;
`;
