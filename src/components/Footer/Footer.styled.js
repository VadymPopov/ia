import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 32px;
  padding-bottom: 32px;
`;

export const LinksContainer = styled.div`
  display: flex;
`;

export const Link = styled.a`
display: flex;
justify-content: center;
align-items: center; 
background-color: gray;
color:#303030;
border-radius: 50%;
width: 44px;
height: 44px;
transition: color 250ms linear;
text-decoration: none;

&:hover{
color: orange;
background: #fff;
}

&:first-child {
  margin-right: 30px;
}
`;

export const DevLink = styled.a`
  transition: color 250ms linear;
  text-decoration: none;
  color: #000;

&:hover{
color: orange;
}
`;