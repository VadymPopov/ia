import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  max-width: 1200px;
  padding-top: 16px;
  padding-bottom: 16px;
  position: fixed;
  background-color: #fff;
  overflow: hidden;
  top: 0;
  z-index: 100;

  @media (min-width: 480px) and (max-width: 1024px) {
    padding-top: 8px;
    padding-bottom: 8px;
  }
  
  @media screen and (max-width: 479px) {

  }
`;
