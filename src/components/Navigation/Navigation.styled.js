import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors } from 'utils/theme';
import { CgMenu, CgClose } from 'react-icons/cg';

export const Header = styled.header`
  width: 100%;
  max-width: 1200px;
  padding-top: 16px;
  padding-bottom: 16px;
  position: fixed;
  background-color: ${props => (props.mobile ? '#000' : '#fff')};
  overflow: hidden;
  top: 0;
  z-index: 100;

  @media (min-width: 1024px) and (max-width: 1280px) {
    padding-top: 12px;
    padding-bottom: 12px;
  }
`;

export const Link = styled(NavLink)`
  display: block;
  color: ${colors.cardColor};
  font-weight: 600;
  font-size: 14px;
  line-height: 1.33;
  letter-spacing: 0.1em;
  white-space: nowrap;
  transition: color 250ms linear;
  text-decoration: none;
  padding: 5px 10px;

  &.active {
    border-radius: 8px;
    border: 1px solid ${colors.textColorDarkBg};
    background-color: ${colors.backgroundColor};
  }

  @media (min-width: 1024px) and (max-width: 1280px) {
    padding: 5px 8px;
  }

  @media (max-width: 1024px) {
    color: ${colors.mainLightColor};
    font-size: 24px;

    &.active {
      border: none;
      background-color: transparent;
    }
  }

  &:focus,
  &:hover {
    color: ${colors.accentColor};
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const List = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
  margin-right: 20px;

  @media (max-width: 1024px) {
    flex-direction: column;
    margin: 0;
    align-items: center;
  }
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-right: 30px;
  }

  @media (max-width: 1024px) {
    &:not(:last-child) {
      margin-bottom: 20px;
      margin-right: 0;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  font-weight: 700;
  margin-left: 20px;

  @media (max-width: 1200px) {
    margin-right: 20px;
    margin-left: 10px;
  }

  &.active {
    border-radius: 8px;
  }
`;

export const Logo = styled.img`
  max-width: 60px;
  max-height: 60px;
  border-radius: 50%;
`;

export const MobileBtn = styled.button`
  color: white;
  background: transparent;
  outline: none;
  border: none;
  width: 50px;
  height: 50px;
  margin-right: 20px;
  cursor: pointer;
`;

export const BurgerIcon = styled(CgMenu)`
  width: 30px;
  height: 30px;
`;

export const CrossIcon = styled(CgClose)`
  width: 30px;
  height: 30px;
`;

export const MobileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: ${props => (props.open ? '' : 'fixed')};
  background-color: ${colors.cardColor};
  right: 0;
  z-index: 1000;
  padding: 40px 20px;
  overflow: auto;

  height: ${props => props.height && `${Number(props.height) - Number(160)}px`};
  transition: opacity 1s ease-in-out,
    transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  transform: ${props =>
    props.open
      ? 'translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)'
      : 'translate3d(100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)'};
  opacity: ${props => (props.open ? 1 : 0)};
  transform-style: preserve-3d;
`;
