import styled from 'styled-components';


export const List = styled.ul`
    display: flex;

`;

export const Item = styled.li`
    margin-right: 30px;

`;

export const Container = styled.div`
    display: flex;
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 480px;
    text-align: left;
`;


export const Title = styled.h2`
    margin-bottom: 20px;
    font-family: "Raleway", sans-serif;
    font-weight: 700;
    font-size: 42px;
    line-height: 1.16;
    letter-spacing: .05em;
    color: #303030;
`;

export const Text = styled.p`
    margin-bottom: 20px;
    font-size: 18px;
    line-height: 1.67;
    letter-spacing: .02em;
    color: gray;
    text-align: justify;
    text-indent: 30px;
`;


export const Section = styled.section`
    padding: 20px 20px;
    background-color:#f7f7f7; 
`;
