import styled from 'styled-components';
import background from '../images/hero-bg.jpg';
import { colors } from 'components/theme';

export const MainTitle = styled.h1`
    font-size: 72px;
    font-weight: 700;
    font-family: "Raleway", sans-serif;
    line-height: 1.1805555556;
    letter-spacing: .05em;
    margin-bottom: 20px;
    color: ${colors.mainLightColor};

`;

export const Description = styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 1.6666666667;
    width: 300px;
    color: ${colors.textColorDarkBg};
`;

export const Section = styled.section`
    padding: 190px 20px;
    background-image: url(${background});
    background-position: center;
    background-repeat: no-repeat;
`;