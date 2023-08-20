import styled from 'styled-components';

export const LayoutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  
`;

export const Main = styled.main`
  margin-top: 92px;

  @media (min-width: 480px) and (max-width: 1024px) {
    margin-top: 62px;
  }
  
  @media screen and (max-width: 479px) {
    margin-top: 32px;
  }
`;


