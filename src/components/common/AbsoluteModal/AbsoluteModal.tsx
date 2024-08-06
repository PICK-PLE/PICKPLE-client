import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

import { backdropStyle, modalContentStyle } from './AbsoluteModal.style';

interface ModalProps {
  onClose: () => void;
}

const potalElement = document.getElementById('modal') as HTMLElement;

const AbsoluteModal = ({ onClose, children }: PropsWithChildren<ModalProps>) => {
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

export default AbsoluteModal;
