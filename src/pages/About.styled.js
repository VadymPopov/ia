import styled from 'styled-components';

export const List = styled.ul`
    display: flex;
    &:first-child {
        display: none;
    }
`;

export const Item = styled.li`
    margin-right: 30px;

`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 480px;
    text-align: left;
`;