import { HTMLAttributes } from 'react';
import { createPortal } from 'react-dom';

import { IcExclamation } from '@svg';
import {
  toastIconStyle,
  toastMessageStyle,
  toastWrapperStyle,
} from 'src/components/common/Toast/Toast.style';

export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  toastIcon?: boolean;
  isVisible: boolean;
  toastBottom: number;
}

const portalElement = document.getElementById('modal') as HTMLElement;

const Toast = ({ toastIcon, children, isVisible, toastBottom, ...props }: ToastProps) => {
  return createPortal(
    <div css={toastWrapperStyle(isVisible, toastBottom)} {...props}>
      {toastIcon ? <IcExclamation css={toastIconStyle} /> : null}
      <span css={toastMessageStyle}>{children}</span>
    </div>,
    portalElement
  );
};

export default Toast;
