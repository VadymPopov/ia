import styled from "styled-components";

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
   /* justify-content: center;
   align-items: center; */
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   /* width: 100%; */
   background: #fff;
   /* z-index: 101; */
`;

export const ModalTitle = styled.h3`
   color: ${({theme}) => theme.main};
   background: white;
   margin-bottom: 10px;
   font-size: 24px;
`;


