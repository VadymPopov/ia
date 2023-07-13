import styled from 'styled-components';
import background from '../images/hero-bg.jpg'

export const Suptitle = styled.p`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    font-size: 11px;
    font-weight: 600;
    line-height: 1.3636363636;
    text-transform: uppercase;
    color: gray;

    &::before {
    content: "";
    display: block;
    margin-right: 20px;
    width: 60px;
    height: 1px;
    background-color: gray;
    }
`;


export const MainTitle = styled.h1`
    font-size: 72px;
    font-weight: 700;
    font-family: "Raleway", sans-serif;
    line-height: 1.1805555556;
    letter-spacing: .05em;
    margin-bottom: 20px;
    color: white;

`;

export const Description = styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 1.6666666667;
    width: 300px;
    color: gray;
`;

export const Section = styled.section`
    padding: 190px 20px;
    /* background-image: linear-gradient(to right, rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4)), url(${background}); */
    background-image: url(${background});
    /* background-size: contain; */
    /* filter: brightness(150%); */
    background-position: center;
  background-repeat: no-repeat;
  /* background-size: cover; */

`;