import styled from 'styled-components';
import { colors } from 'utils/theme';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  list-style: none;
  padding: 0;

  @media (max-width: 1024px) {
    display: block;
  }
`;

export const Item = styled.li`
  padding: 10px;
`;

export const Question = styled.p`
  margin-bottom: 20px;
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.16;
  letter-spacing: 0.05em;
  color: ${colors.mainDarkColor};
`;

export const LinkTo = styled(Link)`
  text-decoration: underline;
  font-size: 18px;
  line-height: 1.67;
  letter-spacing: 0.02em;
  color: ${colors.textColor};
  text-align: justify;

  @media (max-width: 479px) {
    font-size: 14px;
  }
`;
