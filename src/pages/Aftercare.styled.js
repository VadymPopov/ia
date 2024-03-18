import styled from 'styled-components';

export const ImageRight = styled.img`
  margin-left: 30px;
  max-width: 260px;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const ImageLeft = styled.img`
  margin-right: 30px;
  margin-bottom: 10px;
  max-width: 260px;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const TattooContainer = styled.div`
  background-color: #f7f7f7;
  padding: 20px;
`;

export const FlexContainer = styled.div`
  display: flex;
`;

export const Container = styled.div`
  padding: 20px;
`;
