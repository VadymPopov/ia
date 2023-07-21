import {useEffect} from "react";
import { createPortal } from 'react-dom';
import { ModalBackdrop, Content } from "./Modal.styled";

const modalRoot = document.querySelector('#modal-root');

function Modal ({onClose, children}) {

  useEffect(()=>{
        const handleKeyDown = event => {
            if (event.code === 'Escape') {
              onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return(()=>{
            window.removeEventListener('keydown', handleKeyDown);
        })
    },[onClose])

    const handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
         onClose();
        }
      };
   
        return createPortal(
            <ModalBackdrop onClick={handleBackdropClick}>
                <Content>
                {children}
                </Content>
            </ModalBackdrop>,
            modalRoot
        );
};

export default Modal;