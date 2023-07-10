import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  /* position: fixed; */
  justify-content: space-between;
  width: 100%;
  padding-top: 32px;
  padding-bottom: 32px;
`;


export const Link = styled.a`
text-decoration: none;
color: black;

&:hover{
color: orange;
}

&:first-child {
  margin-right: 30px;
}
  
`;