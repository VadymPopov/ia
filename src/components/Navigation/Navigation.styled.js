import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: block;
  color: black;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: .1em;
  white-space: nowrap;
  transition: color 250ms linear;
  text-decoration: none;
  margin-right: 30px;
  
  
  &.active{
    border-radius: 8px;
    border: 1px solid black;
  }
  &:focus, &:hover{
   color: rgba(255, 108, 0, 1);
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
`

export const LogoLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  text-transform: uppercase;
  padding: 10px 16px;
  font-weight: 700;
  margin-right: 70px;
  
  &.active{
    border-radius: 8px;
  }
`;

export const Logo = styled.img`
width: 60px;
height: 60px;
border-radius: 50%;
`