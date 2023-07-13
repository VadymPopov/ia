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
  margin-right: 30px;
  padding: 5px 10px;
  
  
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
`

export const Nav = styled.nav`
display: flex;
column-gap: 30px;
align-items: center;
`;

export const LogoLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  font-weight: 700;
  margin-right: 70px;
  
  &.active{
    border-radius: 8px;
  }
`;

export const Logo = styled.img`
max-width: 60px;
max-height: 60px;
border-radius: 50%;
`