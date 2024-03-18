import styled from 'styled-components';

export const ButtonStyled = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.33;
  text-transform: uppercase;
  width: 160px;
  height: 42px;
  border: 1px solid rgba(255, 108, 0, 1);
  border-radius: 25px;
  background: transparent;
  transition: background-color 250ms linear;
  cursor: pointer;
  color: ${props => (props.primary ? '#fff' : '#000')};

  &:hover {
    background-color: rgba(255, 108, 0, 1);
    box-shadow: black 0px 0px 5px 2px;
    color: ${props => (props.primary ? '#000' : '#fff')};
  }

  &:disabled {
    background-color: rgba(255, 108, 0, 1);
    color: ${props => (props.primary ? '#000' : '#fff')};
    box-shadow: none;
    cursor: not-allowed;
    opacity: 0.7;
  }
`;
