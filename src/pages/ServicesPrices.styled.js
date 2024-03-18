import styled from 'styled-components';
import { colors } from 'utils/theme';

export const Item = styled.li`
  display: flex;
  margin-bottom: 30px;
  padding: 20px;

  &:nth-of-type(2n) {
    background-color: ${colors.backgroundColor};
  }

  @media (max-width: 1023px) {
    flex-direction: column-reverse;
    margin-bottom: 0;
  }
`;

export const Image = styled.img`
  border-radius: 5px;
  max-width: 320px;

  @media (max-width: 599px) {
    max-width: 100%;
  }
`;

export const Card = styled.div`
  border: 2px solid ${colors.accentColor};
  border-radius: 5px;
  padding: 10px;
  margin-right: 50px;
  background-color: ${colors.cardColor};
  color: ${colors.mainLightColor};

  @media (max-width: 1023px) {
    display: flex;
    margin-right: 0;
    margin-top: 20px;
  }

  @media (max-width: 599px) {
    display: block;
  }
`;

export const Description = styled.div`
  font-size: 18px;
  /* font-weight: 400; */
  letter-spacing: 0.02em;
  line-height: 1.3;
  color: ${colors.mainLightColor};
  margin-top: 16px;
  padding: 10px;
  text-align: start;
`;

export const CardTitle = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: ${colors.textColorDarkBg};
  margin-bottom: 10px;
  text-align: center;
`;

export const CardFooter = styled.div`
  text-align: center;

  @media (min-width: 600px) and (max-width: 1023px) {
    flex: 1;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
`;
