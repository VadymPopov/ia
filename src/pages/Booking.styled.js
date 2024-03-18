import styled from 'styled-components';
import background from '../images/hero-bg.jpg';
import { colors } from 'utils/theme';

import { RxDoubleArrowRight } from 'react-icons/rx';
import { GiCat, GiHollowCat } from 'react-icons/gi';
import { FaCat } from 'react-icons/fa';
import { RiLogoutCircleRFill } from 'react-icons/ri';
import { SiGnuicecat } from 'react-icons/si';

export const ArrowIcon = styled(RxDoubleArrowRight)`
  width: 15px;
  height: 15px;
  color: ${colors.textColorDarkBg};
`;

export const CatIcon = styled(GiCat)`
  width: 30px;
  height: 30px;
  color: ${colors.cardColor};
`;

export const HollowCatIcon = styled(GiHollowCat)`
  width: 30px;
  height: 30px;
  color: ${colors.cardColor};
`;

export const HelloCat = styled(FaCat)`
  width: 30px;
  height: 30px;
  color: ${colors.cardColor};
`;

export const BallCat = styled(SiGnuicecat)`
  width: 30px;
  height: 30px;
  color: ${colors.cardColor};
`;

export const LogOut = styled(RiLogoutCircleRFill)`
  width: 30px;
  height: 30px;
  color: ${colors.cardColor};
  margin-left: 5px;
`;

export const Button = styled.button`
  font-weight: 600;
  font-size: 12px;
  color: ${props =>
    props.active ? `${colors.accentColor}` : `${colors.textColorDarkBg}`};
  border: none;
  background: none;
  cursor: pointer;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${props =>
      props.active ? `${colors.accentColor}` : `${colors.cardColor}`};
  }

  &:disabled {
    cursor: not-allowed;
    color: ${colors.textColorDarkBg};
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
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

export const AdminFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
`;
