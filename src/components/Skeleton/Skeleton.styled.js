import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const Info = styled.div`
  width: 568px;
  height: 222px;
  border-radius: 20px;
  margin-bottom: 20px;

  @media (max-width: 1023px) {
    width: auto;
  }
`;

export const Service = styled.div`
  width: 568px;
  height: 140px;
  border-radius: 20px;
  margin-bottom: 20px;

  @media (max-width: 1023px) {
    width: auto;
  }
`;

export const Time = styled.div`
  width: 568px;
  height: 742px;
  border-radius: 20px;
  margin-bottom: 20px;

  @media (max-width: 1023px) {
    width: auto;
  }
`;

export const Payment = styled.div`
  width: 470px;
  height: 730px;
  border-radius: 20px;
  margin-bottom: 20px;

  @media (min-width: 1024px) and (max-width: 1100px) {
    width: 390px;
  }

  @media (max-width: 1023px) {
    width: 300px;
  }
`;
