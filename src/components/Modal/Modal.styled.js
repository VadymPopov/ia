import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 101;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background: #fff;
  width: 100%;
  height: 100%;
`;

export const ModalTitle = styled.h3`
  color: ${({ theme }) => theme.main};
  background: white;
  margin-bottom: 10px;
  font-size: 24px;
`;
