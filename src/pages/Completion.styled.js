import styled from 'styled-components';

import { BsFillCheckCircleFill } from 'react-icons/bs';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  padding: 30px;
  position: relative;
`;

export const Icon = styled(BsFillCheckCircleFill)`
  width: 30px;
  height: 30px;
  color: green;
  margin-left: 20px;
`;

export const BackBtn = styled.button`
  display: flex;
  align-items: center;
  position: absolute;
  top: 40px;
  left: 40px;
  padding: 12px 20px;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.33;
  text-transform: uppercase;
  border: 1px solid rgba(255, 108, 0, 1);
  border-radius: 25px;
  background: transparent;
  transition: background-color 250ms linear;
  cursor: pointer;
  color: '#fff';

  &:hover {
    background-color: rgba(255, 108, 0, 1);
    box-shadow: black 0px 0px 5px 2px;
    color: '#000';
  }
`;
