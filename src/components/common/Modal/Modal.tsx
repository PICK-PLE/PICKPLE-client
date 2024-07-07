import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { backdropStyle, modalContentStyle } from './Modal.style';

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

const potalElement = document.getElementById('modal') as HTMLElement;

const Modal = ({ onClose, children }: ModalProps) => {
  return createPortal(
    <>
      <div css={backdropStyle} onClick={onClose} />
      <div css={modalContentStyle} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </>,
    potalElement
  );
};

export default Modal;
