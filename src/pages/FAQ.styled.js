import styled from 'styled-components';
import { colors } from 'components/theme';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  /* display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0; */

  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  grid-gap: 10px;
  list-style: none;
  padding: 0;
`;

export const Item = styled.li`
  /* flex: 0 0 33.33%;
  box-sizing: border-box;
  padding: 10px; */

  padding: 10px;
`;

export const Question = styled.p`
    margin-bottom: 20px;
    font-family: "Raleway", sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 1.16;
    letter-spacing: .05em;
    color: ${colors.mainDarkColor};
`;

export const LinkTo = styled(Link)`
  text-decoration: underline;
  font-size: 18px;
  line-height: 1.67;
  letter-spacing: .02em;
  color: ${colors.textColor};
  text-align: justify;
`;