import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 32px;
  padding-bottom: 32px;
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
}

&:first-child {
  margin-right: 30px;
}
  
`;