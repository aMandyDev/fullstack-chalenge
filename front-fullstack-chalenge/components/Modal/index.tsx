import React from 'react';
import ReactDOM from 'react-dom';
import { ModalOverlay, ModalContainer, ModalHeader } from './style';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
    if (!isOpen) return null;

    const modalRoot = document.getElementById('modal-root');
    if (!modalRoot) return null;

    return ReactDOM.createPortal(
        <ModalOverlay>
            <ModalContainer>
                <ModalHeader>
                    <h2>{title}</h2>
                    <button onClick={onClose}>Fechar</button>
                </ModalHeader>
                <div>{children}</div>
            </ModalContainer>
        </ModalOverlay>,
        modalRoot
    );
};

export default Modal;
