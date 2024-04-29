import styled from 'styled-components';

export const OkButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 10px;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.33;
  text-transform: uppercase;
  border: 1px solid rgba(255, 108, 0, 1);
  border-radius: 15px;
  background: transparent;
  transition: background-color 250ms linear;
  cursor: pointer;
  color: '#000';

  &:hover {
    background-color: rgba(255, 108, 0, 1);
    box-shadow: black 0px 0px 5px 2px;
    color: '#fff';
  }

  &:disabled {
    background-color: rgba(255, 108, 0, 1);
    color: '#fff';
    box-shadow: none;
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

export const FlexContainerAlignEnd = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;
