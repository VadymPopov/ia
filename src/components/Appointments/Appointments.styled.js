import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (min-width: 600px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  @media screen and (max-width: 599px) {
    display: block;
  }
`;
