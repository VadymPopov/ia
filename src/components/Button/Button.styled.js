import styled from 'styled-components';

export const ButtonStyled = styled.button`
  padding: 12px 20px;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.33;
  text-transform: uppercase;
  width: 160px;
  border: 1px solid orange;
  border-radius: 25px;
  background-color: rgba(0,0,0,0);
  transition: background-color 250ms linear;
  cursor: pointer;

  &:hover {
    background-color: orange;
    box-shadow: black 0px 0px 5px 2px;
  }

  &:disabled {
    background: #dddddd;
    box-shadow: none;
    cursor: not-allowed;
  }
`;


  
