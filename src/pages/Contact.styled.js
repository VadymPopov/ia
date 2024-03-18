import styled from 'styled-components';
import { colors } from 'utils/theme';

export const FlexContainer = styled.div`
  display: flex;

  @media (max-width: 1024px) {
    display: block;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-weight: 500;
`;

export const Label = styled.p`
  font-size: 18px;
  line-height: 1.67;
  letter-spacing: 0.02em;
  color: ${colors.textColor};
  text-align: justify;
`;

export const StyledIcon = styled.div`
  font-size: 30px;
  color: ${colors.accentColor};
  margin-right: 10px;
`;

export const Link = styled.a`
  color: ${colors.accentColor};
  text-decoration: none;
  font-size: 18px;
  line-height: 1.67;
  letter-spacing: 0.02em;
  text-align: justify;
`;

export const FlexItem = styled.div`
  flex: 1;
`;
