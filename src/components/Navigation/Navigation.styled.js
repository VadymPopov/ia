import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors } from 'components/theme';

export const Link = styled(NavLink)`
  display: block;
  color: ${colors.cardColor};
  font-weight: 600;
  font-size: 14px;
  line-height: 1.33;
  letter-spacing: .1em;
  white-space: nowrap;
  transition: color 250ms linear;
  text-decoration: none;
  padding: 5px 10px;

  @media (min-width: 480px) and (max-width: 768px) {
    font-size: 10px;
    padding: 5px 8px;
  }
  
  &.active{
    border-radius: 8px;
    border: 1px solid ${colors.textColorDarkBg};
    background-color: ${colors.backgroundColor};
  }
  &:focus, &:hover{
   color: ${colors.accentColor};
  }
`;

export const List = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const Item = styled.li`
  margin-right: 30px;

@media (min-width: 480px) and (max-width: 1024px) {
  margin-right: 15px;
}
  
`;

export const Nav = styled.nav`
  display: flex;
  column-gap: 30px;
  align-items: center;

  @media (min-width: 480px) and (max-width: 1024px) {
    column-gap: 0;
  }
`;

export const LogoLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  font-weight: 700;
  margin-right: 70px;

  @media (min-width: 480px) and (max-width: 1024px) {
    margin-right: 20px;
    margin-left: 10px;
  }
  
  &.active{
    border-radius: 8px;
  }
`;

export const Logo = styled.img`
  max-width: 60px;
  max-height: 60px;
  border-radius: 50%;

  @media (min-width: 480px) and (max-width: 1024px) {
    max-width: 50px;
    max-height: 50px;
  }
`;