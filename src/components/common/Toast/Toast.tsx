import { IcExclamation } from '@svg';
import { HTMLAttributes } from 'react';
import {
  toastIconStyle,
  toastMessageStyle,
  toastWrapperStyle,
} from 'src/components/common/Toast/Toast.style';
import { useTheme } from '@emotion/react';

export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  toastIcon: boolean;
  isVisible: boolean;
  toastBottom: number;
}

const Toast = ({ toastIcon, children, isVisible, toastBottom, ...props }: ToastProps) => {
  const theme = useTheme();
  return (
    <div css={toastWrapperStyle(theme, isVisible, toastBottom)} {...props}>
      {toastIcon ? <IcExclamation css={toastIconStyle} /> : null}
      <span css={toastMessageStyle}>{children}</span>
    </div>
  );
};

export default Toast;
