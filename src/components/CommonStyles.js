import styled from 'styled-components';
import { colors } from '../utils/theme';

export const Title = styled.h2`
  margin-bottom: 20px;
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  font-size: 42px;
  line-height: 1.16;
  letter-spacing: 0.05em;
  color: ${colors.mainDarkColor};
  text-align: ${props => (props.align ? 'end' : 'start')};

  @media (min-width: 480px) and (max-width: 1024px) {
    font-weight: 600;
    font-size: 36px;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 479px) {
    font-weight: 600;
    font-size: 24px;
    margin-bottom: 10px;
    text-align: ${props => (props.mobile ? 'end' : 'start')};
    letter-spacing: 0;
  }
`;

export const Text = styled.p`
  margin-bottom: ${props => (props.main ? '20px' : '0')};
  font-size: 18px;
  line-height: 1.67;
  letter-spacing: 0.02em;
  color: ${props =>
    props.primary ? `${colors.textColor}` : `${colors.mainDarkColor}`};
  text-align: justify;
  text-indent: 30px;

  @media (min-width: 480px) and (max-width: 1024px) {
    text-indent: 20px;
  }

  @media screen and (max-width: 479px) {
    text-indent: 10px;
    font-size: 14px;
  }
`;

export const Section = styled.section`
  padding: 30px 20px;
  background-color: ${props =>
    props.primary ? `${colors.backgroundColor}` : `${colors.mainLightColor}`};
`;

export const Suptitle = styled.p`
  display: flex;
  align-items: center;
  margin: 20px 0;
  font-size: 11px;
  font-weight: 600;
  line-height: 1.3636363636;
  text-transform: uppercase;
  color: ${props =>
    props.primary ? `${colors.mainDarkColor}` : `${colors.textColorDarkBg}`};

  &::before {
    content: '';
    display: block;
    margin-right: 20px;
    width: 60px;
    height: 1px;
    background-color: ${props =>
      props.primary ? '#303030' : 'rgba(157, 164, 189, 0.6)'};
  }
`;

export const Container = styled.div`
  display: flex;
`;

export const SubTitle = styled.h3`
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  letter-spacing: 0.05em;
  color: ${colors.mainDarkColor};
  text-align: start;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 1.16;
  }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
`;
