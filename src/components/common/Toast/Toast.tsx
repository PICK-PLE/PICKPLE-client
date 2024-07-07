import { IcExclamation } from '@svg';
import { HTMLAttributes } from 'react';

export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  icon: boolean;
  toastMessage: string;
}

const Toast = ({ icon, toastMessage, ...props }: ToastProps) => {
  return (
    <div css={} {...props}>
      {icon ? <IcExclamation /> : null}
      <span>{toastMessage}</span>
    </div>
  );
};

export default Toast;
